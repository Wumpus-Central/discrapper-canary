n.d(t, { Z: () => C }), n(388685);
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
    f = n(326660),
    h = n(441536),
    g = n(933104),
    m = n(332538),
    b = n(921944),
    O = n(989308),
    _ = n(388032),
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
    C = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            C = (0, m.ZP)(t),
            E = i.useCallback(() => {
                var e;
                (0, p.jd)(t),
                    (0, h.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    null == C || null == (e = C.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION);
            }, [t, C]),
            x = i.useCallback(() => {
                var e;
                switch (null == C || null == (e = C.popout) ? void 0 : e.type) {
                    case f.J.LEVEL_REACHED:
                        return (0, r.jsx)(g.jG, v({ guildId: t }, C.popout));
                    case f.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(g.$h, v({ guildId: t }, C.popout));
                    case f.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(g.yI, v({ guildId: t }, C.popout));
                    case f.J.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(g.cO, v({ guildId: t }, C.popout));
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, null == C ? void 0 : C.popout]),
            S = (0, s.s9z)(s.JQI),
            P = (0, a.e7)([d.Z], () => d.Z.hasLayers()),
            [I, N] = i.useState(null),
            w = null == I ? "animation" : "LOOP";
        i.useEffect(() => {
            (null == C ? void 0 : C.popout) == null && N(null);
        }, [null == C ? void 0 : C.popout]);
        let Z = i.useCallback((e) => {
                N(e);
            }, []),
            T = i.useRef(null);
        return (0, r.jsx)(s.yRy, {
            targetElementRef: T,
            shouldShow: (null == C ? void 0 : C.popout) != null && !(S || P),
            nudgeAlignIntoViewport: !0,
            animationPosition: "bottom",
            position: "right",
            renderPopout: x,
            children: (e) => {
                var i, a;
                return (0, r.jsx)(
                    u.m,
                    ((i = v({}, e)),
                    (a = a =
                        {
                            ref: T,
                            className: y.container,
                            id: "skill-trees-".concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(s.$Eu, {
                                    size: "md",
                                    className: e,
                                    color: "currentColor",
                                }),
                            background:
                                (null == C ? void 0 : C.popout) != null &&
                                (0, r.jsx)("div", {
                                    className: y.lottieContainer,
                                    children: (0, r.jsx)(s.kci, {
                                        nextScene: w,
                                        className: y.lottie,
                                        sceneSegments: j,
                                        importData: () => n.e("50821").then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: Z,
                                        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                                    }),
                                }),
                            text: (0, r.jsx)("span", {
                                className: o()({ [y.textImportant]: (null == C ? void 0 : C.showUnread) === !0 }),
                                children: _.intl.string(O.default.yv3DJC),
                            }),
                            selected: l,
                            onClick: E,
                            showUnread: (null == C ? void 0 : C.showUnread) === !0,
                            trailing: null == C ? void 0 : C.trailing,
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
