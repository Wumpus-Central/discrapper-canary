"use strict";
n.d(t, { Ay: () => N, Cw: () => S, Z9: () => A, o9: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(939249),
    u = n(834730),
    c = n(86182),
    d = n(517905),
    _ = n(544028),
    f = n(287809),
    p = n(685073),
    h = n(743981),
    E = n(985018),
    m = n(661023),
    g = n(330411);
let A = i.memo(function (e) {
        let { src: t, className: n, size: s = h.Sl.SIZE_16 } = e,
            [o, l] = i.useState(!1);
        return null == t || o
            ? (0, r.jsx)("span", { className: a()(g.HH, n) })
            : (0, r.jsx)("img", {
                  src: t,
                  alt: "",
                  className: a()(g.qS, n),
                  width: s,
                  height: s,
                  onError: () => l(!0),
              });
    }),
    I = i.memo(function (e) {
        let { guildTag: t, className: n, textClassName: i, badgeClassName: s, ...o } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("span", {
                    className: g.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", E.intl.formatToPlainString(m.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, r.jsx)(T, {
                    guildTag: t,
                    className: a()(n, g.sM),
                    textClassName: a()(i, g.Lo),
                    badgeClassName: a()(s, g.VD),
                    ...o,
                }),
            ],
        });
    }),
    T = i.memo(function (e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: i,
            className: s,
            textClassName: o,
            badgeClassName: c,
            onClick: d,
            onMouseEnter: _,
            textVariant: f = "text-xs/semibold",
            textColor: I = "text-default",
            badgeSize: T = h.Sl.SIZE_14,
            inline: S = !0,
        } = e;
        return (0, r.jsx)(l.D, {
            "aria-label": E.intl.formatToPlainString(m.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == d ? -1 : void 0,
            onClick: d,
            onMouseEnter: _,
            className: a()(g.nz, S && g.os, null != d && g.vk, s),
            children: (0, r.jsxs)(u.E, {
                tag: "span",
                variant: f,
                lineClamp: 1,
                color: I,
                className: a()(g.Qq, o),
                children: [
                    null != i && "string" == typeof i
                        ? (0, r.jsx)(A, { src: (0, p.gC)(t, i, T), size: T, className: c }, (0, p.gC)(t, i, T) ?? t)
                        : i,
                    (0, r.jsx)("span", { className: g.em, children: n }),
                ],
            }),
        });
    }),
    S = i.memo(function (e) {
        return (0, r.jsx)(y, { Component: I, ...e });
    }),
    y = i.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: s,
                className: l,
                containerClassName: u,
                textVariant: h,
                textColor: E,
                badgeSize: m,
                disableGuildProfile: A = !1,
                inline: I = !0,
                onShowProfile: S,
                onClose: y,
                Component: N = T,
            } = e,
            v = i.useRef(null),
            C = (0, o.bG)([f.default], () => f.default.getUser(n), [n]),
            O = (0, o.bG)([_.A], () => _.A.theme),
            R = void 0 !== t ? t : C?.primaryGuild,
            { tag: b, badge: D, guildId: L } = (0, p.Zo)(R);
        return (0, p.Wb)(n, s, R) && null != L
            ? A
                ? (0, r.jsx)(N, {
                      guildId: L,
                      guildTag: b,
                      guildBadge: D,
                      className: a()(g.Zy, l),
                      textVariant: h,
                      textColor: E,
                      badgeSize: m,
                      inline: I,
                  })
                : (0, r.jsx)(c.w, {
                      theme: O,
                      children: (0, r.jsx)(d.A, {
                          guildId: L,
                          onRequestOpen: S,
                          onClose: y,
                          targetElementRef: v,
                          clickTrap: !1,
                          children: (e) =>
                              (0, r.jsx)("span", {
                                  className: u,
                                  ref: v,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, r.jsx)(N, {
                                      guildId: L,
                                      guildTag: b,
                                      guildBadge: D,
                                      className: l,
                                      textVariant: h,
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
    N = i.memo(function (e) {
        return (0, r.jsx)(y, { Component: T, ...e });
    });
