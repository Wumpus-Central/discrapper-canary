n.d(t, {
    Hu: () => Y,
    oA: () => z,
    se: () => V
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
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
    N = n(449224),
    C = n(358085),
    y = n(463727),
    Z = n(855403),
    I = n(299570),
    O = n(960861),
    w = n(59468),
    T = n(989941),
    E = n(39540),
    P = n(958707),
    R = n(152165),
    W = n(133179),
    k = n(70722),
    A = n(761274),
    M = n(46140),
    L = n(65154),
    D = n(388032),
    G = n(777046);
function B(e) {
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
function U(e) {
    let t = (0, C.isWindows)() ? (0, T.Z)(p.ZP, N.Z) : null,
        n = p.ZP.getRunningGames();
    return null != t && (0, Z.Z)(e.id, t.windowHandle) ? 2 : +(null != n.find((t) => (0, Z.Z)(e.id, t.windowHandle)));
}
function z(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: l } = y.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = S.Z.supports(L.AN.GO_LIVE_HARDWARE),
        [o, m] = i.useState(null),
        [N, C] = i.useState(null),
        [I, O] = i.useState(null),
        T = null != I && I.length > 0,
        [E, R] = i.useState(c.vA.WINDOW),
        [k, B] = i.useState(!1),
        z = i.useRef(null),
        F = i.useRef(new u.Xp()),
        H = (0, d.e7)([p.ZP], () => p.ZP.getRunningGames()),
        V = (function (e, t, n) {
            let r = (0, v.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return i.useMemo(() => {
                if (null == n || !r) return null;
                for (let r of n) {
                    var i, l;
                    let n = t.find((e) => (0, Z.Z)(r.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let s = (0, j.lQ)(e, n.id);
                    if (null != s && (null == (i = s.userStatus) ? void 0 : i.enrolledAt) != null && (null == (l = s.userStatus) ? void 0 : l.completedAt) == null)
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
            N
        ),
        Y = i.useMemo(() => (null == N ? null : [...N].sort((e, t) => ((null == V ? void 0 : V.source.id) === e.id ? -1 : (null == V ? void 0 : V.source.id) === t.id ? 1 : U(t) - U(e)))), [V, N]);
    i.useEffect(() => {
        let e = F.current;
        return (
            (0, w.t)({
                width: 176,
                height: 99
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                m(t), C(n), O(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n
                } = await (0, w.t)({
                    width: 176,
                    height: 99
                });
                m(e), C(t), O(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let J = i.useCallback((e) => {
            null !== e && ((z.current = e), B(!e.isScrolledToTop()));
        }, []),
        [X, K] = i.useState(void 0);
    i.useEffect(() => {
        g.Z.hasPermission(A.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(K);
    }, []);
    let q = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return Y;
            case c.vA.SCREEN:
                return o;
            case c.vA.CAMERA:
                return I;
        }
    })(E);
    if (null == q)
        return !1 === X
            ? (0, r.jsxs)(f.Text, {
                  className: G.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [D.NW.string(D.t['kW5h/f']), (0, r.jsx)('br', {}), D.NW.string(D.t['5Jvu1d'])]
              })
            : (0, r.jsx)(h.Z, {
                  className: G.spinner,
                  justify: h.Z.Justify.CENTER,
                  align: h.Z.Align.CENTER,
                  children: (0, r.jsx)(f.$jN, {})
              });
    let Q = q.map((e) => {
        let { id: i } = e,
            l = (null == t ? void 0 : t.id) === i;
        return (0, r.jsx)(
            f.P3F,
            {
                className: s()(G.tile, { [G.selected]: l }),
                onClick: () => n(e, null),
                children: (0, r.jsx)(
                    W.Z,
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
                className: G.segmentContainer,
                children: [
                    (0, r.jsx)(P.Z, { separator: k }),
                    (0, r.jsx)(f.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: D.NW.string(D.t.tHoi7u),
                                    value: c.vA.WINDOW
                                },
                                {
                                    name: D.NW.string(D.t['/iX8u7']),
                                    value: c.vA.SCREEN
                                }
                            ];
                            return (
                                l &&
                                    a &&
                                    T &&
                                    e.push({
                                        name: D.NW.string(D.t.cWt5Ul),
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
                        className: G.segmentControl,
                        optionClassName: G.segmentControlOption
                    })
                ]
            }),
            (0, r.jsxs)(f.Den, {
                ref: J,
                className: G.sourceScroller,
                onScroll: function () {
                    let e = z.current;
                    null != e && B(!e.isScrolledToTop());
                },
                children: [
                    E === c.vA.WINDOW && null != V && (0, r.jsx)(b.Z, { quest: V.quest }),
                    (0, r.jsx)(x.Z, {
                        layout: x.Z.Layout.WRAP,
                        columns: 2,
                        className: G.sourceContainer,
                        children: Q
                    })
                ]
            })
        ]
    });
}
function F(e) {
    let { onSelect: t } = e,
        n = i.useCallback(() => {
            t({
                id: 'prepicked:',
                name: D.NW.string(D.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, r.jsx)(f.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: n,
        tabIndex: 0,
        className: s()(G.nativeSourceSingleTypeButton, G.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: G.nativeSourceSingleTypeButtonInner,
            children: [
                (0, r.jsx)(R.Z, { className: G.nativeSourceSingleTypeImage }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: D.NW.string(D.t.Yp6h5e)
                })
            ]
        })
    });
}
function H(e) {
    let { id: t, name: n, text: l, icon: a, onSelect: o } = e,
        c = i.useCallback(() => {
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
        className: s()(G.nativeSourceTypeButton, G.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: G.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(a, { size: 'lg' }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: l
                })
            ]
        })
    });
}
function V(e) {
    let { onSourceSelect: t } = e,
        [n, l] = i.useState([]),
        [a, c] = i.useState({}),
        d = i.useRef(new u.Xp());
    i.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(S.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                l(e),
                    c(
                        B(
                            {},
                            e.reduce((e, t) => {
                                var n, r;
                                let [i, l] = t;
                                return (
                                    (n = B({}, e)),
                                    (r = r = { ['camera:' + i]: l.name }),
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
    let h = i.useCallback(
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
        x = (0, C.isMac)() && o().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, k.jR),
        p = (0, C.isMac)(),
        [g, _] = i.useState(!1),
        j = i.useCallback(() => {
            _(!g);
        }, [g]),
        v = x
            ? (0, r.jsx)(F, { onSelect: t })
            : (0, r.jsxs)('div', {
                  className: G.nativePickerTypes,
                  children: [
                      (0, r.jsx)(H, {
                          onSelect: t,
                          id: 'screen',
                          name: D.NW.string(D.t.R4wpLC),
                          text: D.NW.string(D.t.cVUFXV),
                          icon: f.pzj
                      }),
                      (0, r.jsx)(H, {
                          onSelect: t,
                          id: 'window',
                          name: D.NW.string(D.t['+SLJCg']),
                          text: D.NW.string(D.t.dG2A1N),
                          icon: f.GON
                      }),
                      p
                          ? (0, r.jsx)(H, {
                                onSelect: t,
                                id: 'app',
                                name: D.NW.string(D.t.ct7AKS),
                                text: D.NW.string(D.t['8lQwf3']),
                                icon: f.gw7
                            })
                          : null
                  ]
              });
    return (0, r.jsxs)('div', {
        className: G.nativePickerScroll,
        children: [
            (0, r.jsx)(f.Text, {
                className: G.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: D.NW.string(D.t.XyYoFR)
            }),
            v,
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: s()(G.nativePickerCaptureSection, g ? null : G.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              onClick: j,
                              className: G.nativePickerLabel,
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      className: G.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: D.NW.string(D.t.rO0Vi4)
                                  }),
                                  (0, r.jsx)(f.CJ0, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: G.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, r.jsx)(f.FXm, {
                              className: G.nativePickerCaptureList,
                              onChange: h,
                              radioItemClassName: G.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: 'camera:' + n.id,
                                      icon: f.Odl,
                                      radioItemIconClassName: G.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function Y(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: l } = e,
        { lastPickerAction: s, lastPickerError: a } = (0, E.Z)(t, n);
    return (
        i.useEffect(() => {
            (0, C.isLinux)() || ((0, C.isMac)() && o().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, k.jR)) ? (0, I.T)(l) : (0, I.t)();
        }, [l]),
        s === O.Uc.Error
            ? (0, r.jsx)(f.Text, {
                  className: G.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : D.NW.string(D.t.CKsXk5)
              })
            : (0, r.jsx)(R.Z, {
                  animated: !0,
                  className: G.nativePickerGuide
              })
    );
}
