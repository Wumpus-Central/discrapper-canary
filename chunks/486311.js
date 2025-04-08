n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(434479),
    c = n(713081),
    u = n(441536),
    d = n(933104),
    p = n(332538),
    h = n(535396),
    f = n(680278),
    g = n(388032),
    m = n(388298);
function b(e) {
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
let y = {
        animation: {
            BEG: 0,
            END: 75
        },
        LOOP: {
            BEG: 76,
            END: 376
        }
    },
    _ = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            _ = (0, p.Z)(t),
            v = i.useCallback(() => {
                (0, c.jd)(t), (0, u.Z)(t);
            }, [t]),
            O = i.useCallback(() => {
                var e;
                switch (null == _ || null == (e = _.popout) ? void 0 : e.type) {
                    case h.Us.LEVEL:
                        return (0, r.jsx)(d.j, b({ guildId: t }, _.popout));
                    case h.Us.PERK:
                        return (0, r.jsx)(d.$, b({ guildId: t }, _.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == _ ? void 0 : _.popout]),
            [j, x] = i.useState(!1),
            [C, S] = i.useState(null),
            P = null == C ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == _ ? void 0 : _.popout) == null && S(null);
        }, [null == _ ? void 0 : _.popout]);
        let I = i.useCallback((e) => {
            S(e);
        }, []);
        return (0, r.jsx)(a.yRy, {
            shouldShow: (null == _ ? void 0 : _.popout) != null && !j,
            nudgeAlignIntoViewport: !0,
            animationPosition: 'bottom',
            position: 'right',
            renderPopout: O,
            onRequestOpen: () => x(!1),
            onRequestClose: () => x(!0),
            children: (e) => {
                var i, c;
                return (0, r.jsx)(
                    s.m,
                    ((i = b({}, e)),
                    (c = c =
                        {
                            className: m.container,
                            id: 'skill-trees-'.concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(a.$Eu, {
                                    size: 'md',
                                    className: e,
                                    color: 'currentColor'
                                }),
                            background:
                                (null == _ ? void 0 : _.popout) != null &&
                                (0, r.jsx)('div', {
                                    className: m.lottieContainer,
                                    children: (0, r.jsx)(a.kci, {
                                        nextScene: P,
                                        className: m.lottie,
                                        sceneSegments: y,
                                        importData: () => n.e('50821').then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: I,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    })
                                }),
                            text: (0, r.jsx)('span', {
                                className: o()({ [m.textImportant]: (null == _ ? void 0 : _.showUnread) === !0 }),
                                children: g.NW.string(f.Z.yv3DJC)
                            }),
                            selected: l,
                            onClick: v,
                            showUnread: (null == _ ? void 0 : _.showUnread) === !0,
                            trailing: null == _ ? void 0 : _.trailing
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(c)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                          }),
                    i)
                );
            }
        });
    });
