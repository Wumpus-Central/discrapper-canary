(l.r(s), l.d(s, { default: () => _ }));
var i = l(477900),
    n = l(582128),
    r = l(503698),
    a = l.n(r),
    t = l(17928),
    d = l(289873),
    c = l(305866),
    o = l(793574),
    u = l(688810),
    m = l(250527),
    x = l(837011),
    h = l(90084),
    j = l(834730),
    g = l(123292);
let f = (0, l(945810).mj)({
    name: "2026-10-server-tag-upsell-on-guild-profile",
    kind: "user",
    defaultConfig: { enabled: !1, ignoreSubscriptionPlatform: !1 },
    variations: {
        1: { enabled: !0, ignoreSubscriptionPlatform: !1 },
        2: { enabled: !0, ignoreSubscriptionPlatform: !0 },
    },
});
var v = l(1592),
    N = l(152313),
    C = l(660183),
    b = l(34236);
function k(e) {
    let { onClose: s, onCreateTag: l, returnRef: r } = e,
        a = n.useId(),
        { creatableGuilds: t, isUpsellVisible: d } = (0, v.Z)("GuildProfileCreateTagUpsell", f);
    return d
        ? (0, i.jsxs)("div", {
              className: b.U,
              children: [
                  (0, i.jsx)(j.E, {
                      id: a,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(C.t.s76lNz),
                  }),
                  (0, i.jsx)(g.Q, {
                      text: C.intl.string(C.t.SI8PNw),
                      textVariant: "text-sm/medium",
                      "aria-describedby": a,
                      onClick: function () {
                          null != l
                              ? l(() => (0, N.A)(t, o.A.GUILD_PROFILE))
                              : (s?.(), (0, N.A)(t, o.A.GUILD_PROFILE, r));
                      },
                  }),
              ],
          })
        : null;
}
var I = l(297264),
    A = l(939249),
    p = l(695366),
    E = l(573435),
    y = l(145497),
    L = l(649640),
    w = l(377476);
function R(e) {
    let { name: s, onRetry: l } = e,
        n = (0, L.b2)(),
        r = (0, L.n6)(n.hex()),
        a = s ?? C.intl.string(C.t.DmIUGK);
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)("div", { className: w.vK, style: { background: r } }),
            (0, i.jsx)("div", {
                className: w.H,
                children: (0, i.jsx)(E.Ay, {
                    mask: E.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: w.R3,
                        children: (0, i.jsx)(y.B$, { guildName: a, iconSize: 64 }),
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: w.wx,
                children: [
                    (0, i.jsx)(I.D, { variant: "heading-lg/medium", color: "text-strong", children: a }),
                    (0, i.jsxs)(A.D, {
                        className: w.z3,
                        onClick: l,
                        children: [
                            (0, i.jsx)(p.E, { size: "sm", color: "currentColor" }),
                            (0, i.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                children: C.intl.string(C.t.tmGHjc),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var D = l(42780),
    G = l(576055),
    P = l(715893);
function _(e) {
    let { guildId: s, name: l, setPopoutRef: r, onClose: j, onCreateTag: g, returnRef: f } = e,
        { analyticsLocations: v } = (0, u.Ay)(o.A.GUILD_PROFILE),
        { guildProfile: N, fetchGuildProfile: C, fetchStatus: b } = (0, h.u)(s),
        I = (0, t.bG)([x.A], () => x.A.getErrorCode(s)),
        A = n.useRef(null),
        p = n.useCallback(() => {
            C(!0);
        }, [C]);
    (n.useEffect(() => {
        C();
    }, [C]),
        n.useEffect(() => {
            (0, m.sf)(s, v);
        }, [s, v]),
        n.useEffect(() => {
            r?.(A?.current);
        }, [A, r]));
    let E = n.useMemo(
        () =>
            b === x.X.NOT_FETCHED || b === x.X.FETCHING
                ? (0, i.jsx)("div", { className: a()(P.k, P.d), children: (0, i.jsx)(d.y, {}) })
                : null == N && 50001 === I
                  ? (0, i.jsx)("div", {
                        className: P.k,
                        children: (0, i.jsx)(G.A, {
                            guildId: s,
                            name: l,
                            footer: (0, i.jsx)(k, { onClose: j, onCreateTag: g, returnRef: f }),
                        }),
                    })
                  : null == N
                    ? (0, i.jsx)("div", { className: P.k, children: (0, i.jsx)(R, { name: l, onRetry: p }) })
                    : (0, i.jsx)("div", {
                          className: P.k,
                          children: (0, i.jsx)(D.Ay, {
                              profile: N,
                              onClose: j,
                              footer:
                                  null != N.tag ? (0, i.jsx)(k, { onClose: j, onCreateTag: g, returnRef: f }) : null,
                          }),
                      }),
        [b, N, I, s, l, p, j, g, f],
    );
    return (0, i.jsx)(c.l, { ref: A, "aria-label": N?.name, children: E });
}
