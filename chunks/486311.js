n.d(t, { Z: () => j }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(100527),
    u = n(434479),
    d = n(819640),
    h = n(713081),
    p = n(326660),
    f = n(441536),
    g = n(933104),
    m = n(332538),
    b = n(921944),
    y = n(680278),
    _ = n(388032),
    O = n(388298);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let C = {
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
            S = i.useCallback(() => {
                var e;
                (0, h.jd)(t), (0, f.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == j || null == (e = j.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION);
            }, [t, j]),
            E = i.useCallback(() => {
                var e;
                switch (null == j || null == (e = j.popout) ? void 0 : e.type) {
                    case p.J.LEVEL_REACHED:
                        return (0, r.jsx)(g.jG, v({ guildId: t }, j.popout));
                    case p.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(g.$h, v({ guildId: t }, j.popout));
                    case p.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(g.yI, v({ guildId: t }, j.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == j ? void 0 : j.popout]),
            x = (0, a.s9z)(a.JQI),
            I = (0, s.e7)([d.Z], () => d.Z.hasLayers()),
            [P, w] = i.useState(null),
            N = null == P ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == j ? void 0 : j.popout) == null && w(null);
        }, [null == j ? void 0 : j.popout]);
        let Z = i.useCallback((e) => {
            w(e);
        }, []);
        return (0, r.jsx)(a.yRy, {
            shouldShow: (null == j ? void 0 : j.popout) != null && !(x || I),
            nudgeAlignIntoViewport: !0,
            animationPosition: 'bottom',
            position: 'right',
            renderPopout: E,
            children: (e) => {
                var i, s;
                return (0, r.jsx)(
                    u.m,
                    ((i = v({}, e)),
                    (s = s =
                        {
                            className: O.container,
                            id: 'skill-trees-'.concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(a.$Eu, {
                                    size: 'md',
                                    className: e,
                                    color: 'currentColor'
                                }),
                            background:
                                (null == j ? void 0 : j.popout) != null &&
                                (0, r.jsx)('div', {
                                    className: O.lottieContainer,
                                    children: (0, r.jsx)(a.kci, {
                                        nextScene: N,
                                        className: O.lottie,
                                        sceneSegments: C,
                                        importData: () => n.e('50821').then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: Z,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    })
                                }),
                            text: (0, r.jsx)('span', {
                                className: o()({ [O.textImportant]: (null == j ? void 0 : j.showUnread) === !0 }),
                                children: _.intl.string(y.default.yv3DJC)
                            }),
                            selected: l,
                            onClick: S,
                            showUnread: (null == j ? void 0 : j.showUnread) === !0,
                            trailing: null == j ? void 0 : j.trailing
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    i)
                );
            }
        });
    });
