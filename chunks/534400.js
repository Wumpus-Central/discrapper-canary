"use strict";
n.d(t, { Ay: () => N, Cw: () => y, Z9: () => I, o9: () => S });
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
    h = n(363195),
    f = n(287809),
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
                onMouseDown: h,
                onMouseEnter: f,
                onKeyDown: T,
                "aria-controls": S,
                "aria-expanded": y,
                textVariant: C = "text-xs/semibold",
                textColor: N = "text-default",
                badgeSize: v = E.Sl.SIZE_14,
                inline: R = !0,
            } = e,
            O = null != _,
            b = (0, i.jsxs)(l.E, {
                tag: "span",
                variant: C,
                lineClamp: 1,
                color: N,
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
            D = a()(A.nz, R && A.os, s);
        return O
            ? (0, i.jsx)(c.D, {
                  tag: "span",
                  onClick: _,
                  onMouseDown: h,
                  onMouseEnter: f,
                  onKeyDown: T,
                  "aria-controls": S,
                  "aria-expanded": y,
                  className: a()(D, A.vk),
                  children: b,
              })
            : (0, i.jsx)("span", { className: D, children: b });
    }),
    y = r.memo(function (e) {
        return (0, i.jsx)(C, { Component: T, ...e });
    }),
    C = r.memo(function (e) {
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
                onClose: y,
                Component: C = S,
            } = e,
            N = r.useRef(null),
            v = (0, o.bG)([f.default], () => f.default.getUser(n), [n]),
            R = (0, o.bG)([h.A], () => h.A.theme),
            O = void 0 !== t ? t : v?.primaryGuild,
            { tag: b, badge: D, guildId: L } = (0, p.Zo)(O);
        return (0, p.Wb)(n, s, O) && null != L
            ? g
                ? (0, i.jsx)("span", {
                      className: u,
                      children: (0, i.jsx)(C, {
                          guildId: L,
                          guildTag: b,
                          guildBadge: D,
                          className: a()(A.Zy, l),
                          textVariant: c,
                          textColor: E,
                          badgeSize: m,
                          inline: I,
                      }),
                  })
                : (0, i.jsx)(d.w, {
                      theme: R,
                      children: (0, i.jsx)(_.A, {
                          guildId: L,
                          onRequestOpen: T,
                          onClose: y,
                          targetElementRef: N,
                          clickTrap: !1,
                          children: (e) =>
                              (0, i.jsx)("span", {
                                  className: u,
                                  ref: N,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, i.jsx)(C, {
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
    N = r.memo(function (e) {
        return (0, i.jsx)(C, { Component: S, ...e });
    });
