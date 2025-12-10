n.d(t, {
    Dp: () => N,
    Hh: () => P,
    ZP: () => R,
    hq: () => C,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(914010),
    f = n(594174),
    p = n(36703),
    _ = n(74538),
    m = n(125900),
    h = n(824690),
    g = n(240479),
    E = n(710111),
    b = n(388032),
    y = n(937309),
    O = n(463063);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C() {
    let { volume: e, onVolumeChange: t } = (0, h.Z)();
    return (0, r.jsxs)(u.P3F, {
        className: y.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: b.intl.string(b.t["2JbvKw"]),
            }),
            (0, r.jsx)(u.iRW, {
                onValueChange: t,
                className: y.slider,
                initialValue: (0, p.P)(e),
                maxValue: 100,
            }),
        ],
    });
}
function A(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, m.V2)({ location: "SoundmojiBanner" }),
        a = (0, s.e7)([f.default], () => _.ZP.canUseSoundboardEverywhere(f.default.getCurrentUser())),
        o = (0, s.e7)([d.Z], () => d.Z.getGuildId());
    return n || a || t.guildId === E.X8 || t.guildId === o || !i
        ? (0, r.jsx)(u.IGR, {
              text: "BETA",
              color: l.Z.colors.BACKGROUND_BRAND.css,
              className: y.betaBadge,
          })
        : (0, r.jsxs)("div", {
              className: y.infoNitroContainer,
              children: [
                  (0, r.jsx)("div", { className: y.infoNitroBackground }),
                  (0, r.jsxs)("div", {
                      className: y.infoNitroTextContainer,
                      children: [
                          (0, r.jsx)(u.SrA, {
                              size: "xxs",
                              color: "white",
                              className: y.infoNitroIcon,
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: y.infoNitroText,
                              children: b.intl.string(b.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(u.IGR, {
                              text: "BETA",
                              color: l.Z.colors.BACKGROUND_BRAND.css,
                              className: y.infoNitroBadge,
                          }),
                      ],
                  }),
              ],
          });
}
function N(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: o()(y.infoContainer, y.infoTooltip),
        children: [
            (0, r.jsx)(A, { sound: t }),
            (0, r.jsxs)("div", {
                className: y.infoSoundContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(u.KY1, {
                                size: "sm",
                                className: y.infoSoundIcon,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: y.infoSoundInnerContainer,
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
function P(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: o, setTooltipShowing: s, clickableClassName: l } = e,
        [d, f] = i.useState(!1),
        [p, _] = i.useState(String(Date.now())),
        m = i.useCallback(
            (e) => {
                e.stopPropagation(), f(!d);
            },
            [d],
        ),
        h = i.useCallback(() => {
            _(String(Date.now()));
        }, []),
        g = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        d ? null == (e = g.current) || e.focus() : null == (t = g.current) || t.blur(), null == s || s(d);
    }, [d, s]);
    let E = !d;
    return (0, r.jsx)(u.yRy, {
        targetElementRef: g,
        renderPopout: (e) =>
            (0, r.jsx)(u.P3F, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t(T(S({}, e), { refreshPosition: h })),
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
            (0, r.jsxs)(c.u, {
                onTooltipHide: () => {
                    E && (null == s || s(!1));
                },
                onTooltipShow: () => {
                    E && (null == s || s(!0));
                },
                text: a,
                position: "top",
                shouldShow: E,
                children: [
                    "(",
                    (0, r.jsx)(
                        u.P3F,
                        T(S({}, e), {
                            innerRef: g,
                            "aria-label": a,
                            onClick: m,
                            className: l,
                            children: o,
                        }),
                    ),
                ],
            }),
    });
}
function R(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(C, {}),
                tooltipText: b.intl.string(b.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(u.gj8, {
                    size: "md",
                    color: "currentColor",
                    className: O.secondaryIcon,
                }),
            }),
            (0, r.jsx)(P, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(
                        g.Z,
                        S(
                            {
                                sound: t,
                                channel: n,
                            },
                            e,
                        ),
                    ),
                tooltipText: b.intl.string(b.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(u.d3s, {
                    size: "md",
                    color: "currentColor",
                    className: O.secondaryIcon,
                }),
            }),
        ],
    });
}
