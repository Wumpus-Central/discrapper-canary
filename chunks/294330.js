n.d(t, {
    Eo: () => P,
    VD: () => N,
    ZP: () => x,
}),
    n(388685),
    n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(622535),
    c = n(481060),
    u = n(239091),
    d = n(410030),
    p = n(686546),
    f = n(66637),
    g = n(782738),
    h = n(371260),
    m = n(372769),
    b = n(134432),
    _ = n(768581),
    E = n(356164),
    O = n(826946),
    v = n(981631),
    y = n(388032),
    I = n(465825),
    C = n(129512),
    S = n(330065),
    T = n(755386);
function N(e) {
    let { guild: t, onClick: l, onView: o } = e,
        [g, h] = i.useState(!1),
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
                e && !g && (h(!0), null == o || o(t.id));
            },
            [t.id, g, o],
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
        R = t.features.has(v.GuildFeatures.HUB),
        D = i.useMemo(() => {
            let e = _.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, b.x_)(),
            });
            if (null != e) return e;
            if (R) return T;
            switch (L) {
                case v.BRd.DARK:
                    return C;
                case v.BRd.LIGHT:
                    return S;
            }
        }, [t.discoverySplash, t.id, R, L]),
        M = i.useMemo(
            () =>
                _.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 48,
                }),
            [t.icon, t.id],
        );
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            E &&
                (0, r.jsx)("div", {
                    className: I.spinnerContainer,
                    children: (0, r.jsx)(c.$jN, {
                        type: c.$jN.Type.PULSING_ELLIPSIS,
                        className: I.spinner,
                    }),
                }),
            (0, r.jsx)(s.$, {
                innerRef: x,
                onChange: Z,
                active: !g,
                threshold: 0.55,
                children: (0, r.jsxs)(f.Z, {
                    ref: x,
                    className: I.card,
                    onClick: A,
                    disabled: E,
                    onContextMenu: w,
                    "aria-label": y.intl.string(y.t["M9wQ+f"]),
                    children: [
                        (0, r.jsxs)("div", {
                            className: I.header,
                            children: [
                                (0, r.jsx)("div", {
                                    className: a()(I.banner, { [I.loaded]: j }),
                                    children: (0, r.jsx)("img", {
                                        src: D,
                                        alt: "",
                                        className: I.bannerImage,
                                        onLoad: () => P(!0),
                                    }),
                                }),
                                (0, r.jsx)(O.Z, {
                                    className: I.maximizeIcon,
                                    guildId: t.id,
                                }),
                                (0, r.jsx)("div", {
                                    className: I.icon,
                                    children: (0, r.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 56,
                                        height: 56,
                                        children: (0, r.jsx)("div", {
                                            className: I.iconMask,
                                            children: (0, r.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 48,
                                                height: 48,
                                                children: (0, r.jsx)("img", {
                                                    src: M,
                                                    alt: "",
                                                    className: I.avatar,
                                                }),
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: I.guildDetails,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: I.title,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            className: I.guildBadge,
                                            guild: t,
                                            tooltipColor: c.aML.Colors.PRIMARY,
                                        }),
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            className: I.guildName,
                                            children: t.name,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: I.description,
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: t.description,
                                }),
                                (0, r.jsxs)("div", {
                                    className: I.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, r.jsxs)("div", {
                                                className: I.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)("div", { className: I.presenceCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: I.memberDetailsText,
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
                                                className: I.memberDetailsCount,
                                                children: [
                                                    (0, r.jsx)("div", { className: I.memberCountDot }),
                                                    (0, r.jsx)(c.Text, {
                                                        className: I.memberDetailsText,
                                                        variant: "text-xs/normal",
                                                        color: "text-default",
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
        l = (0, o.e7)([E.Z], () => E.Z.getGuild(t));
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
        o = i.useRef(null == t),
        s = i.useCallback(
            (e, t, n, i) =>
                null == t.guildId
                    ? (0, r.jsx)(
                          h.Z,
                          {
                              state: n,
                              cleanUp: i,
                              children: (0, r.jsx)(g.Z, { className: I.placeholder }),
                          },
                          e,
                      )
                    : (0, r.jsx)(
                          h.Z,
                          {
                              state: n,
                              cleanUp: i,
                              animate: o.current,
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
        className: I.transitionGroup,
        children: (0, r.jsx)(c.W3x, {
            items: d,
            renderItem: s,
            getItemKey: u,
        }),
    });
}
let x = i.memo(j);
