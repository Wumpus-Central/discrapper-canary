i.r(e), i.d(e, { default: () => tr });
var s = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(834730),
    n = i(289873),
    d = i(689175),
    c = i(71393),
    u = i(562708),
    o = i(562465),
    h = i(228366),
    g = i(499785),
    A = i(716357);
function _(t) {
    return !(t instanceof o.oh) || t.status < 400 || t.status >= 500 || 429 === t.status;
}
var E = i(652215);
let x = 0;
async function S(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = A.A.getFetchStatus(t),
        s = e && "error" === i && !A.A.isInBackoff(t);
    if ("idle" !== i && !s) return;
    let l = x++;
    h.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: l });
    try {
        let { body: e } = await g.A.get({
            url: E.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: u.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: l, space: e });
    } catch (e) {
        h.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: l, retryable: _(e) });
    }
}
async function C(t, e) {
    let { body: i } = await o.Bo.patch({ url: E.Rsh.GUILD_SPACE_SETTINGS(t), body: e, rejectWithError: !0 });
    return i;
}
var f = i(202762),
    m = i(88592),
    j = i(363957);
let p = 0;
async function y(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: t, widgetIds: e });
    let s = j.A.getWidgetIdsToHydrate(t, e);
    if (0 === s.length) return;
    let l = p++;
    h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: t, requestId: l, widgetIds: s });
    try {
        let { body: e } = await o.Bo.get({
            url: E.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(t),
            query: { widget_ids: s },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: t, requestId: l, widgets: e.widgets });
    } catch (e) {
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: t, requestId: l, retryable: _(e) });
    }
}
var T = i(593673),
    I = i(470452),
    G = i(236053),
    L = i(872188),
    v = i(8074),
    D = i(331322),
    U = i(821609),
    N = i(499373),
    w = i(825484),
    R = i(189213),
    b = i(939249),
    P = i(245604),
    F = i(104510),
    H = i(661531),
    k = i(192308),
    B = i(775602);
async function O(t) {
    h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: t });
    try {
        let { body: e } = await o.Bo.get({ url: E.Rsh.GUILD_SPACE_WIDGETS_CATALOG(t), rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: t, widgets: e.widgets });
    } catch {
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: t });
    }
}
let W = {};
function K(t) {
    let e = W[t];
    return null == e && ((e = { fetchStatus: "idle" }), (W[t] = e)), e;
}
class Y extends a.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(t) {
        return W[t]?.widgets;
    }
    getFetchStatus(t) {
        return W[t]?.fetchStatus ?? "idle";
    }
}
let M = new Y(h.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (t) {
        let { guildId: e } = t;
        K(e).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (t) {
        let { guildId: e, widgets: i } = t,
            s = K(e);
        (s.widgets = i), (s.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        K(e).fetchStatus = "error";
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == W[e]) return !1;
        delete W[e];
    },
    LOGOUT: function () {
        W = {};
    },
});
var z = i(855823),
    X = i(983283),
    $ = i(375708),
    q = i(241181);
function J(t) {
    let { widget: e, onClick: i } = t,
        l = (0, a.bG)([B.Ay], () => B.Ay.useReducedMotion),
        { catalog_image_static_url: n, catalog_image_animated_url: d } = e.assets,
        c = (l ? null : d) ?? n,
        u = e.boost_price;
    return (0, s.jsxs)(b.D, {
        className: q.HL,
        onClick: i,
        children: [
            (0, s.jsxs)("div", {
                className: q.b3,
                children: [
                    null != c && (0, s.jsx)("img", { className: q.YI, src: c, alt: "" }),
                    (0, s.jsxs)("div", {
                        className: q.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, s.jsx)("div", { className: q.Ti, children: (0, s.jsx)("div", { className: q.dK }) }),
                            (0, s.jsxs)(D.B, {
                                className: q.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, s.jsx)(P.U, {}),
                                    (0, s.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: $.intl.string(X.default.IuT87w),
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
                                      children: $.intl.format(X.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: $.intl.string(X.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function Q(t) {
    let { guildId: e, ...i } = t,
        r = (0, a.yK)([M, m.A], () => {
            let t = m.A.getDraft(e)?.widgets ?? [],
                i = M.getWidgets(e) ?? [];
            return (0, z.aU)(i, t);
        }, [e]);
    return (
        l.useEffect(() => {
            O(e);
        }, [e]),
        (0, s.jsx)(R.Modal, {
            title: $.intl.string(X.default.L8Xfoo),
            subtitle: $.intl.string(X.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, s.jsx)("div", {
                className: q.Vg,
                children: r.map((t) =>
                    (0, s.jsx)(
                        J,
                        {
                            widget: t,
                            onClick: () => {
                                (0, f.lr)(e, t.type, t.name), i.onClose();
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
    let { guildId: e, isEditing: i } = t,
        l = (0, a.bG)([m.A], () => m.A.getSaveStatus(e), [e]);
    if (!i)
        return (0, s.jsx)(D.B, {
            direction: "horizontal",
            justify: "end",
            children: (0, s.jsx)(U.$, {
                variant: "secondary",
                text: $.intl.string($.t.lXCMda),
                onClick: () => (0, f.Wd)(e),
            }),
        });
    let n = "saving" === l;
    return (0, s.jsxs)(D.B, {
        direction: "horizontal",
        justify: "end",
        align: "center",
        gap: 12,
        children: [
            (0, s.jsx)(U.$, {
                variant: "secondary",
                icon: N.T,
                text: $.intl.string(X.default.L8Xfoo),
                disabled: n,
                onClick: () => {
                    let t;
                    return (
                        (t = (t) => (0, s.jsx)(Q, { guildId: e, ...t })),
                        void (0, k.openModalLazy)(() => Promise.resolve(t), { modalKey: "guild-space-add-widget" })
                    );
                },
            }),
            "error" === l &&
                (0, s.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    role: "alert",
                    children: $.intl.string($.t.HmFYc5),
                }),
            (0, s.jsxs)(w.e, {
                children: [
                    (0, s.jsx)(U.$, {
                        variant: "secondary",
                        text: $.intl.string($.t["ETE/oC"]),
                        disabled: n,
                        onClick: () => (0, f.iX)(e),
                    }),
                    (0, s.jsx)(U.$, {
                        variant: "primary",
                        text: $.intl.string($.t["R3BPH+"]),
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
var Z = i(529609),
    tt = i(297264),
    te = i(548118),
    ti = i(486020),
    ts = i(555063);
function tl(t) {
    let { guildId: e, header: i } = t,
        r = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
        n = i.custom_banner_hash ?? r?.banner,
        d = l.useMemo(() => (null == r ? null : ti.Ay.getGuildBannerURL({ id: r.id, banner: n })), [r, n]);
    return null == r
        ? null
        : (0, s.jsxs)("div", {
              className: ts.wx,
              children: [
                  null != d ? (0, s.jsx)("img", { className: ts.vK, src: d, alt: "" }) : null,
                  (0, s.jsxs)("div", {
                      className: ts.D_,
                      children: [
                          (0, s.jsx)(te.Ay, {
                              className: ts.Kk,
                              guild: r,
                              size: te.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)(tt.D, { variant: "heading-xxl/bold", color: "text-strong", children: r.name }),
                      ],
                  }),
              ],
          });
}
var ta = i(278093);
function tr(t) {
    let { guildId: e } = t,
        i = l.useRef(null),
        [u, o, h] = (0, a.yK)([A.A], () => [A.A.getSpace(e), A.A.getFetchStatus(e), A.A.isInBackoff(e)], [e]);
    l.useEffect(() => {
        let t = i.current !== e;
        (i.current = e), S(e, t);
    }, [o, e]);
    let g = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
        _ = (0, I.mN)(g),
        E = g?.guildSpaceSettings?.publish_status !== T.B.PUBLISHED,
        x = l.useCallback(() => C(e, { publish_status: T.B.PUBLISHED }), [e]),
        [p, D] = (0, a.yK)([m.A], () => [m.A.getDraft(e), m.A.getSaveStatus(e)], [e]),
        U = _ && null != p,
        N = U ? p.widgets : u?.widgets;
    l.useEffect(() => {
        _ || null == p || "saving" === D || (0, f.iX)(e);
    }, [_, p, D, e]);
    let w = l.useMemo(
            () =>
                (N ?? [])
                    .filter((t) => {
                        let { requires_hydration: e } = t;
                        return e;
                    })
                    .map((t) => {
                        let { id: e } = t;
                        return e;
                    }),
            [N],
        ),
        R = (0, a.yK)([j.A], () => j.A.getWidgetIdsToHydrate(e, w), [e, w]),
        b = l.useRef(null);
    return (l.useEffect(() => {
        if (b.current !== e && null != u) {
            (b.current = e), y(e, w, !0);
            return;
        }
        y(e, R);
    }, [e, u, w, R]),
    null == u || null == N)
        ? (0, s.jsx)("div", {
              className: ta.MY,
              children: (0, s.jsx)("div", {
                  className: ta.F,
                  children:
                      "error" !== o || h
                          ? (0, s.jsx)(n.y, { type: n.y.Type.SPINNING_CIRCLE, "aria-label": $.intl.string($.t.ZTNur7) })
                          : (0, s.jsx)(r.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: $.intl.string($.t.F8FvUy),
                            }),
              }),
          })
        : (0, s.jsx)("div", {
              className: ta.MY,
              children: (0, s.jsx)(d.Gt, {
                  className: ta.XG,
                  children: (0, s.jsxs)("div", {
                      className: ta.Qs,
                      children: [
                          _ && E ? (0, s.jsx)(L.A, { onPublish: x }) : null,
                          (0, s.jsx)(tl, { guildId: e, header: U ? p.header : u.header }),
                          _ && (0, s.jsx)(V, { guildId: e, isEditing: U }),
                          U
                              ? (0, s.jsx)(v.A, { guildId: e, widgets: N, widgetTitles: G.W })
                              : (0, s.jsx)(Z.A, { guildId: e, widgets: N }),
                      ],
                  }),
              }),
          });
}
