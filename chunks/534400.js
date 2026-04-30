"use strict";
n.d(t, { Ay: () => y, Cw: () => S, Z9: () => A, o9: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(939249),
    u = n(834730),
    c = n(86182),
    d = n(517905),
    _ = n(363195),
    f = n(287809),
    h = n(685073),
    p = n(743981),
    E = n(375708),
    m = n(661023),
    g = n(330411);
let A = r.memo(function (e) {
        let { src: t, className: n, size: s = p.Sl.SIZE_16 } = e,
            [o, l] = r.useState(!1);
        return null == t || o
            ? (0, i.jsx)("span", { className: a()(g.HH, n) })
            : (0, i.jsx)("img", {
                  src: t,
                  alt: "",
                  className: a()(g.qS, n),
                  width: s,
                  height: s,
                  onError: () => l(!0),
              });
    }),
    I = r.memo(function (e) {
        let { guildTag: t, className: n, textClassName: r, badgeClassName: s, ...o } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("span", {
                    className: g.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", E.intl.formatToPlainString(m.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, i.jsx)(T, {
                    guildTag: t,
                    className: a()(n, g.sM),
                    textClassName: a()(r, g.Lo),
                    badgeClassName: a()(s, g.VD),
                    ...o,
                }),
            ],
        });
    }),
    T = r.memo(function (e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: r,
            className: s,
            textClassName: o,
            badgeClassName: c,
            onClick: d,
            onMouseEnter: _,
            textVariant: f = "text-xs/semibold",
            textColor: I = "text-default",
            badgeSize: T = p.Sl.SIZE_14,
            inline: S = !0,
        } = e;
        return (0, i.jsx)(l.D, {
            "aria-label": E.intl.formatToPlainString(m.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == d ? -1 : void 0,
            onClick: d,
            onMouseEnter: _,
            className: a()(g.nz, S && g.os, null != d && g.vk, s),
            children: (0, i.jsxs)(u.E, {
                tag: "span",
                variant: f,
                lineClamp: 1,
                color: I,
                className: a()(g.Qq, o),
                children: [
                    null != r && "string" == typeof r
                        ? (0, i.jsx)(A, { src: (0, h.gC)(t, r, T), size: T, className: c }, (0, h.gC)(t, r, T) ?? t)
                        : r,
                    (0, i.jsx)("span", { className: g.em, children: n }),
                ],
            }),
        });
    }),
    S = r.memo(function (e) {
        return (0, i.jsx)(N, { Component: I, ...e });
    }),
    N = r.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: s,
                className: l,
                containerClassName: u,
                textVariant: p,
                textColor: E,
                badgeSize: m,
                disableGuildProfile: A = !1,
                inline: I = !0,
                onShowProfile: S,
                onClose: N,
                Component: y = T,
            } = e,
            C = r.useRef(null),
            v = (0, o.bG)([f.default], () => f.default.getUser(n), [n]),
            O = (0, o.bG)([_.A], () => _.A.theme),
            R = void 0 !== t ? t : v?.primaryGuild,
            { tag: b, badge: D, guildId: L } = (0, h.Zo)(R);
        return (0, h.Wb)(n, s, R) && null != L
            ? A
                ? (0, i.jsx)(y, {
                      guildId: L,
                      guildTag: b,
                      guildBadge: D,
                      className: a()(g.Zy, l),
                      textVariant: p,
                      textColor: E,
                      badgeSize: m,
                      inline: I,
                  })
                : (0, i.jsx)(c.w, {
                      theme: O,
                      children: (0, i.jsx)(d.A, {
                          guildId: L,
                          onRequestOpen: S,
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
                                      textVariant: p,
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
    y = r.memo(function (e) {
        return (0, i.jsx)(N, { Component: T, ...e });
    });
