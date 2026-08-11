l.r(e), l.d(e, { default: () => tn });
var s = l(477900),
    i = l(582128),
    a = l(17928),
    r = l(834730),
    n = l(289873),
    d = l(689175),
    c = l(71393),
    u = l(562708),
    o = l(562465),
    h = l(228366),
    g = l(499785),
    A = l(716357);
function x(t) {
    return !(t instanceof o.oh) || t.status < 400 || t.status >= 500 || 429 === t.status;
}
var m = l(652215);
let _ = 0;
async function E(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = A.A.getFetchStatus(t),
        s = e && "error" === l && !A.A.isInBackoff(t);
    if ("idle" !== l && !s) return;
    let i = _++;
    h.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: i });
    try {
        let { body: e } = await g.A.get({
            url: m.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: u.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: i, space: e });
    } catch (e) {
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: i, retryable: x(e) });
    }
}
async function C(t, e) {
    let { body: l } = await o.Bo.patch({ url: m.Rsh.GUILD_SPACE_SETTINGS(t), body: e, rejectWithError: !0 });
    return l;
}
var f = l(202762),
    S = l(88592),
    j = l(363957);
let p = 0;
async function v(t, e) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l && h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: t, widgetIds: e });
    let s = j.A.getWidgetIdsToHydrate(t, e);
    if (0 === s.length) return;
    let i = p++;
    h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: t, requestId: i, widgetIds: s });
    try {
        let { body: e } = await o.Bo.get({
            url: m.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(t),
            query: { widget_ids: s },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: t, requestId: i, widgets: e.widgets });
    } catch (e) {
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: t, requestId: i, retryable: x(e) });
    }
}
var y = l(593673),
    G = l(470452),
    T = l(236053),
    I = l(872188),
    L = l(8074),
    D = l(331322),
    N = l(821609),
    U = l(499373),
    b = l(825484),
    w = l(189213),
    R = l(939249),
    P = l(245604),
    F = l(104510),
    H = l(661531),
    k = l(192308),
    B = l(775602);
async function O(t) {
    h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: t });
    try {
        let { body: e } = await o.Bo.get({ url: m.Rsh.GUILD_SPACE_WIDGETS_CATALOG(t), rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: t, widgets: e.widgets });
    } catch {
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: t });
    }
}
let W = {};
function M(t) {
    let e = W[t];
    return null == e && ((e = { fetchStatus: "idle" }), (W[t] = e)), e;
}
class K extends a.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(t) {
        return W[t]?.widgets;
    }
    getFetchStatus(t) {
        return W[t]?.fetchStatus ?? "idle";
    }
}
let Y = new K(h.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (t) {
        let { guildId: e } = t;
        M(e).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (t) {
        let { guildId: e, widgets: l } = t,
            s = M(e);
        (s.widgets = l), (s.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        M(e).fetchStatus = "error";
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: l },
        } = t;
        if (l || null == W[e]) return !1;
        delete W[e];
    },
    LOGOUT: function () {
        W = {};
    },
});
var z = l(855823),
    X = l(983283),
    q = l(375708),
    J = l(241181);
function $(t) {
    let { widget: e, onClick: l } = t,
        i = (0, a.bG)([B.Ay], () => B.Ay.useReducedMotion),
        { catalog_image_static_url: n, catalog_image_animated_url: d } = e.assets,
        c = (i ? null : d) ?? n,
        u = e.boost_price;
    return (0, s.jsxs)(R.D, {
        className: J.HL,
        onClick: l,
        children: [
            (0, s.jsxs)("div", {
                className: J.b3,
                children: [
                    null != c && (0, s.jsx)("img", { className: J.YI, src: c, alt: "" }),
                    (0, s.jsxs)("div", {
                        className: J.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, s.jsx)("div", { className: J.Ti, children: (0, s.jsx)("div", { className: J.dK }) }),
                            (0, s.jsxs)(D.B, {
                                className: J.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, s.jsx)(P.U, {}),
                                    (0, s.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: q.intl.string(X.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(D.B, {
                gap: 4,
                children: [
                    (0, s.jsx)(r.E, { variant: "text-sm/semibold", color: "text-default", children: e.name }),
                    null != u && u > 0
                        ? (0, s.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, s.jsx)(F._, { size: "sm", color: H.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, s.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: q.intl.format(X.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: q.intl.string(X.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function Q(t) {
    let { guildId: e, ...l } = t,
        r = (0, a.yK)([Y, S.A], () => {
            let t = S.A.getDraft(e)?.widgets ?? [],
                l = Y.getWidgets(e) ?? [];
            return (0, z.aU)(l, t);
        }, [e]);
    return (
        i.useEffect(() => {
            O(e);
        }, [e]),
        (0, s.jsx)(w.Modal, {
            title: q.intl.string(X.default.L8Xfoo),
            subtitle: q.intl.string(X.default["N8nJ+T"]),
            actions: [],
            ...l,
            children: (0, s.jsx)("div", {
                className: J.Vg,
                children: r.map((t) =>
                    (0, s.jsx)(
                        $,
                        {
                            widget: t,
                            onClick: () => {
                                (0, f.lr)(e, t.type, t.name), l.onClose();
                            },
                        },
                        t.type,
                    ),
                ),
            }),
        })
    );
}
function V(t) {
    let { guildId: e, isEditing: l } = t,
        i = (0, a.bG)([S.A], () => S.A.getSaveStatus(e), [e]);
    if (!l)
        return (0, s.jsx)(D.B, {
            direction: "horizontal",
            justify: "end",
            children: (0, s.jsx)(N.$, {
                variant: "secondary",
                text: q.intl.string(q.t.lXCMda),
                onClick: () => (0, f.Wd)(e),
            }),
        });
    let n = "saving" === i;
    return (0, s.jsxs)(D.B, {
        direction: "horizontal",
        justify: "end",
        align: "center",
        gap: 12,
        children: [
            (0, s.jsx)(N.$, {
                variant: "secondary",
                icon: U.T,
                text: q.intl.string(X.default.L8Xfoo),
                disabled: n,
                onClick: () => {
                    let t;
                    return (
                        (t = (t) => (0, s.jsx)(Q, { guildId: e, ...t })),
                        void (0, k.openModalLazy)(() => Promise.resolve(t), { modalKey: "guild-space-add-widget" })
                    );
                },
            }),
            "error" === i &&
                (0, s.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    role: "alert",
                    children: q.intl.string(q.t.HmFYc5),
                }),
            (0, s.jsxs)(b.e, {
                children: [
                    (0, s.jsx)(N.$, {
                        variant: "secondary",
                        text: q.intl.string(q.t["ETE/oC"]),
                        disabled: n,
                        onClick: () => (0, f.iX)(e),
                    }),
                    (0, s.jsx)(N.$, {
                        variant: "primary",
                        text: q.intl.string(q.t["R3BPH+"]),
                        loading: n,
                        onClick: () => {
                            (0, f.Fj)(e);
                        },
                    }),
                ],
            }),
        ],
    });
}
var Z = l(529609),
    tt = l(297264),
    te = l(548118),
    tl = l(498642),
    ts = l(486020),
    ti = l(555063);
function ta(t) {
    let { guildId: e, header: l } = t,
        n = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
        d = (0, a.bG)([tl.A], () => tl.A.getOnlineCount(e), [e]),
        u = (0, a.bG)([tl.A], () => tl.A.getMemberCount(e), [e]),
        o = l.custom_banner_hash ?? n?.banner,
        h = i.useMemo(() => (null == n ? null : ts.Ay.getGuildBannerURL({ id: n.id, banner: o })), [n, o]);
    return null == n
        ? null
        : (0, s.jsxs)("div", {
              className: ti.wx,
              children: [
                  null != h ? (0, s.jsx)("img", { className: ti.vK, src: h, alt: "" }) : null,
                  (0, s.jsx)("div", { className: ti.f5, "aria-hidden": !0 }),
                  (0, s.jsxs)("div", {
                      className: ti.D_,
                      children: [
                          (0, s.jsx)(te.Ay, {
                              className: ti.Kk,
                              guild: n,
                              size: te.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsxs)("div", {
                              className: ti.pq,
                              children: [
                                  (0, s.jsx)(tt.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: n.name,
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: ti.M1,
                                      children: [
                                          null != d
                                              ? (0, s.jsxs)("div", {
                                                    className: ti.dJ,
                                                    children: [
                                                        (0, s.jsx)("span", { className: ti.RS, "aria-hidden": !0 }),
                                                        (0, s.jsx)(r.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: q.intl.format(X.default.G08ClG, { count: d }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != u
                                              ? (0, s.jsxs)("div", {
                                                    className: ti.dJ,
                                                    children: [
                                                        (0, s.jsx)("span", { className: ti.kq, "aria-hidden": !0 }),
                                                        (0, s.jsx)(r.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: q.intl.format(X.default["rp7bx+"], { count: u }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, s.jsxs)("div", {
                                              className: ti.dJ,
                                              children: [
                                                  (0, s.jsx)(F._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, s.jsx)(r.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: q.intl.format(X.default.DwFqrb, {
                                                          count: n.premiumSubscriberCount,
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
var tr = l(278093);
function tn(t) {
    let { guildId: e } = t,
        l = i.useRef(null),
        [u, o, h] = (0, a.yK)([A.A], () => [A.A.getSpace(e), A.A.getFetchStatus(e), A.A.isInBackoff(e)], [e]);
    i.useEffect(() => {
        let t = l.current !== e;
        (l.current = e), E(e, t);
    }, [o, e]);
    let g = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
        x = (0, G.mN)(g),
        m = g?.guildSpaceSettings?.publish_status !== y.B.PUBLISHED,
        _ = i.useCallback(() => C(e, { publish_status: y.B.PUBLISHED }), [e]),
        [p, D] = (0, a.yK)([S.A], () => [S.A.getDraft(e), S.A.getSaveStatus(e)], [e]),
        N = x && null != p,
        U = N ? p.widgets : u?.widgets;
    i.useEffect(() => {
        x || null == p || "saving" === D || (0, f.iX)(e);
    }, [x, p, D, e]);
    let b = i.useMemo(
            () =>
                (U ?? [])
                    .filter((t) => {
                        let { requires_hydration: e } = t;
                        return e;
                    })
                    .map((t) => {
                        let { id: e } = t;
                        return e;
                    }),
            [U],
        ),
        w = (0, a.yK)([j.A], () => j.A.getWidgetIdsToHydrate(e, b), [e, b]),
        R = i.useRef(null);
    return (i.useEffect(() => {
        if (R.current !== e && null != u) {
            (R.current = e), v(e, b, !0);
            return;
        }
        v(e, w);
    }, [e, u, b, w]),
    null == u || null == U)
        ? (0, s.jsx)("div", {
              className: tr.MY,
              children: (0, s.jsx)("div", {
                  className: tr.F,
                  children:
                      "error" !== o || h
                          ? (0, s.jsx)(n.y, { type: n.y.Type.SPINNING_CIRCLE, "aria-label": q.intl.string(q.t.ZTNur7) })
                          : (0, s.jsx)(r.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: q.intl.string(q.t.F8FvUy),
                            }),
              }),
          })
        : (0, s.jsx)("div", {
              className: tr.MY,
              children: (0, s.jsx)(d.Gt, {
                  className: tr.XG,
                  children: (0, s.jsxs)("div", {
                      className: tr.Qs,
                      children: [
                          x && m ? (0, s.jsx)(I.A, { onPublish: _ }) : null,
                          (0, s.jsx)(ta, { guildId: e, header: N ? p.header : u.header }),
                          x && (0, s.jsx)(V, { guildId: e, isEditing: N }),
                          N
                              ? (0, s.jsx)(L.A, { guildId: e, widgets: U, widgetTitles: T.W })
                              : (0, s.jsx)(Z.A, { guildId: e, widgets: U }),
                      ],
                  }),
              }),
          });
}
