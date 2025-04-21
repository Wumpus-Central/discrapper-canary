n.d(t, {
    Hu: () => Y,
    oA: () => W,
    se: () => V
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(209739),
    o = n.n(a),
    c = n(268146),
    d = n(442837),
    u = n(846519),
    f = n(481060),
    m = n(579806),
    h = n(600164),
    x = n(152708),
    p = n(594190),
    g = n(751571),
    _ = n(569984),
    j = n(918701),
    v = n(977156),
    b = n(28798),
    S = n(131951),
    C = n(449224),
    y = n(358085),
    Z = n(463727),
    I = n(855403),
    w = n(299570),
    O = n(960861),
    N = n(59468),
    T = n(989941),
    E = n(39540),
    P = n(958707),
    R = n(152165),
    k = n(133179),
    A = n(70722),
    M = n(761274),
    L = n(46140),
    D = n(65154),
    G = n(388032),
    B = n(873270);
function U(e) {
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
function z(e) {
    let t = (0, y.isWindows)() ? (0, T.Z)(p.ZP, C.Z) : null,
        n = p.ZP.getRunningGames();
    return null != t && (0, I.Z)(e.id, t.windowHandle) ? 2 : +(null != n.find((t) => (0, I.Z)(e.id, t.windowHandle)));
}
function W(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: i } = Z.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = S.Z.supports(D.AN.GO_LIVE_HARDWARE),
        [o, m] = l.useState(null),
        [C, y] = l.useState(null),
        [w, O] = l.useState(null),
        T = null != w && w.length > 0,
        [E, R] = l.useState(c.vA.WINDOW),
        [A, U] = l.useState(!1),
        W = l.useRef(null),
        F = l.useRef(new u.Xp()),
        H = (0, d.e7)([p.ZP], () => p.ZP.getRunningGames()),
        V = (function (e, t, n) {
            let r = (0, v.Zy)({ location: L.dr.STREAM_SOURCE_SELECT });
            return l.useMemo(() => {
                if (null == n || !r) return null;
                for (let r of n) {
                    var l, i;
                    let n = t.find((e) => (0, I.Z)(r.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let s = (0, j.lQ)(e, n.id);
                    if (null != s && (null == (l = s.userStatus) ? void 0 : l.enrolledAt) != null && (null == (i = s.userStatus) ? void 0 : i.completedAt) == null)
                        return {
                            source: r,
                            quest: s
                        };
                }
                return null;
            }, [r, e, t, n]);
        })(
            (0, d.e7)([_.Z], () => _.Z.quests),
            H,
            C
        ),
        Y = l.useMemo(() => (null == C ? null : [...C].sort((e, t) => ((null == V ? void 0 : V.source.id) === e.id ? -1 : (null == V ? void 0 : V.source.id) === t.id ? 1 : z(t) - z(e)))), [V, C]);
    l.useEffect(() => {
        let e = F.current;
        return (
            (0, N.t)({
                width: 176,
                height: 99
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                m(t), y(n), O(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n
                } = await (0, N.t)({
                    width: 176,
                    height: 99
                });
                m(e), y(t), O(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let J = l.useCallback((e) => {
            null !== e && ((W.current = e), U(!e.isScrolledToTop()));
        }, []),
        [X, K] = l.useState(void 0);
    l.useEffect(() => {
        g.Z.hasPermission(M.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(K);
    }, []);
    let q = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return Y;
            case c.vA.SCREEN:
                return o;
            case c.vA.CAMERA:
                return w;
        }
    })(E);
    if (null == q)
        return !1 === X
            ? (0, r.jsxs)(f.Text, {
                  className: B.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [G.intl.string(G.t['kW5h/f']), (0, r.jsx)('br', {}), G.intl.string(G.t['5Jvu1d'])]
              })
            : (0, r.jsx)(h.Z, {
                  className: B.spinner,
                  justify: h.Z.Justify.CENTER,
                  align: h.Z.Align.CENTER,
                  children: (0, r.jsx)(f.$jN, {})
              });
    let Q = q.map((e) => {
        let { id: l } = e,
            i = (null == t ? void 0 : t.id) === l;
        return (0, r.jsx)(
            f.P3F,
            {
                className: s()(B.tile, { [B.selected]: i }),
                onClick: () => n(e, null),
                children: (0, r.jsx)(
                    k.Z,
                    {
                        source: e,
                        selectedSource: t
                    },
                    e.id
                )
            },
            l
        );
    });
    return (0, r.jsxs)(l.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: B.segmentContainer,
                children: [
                    (0, r.jsx)(P.Z, { separator: A }),
                    (0, r.jsx)(f.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: G.intl.string(G.t.tHoi7u),
                                    value: c.vA.WINDOW
                                },
                                {
                                    name: G.intl.string(G.t['/iX8u7']),
                                    value: c.vA.SCREEN
                                }
                            ];
                            return (
                                i &&
                                    a &&
                                    T &&
                                    e.push({
                                        name: G.intl.string(G.t.cWt5Ul),
                                        value: c.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: E,
                        onChange: (e) => {
                            let { value: t } = e;
                            return R(t);
                        },
                        className: B.segmentControl,
                        optionClassName: B.segmentControlOption
                    })
                ]
            }),
            (0, r.jsxs)(f.Den, {
                ref: J,
                className: B.sourceScroller,
                onScroll: function () {
                    let e = W.current;
                    null != e && U(!e.isScrolledToTop());
                },
                children: [
                    E === c.vA.WINDOW && null != V && (0, r.jsx)(b.Z, { quest: V.quest }),
                    (0, r.jsx)(x.Z, {
                        layout: x.Z.Layout.WRAP,
                        columns: 2,
                        className: B.sourceContainer,
                        children: Q
                    })
                ]
            })
        ]
    });
}
function F(e) {
    let { onSelect: t } = e,
        n = l.useCallback(() => {
            t({
                id: 'prepicked:',
                name: G.intl.string(G.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, r.jsx)(f.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: n,
        tabIndex: 0,
        className: s()(B.nativeSourceSingleTypeButton, B.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: B.nativeSourceSingleTypeButtonInner,
            children: [
                (0, r.jsx)(R.Z, { className: B.nativeSourceSingleTypeImage }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: G.intl.string(G.t.Yp6h5e)
                })
            ]
        })
    });
}
function H(e) {
    let { id: t, name: n, text: i, icon: a, onSelect: o } = e,
        c = l.useCallback(() => {
            o({
                id: 'prepicked:' + t,
                name: n,
                url: ''
            });
        }, [t, n, o]);
    return (0, r.jsx)(f.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: c,
        tabIndex: 0,
        className: s()(B.nativeSourceTypeButton, B.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: B.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(a, { size: 'lg' }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: i
                })
            ]
        })
    });
}
function V(e) {
    let { onSourceSelect: t } = e,
        [n, i] = l.useState([]),
        [a, c] = l.useState({}),
        d = l.useRef(new u.Xp());
    l.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(S.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                i(e),
                    c(
                        U(
                            {},
                            e.reduce((e, t) => {
                                var n, r;
                                let [l, i] = t;
                                return (
                                    (n = U({}, e)),
                                    (r = r = { ['camera:' + l]: i.name }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                          }),
                                    n
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
    let h = l.useCallback(
            (e) => {
                var n;
                let { value: r } = e;
                t({
                    id: r,
                    name: null != (n = a[r]) ? n : '',
                    url: ''
                });
            },
            [t, a]
        ),
        x = (0, y.isMac)() && o().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, A.jR),
        p = (0, y.isMac)(),
        [g, _] = l.useState(!1),
        j = l.useCallback(() => {
            _(!g);
        }, [g]),
        v = x
            ? (0, r.jsx)(F, { onSelect: t })
            : (0, r.jsxs)('div', {
                  className: B.nativePickerTypes,
                  children: [
                      (0, r.jsx)(H, {
                          onSelect: t,
                          id: 'screen',
                          name: G.intl.string(G.t.R4wpLC),
                          text: G.intl.string(G.t.cVUFXV),
                          icon: f.pzj
                      }),
                      (0, r.jsx)(H, {
                          onSelect: t,
                          id: 'window',
                          name: G.intl.string(G.t['+SLJCg']),
                          text: G.intl.string(G.t.dG2A1N),
                          icon: f.GON
                      }),
                      p
                          ? (0, r.jsx)(H, {
                                onSelect: t,
                                id: 'app',
                                name: G.intl.string(G.t.ct7AKS),
                                text: G.intl.string(G.t['8lQwf3']),
                                icon: f.gw7
                            })
                          : null
                  ]
              });
    return (0, r.jsxs)('div', {
        className: B.nativePickerScroll,
        children: [
            (0, r.jsx)(f.Text, {
                className: B.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: G.intl.string(G.t.XyYoFR)
            }),
            v,
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: s()(B.nativePickerCaptureSection, g ? null : B.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              onClick: j,
                              className: B.nativePickerLabel,
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      className: B.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: G.intl.string(G.t.rO0Vi4)
                                  }),
                                  (0, r.jsx)(f.CJ0, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: B.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, r.jsx)(f.FXm, {
                              className: B.nativePickerCaptureList,
                              onChange: h,
                              radioItemClassName: B.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: 'camera:' + n.id,
                                      icon: f.Odl,
                                      radioItemIconClassName: B.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function Y(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: i } = e,
        { lastPickerAction: s, lastPickerError: a } = (0, E.Z)(t, n);
    return (
        l.useEffect(() => {
            (0, y.isLinux)() || ((0, y.isMac)() && o().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, A.jR)) ? (0, w.T)(i) : (0, w.t)();
        }, [i]),
        s === O.Uc.Error
            ? (0, r.jsx)(f.Text, {
                  className: B.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : G.intl.string(G.t.CKsXk5)
              })
            : (0, r.jsx)(R.Z, {
                  animated: !0,
                  className: B.nativePickerGuide
              })
    );
}
