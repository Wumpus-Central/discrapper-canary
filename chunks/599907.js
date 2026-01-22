n.d(t, {
    Ay: () => x,
    jO: () => j,
    nO: () => N,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(230109),
    c = n(397927),
    u = n(442433),
    d = n(736653),
    p = n(573435),
    f = n(635350),
    h = n(726187),
    A = n(542678),
    g = n(714991),
    m = n(776231),
    b = n(486020),
    _ = n(351022),
    E = n(244229),
    O = n(652215),
    y = n(985018),
    I = n(156323),
    v = n(937495),
    S = n(517061),
    C = n(970890);

function N(e) {
    let { guild: t, onClick: l, onView: s } = e,
        [h, A] = i.useState(!1),
        [_, N] = i.useState(!1),
        [T, j] = i.useState(!1),
        x = i.useRef(null),
        P = i.useCallback(async () => {
            N(!0);
            try {
                await l(t.id);
            } finally {
                N(!1);
            }
        }, [t.id, l]),
        w = i.useCallback(
            (e) => {
                e && !h && (A(!0), null == s || s(t.id));
            },
            [t.id, h, s],
        ),
        L = i.useCallback(
            (e) => {
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("39572").then(n.bind(n, 235327));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    guild: t,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i),
                        );
                    };
                });
            },
            [t],
        ),
        R = (0, d.Ay)(),
        D = t.features.has(O.GuildFeatures.HUB),
        M = i.useMemo(() => {
            let e = b.Ay.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, m.mZ)(),
            });
            if (null != e) return e;
            if (D) return C;
            switch (R) {
                case O.NJ8.DARK:
                    return v;
                case O.NJ8.LIGHT:
                    return S;
            }
        }, [t.discoverySplash, t.id, D, R]),
        k = i.useMemo(
            () =>
                b.Ay.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 48,
                }),
            [t.icon, t.id],
        );
    return (0, r.jsxs)("div", {
        className: I.kL,
        children: [
            _ &&
                (0, r.jsx)("div", {
                    className: I.dc,
                    children: (0, r.jsx)(c.y$y, {
                        type: c.y$y.Type.PULSING_ELLIPSIS,
                        className: I.u1,
                    }),
                }),
            (0, r.jsx)(o.L, {
                innerRef: x,
                onChange: w,
                active: !h,
                threshold: 0.55,
                children: (0, r.jsxs)(f.A, {
                    ref: x,
                    className: I.Nr,
                    onClick: P,
                    disabled: _,
                    onContextMenu: L,
                    "aria-label": y.intl.string(y.t["M9wQ+f"]),
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.wx,
                            children: [
                                (0, r.jsx)("div", {
                                    className: a()(I.vK, {
                                        [I.Kc]: T,
                                    }),
                                    children: (0, r.jsx)("img", {
                                        src: M,
                                        alt: "",
                                        className: I._e,
                                        onLoad: () => j(!0),
                                    }),
                                }),
                                (0, r.jsx)(E.A, {
                                    className: I.gw,
                                    guildId: t.id,
                                }),
                                (0, r.jsx)("div", {
                                    className: I.Kk,
                                    children: (0, r.jsx)(p.Ay, {
                                        mask: p.Ay.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, r.jsx)("div", {
                                            className: I.SA,
                                            children: (0, r.jsx)(p.Ay, {
                                                mask: p.Ay.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, r.jsx)("img", {
                                                    src: k,
                                                    alt: "",
                                                    className: I.my,
                                                }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: I.gI,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: I.DD,
                                    children: [
                                        (0, r.jsx)(g.A, {
                                            className: I.n2,
                                            guild: t,
                                            tooltipColor: c.STz.Colors.PRIMARY,
                                        }),
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            className: I.J5,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: I.h_,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, r.jsxs)("div", {
                                    className: I.bu,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)("div", {
                                                className: I.CV,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: I.SP,
                                                    }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: I.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: y.intl.format(y.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)("div", {
                                                className: I.CV,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: I.PB,
                                                    }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: I.ac,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
                                                        children: y.intl.format(y.t.zRl6XR, {
                                                            count: t.memberCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}

function T(e) {
    let { guildId: t, onClick: n, onView: i } = e,
        l = (0, s.bG)([_.A], () => _.A.getGuild(t));
    return null == l
        ? null
        : (0, r.jsx)(N, {
              guild: l,
              onClick: n,
              onView: i,
          });
}

function j(e) {
    let { guildId: t, index: n, onClick: l, onView: a } = e,
        s = i.useRef(null == t),
        o = i.useCallback(
            (e, t, n, i) =>
                null == t.guildId
                    ? (0, r.jsx)(
                          A.A,
                          {
                              state: n,
                              cleanUp: i,
                              children: (0, r.jsx)(h.A, {
                                  className: I.qf,
                              }),
                          },
                          e,
                      )
                    : (0, r.jsx)(
                          A.A,
                          {
                              state: n,
                              cleanUp: i,
                              animate: s.current,
                              children: (0, r.jsx)(T, {
                                  guildId: t.guildId,
                                  onClick: l,
                                  onView: a,
                              }),
                          },
                          e,
                      ),
            [l, a],
        ),
        u = i.useCallback((e) => {
            var t;
            return null != (t = e.guildId) ? t : "".concat(e.index);
        }, []),
        d = i.useMemo(
            () => [
                {
                    guildId: t,
                    index: n,
                },
            ],
            [t, n],
        );
    return (0, r.jsx)("div", {
        className: I.NK,
        children: (0, r.jsx)(c.Fai, {
            items: d,
            renderItem: o,
            getItemKey: u,
        }),
    });
}
let x = i.memo(T);
