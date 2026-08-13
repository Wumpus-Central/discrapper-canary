i.r(t), i.d(t, { default: () => eb });
var l = i(477900),
    n = i(582128),
    a = i(17928),
    r = i(834730),
    s = i(289873),
    d = i(689175),
    c = i(71393),
    u = i(562708),
    o = i(636537),
    f = i(228366),
    _ = i(499785),
    E = i(158390),
    h = i(927813);
let S = h.A.Millis.SECOND,
    g = h.A.Millis.MINUTE,
    A = {};
class I extends a.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return A[e]?.space;
    }
    getFetchStatus(e) {
        return A[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return A[e]?.backoff?.pending === !0;
    }
}
let C = new I(f.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: i, requestId: l } = e,
            n = (null == (t = A[i]) && ((t = { fetchStatus: "idle" }), (A[i] = t)), t);
        (n.fetchStatus = "loading"), (n.activeFetchRequestId = l);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: i, space: l } = e,
            n = A[t];
        if (n?.activeFetchRequestId !== i) return !1;
        delete n.activeFetchRequestId, (n.space = l), (n.fetchStatus = "success"), n.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: i, retryable: l } = e,
            n = A[t];
        if (n?.activeFetchRequestId !== i) return !1;
        delete n.activeFetchRequestId,
            (n.fetchStatus = "error"),
            l &&
                (null == n.backoff && (n.backoff = new E.A(S, g, !0)),
                n.backoff.pending ||
                    n.backoff.fail(() => f.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            i = A[t];
        if (i?.fetchStatus !== "error") return !1;
        i.backoff?.cancel(), (i.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t, space: i } = e,
            l = A[t];
        if (null == l) return !1;
        delete l.activeFetchRequestId, (l.space = i), (l.fetchStatus = "success"), l.backoff?.succeed();
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i) return !1;
        A[t]?.backoff?.cancel(), delete A[t];
    },
    LOGOUT: function () {
        Object.values(A).forEach((e) => e?.backoff?.cancel()), (A = {});
    },
});
function m(e) {
    return !(e instanceof o.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var D = i(652215);
let p = 0;
async function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = C.getFetchStatus(e),
        l = t && "error" === i && !C.isInBackoff(e);
    if ("idle" !== i && !l) return;
    let n = p++;
    f.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: n });
    try {
        let { body: t } = await _.A.get({
            url: D.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: u.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        f.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: n, space: t });
    } catch (t) {
        f.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: n, retryable: m(t) });
    }
}
async function G(e, t) {
    let { body: i } = await o.Bo.patch({ url: D.Rsh.GUILD_SPACE_SETTINGS(e), body: t, rejectWithError: !0 });
    return i;
}
var v = i(626584),
    x = i(754674);
let y = {};
function L(e) {
    let t = y[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class U extends a.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return y[e]?.draft;
    }
    isEditing(e) {
        return null != y[e];
    }
    getSaveStatus(e) {
        return y[e]?.saveStatus ?? "idle";
    }
}
let j = new U(f.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        y[t] = { draft: { header: i.header, widgets: (0, x.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            l = L(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, widgets: (0, x.QD)(l.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: l, targetIndex: n } = e,
            a = L(t);
        if (null == a) return !1;
        let r = (0, x.Gm)(a.draft.widgets, i, l, n);
        if (null == r) return !1;
        a.draft = { ...a.draft, widgets: r };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            l = L(t);
        if (null == l) return !1;
        let n = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (n.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, x.W$)(n) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: l } = e,
            n = L(t);
        if (null == n) return !1;
        let a = n.draft.widgets.map((e) => (e.id === i ? { ...e, config: l } : e));
        n.draft = { ...n.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            l = y[t];
        if (null == l) return !1;
        (l.saveStatus = "saving"), (l.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            l = y[t];
        if (l?.activeSaveRequestId !== i) return !1;
        delete l.activeSaveRequestId, (l.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == y[t]) return !1;
        delete y[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == y[t]) return !1;
        delete y[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == y[t]) return !1;
        delete y[t];
    },
    LOGOUT: function () {
        y = {};
    },
});
var P = i(593673);
let R = "draft:",
    N = 0,
    b = new v.A("GuildSpaceEditorActionCreators"),
    w = 0;
function F(e) {
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function O(e, t, i, l) {
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: l });
}
async function k(e) {
    let t = j.getDraft(e);
    if (null == t || "saving" === j.getSaveStatus(e)) return;
    let i = {
            header: t.header,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: l, config: n } = e,
                    a = {
                        type: i,
                        position: l,
                        config: (function (e) {
                            if (e.type === P.a.IMAGE_TEXT) {
                                let t = { type: e.type, text: e.text, title: e.title };
                                return void 0 !== e.image && (t.image = e.image), t;
                            }
                            return e;
                        })(n),
                    };
                return t.startsWith(R) || (a.id = t), a;
            }),
        },
        l = w++;
    f.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: l });
    try {
        let { body: t } = await o.Bo.put({ url: D.Rsh.GUILD_SPACE(e), body: i, rejectWithError: !0 });
        f.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        b.error("Failed to save guild space", { guildId: e, error: t }),
            f.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: l });
    }
}
var H = i(363957);
let M = 0;
async function W(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = H.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let n = M++;
    f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: n, widgetIds: l });
    try {
        let { body: t } = await o.Bo.get({
            url: D.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: n, widgets: t.widgets });
    } catch (t) {
        f.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: n, retryable: m(t) });
    }
}
var B = i(470452),
    q = i(872188),
    V = i(503698),
    K = i.n(V),
    Y = i(686246),
    X = i(651300),
    $ = i(451395),
    z = i(317574),
    J = i(487692),
    Q = i(983283),
    Z = i(375708),
    ee = i(84899);
let et = "GUILD_SPACE_WIDGET",
    ei = "GUILD_SPACE_WIDGETS",
    el = `${et}_${ei}`;
function en(e) {
    let {
            guildId: t,
            widget: i,
            column: r,
            positionNumber: s,
            columnWidgetCount: d,
            flatIndex: c,
            leftColumnCount: u,
            onReorder: o,
            isSaving: _,
        } = e,
        E = n.useRef(null),
        h = n.useRef(null),
        S = (0, a.bG)([H.A], () => (i.requires_hydration ? H.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        { isDragging: g, dragSourcePosition: A } = (0, $.gY)({
            dragRef: E,
            dropRef: h,
            index: c,
            listType: ei,
            itemType: et,
            itemId: i.id,
            onReorder: o,
            canDrag: !_,
        }),
        I = null == A ? null : A < u ? x.FT : x.yM,
        C = null != I && I !== r;
    return (0, l.jsx)("div", {
        ref: h,
        className: K()(ee.NI, { [ee.cB]: g, [ee.ne]: null != A && (C || A > c), [ee.O3]: null != A && !C && A < c }),
        "data-dnd-name": Z.intl.formatToPlainString(r === x.yM ? Q.default.O9RvHQ : Q.default["+cSvS8"], {
            positionNumber: s,
            positionCount: d,
        }),
        children: (0, l.jsx)(z.P, {
            widget: i,
            guildSpaceMode: "edit",
            hydration: S,
            dragHandleRef: E,
            disabled: _,
            onRemove: () => {
                var e;
                return (
                    (e = i.id), void f.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: t, widgetId: e })
                );
            },
            onCommitConfig: (e) => {
                var l;
                return (
                    (l = i.id),
                    void f.h.dispatch({
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
function ea(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = n.useRef(null),
        [{ isOver: r }, s] = (0, X.H)({
            accept: el,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        n.useLayoutEffect(
            () => (
                s(a),
                () => {
                    s(null);
                }
            ),
            [s],
        ),
        (0, l.jsx)("div", {
            ref: a,
            className: K()(ee.wr, { [ee.SX]: r }),
            "data-dnd-name": Z.intl.string(t === x.yM ? Q.default.fWef0G : Q.default.KcdDyT),
        })
    );
}
function er(e) {
    let { guildId: t, widgets: i } = e,
        r = n.useMemo(() => (0, x.Rl)(i), [i]),
        s = n.useMemo(
            () =>
                r.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != J.m[t];
                    }),
                ),
            [r],
        ),
        d = n.useMemo(() => [...s[x.FT], ...s[x.yM]], [s]),
        c = (0, Y.V)((e) => e.isDragging() && e.getItemType() === el),
        u = (0, a.bG)([j], () => "saving" === j.getSaveStatus(t), [t]),
        o = n.useCallback(
            (e, i) => {
                let l = d[e],
                    n = d[i];
                null != l && null != n && O(t, l.id, n.position.column, n.position.order);
            },
            [t, d],
        ),
        f = n.useCallback(
            (e, i) => {
                O(t, e, i, r[i]?.length ?? 0);
            },
            [t, r],
        );
    return (0, l.jsx)("div", {
        className: ee.Vg,
        children: s.map((e, i) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ee.fi,
                    children: [
                        e.map((n, a) =>
                            (0, l.jsx)(
                                en,
                                {
                                    guildId: t,
                                    widget: n,
                                    column: i,
                                    positionNumber: a + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === x.yM ? s[x.FT].length + a : a,
                                    leftColumnCount: s[x.FT].length,
                                    onReorder: o,
                                    isSaving: u,
                                },
                                n.id,
                            ),
                        ),
                        c && !u && (0, l.jsx)(ea, { column: i, onDropAtEnd: f }),
                    ],
                },
                i,
            ),
        ),
    });
}
var es = i(331322),
    ed = i(821609),
    ec = i(499373),
    eu = i(825484),
    eo = i(189213),
    ef = i(939249),
    e_ = i(245604),
    eE = i(104510),
    eh = i(661531),
    eS = i(192308),
    eg = i(775602);
async function eA(e) {
    f.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await o.Bo.get({ url: D.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        f.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        f.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
let eI = {};
function eC(e) {
    let t = eI[e];
    return null == t && ((t = { fetchStatus: "idle" }), (eI[e] = t)), t;
}
class em extends a.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(e) {
        return eI[e]?.widgets;
    }
    getFetchStatus(e) {
        return eI[e]?.fetchStatus ?? "idle";
    }
}
let eD = new em(f.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (e) {
        let { guildId: t } = e;
        eC(t).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (e) {
        let { guildId: t, widgets: i } = e,
            l = eC(t);
        (l.widgets = i), (l.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        eC(t).fetchStatus = "error";
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == eI[t]) return !1;
        delete eI[t];
    },
    LOGOUT: function () {
        eI = {};
    },
});
var ep = i(241181);
function eT(e) {
    let { widget: t, onClick: i } = e,
        n = (0, a.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        { catalog_image_static_url: s, catalog_image_animated_url: d } = t.assets,
        c = (n ? null : d) ?? s,
        u = t.boost_price;
    return (0, l.jsxs)(ef.D, {
        className: ep.HL,
        onClick: i,
        children: [
            (0, l.jsxs)("div", {
                className: ep.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: ep.YI, src: c, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: ep.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: ep.Ti, children: (0, l.jsx)("div", { className: ep.dK }) }),
                            (0, l.jsxs)(es.B, {
                                className: ep.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(e_.U, {}),
                                    (0, l.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: Z.intl.string(Q.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(es.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(r.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != u && u > 0
                        ? (0, l.jsxs)(es.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(eE._, { size: "sm", color: eh.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: Z.intl.format(Q.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: Z.intl.string(Q.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eG(e) {
    let { guildId: t, ...i } = e,
        r = (0, a.yK)([eD, j], () => {
            let e = j.getDraft(t)?.widgets ?? [];
            var i = eD.getWidgets(t) ?? [];
            let l = new Map();
            for (let t of e) l.set(t.type, (l.get(t.type) ?? 0) + 1);
            return i.filter((e) => (l.get(e.type) ?? 0) < e.max_instances);
        }, [t]);
    return (
        n.useEffect(() => {
            eA(t);
        }, [t]),
        (0, l.jsx)(eo.Modal, {
            title: Z.intl.string(Q.default.L8Xfoo),
            subtitle: Z.intl.string(Q.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: ep.Vg,
                children: r.map((e) =>
                    (0, l.jsx)(
                        eT,
                        {
                            widget: e,
                            onClick: () => {
                                var l, n;
                                (l = e.type),
                                    (n = e.name),
                                    f.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: t,
                                        widget: (function (e, t) {
                                            let i = {
                                                id: `${R}${N++}`,
                                                position: { column: x.FT, order: 0 },
                                                requires_hydration: !1,
                                                default_title: t,
                                            };
                                            switch (e) {
                                                case P.a.IMAGE_TEXT:
                                                    return {
                                                        ...i,
                                                        type: e,
                                                        config: { type: e, title: null, image_hash: null, text: null },
                                                    };
                                                case P.a.LEADERBOARD:
                                                case P.a.WHITEBOARD:
                                                case P.a.POPULAR_MUSIC:
                                                case P.a.LIVE_ACTIVITY:
                                                    return { ...i, type: e, config: { type: e } };
                                            }
                                        })(l, n),
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
function ev(e) {
    let { guildId: t, isEditing: i } = e,
        n = (0, a.bG)([j], () => j.getSaveStatus(t), [t]);
    if (!i)
        return (0, l.jsx)(es.B, {
            direction: "horizontal",
            justify: "end",
            children: (0, l.jsx)(ed.$, {
                variant: "secondary",
                text: Z.intl.string(Z.t.lXCMda),
                onClick: () => {
                    let e;
                    null != (e = C.getSpace(t)) &&
                        f.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: t, space: e });
                },
            }),
        });
    let s = "saving" === n;
    return (0, l.jsxs)(es.B, {
        direction: "horizontal",
        justify: "end",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)(ed.$, {
                variant: "secondary",
                icon: ec.T,
                text: Z.intl.string(Q.default.L8Xfoo),
                disabled: s,
                onClick: () => {
                    let e;
                    return (
                        (e = (e) => (0, l.jsx)(eG, { guildId: t, ...e })),
                        void (0, eS.openModalLazy)(() => Promise.resolve(e), { modalKey: "guild-space-add-widget" })
                    );
                },
            }),
            "error" === n &&
                (0, l.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    role: "alert",
                    children: Z.intl.string(Z.t.HmFYc5),
                }),
            (0, l.jsxs)(eu.e, {
                children: [
                    (0, l.jsx)(ed.$, {
                        variant: "secondary",
                        text: Z.intl.string(Z.t["ETE/oC"]),
                        disabled: s,
                        onClick: () => F(t),
                    }),
                    (0, l.jsx)(ed.$, {
                        variant: "primary",
                        text: Z.intl.string(Z.t["R3BPH+"]),
                        loading: s,
                        onClick: () => {
                            k(t);
                        },
                    }),
                ],
            }),
        ],
    });
}
var ex = i(529609),
    ey = i(297264),
    eL = i(548118),
    eU = i(498642),
    ej = i(486020),
    eP = i(555063);
function eR(e) {
    let { guildId: t, header: i } = e,
        s = (0, a.bG)([c.A], () => c.A.getGuild(t), [t]),
        d = (0, a.bG)([eU.A], () => eU.A.getOnlineCount(t), [t]),
        u = (0, a.bG)([eU.A], () => eU.A.getMemberCount(t), [t]),
        o = i.custom_banner_hash ?? s?.banner,
        f = n.useMemo(() => (null == s ? null : ej.Ay.getGuildBannerURL({ id: s.id, banner: o })), [s, o]);
    return null == s
        ? null
        : (0, l.jsxs)("div", {
              className: eP.wx,
              children: [
                  null != f ? (0, l.jsx)("img", { className: eP.vK, src: f, alt: "" }) : null,
                  (0, l.jsx)("div", { className: eP.f5, "aria-hidden": !0 }),
                  (0, l.jsxs)("div", {
                      className: eP.D_,
                      children: [
                          (0, l.jsx)(eL.Ay, {
                              className: eP.Kk,
                              guild: s,
                              size: eL.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eP.pq,
                              children: [
                                  (0, l.jsx)(ey.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: s.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eP.M1,
                                      children: [
                                          null != d
                                              ? (0, l.jsxs)("div", {
                                                    className: eP.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eP.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(r.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: Z.intl.format(Q.default.G08ClG, { count: d }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != u
                                              ? (0, l.jsxs)("div", {
                                                    className: eP.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eP.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(r.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: Z.intl.format(Q.default["rp7bx+"], { count: u }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eP.dJ,
                                              children: [
                                                  (0, l.jsx)(eE._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(r.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: Z.intl.format(Q.default.DwFqrb, {
                                                          count: s.premiumSubscriberCount,
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
              ],
          });
}
var eN = i(278093);
function eb(e) {
    let { guildId: t } = e,
        i = n.useRef(null),
        [u, o, f] = (0, a.yK)([C], () => [C.getSpace(t), C.getFetchStatus(t), C.isInBackoff(t)], [t]);
    n.useEffect(() => {
        let e = i.current !== t;
        (i.current = t), T(t, e);
    }, [o, t]);
    let _ = (0, a.bG)([c.A], () => c.A.getGuild(t), [t]),
        E = (0, B.mN)(_),
        h = _?.guildSpaceSettings?.publish_status !== P.B.PUBLISHED,
        S = n.useCallback(() => G(t, { publish_status: P.B.PUBLISHED }), [t]),
        [g, A] = (0, a.yK)([j], () => [j.getDraft(t), j.getSaveStatus(t)], [t]),
        I = E && null != g,
        m = I ? g.widgets : u?.widgets;
    n.useEffect(() => {
        E || null == g || "saving" === A || F(t);
    }, [E, g, A, t]);
    let D = n.useMemo(
            () =>
                (m ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [m],
        ),
        p = (0, a.yK)([H.A], () => H.A.getWidgetIdsToHydrate(t, D), [t, D]),
        v = n.useRef(null);
    return (n.useEffect(() => {
        if (v.current !== t && null != u) {
            (v.current = t), W(t, D, !0);
            return;
        }
        W(t, p);
    }, [t, u, D, p]),
    null == u || null == m)
        ? (0, l.jsx)("div", {
              className: eN.MY,
              children: (0, l.jsx)("div", {
                  className: eN.F,
                  children:
                      "error" !== o || f
                          ? (0, l.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE, "aria-label": Z.intl.string(Z.t.ZTNur7) })
                          : (0, l.jsx)(r.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: Z.intl.string(Z.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)("div", {
              className: eN.MY,
              children: (0, l.jsx)(d.Gt, {
                  className: eN.XG,
                  children: (0, l.jsxs)("div", {
                      className: eN.Qs,
                      children: [
                          E && h ? (0, l.jsx)(q.A, { onPublish: S }) : null,
                          (0, l.jsx)(eR, { guildId: t, header: I ? g.header : u.header }),
                          E && (0, l.jsx)(ev, { guildId: t, isEditing: I }),
                          I ? (0, l.jsx)(er, { guildId: t, widgets: m }) : (0, l.jsx)(ex.A, { guildId: t, widgets: m }),
                      ],
                  }),
              }),
          });
}
