n.d(t, { Ay: () => h, Cw: () => R, Z9: () => _, o9: () => O });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    d = n.n(r),
    l = n(17928),
    s = n(939249),
    c = n(834730),
    u = n(86182),
    E = n(517905),
    o = n(363195),
    f = n(287809),
    A = n(685073),
    S = n(743981),
    G = n(985018),
    L = n(661023),
    b = n(330411);
let _ = i.memo(function (e) {
        let { src: t, className: n, size: r = S.Sl.SIZE_16 } = e,
            [l, s] = i.useState(!1);
        return null == t || l
            ? (0, a.jsx)("span", { className: d()(b.HH, n) })
            : (0, a.jsx)("img", {
                  src: t,
                  alt: "",
                  className: d()(b.qS, n),
                  width: r,
                  height: r,
                  onError: () => s(!0),
              });
    }),
    I = i.memo(function (e) {
        let { guildTag: t, className: n, textClassName: i, badgeClassName: r, ...l } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: b.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", G.intl.formatToPlainString(L.default["4cGHIl"], { tag: t }), ",\xa0"],
                }),
                (0, a.jsx)(O, {
                    guildTag: t,
                    className: d()(n, b.sM),
                    textClassName: d()(i, b.Lo),
                    badgeClassName: d()(r, b.VD),
                    ...l,
                }),
            ],
        });
    }),
    O = i.memo(function (e) {
        let {
            guildId: t,
            guildTag: n,
            guildBadge: i,
            className: r,
            textClassName: l,
            badgeClassName: u,
            onClick: E,
            onMouseEnter: o,
            textVariant: f = "text-xs/semibold",
            textColor: I = "text-default",
            badgeSize: O = S.Sl.SIZE_14,
            inline: R = !0,
        } = e;
        return (0, a.jsx)(s.D, {
            "aria-label": G.intl.formatToPlainString(L.default["fw2p/x"], { tag: n }),
            tag: "span",
            tabIndex: null == E ? -1 : void 0,
            onClick: E,
            onMouseEnter: o,
            className: d()(b.nz, R && b.os, null != E && b.vk, r),
            children: (0, a.jsxs)(c.E, {
                tag: "span",
                variant: f,
                lineClamp: 1,
                color: I,
                className: d()(b.Qq, l),
                children: [
                    null != i && "string" == typeof i
                        ? (0, a.jsx)(_, { src: (0, A.gC)(t, i, O), size: O, className: u }, (0, A.gC)(t, i, O) ?? t)
                        : i,
                    (0, a.jsx)("span", { className: b.em, children: n }),
                ],
            }),
        });
    }),
    R = i.memo(function (e) {
        return (0, a.jsx)(T, { Component: I, ...e });
    }),
    T = i.memo(function (e) {
        let {
                primaryGuild: t,
                userId: n,
                contextGuildId: r,
                className: s,
                containerClassName: c,
                textVariant: S,
                textColor: G,
                badgeSize: L,
                disableGuildProfile: _ = !1,
                inline: I = !0,
                onShowProfile: R,
                onClose: T,
                Component: h = O,
            } = e,
            m = i.useRef(null),
            N = (0, l.bG)([f.default], () => f.default.getUser(n), [n]),
            g = (0, l.bG)([o.A], () => o.A.theme),
            C = void 0 !== t ? t : N?.primaryGuild,
            { tag: p, badge: D, guildId: P } = (0, A.Zo)(C);
        return (0, A.Wb)(n, r, C) && null != P
            ? _
                ? (0, a.jsx)(h, {
                      guildId: P,
                      guildTag: p,
                      guildBadge: D,
                      className: d()(b.Zy, s),
                      textVariant: S,
                      textColor: G,
                      badgeSize: L,
                      inline: I,
                  })
                : (0, a.jsx)(u.w, {
                      theme: g,
                      children: (0, a.jsx)(E.A, {
                          guildId: P,
                          onRequestOpen: R,
                          onClose: T,
                          targetElementRef: m,
                          clickTrap: !1,
                          children: (e) =>
                              (0, a.jsx)("span", {
                                  className: c,
                                  ref: m,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, a.jsx)(h, {
                                      guildId: P,
                                      guildTag: p,
                                      guildBadge: D,
                                      className: s,
                                      textVariant: S,
                                      textColor: G,
                                      badgeSize: L,
                                      inline: I,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    h = i.memo(function (e) {
        return (0, a.jsx)(T, { Component: O, ...e });
    });
