i.r(e), i.d(e, { default: () => tA });
var a = i(477900),
    r = i(582128),
    l = i(17928),
    n = i(834730),
    s = i(289873),
    c = i(689175),
    d = i(71393),
    u = i(562708),
    o = i(228366),
    _ = i(499785),
    f = i(158390),
    E = i(927813);
let S = E.A.Millis.SECOND,
    h = E.A.Millis.MINUTE,
    A = {};
class g extends l.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(t) {
        return A[t]?.space;
    }
    getFetchStatus(t) {
        return A[t]?.fetchStatus ?? "idle";
    }
    isInBackoff(t) {
        return A[t]?.backoff?.pending === !0;
    }
}
let I = new g(o.h, {
    GUILD_SPACE_FETCH_START: function (t) {
        let e,
            { guildId: i, requestId: a } = t,
            r = (null == (e = A[i]) && ((e = { fetchStatus: "idle" }), (A[i] = e)), e);
        (r.fetchStatus = "loading"), (r.activeFetchRequestId = a);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (t) {
        let { guildId: e, requestId: i, space: a } = t,
            r = A[e];
        if (r?.activeFetchRequestId !== i) return !1;
        delete r.activeFetchRequestId, (r.space = a), (r.fetchStatus = "success"), r.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (t) {
        let { guildId: e, requestId: i, retryable: a } = t,
            r = A[e];
        if (r?.activeFetchRequestId !== i) return !1;
        delete r.activeFetchRequestId,
            (r.fetchStatus = "error"),
            a &&
                (null == r.backoff && (r.backoff = new f.A(S, h, !0)),
                r.backoff.pending ||
                    r.backoff.fail(() => o.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: e })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (t) {
        let { guildId: e } = t,
            i = A[e];
        if (i?.fetchStatus !== "error") return !1;
        i.backoff?.cancel(), (i.fetchStatus = "idle");
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (t) {
        let { guildId: e, space: i } = t,
            a = A[e];
        if (null == a) return !1;
        delete a.activeFetchRequestId, (a.space = i), (a.fetchStatus = "success"), a.backoff?.succeed();
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i) return !1;
        A[e]?.backoff?.cancel(), delete A[e];
    },
    LOGOUT: function () {
        Object.values(A).forEach((t) => t?.backoff?.cancel()), (A = {});
    },
});
var C = i(562465);
function D(t) {
    return !(t instanceof C.oh) || t.status < 400 || t.status >= 500 || 429 === t.status;
}
var T = i(652215);
let p = 0;
async function G(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = I.getFetchStatus(t),
        a = e && "error" === i && !I.isInBackoff(t);
    if ("idle" !== i && !a) return;
    let r = p++;
    o.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: r });
    try {
        let { body: e } = await _.A.get({
            url: T.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: u.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: r, space: e });
    } catch (e) {
        o.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: r, retryable: D(e) });
    }
}
var L = i(626584),
    v = i(754674);
let U = {};
function x(t) {
    let e = U[t];
    return e?.saveStatus === "saving" ? void 0 : e;
}
class y extends l.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(t) {
        return U[t]?.draft;
    }
    isEditing(t) {
        return null != U[t];
    }
    getSaveStatus(t) {
        return U[t]?.saveStatus ?? "idle";
    }
}
let m = new y(o.h, {
    GUILD_SPACE_EDIT_START: function (t) {
        let { guildId: e, space: i } = t;
        U[e] = { draft: { header: i.header, widgets: (0, v.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (t) {
        let { guildId: e, widget: i } = t,
            a = x(e);
        if (null == a) return !1;
        a.draft = { ...a.draft, widgets: (0, v.QD)(a.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (t) {
        let { guildId: e, widgetId: i, targetColumn: a, targetIndex: r } = t,
            l = x(e);
        if (null == l) return !1;
        let n = (0, v.Gm)(l.draft.widgets, i, a, r);
        if (null == n) return !1;
        l.draft = { ...l.draft, widgets: n };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (t) {
        let { guildId: e, widgetId: i } = t,
            a = x(e);
        if (null == a) return !1;
        let r = a.draft.widgets.filter((t) => {
            let { id: e } = t;
            return e !== i;
        });
        if (r.length === a.draft.widgets.length) return !1;
        a.draft = { ...a.draft, widgets: (0, v.W$)(r) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (t) {
        let { guildId: e, widgetId: i, config: a } = t,
            r = x(e);
        if (null == r) return !1;
        let l = r.draft.widgets.map((t) => (t.id === i ? { ...t, config: a } : t));
        r.draft = { ...r.draft, widgets: l };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (t) {
        let { guildId: e, requestId: i } = t,
            a = U[e];
        if (null == a) return !1;
        (a.saveStatus = "saving"), (a.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (t) {
        let { guildId: e, requestId: i } = t,
            a = U[e];
        if (a?.activeSaveRequestId !== i) return !1;
        delete a.activeSaveRequestId, (a.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (t) {
        let { guildId: e } = t;
        if (null == U[e]) return !1;
        delete U[e];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (t) {
        let { guildId: e } = t;
        if (null == U[e]) return !1;
        delete U[e];
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == U[e]) return !1;
        delete U[e];
    },
    LOGOUT: function () {
        U = {};
    },
});
var P = i(593673);
let R = "draft:",
    j = 0,
    w = new L.A("GuildSpaceEditorActionCreators"),
    F = 0;
function N(t) {
    o.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: t });
}
async function b(t) {
    let e = m.getDraft(t);
    if (null == e || "saving" === m.getSaveStatus(t)) return;
    let i = {
            header: e.header,
            widgets: e.widgets.map((t) => {
                let { id: e, type: i, position: a, config: r } = t;
                return e.startsWith(R)
                    ? { type: i, position: a, config: r }
                    : { id: e, type: i, position: a, config: r };
            }),
        },
        a = F++;
    o.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: t, requestId: a });
    try {
        let { body: e } = await C.Bo.put({ url: T.Rsh.GUILD_SPACE(t), body: i, rejectWithError: !0 });
        o.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: t, space: e });
    } catch (e) {
        w.error("Failed to save guild space", { guildId: t, error: e }),
            o.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: t, requestId: a });
    }
}
var k = i(363957);
let H = 0;
async function O(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: t, widgetIds: e });
    let a = k.A.getWidgetIdsToHydrate(t, e);
    if (0 === a.length) return;
    let r = H++;
    o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: t, requestId: r, widgetIds: a });
    try {
        let { body: e } = await C.Bo.get({
            url: T.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(t),
            query: { widget_ids: a },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: t, requestId: r, widgets: e.widgets });
    } catch (e) {
        o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: t, requestId: r, retryable: D(e) });
    }
}
var W = i(470452),
    B = i(331322),
    M = i(821609),
    q = i(499373),
    K = i(825484),
    Y = i(189213),
    V = i(939249),
    X = i(245604),
    $ = i(104510),
    z = i(661531),
    Q = i(192308),
    J = i(775602);
async function Z(t) {
    o.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: t });
    try {
        let { body: e } = await C.Bo.get({ url: T.Rsh.GUILD_SPACE_WIDGETS_CATALOG(t), rejectWithError: !0 });
        o.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: t, widgets: e.widgets });
    } catch {
        o.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: t });
    }
}
let tt = {};
function te(t) {
    let e = tt[t];
    return null == e && ((e = { fetchStatus: "idle" }), (tt[t] = e)), e;
}
class ti extends l.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(t) {
        return tt[t]?.widgets;
    }
    getFetchStatus(t) {
        return tt[t]?.fetchStatus ?? "idle";
    }
}
let ta = new ti(o.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (t) {
        let { guildId: e } = t;
        te(e).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (t) {
        let { guildId: e, widgets: i } = t,
            a = te(e);
        (a.widgets = i), (a.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        te(e).fetchStatus = "error";
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == tt[e]) return !1;
        delete tt[e];
    },
    LOGOUT: function () {
        tt = {};
    },
});
var tr = i(983283),
    tl = i(375708),
    tn = i(241181);
function ts(t) {
    let { widget: e, onClick: i } = t,
        r = (0, l.bG)([J.Ay], () => J.Ay.useReducedMotion),
        { catalog_image_static_url: s, catalog_image_animated_url: c } = e.assets,
        d = (r ? null : c) ?? s,
        u = e.boost_price;
    return (0, a.jsxs)(V.D, {
        className: tn.HL,
        onClick: i,
        children: [
            (0, a.jsxs)("div", {
                className: tn.b3,
                children: [
                    null != d && (0, a.jsx)("img", { className: tn.YI, src: d, alt: "" }),
                    (0, a.jsxs)("div", {
                        className: tn.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, a.jsx)("div", { className: tn.Ti, children: (0, a.jsx)("div", { className: tn.dK }) }),
                            (0, a.jsxs)(B.B, {
                                className: tn.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, a.jsx)(X.U, {}),
                                    (0, a.jsx)(n.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: tl.intl.string(tr.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)(B.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(n.E, { variant: "text-sm/semibold", color: "text-default", children: e.name }),
                    null != u && u > 0
                        ? (0, a.jsxs)(B.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, a.jsx)($._, { size: "sm", color: z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, a.jsx)(n.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: tl.intl.format(tr.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(n.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: tl.intl.string(tr.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function tc(t) {
    let { guildId: e, ...i } = t,
        n = (0, l.yK)([ta, m], () => {
            let t = m.getDraft(e)?.widgets ?? [];
            var i = ta.getWidgets(e) ?? [];
            let a = new Map();
            for (let e of t) a.set(e.type, (a.get(e.type) ?? 0) + 1);
            return i.filter((t) => (a.get(t.type) ?? 0) < t.max_instances);
        }, [e]);
    return (
        r.useEffect(() => {
            Z(e);
        }, [e]),
        (0, a.jsx)(Y.Modal, {
            title: tl.intl.string(tr.default.L8Xfoo),
            subtitle: tl.intl.string(tr.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, a.jsx)("div", {
                className: tn.Vg,
                children: n.map((t) =>
                    (0, a.jsx)(
                        ts,
                        {
                            widget: t,
                            onClick: () => {
                                var a;
                                (a = t.type),
                                    o.h.dispatch({
                                        type: "GUILD_SPACE_EDIT_ADD_WIDGET",
                                        guildId: e,
                                        widget: (function (t) {
                                            let e = {
                                                id: `${R}${j++}`,
                                                position: { column: v.FT, order: 0 },
                                                requires_hydration: !1,
                                            };
                                            switch (t) {
                                                case P.a.IMAGE_TEXT:
                                                    return {
                                                        ...e,
                                                        type: t,
                                                        config: { type: t, image_hash: null, text: null },
                                                    };
                                                case P.a.LEADERBOARD:
                                                case P.a.WHITEBOARD:
                                                case P.a.POPULAR_MUSIC:
                                                case P.a.LIVE_ACTIVITY:
                                                    return { ...e, type: t, config: { type: t } };
                                            }
                                        })(a),
                                    }),
                                    i.onClose();
                            },
                        },
                        t.type,
                    ),
                ),
            }),
        })
    );
}
function td(t) {
    let { guildId: e, isEditing: i } = t,
        r = (0, l.bG)([m], () => m.getSaveStatus(e), [e]);
    if (!i)
        return (0, a.jsx)(B.B, {
            direction: "horizontal",
            justify: "end",
            children: (0, a.jsx)(M.$, {
                variant: "secondary",
                text: tl.intl.string(tl.t.lXCMda),
                onClick: () => {
                    let t;
                    null != (t = I.getSpace(e)) &&
                        o.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: t });
                },
            }),
        });
    let s = "saving" === r;
    return (0, a.jsxs)(B.B, {
        direction: "horizontal",
        justify: "end",
        align: "center",
        gap: 12,
        children: [
            (0, a.jsx)(M.$, {
                variant: "secondary",
                icon: q.T,
                text: tl.intl.string(tr.default.L8Xfoo),
                disabled: s,
                onClick: () => {
                    let t;
                    return (
                        (t = (t) => (0, a.jsx)(tc, { guildId: e, ...t })),
                        void (0, Q.openModalLazy)(() => Promise.resolve(t), { modalKey: "guild-space-add-widget" })
                    );
                },
            }),
            "error" === r &&
                (0, a.jsx)(n.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    role: "alert",
                    children: tl.intl.string(tl.t.HmFYc5),
                }),
            (0, a.jsxs)(K.e, {
                children: [
                    (0, a.jsx)(M.$, {
                        variant: "secondary",
                        text: tl.intl.string(tl.t["ETE/oC"]),
                        disabled: s,
                        onClick: () => N(e),
                    }),
                    (0, a.jsx)(M.$, {
                        variant: "primary",
                        text: tl.intl.string(tl.t["R3BPH+"]),
                        loading: s,
                        onClick: () => void b(e),
                    }),
                ],
            }),
        ],
    });
}
var tu = i(529609),
    to = i(297264),
    t_ = i(548118),
    tf = i(486020),
    tE = i(555063);
function tS(t) {
    let { guildId: e, header: i } = t,
        n = (0, l.bG)([d.A], () => d.A.getGuild(e), [e]),
        s = i.custom_banner_hash ?? n?.banner,
        c = r.useMemo(() => (null == n ? null : tf.Ay.getGuildBannerURL({ id: n.id, banner: s })), [n, s]);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: tE.wx,
              children: [
                  null != c ? (0, a.jsx)("img", { className: tE.vK, src: c, alt: "" }) : null,
                  (0, a.jsxs)("div", {
                      className: tE.D_,
                      children: [
                          (0, a.jsx)(t_.Ay, {
                              className: tE.Kk,
                              guild: n,
                              size: t_.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(to.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                      ],
                  }),
              ],
          });
}
var th = i(278093);
function tA(t) {
    let { guildId: e } = t,
        i = r.useRef(null),
        [u, o, _] = (0, l.yK)([I], () => [I.getSpace(e), I.getFetchStatus(e), I.isInBackoff(e)], [e]);
    r.useEffect(() => {
        let t = i.current !== e;
        (i.current = e), G(e, t);
    }, [o, e]);
    let f = (0, l.bG)([d.A], () => d.A.getGuild(e), [e]),
        E = (0, W.mN)(f),
        [S, h] = (0, l.yK)([m], () => [m.getDraft(e), m.getSaveStatus(e)], [e]),
        A = E && null != S,
        g = A ? S.widgets : u?.widgets;
    r.useEffect(() => {
        E || null == S || "saving" === h || N(e);
    }, [E, S, h, e]);
    let C = r.useMemo(
            () =>
                (g ?? [])
                    .filter((t) => {
                        let { requires_hydration: e } = t;
                        return e;
                    })
                    .map((t) => {
                        let { id: e } = t;
                        return e;
                    }),
            [g],
        ),
        D = (0, l.yK)([k.A], () => k.A.getWidgetIdsToHydrate(e, C), [e, C]),
        T = r.useRef(null);
    return (r.useEffect(() => {
        if (T.current !== e && null != u) {
            (T.current = e), O(e, C, !0);
            return;
        }
        O(e, D);
    }, [e, u, C, D]),
    null == u || null == g)
        ? (0, a.jsx)("div", {
              className: th.MY,
              children: (0, a.jsx)("div", {
                  className: th.F,
                  children:
                      "error" !== o || _
                          ? (0, a.jsx)(s.y, {
                                type: s.y.Type.SPINNING_CIRCLE,
                                "aria-label": tl.intl.string(tl.t.ZTNur7),
                            })
                          : (0, a.jsx)(n.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: tl.intl.string(tl.t.F8FvUy),
                            }),
              }),
          })
        : (0, a.jsx)("div", {
              className: th.MY,
              children: (0, a.jsx)(c.Gt, {
                  className: th.XG,
                  children: (0, a.jsxs)("div", {
                      className: th.Qs,
                      children: [
                          (0, a.jsx)(tS, { guildId: e, header: A ? S.header : u.header }),
                          E && (0, a.jsx)(td, { guildId: e, isEditing: A }),
                          (0, a.jsx)(tu.A, { guildId: e, widgets: g }),
                      ],
                  }),
              }),
          });
}
