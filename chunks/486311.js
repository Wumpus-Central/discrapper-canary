n.d(t, { Z: () => C }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(434479),
    u = n(819640),
    d = n(713081),
    h = n(326660),
    p = n(441536),
    f = n(933104),
    g = n(332538),
    m = n(921944),
    b = n(680278),
    y = n(388032),
    _ = n(388298);
function O(e) {
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
    C = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            C = (0, g.ZP)(t),
            j = i.useCallback(() => {
                var e;
                (0, d.jd)(t), (0, p.Z)(t), null == C || null == (e = C.popout) || e.markAsDismissed(m.L.INDIRECT_ACTION);
            }, [t, C]),
            S = i.useCallback(() => {
                var e;
                switch (null == C || null == (e = C.popout) ? void 0 : e.type) {
                    case h.J.LEVEL_REACHED:
                        return (0, r.jsx)(f.jG, O({ guildId: t }, C.popout));
                    case h.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(f.$h, O({ guildId: t }, C.popout));
                    case h.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(f.yI, O({ guildId: t }, C.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == C ? void 0 : C.popout]),
            x = (0, a.s9z)(a.JQI),
            E = (0, s.e7)([u.Z], () => u.Z.hasLayers()),
            [I, N] = i.useState(null),
            P = null == I ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == C ? void 0 : C.popout) == null && N(null);
        }, [null == C ? void 0 : C.popout]);
        let w = i.useCallback((e) => {
            N(e);
        }, []);
        return (0, r.jsx)(a.yRy, {
            shouldShow: (null == C ? void 0 : C.popout) != null && !(x || E),
            nudgeAlignIntoViewport: !0,
            animationPosition: 'bottom',
            position: 'right',
            renderPopout: S,
            children: (e) => {
                var i, s;
                return (0, r.jsx)(
                    c.m,
                    ((i = O({}, e)),
                    (s = s =
                        {
                            className: _.container,
                            id: 'skill-trees-'.concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(a.$Eu, {
                                    size: 'md',
                                    className: e,
                                    color: 'currentColor'
                                }),
                            background:
                                (null == C ? void 0 : C.popout) != null &&
                                (0, r.jsx)('div', {
                                    className: _.lottieContainer,
                                    children: (0, r.jsx)(a.kci, {
                                        nextScene: P,
                                        className: _.lottie,
                                        sceneSegments: v,
                                        importData: () => n.e('50821').then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: w,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    })
                                }),
                            text: (0, r.jsx)('span', {
                                className: o()({ [_.textImportant]: (null == C ? void 0 : C.showUnread) === !0 }),
                                children: y.NW.string(b.Z.yv3DJC)
                            }),
                            selected: l,
                            onClick: j,
                            showUnread: (null == C ? void 0 : C.showUnread) === !0,
                            trailing: null == C ? void 0 : C.trailing
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
