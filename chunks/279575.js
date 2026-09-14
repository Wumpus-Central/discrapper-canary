(i.r(t), i.d(t, { default: () => eX }));
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(17928),
    d = i(834730),
    c = i(289873),
    u = i(689175),
    o = i(250527),
    m = i(868652),
    g = i(645619),
    f = i(71393),
    h = i(562708),
    _ = i(636537),
    E = i(228366),
    A = i(499785),
    x = i(716357);
function p(e) {
    return !(e instanceof _.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var v = i(652215);
let I = 0;
async function S(e) {
    let t = I++;
    E.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: i } = await A.A.get({
            url: v.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: h.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: i });
    } catch (i) {
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: p(i) });
    }
}
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = x.A.getFetchStatus(e),
        l = t && "error" === i && !x.A.isInBackoff(e);
    ("idle" === i || l) && (await S(e));
}
async function D(e) {
    await S(e);
}
async function C(e, t) {
    let { body: i } = await _.Bo.patch({ url: v.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
async function T(e) {
    E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await _.Bo.get({ url: v.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var j = i(960960),
    G = i(754674);
let b = {};
function N(e) {
    let t = b[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class L extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return b[e]?.draft;
    }
    isEditing(e) {
        return null != b[e];
    }
    getSaveStatus(e) {
        return b[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return b[e]?.saveErrorMessage;
    }
}
let U = new L(E.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        b[t] = { draft: { header: i.header, widgets: (0, G.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = N(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, G.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = N(t);
        if (null == a) return !1;
        let r = (0, G.Gm)(a.draft.widgets, i, l, n);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            l = N(t);
        if (null == l) return !1;
        let n = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (n.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, G.W$)(n) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: l } = e,
            n = N(t);
        if (null == n) return !1;
        let a = n.draft.widgets.map((e) => (e.id === i ? { ...e, config: l } : e));
        n.draft = { ...n.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: i } = e,
            l = N(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            l = b[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = i), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i, errorMessage: l } = e,
            n = b[t];
        if (n?.activeSaveRequestId !== i) return !1;
        (delete n.activeSaveRequestId, (n.saveStatus = "error"), (n.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == b[t]) return !1;
        delete b[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == b[t]) return !1;
        delete b[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == b[t]) return !1;
        delete b[t];
    },
    LOGOUT: function () {
        b = {};
    },
});
var w = i(913122),
    P = i(593673);
let R = "draft:",
    k = 0,
    M = 0;
function F(e) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function W(e, t, i, l) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
function O(e, t) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function B(e) {
    let t = U.getDraft(e);
    if (null == t || "saving" === U.getSaveStatus(e)) return;
    let i = {};
    void 0 !== t.header.custom_banner && (i.custom_banner = t.header.custom_banner);
    let l = {
            header: i,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: l, config: n } = e,
                    a = {
                        type: i,
                        position: l,
                        config: (function (e) {
                            if (e.type === P.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return (void 0 !== e.image && (t.image = e.image), t);
                            }
                            return e;
                        })(n),
                    };
                return (t.startsWith(R) || (a.id = t), a);
            }),
        },
        n = M++;
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: n });
    try {
        let { body: t } = await _.Bo.put({ url: v.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (a) {
        let i = (function (e, t) {
                if (e instanceof _.oh)
                    for (let [i, l] of Object.entries(
                        new w.LG({ status: e.status, body: e.body }).getAllFieldErrors(),
                    )) {
                        let [e, n] = i.split(".");
                        if ("widgets" !== e) continue;
                        let a = Number(n),
                            r = Number.isInteger(a) ? t[a] : void 0,
                            s = l[0]?.message;
                        if (null != r && null != s) return { type: r.type, message: s };
                    }
            })(a, t.widgets),
            l = i?.message;
        if (null != i) {
            let t = j.A.getWidget(e, i.type)?.name;
            null != t && (l = `${t}: ${i.message}`);
        }
        E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: n, errorMessage: l });
    }
}
var H = i(363957);
let K = 0;
async function z(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = H.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = K++;
    E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await _.Bo.get({
            url: v.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: p(t) });
    }
}
var $ = i(470452),
    V = i(344351),
    Y = i(795816),
    q = i(933958),
    X = i(44167),
    J = i(872188),
    Q = i(868285),
    Z = i(36525),
    ee = i(871682),
    et = i(331322),
    ei = i(821609),
    el = i(499373),
    en = i(866665),
    ea = i(189213),
    er = i(939249),
    es = i(104510),
    ed = i(661531),
    ec = i(245604),
    eu = i(192308),
    eo = i(775602),
    em = i(61567),
    eg = i(375708),
    ef = i(517228);
function eh(e) {
    let { widget: t, onClick: i } = e,
        n = (0, s.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = t.assets,
        c = (n ? null : r) ?? a,
        u = t.boost_price;
    return (0, l.jsxs)(er.D, {
        className: ef.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: ef.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: ef.YI, src: c, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: ef.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(es._, {
                                size: "sm",
                                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ef.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: ef.Ti, children: (0, l.jsx)("div", { className: ef.dK }) }),
                            (0, l.jsxs)(et.B, {
                                className: ef.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ec.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: eg.intl.string(em.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(et.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != u && u > 0
                        ? (0, l.jsxs)(et.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(es._, { size: "sm", color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eg.intl.format(em.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: eg.intl.string(em.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { guildId: t, ...i } = e,
        a = (0, s.yK)(
            [j.A, U],
            () => {
                let e = U.getDraft(t)?.widgets ?? [];
                var i = j.A.getWidgets(t) ?? [];
                let l = new Map();
                for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
                return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
            },
            [t],
        );
    return (
        n.useEffect(() => {
            T(t);
        }, [t]),
        (0, l.jsx)(ea.Modal, {
            title: eg.intl.string(em.default.L8Xfoo),
            subtitle: eg.intl.string(em.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: ef.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        eh,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n, a;
                                ((l = e.type),
                                    (n = e.name),
                                    (a = e.locked),
                                    E.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, i) {
                                            let l = {
                                                id: `${R}${k++}`,
                                                position: { column: G.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: i,
                                            };
                                            switch (e) {
                                                case P.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case P.a.LEADERBOARD:
                                                case P.a.WHITEBOARD:
                                                case P.a.POPULAR_MUSIC:
                                                case P.a.LIVE_ACTIVITY:
                                                    return { ...l, type: e, config: { type: e } };
                                            }
                                        })(l, n, a),
                                    }),
                                    i.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
var eE = i(992303);
function eA(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, s.bG)([U], () => U.getSaveStatus(t), [t]),
        r = (0, s.bG)([U], () => U.getDraft(t)?.widgets.length ?? 0, [t]),
        c = (0, s.bG)([U], () => U.getSaveErrorMessage(t), [t]),
        u = "saving" === a,
        o = c ?? eg.intl.string(em.default.HmFYc5),
        m = n.useCallback(() => {
            B(t);
        }, [t]),
        g = n.useCallback(() => {
            F(t);
        }, [t]);
    return (0, l.jsx)(Q.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(ee.F, {
                className: eE.K,
                children: (0, l.jsx)(Z.A, {
                    submitting: u,
                    disabled: u,
                    onSave: m,
                    onReset: u ? void 0 : g,
                    message: (0, l.jsxs)(et.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(ei.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: el.T,
                                text: eg.intl.string(em.default.L8Xfoo),
                                disabled: u,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(e_, { guildId: t, ...e })),
                                        void (0, eu.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === a
                                ? (0, l.jsx)(en.m, {
                                      text: o,
                                      children: (0, l.jsx)(d.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: o,
                                      }),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: eg.intl.format(em.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var ex = i(686246),
    ep = i(651300),
    ev = i(451395),
    eI = i(42499),
    eS = i(539888),
    ey = i(179105),
    eD = i(294918);
let eC = "GUILD_SPACE_WIDGET",
    eT = "GUILD_SPACE_WIDGETS",
    ej = `${eC}_${eT}`;
function eG(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: c,
            flatIndex: u,
            leftColumnCount: o,
            onReorder: m,
            isSaving: g,
        } = e,
        f = n.useRef(null),
        h = n.useRef(null),
        _ = (0, s.bG)([H.A], () => (i.requires_hydration ? H.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        A = (0, eI.K)(t, i),
        { isDragging: x, dragSourcePosition: p } = (0, ev.gY)({
            dragRef: f,
            dropRef: h,
            index: u,
            listType: eT,
            itemType: eC,
            itemId: i.id,
            onReorder: m,
            canDrag: !g,
        }),
        v = null == p ? null : p < o ? G.FT : G.yM,
        I = null != v && v !== a;
    return (0, l.jsx)("div", {
        ref: h,
        className: r()(eD.NI, { [eD.cB]: x, [eD.ne]: null != p && (I || p > u), [eD.O3]: null != p && !I && p < u }),
        "data-dnd-name": eg.intl.formatToPlainString(a === G.yM ? em.default.O9RvHQ : em.default["+cSvS8"], {
            positionNumber: d,
            positionCount: c,
        }),
        children: (0, l.jsx)(eS.P, {
            guildId: t,
            widget: i,
            guildSpaceMode: "edit",
            hydration: _,
            lock: A,
            dragHandleRef: f,
            disabled: g,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void E.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void E.h.dispatch({
                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                        guildId: t,
                        widgetId: l,
                        config: e,
                    })
                );
            },
        }),
    });
}
function eb(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: s }, d] = (0, ep.H)({
            accept: ej,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        n.useLayoutEffect(
            () => (
                d(a),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", {
            ref: a,
            className: r()(eD.wr, { [eD.SX]: s }),
            "data-dnd-name": eg.intl.string(t === G.yM ? em.default.fWef0G : em.default.KcdDyT),
        })
    );
}
function eN(e) {
    let { guildId: t, widgets: i } = e,
        a = n.useMemo(() => (0, G.Rl)(i), [i]),
        r = n.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ey.m[t];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...r[G.FT], ...r[G.yM]], [r]),
        c = (0, ex.V)((e) => e.isDragging() && e.getItemType() === ej),
        u = (0, s.bG)([U], () => "saving" === U.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && W(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        m = n.useCallback(
            (e, i) => {
                W(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, l.jsx)("div", {
        className: eD.Vg,
        children: r.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: eD.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                eG,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === G.yM ? r[G.FT].length + a : a,
                                    leftColumnCount: r[G.FT].length,
                                    onReorder: o,
                                    isSaving: u,
                                },
                                n.id,
                            ),
                        ),
                        c && !u && (0, l.jsx)(eb, { column: i, onDropAtEnd: m }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eL = i(529609),
    eU = i(408278),
    ew = i(241326),
    eP = i(297264),
    eR = i(22231),
    ek = i(654107),
    eM = i(548118),
    eF = i(837011),
    eW = i(649640),
    eO = i(2553),
    eB = i(405810),
    eH = i(498642),
    eK = i(486020),
    ez = i(488428),
    e$ = i(776231),
    eV = i(986898);
function eY(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: r, isSaving: c } = e,
        u = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = (0, s.bG)([eH.A], () => eH.A.getOnlineCount(t), [t]),
        m = (0, s.bG)([eH.A], () => eH.A.getMemberCount(t), [t]),
        g = i.custom_banner,
        h = (0, s.bG)([eF.A], () => eF.A.getProfile(t), [t]),
        _ = (0, eW.b2)().hex(),
        A = null == u ? null : eK.Ay.getGuildIconURL({ id: u.id, icon: u.icon, size: 64 }),
        p = (0, ek.Ay)(A, _),
        I = (0, eW.n6)(h?.brandColorPrimary ?? p),
        S = n.useMemo(
            () =>
                null == u
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eK.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = v.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  r = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  s = { size: (0, e$.kr)(1200 * (0, e$.mZ)()) };
                              return ("jpg" === i && (s.quality = "lossless"), (r += `?${ez.stringify(s)}`));
                          })(u.id, i.custom_banner_hash)
                        : eK.Ay.getGuildBannerURL({ id: u.id, banner: u.banner }),
            [u, g, i.custom_banner_hash],
        ),
        y = "string" == typeof g || (void 0 === g && null != i.custom_banner_hash);
    return null == u
        ? null
        : (0, l.jsxs)("div", {
              className: eV.wx,
              children: [
                  null != S
                      ? (0, l.jsx)("img", { className: eV.vK, src: S, alt: "" })
                      : (0, l.jsx)("div", { className: eV.vK, style: { background: I }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eV.f5, "aria-hidden": !0 }),
                  r
                      ? (0, l.jsxs)("div", {
                            className: eV.j0,
                            children: [
                                (0, l.jsx)(eB.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: eg.intl.string(em.default["EN+0gW"]),
                                    onChange: (e) => O(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eO.A)(0xa00000),
                                    disabled: c,
                                }),
                                y
                                    ? (0, l.jsx)(en.m, {
                                          text: eg.intl.string(em.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eU.K, {
                                              variant: "critical-secondary",
                                              icon: ew.TrashIcon,
                                              "aria-label": eg.intl.string(em.default["CunK+J"]),
                                              onClick: () => O(t, null),
                                              disabled: c,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eV.D_,
                      children: [
                          (0, l.jsx)(eM.Ay, {
                              className: eV.Kk,
                              guild: u,
                              size: eM.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eV.pq,
                              children: [
                                  (0, l.jsx)(eP.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: u.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eV.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eV.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eV.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(em.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != m
                                              ? (0, l.jsxs)("div", {
                                                    className: eV.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eV.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(em.default["rp7bx+"], {
                                                                count: m,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eV.dJ,
                                              children: [
                                                  (0, l.jsx)(es._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eg.intl.format(em.default.DwFqrb, {
                                                          count: u.premiumSubscriberCount,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  a &&
                      !r &&
                      (0, l.jsx)(ei.$, {
                          icon: eR.PencilIcon,
                          text: eg.intl.string(em.default.KcOpCm),
                          size: "sm",
                          onClick: () => {
                              let e;
                              null != (e = x.A.getSpace(t)) &&
                                  E.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eq = i(312152);
function eX(e) {
    let t,
        { guildId: i } = e,
        a = n.useRef(null),
        [h, _, E] = (0, s.yK)([x.A], () => [x.A.getSpace(i), x.A.getFetchStatus(i), x.A.isInBackoff(i)], [i]);
    (n.useEffect(() => {
        let e = a.current !== i;
        ((a.current = i), y(i, e));
    }, [_, i]),
        n.useEffect(() => {
            (0, o.L4)(i, !1, { respectBackoff: !0 });
        }, [i]),
        (t = (0, X.n)()),
        n.useEffect(
            () => () => {
                if (null == t) return;
                let e = q.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === V.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, Y._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let A = (0, s.bG)([f.A], () => f.A.getGuild(i), [i]),
        p = (0, $.mN)(A),
        v = (0, s.bG)([j.A], () => j.A.getFetchStatus(i), [i]);
    n.useEffect(() => {
        p && "idle" === v && T(i);
    }, [p, v, i]);
    let I = A?.guildSpaceSettings?.publish_status !== P.B.PUBLISHED,
        S = n.useCallback(() => C(i, { publish_status: P.B.PUBLISHED }), [i]),
        [G, b] = (0, s.yK)([U], () => [U.getDraft(i), U.getSaveStatus(i)], [i]),
        N = p && null != G,
        L = N ? G.widgets : h?.widgets,
        w = n.useMemo(() => L?.some((e) => e.locked) ?? !1, [L]);
    n.useEffect(() => {
        p && w && ((0, m.AK)(i), (0, m.Xd)(i));
    }, [p, i, w]);
    let R = (0, s.bG)(
        [g.A, j.A],
        () =>
            h?.widgets.some((e) => {
                let t = j.A.getWidget(i, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(i)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [i, h],
    );
    (n.useEffect(() => {
        R && D(i);
    }, [i, R]),
        n.useEffect(() => {
            p || null == G || "saving" === b || F(i);
        }, [p, G, b, i]));
    let k = n.useMemo(
            () =>
                (L ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [L],
        ),
        M = (0, s.yK)([H.A], () => H.A.getWidgetIdsToHydrate(i, k), [i, k]),
        W = n.useRef(null);
    return (n.useEffect(() => {
        if (W.current !== i && null != h) {
            ((W.current = i), z(i, k, !0));
            return;
        }
        z(i, M);
    }, [i, h, k, M]),
    null == h || null == L)
        ? (0, l.jsx)("div", {
              className: eq.MY,
              children: (0, l.jsx)("div", {
                  className: eq.F,
                  children:
                      "error" !== _ || E
                          ? (0, l.jsx)(c.y, {
                                type: c.y.Type.SPINNING_CIRCLE,
                                "aria-label": eg.intl.string(eg.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: eg.intl.string(eg.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eq.MY,
              children: [
                  (0, l.jsx)(u.Gt, {
                      className: eq.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(eq.Qs, { [eq.Dy]: N }),
                          children: [
                              p && I ? (0, l.jsx)(J.A, { onPublish: S }) : null,
                              (0, l.jsx)(eY, {
                                  guildId: i,
                                  header: N ? G.header : h.header,
                                  isEditing: N,
                                  canEdit: p,
                                  isSaving: "saving" === b,
                              }),
                              N
                                  ? (0, l.jsx)(eN, { guildId: i, widgets: L })
                                  : (0, l.jsx)(eL.A, { canEdit: p, guildId: i, widgets: L }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eA, { guildId: i, isEditing: N }),
              ],
          });
}
