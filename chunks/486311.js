n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(434479),
    d = n(819640),
    p = n(713081),
    h = n(326660),
    f = n(441536),
    g = n(933104),
    m = n(332538),
    b = n(921944),
    _ = n(149829),
    O = n(388032),
    y = n(969649);
function v(e) {
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
}
let j = {
        animation: {
            BEG: 0,
            END: 75,
        },
        LOOP: {
            BEG: 76,
            END: 376,
        },
    },
    x = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            x = (0, m.ZP)(t),
            C = i.useCallback(() => {
                var e;
                (0, p.jd)(t),
                    (0, f.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == x || null == (e = x.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION);
            }, [t, x]),
            E = i.useCallback(() => {
                var e;
                switch (null == x || null == (e = x.popout) ? void 0 : e.type) {
                    case h.J.LEVEL_REACHED:
                        return (0, r.jsx)(g.jG, v({ guildId: t }, x.popout));
                    case h.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(g.$h, v({ guildId: t }, x.popout));
                    case h.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(g.yI, v({ guildId: t }, x.popout));
                    case h.J.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(g.cO, v({ guildId: t }, x.popout));
                    case h.J.GAME_SERVER_HOSTING_AVAILABLE:
                    case h.J.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(g.dJ, v({ guildId: t }, x.popout));
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == x ? void 0 : x.popout]),
            S = (0, s.s9z)(s.JQI),
            I = (0, a.e7)([d.Z], () => d.Z.hasLayers()),
            [P, N] = i.useState(null),
            Z = null == P ? "animation" : "LOOP";
        i.useEffect(() => {
            (null == x ? void 0 : x.popout) == null && N(null);
        }, [null == x ? void 0 : x.popout]);
        let T = i.useCallback((e) => {
                N(e);
            }, []),
            w = i.useRef(null);
        return (0, r.jsx)(s.yRy, {
            targetElementRef: w,
            shouldShow: (null == x ? void 0 : x.popout) != null && !(S || I),
            nudgeAlignIntoViewport: !0,
            animationPosition: "bottom",
            position: "right",
            renderPopout: E,
            children: (e) => {
                var i, a;
                return (0, r.jsx)(
                    u.m,
                    ((i = v({}, e)),
                    (a = a =
                        {
                            ref: w,
                            className: y.container,
                            id: "skill-trees-".concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(s.Ucv, {
                                    size: "md",
                                    className: e,
                                    color: "currentColor",
                                }),
                            background:
                                (null == x ? void 0 : x.popout) != null &&
                                (0, r.jsx)("div", {
                                    className: y.lottieContainer,
                                    children: (0, r.jsx)(s.kci, {
                                        nextScene: Z,
                                        className: y.lottie,
                                        sceneSegments: j,
                                        importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: T,
                                        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                                    }),
                                }),
                            text: (0, r.jsx)("span", {
                                className: o()({ [y.textImportant]: (null == x ? void 0 : x.showUnread) === !0 }),
                                children: O.intl.string(_.default.yv3DJJ),
                            }),
                            selected: l,
                            onClick: C,
                            showUnread: (null == x ? void 0 : x.showUnread) === !0,
                            trailing: null == x ? void 0 : x.trailing,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    i),
                );
            },
        });
    });
