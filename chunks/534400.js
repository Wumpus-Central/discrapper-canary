n.d(a, { Ay: () => I, Cw: () => S, Z9: () => N, o9: () => k });
var s = n(627968),
    t = n(64700),
    l = n(503698),
    r = n.n(l),
    i = n(17928),
    o = n(834730),
    d = n(140735),
    c = n(939249),
    u = n(86182),
    m = n(517905),
    g = n(363195),
    p = n(287809),
    x = n(685073),
    h = n(743981),
    f = n(375708),
    j = n(661023),
    C = n(330411);
let N = t.memo(function (e) {
        let { src: a, className: n, size: l = h.Sl.SIZE_16 } = e,
            [i, o] = t.useState(!1);
        return null == a || i
            ? (0, s.jsx)("span", { className: r()(C.HH, n) })
            : (0, s.jsx)("img", {
                  src: a,
                  alt: "",
                  className: r()(C.qS, n),
                  width: l,
                  height: l,
                  onError: () => o(!0),
              });
    }),
    b = t.memo(function (e) {
        let { guildTag: a, className: n, textClassName: t, badgeClassName: l, ...i } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: C.fl,
                    "aria-hidden": "true",
                    children: ["\xa0", f.intl.formatToPlainString(j.default["4cGHIl"], { tag: a }), ",\xa0"],
                }),
                (0, s.jsx)(k, {
                    guildTag: a,
                    className: r()(n, C.sM),
                    textClassName: r()(t, C.Lo),
                    badgeClassName: r()(l, C.VD),
                    ...i,
                }),
            ],
        });
    }),
    k = t.memo(function (e) {
        let {
                guildId: a,
                guildTag: n,
                guildBadge: t,
                className: l,
                textClassName: i,
                badgeClassName: u,
                onClick: m,
                onMouseDown: g,
                onMouseEnter: p,
                onKeyDown: b,
                "aria-controls": k,
                "aria-expanded": S,
                textVariant: w = "text-xs/semibold",
                textColor: I = "text-default",
                badgeSize: E = h.Sl.SIZE_14,
                inline: P = !0,
            } = e,
            T = null != m,
            v = (0, s.jsxs)(o.E, {
                tag: "span",
                variant: w,
                lineClamp: 1,
                color: I,
                className: r()(C.Qq, i),
                children: [
                    null != t && "string" == typeof t
                        ? (0, s.jsx)(N, { src: (0, x.gC)(a, t, E), size: E, className: u }, (0, x.gC)(a, t, E) ?? a)
                        : t,
                    (0, s.jsx)(d.A, {
                        tag: "span",
                        children: f.intl.formatToPlainString(j.default["fw2p/x"], { tag: n }),
                    }),
                    (0, s.jsx)("span", { className: C.em, "aria-hidden": "true", children: n }),
                ],
            }),
            A = r()(C.nz, P && C.os, l);
        return T
            ? (0, s.jsx)(c.D, {
                  tag: "span",
                  onClick: m,
                  onMouseDown: g,
                  onMouseEnter: p,
                  onKeyDown: b,
                  "aria-controls": k,
                  "aria-expanded": S,
                  className: r()(A, C.vk),
                  children: v,
              })
            : (0, s.jsx)("span", { className: A, children: v });
    }),
    S = t.memo(function (e) {
        return (0, s.jsx)(w, { Component: b, ...e });
    }),
    w = t.memo(function (e) {
        let {
                primaryGuild: a,
                userId: n,
                contextGuildId: l,
                className: o,
                containerClassName: d,
                textVariant: c,
                textColor: h,
                badgeSize: f,
                disableGuildProfile: j = !1,
                inline: N = !0,
                onShowProfile: b,
                onClose: S,
                Component: w = k,
            } = e,
            I = t.useRef(null),
            E = (0, i.bG)([p.default], () => p.default.getUser(n), [n]),
            P = (0, i.bG)([g.A], () => g.A.theme),
            T = void 0 !== a ? a : E?.primaryGuild,
            { tag: v, badge: A, guildId: y } = (0, x.Zo)(T);
        return (0, x.Wb)(n, l, T) && null != y
            ? j
                ? (0, s.jsx)(w, {
                      guildId: y,
                      guildTag: v,
                      guildBadge: A,
                      className: r()(C.Zy, o),
                      textVariant: c,
                      textColor: h,
                      badgeSize: f,
                      inline: N,
                  })
                : (0, s.jsx)(u.w, {
                      theme: P,
                      children: (0, s.jsx)(m.A, {
                          guildId: y,
                          onRequestOpen: b,
                          onClose: S,
                          targetElementRef: I,
                          clickTrap: !1,
                          children: (e) =>
                              (0, s.jsx)("span", {
                                  className: d,
                                  ref: I,
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, s.jsx)(w, {
                                      guildId: y,
                                      guildTag: v,
                                      guildBadge: A,
                                      className: o,
                                      textVariant: c,
                                      textColor: h,
                                      badgeSize: f,
                                      inline: N,
                                      ...e,
                                  }),
                              }),
                      }),
                  })
            : null;
    }),
    I = t.memo(function (e) {
        return (0, s.jsx)(w, { Component: k, ...e });
    });
