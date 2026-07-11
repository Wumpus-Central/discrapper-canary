"use strict";
n.d(t, { Ay: () => O, Cw: () => N, Z9: () => m, o9: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(834730),
    d = n(140735),
    c = n(939249),
    u = n(86182),
    _ = n(517905),
    E = n(363195),
    A = n(287809),
    h = n(685073),
    I = n(743981),
    f = n(375708),
    p = n(661023),
    T = n(330411);
let m = r.memo(function (e) {
        let { src: t, className: n, size: a = I.Sl.SIZE_16 } = e,
            [l, o] = r.useState(!1);
        return null == t || l
            ? (0, i.jsx)("span", { className: s()(T.HH, n) })
            : (0, i.jsx)("img", {
                  src: t,
                  alt: "",
                  className: s()(T.qS, n),
                  width: a,
                  height: a,
                  onError: () => o(!0),
              });
    }),
    g = r.memo(function (e) {
        let { guildTag: t, className: n, textClassName: r, badgeClassName: a, ...l } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("span", {
                    className: T.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", f.intl.formatToPlainString(p.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, i.jsx)(S, {
                    guildTag: t,
                    className: s()(n, T.sM),
                    textClassName: s()(r, T.Lo),
                    badgeClassName: s()(a, T.VD),
                    ...l,
                }),
            ],
        });
    }),
    S = r.memo(function (e) {
        let {
                guildId: t,
                guildTag: n,
                guildBadge: r,
                className: a,
                textClassName: l,
                badgeClassName: u,
                onClick: _,
                onMouseDown: E,
                onMouseEnter: A,
                onKeyDown: g,
                "aria-controls": S,
                "aria-expanded": N,
                textVariant: C = "text-xs/semibold",
                textColor: O = "text-default",
                badgeSize: R = I.Sl.SIZE_14,
                inline: L = !0,
            } = e,
            D = null != _,
            y = (0, i.jsxs)(o.E, {
                tag: "span",
                variant: C,
                lineClamp: 1,
                color: O,
                className: s()(T.Qq, l),
                children: [
                    null != r && "string" == typeof r
                        ? (0, i.jsx)(m, { src: (0, h.gC)(t, r, R), size: R, className: u }, (0, h.gC)(t, r, R) ?? t)
                        : r,
                    (0, i.jsx)(d.A, {
                        tag: "span",
                        children: f.intl.formatToPlainString(p.default["fw2p/x"], { tag: n }),
                    }),
                    (0, i.jsx)("span", { className: T.em, "aria-hidden": "true", children: n }),
                ],
            }),
            v = s()(T.nz, L && T.os, a);
        return D
            ? (0, i.jsx)(c.D, {
                  tag: "span",
                  onClick: _,
                  onMouseDown: E,
                  onMouseEnter: A,
                  onKeyDown: g,
                  "aria-controls": S,
                  "aria-expanded": N,
                  className: s()(v, T.vk),
                  children: y,
              })
            : (0, i.jsx)("span", { className: v, children: y });
    }),
    N = r.memo(function (e) {
        return (0, i.jsx)(C, { Component: g, ...e });
    }),
    C = r.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: a,
                className: o,
                containerClassName: d,
                textVariant: c,
                textColor: I,
                badgeSize: f,
                disableGuildProfile: p = !1,
                inline: m = !0,
                onShowProfile: g,
                onClose: N,
                Component: C = S,
            } = e,
            O = r.useRef(null),
            R = (0, l.bG)([A.default], () => A.default.getUser(n), [n]),
            L = (0, l.bG)([E.A], () => E.A.theme),
            D = void 0 !== t ? t : R?.primaryGuild,
            { tag: y, badge: v, guildId: b } = (0, h.Zo)(D);
        return (0, h.Wb)(n, a, D) && null != b
            ? p
                ? (0, i.jsx)(C, {
                      guildId: b,
                      guildTag: y,
                      guildBadge: v,
                      className: s()(T.Zy, o, d),
                      textVariant: c,
                      textColor: I,
                      badgeSize: f,
                      inline: m,
                  })
                : (0, i.jsx)(u.w, {
                      theme: L,
                      children: (0, i.jsx)(_.A, {
                          guildId: b,
                          onRequestOpen: g,
                          onClose: N,
                          targetElementRef: O,
                          clickTrap: !1,
                          children: (e) =>
                              (0, i.jsx)("span", {
                                  className: d,
                                  ref: O,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, i.jsx)(C, {
                                      guildId: b,
                                      guildTag: y,
                                      guildBadge: v,
                                      className: o,
                                      textVariant: c,
                                      textColor: I,
                                      badgeSize: f,
                                      inline: m,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    O = r.memo(function (e) {
        return (0, i.jsx)(C, { Component: S, ...e });
    });
