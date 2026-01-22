n.d(t, {
    Ay: () => w,
    Gq: () => R,
    WE: () => N,
    qn: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(967198),
    f = n(287809),
    p = n(824744),
    _ = n(927578),
    h = n(704591),
    m = n(14400),
    g = n(277044),
    E = n(980504),
    b = n(985018),
    y = n(331129),
    O = n(125049);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function T() {
    let { volume: e, onVolumeChange: t } = (0, m.A)();
    return (0, r.jsxs)(u.DUT, {
        className: y.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: b.intl.string(b.t["2JbvKw"]),
            }),
            (0, r.jsx)(u.Apm, {
                onValueChange: t,
                className: y.aw,
                initialValue: (0, p.M)(e),
                maxValue: 100,
            }),
        ],
    });
}

function C(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, h.tj)({
            location: "SoundmojiBanner",
        }),
        a = (0, o.bG)([f.default], () => _.Ay.canUseSoundboardEverywhere(f.default.getCurrentUser())),
        s = (0, o.bG)([d.A], () => d.A.getGuildId());
    return n || a || t.guildId === E.mV || t.guildId === s || !i
        ? (0, r.jsx)(u.LpS, {
              text: "BETA",
              color: l.A.colors.BACKGROUND_BRAND.css,
              className: y.aZ,
          })
        : (0, r.jsxs)("div", {
              className: y.Mq,
              children: [
                  (0, r.jsx)("div", {
                      className: y.Nh,
                  }),
                  (0, r.jsxs)("div", {
                      className: y.Pc,
                      children: [
                          (0, r.jsx)(u.tvc, {
                              size: "xxs",
                              color: "white",
                              className: y.aJ,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: y.sD,
                              children: b.intl.string(b.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(u.LpS, {
                              text: "BETA",
                              color: l.A.colors.BACKGROUND_BRAND.css,
                              className: y.KD,
                          }),
                      ],
                  }),
              ],
          });
}

function N(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: s()(y.op, y.kX),
        children: [
            (0, r.jsx)(C, {
                sound: t,
            }),
            (0, r.jsxs)("div", {
                className: y.Br,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.tn,
                        children: [
                            (0, r.jsx)(u.JMI, {
                                size: "sm",
                                className: y.nR,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: y.tn,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: b.intl.string(b.t.D6eYmf),
                        }),
                    }),
                ],
            }),
        ],
    });
}

function R(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: s, setTooltipShowing: o, clickableClassName: l } = e,
        [d, f] = i.useState(!1),
        [p, _] = i.useState(String(Date.now())),
        h = i.useCallback(
            (e) => {
                e.stopPropagation(), f(!d);
            },
            [d],
        ),
        m = i.useCallback(() => {
            _(String(Date.now()));
        }, []),
        g = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        d ? null == (e = g.current) || e.focus() : null == (t = g.current) || t.blur(), null == o || o(d);
    }, [d, o]);
    let E = !d;
    return (0, r.jsx)(u.YNO, {
        targetElementRef: g,
        renderPopout: (e) =>
            (0, r.jsx)(u.DUT, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t(
                    I(v({}, e), {
                        refreshPosition: m,
                    }),
                ),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => f(!1),
        animationPosition: "bottom",
        positionKey: p,
        scrollBehavior: "close",
        children: (e) =>
            (0, r.jsx)(c.m, {
                onTooltipHide: () => {
                    E && (null == o || o(!1));
                },
                onTooltipShow: () => {
                    E && (null == o || o(!0));
                },
                text: a,
                position: "top",
                shouldShow: E,
                children: (0, r.jsx)(
                    u.DUT,
                    I(v({}, e), {
                        innerRef: g,
                        "aria-label": a,
                        onClick: h,
                        className: l,
                        children: s,
                    }),
                ),
            }),
    });
}

function w(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(T, {}),
                tooltipText: b.intl.string(b.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(u.HKD, {
                    size: "md",
                    color: "currentColor",
                    className: O.Wo,
                }),
            }),
            (0, r.jsx)(R, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(
                        g.A,
                        v(
                            {
                                sound: t,
                                channel: n,
                            },
                            e,
                        ),
                    ),
                tooltipText: b.intl.string(b.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(u.mir, {
                    size: "md",
                    color: "currentColor",
                    className: O.Wo,
                }),
            }),
        ],
    });
}
