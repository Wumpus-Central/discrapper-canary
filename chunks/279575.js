(i.r(t), i.d(t, { default: () => eX }));
var l = i(477900),
    n = i(582128),
    a = i(503698),
    s = i.n(a),
    r = i(17928),
    d = i(834730),
    u = i(289873),
    c = i(689175),
    o = i(250527),
    _ = i(868652),
    g = i(645619),
    E = i(71393),
    f = i(562708),
    h = i(636537),
    m = i(228366),
    A = i(499785),
    p = i(716357);
function I(e) {
    return !(e instanceof h.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var S = i(652215);
let D = 0;
async function C(e) {
    let t = D++;
    m.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: i } = await A.A.get({
            url: S.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: f.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        m.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: i });
    } catch (i) {
        m.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: I(i) });
    }
}
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = p.A.getFetchStatus(e),
        l = t && "error" === i && !p.A.isInBackoff(e);
    ("idle" === i || l) && (await C(e));
}
async function x(e) {
    await C(e);
}
async function y(e, t) {
    let { body: i } = await h.Bo.patch({ url: S.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
async function T(e) {
    m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await h.Bo.get({ url: S.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var G = i(960960),
    j = i(754674);
let L = {};
function b(e) {
    let t = L[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class U extends r.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return L[e]?.draft;
    }
    isEditing(e) {
        return null != L[e];
    }
    getSaveStatus(e) {
        return L[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return L[e]?.saveErrorMessage;
    }
}
let N = new U(m.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        L[t] = { draft: { header: i.header, widgets: (0, j.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = b(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, j.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = b(t);
        if (null == a) return !1;
        let s = (0, j.Gm)(a.draft.widgets, i, l, n);
        if (null == s) return !1;
        a.draft = { ...a.draft, widgets: s };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            l = b(t);
        if (null == l) return !1;
        let n = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (n.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, j.W$)(n) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: l } = e,
            n = b(t);
        if (null == n) return !1;
        let a = n.draft.widgets.map((e) => (e.id === i ? { ...e, config: l } : e));
        n.draft = { ...n.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: i } = e,
            l = b(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            l = L[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = i), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i, errorMessage: l } = e,
            n = L[t];
        if (n?.activeSaveRequestId !== i) return !1;
        (delete n.activeSaveRequestId, (n.saveStatus = "error"), (n.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == L[t]) return !1;
        delete L[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == L[t]) return !1;
        delete L[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == L[t]) return !1;
        delete L[t];
    },
    LOGOUT: function () {
        L = {};
    },
});
var P = i(913122),
    w = i(593673);
let R = "draft:",
    k = 0,
    F = 0;
function M(e) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function W(e, t, i, l) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
function H(e, t) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function O(e) {
    let t = N.getDraft(e);
    if (null == t || "saving" === N.getSaveStatus(e)) return;
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
                            if (e.type === w.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return (void 0 !== e.image && (t.image = e.image), t);
                            }
                            return e;
                        })(n),
                    };
                return (t.startsWith(R) || (a.id = t), a);
            }),
        },
        n = F++;
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: n });
    try {
        let { body: t } = await h.Bo.put({ url: S.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        m.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (a) {
        let i = (function (e, t) {
                if (e instanceof h.oh)
                    for (let [i, l] of Object.entries(
                        new P.LG({ status: e.status, body: e.body }).getAllFieldErrors(),
                    )) {
                        let [e, n] = i.split(".");
                        if ("widgets" !== e) continue;
                        let a = Number(n),
                            s = Number.isInteger(a) ? t[a] : void 0,
                            r = l[0]?.message;
                        if (null != s && null != r) return { type: s.type, message: r };
                    }
            })(a, t.widgets),
            l = i?.message;
        if (null != i) {
            let t = G.A.getWidget(e, i.type)?.name;
            null != t && (l = `${t}: ${i.message}`);
        }
        m.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: n, errorMessage: l });
    }
}
var B = i(363957);
let K = 0;
async function z(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = B.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = K++;
    m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await h.Bo.get({
            url: S.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: I(t) });
    }
}
var V = i(470452),
    $ = i(344351),
    q = i(795816),
    Y = i(933958),
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
    es = i(939249),
    er = i(104510),
    ed = i(661531),
    eu = i(245604),
    ec = i(192308),
    eo = i(775602),
    e_ = i(104129),
    eg = i(375708),
    eE = i(517228);
function ef(e) {
    let { widget: t, onClick: i } = e,
        n = (0, r.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: s } = t.assets,
        u = (n ? null : s) ?? a,
        c = t.boost_price;
    return (0, l.jsxs)(es.D, {
        className: eE.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: eE.b3,
                children: [
                    null != u && (0, l.jsx)("img", { className: eE.YI, src: u, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: eE.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(er._, {
                                size: "sm",
                                color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: eE.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: eE.Ti, children: (0, l.jsx)("div", { className: eE.dK }) }),
                            (0, l.jsxs)(et.B, {
                                className: eE.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(eu.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: eg.intl.string(e_.default.IuT87w),
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
                    null != c && c > 0
                        ? (0, l.jsxs)(et.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(er._, { size: "sm", color: ed.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: eg.intl.format(e_.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: eg.intl.string(e_.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { guildId: t, ...i } = e,
        a = (0, r.yK)(
            [G.A, N],
            () => {
                let e = N.getDraft(t)?.widgets ?? [];
                var i = G.A.getWidgets(t) ?? [];
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
            title: eg.intl.string(e_.default.L8Xfoo),
            subtitle: eg.intl.string(e_.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: eE.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        ef,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n, a;
                                ((l = e.type),
                                    (n = e.name),
                                    (a = e.locked),
                                    m.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, i) {
                                            let l = {
                                                id: `${R}${k++}`,
                                                position: { column: j.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                                locked: i,
                                            };
                                            switch (e) {
                                                case w.a.IMAGE_TEXT:
                                                    return {
                                                        ...l,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case w.a.LEADERBOARD:
                                                case w.a.WHITEBOARD:
                                                case w.a.POPULAR_MUSIC:
                                                case w.a.LIVE_ACTIVITY:
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
var em = i(992303);
function eA(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, r.bG)([N], () => N.getSaveStatus(t), [t]),
        s = (0, r.bG)([N], () => N.getDraft(t)?.widgets.length ?? 0, [t]),
        u = (0, r.bG)([N], () => N.getSaveErrorMessage(t), [t]),
        c = "saving" === a,
        o = u ?? eg.intl.string(e_.default.HmFYc5),
        _ = n.useCallback(() => {
            O(t);
        }, [t]),
        g = n.useCallback(() => {
            M(t);
        }, [t]);
    return (0, l.jsx)(Q.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(ee.F, {
                className: em.K,
                children: (0, l.jsx)(Z.A, {
                    submitting: c,
                    disabled: c,
                    onSave: _,
                    onReset: c ? void 0 : g,
                    message: (0, l.jsxs)(et.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(ei.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: el.T,
                                text: eg.intl.string(e_.default.L8Xfoo),
                                disabled: c,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(eh, { guildId: t, ...e })),
                                        void (0, ec.openModalLazy)(() => Promise.resolve(e), {
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
                                      children: eg.intl.format(e_.default.hpAg80, { panelCount: s }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var ep = i(686246),
    eI = i(651300),
    eS = i(451395),
    eD = i(42499),
    eC = i(539888),
    ev = i(590632),
    ex = i(294918);
let ey = "GUILD_SPACE_WIDGET",
    eT = "GUILD_SPACE_WIDGETS",
    eG = `${ey}_${eT}`;
function ej(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: u,
            flatIndex: c,
            leftColumnCount: o,
            onReorder: _,
            isSaving: g,
        } = e,
        E = n.useRef(null),
        f = n.useRef(null),
        h = (0, r.bG)([B.A], () => (i.requires_hydration ? B.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        A = (0, eD.K)(t, i),
        { isDragging: p, dragSourcePosition: I } = (0, eS.gY)({
            dragRef: E,
            dropRef: f,
            index: c,
            listType: eT,
            itemType: ey,
            itemId: i.id,
            onReorder: _,
            canDrag: !g,
        }),
        S = null == I ? null : I < o ? j.FT : j.yM,
        D = null != S && S !== a;
    return (0, l.jsx)("div", {
        ref: f,
        className: s()(ex.NI, { [ex.cB]: p, [ex.ne]: null != I && (D || I > c), [ex.O3]: null != I && !D && I < c }),
        "data-dnd-name": eg.intl.formatToPlainString(a === j.yM ? e_.default.O9RvHQ : e_.default["+cSvS8"], {
            positionNumber: d,
            positionCount: u,
        }),
        children: (0, l.jsx)(eC.P, {
            guildId: t,
            widget: i,
            guildSpaceMode: "edit",
            hydration: h,
            lock: A,
            dragHandleRef: E,
            disabled: g,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void m.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void m.h.dispatch({
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
function eL(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: r }, d] = (0, eI.H)({
            accept: eG,
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
            className: s()(ex.wr, { [ex.SX]: r }),
            "data-dnd-name": eg.intl.string(t === j.yM ? e_.default.fWef0G : e_.default.KcdDyT),
        })
    );
}
function eb(e) {
    let { guildId: t, widgets: i } = e,
        a = n.useMemo(() => (0, j.Rl)(i), [i]),
        s = n.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ev.m[t];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...s[j.FT], ...s[j.yM]], [s]),
        u = (0, ep.V)((e) => e.isDragging() && e.getItemType() === eG),
        c = (0, r.bG)([N], () => "saving" === N.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && W(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        _ = n.useCallback(
            (e, i) => {
                W(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, l.jsx)("div", {
        className: ex.Vg,
        children: s.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ex.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                ej,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === j.yM ? s[j.FT].length + a : a,
                                    leftColumnCount: s[j.FT].length,
                                    onReorder: o,
                                    isSaving: c,
                                },
                                n.id,
                            ),
                        ),
                        u && !c && (0, l.jsx)(eL, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eU = i(529609),
    eN = i(408278),
    eP = i(241326),
    ew = i(297264),
    eR = i(22231),
    ek = i(654107),
    eF = i(548118),
    eM = i(837011),
    eW = i(649640),
    eH = i(2553),
    eO = i(405810),
    eB = i(498642),
    eK = i(486020),
    ez = i(488428),
    eV = i(776231),
    e$ = i(986898);
function eq(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: s, isSaving: u } = e,
        c = (0, r.bG)([E.A], () => E.A.getGuild(t), [t]),
        o = (0, r.bG)([eB.A], () => eB.A.getOnlineCount(t), [t]),
        _ = (0, r.bG)([eB.A], () => eB.A.getMemberCount(t), [t]),
        g = i.custom_banner,
        f = (0, r.bG)([eM.A], () => eM.A.getProfile(t), [t]),
        h = (0, eW.b2)().hex(),
        A = null == c ? null : eK.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        I = (0, ek.Ay)(A, h),
        D = (0, eW.n6)(f?.brandColorPrimary ?? I),
        C = n.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eK.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = S.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  s = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  r = { size: (0, eV.kr)(1200 * (0, eV.mZ)()) };
                              return ("jpg" === i && (r.quality = "lossless"), (s += `?${ez.stringify(r)}`));
                          })(c.id, i.custom_banner_hash)
                        : eK.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, i.custom_banner_hash],
        ),
        v = "string" == typeof g || (void 0 === g && null != i.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: e$.wx,
              children: [
                  null != C
                      ? (0, l.jsx)("img", { className: e$.vK, src: C, alt: "" })
                      : (0, l.jsx)("div", { className: e$.vK, style: { background: D }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e$.f5, "aria-hidden": !0 }),
                  s
                      ? (0, l.jsxs)("div", {
                            className: e$.j0,
                            children: [
                                (0, l.jsx)(eO.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: eg.intl.string(e_.default["EN+0gW"]),
                                    onChange: (e) => H(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eH.A)(0xa00000),
                                    disabled: u,
                                }),
                                v
                                    ? (0, l.jsx)(en.m, {
                                          text: eg.intl.string(e_.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eN.K, {
                                              variant: "critical-secondary",
                                              icon: eP.TrashIcon,
                                              "aria-label": eg.intl.string(e_.default["CunK+J"]),
                                              onClick: () => H(t, null),
                                              disabled: u,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e$.D_,
                      children: [
                          (0, l.jsx)(eF.Ay, {
                              className: e$.Kk,
                              guild: c,
                              size: eF.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e$.pq,
                              children: [
                                  (0, l.jsx)(ew.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e$.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: e$.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e$.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(e_.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != _
                                              ? (0, l.jsxs)("div", {
                                                    className: e$.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e$.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: eg.intl.format(e_.default["rp7bx+"], {
                                                                count: _,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e$.dJ,
                                              children: [
                                                  (0, l.jsx)(er._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: eg.intl.format(e_.default.DwFqrb, {
                                                          count: c.premiumSubscriberCount,
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
                      !s &&
                      (0, l.jsx)(ei.$, {
                          icon: eR.PencilIcon,
                          text: eg.intl.string(e_.default.KcOpCm),
                          size: "sm",
                          onClick: () => {
                              let e;
                              null != (e = p.A.getSpace(t)) &&
                                  m.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eY = i(312152);
function eX(e) {
    let t,
        { guildId: i } = e,
        a = n.useRef(null),
        [f, h, m] = (0, r.yK)([p.A], () => [p.A.getSpace(i), p.A.getFetchStatus(i), p.A.isInBackoff(i)], [i]);
    (n.useEffect(() => {
        let e = a.current !== i;
        ((a.current = i), v(i, e));
    }, [h, i]),
        n.useEffect(() => {
            (0, o.L4)(i, !1, { respectBackoff: !0 });
        }, [i]),
        (t = (0, X.n)()),
        n.useEffect(
            () => () => {
                if (null == t) return;
                let e = Y.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === $.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, q._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let A = (0, r.bG)([E.A], () => E.A.getGuild(i), [i]),
        I = (0, V.mN)(A),
        S = (0, r.bG)([G.A], () => G.A.getFetchStatus(i), [i]);
    n.useEffect(() => {
        I && "idle" === S && T(i);
    }, [I, S, i]);
    let D = A?.guildSpaceSettings?.publish_status !== w.B.PUBLISHED,
        C = n.useCallback(() => y(i, { publish_status: w.B.PUBLISHED }), [i]),
        [j, L] = (0, r.yK)([N], () => [N.getDraft(i), N.getSaveStatus(i)], [i]),
        b = I && null != j,
        U = b ? j.widgets : f?.widgets,
        P = n.useMemo(() => U?.some((e) => e.locked) ?? !1, [U]);
    n.useEffect(() => {
        I && P && ((0, _.AK)(i), (0, _.Xd)(i));
    }, [I, i, P]);
    let R = (0, r.bG)(
        [g.A, G.A],
        () =>
            f?.widgets.some((e) => {
                let t = G.A.getWidget(i, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(i)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [i, f],
    );
    (n.useEffect(() => {
        R && x(i);
    }, [i, R]),
        n.useEffect(() => {
            I || null == j || "saving" === L || M(i);
        }, [I, j, L, i]));
    let k = n.useMemo(
            () =>
                (U ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [U],
        ),
        F = (0, r.yK)([B.A], () => B.A.getWidgetIdsToHydrate(i, k), [i, k]),
        W = n.useRef(null);
    return (n.useEffect(() => {
        if (W.current !== i && null != f) {
            ((W.current = i), z(i, k, !0));
            return;
        }
        z(i, F);
    }, [i, f, k, F]),
    null == f || null == U)
        ? (0, l.jsx)("div", {
              className: eY.MY,
              children: (0, l.jsx)("div", {
                  className: eY.F,
                  children:
                      "error" !== h || m
                          ? (0, l.jsx)(u.y, {
                                type: u.y.Type.SPINNING_CIRCLE,
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
              className: eY.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: eY.XG,
                      children: (0, l.jsxs)("div", {
                          className: s()(eY.Qs, { [eY.Dy]: b }),
                          children: [
                              I && D ? (0, l.jsx)(J.A, { onPublish: C }) : null,
                              (0, l.jsx)(eq, {
                                  guildId: i,
                                  header: b ? j.header : f.header,
                                  isEditing: b,
                                  canEdit: I,
                                  isSaving: "saving" === L,
                              }),
                              b
                                  ? (0, l.jsx)(eb, { guildId: i, widgets: U })
                                  : (0, l.jsx)(eU.A, { canEdit: I, guildId: i, widgets: U }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(eA, { guildId: i, isEditing: b }),
              ],
          });
}
