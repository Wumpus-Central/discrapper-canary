n.d(a, { Ay: () => S, Cw: () => b, Z9: () => j, o9: () => N });
var t = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    i = n(17928),
    o = n(834730),
    d = n(140735),
    u = n(939249),
    c = n(517905),
    m = n(287809),
    g = n(685073),
    p = n(743981),
    x = n(660183),
    f = n(545067),
    h = n(830840);
let j = s.memo(function (e) {
        let { src: a, className: n, size: l = p.Sl.SIZE_16 } = e,
            [i, o] = s.useState(!1);
        return null == a || i
            ? (0, t.jsx)("span", { className: r()(h.HH, n) })
            : (0, t.jsx)("img", {
                  src: a,
                  alt: "",
                  className: r()(h.qS, n),
                  width: l,
                  height: l,
                  onError: () => o(!0),
              });
    }),
    C = s.memo(function (e) {
        let { guildTag: a, className: n, textClassName: s, badgeClassName: l, ...i } = e;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)("span", {
                    className: h.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", x.intl.formatToPlainString(f.default["4cGHIl"], { tag: a }), ",\xa0"],
                }),
                (0, t.jsx)(N, {
                    guildTag: a,
                    className: r()(n, h.sM),
                    textClassName: r()(s, h.Lo),
                    badgeClassName: r()(l, h.VD),
                    ...i,
                }),
            ],
        });
    }),
    N = s.memo(function (e) {
        let {
                guildId: a,
                guildTag: n,
                guildBadge: s,
                className: l,
                textClassName: i,
                badgeClassName: c,
                onClick: m,
                onMouseDown: C,
                onMouseEnter: N,
                onKeyDown: b,
                "aria-controls": k,
                "aria-expanded": S,
                textVariant: R = "text-xs/semibold",
                textColor: T = "text-default",
                badgeSize: w = p.Sl.SIZE_14,
                inline: I = !0,
                innerRef: E,
            } = e,
            P = null != m,
            v = (0, t.jsxs)(o.E, {
                tag: "span",
                variant: R,
                lineClamp: 1,
                color: T,
                className: r()(h.Qq, i),
                children: [
                    null != s && "string" == typeof s
                        ? (0, t.jsx)(j, { src: (0, g.gC)(a, s, w), size: w, className: c }, (0, g.gC)(a, s, w) ?? a)
                        : s,
                    (0, t.jsx)(d.A, {
                        tag: "span",
                        children: x.intl.formatToPlainString(f.default["fw2p/x"], { tag: n }),
                    }),
                    (0, t.jsx)("span", { className: h.em, "aria-hidden": "true", children: n }),
                ],
            }),
            y = r()(h.nz, I && h.os, l);
        return P
            ? (0, t.jsx)(u.D, {
                  tag: "span",
                  innerRef: E,
                  onClick: m,
                  onMouseDown: C,
                  onMouseEnter: N,
                  onKeyDown: b,
                  "aria-controls": k,
                  "aria-expanded": S,
                  className: r()(y, h.vk),
                  children: v,
              })
            : (0, t.jsx)("span", { className: y, children: v });
    }),
    b = s.memo(function (e) {
        return (0, t.jsx)(k, { Component: C, ...e });
    }),
    k = s.memo(function (e) {
        let {
                primaryGuild: a,
                userId: n,
                contextGuildId: l,
                className: o,
                containerClassName: d,
                textVariant: u,
                textColor: p,
                badgeSize: x,
                disableGuildProfile: f = !1,
                inline: j = !0,
                onShowProfile: C,
                onClose: b,
                onCreateTag: k,
                Component: S = N,
            } = e,
            R = s.useRef(null),
            T = s.useRef(null),
            w = (0, i.bG)([m.default], () => m.default.getUser(n), [n]),
            I = void 0 !== a ? a : w?.primaryGuild,
            { tag: E, badge: P, guildId: v } = (0, g.Zo)(I);
        return (0, g.Wb)(n, l, I) && null != v
            ? f
                ? (0, t.jsx)(S, {
                      guildId: v,
                      guildTag: E,
                      guildBadge: P,
                      className: r()(h.Zy, o, d),
                      textVariant: u,
                      textColor: p,
                      badgeSize: x,
                      inline: j,
                  })
                : (0, t.jsx)(c.A, {
                      guildId: v,
                      onRequestOpen: C,
                      onClose: b,
                      onCreateTag: k,
                      returnRef: T,
                      targetElementRef: R,
                      clickTrap: !1,
                      children: (e) =>
                          (0, t.jsx)("span", {
                              className: d,
                              ref: R,
                              onClick: (e) => e.stopPropagation(),
                              children: (0, t.jsx)(S, {
                                  guildId: v,
                                  guildTag: E,
                                  guildBadge: P,
                                  className: o,
                                  textVariant: u,
                                  textColor: p,
                                  badgeSize: x,
                                  inline: j,
                                  innerRef: T,
                                  ...e,
                              }),
                          }),
                  })
            : null;
    }),
    S = s.memo(function (e) {
        return (0, t.jsx)(k, { Component: N, ...e });
    });
