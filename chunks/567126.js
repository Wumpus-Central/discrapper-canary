i.d(t, {
    Hu: function () {
        return Q;
    },
    _Q: function () {
        return D;
    },
    oA: function () {
        return V;
    },
    ov: function () {
        return U;
    },
    se: function () {
        return X;
    }
}),
    i(47120),
    i(518263),
    i(970173),
    i(520712),
    i(268111),
    i(941497),
    i(32026),
    i(480839),
    i(744285),
    i(492257),
    i(873817),
    i(863942),
    i(642549),
    i(653041),
    i(724458);
var l = i(200651),
    r = i(192379),
    n = i(120356),
    s = i.n(n),
    a = i(553813),
    c = i.n(a),
    o = i(788900),
    d = i(268146),
    f = i(442837),
    u = i(141038),
    h = i(846519),
    x = i(481060),
    p = i(224706),
    g = i(579806),
    m = i(600164),
    j = i(152708),
    v = i(594190),
    C = i(751571),
    _ = i(569984),
    w = i(918701),
    y = i(977156),
    Z = i(28798),
    b = i(131951),
    S = i(449224),
    I = i(358085),
    N = i(463727),
    M = i(855403),
    R = i(299570),
    k = i(960861),
    T = i(989941),
    O = i(958707),
    B = i(152165),
    A = i(133179),
    G = i(70722),
    P = i(761274),
    L = i(46140),
    E = i(65154),
    H = i(388032),
    W = i(545477);
async function F() {
    let e = b.Z.getVideoDevices(),
        t = (0, u.Z)(b.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        i = D(),
        l = await i,
        r = await t,
        n = r
            .filter((e) => e.id.startsWith(d.vA.SCREEN))
            .map((e) => {
                let t = e.name;
                return (
                    'Entire screen' === t ? (t = H.intl.string(H.t.R4wpLC)) : /^Screen \d+$/.test(t) && (t = H.intl.formatToPlainString(H.t['y/R7n5'], { index: parseInt(t.split(' ')[1]) })),
                    {
                        ...e,
                        name: t
                    }
                );
            }),
        s = (function (e, t) {
            let i = {};
            return (
                t.forEach((e) => {
                    i[e.id] = e;
                }),
                e.forEach((e) => {
                    i[e.id] = e;
                }),
                Object.values(i)
            );
        })(
            r.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            l
        ),
        a = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: s,
        screenSources: n,
        cameraSources: Object.entries(e)
            .filter((e) => {
                let [t, i] = e;
                return !i.disabled;
            })
            .map((e, t) => {
                let [i, l] = e,
                    r = a[t % a.length],
                    n = Uint8Array.from(atob(r), (e) => e.charCodeAt(0)),
                    s = (0, o.xS)(n);
                return {
                    id: 'camera:' + l.id,
                    name: l.name,
                    url: s
                };
            })
    };
}
async function D() {
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
                let i = e.windowHandle,
                    l = e.name,
                    r = t.icon;
                return null != i && null != l && null != r
                    ? {
                          id: 'window:'.concat(i),
                          name: l,
                          url: 'data:image/bmp;base64,'.concat(r)
                      }
                    : null;
            })
        )
    ).filter((e) => null !== e);
}
function U(e) {
    let t = (0, I.isWindows)() ? (0, T.Z)(v.ZP, S.Z) : null,
        i = v.ZP.getRunningGames();
    return null != t && (0, M.Z)(e.id, t.windowHandle) ? 2 : null != i.find((t) => (0, M.Z)(e.id, t.windowHandle)) ? 1 : 0;
}
function V(e) {
    let { selectedSource: t, onChangeSelectedSource: i } = e,
        { enableGoLiveCaptureCard: n } = N.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = b.Z.supports(E.AN.GO_LIVE_HARDWARE),
        [c, o] = r.useState(null),
        [u, p] = r.useState(null),
        [g, S] = r.useState(null),
        I = null != g && g.length > 0,
        [R, k] = r.useState(d.vA.WINDOW),
        [T, B] = r.useState(!1),
        G = r.useRef(null),
        D = r.useRef(new h.Xp()),
        V = (0, f.e7)([v.ZP], () => v.ZP.getRunningGames()),
        J = (function (e, t, i) {
            let l = (0, y.Zy)({ location: L.dr.STREAM_SOURCE_SELECT });
            return r.useMemo(() => {
                if (null == i || !l) return null;
                for (let l of i) {
                    var r, n;
                    let i = t.find((e) => (0, M.Z)(l.id, e.windowHandle));
                    if ((null == i ? void 0 : i.id) == null) continue;
                    let s = (0, w.lQ)(e, i.id);
                    if (null != s && (null === (r = s.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null && (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) == null)
                        return {
                            source: l,
                            quest: s
                        };
                }
                return null;
            }, [l, e, t, i]);
        })(
            (0, f.e7)([_.Z], () => _.Z.quests),
            V,
            u
        ),
        K = r.useMemo(() => (null == u ? null : [...u].sort((e, t) => ((null == J ? void 0 : J.source.id) === e.id ? -1 : (null == J ? void 0 : J.source.id) === t.id ? 1 : U(t) - U(e)))), [J, u]);
    r.useEffect(() => {
        let e = D.current;
        return (
            F().then((e) => {
                let { screenSources: t, windowSources: i, cameraSources: l } = e;
                o(t), p(i), S(l);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: t, cameraSources: i } = await F();
                o(e), p(t), S(i);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let X = r.useCallback((e) => {
            null !== e && ((G.current = e), B(!e.isScrolledToTop()));
        }, []),
        [Q, q] = r.useState(void 0);
    r.useEffect(() => {
        C.Z.hasPermission(P.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(q);
    }, []);
    let Y = (function (e) {
        switch (e) {
            case d.vA.WINDOW:
                return K;
            case d.vA.SCREEN:
                return c;
            case d.vA.CAMERA:
                return g;
        }
    })(R);
    if (null == Y)
        return !1 === Q
            ? (0, l.jsxs)(x.Text, {
                  className: W.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: [H.intl.string(H.t['kW5h/f']), (0, l.jsx)('br', {}), H.intl.string(H.t['5Jvu1d'])]
              })
            : (0, l.jsx)(m.Z, {
                  className: W.spinner,
                  justify: m.Z.Justify.CENTER,
                  align: m.Z.Align.CENTER,
                  children: (0, l.jsx)(x.Spinner, {})
              });
    let z = Y.map((e) => {
        let { id: r } = e,
            n = (null == t ? void 0 : t.id) === r;
        return (0, l.jsx)(
            x.Clickable,
            {
                className: s()(W.tile, { [W.selected]: n }),
                onClick: () => i(e, null),
                children: (0, l.jsx)(
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
    function $() {
        let e = G.current;
        null != e && B(!e.isScrolledToTop());
    }
    return (0, l.jsxs)(r.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: W.segmentContainer,
                children: [
                    (0, l.jsx)(O.Z, { separator: T }),
                    (0, l.jsx)(x.SegmentedControl, {
                        options: (function () {
                            let e = [
                                {
                                    name: H.intl.string(H.t.tHoi7u),
                                    value: d.vA.WINDOW
                                },
                                {
                                    name: H.intl.string(H.t['/iX8u7']),
                                    value: d.vA.SCREEN
                                }
                            ];
                            return (
                                n &&
                                    a &&
                                    I &&
                                    e.push({
                                        name: H.intl.string(H.t.cWt5Ul),
                                        value: d.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: R,
                        onChange: (e) => {
                            let { value: t } = e;
                            return k(t);
                        },
                        className: W.segmentControl,
                        optionClassName: W.segmentControlOption
                    })
                ]
            }),
            R === d.vA.CAMERA
                ? (0, l.jsx)('div', {
                      className: W.sourceContainer,
                      children: (0, l.jsx)(x.AdvancedScroller, {
                          ref: X,
                          className: W.sourceScroller,
                          onScroll: $,
                          children: (0, l.jsx)(j.Z, {
                              layout: j.Z.Layout.WRAP,
                              columns: 2,
                              className: W.sourceContainer,
                              children: z
                          })
                      })
                  })
                : (0, l.jsxs)(x.AdvancedScroller, {
                      ref: X,
                      className: W.sourceScroller,
                      onScroll: $,
                      children: [
                          R === d.vA.WINDOW && null != J && (0, l.jsx)(Z.Z, { quest: J.quest }),
                          (0, l.jsx)(j.Z, {
                              layout: j.Z.Layout.WRAP,
                              columns: 2,
                              className: W.sourceContainer,
                              children: z
                          })
                      ]
                  })
        ]
    });
}
function J(e) {
    let { onSelect: t } = e,
        i = r.useCallback(() => {
            t({
                id: 'prepicked:',
                name: H.intl.string(H.t['KKcy9/']),
                url: ''
            });
        }, [t]);
    return (0, l.jsx)(x.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: i,
        tabIndex: 0,
        className: s()(W.nativeSourceSingleTypeButton, W.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: W.nativeSourceSingleTypeButtonInner,
            children: [
                (0, l.jsx)(B.Z, { className: W.nativeSourceSingleTypeImage }),
                (0, l.jsx)(x.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: H.intl.string(H.t.Yp6h5e)
                })
            ]
        })
    });
}
function K(e) {
    let { id: t, name: i, text: n, icon: a, onSelect: c } = e,
        o = r.useCallback(() => {
            c({
                id: 'prepicked:' + t,
                name: i,
                url: ''
            });
        }, [t, i, c]);
    return (0, l.jsx)(x.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: o,
        tabIndex: 0,
        className: s()(W.nativeSourceTypeButton, W.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: W.nativeSourceTypeButtonInner,
            children: [
                (0, l.jsx)(a, { size: 'lg' }),
                (0, l.jsx)(x.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: n
                })
            ]
        })
    });
}
function X(e) {
    let { onSourceSelect: t } = e,
        [i, n] = r.useState([]),
        [a, o] = r.useState({}),
        d = r.useRef(new h.Xp());
    r.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(b.Z.getVideoDevices()).filter((e) => {
                    let [t, i] = e;
                    return !i.disabled;
                });
                n(e),
                    o({
                        ...e.reduce((e, t) => {
                            let [i, l] = t;
                            return {
                                ...e,
                                ['camera:' + i]: l.name
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
    let f = r.useCallback(
            (e) => {
                var i;
                let { value: l } = e;
                t({
                    id: l,
                    name: null !== (i = a[l]) && void 0 !== i ? i : '',
                    url: ''
                });
            },
            [t, a]
        ),
        u = (0, I.isMac)() && c().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, G.jR),
        p = (0, I.isMac)(),
        [m, j] = r.useState(!1),
        v = r.useCallback(() => {
            j(!m);
        }, [m]),
        C = u
            ? (0, l.jsx)(J, { onSelect: t })
            : (0, l.jsxs)('div', {
                  className: W.nativePickerTypes,
                  children: [
                      (0, l.jsx)(K, {
                          onSelect: t,
                          id: 'screen',
                          name: H.intl.string(H.t.R4wpLC),
                          text: H.intl.string(H.t.cVUFXV),
                          icon: x.ScreenIcon
                      }),
                      (0, l.jsx)(K, {
                          onSelect: t,
                          id: 'window',
                          name: H.intl.string(H.t['+SLJCg']),
                          text: H.intl.string(H.t.dG2A1N),
                          icon: x.BrowserIcon
                      }),
                      p
                          ? (0, l.jsx)(K, {
                                onSelect: t,
                                id: 'app',
                                name: H.intl.string(H.t.ct7AKS),
                                text: H.intl.string(H.t['8lQwf3']),
                                icon: x.ClydeIcon
                            })
                          : null
                  ]
              });
    return (0, l.jsxs)('div', {
        className: W.nativePickerScroll,
        children: [
            (0, l.jsx)(x.Text, {
                className: W.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: H.intl.string(H.t.XyYoFR)
            }),
            C,
            0 === i.length
                ? null
                : (0, l.jsxs)('div', {
                      className: s()(W.nativePickerCaptureSection, m ? null : W.nativePickerCollapsed),
                      children: [
                          (0, l.jsxs)(x.Clickable, {
                              onClick: v,
                              className: s()(W.nativePickerLabel),
                              children: [
                                  (0, l.jsx)(x.Text, {
                                      className: W.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: H.intl.string(H.t.rO0Vi4)
                                  }),
                                  (0, l.jsx)(x.ChevronSmallDownIcon, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: W.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, l.jsx)(x.RadioGroup, {
                              className: W.nativePickerCaptureList,
                              onChange: f,
                              radioItemClassName: W.nativePickerRadioItem,
                              options: i.map((e) => {
                                  let [t, i] = e;
                                  return {
                                      name: i.name,
                                      value: 'camera:' + i.id,
                                      icon: x.VideoIcon,
                                      radioItemIconClassName: W.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function Q(e) {
    let { onSourceSelect: t, onCancel: i, pickerType: n } = e,
        { lastPickerAction: s, lastPickerError: a } = (0, f.e7)([k.ZP], () => k.ZP.getPickerState()),
        [o, d] = r.useState(!1);
    return (
        (0, k.kE)(),
        r.useEffect(() => {
            (0, I.isLinux)() || ((0, I.isMac)() && c().satisfies(null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release, G.jR)) ? (0, R.T)(n) : (0, R.t)();
        }, [n]),
        r.useEffect(() => {
            o ? (s === k.Uc.Update ? t() : s === k.Uc.Cancel && ((0, R.t)(), i())) : (null == s || s === k.Uc.Present) && d(!0);
        }, [o, s, t, i]),
        s === k.Uc.Error
            ? (0, l.jsx)(x.Text, {
                  className: W.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != a && a.length > 0 ? a : H.intl.string(H.t.CKsXk5)
              })
            : (0, l.jsx)(B.Z, {
                  animated: !0,
                  className: W.nativePickerGuide
              })
    );
}
