n.d(a, { Ay: () => S, Cw: () => b, Z9: () => j, o9: () => N });
var s = n(477900),
    t = n(582128),
    l = n(503698),
    r = n.n(l),
    i = n(17928),
    o = n(834730),
    d = n(140735),
    c = n(939249),
    u = n(517905),
    m = n(287809),
    g = n(685073),
    p = n(743981),
    x = n(375708),
    f = n(893845),
    h = n(830840);
let j = t.memo(function (e) {
        let { src: a, className: n, size: l = p.Sl.SIZE_16 } = e,
            [i, o] = t.useState(!1);
        return null == a || i
            ? (0, s.jsx)("span", { className: r()(h.HH, n) })
            : (0, s.jsx)("img", {
                  src: a,
                  alt: "",
                  className: r()(h.qS, n),
                  width: l,
                  height: l,
                  onError: () => o(!0),
              });
    }),
    C = t.memo(function (e) {
        let { guildTag: a, className: n, textClassName: t, badgeClassName: l, ...i } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: h.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", x.intl.formatToPlainString(f.default["4cGHIl"], { tag: a }), ",\xa0"],
                }),
                (0, s.jsx)(N, {
                    guildTag: a,
                    className: r()(n, h.sM),
                    textClassName: r()(t, h.Lo),
                    badgeClassName: r()(l, h.VD),
                    ...i,
                }),
            ],
        });
    }),
    N = t.memo(function (e) {
        let {
                guildId: a,
                guildTag: n,
                guildBadge: t,
                className: l,
                textClassName: i,
                badgeClassName: u,
                onClick: m,
                onMouseDown: C,
                onMouseEnter: N,
                onKeyDown: b,
                "aria-controls": k,
                "aria-expanded": S,
                textVariant: w = "text-xs/semibold",
                textColor: I = "text-default",
                badgeSize: E = p.Sl.SIZE_14,
                inline: P = !0,
            } = e,
            T = null != m,
            v = (0, s.jsxs)(o.E, {
                tag: "span",
                variant: w,
                lineClamp: 1,
                color: I,
                className: r()(h.Qq, i),
                children: [
                    null != t && "string" == typeof t
                        ? (0, s.jsx)(j, { src: (0, g.gC)(a, t, E), size: E, className: u }, (0, g.gC)(a, t, E) ?? a)
                        : t,
                    (0, s.jsx)(d.A, {
                        tag: "span",
                        children: x.intl.formatToPlainString(f.default["fw2p/x"], { tag: n }),
                    }),
                    (0, s.jsx)("span", { className: h.em, "aria-hidden": "true", children: n }),
                ],
            }),
            y = r()(h.nz, P && h.os, l);
        return T
            ? (0, s.jsx)(c.D, {
                  tag: "span",
                  onClick: m,
                  onMouseDown: C,
                  onMouseEnter: N,
                  onKeyDown: b,
                  "aria-controls": k,
                  "aria-expanded": S,
                  className: r()(y, h.vk),
                  children: v,
              })
            : (0, s.jsx)("span", { className: y, children: v });
    }),
    b = t.memo(function (e) {
        return (0, s.jsx)(k, { Component: C, ...e });
    }),
    k = t.memo(function (e) {
        let {
                primaryGuild: a,
                userId: n,
                contextGuildId: l,
                className: o,
                containerClassName: d,
                textVariant: c,
                textColor: p,
                badgeSize: x,
                disableGuildProfile: f = !1,
                inline: j = !0,
                onShowProfile: C,
                onClose: b,
                Component: k = N,
            } = e,
            S = t.useRef(null),
            w = (0, i.bG)([m.default], () => m.default.getUser(n), [n]),
            I = void 0 !== a ? a : w?.primaryGuild,
            { tag: E, badge: P, guildId: T } = (0, g.Zo)(I);
        return (0, g.Wb)(n, l, I) && null != T
            ? f
                ? (0, s.jsx)(k, {
                      guildId: T,
                      guildTag: E,
                      guildBadge: P,
                      className: r()(h.Zy, o, d),
                      textVariant: c,
                      textColor: p,
                      badgeSize: x,
                      inline: j,
                  })
                : (0, s.jsx)(u.A, {
                      guildId: T,
                      onRequestOpen: C,
                      onClose: b,
                      targetElementRef: S,
                      clickTrap: !1,
                      children: (e) =>
                          (0, s.jsx)("span", {
                              className: d,
                              ref: S,
                              onClick: (e) => e.stopPropagation(),
                              children: (0, s.jsx)(k, {
                                  guildId: T,
                                  guildTag: E,
                                  guildBadge: P,
                                  className: o,
                                  textVariant: c,
                                  textColor: p,
                                  badgeSize: x,
                                  inline: j,
                                  ...e,
                              }),
                          }),
                  })
            : null;
    }),
    S = t.memo(function (e) {
        return (0, s.jsx)(k, { Component: N, ...e });
    });
