"use strict";
n.d(t, { Ay: () => C, Cw: () => S, Z9: () => A, o9: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(939249),
    d = n(834730),
    _ = n(86182),
    u = n(517905),
    c = n(363195),
    E = n(287809),
    h = n(685073),
    m = n(743981),
    f = n(985018),
    g = n(661023),
    p = n(330411);
let A = r.memo(function (e) {
        let { src: t, className: n, size: s = m.Sl.SIZE_16 } = e,
            [o, l] = r.useState(!1);
        return null == t || o
            ? (0, i.jsx)("span", { className: a()(p.HH, n) })
            : (0, i.jsx)("img", {
                  src: t,
                  alt: "",
                  className: a()(p.qS, n),
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
                    className: p.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", f.intl.formatToPlainString(g.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, i.jsx)(T, {
                    guildTag: t,
                    className: a()(n, p.sM),
                    textClassName: a()(r, p.Lo),
                    badgeClassName: a()(s, p.VD),
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
            badgeClassName: _,
            onClick: u,
            onMouseEnter: c,
            textVariant: E = "text-xs/semibold",
            textColor: I = "text-default",
            badgeSize: T = m.Sl.SIZE_14,
            inline: S = !0,
        } = e;
        return (0, i.jsx)(l.D, {
            "aria-label": f.intl.formatToPlainString(g.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == u ? -1 : void 0,
            onClick: u,
            onMouseEnter: c,
            className: a()(p.nz, S && p.os, null != u && p.vk, s),
            children: (0, i.jsxs)(d.E, {
                tag: "span",
                variant: E,
                lineClamp: 1,
                color: I,
                className: a()(p.Qq, o),
                children: [
                    null != r && "string" == typeof r
                        ? (0, i.jsx)(A, { src: (0, h.gC)(t, r, T), size: T, className: _ }, (0, h.gC)(t, r, T) ?? t)
                        : r,
                    (0, i.jsx)("span", { className: p.em, children: n }),
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
                containerClassName: d,
                textVariant: m,
                textColor: f,
                badgeSize: g,
                disableGuildProfile: A = !1,
                inline: I = !0,
                onShowProfile: S,
                onClose: N,
                Component: C = T,
            } = e,
            R = r.useRef(null),
            O = (0, o.bG)([E.default], () => E.default.getUser(n), [n]),
            y = (0, o.bG)([c.A], () => c.A.theme),
            v = void 0 !== t ? t : O?.primaryGuild,
            { tag: D, badge: L, guildId: b } = (0, h.Zo)(v);
        return (0, h.Wb)(n, s, v) && null != b
            ? A
                ? (0, i.jsx)(C, {
                      guildId: b,
                      guildTag: D,
                      guildBadge: L,
                      className: a()(p.Zy, l),
                      textVariant: m,
                      textColor: f,
                      badgeSize: g,
                      inline: I,
                  })
                : (0, i.jsx)(_.w, {
                      theme: y,
                      children: (0, i.jsx)(u.A, {
                          guildId: b,
                          onRequestOpen: S,
                          onClose: N,
                          targetElementRef: R,
                          clickTrap: !1,
                          children: (e) =>
                              (0, i.jsx)("span", {
                                  className: d,
                                  ref: R,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, i.jsx)(C, {
                                      guildId: b,
                                      guildTag: D,
                                      guildBadge: L,
                                      className: l,
                                      textVariant: m,
                                      textColor: f,
                                      badgeSize: g,
                                      inline: I,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    C = r.memo(function (e) {
        return (0, i.jsx)(N, { Component: T, ...e });
    });
