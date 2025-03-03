n.d(t, {
    Hu: () => J,
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
    h = n(579806),
    m = n(600164),
    p = n(152708),
    x = n(594190),
    g = n(751571),
    _ = n(569984),
    v = n(918701),
    j = n(977156),
    b = n(28798),
    C = n(131951),
    S = n(449224),
    N = n(358085),
    y = n(463727),
    Z = n(855403),
    w = n(299570),
    O = n(960861),
    I = n(59468),
    P = n(989941),
    T = n(39540),
    E = n(958707),
    R = n(152165),
    W = n(133179),
    k = n(70722),
    A = n(761274),
    M = n(46140),
    L = n(65154),
    D = n(388032),
    G = n(531244);
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
    let t = (0, N.isWindows)() ? (0, P.Z)(x.ZP, S.Z) : null,
        n = x.ZP.getRunningGames();
    return null != t && (0, Z.Z)(e.id, t.windowHandle) ? 2 : +(null != n.find((t) => (0, Z.Z)(e.id, t.windowHandle)));
}
function z(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: i } = y.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        o = C.Z.supports(L.AN.GO_LIVE_HARDWARE),
        [a, h] = l.useState(null),
        [S, N] = l.useState(null),
        [w, O] = l.useState(null),
        P = null != w && w.length > 0,
        [T, R] = l.useState(c.vA.WINDOW),
        [k, B] = l.useState(!1),
        z = l.useRef(null),
        F = l.useRef(new u.Xp()),
        H = (0, d.e7)([x.ZP], () => x.ZP.getRunningGames()),
        V = (function (e, t, n) {
            let r = (0, j.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return l.useMemo(() => {
                if (null == n || !r) return null;
                for (let r of n) {
                    var l, i;
                    let n = t.find((e) => (0, Z.Z)(r.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let s = (0, v.lQ)(e, n.id);
                    if (null != s && (null === (l = s.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null && (null === (i = s.userStatus) || void 0 === i ? void 0 : i.completedAt) == null)
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
            S
        ),
        J = l.useMemo(() => (null == S ? null : [...S].sort((e, t) => ((null == V ? void 0 : V.source.id) === e.id ? -1 : (null == V ? void 0 : V.source.id) === t.id ? 1 : U(t) - U(e)))), [V, S]);
    l.useEffect(() => {
        let e = F.current;
        return (
            (0, I.t)({
                width: 176,
                height: 99
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                h(t), N(n), O(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n
                } = await (0, I.t)({
                    width: 176,
                    height: 99
                });
                h(e), N(t), O(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let X = l.useCallback((e) => {
            null !== e && ((z.current = e), B(!e.isScrolledToTop()));
        }, []),
        [Y, K] = l.useState(void 0);
    l.useEffect(() => {
        g.Z.hasPermission(A.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(K);
    }, []);
    let q = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return J;
            case c.vA.SCREEN:
                return a;
            case c.vA.CAMERA:
                return w;
        }
    })(T);
    if (null == q)
        return !1 === Y
            ? (0, r.jsxs)(f.Text, {
                  className: G.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [D.NW.string(D.t['kW5h/f']), (0, r.jsx)('br', {}), D.NW.string(D.t['5Jvu1d'])]
              })
            : (0, r.jsx)(m.Z, {
                  className: G.spinner,
                  justify: m.Z.Justify.CENTER,
                  align: m.Z.Align.CENTER,
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
                    (0, r.jsx)(E.Z, { separator: k }),
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
                                    P &&
                                    e.push({
                                        name: D.NW.string(D.t.cWt5Ul),
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
                        className: G.segmentControl,
                        optionClassName: G.segmentControlOption
                    })
                ]
            }),
            (0, r.jsxs)(f.Den, {
                ref: X,
                className: G.sourceScroller,
                onScroll: function () {
                    let e = z.current;
                    null != e && B(!e.isScrolledToTop());
                },
                children: [
                    T === c.vA.WINDOW && null != V && (0, r.jsx)(b.Z, { quest: V.quest }),
                    (0, r.jsx)(p.Z, {
                        layout: p.Z.Layout.WRAP,
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
                let e = Object.entries(C.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                i(e),
                    c(
                        B(
                            {},
                            e.reduce((e, t) => {
                                var n, r;
                                let [l, i] = t;
                                return (
                                    (n = B({}, e)),
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
    let m = l.useCallback(
            (e) => {
                var n;
                let { value: r } = e;
                t({
                    id: r,
                    name: null !== (n = o[r]) && void 0 !== n ? n : '',
                    url: ''
                });
            },
            [t, o]
        ),
        p = (0, N.isMac)() && a().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, k.jR),
        x = (0, N.isMac)(),
        [g, _] = l.useState(!1),
        v = l.useCallback(() => {
            _(!g);
        }, [g]),
        j = p
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
                      x
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
            j,
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: s()(G.nativePickerCaptureSection, g ? null : G.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              onClick: v,
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
                              onChange: m,
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
function J(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: i } = e,
        { lastPickerAction: s, lastPickerError: o } = (0, T.Z)(t, n);
    return (
        l.useEffect(() => {
            (0, N.isLinux)() || ((0, N.isMac)() && a().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, k.jR)) ? (0, w.T)(i) : (0, w.t)();
        }, [i]),
        s === O.Uc.Error
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
