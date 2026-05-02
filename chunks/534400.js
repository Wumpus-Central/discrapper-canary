r.d(a, { Ay: () => N, Cw: () => T, Z9: () => I, o9: () => R });
var l = r(627968),
    t = r(64700),
    n = r(503698),
    i = r.n(n),
    d = r(17928),
    s = r(939249),
    c = r(834730),
    u = r(86182),
    E = r(517905),
    o = r(363195),
    f = r(287809),
    A = r(685073),
    S = r(743981),
    G = r(375708),
    L = r(661023),
    _ = r(330411);
let I = t.memo(function (e) {
        let { src: a, className: r, size: n = S.Sl.SIZE_16 } = e,
            [d, s] = t.useState(!1);
        return null == a || d
            ? (0, l.jsx)("span", { className: i()(_.HH, r) })
            : (0, l.jsx)("img", {
                  src: a,
                  alt: "",
                  className: i()(_.qS, r),
                  width: n,
                  height: n,
                  onError: () => s(!0),
              });
    }),
    O = t.memo(function (e) {
        let { guildTag: a, className: r, textClassName: t, badgeClassName: n, ...d } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: _.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", G.intl.formatToPlainString(L.default["4cGHIl"], { tag: a }), ",\xa0"],
                }),
                (0, l.jsx)(R, {
                    guildTag: a,
                    className: i()(r, _.sM),
                    textClassName: i()(t, _.Lo),
                    badgeClassName: i()(n, _.VD),
                    ...d,
                }),
            ],
        });
    }),
    R = t.memo(function (e) {
        let {
            guildId: a,
            guildTag: r,
            guildBadge: t,
            className: n,
            textClassName: d,
            badgeClassName: u,
            onClick: E,
            onMouseEnter: o,
            textVariant: f = "text-xs/semibold",
            textColor: O = "text-default",
            badgeSize: R = S.Sl.SIZE_14,
            inline: T = !0,
        } = e;
        return (0, l.jsx)(s.D, {
            "aria-label": G.intl.formatToPlainString(L.default["fw2p/x"], { tag: r }),
            tag: "span",
            tabIndex: null == E ? -1 : void 0,
            onClick: E,
            onMouseEnter: o,
            className: i()(_.nz, T && _.os, null != E && _.vk, n),
            children: (0, l.jsxs)(c.E, {
                tag: "span",
                variant: f,
                lineClamp: 1,
                color: O,
                className: i()(_.Qq, d),
                children: [
                    null != t && "string" == typeof t
                        ? (0, l.jsx)(I, { src: (0, A.gC)(a, t, R), size: R, className: u }, (0, A.gC)(a, t, R) ?? a)
                        : t,
                    (0, l.jsx)("span", { className: _.em, children: r }),
                ],
            }),
        });
    }),
    T = t.memo(function (e) {
        return (0, l.jsx)(m, { Component: O, ...e });
    }),
    m = t.memo(function (e) {
        let {
                primaryGuild: a,
                userId: r,
                contextGuildId: n,
                className: s,
                containerClassName: c,
                textVariant: S,
                textColor: G,
                badgeSize: L,
                disableGuildProfile: I = !1,
                inline: O = !0,
                onShowProfile: T,
                onClose: m,
                Component: N = R,
            } = e,
            g = t.useRef(null),
            C = (0, d.bG)([f.default], () => f.default.getUser(r), [r]),
            D = (0, d.bG)([o.A], () => o.A.theme),
            p = void 0 !== a ? a : C?.primaryGuild,
            { tag: P, badge: b, guildId: y } = (0, A.Zo)(p);
        return (0, A.Wb)(r, n, p) && null != y
            ? I
                ? (0, l.jsx)(N, {
                      guildId: y,
                      guildTag: P,
                      guildBadge: b,
                      className: i()(_.Zy, s),
                      textVariant: S,
                      textColor: G,
                      badgeSize: L,
                      inline: O,
                  })
                : (0, l.jsx)(u.w, {
                      theme: D,
                      children: (0, l.jsx)(E.A, {
                          guildId: y,
                          onRequestOpen: T,
                          onClose: m,
                          targetElementRef: g,
                          clickTrap: !1,
                          children: (e) =>
                              (0, l.jsx)("span", {
                                  className: c,
                                  ref: g,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, l.jsx)(N, {
                                      guildId: y,
                                      guildTag: P,
                                      guildBadge: b,
                                      className: s,
                                      textVariant: S,
                                      textColor: G,
                                      badgeSize: L,
                                      inline: O,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    N = t.memo(function (e) {
        return (0, l.jsx)(m, { Component: R, ...e });
    });
