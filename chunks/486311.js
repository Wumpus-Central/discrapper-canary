n.d(t, { Z: () => S }), n(388685);
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
    _ = n(680278),
    y = n(388032),
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
    S = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            S = (0, m.ZP)(t),
            j = i.useCallback(() => {
                var e;
                (0, h.jd)(t), (0, f.Z)(t, c.Z.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == S || null == (e = S.popout) || e.markAsDismissed(b.L.INDIRECT_ACTION);
            }, [t, S]),
            E = i.useCallback(() => {
                var e;
                switch (null == S || null == (e = S.popout) ? void 0 : e.type) {
                    case p.J.LEVEL_REACHED:
                        return (0, r.jsx)(g.jG, v({ guildId: t }, S.popout));
                    case p.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(g.$h, v({ guildId: t }, S.popout));
                    case p.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(g.yI, v({ guildId: t }, S.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == S ? void 0 : S.popout]),
            x = (0, a.s9z)(a.JQI),
            P = (0, s.e7)([d.Z], () => d.Z.hasLayers()),
            [I, w] = i.useState(null),
            N = null == I ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == S ? void 0 : S.popout) == null && w(null);
        }, [null == S ? void 0 : S.popout]);
        let Z = i.useCallback((e) => {
            w(e);
        }, []);
        return (0, r.jsx)(a.yRy, {
            shouldShow: (null == S ? void 0 : S.popout) != null && !(x || P),
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
                                (null == S ? void 0 : S.popout) != null &&
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
                                className: o()({ [O.textImportant]: (null == S ? void 0 : S.showUnread) === !0 }),
                                children: y.intl.string(_.default.yv3DJC)
                            }),
                            selected: l,
                            onClick: j,
                            showUnread: (null == S ? void 0 : S.showUnread) === !0,
                            trailing: null == S ? void 0 : S.trailing
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
