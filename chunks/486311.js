n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(481060),
    s = n(413335),
    c = n(434479),
    u = n(713081),
    d = n(441536),
    p = n(933104),
    h = n(332538),
    f = n(535396),
    g = n(296260),
    m = n(388032),
    b = n(277778);
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
        let { guildId: t, selected: o } = e,
            _ = (0, h.Z)(t),
            O = i.useCallback(() => {
                (0, u.jd)(t), (0, d.Z)(t);
            }, [t]),
            j = i.useCallback(() => {
                var e;
                switch (null == _ ? void 0 : null === (e = _.popout) || void 0 === e ? void 0 : e.type) {
                    case f.Us.LEVEL:
                        return (0, r.jsx)(p.j, v({ guildId: t }, _.popout));
                    case f.Us.PERK:
                        return (0, r.jsx)(p.$, v({ guildId: t }, _.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == _ ? void 0 : _.popout]),
            [x, C] = i.useState(!1),
            [S, P] = i.useState(null),
            I = null == S ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == _ ? void 0 : _.popout) == null && P(null);
        }, [null == _ ? void 0 : _.popout]);
        let N = i.useCallback((e) => {
            P(e);
        }, []);
        return (0, r.jsx)(a.yRy, {
            shouldShow: (null == _ ? void 0 : _.popout) != null && !x,
            nudgeAlignIntoViewport: !0,
            animationPosition: 'bottom',
            position: 'right',
            renderPopout: j,
            onRequestOpen: () => C(!1),
            onRequestClose: () => C(!0),
            children: (e) => {
                var i, u;
                return (0, r.jsx)(
                    c.m,
                    ((i = v({}, e)),
                    (u = u =
                        {
                            className: b.container,
                            id: 'skill-trees-'.concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(s.Z, {
                                    size: 'md',
                                    className: e,
                                    color: 'currentColor'
                                }),
                            background:
                                (null == _ ? void 0 : _.popout) != null &&
                                (0, r.jsx)('div', {
                                    className: b.lottieContainer,
                                    children: (0, r.jsx)(a.kci, {
                                        nextScene: I,
                                        className: b.lottie,
                                        sceneSegments: y,
                                        importData: () => n.e('50821').then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: N,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    })
                                }),
                            text: (0, r.jsx)('span', {
                                className: l()({ [b.textImportant]: (null == _ ? void 0 : _.showUnread) === !0 }),
                                children: m.NW.string(g.Z.yv3DJC)
                            }),
                            selected: o,
                            onClick: O,
                            showUnread: (null == _ ? void 0 : _.showUnread) === !0,
                            trailing: null == _ ? void 0 : _.trailing
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(u)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e));
                          }),
                    i)
                );
            }
        });
    });
