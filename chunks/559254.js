i.r(t), i.d(t, { default: () => ez });
var n = i(477900),
    l = i(582128),
    a = i(503698),
    s = i.n(a),
    r = i(17928),
    d = i(834730),
    c = i(289873),
    u = i(689175),
    o = i(71393),
    f = i(562708),
    _ = i(636537),
    E = i(228366),
    h = i(499785),
    g = i(158390),
    S = i(927813);
let A = S.A.Millis.SECOND,
    m = S.A.Millis.MINUTE,
    I = {};
class C extends r.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return I[e]?.space;
    }
    getFetchStatus(e) {
        return I[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return I[e]?.backoff?.pending === !0;
    }
}
let D = new C(E.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: i, requestId: n } = e,
            l = (null == (t = I[i]) && ((t = { fetchStatus: "idle" }), (I[i] = t)), t);
        (l.fetchStatus = "loading"), (l.activeFetchRequestId = n);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: i, space: n } = e,
            l = I[t];
        if (l?.activeFetchRequestId !== i) return !1;
        delete l.activeFetchRequestId, (l.space = n), (l.fetchStatus = "success"), l.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: i, retryable: n } = e,
            l = I[t];
        if (l?.activeFetchRequestId !== i) return !1;
        delete l.activeFetchRequestId,
            (l.fetchStatus = "error"),
            n &&
                (null == l.backoff && (l.backoff = new g.A(A, m, !0)),
                l.backoff.pending ||
                    l.backoff.fail(() => E.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            i = I[t];
        if (i?.fetchStatus !== "error") return !1;
        i.backoff?.cancel(), (i.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: i } = e,
            n = I[t];
        if (null == n) return !1;
        delete n.activeFetchRequestId, (n.space = i), (n.fetchStatus = "success"), n.backoff?.succeed();
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i) return !1;
        I[t]?.backoff?.cancel(), delete I[t];
    },
    LOGOUT: function () {
        Object.values(I).forEach((e) => e?.backoff?.cancel()), (I = {});
    },
});
function p(e) {
    return !(e instanceof _.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var T = i(652215);
let v = 0;
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = D.getFetchStatus(e),
        n = t && "error" === i && !D.isInBackoff(e);
    if ("idle" !== i && !n) return;
    let l = v++;
    E.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: l });
    try {
        let { body: t } = await h.A.get({
            url: T.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: f.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: l, space: t });
    } catch (t) {
        E.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: l, retryable: p(t) });
    }
}
async function G(e, t) {
    let { body: i } = await _.Bo.patch({ url: T.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
var y = i(626584),
    L = i(754674);
let U = {};
function j(e) {
    let t = U[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class b extends r.Ay.Store {
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
let P = new b(E.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        U[t] = { draft: { header: i.header, widgets: (0, L.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            n = j(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, widgets: (0, L.QD)(n.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: n, targetIndex: l } = e,
            a = j(t);
        if (null == a) return !1;
        let s = (0, L.Gm)(a.draft.widgets, i, n, l);
        if (null == s) return !1;
        a.draft = { ...a.draft, widgets: s };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            n = j(t);
        if (null == n) return !1;
        let l = n.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (l.length === n.draft.widgets.length) return !1;
        n.draft = { ...n.draft, widgets: (0, L.W$)(l) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: n } = e,
            l = j(t);
        if (null == l) return !1;
        let a = l.draft.widgets.map((e) => (e.id === i ? { ...e, config: n } : e));
        l.draft = { ...l.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: i } = e,
            n = j(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, header: { ...n.draft.header, custom_banner: i } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            n = U[t];
        if (null == n) return !1;
        (n.saveStatus = "saving"), (n.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            n = U[t];
        if (n?.activeSaveRequestId !== i) return !1;
        delete n.activeSaveRequestId, (n.saveStatus = "error");
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
var R = i(593673);
let N = "draft:",
    w = 0,
    F = new y.A("GuildSpaceEditorActionCreators"),
    O = 0;
function k(e) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function H(e, t, i, n) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: n });
}
function M(e, t) {
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function W(e) {
    let t = P.getDraft(e);
    if (null == t || "saving" === P.getSaveStatus(e)) return;
    let i = {};
    void 0 !== t.header.custom_banner && (i.custom_banner = t.header.custom_banner);
    let n = {
            header: i,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: n, config: l } = e,
                    a = {
                        type: i,
                        position: n,
                        config: (function (e) {
                            if (e.type === R.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(l),
                    };
                return t.startsWith(N) || (a.id = t), a;
            }),
        },
        l = O++;
    E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: l });
    try {
        let { body: t } = await _.Bo.put({ url: T.Rsh.GUILD_SPACE(e), body: n, rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        F.error("Failed to save guild space", { guildId: e, error: t }),
            E.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: l });
    }
}
var B = i(363957);
let q = 0;
async function K(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let n = B.A.getWidgetIdsToHydrate(e, t);
    if (0 === n.length) return;
    let l = q++;
    E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: l, widgetIds: n });
    try {
        let { body: t } = await _.Bo.get({
            url: T.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: n },
            rejectWithError: !0,
        });
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: l, widgets: t.widgets });
    } catch (t) {
        E.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: l, retryable: p(t) });
    }
}
var V = i(470452),
    z = i(872188),
    Y = i(868285),
    $ = i(36525),
    X = i(871682),
    J = i(331322),
    Q = i(821609),
    Z = i(499373),
    ee = i(189213),
    et = i(939249),
    ei = i(245604),
    en = i(104510),
    el = i(661531),
    ea = i(192308),
    es = i(775602);
async function er(e) {
    E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await _.Bo.get({ url: T.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        E.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
let ed = {};
function ec(e) {
    let t = ed[e];
    return null == t && ((t = { fetchStatus: "idle" }), (ed[e] = t)), t;
}
class eu extends r.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return ed[e]?.widgets;
    }
    getFetchStatus(e) {
        return ed[e]?.fetchStatus ?? "idle";
    }
}
let eo = new eu(E.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        ec(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: i } = e,
            n = ec(t);
        (n.widgets = i), (n.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        ec(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == ed[t]) return !1;
        delete ed[t];
    },
    LOGOUT: function () {
        ed = {};
    },
});
var ef = i(983283),
    e_ = i(375708),
    eE = i(241181);
function eh(e) {
    let { widget: t, onClick: i } = e,
        l = (0, r.bG)([es.Ay], () => es.Ay.useReducedMotion),
        { catalog_image_static_url: a, catalog_image_animated_url: s } = t.assets,
        c = (l ? null : s) ?? a,
        u = t.boost_price;
    return (0, n.jsxs)(et.D, {
        className: eE.HL,
        onClick: i,
        children: [
            (0, n.jsxs)("div", {
                className: eE.b3,
                children: [
                    null != c && (0, n.jsx)("img", { className: eE.YI, src: c, alt: "" }),
                    (0, n.jsxs)("div", {
                        className: eE.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, n.jsx)("div", { className: eE.Ti, children: (0, n.jsx)("div", { className: eE.dK }) }),
                            (0, n.jsxs)(J.B, {
                                className: eE.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, n.jsx)(ei.U, {}),
                                    (0, n.jsx)(d.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: e_.intl.string(ef.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(J.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(d.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != u && u > 0
                        ? (0, n.jsxs)(J.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, n.jsx)(en._, { size: "sm", color: el.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, n.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: e_.intl.format(ef.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(d.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: e_.intl.string(ef.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let { guildId: t, ...i } = e,
        a = (0, r.yK)([eo, P], () => {
            let e = P.getDraft(t)?.widgets ?? [];
            var i = eo.getWidgets(t) ?? [];
            let n = new Map();
            for (let t of e) n.set(t.type, (n.get(t.type) ?? 0) + 1);
            return i.filter((e) => (n.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        l.useEffect(() => {
            er(t);
        }, [t]),
        (0, n.jsx)(ee.Modal, {
            title: e_.intl.string(ef.default.L8Xfoo),
            subtitle: e_.intl.string(ef.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, n.jsx)("div", {
                className: eE.Vg,
                children: a.map((e) =>
                    (0, n.jsx)(
                        eh,
                        {
                            widget: e,
                            onClick: () => {
                                var n, l;
                                (n = e.type),
                                    (l = e.name),
                                    E.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t) {
                                            let i = {
                                                id: `${N}${w++}`,
                                                position: { column: L.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                            };
                                            switch (e) {
                                                case R.a.IMAGE_TEXT:
                                                    return {
                                                        ...i,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case R.a.LEADERBOARD:
                                                case R.a.WHITEBOARD:
                                                case R.a.POPULAR_MUSIC:
                                                case R.a.LIVE_ACTIVITY:
                                                    return { ...i, type: e, config: { type: e } };
                                            }
                                        })(n, l),
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
var eS = i(466844);
function eA(e) {
    let { guildId: t, isEditing: i } = e,
        a = (0, r.bG)([P], () => P.getSaveStatus(t), [t]),
        s = (0, r.bG)([P], () => P.getDraft(t)?.widgets.length ?? 0, [t]),
        c = "saving" === a,
        u = l.useCallback(() => {
            W(t);
        }, [t]),
        o = l.useCallback(() => {
            k(t);
        }, [t]);
    return (0, n.jsx)(Y.F, {
        component: "div",
        children:
            i &&
            (0, n.jsx)(X.F, {
                className: eS.K,
                children: (0, n.jsx)($.A, {
                    submitting: c,
                    disabled: c,
                    onSave: u,
                    onReset: c ? void 0 : o,
                    message: (0, n.jsxs)(J.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, n.jsx)(Q.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Z.T,
                                text: e_.intl.string(ef.default.L8Xfoo),
                                disabled: c,
                                onClick: () => {
                                    let e;
                                    return (
                                        (e = (e) => (0, n.jsx)(eg, { guildId: t, ...e })),
                                        void (0, ea.openModalLazy)(() => Promise.resolve(e), {
                                            modalKey: "guild-space-add-widget",
                                        })
                                    );
                                },
                            }),
                            "error" === a
                                ? (0, n.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      role: "alert",
                                      children: e_.intl.string(ef.default.HmFYc5),
                                  })
                                : (0, n.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: e_.intl.format(ef.default.hpAg80, { panelCount: s }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var em = i(686246),
    eI = i(651300),
    eC = i(451395),
    eD = i(317574),
    ep = i(487692),
    eT = i(84899);
let ev = "GUILD_SPACE_WIDGET",
    ex = "GUILD_SPACE_WIDGETS",
    eG = `${ev}_${ex}`;
function ey(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: d,
            columnWidgetCount: c,
            flatIndex: u,
            leftColumnCount: o,
            onReorder: f,
            isSaving: _,
        } = e,
        h = l.useRef(null),
        g = l.useRef(null),
        S = (0, r.bG)([B.A], () => (i.requires_hydration ? B.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        { isDragging: A, dragSourcePosition: m } = (0, eC.gY)({
            dragRef: h,
            dropRef: g,
            index: u,
            listType: ex,
            itemType: ev,
            itemId: i.id,
            onReorder: f,
            canDrag: !_,
        }),
        I = null == m ? null : m < o ? L.FT : L.yM,
        C = null != I && I !== a;
    return (0, n.jsx)("div", {
        ref: g,
        className: s()(eT.NI, { [eT.cB]: A, [eT.ne]: null != m && (C || m > u), [eT.O3]: null != m && !C && m < u }),
        "data-dnd-name": e_.intl.formatToPlainString(a === L.yM ? ef.default.O9RvHQ : ef.default["+cSvS8"], {
            positionNumber: d,
            positionCount: c,
        }),
        children: (0, n.jsx)(eD.P, {
            widget: i,
            guildSpaceMode: "edit",
            hydration: S,
            dragHandleRef: h,
            disabled: _,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void E.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var n;
                return (
                    (n = i.id),
                    void E.h.dispatch({
                        type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG",
                        guildId: t,
                        widgetId: n,
                        config: e,
                    })
                );
            },
        }),
    });
}
function eL(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = l.useRef(null),
        [{ isOver: r }, d] = (0, eI.H)({
            accept: eG,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        l.useLayoutEffect(
            () => (
                d(a),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, n.jsx)("div", {
            ref: a,
            className: s()(eT.wr, { [eT.SX]: r }),
            "data-dnd-name": e_.intl.string(t === L.yM ? ef.default.fWef0G : ef.default.KcdDyT),
        })
    );
}
function eU(e) {
    let { guildId: t, widgets: i } = e,
        a = l.useMemo(() => (0, L.Rl)(i), [i]),
        s = l.useMemo(
            () =>
                a.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ep.m[t];
                    }),
                ),
            [a],
        ),
        d = l.useMemo(() => [...s[L.FT], ...s[L.yM]], [s]),
        c = (0, em.V)((e) => e.isDragging() && e.getItemType() === eG),
        u = (0, r.bG)([P], () => "saving" === P.getSaveStatus(t), [t]),
        o = l.useCallback(
            (e, i) => {
                let n = d[e],
                    l = d[i];
                null != n && null != l && H(t, n.id, l.position.column, l.position.order);
            },
            [t, d],
        ),
        f = l.useCallback(
            (e, i) => {
                H(t, e, i, a[i]?.length ?? 0);
            },
            [t, a],
        );
    return (0, n.jsx)("div", {
        className: eT.Vg,
        children: s.map((e, i) =>
            (0, n.jsxs)(
                "div",
                {
                    className: eT.fi,
                    children: [
                        e.map((l, a) =>
                            (0, n.jsx)(
                                ey,
                                {
                                    guildId: t,
                                    widget: l,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === L.yM ? s[L.FT].length + a : a,
                                    leftColumnCount: s[L.FT].length,
                                    onReorder: o,
                                    isSaving: u,
                                },
                                l.id,
                            ),
                        ),
                        c && !u && (0, n.jsx)(eL, { column: i, onDropAtEnd: f }),
                    ],
                },
                i,
            ),
        ),
    });
}
var ej = i(529609),
    eb = i(866665),
    eP = i(408278),
    eR = i(241326),
    eN = i(297264),
    ew = i(22231),
    eF = i(548118),
    eO = i(2553),
    ek = i(405810),
    eH = i(498642),
    eM = i(486020),
    eW = i(488428),
    eB = i(597098),
    eq = i(555063);
function eK(e) {
    let { guildId: t, header: i, canEdit: a, isEditing: s, isSaving: c } = e,
        u = (0, r.bG)([o.A], () => o.A.getGuild(t), [t]),
        f = (0, r.bG)([eH.A], () => eH.A.getOnlineCount(t), [t]),
        _ = (0, r.bG)([eH.A], () => eH.A.getMemberCount(t), [t]),
        h = i.custom_banner,
        g = l.useMemo(
            () =>
                null == u
                    ? null
                    : "string" == typeof h
                      ? h
                      : void 0 === h && null != i.custom_banner_hash
                        ? (function (e, t) {
                              let i = eM.QB ? "webp" : "jpg",
                                  { CDN_HOST: n, API_ENDPOINT: l } = window.GLOBAL_ENV,
                                  a = T.Rsh.GUILD_SPACE_BANNER(e, t, i),
                                  s = null != n ? `https://${n}${a}` : location.protocol + l + a,
                                  r = { size: (0, eB.kr)(1200 * (0, eB.mZ)()) };
                              return "jpg" === i && (r.quality = "lossless"), (s += `?${eW.stringify(r)}`);
                          })(u.id, i.custom_banner_hash)
                        : eM.Ay.getGuildBannerURL({ id: u.id, banner: u.banner }),
            [u, h, i.custom_banner_hash],
        ),
        S = "string" == typeof h || (void 0 === h && null != i.custom_banner_hash);
    return null == u
        ? null
        : (0, n.jsxs)("div", {
              className: eq.wx,
              children: [
                  null != g ? (0, n.jsx)("img", { className: eq.vK, src: g, alt: "" }) : null,
                  (0, n.jsx)("div", { className: eq.f5, "aria-hidden": !0 }),
                  s
                      ? (0, n.jsxs)("div", {
                            className: eq.j0,
                            children: [
                                (0, n.jsx)(ek.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: e_.intl.string(ef.default["EN+0gW"]),
                                    onChange: (e) => M(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eO.A)(0xa00000),
                                    disabled: c,
                                }),
                                S
                                    ? (0, n.jsx)(eb.m, {
                                          text: e_.intl.string(ef.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(eP.K, {
                                              variant: "critical-secondary",
                                              icon: eR.u,
                                              "aria-label": e_.intl.string(ef.default["CunK+J"]),
                                              onClick: () => M(t, null),
                                              disabled: c,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: eq.D_,
                      children: [
                          (0, n.jsx)(eF.Ay, {
                              className: eq.Kk,
                              guild: u,
                              size: eF.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, n.jsxs)("div", {
                              className: eq.pq,
                              children: [
                                  (0, n.jsx)(eN.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: u.name,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: eq.M1,
                                      children: [
                                          null != f
                                              ? (0, n.jsxs)("div", {
                                                    className: eq.dJ,
                                                    children: [
                                                        (0, n.jsx)("span", { className: eq.RS, "aria-hidden": !0 }),
                                                        (0, n.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: e_.intl.format(ef.default.G08ClG, { count: f }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != _
                                              ? (0, n.jsxs)("div", {
                                                    className: eq.dJ,
                                                    children: [
                                                        (0, n.jsx)("span", { className: eq.kq, "aria-hidden": !0 }),
                                                        (0, n.jsx)(d.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: e_.intl.format(ef.default["rp7bx+"], {
                                                                count: _,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, n.jsxs)("div", {
                                              className: eq.dJ,
                                              children: [
                                                  (0, n.jsx)(en._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, n.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: e_.intl.format(ef.default.DwFqrb, {
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
                      !s &&
                      (0, n.jsx)(Q.$, {
                          icon: ew.R,
                          text: e_.intl.string(ef.default.KcOpCm),
                          onClick: () => {
                              let e;
                              null != (e = D.getSpace(t)) &&
                                  E.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                          },
                      }),
              ],
          });
}
var eV = i(278093);
function ez(e) {
    let { guildId: t } = e,
        i = l.useRef(null),
        [a, f, _] = (0, r.yK)([D], () => [D.getSpace(t), D.getFetchStatus(t), D.isInBackoff(t)], [t]);
    l.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), x(t, e);
    }, [f, t]);
    let E = (0, r.bG)([o.A], () => o.A.getGuild(t), [t]),
        h = (0, V.mN)(E),
        g = E?.guildSpaceSettings?.publish_status !== R.B.PUBLISHED,
        S = l.useCallback(() => G(t, { publish_status: R.B.PUBLISHED }), [t]),
        [A, m] = (0, r.yK)([P], () => [P.getDraft(t), P.getSaveStatus(t)], [t]),
        I = h && null != A,
        C = I ? A.widgets : a?.widgets;
    l.useEffect(() => {
        h || null == A || "saving" === m || k(t);
    }, [h, A, m, t]);
    let p = l.useMemo(
            () =>
                (C ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [C],
        ),
        T = (0, r.yK)([B.A], () => B.A.getWidgetIdsToHydrate(t, p), [t, p]),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (v.current !== t && null != a) {
            (v.current = t), K(t, p, !0);
            return;
        }
        K(t, T);
    }, [t, a, p, T]),
    null == a || null == C)
        ? (0, n.jsx)("div", {
              className: eV.MY,
              children: (0, n.jsx)("div", {
                  className: eV.F,
                  children:
                      "error" !== f || _
                          ? (0, n.jsx)(c.y, {
                                type: c.y.Type.SPINNING_CIRCLE,
                                "aria-label": e_.intl.string(e_.t.ZTNur7),
                            })
                          : (0, n.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: e_.intl.string(e_.t.F8FvUy),
                            }),
              }),
          })
        : (0, n.jsxs)("div", {
              className: eV.MY,
              children: [
                  (0, n.jsx)(u.Gt, {
                      className: eV.XG,
                      children: (0, n.jsxs)("div", {
                          className: s()(eV.Qs, { [eV.Dy]: I }),
                          children: [
                              h && g ? (0, n.jsx)(z.A, { onPublish: S }) : null,
                              (0, n.jsx)(eK, {
                                  guildId: t,
                                  header: I ? A.header : a.header,
                                  isEditing: I,
                                  canEdit: h,
                                  isSaving: "saving" === m,
                              }),
                              I
                                  ? (0, n.jsx)(eU, { guildId: t, widgets: C })
                                  : (0, n.jsx)(ej.A, { guildId: t, widgets: C }),
                          ],
                      }),
                  }),
                  (0, n.jsx)(eA, { guildId: t, isEditing: I }),
              ],
          });
}
