l.d(t, {
    Hu: () => Y,
    _Q: () => V,
    oA: () => X,
    ov: () => J,
    se: () => q
}),
    l(301563),
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
    l(610885),
    l(126298),
    l(863942),
    l(866573),
    l(642549),
    l(787622),
    l(230036),
    l(653041);
var s = l(200651),
    r = l(192379),
    i = l(120356),
    n = l.n(i),
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
    y = l(918701),
    Z = l(977156),
    N = l(28798),
    b = l(131951),
    S = l(449224),
    M = l(358085),
    O = l(463727),
    R = l(855403),
    I = l(299570),
    k = l(960861),
    G = l(989941),
    W = l(958707),
    _ = l(152165),
    A = l(133179),
    B = l(70722),
    E = l(761274),
    P = l(46140),
    L = l(65154),
    T = l(388032),
    F = l(242891);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                var s;
                (s = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, s);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
async function U() {
    let e = b.Z.getVideoDevices(),
        t = (0, u.Z)(b.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        l = V(),
        s = await l,
        r = await t,
        i = r
            .filter((e) => e.id.startsWith(d.vA.SCREEN))
            .map((e) => {
                let t = e.name;
                return 'Entire screen' === t ? (t = T.NW.string(T.t.R4wpLC)) : /^Screen \d+$/.test(t) && (t = T.NW.formatToPlainString(T.t['y/R7n5'], { index: parseInt(t.split(' ')[1]) })), H(D({}, e), { name: t });
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
            r.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            s
        ),
        a = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: n,
        screenSources: i,
        cameraSources: Object.entries(e)
            .filter((e) => {
                let [t, l] = e;
                return !l.disabled;
            })
            .map((e, t) => {
                let [l, s] = e,
                    r = a[t % a.length],
                    i = Uint8Array.from(atob(r), (e) => e.charCodeAt(0)),
                    n = (0, o.xS)(i);
                return {
                    id: 'camera:' + s.id,
                    name: s.name,
                    url: n
                };
            })
    };
}
async function V() {
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
                    s = e.name,
                    r = t.icon;
                return null != l && null != s && null != r
                    ? {
                          id: 'window:'.concat(l),
                          name: s,
                          url: 'data:image/bmp;base64,'.concat(r)
                      }
                    : null;
            })
        )
    ).filter((e) => null !== e);
}
function J(e) {
    let t = (0, M.isWindows)() ? (0, G.Z)(v.ZP, S.Z) : null,
        l = v.ZP.getRunningGames();
    return null != t && (0, R.Z)(e.id, t.windowHandle) ? 2 : +(null != l.find((t) => (0, R.Z)(e.id, t.windowHandle)));
}
function X(e) {
    let { selectedSource: t, onChangeSelectedSource: l } = e,
        { enableGoLiveCaptureCard: i } = O.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = b.Z.supports(L.AN.GO_LIVE_HARDWARE),
        [c, o] = r.useState(null),
        [u, p] = r.useState(null),
        [j, S] = r.useState(null),
        M = null != j && j.length > 0,
        [I, k] = r.useState(d.vA.WINDOW),
        [G, _] = r.useState(!1),
        B = r.useRef(null),
        D = r.useRef(new h.Xp()),
        H = (0, f.e7)([v.ZP], () => v.ZP.getRunningGames()),
        V = (function (e, t, l) {
            let s = (0, Z.Zy)({ location: P.dr.STREAM_SOURCE_SELECT });
            return r.useMemo(() => {
                if (null == l || !s) return null;
                for (let s of l) {
                    var r, i;
                    let l = t.find((e) => (0, R.Z)(s.id, e.windowHandle));
                    if ((null == l ? void 0 : l.id) == null) continue;
                    let n = (0, y.lQ)(e, l.id);
                    if (null != n && (null === (r = n.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && (null === (i = n.userStatus) || void 0 === i ? void 0 : i.completedAt) == null)
                        return {
                            source: s,
                            quest: n
                        };
                }
                return null;
            }, [s, e, t, l]);
        })(
            (0, f.e7)([w.Z], () => w.Z.quests),
            H,
            u
        ),
        X = r.useMemo(() => (null == u ? null : [...u].sort((e, t) => ((null == V ? void 0 : V.source.id) === e.id ? -1 : (null == V ? void 0 : V.source.id) === t.id ? 1 : J(t) - J(e)))), [V, u]);
    r.useEffect(() => {
        let e = D.current;
        return (
            U().then((e) => {
                let { screenSources: t, windowSources: l, cameraSources: s } = e;
                o(t), p(l), S(s);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: t, cameraSources: l } = await U();
                o(e), p(t), S(l);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let K = r.useCallback((e) => {
            null !== e && ((B.current = e), _(!e.isScrolledToTop()));
        }, []),
        [Q, q] = r.useState(void 0);
    r.useEffect(() => {
        C.Z.hasPermission(E.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(q);
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
    })(I);
    if (null == Y)
        return !1 === Q
            ? (0, s.jsxs)(x.Text, {
                  className: F.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [T.NW.string(T.t['kW5h/f']), (0, s.jsx)('br', {}), T.NW.string(T.t['5Jvu1d'])]
              })
            : (0, s.jsx)(g.Z, {
                  className: F.spinner,
                  justify: g.Z.Justify.CENTER,
                  align: g.Z.Align.CENTER,
                  children: (0, s.jsx)(x.$jN, {})
              });
    let z = Y.map((e) => {
        let { id: r } = e,
            i = (null == t ? void 0 : t.id) === r;
        return (0, s.jsx)(
            x.P3F,
            {
                className: n()(F.tile, { [F.selected]: i }),
                onClick: () => l(e, null),
                children: (0, s.jsx)(
                    A.Z,
                    {
                        source: e,
                        selectedSource: t
                    },
                    e.id
                )
            },
            r
        );
    });
    return (0, s.jsxs)(r.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: F.segmentContainer,
                children: [
                    (0, s.jsx)(W.Z, { separator: G }),
                    (0, s.jsx)(x.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: T.NW.string(T.t.tHoi7u),
                                    value: d.vA.WINDOW
                                },
                                {
                                    name: T.NW.string(T.t['/iX8u7']),
                                    value: d.vA.SCREEN
                                }
                            ];
                            return (
                                i &&
                                    a &&
                                    M &&
                                    e.push({
                                        name: T.NW.string(T.t.cWt5Ul),
                                        value: d.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: I,
                        onChange: (e) => {
                            let { value: t } = e;
                            return k(t);
                        },
                        className: F.segmentControl,
                        optionClassName: F.segmentControlOption
                    })
                ]
            }),
            (0, s.jsxs)(x.Den, {
                ref: K,
                className: F.sourceScroller,
                onScroll: function () {
                    let e = B.current;
                    null != e && _(!e.isScrolledToTop());
                },
                children: [
                    I === d.vA.WINDOW && null != V && (0, s.jsx)(N.Z, { quest: V.quest }),
                    (0, s.jsx)(m.Z, {
                        layout: m.Z.Layout.WRAP,
                        columns: 2,
                        className: F.sourceContainer,
                        children: z
                    })
                ]
            })
        ]
    });
}
function K(e) {
    let { onSelect: t } = e,
        l = r.useCallback(() => {
            t({
                id: 'prepicked:',
                name: T.NW.string(T.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, s.jsx)(x.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: l,
        tabIndex: 0,
        className: n()(F.nativeSourceSingleTypeButton, F.nativePickerRadioItem),
        children: (0, s.jsxs)('div', {
            className: F.nativeSourceSingleTypeButtonInner,
            children: [
                (0, s.jsx)(_.Z, { className: F.nativeSourceSingleTypeImage }),
                (0, s.jsx)(x.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: T.NW.string(T.t.Yp6h5e)
                })
            ]
        })
    });
}
function Q(e) {
    let { id: t, name: l, text: i, icon: a, onSelect: c } = e,
        o = r.useCallback(() => {
            c({
                id: 'prepicked:' + t,
                name: l,
                url: ''
            });
        }, [t, l, c]);
    return (0, s.jsx)(x.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: o,
        tabIndex: 0,
        className: n()(F.nativeSourceTypeButton, F.nativePickerRadioItem),
        children: (0, s.jsxs)('div', {
            className: F.nativeSourceTypeButtonInner,
            children: [
                (0, s.jsx)(a, { size: 'lg' }),
                (0, s.jsx)(x.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: i
                })
            ]
        })
    });
}
function q(e) {
    let { onSourceSelect: t } = e,
        [l, i] = r.useState([]),
        [a, o] = r.useState({}),
        d = r.useRef(new h.Xp());
    r.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(b.Z.getVideoDevices()).filter((e) => {
                    let [t, l] = e;
                    return !l.disabled;
                });
                i(e),
                    o(
                        D(
                            {},
                            e.reduce((e, t) => {
                                let [l, s] = t;
                                return H(D({}, e), { ['camera:' + l]: s.name });
                            }, {})
                        )
                    );
            };
        return (
            t(),
            e.start(1000, t),
            () => {
                e.stop();
            }
        );
    }, []);
    let f = r.useCallback(
            (e) => {
                var l;
                let { value: s } = e;
                t({
                    id: s,
                    name: null !== (l = a[s]) && void 0 !== l ? l : '',
                    url: ''
                });
            },
            [t, a]
        ),
        u = (0, M.isMac)() && c().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, B.jR),
        p = (0, M.isMac)(),
        [g, m] = r.useState(!1),
        v = r.useCallback(() => {
            m(!g);
        }, [g]),
        C = u
            ? (0, s.jsx)(K, { onSelect: t })
            : (0, s.jsxs)('div', {
                  className: F.nativePickerTypes,
                  children: [
                      (0, s.jsx)(Q, {
                          onSelect: t,
                          id: 'screen',
                          name: T.NW.string(T.t.R4wpLC),
                          text: T.NW.string(T.t.cVUFXV),
                          icon: x.pzj
                      }),
                      (0, s.jsx)(Q, {
                          onSelect: t,
                          id: 'window',
                          name: T.NW.string(T.t['+SLJCg']),
                          text: T.NW.string(T.t.dG2A1N),
                          icon: x.GON
                      }),
                      p
                          ? (0, s.jsx)(Q, {
                                onSelect: t,
                                id: 'app',
                                name: T.NW.string(T.t.ct7AKS),
                                text: T.NW.string(T.t['8lQwf3']),
                                icon: x.gw7
                            })
                          : null
                  ]
              });
    return (0, s.jsxs)('div', {
        className: F.nativePickerScroll,
        children: [
            (0, s.jsx)(x.Text, {
                className: F.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: T.NW.string(T.t.XyYoFR)
            }),
            C,
            0 === l.length
                ? null
                : (0, s.jsxs)('div', {
                      className: n()(F.nativePickerCaptureSection, g ? null : F.nativePickerCollapsed),
                      children: [
                          (0, s.jsxs)(x.P3F, {
                              onClick: v,
                              className: n()(F.nativePickerLabel),
                              children: [
                                  (0, s.jsx)(x.Text, {
                                      className: F.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: T.NW.string(T.t.rO0Vi4)
                                  }),
                                  (0, s.jsx)(x.CJ0, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: F.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, s.jsx)(x.FXm, {
                              className: F.nativePickerCaptureList,
                              onChange: f,
                              radioItemClassName: F.nativePickerRadioItem,
                              options: l.map((e) => {
                                  let [t, l] = e;
                                  return {
                                      name: l.name,
                                      value: 'camera:' + l.id,
                                      icon: x.Odl,
                                      radioItemIconClassName: F.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function Y(e) {
    let { onSourceSelect: t, onCancel: l, pickerType: i } = e,
        { lastPickerAction: n, lastPickerError: a } = (0, f.e7)([k.ZP], () => k.ZP.getPickerState()),
        [o, d] = r.useState(!1);
    return (
        (0, k.kE)(),
        r.useEffect(() => {
            (0, M.isLinux)() || ((0, M.isMac)() && c().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, B.jR)) ? (0, I.T)(i) : (0, I.t)();
        }, [i]),
        r.useEffect(() => {
            o ? (n === k.Uc.Update ? t() : n === k.Uc.Cancel && ((0, I.t)(), l())) : (null == n || n === k.Uc.Present) && d(!0);
        }, [o, n, t, l]),
        n === k.Uc.Error
            ? (0, s.jsx)(x.Text, {
                  className: F.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : T.NW.string(T.t.CKsXk5)
              })
            : (0, s.jsx)(_.Z, {
                  animated: !0,
                  className: F.nativePickerGuide
              })
    );
}
