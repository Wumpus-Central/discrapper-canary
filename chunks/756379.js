i.r(t), i.d(t, { default: () => eq });
var l = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(17928),
    d = i(834730),
    c = i(289873),
    u = i(689175),
    o = i(250527),
    _ = i(868652),
    E = i(645619),
    f = i(71393),
    g = i(562708),
    h = i(636537),
    m = i(228366),
    A = i(499785),
    I = i(716357);
function p(e) {
    return !(e instanceof h.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var S = i(652215);
let x = 0;
async function D(e) {
    let t = x++;
    m.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: t });
    try {
        let { body: i } = await A.A.get({
            url: S.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: g.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        m.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: t, space: i });
    } catch (i) {
        m.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: t, retryable: p(i) });
    }
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = I.A.getFetchStatus(e),
        l = t && "error" === i && !I.A.isInBackoff(e);
    ("idle" === i || l) && (await D(e));
}
async function v(e) {
    await D(e);
}
async function T(e, t) {
    let { body: i } = await h.Bo.patch({ url: S.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
async function y(e) {
    m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await h.Bo.get({ url: S.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        m.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var G = i(960960),
    j = i(626584),
    L = i(754674);
let U = {};
function b(e) {
    let t = U[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class N extends s.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return U[e]?.draft;
    }
    isEditing(e) {
        return null != U[e];
    }
    getSaveStatus(e) {
        return U[e]?.saveStatus ?? "idle";
    }
}
let P = new N(m.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        U[t] = { draft: { header: i.header, widgets: (0, L.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = b(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, L.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = b(t);
        if (null == a) return !1;
        let r = (0, L.Gm)(a.draft.widgets, i, l, n);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
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
        l.draft = { ...l.draft, widgets: (0, L.W$)(n) };
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
            l = U[t];
        if (null == l) return !1;
        (l.saveStatus = "saving"), (l.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            l = U[t];
        if (l?.activeSaveRequestId !== i) return !1;
        delete l.activeSaveRequestId, (l.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == U[t]) return !1;
        delete U[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == U[t]) return !1;
        delete U[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == U[t]) return !1;
        delete U[t];
    },
    LOGOUT: function () {
        U = {};
    },
});
var w = i(593673);
let R = "draft:",
    F = 0,
    k = new j.A("GuildSpaceEditorActionCreators"),
    W = 0;
function M(e) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function O(e, t, i, l) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
function H(e, t) {
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function B(e) {
    let t = P.getDraft(e);
    if (null == t || "saving" === P.getSaveStatus(e)) return;
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
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(n),
                    };
                return t.startsWith(R) || (a.id = t), a;
            }),
        },
        n = W++;
    m.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: n });
    try {
        let { body: t } = await h.Bo.put({ url: S.Rsh.GUILD_SPACE(e), body: l, rejectWithError: !0 });
        m.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        k.error("Failed to save guild space", { guildId: e, error: t }),
            m.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: n });
    }
}
var K = i(363957);
let z = 0;
async function V(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = K.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = z++;
    m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await h.Bo.get({
            url: S.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        m.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: p(t) });
    }
}
var q = i(470452),
    Y = i(872188),
    $ = i(868285),
    X = i(36525),
    J = i(871682),
    Q = i(331322),
    Z = i(821609),
    ee = i(499373),
    et = i(189213),
    ei = i(939249),
    el = i(104510),
    en = i(661531),
    ea = i(245604),
    er = i(192308),
    es = i(775602),
    ed = i(61567),
    ec = i(375708),
    eu = i(517228);
function eo(e) {
    let { widget: t, onClick: i } = e,
        n = (0, s.bG)([es.Ay], () => es.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: r } = t.assets,
        c = (n ? null : r) ?? a,
        u = t.boost_price;
    return (0, l.jsxs)(ei.D, {
        className: eu.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: eu.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: eu.YI, src: c, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: eu.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(el._, {
                                size: "sm",
                                color: en.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: eu.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: eu.Ti, children: (0, l.jsx)("div", { className: eu.dK }) }),
                            (0, l.jsxs)(Q.B, {
                                className: eu.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(ea.U, {}),
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: ec.intl.string(ed.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(Q.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != u && u > 0
                        ? (0, l.jsxs)(Q.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(el._, { size: "sm", color: en.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: ec.intl.format(ed.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: ec.intl.string(ed.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { guildId: t, ...i } = e,
        a = (0, s.yK)([G.A, P], () => {
            let e = P.getDraft(t)?.widgets ?? [];
            var i = G.A.getWidgets(t) ?? [];
            let l = new Map();
            for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
            return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        n.useEffect(() => {
            y(t);
        }, [t]),
        (0, l.jsx)(et.Modal, {
            title: ec.intl.string(ed.default.L8Xfoo),
            subtitle: ec.intl.string(ed.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: eu.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        eo,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n, a;
                                (l = e.type),
                                    (n = e.name),
                                    (a = e.locked),
                                    m.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t, i) {
                                            let l = {
                                                id: `${R}${F++}`,
                                                position: { column: L.FT, order: 0 },
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
                                    i.onClose();
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
function ef(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, s.bG)([P], () => P.getSaveStatus(t), [t]),
        r = (0, s.bG)([P], () => P.getDraft(t)?.widgets.length ?? 0, [t]),
        c = "saving" === a,
        u = n.useCallback(() => {
            B(t);
        }, [t]),
        o = n.useCallback(() => {
            M(t);
        }, [t]);
    return (0, l.jsx)($.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(J.F, {
                className: eE.K,
                children: (0, l.jsx)(X.A, {
                    submitting: c,
                    disabled: c,
                    onSave: u,
                    onReset: c ? void 0 : o,
                    message: (0, l.jsxs)(Q.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(Z.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: ee.T,
                                text: ec.intl.string(ed.default.L8Xfoo),
                                disabled: c,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, l.jsx)(e_, { guildId: t, ...e })),
                                        void (0, er.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === a
                                ? (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      role: "alert",
                                      children: ec.intl.string(ed.default.HmFYc5),
                                  })
                                : (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: ec.intl.format(ed.default.hpAg80, { panelCount: r }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eg = i(686246),
    eh = i(651300),
    em = i(451395),
    eA = i(42499),
    eI = i(539888),
    ep = i(179105),
    eS = i(294918);
let ex = "GUILD_SPACE_WIDGET",
    eD = "GUILD_SPACE_WIDGETS",
    eC = `${ex}_${eD}`;
function ev(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: c,
            flatIndex: u,
            leftColumnCount: o,
            onReorder: _,
            isSaving: E,
        } = e,
        f = n.useRef(null),
        g = n.useRef(null),
        h = (0, s.bG)([K.A], () => (i.requires_hydration ? K.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        A = (0, eA.K)(t, i),
        { isDragging: I, dragSourcePosition: p } = (0, em.gY)({
            dragRef: f,
            dropRef: g,
            index: u,
            listType: eD,
            itemType: ex,
            itemId: i.id,
            onReorder: _,
            canDrag: !E,
        }),
        S = null == p ? null : p < o ? L.FT : L.yM,
        x = null != S && S !== a;
    return (0, l.jsx)("div", {
        ref: g,
        className: r()(eS.NI, { [eS.cB]: I, [eS.ne]: null != p && (x || p > u), [eS.O3]: null != p && !x && p < u }),
        "data-dnd-name": ec.intl.formatToPlainString(a === L.yM ? ed.default.O9RvHQ : ed.default["+cSvS8"], {
            positionNumber: d,
            positionCount: c,
        }),
        children: (0, l.jsx)(eI.P, {
            guildId: t,
            widget: i,
            guildSpaceMode: "edit",
            hydration: h,
            lock: A,
            dragHandleRef: f,
            disabled: E,
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
function eT(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: s }, d] = (0, eh.H)({
            accept: eC,
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
            className: r()(eS.wr, { [eS.SX]: s }),
            "data-dnd-name": ec.intl.string(t === L.yM ? ed.default.fWef0G : ed.default.KcdDyT),
        })
    );
}
function ey(e) {
    let { guildId: t, widgets: i } = e,
        a = n.useMemo(() => (0, L.Rl)(i), [i]),
        r = n.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ep.m[t];
                    }),
                ),
            [a],
        ),
        d = n.useMemo(() => [...r[L.FT], ...r[L.yM]], [r]),
        c = (0, eg.V)((e) => e.isDragging() && e.getItemType() === eC),
        u = (0, s.bG)([P], () => "saving" === P.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && O(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        _ = n.useCallback(
            (e, i) => {
                O(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, l.jsx)("div", {
        className: eS.Vg,
        children: r.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: eS.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                ev,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === L.yM ? r[L.FT].length + a : a,
                                    leftColumnCount: r[L.FT].length,
                                    onReorder: o,
                                    isSaving: u,
                                },
                                n.id,
                            ),
                        ),
                        c && !u && (0, l.jsx)(eT, { column: i, onDropAtEnd: _ }),
                    ],
                },
                i,
            ),
        ),
    });
}
var eG = i(529609),
    ej = i(866665),
    eL = i(408278),
    eU = i(241326),
    eb = i(297264),
    eN = i(22231),
    eP = i(654107),
    ew = i(548118),
    eR = i(837011),
    eF = i(649640),
    ek = i(2553),
    eW = i(405810),
    eM = i(498642),
    eO = i(486020),
    eH = i(488428),
    eB = i(776231),
    eK = i(986898);
function ez(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: r, isSaving: c } = e,
        u = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = (0, s.bG)([eM.A], () => eM.A.getOnlineCount(t), [t]),
        _ = (0, s.bG)([eM.A], () => eM.A.getMemberCount(t), [t]),
        E = i.custom_banner,
        g = (0, s.bG)([eR.A], () => eR.A.getProfile(t), [t]),
        h = (0, eF.b2)().hex(),
        A = null == u ? null : eO.Ay.getGuildIconURL({ id: u.id, icon: u.icon, size: 64 }),
        p = (0, eP.Ay)(A, h),
        x = (0, eF.n6)(g?.brandColorPrimary ?? p),
        D = n.useMemo(
            () =>
                null == u
                    ? null
                    : "string" == typeof E
                      ? E
                      : void 0 === E && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eO.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: n } = window.GLOBAL_ENV,
                                  a = S.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  r = null != l ? `https://${l}${a}` : location.protocol + n + a,
                                  s = { size: (0, eB.kr)(1200 * (0, eB.mZ)()) };
                              return "jpg" === i && (s.quality = "lossless"), (r += `?${eH.stringify(s)}`);
                          })(u.id, i.custom_banner_hash)
                        : eO.Ay.getGuildBannerURL({ id: u.id, banner: u.banner }),
            [u, E, i.custom_banner_hash],
        ),
        C = "string" == typeof E || (void 0 === E && null != i.custom_banner_hash);
    return null == u
        ? null
        : (0, l.jsxs)("div", {
              className: eK.wx,
              children: [
                  null != D
                      ? (0, l.jsx)("img", { className: eK.vK, src: D, alt: "" })
                      : (0, l.jsx)("div", { className: eK.vK, style: { background: x }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eK.f5, "aria-hidden": !0 }),
                  r
                      ? (0, l.jsxs)("div", {
                            className: eK.j0,
                            children: [
                                (0, l.jsx)(eW.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: ec.intl.string(ed.default["EN+0gW"]),
                                    onChange: (e) => H(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, ek.A)(0xa00000),
                                    disabled: c,
                                }),
                                C
                                    ? (0, l.jsx)(ej.m, {
                                          text: ec.intl.string(ed.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eL.K, {
                                              variant: "critical-secondary",
                                              icon: eU.TrashIcon,
                                              "aria-label": ec.intl.string(ed.default["CunK+J"]),
                                              onClick: () => H(t, null),
                                              disabled: c,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eK.D_,
                      children: [
                          (0, l.jsx)(ew.Ay, {
                              className: eK.Kk,
                              guild: u,
                              size: ew.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eK.pq,
                              children: [
                                  (0, l.jsx)(eb.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: u.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eK.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eK.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eK.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ec.intl.format(ed.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != _
                                              ? (0, l.jsxs)("div", {
                                                    className: eK.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eK.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: ec.intl.format(ed.default["rp7bx+"], {
                                                                count: _,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eK.dJ,
                                              children: [
                                                  (0, l.jsx)(el._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: ec.intl.format(ed.default.DwFqrb, {
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
                      (0, l.jsx)(Z.$, {
                          icon: eN.PencilIcon,
                          text: ec.intl.string(ed.default.KcOpCm),
                          onClick: () => {
                              let e;
                              null != (e = I.A.getSpace(t)) &&
                                  m.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eV = i(312152);
function eq(e) {
    let { guildId: t } = e,
        i = n.useRef(null),
        [a, g, h] = (0, s.yK)([I.A], () => [I.A.getSpace(t), I.A.getFetchStatus(t), I.A.isInBackoff(t)], [t]);
    n.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), C(t, e);
    }, [g, t]),
        n.useEffect(() => {
            (0, o.L4)(t, !1, { respectBackoff: !0 });
        }, [t]);
    let m = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]),
        A = (0, q.mN)(m),
        p = (0, s.bG)([G.A], () => G.A.getFetchStatus(t), [t]);
    n.useEffect(() => {
        A && "idle" === p && y(t);
    }, [A, p, t]);
    let S = m?.guildSpaceSettings?.publish_status !== w.B.PUBLISHED,
        x = n.useCallback(() => T(t, { publish_status: w.B.PUBLISHED }), [t]),
        [D, j] = (0, s.yK)([P], () => [P.getDraft(t), P.getSaveStatus(t)], [t]),
        L = A && null != D,
        U = L ? D.widgets : a?.widgets,
        b = n.useMemo(() => U?.some((e) => e.locked) ?? !1, [U]);
    n.useEffect(() => {
        A && b && ((0, _.AK)(t), (0, _.Xd)(t));
    }, [A, t, b]);
    let N = (0, s.bG)(
        [E.A, G.A],
        () =>
            a?.widgets.some((e) => {
                let i = G.A.getWidget(t, e.type)?.powerup_sku_id;
                return e.locked && null != i && E.A.getStateForGuild(t)?.unlockedPowerups[i] != null;
            }) ?? !1,
        [t, a],
    );
    n.useEffect(() => {
        N && v(t);
    }, [t, N]),
        n.useEffect(() => {
            A || null == D || "saving" === j || M(t);
        }, [A, D, j, t]);
    let R = n.useMemo(
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
        F = (0, s.yK)([K.A], () => K.A.getWidgetIdsToHydrate(t, R), [t, R]),
        k = n.useRef(null);
    return (n.useEffect(() => {
        if (k.current !== t && null != a) {
            (k.current = t), V(t, R, !0);
            return;
        }
        V(t, F);
    }, [t, a, R, F]),
    null == a || null == U)
        ? (0, l.jsx)("div", {
              className: eV.MY,
              children: (0, l.jsx)("div", {
                  className: eV.F,
                  children:
                      "error" !== g || h
                          ? (0, l.jsx)(c.y, {
                                type: c.y.Type.SPINNING_CIRCLE,
                                "aria-label": ec.intl.string(ec.t.ZTNur7),
                            })
                          : (0, l.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: ec.intl.string(ec.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eV.MY,
              children: [
                  (0, l.jsx)(u.Gt, {
                      className: eV.XG,
                      children: (0, l.jsxs)("div", {
                          className: r()(eV.Qs, { [eV.Dy]: L }),
                          children: [
                              A && S ? (0, l.jsx)(Y.A, { onPublish: x }) : null,
                              (0, l.jsx)(ez, {
                                  guildId: t,
                                  header: L ? D.header : a.header,
                                  isEditing: L,
                                  canEdit: A,
                                  isSaving: "saving" === j,
                              }),
                              L
                                  ? (0, l.jsx)(ey, { guildId: t, widgets: U })
                                  : (0, l.jsx)(eG.A, { canEdit: A, guildId: t, widgets: U }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(ef, { guildId: t, isEditing: L }),
              ],
          });
}
