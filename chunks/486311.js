n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(434479),
    c = n(713081),
    u = n(326660),
    d = n(441536),
    h = n(933104),
    p = n(332538),
    f = n(921944),
    g = n(680278),
    m = n(388032),
    b = n(388298);
function _(e) {
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
    v = i.memo(function (e) {
        let { guildId: t, selected: l } = e,
            v = (0, p.ZP)(t),
            O = i.useCallback(() => {
                var e;
                (0, c.jd)(t), (0, d.Z)(t), null == v || null == (e = v.popout) || e.markAsDismissed(f.L.INDIRECT_ACTION);
            }, [t, v]),
            C = i.useCallback(() => {
                var e;
                switch (null == v || null == (e = v.popout) ? void 0 : e.type) {
                    case u.J.LEVEL_REACHED:
                        return (0, r.jsx)(h.jG, _({ guildId: t }, v.popout));
                    case u.J.PERKS_AVAILABLE:
                        return (0, r.jsx)(h.$h, _({ guildId: t }, v.popout));
                    case u.J.PERKS_PURCHASABLE:
                        return (0, r.jsx)(h.yI, _({ guildId: t }, v.popout));
                    default:
                        return (0, r.jsx)('div', {});
                }
            }, [t, null == v ? void 0 : v.popout]),
            [S, j] = i.useState(!1),
            [E, x] = i.useState(null),
            N = null == E ? 'animation' : 'LOOP';
        i.useEffect(() => {
            (null == v ? void 0 : v.popout) == null && x(null);
        }, [null == v ? void 0 : v.popout]);
        let I = i.useCallback((e) => {
            x(e);
        }, []);
        return (0, r.jsx)(s.yRy, {
            shouldShow: (null == v ? void 0 : v.popout) != null && !S,
            nudgeAlignIntoViewport: !0,
            animationPosition: 'bottom',
            position: 'right',
            renderPopout: C,
            onRequestOpen: () => j(!1),
            onRequestClose: () => j(!0),
            children: (e) => {
                var i, c;
                return (0, r.jsx)(
                    a.m,
                    ((i = _({}, e)),
                    (c = c =
                        {
                            className: b.container,
                            id: 'skill-trees-'.concat(t),
                            renderIcon: (e) =>
                                (0, r.jsx)(s.$Eu, {
                                    size: 'md',
                                    className: e,
                                    color: 'currentColor'
                                }),
                            background:
                                (null == v ? void 0 : v.popout) != null &&
                                (0, r.jsx)('div', {
                                    className: b.lottieContainer,
                                    children: (0, r.jsx)(s.kci, {
                                        nextScene: N,
                                        className: b.lottie,
                                        sceneSegments: y,
                                        importData: () => n.e('50821').then(n.t.bind(n, 548421, 19)),
                                        onScenePlay: I,
                                        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                                    })
                                }),
                            text: (0, r.jsx)('span', {
                                className: o()({ [b.textImportant]: (null == v ? void 0 : v.showUnread) === !0 }),
                                children: m.NW.string(g.Z.yv3DJC)
                            }),
                            selected: l,
                            onClick: O,
                            showUnread: (null == v ? void 0 : v.showUnread) === !0,
                            trailing: null == v ? void 0 : v.trailing
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
