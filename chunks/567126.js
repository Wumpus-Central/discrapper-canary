n.d(t, {
    Hu: () => Y,
    oA: () => z,
    se: () => V
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(255367),
    l = n(73800),
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
    p = n(152708),
    x = n(594190),
    g = n(751571),
    _ = n(569984),
    v = n(918701),
    j = n(977156),
    S = n(28798),
    b = n(131951),
    C = n(449224),
    y = n(358085),
    O = n(463727),
    Z = n(855403),
    I = n(299570),
    w = n(960861),
    N = n(59468),
    E = n(989941),
    T = n(39540),
    P = n(958707),
    R = n(152165),
    k = n(133179),
    A = n(70722),
    M = n(761274),
    L = n(46140),
    D = n(65154),
    B = n(388032),
    U = n(873270);
function G(e) {
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
function W(e) {
    let t = (0, y.isWindows)() ? (0, E.Z)(x.ZP, C.Z) : null,
        n = x.ZP.getRunningGames();
    return null != t && (0, Z.Z)(e.id, t.windowHandle) ? 2 : +(null != n.find((t) => (0, Z.Z)(e.id, t.windowHandle)));
}
function z(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: i } = O.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        o = b.Z.supports(D.AN.GO_LIVE_HARDWARE),
        [a, m] = l.useState(null),
        [C, y] = l.useState(null),
        [I, w] = l.useState(null),
        E = null != I && I.length > 0,
        [T, R] = l.useState(c.vA.WINDOW),
        [A, G] = l.useState(!1),
        z = l.useRef(null),
        F = l.useRef(new u.Xp()),
        H = (0, d.e7)([x.ZP], () => x.ZP.getRunningGames()),
        V = (function (e, t, n) {
            let r = (0, j.Zy)({ location: L.dr.STREAM_SOURCE_SELECT });
            return l.useMemo(() => {
                if (null == n || !r) return null;
                for (let r of n) {
                    var l, i;
                    let n = t.find((e) => (0, Z.Z)(r.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let s = (0, v.lQ)(e, n.id);
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
        Y = l.useMemo(() => (null == C ? null : [...C].sort((e, t) => ((null == V ? void 0 : V.source.id) === e.id ? -1 : (null == V ? void 0 : V.source.id) === t.id ? 1 : W(t) - W(e)))), [V, C]);
    l.useEffect(() => {
        let e = F.current;
        return (
            (0, N.t)({
                width: 176,
                height: 99
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                m(t), y(n), w(r);
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
                m(e), y(t), w(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let J = l.useCallback((e) => {
            null !== e && ((z.current = e), G(!e.isScrolledToTop()));
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
                return a;
            case c.vA.CAMERA:
                return I;
        }
    })(T);
    if (null == q)
        return !1 === X
            ? (0, r.jsxs)(f.Text, {
                  className: U.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [B.intl.string(B.t['kW5h/f']), (0, r.jsx)('br', {}), B.intl.string(B.t['5Jvu1d'])]
              })
            : (0, r.jsx)(h.Z, {
                  className: U.spinner,
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
                className: s()(U.tile, { [U.selected]: i }),
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
                className: U.segmentContainer,
                children: [
                    (0, r.jsx)(P.Z, { separator: A }),
                    (0, r.jsx)(f.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: B.intl.string(B.t.tHoi7u),
                                    value: c.vA.WINDOW
                                },
                                {
                                    name: B.intl.string(B.t['/iX8u7']),
                                    value: c.vA.SCREEN
                                }
                            ];
                            return (
                                i &&
                                    o &&
                                    E &&
                                    e.push({
                                        name: B.intl.string(B.t.cWt5Ul),
                                        value: c.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: T,
                        onChange: (e) => {
                            let { value: t } = e;
                            return R(t);
                        },
                        className: U.segmentControl,
                        optionClassName: U.segmentControlOption
                    })
                ]
            }),
            (0, r.jsxs)(f.Den, {
                ref: J,
                className: U.sourceScroller,
                onScroll: function () {
                    let e = z.current;
                    null != e && G(!e.isScrolledToTop());
                },
                children: [
                    T === c.vA.WINDOW && null != V && (0, r.jsx)(S.Z, { quest: V.quest }),
                    (0, r.jsx)(p.Z, {
                        layout: p.Z.Layout.WRAP,
                        columns: 2,
                        className: U.sourceContainer,
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
                name: B.intl.string(B.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, r.jsx)(f.P3F, {
        role: 'radio',
        'aria-checked': !1,
        onClick: n,
        tabIndex: 0,
        className: s()(U.nativeSourceSingleTypeButton, U.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: U.nativeSourceSingleTypeButtonInner,
            children: [
                (0, r.jsx)(R.Z, { className: U.nativeSourceSingleTypeImage }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: B.intl.string(B.t.Yp6h5e)
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
        className: s()(U.nativeSourceTypeButton, U.nativePickerRadioItem),
        children: (0, r.jsxs)('div', {
            className: U.nativeSourceTypeButtonInner,
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
                let e = Object.entries(b.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                i(e),
                    c(
                        G(
                            {},
                            e.reduce((e, t) => {
                                var n, r;
                                let [l, i] = t;
                                return (
                                    (n = G({}, e)),
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
        p = (0, y.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, A.jR),
        x = (0, y.isMac)(),
        [g, _] = l.useState(!1),
        v = l.useCallback(() => {
            _(!g);
        }, [g]),
        j = p
            ? (0, r.jsx)(F, { onSelect: t })
            : (0, r.jsxs)('div', {
                  className: U.nativePickerTypes,
                  children: [
                      (0, r.jsx)(H, {
                          onSelect: t,
                          id: 'screen',
                          name: B.intl.string(B.t.R4wpLC),
                          text: B.intl.string(B.t.cVUFXV),
                          icon: f.pzj
                      }),
                      (0, r.jsx)(H, {
                          onSelect: t,
                          id: 'window',
                          name: B.intl.string(B.t['+SLJCg']),
                          text: B.intl.string(B.t.dG2A1N),
                          icon: f.GON
                      }),
                      x
                          ? (0, r.jsx)(H, {
                                onSelect: t,
                                id: 'app',
                                name: B.intl.string(B.t.ct7AKS),
                                text: B.intl.string(B.t['8lQwf3']),
                                icon: f.gw7
                            })
                          : null
                  ]
              });
    return (0, r.jsxs)('div', {
        className: U.nativePickerScroll,
        children: [
            (0, r.jsx)(f.Text, {
                className: U.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: B.intl.string(B.t.XyYoFR)
            }),
            j,
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: s()(U.nativePickerCaptureSection, g ? null : U.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              onClick: v,
                              className: U.nativePickerLabel,
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      className: U.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: B.intl.string(B.t.rO0Vi4)
                                  }),
                                  (0, r.jsx)(f.CJ0, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: U.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, r.jsx)(f.FXm, {
                              className: U.nativePickerCaptureList,
                              onChange: h,
                              radioItemClassName: U.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: 'camera:' + n.id,
                                      icon: f.Odl,
                                      radioItemIconClassName: U.hideRadioCheckbox
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
        { lastPickerAction: s, lastPickerError: o } = (0, T.Z)(t, n);
    return (
        l.useEffect(() => {
            (0, y.isLinux)() || ((0, y.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, A.jR)) ? (0, I.T)(i) : (0, I.t)();
        }, [i]),
        s === w.Uc.Error
            ? (0, r.jsx)(f.Text, {
                  className: U.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != o && o.length > 0 ? o : B.intl.string(B.t.CKsXk5)
              })
            : (0, r.jsx)(R.Z, {
                  animated: !0,
                  className: U.nativePickerGuide
              })
    );
}
