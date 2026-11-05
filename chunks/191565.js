(l.r(s), l.d(s, { default: () => _ }));
var i = l(477900),
    n = l(582128),
    r = l(503698),
    a = l.n(r),
    t = l(855986),
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
var v = l(2967),
    N = l(152313),
    b = l(792996),
    C = l(34236);
function k(e) {
    let { onClose: s, onCreateTag: l, returnRef: r } = e,
        a = n.useId(),
        { creatableGuilds: t, isUpsellVisible: d } = (0, v.Z)("GuildProfileCreateTagUpsell", f);
    return d
        ? (0, i.jsxs)("div", {
              className: C.U,
              children: [
                  (0, i.jsx)(j.E, {
                      id: a,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: b.intl.string(b.t.s76lNz),
                  }),
                  (0, i.jsx)(g.Q, {
                      text: b.intl.string(b.t.SI8PNw),
                      textVariant: "body-sm/medium",
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
var I = l(534514),
    y = l(939249),
    A = l(695366),
    p = l(573435),
    E = l(145497),
    L = l(649640),
    w = l(377476);
function R(e) {
    let { name: s, onRetry: l } = e,
        n = (0, L.b2)(),
        r = (0, L.n6)(n.hex()),
        a = s ?? b.intl.string(b.t.DmIUGK);
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)("div", { className: w.vK, style: { background: r } }),
            (0, i.jsx)("div", {
                className: w.H,
                children: (0, i.jsx)(p.Ay, {
                    mask: p.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: w.R3,
                        children: (0, i.jsx)(E.B$, { guildName: a, iconSize: 64 }),
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: w.wx,
                children: [
                    (0, i.jsx)(I.D, { variant: "heading-lg/medium", color: "text-strong", children: a }),
                    (0, i.jsxs)(y.D, {
                        className: w.z3,
                        onClick: l,
                        children: [
                            (0, i.jsx)(A.CircleErrorIcon, { size: "sm", color: "currentColor" }),
                            (0, i.jsx)(j.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-warning",
                                children: b.intl.string(b.t.tmGHjc),
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
        { guildProfile: N, fetchGuildProfile: b, fetchStatus: C } = (0, h.u)(s),
        I = (0, t.bG)([x.A], () => x.A.getErrorCode(s)),
        y = n.useRef(null),
        A = n.useCallback(() => {
            b(!0);
        }, [b]);
    (n.useEffect(() => {
        b();
    }, [b]),
        n.useEffect(() => {
            (0, m.sf)(s, v);
        }, [s, v]),
        n.useEffect(() => {
            r?.(y?.current);
        }, [y, r]));
    let p = n.useMemo(
        () =>
            C === x.X.NOT_FETCHED || C === x.X.FETCHING
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
                    ? (0, i.jsx)("div", { className: P.k, children: (0, i.jsx)(R, { name: l, onRetry: A }) })
                    : (0, i.jsx)("div", {
                          className: P.k,
                          children: (0, i.jsx)(D.Ay, {
                              profile: N,
                              onClose: j,
                              footer:
                                  null != N.tag ? (0, i.jsx)(k, { onClose: j, onCreateTag: g, returnRef: f }) : null,
                          }),
                      }),
        [C, N, I, s, l, A, j, g, f],
    );
    return (0, i.jsx)(c.l, { ref: y, "aria-label": N?.name, children: p });
}
