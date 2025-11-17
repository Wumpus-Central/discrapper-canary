n.d(t, {
    Hu: () => X,
    jx: () => H,
    oA: () => W,
    ov: () => F,
    se: () => J,
}),
    n(35282),
    n(388685),
    n(642613),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(209739),
    a = n.n(o),
    c = n(268146),
    d = n(442837),
    u = n(846519),
    f = n(481060),
    p = n(579806),
    h = n(600164),
    m = n(152708),
    _ = n(594190),
    g = n(751571),
    x = n(509212),
    v = n(569984),
    j = n(977156),
    b = n(28798),
    S = n(131951),
    y = n(449224),
    C = n(358085),
    O = n(463727),
    w = n(855403),
    P = n(299570),
    T = n(960861),
    Z = n(59468),
    I = n(989941),
    E = n(39540),
    N = n(958707),
    R = n(152165),
    A = n(133179),
    M = n(70722),
    k = n(761274),
    D = n(46140),
    B = n(65154),
    L = n(388032),
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
function F(e, t, n, r) {
    let i = (0, C.isWindows)() ? (0, I.Z)(_.ZP, y.Z) : null,
        l = _.ZP.getRunningGames(),
        s = null == n ? void 0 : n.split(":")[1],
        o = e.id.split(":")[1];
    if (null != s && s === o) return 0;
    if (null != t && t === e.id) return 5;
    if (null != i && (0, w.Z)(e.id, i.windowHandle)) return 4;
    if (null != l.find((t) => (0, w.Z)(e.id, t.windowHandle))) return 3;
    let a = null == r ? void 0 : r[o];
    return null != a && M.Mm.has(a) ? 2 : 1;
}
function H(e, t, n) {
    let r = (0, j.Z)({ location: D.dr.STREAM_SOURCE_SELECT });
    return i.useMemo(() => {
        if (null == n || !r) return null;
        for (let r of n) {
            var i, l;
            let n = t.find((e) => (0, w.Z)(r.id, e.windowHandle));
            if ((null == n ? void 0 : n.id) == null) continue;
            let s = (0, x.lQ)(e, n.id);
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
function W(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: l } = O.Z.useExperiment({ location: "GoLive_Source_Select" }),
        o = S.Z.supports(B.AN.GO_LIVE_HARDWARE),
        [a, p] = i.useState(null),
        [x, j] = i.useState(null),
        [y, C] = i.useState(null),
        w = null != y && y.length > 0,
        [P, T] = i.useState(c.vA.WINDOW),
        [I, E] = i.useState(!1),
        R = i.useRef(null),
        M = i.useRef(new u.Xp()),
        D = (0, d.e7)([_.ZP], () => _.ZP.getRunningGames()),
        U = H(
            (0, d.e7)([v.Z], () => v.Z.quests),
            D,
            x,
        ),
        W = i.useMemo(
            () =>
                null == x
                    ? null
                    : [...x].sort(
                          (e, t) => F(t, null == U ? void 0 : U.source.id) - F(e, null == U ? void 0 : U.source.id),
                      ),
            [U, x],
        );
    i.useEffect(() => {
        let e = M.current;
        return (
            (0, Z.t)({
                width: 176,
                height: 99,
            }).then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: r } = e;
                p(t), j(n), C(r);
            }),
            e.start(1000, async () => {
                let {
                    screenSources: e,
                    windowSources: t,
                    cameraSources: n,
                } = await (0, Z.t)({
                    width: 176,
                    height: 99,
                });
                p(e), j(t), C(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let z = i.useCallback((e) => {
            null !== e && ((R.current = e), E(!e.isScrolledToTop()));
        }, []),
        [V, J] = i.useState(void 0);
    i.useEffect(() => {
        g.Z.hasPermission(k.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }).then(J);
    }, []);
    let X = (function (e) {
        switch (e) {
            case c.vA.WINDOW:
                return W;
            case c.vA.SCREEN:
                return a;
            case c.vA.CAMERA:
                return y;
        }
    })(P);
    if (null == X)
        return !1 === V
            ? (0, r.jsxs)(f.Text, {
                  className: G.errorMessage,
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: [L.intl.string(L.t["kW5h/W"]), (0, r.jsx)("br", {}), L.intl.string(L.t["5Jvu1R"])],
              })
            : (0, r.jsx)(h.Z, {
                  className: G.spinner,
                  justify: h.Z.Justify.CENTER,
                  align: h.Z.Align.CENTER,
                  children: (0, r.jsx)(f.$jN, {}),
              });
    let K = X.map((e) => {
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
                    (0, r.jsx)(N.Z, { separator: I }),
                    (0, r.jsx)(f.sY7, {
                        options: (function () {
                            let e = [
                                {
                                    name: L.intl.string(L.t.tHoi7u),
                                    value: c.vA.WINDOW,
                                },
                                {
                                    name: L.intl.string(L.t["/iX8uz"]),
                                    value: c.vA.SCREEN,
                                },
                            ];
                            return (
                                l &&
                                    o &&
                                    w &&
                                    e.push({
                                        name: L.intl.string(L.t.cWt5Up),
                                        value: c.vA.CAMERA,
                                    }),
                                e
                            );
                        })(),
                        value: P,
                        onChange: (e) => {
                            let { value: t } = e;
                            return T(t);
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
                    null != e && E(!e.isScrolledToTop());
                },
                children: [
                    P === c.vA.WINDOW && null != U && (0, r.jsx)(b.Z, { quest: U.quest }),
                    (0, r.jsx)(m.Z, {
                        layout: m.Z.Layout.WRAP,
                        columns: 2,
                        className: G.sourceContainer,
                        children: K,
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
                name: L.intl.string(L.t.KKcy95),
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
                    children: L.intl.string(L.t.Yp6h5W),
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
    let { onSourceSelect: t, selectedSource: n } = e,
        [l, o] = i.useState([]),
        [c, d] = i.useState({}),
        h = i.useRef(new u.Xp());
    i.useEffect(() => {
        let e = h.current,
            t = () => {
                let e = Object.entries(S.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                o(e),
                    d(
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
    let m = i.useCallback(
            (e) => {
                var n;
                t({
                    id: e,
                    name: null != (n = c[e]) ? n : "",
                    url: "",
                });
            },
            [t, c],
        ),
        _ = (0, C.isMac)() && a().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, M.jR),
        g = (0, C.isMac)(),
        [x, v] = i.useState(!1),
        j = i.useCallback(() => {
            v(!x);
        }, [x]),
        b = _
            ? (0, r.jsx)(z, { onSelect: t })
            : (0, r.jsxs)("div", {
                  className: G.nativePickerTypes,
                  children: [
                      (0, r.jsx)(V, {
                          onSelect: t,
                          id: "screen",
                          name: L.intl.string(L.t.R4wpLN),
                          text: L.intl.string(L.t.cVUFXY),
                          icon: f.pzj,
                      }),
                      (0, r.jsx)(V, {
                          onSelect: t,
                          id: "window",
                          name: L.intl.string(L.t["+SLJCh"]),
                          text: L.intl.string(L.t.dG2A1E),
                          icon: f.GON,
                      }),
                      g
                          ? (0, r.jsx)(V, {
                                onSelect: t,
                                id: "app",
                                name: L.intl.string(L.t.ct7AKQ),
                                text: L.intl.string(L.t["8lQwf8"]),
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
                children: L.intl.string(L.t.XyYoFc),
            }),
            b,
            0 === l.length
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(G.nativePickerCaptureSection, x ? null : G.nativePickerCollapsed),
                      children: [
                          (0, r.jsxs)(f.P3F, {
                              onClick: j,
                              className: G.nativePickerLabel,
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      className: G.nativeCaptureDevicesText,
                                      variant: "text-md/semibold",
                                      color: "interactive-normal",
                                      children: L.intl.string(L.t.rO0Vix),
                                  }),
                                  (0, r.jsx)(f.CJ0, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: G.captureDevicesToggleIndicator,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: G.nativePickerCaptureList,
                              children: (0, r.jsx)(f.FXm, {
                                  value: null == n ? void 0 : n.id,
                                  onChange: m,
                                  options: l.map((e) => {
                                      let [t, n] = e;
                                      return {
                                          name: n.name,
                                          value: "camera:" + n.id,
                                          leadingIcon: f.Odl,
                                      };
                                  }),
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
            (0, C.isLinux)() ||
            ((0, C.isMac)() && a().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, M.jR))
                ? (0, P.T)(l)
                : (0, P.t)();
        }, [l]),
        s === T.Uc.Error
            ? (0, r.jsx)(f.Text, {
                  className: G.errorMessage,
                  variant: "text-md/normal",
                  color: "text-danger",
                  children: null != o && o.length > 0 ? o : L.intl.string(L.t.CKsXk3),
              })
            : (0, r.jsx)(R.Z, {
                  animated: !0,
                  className: G.nativePickerGuide,
              })
    );
}
