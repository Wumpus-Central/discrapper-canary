l.d(t, {
    Hu: () => Q,
    _Q: () => U,
    oA: () => V,
    ov: () => W,
    se: () => K
}),
    l(47120),
    l(518263),
    l(970173),
    l(520712),
    l(268111),
    l(941497),
    l(32026),
    l(480839),
    l(744285),
    l(492257),
    l(873817),
    l(863942),
    l(642549),
    l(653041),
    l(724458);
var i = l(200651),
    s = l(192379),
    r = l(120356),
    n = l.n(r),
    a = l(209739),
    c = l.n(a),
    o = l(788900),
    d = l(268146),
    f = l(442837),
    u = l(141038),
    h = l(846519),
    x = l(481060),
    p = l(224706),
    j = l(579806),
    g = l(600164),
    m = l(152708),
    v = l(594190),
    C = l(751571),
    w = l(569984),
    Z = l(918701),
    y = l(977156),
    N = l(28798),
    M = l(131951),
    S = l(449224),
    R = l(358085),
    I = l(463727),
    b = l(855403),
    G = l(299570),
    _ = l(960861),
    k = l(989941),
    A = l(958707),
    B = l(152165),
    O = l(133179),
    E = l(70722),
    L = l(761274),
    T = l(46140),
    F = l(65154),
    P = l(388032),
    H = l(949);
async function D() {
    let e = M.Z.getVideoDevices(),
        t = (0, u.Z)(M.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        l = U(),
        i = await l,
        s = await t,
        r = s
            .filter((e) => e.id.startsWith(d.vA.SCREEN))
            .map((e) => {
                let t = e.name;
                return (
                    'Entire screen' === t ? (t = P.intl.string(P.t.R4wpLC)) : /^Screen \d+$/.test(t) && (t = P.intl.formatToPlainString(P.t['y/R7n5'], { index: parseInt(t.split(' ')[1]) })),
                    {
                        ...e,
                        name: t
                    }
                );
            }),
        n = (function (e, t) {
            let l = {};
            return (
                t.forEach((e) => {
                    l[e.id] = e;
                }),
                e.forEach((e) => {
                    l[e.id] = e;
                }),
                Object.values(l)
            );
        })(
            s.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            i
        ),
        a = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: n,
        screenSources: r,
        cameraSources: Object.entries(e)
            .filter((e) => {
                let [t, l] = e;
                return !l.disabled;
            })
            .map((e, t) => {
                let [l, i] = e,
                    s = a[t % a.length],
                    r = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                    n = (0, o.xS)(r);
                return {
                    id: 'camera:' + i.id,
                    name: i.name,
                    url: n
                };
            })
    };
}
async function U() {
    let e = v.ZP.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await p.Z.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let l = e.windowHandle,
                    i = e.name,
                    s = t.icon;
                return null != l && null != i && null != s
                    ? {
                          id: 'window:'.concat(l),
                          name: i,
                          url: 'data:image/bmp;base64,'.concat(s)
                      }
                    : null;
            })
        )
    ).filter((e) => null !== e);
}
function W(e) {
    let t = (0, R.isWindows)() ? (0, k.Z)(v.ZP, S.Z) : null,
        l = v.ZP.getRunningGames();
    return null != t && (0, b.Z)(e.id, t.windowHandle) ? 2 : null != l.find((t) => (0, b.Z)(e.id, t.windowHandle)) ? 1 : 0;
}
function V(e) {
    let { selectedSource: t, onChangeSelectedSource: l } = e,
        { enableGoLiveCaptureCard: r } = I.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = M.Z.supports(F.AN.GO_LIVE_HARDWARE),
        [c, o] = s.useState(null),
        [u, p] = s.useState(null),
        [j, S] = s.useState(null),
        R = null != j && j.length > 0,
        [G, _] = s.useState(d.vA.WINDOW),
        [k, B] = s.useState(!1),
        E = s.useRef(null),
        U = s.useRef(new h.Xp()),
        V = (0, f.e7)([v.ZP], () => v.ZP.getRunningGames()),
        J = (function (e, t, l) {
            let i = (0, y.Zy)({ location: T.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
                if (null == l || !i) return null;
                for (let i of l) {
                    var s, r;
                    let l = t.find((e) => (0, b.Z)(i.id, e.windowHandle));
                    if ((null == l ? void 0 : l.id) == null) continue;
                    let n = (0, Z.lQ)(e, l.id);
                    if (null != n && (null === (s = n.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (r = n.userStatus) || void 0 === r ? void 0 : r.completedAt) == null)
                        return {
                            source: i,
                            quest: n
                        };
                }
                return null;
            }, [i, e, t, l]);
        })(
            (0, f.e7)([w.Z], () => w.Z.quests),
            V,
            u
        ),
        X = s.useMemo(() => (null == u ? null : [...u].sort((e, t) => ((null == J ? void 0 : J.source.id) === e.id ? -1 : (null == J ? void 0 : J.source.id) === t.id ? 1 : W(t) - W(e)))), [J, u]);
    s.useEffect(() => {
        let e = U.current;
        return (
            D().then((e) => {
                let { screenSources: t, windowSources: l, cameraSources: i } = e;
                o(t), p(l), S(i);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: t, cameraSources: l } = await D();
                o(e), p(t), S(l);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let K = s.useCallback((e) => {
            null !== e && ((E.current = e), B(!e.isScrolledToTop()));
        }, []),
        [Q, q] = s.useState(void 0);
    s.useEffect(() => {
        C.Z.hasPermission(L.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(q);
    }, []);
    let Y = (function (e) {
        switch (e) {
            case d.vA.WINDOW:
                return X;
            case d.vA.SCREEN:
                return c;
            case d.vA.CAMERA:
                return j;
        }
    })(G);
    if (null == Y)
        return !1 === Q
            ? (0, i.jsxs)(x.Text, {
                  className: H.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [P.intl.string(P.t['kW5h/f']), (0, i.jsx)('br', {}), P.intl.string(P.t['5Jvu1d'])]
              })
            : (0, i.jsx)(g.Z, {
                  className: H.spinner,
                  justify: g.Z.Justify.CENTER,
                  align: g.Z.Align.CENTER,
                  children: (0, i.jsx)(x.$jN, {})
              });
    let z = Y.map((e) => {
        let { id: s } = e,
            r = (null == t ? void 0 : t.id) === s;
        return (0, i.jsx)(
            x.P3F,
            {
                className: n()(H.tile, { [H.selected]: r }),
                onClick: () => l(e, null),
                children: (0, i.jsx)(
                    O.Z,
                    {
                        source: e,
                        selectedSource: t
                    },
                    e.id
                )
            },
            s
        );
    });
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: H.segmentContainer,
                children: [
                    (0, i.jsx)(A.Z, { separator: k }),
                    (0, i.jsx)(x.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: P.intl.string(P.t.tHoi7u),
                                    value: d.vA.WINDOW
                                },
                                {
                                    name: P.intl.string(P.t['/iX8u7']),
                                    value: d.vA.SCREEN
                                }
                            ];
                            return (
                                r &&
                                    a &&
                                    R &&
                                    e.push({
                                        name: P.intl.string(P.t.cWt5Ul),
                                        value: d.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: G,
                        onChange: (e) => {
                            let { value: t } = e;
                            return _(t);
                        },
                        className: H.segmentControl,
                        optionClassName: H.segmentControlOption
                    })
                ]
            }),
            (0, i.jsxs)(x.Den, {
                ref: K,
                className: H.sourceScroller,
                onScroll: function () {
                    let e = E.current;
                    null != e && B(!e.isScrolledToTop());
                },
                children: [
                    G === d.vA.WINDOW && null != J && (0, i.jsx)(N.Z, { quest: J.quest }),
                    (0, i.jsx)(m.Z, {
                        layout: m.Z.Layout.WRAP,
                        columns: 2,
                        className: H.sourceContainer,
                        children: z
                    })
                ]
            })
        ]
    });
}
function J(e) {
    let { onSelect: t } = e,
        l = s.useCallback(() => {
            t({
                id: 'prepicked:',
                name: P.intl.string(P.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, i.jsx)(x.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: l,
        tabIndex: 0,
        className: n()(H.nativeSourceSingleTypeButton, H.nativePickerRadioItem),
        children: (0, i.jsxs)('div', {
            className: H.nativeSourceSingleTypeButtonInner,
            children: [
                (0, i.jsx)(B.Z, { className: H.nativeSourceSingleTypeImage }),
                (0, i.jsx)(x.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: P.intl.string(P.t.Yp6h5e)
                })
            ]
        })
    });
}
function X(e) {
    let { id: t, name: l, text: r, icon: a, onSelect: c } = e,
        o = s.useCallback(() => {
            c({
                id: 'prepicked:' + t,
                name: l,
                url: ''
            });
        }, [t, l, c]);
    return (0, i.jsx)(x.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: o,
        tabIndex: 0,
        className: n()(H.nativeSourceTypeButton, H.nativePickerRadioItem),
        children: (0, i.jsxs)('div', {
            className: H.nativeSourceTypeButtonInner,
            children: [
                (0, i.jsx)(a, { size: 'lg' }),
                (0, i.jsx)(x.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: r
                })
            ]
        })
    });
}
function K(e) {
    let { onSourceSelect: t } = e,
        [l, r] = s.useState([]),
        [a, o] = s.useState({}),
        d = s.useRef(new h.Xp());
    s.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(M.Z.getVideoDevices()).filter((e) => {
                    let [t, l] = e;
                    return !l.disabled;
                });
                r(e),
                    o({
                        ...e.reduce((e, t) => {
                            let [l, i] = t;
                            return {
                                ...e,
                                ['camera:' + l]: i.name
                            };
                        }, {})
                    });
            };
        return (
            t(),
            e.start(1000, t),
            () => {
                e.stop();
            }
        );
    }, []);
    let f = s.useCallback(
            (e) => {
                var l;
                let { value: i } = e;
                t({
                    id: i,
                    name: null !== (l = a[i]) && void 0 !== l ? l : '',
                    url: ''
                });
            },
            [t, a]
        ),
        u = (0, R.isMac)() && c().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, E.jR),
        p = (0, R.isMac)(),
        [g, m] = s.useState(!1),
        v = s.useCallback(() => {
            m(!g);
        }, [g]),
        C = u
            ? (0, i.jsx)(J, { onSelect: t })
            : (0, i.jsxs)('div', {
                  className: H.nativePickerTypes,
                  children: [
                      (0, i.jsx)(X, {
                          onSelect: t,
                          id: 'screen',
                          name: P.intl.string(P.t.R4wpLC),
                          text: P.intl.string(P.t.cVUFXV),
                          icon: x.pzj
                      }),
                      (0, i.jsx)(X, {
                          onSelect: t,
                          id: 'window',
                          name: P.intl.string(P.t['+SLJCg']),
                          text: P.intl.string(P.t.dG2A1N),
                          icon: x.GON
                      }),
                      p
                          ? (0, i.jsx)(X, {
                                onSelect: t,
                                id: 'app',
                                name: P.intl.string(P.t.ct7AKS),
                                text: P.intl.string(P.t['8lQwf3']),
                                icon: x.gw7
                            })
                          : null
                  ]
              });
    return (0, i.jsxs)('div', {
        className: H.nativePickerScroll,
        children: [
            (0, i.jsx)(x.Text, {
                className: H.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: P.intl.string(P.t.XyYoFR)
            }),
            C,
            0 === l.length
                ? null
                : (0, i.jsxs)('div', {
                      className: n()(H.nativePickerCaptureSection, g ? null : H.nativePickerCollapsed),
                      children: [
                          (0, i.jsxs)(x.P3F, {
                              onClick: v,
                              className: n()(H.nativePickerLabel),
                              children: [
                                  (0, i.jsx)(x.Text, {
                                      className: H.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: P.intl.string(P.t.rO0Vi4)
                                  }),
                                  (0, i.jsx)(x.CJ0, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: H.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, i.jsx)(x.FXm, {
                              className: H.nativePickerCaptureList,
                              onChange: f,
                              radioItemClassName: H.nativePickerRadioItem,
                              options: l.map((e) => {
                                  let [t, l] = e;
                                  return {
                                      name: l.name,
                                      value: 'camera:' + l.id,
                                      icon: x.Odl,
                                      radioItemIconClassName: H.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function Q(e) {
    let { onSourceSelect: t, onCancel: l, pickerType: r } = e,
        { lastPickerAction: n, lastPickerError: a } = (0, f.e7)([_.ZP], () => _.ZP.getPickerState()),
        [o, d] = s.useState(!1);
    return (
        (0, _.kE)(),
        s.useEffect(() => {
            (0, R.isLinux)() || ((0, R.isMac)() && c().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, E.jR)) ? (0, G.T)(r) : (0, G.t)();
        }, [r]),
        s.useEffect(() => {
            o ? (n === _.Uc.Update ? t() : n === _.Uc.Cancel && ((0, G.t)(), l())) : (null == n || n === _.Uc.Present) && d(!0);
        }, [o, n, t, l]),
        n === _.Uc.Error
            ? (0, i.jsx)(x.Text, {
                  className: H.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : P.intl.string(P.t.CKsXk5)
              })
            : (0, i.jsx)(B.Z, {
                  animated: !0,
                  className: H.nativePickerGuide
              })
    );
}
