n.d(t, {
    Hu: () => Y,
    oA: () => z,
    se: () => V
}),
    n(47120),
    n(230036),
    n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(209739),
    a = n.n(o),
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
    N = n(358085),
    y = n(463727),
    Z = n(855403),
    I = n(299570),
    w = n(960861),
    O = n(59468),
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
    G = n(873270);
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
function B(e) {
    let t = (0, N.isWindows)() ? (0, T.Z)(p.ZP, C.Z) : null,
        n = p.ZP.getRunningGames();
    return null != t && (0, Z.Z)(e.id, t.windowHandle) ? 2 : +(null != n.find((t) => (0, Z.Z)(e.id, t.windowHandle)));
}
function z(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: i } = y.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        o = S.Z.supports(L.AN.GO_LIVE_HARDWARE),
        [a, m] = l.useState(null),
        [C, N] = l.useState(null),
        [I, w] = l.useState(null),
        T = null != I && I.length > 0,
        [E, R] = l.useState(c.vA.WINDOW),
        [k, U] = l.useState(!1),
        z = l.useRef(null),
        F = l.useRef(new u.Xp()),
        H = (0, d.e7)([p.ZP], () => p.ZP.getRunningGames()),
        V = (function (e, t, n) {
            let r = (0, v.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return l.useMemo(() => {
                if (null == n || !r) return null;
                for (let r of n) {
                    var l, i;
                    let n = t.find((e) => (0, Z.Z)(r.id, e.windowHandle));
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
        Y = l.useMemo(() => (null == C ? null : [...C].sort((e, t) => ((null == V ? void 0 : V.source.id) === e.id ? -1 : (null == V ? void 0 : V.source.id) === t.id ? 1 : B(t) - B(e)))), [V, C]);
    l.useEffect(() => {
        let e = F.current;
        return (
            (0, O.t)({
                width: 176,
                height: 99
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                m(t), N(n), w(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n
                } = await (0, O.t)({
                    width: 176,
                    height: 99
                });
                m(e), N(t), w(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let J = l.useCallback((e) => {
            null !== e && ((z.current = e), U(!e.isScrolledToTop()));
        }, []),
        [X, K] = l.useState(void 0);
    l.useEffect(() => {
        g.Z.hasPermission(A.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(K);
    }, []);
    let q = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return Y;
            case c.vA.SCREEN:
                return a;
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
        let { id: l } = e,
            i = (null == t ? void 0 : t.id) === l;
        return (0, r.jsx)(
            f.P3F,
            {
                className: s()(G.tile, { [G.selected]: i }),
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
            l
        );
    });
    return (0, r.jsxs)(l.Fragment, {
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
                                i &&
                                    o &&
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
                    null != e && U(!e.isScrolledToTop());
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
        n = l.useCallback(() => {
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
    let { id: t, name: n, text: i, icon: o, onSelect: a } = e,
        c = l.useCallback(() => {
            a({
                id: 'prepicked:' + t,
                name: n,
                url: ''
            });
        }, [t, n, a]);
    return (0, r.jsx)(f.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: c,
        tabIndex: 0,
        className: s()(G.nativeSourceTypeButton, G.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: G.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(o, { size: 'lg' }),
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
        [o, c] = l.useState({}),
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
                    name: null != (n = o[r]) ? n : '',
                    url: ''
                });
            },
            [t, o]
        ),
        x = (0, N.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, k.jR),
        p = (0, N.isMac)(),
        [g, _] = l.useState(!1),
        j = l.useCallback(() => {
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
    let { onSourceSelect: t, onCancel: n, pickerType: i } = e,
        { lastPickerAction: s, lastPickerError: o } = (0, E.Z)(t, n);
    return (
        l.useEffect(() => {
            (0, N.isLinux)() || ((0, N.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, k.jR)) ? (0, I.T)(i) : (0, I.t)();
        }, [i]),
        s === w.Uc.Error
            ? (0, r.jsx)(f.Text, {
                  className: G.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != o && o.length > 0 ? o : D.NW.string(D.t.CKsXk5)
              })
            : (0, r.jsx)(R.Z, {
                  animated: !0,
                  className: G.nativePickerGuide
              })
    );
}
