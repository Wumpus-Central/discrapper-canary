l.d(t, {
    Hu: () => X,
    oA: () => H,
    ov: () => D,
    se: () => J
}),
    l(47120),
    l(230036),
    l(653041);
var r = l(200651),
    i = l(192379),
    s = l(120356),
    n = l.n(s),
    a = l(209739),
    c = l.n(a),
    o = l(268146),
    d = l(442837),
    f = l(846519),
    u = l(481060),
    h = l(579806),
    x = l(600164),
    p = l(152708),
    j = l(594190),
    g = l(751571),
    m = l(569984),
    v = l(918701),
    C = l(977156),
    y = l(28798),
    w = l(131951),
    Z = l(449224),
    N = l(358085),
    b = l(463727),
    O = l(855403),
    S = l(299570),
    M = l(960861),
    R = l(59468),
    I = l(989941),
    P = l(39540),
    _ = l(958707),
    k = l(152165),
    G = l(133179),
    E = l(70722),
    A = l(761274),
    W = l(46140),
    B = l(65154),
    L = l(388032),
    T = l(242891);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = l[t]),
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
function D(e) {
    let t = (0, N.isWindows)() ? (0, I.Z)(j.ZP, Z.Z) : null,
        l = j.ZP.getRunningGames();
    return null != t && (0, O.Z)(e.id, t.windowHandle) ? 2 : +(null != l.find((t) => (0, O.Z)(e.id, t.windowHandle)));
}
function H(e) {
    let { selectedSource: t, onChangeSelectedSource: l } = e,
        { enableGoLiveCaptureCard: s } = b.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = w.Z.supports(B.AN.GO_LIVE_HARDWARE),
        [c, h] = i.useState(null),
        [Z, N] = i.useState(null),
        [S, M] = i.useState(null),
        I = null != S && S.length > 0,
        [P, k] = i.useState(o.vA.WINDOW),
        [E, F] = i.useState(!1),
        H = i.useRef(null),
        U = i.useRef(new f.Xp()),
        V = (0, d.e7)([j.ZP], () => j.ZP.getRunningGames()),
        J = (function (e, t, l) {
            let r = (0, C.Zy)({ location: W.dr.STREAM_SOURCE_SELECT });
            return i.useMemo(() => {
                if (null == l || !r) return null;
                for (let r of l) {
                    var i, s;
                    let l = t.find((e) => (0, O.Z)(r.id, e.windowHandle));
                    if ((null == l ? void 0 : l.id) == null) continue;
                    let n = (0, v.lQ)(e, l.id);
                    if (null != n && (null === (i = n.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null && (null === (s = n.userStatus) || void 0 === s ? void 0 : s.completedAt) == null)
                        return {
                            source: r,
                            quest: n
                        };
                }
                return null;
            }, [r, e, t, l]);
        })(
            (0, d.e7)([m.Z], () => m.Z.quests),
            V,
            Z
        ),
        X = i.useMemo(() => (null == Z ? null : [...Z].sort((e, t) => ((null == J ? void 0 : J.source.id) === e.id ? -1 : (null == J ? void 0 : J.source.id) === t.id ? 1 : D(t) - D(e)))), [J, Z]);
    i.useEffect(() => {
        let e = U.current;
        return (
            (0, R.t)({
                width: 176,
                height: 99
            }).then((e) => {
                let { screenSources: t, windowSources: l, cameraSources: r } = e;
                h(t), N(l), M(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: l
                } = await (0, R.t)({
                    width: 176,
                    height: 99
                });
                h(e), N(t), M(l);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let K = i.useCallback((e) => {
            null !== e && ((H.current = e), F(!e.isScrolledToTop()));
        }, []),
        [Q, q] = i.useState(void 0);
    i.useEffect(() => {
        g.Z.hasPermission(A.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(q);
    }, []);
    let Y = (function (e) {
        switch (e) {
            case o.vA.WINDOW:
                return X;
            case o.vA.SCREEN:
                return c;
            case o.vA.CAMERA:
                return S;
        }
    })(P);
    if (null == Y)
        return !1 === Q
            ? (0, r.jsxs)(u.Text, {
                  className: T.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [L.NW.string(L.t['kW5h/f']), (0, r.jsx)('br', {}), L.NW.string(L.t['5Jvu1d'])]
              })
            : (0, r.jsx)(x.Z, {
                  className: T.spinner,
                  justify: x.Z.Justify.CENTER,
                  align: x.Z.Align.CENTER,
                  children: (0, r.jsx)(u.$jN, {})
              });
    let z = Y.map((e) => {
        let { id: i } = e,
            s = (null == t ? void 0 : t.id) === i;
        return (0, r.jsx)(
            u.P3F,
            {
                className: n()(T.tile, { [T.selected]: s }),
                onClick: () => l(e, null),
                children: (0, r.jsx)(
                    G.Z,
                    {
                        source: e,
                        selectedSource: t
                    },
                    e.id
                )
            },
            i
        );
    });
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: T.segmentContainer,
                children: [
                    (0, r.jsx)(_.Z, { separator: E }),
                    (0, r.jsx)(u.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: L.NW.string(L.t.tHoi7u),
                                    value: o.vA.WINDOW
                                },
                                {
                                    name: L.NW.string(L.t['/iX8u7']),
                                    value: o.vA.SCREEN
                                }
                            ];
                            return (
                                s &&
                                    a &&
                                    I &&
                                    e.push({
                                        name: L.NW.string(L.t.cWt5Ul),
                                        value: o.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: P,
                        onChange: (e) => {
                            let { value: t } = e;
                            return k(t);
                        },
                        className: T.segmentControl,
                        optionClassName: T.segmentControlOption
                    })
                ]
            }),
            (0, r.jsxs)(u.Den, {
                ref: K,
                className: T.sourceScroller,
                onScroll: function () {
                    let e = H.current;
                    null != e && F(!e.isScrolledToTop());
                },
                children: [
                    P === o.vA.WINDOW && null != J && (0, r.jsx)(y.Z, { quest: J.quest }),
                    (0, r.jsx)(p.Z, {
                        layout: p.Z.Layout.WRAP,
                        columns: 2,
                        className: T.sourceContainer,
                        children: z
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { onSelect: t } = e,
        l = i.useCallback(() => {
            t({
                id: 'prepicked:',
                name: L.NW.string(L.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, r.jsx)(u.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: l,
        tabIndex: 0,
        className: n()(T.nativeSourceSingleTypeButton, T.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: T.nativeSourceSingleTypeButtonInner,
            children: [
                (0, r.jsx)(k.Z, { className: T.nativeSourceSingleTypeImage }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: L.NW.string(L.t.Yp6h5e)
                })
            ]
        })
    });
}
function V(e) {
    let { id: t, name: l, text: s, icon: a, onSelect: c } = e,
        o = i.useCallback(() => {
            c({
                id: 'prepicked:' + t,
                name: l,
                url: ''
            });
        }, [t, l, c]);
    return (0, r.jsx)(u.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: o,
        tabIndex: 0,
        className: n()(T.nativeSourceTypeButton, T.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: T.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(a, { size: 'lg' }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: s
                })
            ]
        })
    });
}
function J(e) {
    let { onSourceSelect: t } = e,
        [l, s] = i.useState([]),
        [a, o] = i.useState({}),
        d = i.useRef(new f.Xp());
    i.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(w.Z.getVideoDevices()).filter((e) => {
                    let [t, l] = e;
                    return !l.disabled;
                });
                s(e),
                    o(
                        F(
                            {},
                            e.reduce((e, t) => {
                                var l, r;
                                let [i, s] = t;
                                return (
                                    (l = F({}, e)),
                                    (r = r = { ['camera:' + i]: s.name }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, t) {
                                              var l = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  l.push.apply(l, r);
                                              }
                                              return l;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                                          }),
                                    l
                                );
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
    let x = i.useCallback(
            (e) => {
                var l;
                let { value: r } = e;
                t({
                    id: r,
                    name: null !== (l = a[r]) && void 0 !== l ? l : '',
                    url: ''
                });
            },
            [t, a]
        ),
        p = (0, N.isMac)() && c().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, E.jR),
        j = (0, N.isMac)(),
        [g, m] = i.useState(!1),
        v = i.useCallback(() => {
            m(!g);
        }, [g]),
        C = p
            ? (0, r.jsx)(U, { onSelect: t })
            : (0, r.jsxs)('div', {
                  className: T.nativePickerTypes,
                  children: [
                      (0, r.jsx)(V, {
                          onSelect: t,
                          id: 'screen',
                          name: L.NW.string(L.t.R4wpLC),
                          text: L.NW.string(L.t.cVUFXV),
                          icon: u.pzj
                      }),
                      (0, r.jsx)(V, {
                          onSelect: t,
                          id: 'window',
                          name: L.NW.string(L.t['+SLJCg']),
                          text: L.NW.string(L.t.dG2A1N),
                          icon: u.GON
                      }),
                      j
                          ? (0, r.jsx)(V, {
                                onSelect: t,
                                id: 'app',
                                name: L.NW.string(L.t.ct7AKS),
                                text: L.NW.string(L.t['8lQwf3']),
                                icon: u.gw7
                            })
                          : null
                  ]
              });
    return (0, r.jsxs)('div', {
        className: T.nativePickerScroll,
        children: [
            (0, r.jsx)(u.Text, {
                className: T.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: L.NW.string(L.t.XyYoFR)
            }),
            C,
            0 === l.length
                ? null
                : (0, r.jsxs)('div', {
                      className: n()(T.nativePickerCaptureSection, g ? null : T.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(u.P3F, {
                              onClick: v,
                              className: n()(T.nativePickerLabel),
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      className: T.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: L.NW.string(L.t.rO0Vi4)
                                  }),
                                  (0, r.jsx)(u.CJ0, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: T.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, r.jsx)(u.FXm, {
                              className: T.nativePickerCaptureList,
                              onChange: x,
                              radioItemClassName: T.nativePickerRadioItem,
                              options: l.map((e) => {
                                  let [t, l] = e;
                                  return {
                                      name: l.name,
                                      value: 'camera:' + l.id,
                                      icon: u.Odl,
                                      radioItemIconClassName: T.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function X(e) {
    let { onSourceSelect: t, onCancel: l, pickerType: s } = e,
        { lastPickerAction: n, lastPickerError: a } = (0, P.Z)(t, l);
    return (
        i.useEffect(() => {
            (0, N.isLinux)() || ((0, N.isMac)() && c().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, E.jR)) ? (0, S.T)(s) : (0, S.t)();
        }, [s]),
        n === M.Uc.Error
            ? (0, r.jsx)(u.Text, {
                  className: T.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : L.NW.string(L.t.CKsXk5)
              })
            : (0, r.jsx)(k.Z, {
                  animated: !0,
                  className: T.nativePickerGuide
              })
    );
}
