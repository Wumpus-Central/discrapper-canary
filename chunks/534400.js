a.d(n, { Ay: () => R, Cw: () => k, Z9: () => C, o9: () => b });
var l = a(477900),
    t = a(582128),
    s = a(503698),
    r = a.n(s),
    i = a(17928),
    o = a(834730),
    d = a(140735),
    u = a(939249),
    c = a(453903),
    m = a(517905),
    g = a(287809),
    p = a(685073),
    x = a(743981),
    f = a(105292),
    h = a(893845),
    j = a(830840);
let C = t.memo(function (e) {
        let { src: n, className: a, size: s = x.Sl.SIZE_16 } = e,
            [i, o] = t.useState(!1);
        return null == n || i
            ? (0, l.jsx)("span", { className: r()(j.HH, a) })
            : (0, l.jsx)("img", {
                  src: n,
                  alt: "",
                  className: r()(j.qS, a),
                  width: s,
                  height: s,
                  onError: () => o(!0),
              });
    }),
    N = t.memo(function (e) {
        let { guildTag: n, className: a, textClassName: t, badgeClassName: s, ...i } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: j.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", f.intl.formatToPlainString(h.default["4cGHIl"], { tag: n }), ",\xa0"],
                }),
                (0, l.jsx)(b, {
                    guildTag: n,
                    className: r()(a, j.sM),
                    textClassName: r()(t, j.Lo),
                    badgeClassName: r()(s, j.VD),
                    ...i,
                }),
            ],
        });
    }),
    b = t.memo(function (e) {
        let {
                guildId: n,
                guildTag: a,
                guildBadge: t,
                className: s,
                textClassName: i,
                badgeClassName: c,
                onClick: m,
                onMouseDown: g,
                onMouseEnter: N,
                onKeyDown: b,
                "aria-controls": k,
                "aria-expanded": S,
                textVariant: R = "text-xs/semibold",
                textColor: T = "text-default",
                badgeSize: v = x.Sl.SIZE_14,
                inline: w = !0,
                innerRef: I,
            } = e,
            P = null != m,
            E = (0, l.jsxs)(o.E, {
                tag: "span",
                variant: R,
                lineClamp: 1,
                color: T,
                className: r()(j.Qq, i),
                children: [
                    null != t && "string" == typeof t
                        ? (0, l.jsx)(C, { src: (0, p.gC)(n, t, v), size: v, className: c }, (0, p.gC)(n, t, v) ?? n)
                        : t,
                    (0, l.jsx)(d.A, {
                        tag: "span",
                        children: f.intl.formatToPlainString(h.default["fw2p/x"], { tag: a }),
                    }),
                    (0, l.jsx)("span", { className: j.em, "aria-hidden": "true", children: a }),
                ],
            }),
            y = r()(j.nz, w && j.os, s);
        return P
            ? (0, l.jsx)(u.D, {
                  tag: "span",
                  innerRef: I,
                  onClick: m,
                  onMouseDown: g,
                  onMouseEnter: N,
                  onKeyDown: b,
                  "aria-controls": k,
                  "aria-expanded": S,
                  className: r()(y, j.vk),
                  children: E,
              })
            : (0, l.jsx)("span", { className: y, children: E });
    }),
    k = t.memo(function (e) {
        return (0, l.jsx)(S, { Component: N, ...e });
    }),
    S = t.memo(function (e) {
        let {
                primaryGuild: n,
                userId: a,
                contextGuildId: s,
                className: o,
                containerClassName: d,
                textVariant: u,
                textColor: x,
                badgeSize: f,
                disableGuildProfile: h = !1,
                inline: C = !0,
                onShowProfile: N,
                onClose: k,
                onCreateTag: S,
                Component: R = b,
            } = e,
            T = t.useRef(null),
            v = t.useRef(null),
            w = (0, i.bG)([g.default], () => g.default.getUser(a), [a]),
            I = void 0 !== n ? n : w?.primaryGuild,
            { tag: P, badge: E, guildId: y } = (0, p.Zo)(I);
        return (0, p.Wb)(a, s, I) && null != y
            ? h
                ? (0, l.jsx)(R, {
                      guildId: y,
                      guildTag: P,
                      guildBadge: E,
                      className: r()(j.Zy, o, d),
                      textVariant: u,
                      textColor: x,
                      badgeSize: f,
                      inline: C,
                  })
                : (0, l.jsx)(c.NA.Provider, {
                      value: null,
                      children: (0, l.jsx)(m.A, {
                          guildId: y,
                          onRequestOpen: N,
                          onClose: k,
                          onCreateTag: S,
                          returnRef: v,
                          targetElementRef: T,
                          clickTrap: !1,
                          children: (e) =>
                              (0, l.jsx)("span", {
                                  className: d,
                                  ref: T,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, l.jsx)(R, {
                                      guildId: y,
                                      guildTag: P,
                                      guildBadge: E,
                                      className: o,
                                      textVariant: u,
                                      textColor: x,
                                      badgeSize: f,
                                      inline: C,
                                      innerRef: v,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    R = t.memo(function (e) {
        return (0, l.jsx)(S, { Component: b, ...e });
    });
