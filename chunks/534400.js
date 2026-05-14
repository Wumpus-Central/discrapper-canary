"use strict";
n.d(t, { Ay: () => C, Cw: () => N, Z9: () => I, o9: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(834730),
    u = n(140735),
    c = n(939249),
    d = n(86182),
    _ = n(517905),
    f = n(363195),
    h = n(287809),
    p = n(685073),
    E = n(743981),
    m = n(375708),
    g = n(661023),
    A = n(330411);
let I = r.memo(function (e) {
        let { src: t, className: n, size: s = E.Sl.SIZE_16 } = e,
            [o, l] = r.useState(!1);
        return null == t || o
            ? (0, i.jsx)("span", { className: a()(A.HH, n) })
            : (0, i.jsx)("img", {
                  src: t,
                  alt: "",
                  className: a()(A.qS, n),
                  width: s,
                  height: s,
                  onError: () => l(!0),
              });
    }),
    T = r.memo(function (e) {
        let { guildTag: t, className: n, textClassName: r, badgeClassName: s, ...o } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("span", {
                    className: A.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", m.intl.formatToPlainString(g.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, i.jsx)(S, {
                    guildTag: t,
                    className: a()(n, A.sM),
                    textClassName: a()(r, A.Lo),
                    badgeClassName: a()(s, A.VD),
                    ...o,
                }),
            ],
        });
    }),
    S = r.memo(function (e) {
        let {
                guildId: t,
                guildTag: n,
                guildBadge: r,
                className: s,
                textClassName: o,
                badgeClassName: d,
                onClick: _,
                onMouseDown: f,
                onMouseEnter: h,
                onKeyDown: T,
                "aria-controls": S,
                "aria-expanded": N,
                textVariant: y = "text-xs/semibold",
                textColor: C = "text-default",
                badgeSize: v = E.Sl.SIZE_14,
                inline: O = !0,
            } = e,
            R = null != _,
            b = (0, i.jsxs)(l.E, {
                tag: "span",
                variant: y,
                lineClamp: 1,
                color: C,
                className: a()(A.Qq, o),
                children: [
                    null != r && "string" == typeof r
                        ? (0, i.jsx)(I, { src: (0, p.gC)(t, r, v), size: v, className: d }, (0, p.gC)(t, r, v) ?? t)
                        : r,
                    (0, i.jsx)(u.A, {
                        tag: "span",
                        children: m.intl.formatToPlainString(g.default["fw2p/x"], { tag: n }),
                    }),
                    (0, i.jsx)("span", { className: A.em, "aria-hidden": "true", children: n }),
                ],
            }),
            D = a()(A.nz, O && A.os, s);
        return R
            ? (0, i.jsx)(c.D, {
                  tag: "span",
                  onClick: _,
                  onMouseDown: f,
                  onMouseEnter: h,
                  onKeyDown: T,
                  "aria-controls": S,
                  "aria-expanded": N,
                  className: a()(D, A.vk),
                  children: b,
              })
            : (0, i.jsx)("span", { className: D, children: b });
    }),
    N = r.memo(function (e) {
        return (0, i.jsx)(y, { Component: T, ...e });
    }),
    y = r.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: s,
                className: l,
                containerClassName: u,
                textVariant: c,
                textColor: E,
                badgeSize: m,
                disableGuildProfile: g = !1,
                inline: I = !0,
                onShowProfile: T,
                onClose: N,
                Component: y = S,
            } = e,
            C = r.useRef(null),
            v = (0, o.bG)([h.default], () => h.default.getUser(n), [n]),
            O = (0, o.bG)([f.A], () => f.A.theme),
            R = void 0 !== t ? t : v?.primaryGuild,
            { tag: b, badge: D, guildId: L } = (0, p.Zo)(R);
        return (0, p.Wb)(n, s, R) && null != L
            ? g
                ? (0, i.jsx)(y, {
                      guildId: L,
                      guildTag: b,
                      guildBadge: D,
                      className: a()(A.Zy, l),
                      textVariant: c,
                      textColor: E,
                      badgeSize: m,
                      inline: I,
                  })
                : (0, i.jsx)(d.w, {
                      theme: O,
                      children: (0, i.jsx)(_.A, {
                          guildId: L,
                          onRequestOpen: T,
                          onClose: N,
                          targetElementRef: C,
                          clickTrap: !1,
                          children: (e) =>
                              (0, i.jsx)("span", {
                                  className: u,
                                  ref: C,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, i.jsx)(y, {
                                      guildId: L,
                                      guildTag: b,
                                      guildBadge: D,
                                      className: l,
                                      textVariant: c,
                                      textColor: E,
                                      badgeSize: m,
                                      inline: I,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    C = r.memo(function (e) {
        return (0, i.jsx)(y, { Component: S, ...e });
    });
