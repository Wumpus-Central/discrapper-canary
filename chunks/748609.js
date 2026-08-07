i.r(e), i.d(e, { default: () => ts });
var s = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(834730),
    n = i(289873),
    d = i(689175),
    c = i(71393),
    u = i(562708),
    o = i(228366),
    h = i(499785),
    g = i(716357),
    A = i(562465);
function _(t) {
    return !(t instanceof A.oh) || t.status < 400 || t.status >= 500 || 429 === t.status;
}
var E = i(652215);
let x = 0;
async function f(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = g.A.getFetchStatus(t),
        s = e && "error" === i && !g.A.isInBackoff(t);
    if ("idle" !== i && !s) return;
    let l = x++;
    o.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: l });
    try {
        let { body: e } = await h.A.get({
            url: E.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: u.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: l, space: e });
    } catch (e) {
        o.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: l, retryable: _(e) });
    }
}
var C = i(202762),
    m = i(88592),
    S = i(363957);
let j = 0;
async function y(t, e) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i && o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: t, widgetIds: e });
    let s = S.A.getWidgetIdsToHydrate(t, e);
    if (0 === s.length) return;
    let l = j++;
    o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: t, requestId: l, widgetIds: s });
    try {
        let { body: e } = await A.Bo.get({
            url: E.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(t),
            query: { widget_ids: s },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: t, requestId: l, widgets: e.widgets });
    } catch (e) {
        o.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: t, requestId: l, retryable: _(e) });
    }
}
var p = i(470452),
    T = i(236053),
    G = i(8074),
    I = i(331322),
    v = i(821609),
    L = i(499373),
    D = i(825484),
    U = i(189213),
    N = i(939249),
    w = i(245604),
    R = i(104510),
    F = i(661531),
    P = i(192308),
    b = i(775602);
async function H(t) {
    o.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: t });
    try {
        let { body: e } = await A.Bo.get({ url: E.Rsh.GUILD_SPACE_WIDGETS_CATALOG(t), rejectWithError: !0 });
        o.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: t, widgets: e.widgets });
    } catch {
        o.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: t });
    }
}
let k = {};
function B(t) {
    let e = k[t];
    return null == e && ((e = { fetchStatus: "idle" }), (k[t] = e)), e;
}
class O extends a.Ay.Store {
    static displayName = "GuildSpaceCatalogStore";
    getWidgets(t) {
        return k[t]?.widgets;
    }
    getFetchStatus(t) {
        return k[t]?.fetchStatus ?? "idle";
    }
}
let W = new O(o.h, {
    GUILD_SPACE_CATALOG_FETCH_START: function (t) {
        let { guildId: e } = t;
        B(e).fetchStatus = "loading";
    },
    GUILD_SPACE_CATALOG_FETCH_SUCCESS: function (t) {
        let { guildId: e, widgets: i } = t,
            s = B(e);
        (s.widgets = i), (s.fetchStatus = "success");
    },
    GUILD_SPACE_CATALOG_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        B(e).fetchStatus = "error";
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: i },
        } = t;
        if (i || null == k[e]) return !1;
        delete k[e];
    },
    LOGOUT: function () {
        k = {};
    },
});
var K = i(855823),
    Y = i(983283),
    M = i(375708),
    z = i(241181);
function X(t) {
    let { widget: e, onClick: i } = t,
        l = (0, a.bG)([b.Ay], () => b.Ay.useReducedMotion),
        { catalog_image_static_url: n, catalog_image_animated_url: d } = e.assets,
        c = (l ? null : d) ?? n,
        u = e.boost_price;
    return (0, s.jsxs)(N.D, {
        className: z.HL,
        onClick: i,
        children: [
            (0, s.jsxs)("div", {
                className: z.b3,
                children: [
                    null != c && (0, s.jsx)("img", { className: z.YI, src: c, alt: "" }),
                    (0, s.jsxs)("div", {
                        className: z.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, s.jsx)("div", { className: z.Ti, children: (0, s.jsx)("div", { className: z.dK }) }),
                            (0, s.jsxs)(I.B, {
                                className: z.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, s.jsx)(w.U, {}),
                                    (0, s.jsx)(r.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: M.intl.string(Y.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(I.B, {
                gap: 4,
                children: [
                    (0, s.jsx)(r.E, { variant: "text-sm/semibold", color: "text-default", children: e.name }),
                    null != u && u > 0
                        ? (0, s.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, s.jsx)(R._, { size: "sm", color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, s.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: M.intl.format(Y.default["8wD0Un"], { boostPrice: u }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: M.intl.string(Y.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function $(t) {
    let { guildId: e, ...i } = t,
        r = (0, a.yK)([W, m.A], () => {
            let t = m.A.getDraft(e)?.widgets ?? [],
                i = W.getWidgets(e) ?? [];
            return (0, K.aU)(i, t);
        }, [e]);
    return (
        l.useEffect(() => {
            H(e);
        }, [e]),
        (0, s.jsx)(U.Modal, {
            title: M.intl.string(Y.default.L8Xfoo),
            subtitle: M.intl.string(Y.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, s.jsx)("div", {
                className: z.Vg,
                children: r.map((t) =>
                    (0, s.jsx)(
                        X,
                        {
                            widget: t,
                            onClick: () => {
                                (0, C.lr)(e, t.type, t.name), i.onClose();
                            },
                        },
                        t.type,
                    ),
                ),
            }),
        })
    );
}
function q(t) {
    let { guildId: e, isEditing: i } = t,
        l = (0, a.bG)([m.A], () => m.A.getSaveStatus(e), [e]);
    if (!i)
        return (0, s.jsx)(I.B, {
            direction: "horizontal",
            justify: "end",
            children: (0, s.jsx)(v.$, {
                variant: "secondary",
                text: M.intl.string(M.t.lXCMda),
                onClick: () => (0, C.Wd)(e),
            }),
        });
    let n = "saving" === l;
    return (0, s.jsxs)(I.B, {
        direction: "horizontal",
        justify: "end",
        align: "center",
        gap: 12,
        children: [
            (0, s.jsx)(v.$, {
                variant: "secondary",
                icon: L.T,
                text: M.intl.string(Y.default.L8Xfoo),
                disabled: n,
                onClick: () => {
                    let t;
                    return (
                        (t = (t) => (0, s.jsx)($, { guildId: e, ...t })),
                        void (0, P.openModalLazy)(() => Promise.resolve(t), { modalKey: "guild-space-add-widget" })
                    );
                },
            }),
            "error" === l &&
                (0, s.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    role: "alert",
                    children: M.intl.string(M.t.HmFYc5),
                }),
            (0, s.jsxs)(D.e, {
                children: [
                    (0, s.jsx)(v.$, {
                        variant: "secondary",
                        text: M.intl.string(M.t["ETE/oC"]),
                        disabled: n,
                        onClick: () => (0, C.iX)(e),
                    }),
                    (0, s.jsx)(v.$, {
                        variant: "primary",
                        text: M.intl.string(M.t["R3BPH+"]),
                        loading: n,
                        onClick: () => {
                            (0, C.Fj)(e);
                        },
                    }),
                ],
            }),
        ],
    });
}
var J = i(529609),
    Q = i(297264),
    V = i(548118),
    Z = i(486020),
    tt = i(555063);
function te(t) {
    let { guildId: e, header: i } = t,
        r = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
        n = i.custom_banner_hash ?? r?.banner,
        d = l.useMemo(() => (null == r ? null : Z.Ay.getGuildBannerURL({ id: r.id, banner: n })), [r, n]);
    return null == r
        ? null
        : (0, s.jsxs)("div", {
              className: tt.wx,
              children: [
                  null != d ? (0, s.jsx)("img", { className: tt.vK, src: d, alt: "" }) : null,
                  (0, s.jsxs)("div", {
                      className: tt.D_,
                      children: [
                          (0, s.jsx)(V.Ay, {
                              className: tt.Kk,
                              guild: r,
                              size: V.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)(Q.D, { variant: "heading-xxl/bold", color: "text-strong", children: r.name }),
                      ],
                  }),
              ],
          });
}
var ti = i(278093);
function ts(t) {
    let { guildId: e } = t,
        i = l.useRef(null),
        [u, o, h] = (0, a.yK)([g.A], () => [g.A.getSpace(e), g.A.getFetchStatus(e), g.A.isInBackoff(e)], [e]);
    l.useEffect(() => {
        let t = i.current !== e;
        (i.current = e), f(e, t);
    }, [o, e]);
    let A = (0, a.bG)([c.A], () => c.A.getGuild(e), [e]),
        _ = (0, p.mN)(A),
        [E, x] = (0, a.yK)([m.A], () => [m.A.getDraft(e), m.A.getSaveStatus(e)], [e]),
        j = _ && null != E,
        I = j ? E.widgets : u?.widgets;
    l.useEffect(() => {
        _ || null == E || "saving" === x || (0, C.iX)(e);
    }, [_, E, x, e]);
    let v = l.useMemo(
            () =>
                (I ?? [])
                    .filter((t) => {
                        let { requires_hydration: e } = t;
                        return e;
                    })
                    .map((t) => {
                        let { id: e } = t;
                        return e;
                    }),
            [I],
        ),
        L = (0, a.yK)([S.A], () => S.A.getWidgetIdsToHydrate(e, v), [e, v]),
        D = l.useRef(null);
    return (l.useEffect(() => {
        if (D.current !== e && null != u) {
            (D.current = e), y(e, v, !0);
            return;
        }
        y(e, L);
    }, [e, u, v, L]),
    null == u || null == I)
        ? (0, s.jsx)("div", {
              className: ti.MY,
              children: (0, s.jsx)("div", {
                  className: ti.F,
                  children:
                      "error" !== o || h
                          ? (0, s.jsx)(n.y, { type: n.y.Type.SPINNING_CIRCLE, "aria-label": M.intl.string(M.t.ZTNur7) })
                          : (0, s.jsx)(r.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: M.intl.string(M.t.F8FvUy),
                            }),
              }),
          })
        : (0, s.jsx)("div", {
              className: ti.MY,
              children: (0, s.jsx)(d.Gt, {
                  className: ti.XG,
                  children: (0, s.jsxs)("div", {
                      className: ti.Qs,
                      children: [
                          (0, s.jsx)(te, { guildId: e, header: j ? E.header : u.header }),
                          _ && (0, s.jsx)(q, { guildId: e, isEditing: j }),
                          j
                              ? (0, s.jsx)(G.A, { guildId: e, widgets: I, widgetTitles: T.W })
                              : (0, s.jsx)(J.A, { guildId: e, widgets: I }),
                      ],
                  }),
              }),
          });
}
