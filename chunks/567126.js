n.d(t, {
    Hu: () => Y,
    jx: () => F,
    oA: () => H,
    ov: () => W,
    se: () => J,
}),
    n(35282),
    n(388685),
    n(642613),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
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
    _ = n(509212),
    v = n(569984),
    j = n(977156),
    b = n(28798),
    C = n(131951),
    S = n(449224),
    y = n(358085),
    O = n(463727),
    w = n(855403),
    Z = n(299570),
    I = n(960861),
    N = n(59468),
    P = n(989941),
    T = n(39540),
    E = n(958707),
    R = n(152165),
    A = n(133179),
    k = n(70722),
    M = n(761274),
    D = n(46140),
    L = n(65154),
    B = n(388032),
    G = n(336606);
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function W(e, t, n, r) {
    let i = (0, y.isWindows)() ? (0, P.Z)(x.ZP, S.Z) : null,
        l = x.ZP.getRunningGames(),
        s = null == n ? void 0 : n.split(":")[1],
        o = e.id.split(":")[1];
    if (null != s && s === o) return 0;
    if (null != t && t === e.id) return 5;
    if (null != i && (0, w.Z)(e.id, i.windowHandle)) return 4;
    if (null != l.find((t) => (0, w.Z)(e.id, t.windowHandle))) return 3;
    let a = null == r ? void 0 : r[o];
    return null != a && k.Mm.has(a) ? 2 : 1;
}
function F(e, t, n) {
    let r = (0, j.Z)({ location: D.dr.STREAM_SOURCE_SELECT });
    return i.useMemo(() => {
        if (null == n || !r) return null;
        for (let r of n) {
            var i, l;
            let n = t.find((e) => (0, w.Z)(r.id, e.windowHandle));
            if ((null == n ? void 0 : n.id) == null) continue;
            let s = (0, _.lQ)(e, n.id);
            if (
                null != s &&
                (null == (i = s.userStatus) ? void 0 : i.enrolledAt) != null &&
                (null == (l = s.userStatus) ? void 0 : l.completedAt) == null
            )
                return {
                    source: r,
                    quest: s,
                };
        }
        return null;
    }, [r, e, t, n]);
}
function H(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: l } = O.Z.useExperiment({ location: "GoLive_Source_Select" }),
        o = C.Z.supports(L.AN.GO_LIVE_HARDWARE),
        [a, m] = i.useState(null),
        [_, j] = i.useState(null),
        [S, y] = i.useState(null),
        w = null != S && S.length > 0,
        [Z, I] = i.useState(c.vA.WINDOW),
        [P, T] = i.useState(!1),
        R = i.useRef(null),
        k = i.useRef(new u.Xp()),
        D = (0, d.e7)([x.ZP], () => x.ZP.getRunningGames()),
        U = F(
            (0, d.e7)([v.Z], () => v.Z.quests),
            D,
            _,
        ),
        H = i.useMemo(
            () =>
                null == _
                    ? null
                    : [..._].sort(
                          (e, t) => W(t, null == U ? void 0 : U.source.id) - W(e, null == U ? void 0 : U.source.id),
                      ),
            [U, _],
        );
    i.useEffect(() => {
        let e = k.current;
        return (
            (0, N.t)({
                width: 176,
                height: 99,
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                m(t), j(n), y(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n,
                } = await (0, N.t)({
                    width: 176,
                    height: 99,
                });
                m(e), j(t), y(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let z = i.useCallback((e) => {
            null !== e && ((R.current = e), T(!e.isScrolledToTop()));
        }, []),
        [V, J] = i.useState(void 0);
    i.useEffect(() => {
        g.Z.hasPermission(M.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(J);
    }, []);
    let Y = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return H;
            case c.vA.SCREEN:
                return a;
            case c.vA.CAMERA:
                return S;
        }
    })(Z);
    if (null == Y)
        return !1 === V
            ? (0, r.jsxs)(f.Text, {
                  className: G.errorMessage,
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: [B.intl.string(B.t["kW5h/f"]), (0, r.jsx)("br", {}), B.intl.string(B.t["5Jvu1d"])],
              })
            : (0, r.jsx)(h.Z, {
                  className: G.spinner,
                  justify: h.Z.Justify.CENTER,
                  align: h.Z.Align.CENTER,
                  children: (0, r.jsx)(f.$jN, {}),
              });
    let X = Y.map((e) => {
        let { id: i } = e,
            l = (null == t ? void 0 : t.id) === i;
        return (0, r.jsx)(
            f.P3F,
            {
                className: s()(G.tile, { [G.selected]: l }),
                onClick: () => n(e, null),
                children: (0, r.jsx)(
                    A.Z,
                    {
                        source: e,
                        selectedSource: t,
                    },
                    e.id,
                ),
            },
            i,
        );
    });
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: G.segmentContainer,
                children: [
                    (0, r.jsx)(E.Z, { separator: P }),
                    (0, r.jsx)(f.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: B.intl.string(B.t.tHoi7u),
                                    value: c.vA.WINDOW,
                                },
                                {
                                    name: B.intl.string(B.t["/iX8u7"]),
                                    value: c.vA.SCREEN,
                                },
                            ];
                            return (
                                l &&
                                    o &&
                                    w &&
                                    e.push({
                                        name: B.intl.string(B.t.cWt5Ul),
                                        value: c.vA.CAMERA,
                                    }),
                                e
                            );
                        })(),
                        value: Z,
                        onChange: (e) => {
                            let { value: t } = e;
                            return I(t);
                        },
                        className: G.segmentControl,
                        optionClassName: G.segmentControlOption,
                    }),
                ],
            }),
            (0, r.jsxs)(f.Den, {
                ref: z,
                className: G.sourceScroller,
                onScroll: function () {
                    let e = R.current;
                    null != e && T(!e.isScrolledToTop());
                },
                children: [
                    Z === c.vA.WINDOW && null != U && (0, r.jsx)(b.Z, { quest: U.quest }),
                    (0, r.jsx)(p.Z, {
                        layout: p.Z.Layout.WRAP,
                        columns: 2,
                        className: G.sourceContainer,
                        children: X,
                    }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { onSelect: t } = e,
        n = i.useCallback(() => {
            t({
                id: "prepicked:",
                name: B.intl.string(B.t["KKcy9/"]),
                url: "",
            });
        }, [t]);
    return (0, r.jsx)(f.P3F, {
        role: "radio",
        "aria-checked": !1,
        onClick: n,
        tabIndex: 0,
        className: s()(G.nativeSourceSingleTypeButton, G.nativePickerRadioItem),
        children: (0, r.jsxs)("div", {
            className: G.nativeSourceSingleTypeButtonInner,
            children: [
                (0, r.jsx)(R.Z, { className: G.nativeSourceSingleTypeImage }),
                (0, r.jsx)(f.Text, {
                    variant: "text-md/medium",
                    color: "none",
                    children: B.intl.string(B.t.Yp6h5e),
                }),
            ],
        }),
    });
}
function V(e) {
    let { id: t, name: n, text: l, icon: o, onSelect: a } = e,
        c = i.useCallback(() => {
            a({
                id: "prepicked:" + t,
                name: n,
                url: "",
            });
        }, [t, n, a]);
    return (0, r.jsx)(f.P3F, {
        role: "radio",
        "aria-checked": !1,
        onClick: c,
        tabIndex: 0,
        className: s()(G.nativeSourceTypeButton, G.nativePickerRadioItem),
        children: (0, r.jsxs)("div", {
            className: G.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(o, { size: "lg" }),
                (0, r.jsx)(f.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: l,
                }),
            ],
        }),
    });
}
function J(e) {
    let { onSourceSelect: t } = e,
        [n, l] = i.useState([]),
        [o, c] = i.useState({}),
        d = i.useRef(new u.Xp());
    i.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(C.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                l(e),
                    c(
                        U(
                            {},
                            e.reduce((e, t) => {
                                var n, r;
                                let [i, l] = t;
                                return (
                                    (n = U({}, e)),
                                    (r = r = { ["camera:" + i]: l.name }),
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
                            }, {}),
                        ),
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
                    name: null != (n = o[r]) ? n : "",
                    url: "",
                });
            },
            [t, o],
        ),
        p = (0, y.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, k.jR),
        x = (0, y.isMac)(),
        [g, _] = i.useState(!1),
        v = i.useCallback(() => {
            _(!g);
        }, [g]),
        j = p
            ? (0, r.jsx)(z, { onSelect: t })
            : (0, r.jsxs)("div", {
                  className: G.nativePickerTypes,
                  children: [
                      (0, r.jsx)(V, {
                          onSelect: t,
                          id: "screen",
                          name: B.intl.string(B.t.R4wpLC),
                          text: B.intl.string(B.t.cVUFXV),
                          icon: f.pzj,
                      }),
                      (0, r.jsx)(V, {
                          onSelect: t,
                          id: "window",
                          name: B.intl.string(B.t["+SLJCg"]),
                          text: B.intl.string(B.t.dG2A1N),
                          icon: f.GON,
                      }),
                      x
                          ? (0, r.jsx)(V, {
                                onSelect: t,
                                id: "app",
                                name: B.intl.string(B.t.ct7AKS),
                                text: B.intl.string(B.t["8lQwf3"]),
                                icon: f.gw7,
                            })
                          : null,
                  ],
              });
    return (0, r.jsxs)("div", {
        className: G.nativePickerScroll,
        children: [
            (0, r.jsx)(f.Text, {
                className: G.nativePickerLabel,
                variant: "text-md/semibold",
                color: "interactive-normal",
                children: B.intl.string(B.t.XyYoFR),
            }),
            j,
            0 === n.length
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(G.nativePickerCaptureSection, g ? null : G.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              onClick: v,
                              className: G.nativePickerLabel,
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      className: G.nativeCaptureDevicesText,
                                      variant: "text-md/semibold",
                                      color: "interactive-normal",
                                      children: B.intl.string(B.t.rO0Vi4),
                                  }),
                                  (0, r.jsx)(f.CJ0, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: G.captureDevicesToggleIndicator,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(f.FXm, {
                              className: G.nativePickerCaptureList,
                              onChange: h,
                              radioItemClassName: G.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: "camera:" + n.id,
                                      icon: f.Odl,
                                      radioItemIconClassName: G.hideRadioCheckbox,
                                  };
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function Y(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: l } = e,
        { lastPickerAction: s, lastPickerError: o } = (0, T.Z)(t, n);
    return (
        i.useEffect(() => {
            (0, y.isLinux)() ||
            ((0, y.isMac)() && a().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, k.jR))
                ? (0, Z.T)(l)
                : (0, Z.t)();
        }, [l]),
        s === I.Uc.Error
            ? (0, r.jsx)(f.Text, {
                  className: G.errorMessage,
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: null != o && o.length > 0 ? o : B.intl.string(B.t.CKsXk5),
              })
            : (0, r.jsx)(R.Z, {
                  animated: !0,
                  className: G.nativePickerGuide,
              })
    );
}
