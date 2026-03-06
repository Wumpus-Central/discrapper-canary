"use strict";
n.d(t, { Ay: () => S, Cw: () => I, Z9: () => E, o9: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(517905),
    c = n(544028),
    d = n(287809),
    _ = n(685073),
    f = n(743981),
    p = n(985018),
    h = n(814364),
    m = n(613060);
let E = i.memo(function (e) {
        let { src: t, className: n, size: s = f.Sl.SIZE_16 } = e,
            [o, l] = i.useState(!1);
        return null == t || o
            ? (0, r.jsx)("span", { className: a()(m.HH, n) })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: "",
                  className: a()(m.qS, n),
                  width: s,
                  height: s,
                  onError: () => l(!0),
              });
    }),
    g = i.memo(function (e) {
        let { guildTag: t, className: n, textClassName: i, badgeClassName: s, ...o } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("span", {
                    className: m.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", p.intl.formatToPlainString(h.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, r.jsx)(A, {
                    guildTag: t,
                    className: a()(n, m.sM),
                    textClassName: a()(i, m.Lo),
                    badgeClassName: a()(s, m.VD),
                    ...o,
                }),
            ],
        });
    }),
    A = i.memo(function (e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: i,
            className: s,
            textClassName: o,
            badgeClassName: u,
            onClick: c,
            onMouseEnter: d,
            textVariant: g = "text-xs/semibold",
            textColor: A = "text-default",
            badgeSize: I = f.Sl.SIZE_14,
            inline: T = !0,
        } = e;
        return (0, r.jsx)(l.DUT, {
            "aria-label": p.intl.formatToPlainString(h.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == c ? -1 : void 0,
            onClick: c,
            onMouseEnter: d,
            className: a()(m.nz, T && m.os, null != c && m.vk, s),
            children: (0, r.jsxs)(l.Text, {
                tag: "span",
                variant: g,
                lineClamp: 1,
                color: A,
                className: a()(m.Qq, o),
                children: [
                    null != i && "string" == typeof i
                        ? (0, r.jsx)(E, { src: (0, _.gC)(t, i, I), size: I, className: u }, (0, _.gC)(t, i, I) ?? t)
                        : i,
                    (0, r.jsx)("span", { className: m.em, children: n }),
                ],
            }),
        });
    }),
    I = i.memo(function (e) {
        return (0, r.jsx)(T, { Component: g, ...e });
    }),
    T = i.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: s,
                className: f,
                containerClassName: p,
                textVariant: h,
                textColor: E,
                badgeSize: g,
                disableGuildProfile: I = !1,
                inline: T = !0,
                onShowProfile: S,
                onClose: y,
                Component: v = A,
            } = e,
            N = i.useRef(null),
            C = (0, o.bG)([d.default], () => d.default.getUser(n), [n]),
            R = (0, o.bG)([c.A], () => c.A.theme),
            O = void 0 !== t ? t : C?.primaryGuild,
            { tag: b, badge: D, guildId: L } = (0, _.Zo)(O);
        return (0, _.Wb)(n, s, O) && null != L
            ? I
                ? (0, r.jsx)(v, {
                      guildId: L,
                      guildTag: b,
                      guildBadge: D,
                      className: a()(m.Zy, f),
                      textVariant: h,
                      textColor: E,
                      badgeSize: g,
                      inline: T,
                  })
                : (0, r.jsx)(l.wXn, {
                      theme: R,
                      children: (0, r.jsx)(u.A, {
                          guildId: L,
                          onRequestOpen: S,
                          onClose: y,
                          targetElementRef: N,
                          children: (e) =>
                              (0, r.jsx)("span", {
                                  className: p,
                                  ref: N,
                                  children: (0, r.jsx)(v, {
                                      guildId: L,
                                      guildTag: b,
                                      guildBadge: D,
                                      className: f,
                                      textVariant: h,
                                      textColor: E,
                                      badgeSize: g,
                                      inline: T,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    S = i.memo(function (e) {
        return (0, r.jsx)(T, { Component: A, ...e });
    });
