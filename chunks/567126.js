n.d(t, {
    Hu: () => X,
    jx: () => H,
    oA: () => z,
    ov: () => F,
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
    f = n(755721),
    m = n(481060),
    h = n(579806),
    p = n(600164),
    x = n(152708),
    g = n(594190),
    _ = n(751571),
    v = n(509212),
    j = n(569984),
    b = n(977156),
    C = n(28798),
    S = n(131951),
    y = n(449224),
    O = n(358085),
    w = n(463727),
    Z = n(855403),
    I = n(299570),
    N = n(960861),
    P = n(59468),
    T = n(989941),
    E = n(39540),
    R = n(958707),
    A = n(152165),
    k = n(133179),
    M = n(70722),
    D = n(761274),
    L = n(46140),
    B = n(65154),
    G = n(388032),
    U = n(336606);
function W(e) {
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
function F(e, t, n, r) {
    let i = (0, O.isWindows)() ? (0, T.Z)(g.ZP, y.Z) : null,
        l = g.ZP.getRunningGames(),
        s = null == n ? void 0 : n.split(":")[1],
        o = e.id.split(":")[1];
    if (null != s && s === o) return 0;
    if (null != t && t === e.id) return 5;
    if (null != i && (0, Z.Z)(e.id, i.windowHandle)) return 4;
    if (null != l.find((t) => (0, Z.Z)(e.id, t.windowHandle))) return 3;
    let a = null == r ? void 0 : r[o];
    return null != a && M.Mm.has(a) ? 2 : 1;
}
function H(e, t, n) {
    let r = (0, b.Z)({ location: L.dr.STREAM_SOURCE_SELECT });
    return i.useMemo(() => {
        if (null == n || !r) return null;
        for (let r of n) {
            var i, l;
            let n = t.find((e) => (0, Z.Z)(r.id, e.windowHandle));
            if ((null == n ? void 0 : n.id) == null) continue;
            let s = (0, v.lQ)(e, n.id);
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
function z(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: l } = w.Z.useExperiment({ location: "GoLive_Source_Select" }),
        o = S.Z.supports(B.AN.GO_LIVE_HARDWARE),
        [a, f] = i.useState(null),
        [h, v] = i.useState(null),
        [b, y] = i.useState(null),
        O = null != b && b.length > 0,
        [Z, I] = i.useState(c.vA.WINDOW),
        [N, T] = i.useState(!1),
        E = i.useRef(null),
        A = i.useRef(new u.Xp()),
        M = (0, d.e7)([g.ZP], () => g.ZP.getRunningGames()),
        L = H(
            (0, d.e7)([j.Z], () => j.Z.quests),
            M,
            h,
        ),
        W = i.useMemo(
            () =>
                null == h
                    ? null
                    : [...h].sort(
                          (e, t) => F(t, null == L ? void 0 : L.source.id) - F(e, null == L ? void 0 : L.source.id),
                      ),
            [L, h],
        );
    i.useEffect(() => {
        let e = A.current;
        return (
            (0, P.t)({
                width: 176,
                height: 99,
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                f(t), v(n), y(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n,
                } = await (0, P.t)({
                    width: 176,
                    height: 99,
                });
                f(e), v(t), y(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let z = i.useCallback((e) => {
            null !== e && ((E.current = e), T(!e.isScrolledToTop()));
        }, []),
        [V, Y] = i.useState(void 0);
    i.useEffect(() => {
        _.Z.hasPermission(D.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(Y);
    }, []);
    let J = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return W;
            case c.vA.SCREEN:
                return a;
            case c.vA.CAMERA:
                return b;
        }
    })(Z);
    if (null == J)
        return !1 === V
            ? (0, r.jsxs)(m.Text, {
                  className: U.errorMessage,
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: [G.intl.string(G.t["kW5h/f"]), (0, r.jsx)("br", {}), G.intl.string(G.t["5Jvu1d"])],
              })
            : (0, r.jsx)(p.Z, {
                  className: U.spinner,
                  justify: p.Z.Justify.CENTER,
                  align: p.Z.Align.CENTER,
                  children: (0, r.jsx)(m.$jN, {}),
              });
    let X = J.map((e) => {
        let { id: i } = e,
            l = (null == t ? void 0 : t.id) === i;
        return (0, r.jsx)(
            m.P3F,
            {
                className: s()(U.tile, { [U.selected]: l }),
                onClick: () => n(e, null),
                children: (0, r.jsx)(
                    k.Z,
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
                className: U.segmentContainer,
                children: [
                    (0, r.jsx)(R.Z, { separator: N }),
                    (0, r.jsx)(m.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: G.intl.string(G.t.tHoi7u),
                                    value: c.vA.WINDOW,
                                },
                                {
                                    name: G.intl.string(G.t["/iX8u7"]),
                                    value: c.vA.SCREEN,
                                },
                            ];
                            return (
                                l &&
                                    o &&
                                    O &&
                                    e.push({
                                        name: G.intl.string(G.t.cWt5Ul),
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
                        className: U.segmentControl,
                        optionClassName: U.segmentControlOption,
                    }),
                ],
            }),
            (0, r.jsxs)(m.Den, {
                ref: z,
                className: U.sourceScroller,
                onScroll: function () {
                    let e = E.current;
                    null != e && T(!e.isScrolledToTop());
                },
                children: [
                    Z === c.vA.WINDOW && null != L && (0, r.jsx)(C.Z, { quest: L.quest }),
                    (0, r.jsx)(x.Z, {
                        layout: x.Z.Layout.WRAP,
                        columns: 2,
                        className: U.sourceContainer,
                        children: X,
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { onSelect: t } = e,
        n = i.useCallback(() => {
            t({
                id: "prepicked:",
                name: G.intl.string(G.t["KKcy9/"]),
                url: "",
            });
        }, [t]);
    return (0, r.jsx)(m.P3F, {
        role: "radio",
        "aria-checked": !1,
        onClick: n,
        tabIndex: 0,
        className: s()(U.nativeSourceSingleTypeButton, U.nativePickerRadioItem),
        children: (0, r.jsxs)("div", {
            className: U.nativeSourceSingleTypeButtonInner,
            children: [
                (0, r.jsx)(A.Z, { className: U.nativeSourceSingleTypeImage }),
                (0, r.jsx)(m.Text, {
                    variant: "text-md/medium",
                    color: "none",
                    children: G.intl.string(G.t.Yp6h5e),
                }),
            ],
        }),
    });
}
function Y(e) {
    let { id: t, name: n, text: l, icon: o, onSelect: a } = e,
        c = i.useCallback(() => {
            a({
                id: "prepicked:" + t,
                name: n,
                url: "",
            });
        }, [t, n, a]);
    return (0, r.jsx)(m.P3F, {
        role: "radio",
        "aria-checked": !1,
        onClick: c,
        tabIndex: 0,
        className: s()(U.nativeSourceTypeButton, U.nativePickerRadioItem),
        children: (0, r.jsxs)("div", {
            className: U.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(o, { size: "lg" }),
                (0, r.jsx)(m.Text, {
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
                let e = Object.entries(S.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                l(e),
                    c(
                        W(
                            {},
                            e.reduce((e, t) => {
                                var n, r;
                                let [i, l] = t;
                                return (
                                    (n = W({}, e)),
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
    let p = i.useCallback(
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
        x = (0, O.isMac)() && a().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, M.jR),
        g = (0, O.isMac)(),
        [_, v] = i.useState(!1),
        j = i.useCallback(() => {
            v(!_);
        }, [_]),
        b = x
            ? (0, r.jsx)(V, { onSelect: t })
            : (0, r.jsxs)("div", {
                  className: U.nativePickerTypes,
                  children: [
                      (0, r.jsx)(Y, {
                          onSelect: t,
                          id: "screen",
                          name: G.intl.string(G.t.R4wpLC),
                          text: G.intl.string(G.t.cVUFXV),
                          icon: m.pzj,
                      }),
                      (0, r.jsx)(Y, {
                          onSelect: t,
                          id: "window",
                          name: G.intl.string(G.t["+SLJCg"]),
                          text: G.intl.string(G.t.dG2A1N),
                          icon: m.GON,
                      }),
                      g
                          ? (0, r.jsx)(Y, {
                                onSelect: t,
                                id: "app",
                                name: G.intl.string(G.t.ct7AKS),
                                text: G.intl.string(G.t["8lQwf3"]),
                                icon: m.gw7,
                            })
                          : null,
                  ],
              });
    return (0, r.jsxs)("div", {
        className: U.nativePickerScroll,
        children: [
            (0, r.jsx)(m.Text, {
                className: U.nativePickerLabel,
                variant: "text-md/semibold",
                color: "interactive-normal",
                children: G.intl.string(G.t.XyYoFR),
            }),
            b,
            0 === n.length
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(U.nativePickerCaptureSection, _ ? null : U.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(m.P3F, {
                              onClick: j,
                              className: U.nativePickerLabel,
                              children: [
                                  (0, r.jsx)(m.Text, {
                                      className: U.nativeCaptureDevicesText,
                                      variant: "text-md/semibold",
                                      color: "interactive-normal",
                                      children: G.intl.string(G.t.rO0Vi4),
                                  }),
                                  (0, r.jsx)(m.CJ0, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: U.captureDevicesToggleIndicator,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(f.Gu, {
                              className: U.nativePickerCaptureList,
                              onChange: p,
                              radioItemClassName: U.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: "camera:" + n.id,
                                      icon: m.Odl,
                                      radioItemIconClassName: U.hideRadioCheckbox,
                                  };
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function X(e) {
    let { onSourceSelect: t, onCancel: n, pickerType: l } = e,
        { lastPickerAction: s, lastPickerError: o } = (0, E.Z)(t, n);
    return (
        i.useEffect(() => {
            (0, O.isLinux)() ||
            ((0, O.isMac)() && a().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, M.jR))
                ? (0, I.T)(l)
                : (0, I.t)();
        }, [l]),
        s === N.Uc.Error
            ? (0, r.jsx)(m.Text, {
                  className: U.errorMessage,
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: null != o && o.length > 0 ? o : G.intl.string(G.t.CKsXk5),
              })
            : (0, r.jsx)(A.Z, {
                  animated: !0,
                  className: U.nativePickerGuide,
              })
    );
}
