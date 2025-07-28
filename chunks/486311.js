(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(434479),
    d = n(819640),
    h = n(713081),
    p = n(326660),
    f = n(441536),
    g = n(933104),
    m = n(332538),
    b = n(921944),
    _ = n(93841),
    O = n(388032),
    y = n(388298);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let v = {
        animation: {
            BEG: 0,
            END: 75
        },
        LOOP: {
            BEG: 76,
            END: 376
        }
    },
    j = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            j = (0, m.ZP)(t),
            E = i.useCallback(() => {
                var e;
                ((0, h.jd)(t), (0, f.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == j || null == (e = j.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION));
            }, [t, j]),
            S = i.useCallback(() => {
                var e;
                switch (null == j || null == (e = j.popout) ? void 0 : e.type) {
                    case p.J.LEVEL_REACHED:
                        return (0, r.jsx)(g.jG, C({ guildId: t }, j.popout));
                    case p.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(g.$h, C({ guildId: t }, j.popout));
                    case p.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(g.yI, C({ guildId: t }, j.popout));
                    case p.J.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(g.cO, C({ guildId: t }, j.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == j ? void 0 : j.popout]),
            x = (0, s.s9z)(s.JQI),
            I = (0, a.e7)([d.Z], () => d.Z.hasLayers()),
            [P, N] = i.useState(null),
            w = null == P ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == j ? void 0 : j.popout) == null && N(null);
        }, [null == j ? void 0 : j.popout]);
        let T = i.useCallback((e) => {
                N(e);
            }, []),
            Z = i.useRef(null);
        return (0, r.jsx)(s.yRy, {
            targetElementRef: Z,
            shouldShow: (null == j ? void 0 : j.popout) != null && !(x || I),
            nudgeAlignIntoViewport: !0,
            animationPosition: 'bottom',
            position: 'right',
            renderPopout: S,
            children: (e) => {
                var i, a;
                return (0, r.jsx)(
                    u.m,
                    ((i = C({}, e)),
                    (a = a =
                        {
                            ref: Z,
                            className: y.container,
                            id: 'skill-trees-'.concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(s.$Eu, {
                                    size: 'md',
                                    className: e,
                                    color: 'currentColor'
                                }),
                            background:
                                (null == j ? void 0 : j.popout) != null &&
                                (0, r.jsx)('div', {
                                    className: y.lottieContainer,
                                    children: (0, r.jsx)(s.kci, {
                                        nextScene: w,
                                        className: y.lottie,
                                        sceneSegments: v,
                                        importData: () => n.e('50821').then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: T,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    })
                                }),
                            text: (0, r.jsx)('span', {
                                className: o()({ [y.textImportant]: (null == j ? void 0 : j.showUnread) === !0 }),
                                children: O.intl.string(_.default.yv3DJC)
                            }),
                            selected: l,
                            onClick: E,
                            showUnread: (null == j ? void 0 : j.showUnread) === !0,
                            trailing: null == j ? void 0 : j.trailing
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
                    i)
                );
            }
        });
    });
