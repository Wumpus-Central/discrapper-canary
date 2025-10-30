n.d(t, {
    Eo: () => P,
    VD: () => N,
    ZP: () => x,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(622535),
    c = n(481060),
    u = n(239091),
    d = n(410030),
    p = n(686546),
    f = n(66637),
    m = n(782738),
    h = n(371260),
    g = n(372769),
    _ = n(134432),
    b = n(768581),
    E = n(356164),
    O = n(826946),
    I = n(981631),
    y = n(388032),
    v = n(8548),
    C = n(129512),
    S = n(330065),
    T = n(755386);
function N(e) {
    let { guild: t, onClick: l, onView: s } = e,
        [m, h] = i.useState(!1),
        [E, N] = i.useState(!1),
        [j, P] = i.useState(!1),
        x = i.useRef(null),
        A = i.useCallback(async () => {
            N(!0);
            try {
                await l(t.id);
            } finally {
                N(!1);
            }
        }, [t.id, l]),
        Z = i.useCallback(
            (e) => {
                e && !m && (h(!0), null == s || s(t.id));
            },
            [t.id, m, s],
        ),
        w = i.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e("88560").then(n.bind(n, 858523));
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
                            (l = l = { guild: t }),
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
        L = (0, d.ZP)(),
        R = t.features.has(I.GuildFeatures.HUB),
        D = i.useMemo(() => {
            let e = b.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, _.x_)(),
            });
            if (null != e) return e;
            if (R) return T;
            switch (L) {
                case I.BRd.DARK:
                    return C;
                case I.BRd.LIGHT:
                    return S;
            }
        }, [t.discoverySplash, t.id, R, L]),
        M = i.useMemo(
            () =>
                b.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 48,
                }),
            [t.icon, t.id],
        );
    return (0, r.jsxs)("div", {
        className: v.container,
        children: [
            E &&
                (0, r.jsx)("div", {
                    className: v.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: v.spinner,
                    }),
                }),
            (0, r.jsx)(o.$, {
                innerRef: x,
                onChange: Z,
                active: !m,
                threshold: 0.55,
                children: (0, r.jsxs)(f.Z, {
                    ref: x,
                    className: v.card,
                    onClick: A,
                    disabled: E,
                    onContextMenu: w,
                    "aria-label": y.intl.string(y.t["M9wQ+f"]),
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.header,
                            children: [
                                (0, r.jsx)("div", {
                                    className: a()(v.banner, { [v.loaded]: j }),
                                    children: (0, r.jsx)("img", {
                                        src: D,
                                        alt: "",
                                        className: v.bannerImage,
                                        onLoad: () => P(!0),
                                    }),
                                }),
                                (0, r.jsx)(O.Z, {
                                    className: v.maximizeIcon,
                                    guildId: t.id,
                                }),
                                (0, r.jsx)("div", {
                                    className: v.icon,
                                    children: (0, r.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, r.jsx)("div", {
                                            className: v.iconMask,
                                            children: (0, r.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, r.jsx)("img", {
                                                    src: M,
                                                    alt: "",
                                                    className: v.avatar,
                                                }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: v.guildDetails,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.title,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            className: v.guildBadge,
                                            guild: t,
                                            tooltipColor: c.aML.Colors.PRIMARY,
                                        }),
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            className: v.guildName,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: v.description,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: t.description,
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)("div", {
                                                className: v.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)("div", { className: v.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: v.memberDetailsText,
                                                        variant: "text-xs/normal",
                                                        color: "header-secondary",
                                                        children: y.intl.format(y.t["LC+S+m"], {
                                                            membersOnline: t.presenceCount,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        null != t.memberCount &&
                                            (0, r.jsxs)("div", {
                                                className: v.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)("div", { className: v.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: v.memberDetailsText,
                                                        variant: "text-xs/normal",
                                                        color: "header-secondary",
                                                        children: y.intl.format(y.t.zRl6XR, { count: t.memberCount }),
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
function j(e) {
    let { guildId: t, onClick: n, onView: i } = e,
        l = (0, s.e7)([E.Z], () => E.Z.getGuild(t));
    return null == l
        ? null
        : (0, r.jsx)(N, {
              guild: l,
              onClick: n,
              onView: i,
          });
}
function P(e) {
    let { guildId: t, index: n, onClick: l, onView: a } = e,
        s = i.useRef(null == t),
        o = i.useCallback(
            (e, t, n, i) =>
                null == t.guildId
                    ? (0, r.jsx)(
                          h.Z,
                          {
                              state: n,
                              cleanUp: i,
                              children: (0, r.jsx)(m.Z, { className: v.placeholder }),
                          },
                          e,
                      )
                    : (0, r.jsx)(
                          h.Z,
                          {
                              state: n,
                              cleanUp: i,
                              animate: s.current,
                              children: (0, r.jsx)(j, {
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
        className: v.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: o,
            getItemKey: u,
        }),
    });
}
let x = i.memo(j);
