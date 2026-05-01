r.d(a, { Ay: () => m, Cw: () => u, Z9: () => o, o9: () => T });
var s = r(627968),
    E = r(64700),
    l = r(503698),
    c = r.n(l),
    n = r(17928),
    t = r(939249),
    i = r(834730),
    A = r(86182),
    d = r(517905),
    S = r(363195),
    f = r(287809),
    L = r(685073),
    _ = r(743981),
    O = r(985018),
    G = r(661023),
    I = r(330411);
let o = E.memo(function (e) {
        let { src: a, className: r, size: l = _.Sl.SIZE_16 } = e,
            [n, t] = E.useState(!1);
        return null == a || n
            ? (0, s.jsx)("span", { className: c()(I.HH, r) })
            : (0, s.jsx)("img", {
                  src: a,
                  alt: "",
                  className: c()(I.qS, r),
                  width: l,
                  height: l,
                  onError: () => t(!0),
              });
    }),
    R = E.memo(function (e) {
        let { guildTag: a, className: r, textClassName: E, badgeClassName: l, ...n } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: I.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", O.intl.formatToPlainString(G.default["4cGHIl"], { tag: a }), ",\xa0"],
                }),
                (0, s.jsx)(T, {
                    guildTag: a,
                    className: c()(r, I.sM),
                    textClassName: c()(E, I.Lo),
                    badgeClassName: c()(l, I.VD),
                    ...n,
                }),
            ],
        });
    }),
    T = E.memo(function (e) {
        let {
            guildId: a,
            guildTag: r,
            guildBadge: E,
            className: l,
            textClassName: n,
            badgeClassName: A,
            onClick: d,
            onMouseEnter: S,
            textVariant: f = "text-xs/semibold",
            textColor: R = "text-default",
            badgeSize: T = _.Sl.SIZE_14,
            inline: u = !0,
        } = e;
        return (0, s.jsx)(t.D, {
            "aria-label": O.intl.formatToPlainString(G.default["fw2p/x"], { tag: r }),
            tag: "span",
            tabIndex: null == d ? -1 : void 0,
            onClick: d,
            onMouseEnter: S,
            className: c()(I.nz, u && I.os, null != d && I.vk, l),
            children: (0, s.jsxs)(i.E, {
                tag: "span",
                variant: f,
                lineClamp: 1,
                color: R,
                className: c()(I.Qq, n),
                children: [
                    null != E && "string" == typeof E
                        ? (0, s.jsx)(o, { src: (0, L.gC)(a, E, T), size: T, className: A }, (0, L.gC)(a, E, T) ?? a)
                        : E,
                    (0, s.jsx)("span", { className: I.em, children: r }),
                ],
            }),
        });
    }),
    u = E.memo(function (e) {
        return (0, s.jsx)(N, { Component: R, ...e });
    }),
    N = E.memo(function (e) {
        let {
                primaryGuild: a,
                userId: r,
                contextGuildId: l,
                className: t,
                containerClassName: i,
                textVariant: _,
                textColor: O,
                badgeSize: G,
                disableGuildProfile: o = !1,
                inline: R = !0,
                onShowProfile: u,
                onClose: N,
                Component: m = T,
            } = e,
            D = E.useRef(null),
            C = (0, n.bG)([f.default], () => f.default.getUser(r), [r]),
            P = (0, n.bG)([S.A], () => S.A.theme),
            p = void 0 !== a ? a : C?.primaryGuild,
            { tag: y, badge: g, guildId: b } = (0, L.Zo)(p);
        return (0, L.Wb)(r, l, p) && null != b
            ? o
                ? (0, s.jsx)(m, {
                      guildId: b,
                      guildTag: y,
                      guildBadge: g,
                      className: c()(I.Zy, t),
                      textVariant: _,
                      textColor: O,
                      badgeSize: G,
                      inline: R,
                  })
                : (0, s.jsx)(A.w, {
                      theme: P,
                      children: (0, s.jsx)(d.A, {
                          guildId: b,
                          onRequestOpen: u,
                          onClose: N,
                          targetElementRef: D,
                          clickTrap: !1,
                          children: (e) =>
                              (0, s.jsx)("span", {
                                  className: i,
                                  ref: D,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, s.jsx)(m, {
                                      guildId: b,
                                      guildTag: y,
                                      guildBadge: g,
                                      className: t,
                                      textVariant: _,
                                      textColor: O,
                                      badgeSize: G,
                                      inline: R,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    m = E.memo(function (e) {
        return (0, s.jsx)(N, { Component: T, ...e });
    });
