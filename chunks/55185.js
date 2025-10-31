n.d(t, {
    I: () => E,
    NK: () => C,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    o = n(442837),
    a = n(907862),
    s = n(481060),
    c = n(246133),
    u = n(695346),
    d = n(885110),
    p = n(223730),
    f = n(500275),
    h = n(388032),
    g = n(87587),
    m = n(354810);
function b(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: g.goOnlineButton,
        children: (0, i.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: h.intl.string(f.default.Poezn1),
            onClick: () => {
                t(), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function _(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, o.e7)([d.Z], () => d.Z.getStatus());
    return (0, i.jsxs)("div", {
        className: g.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: g.toggleContainerText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: h.intl.string(f.default.WhdCGP),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: g.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(s.qbd, {
                                    status: s.Skl.ONLINE,
                                    size: 8,
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-secondary",
                                    children:
                                        r === s.Skl.INVISIBLE
                                            ? h.intl.string(f.default.a3AofS)
                                            : h.intl.string(h.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(s.rsf, {
                onChange: (e) => {
                    u.G6.updateSetting(e), n && (0, c.Z)({ nextStatus: e ? s.Skl.ONLINE : s.Skl.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function O(e) {
    let { children: t } = e,
        n = (0, l.useRef)(null);
    return (
        (0, s.Tbt)(n),
        (0, i.jsx)("div", {
            className: g.wrapper,
            ref: n,
            children: (0, i.jsx)("div", {
                className: g.content,
                children: t,
            }),
        })
    );
}
function y(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsx)(_, { showCurrentGame: n }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: h.intl.string(f.default["7cfFob"]),
            }),
            (0, i.jsx)(s.izJ, { className: g.divider }),
            (0, i.jsx)(p.yj, { onClosePopout: t }),
        ],
    });
}
function v(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsxs)(s.Kqy, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-primary",
                        className: g.controlTitle,
                        children: h.intl.string(f.default["5YsmGI"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: g.toggleContainerOnlineRow,
                        children: [
                            (0, i.jsx)(s.qbd, {
                                status: s.Skl.ONLINE,
                                size: 8,
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-secondary",
                                children: h.intl.string(f.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: h.intl.string(f.default.Yl0mh4),
            }),
            (0, i.jsx)(b, { closePopout: t }),
        ],
    });
}
function j(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsx)(_, {
                showCurrentGame: n,
                shouldShowStatus: !0,
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: h.intl.string(f.default["7cfFob"]),
            }),
            (0, i.jsx)(s.izJ, { className: g.divider }),
            (0, i.jsx)(p.yj, { onClosePopout: t }),
        ],
    });
}
var C =
    (((r = {})[(r.ActivityNux = 0)] = "ActivityNux"),
    (r[(r.StatusNux = 1)] = "StatusNux"),
    (r[(r.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (r[(r.Activity = 3)] = "Activity"),
    (r[(r.Status = 4)] = "Status"),
    (r[(r.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    r);
function E(e) {
    let { showPopout: t, popoutState: n, handleClose: r, popoutTargetRef: o, children: d } = e,
        [g, b] = (0, l.useState)(n),
        _ = (0, l.useRef)(null),
        O = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: h.intl.string(f.default.vxVbGP),
                        body: [h.intl.string(f.default["7cfFob"])],
                        action: {
                            text: h.intl.string(f.default.k4tCg2),
                            onClick: () => {
                                u.G6.updateSetting(!0);
                            },
                        },
                        textLink: {
                            text: h.intl.string(h.t["ZrN+DT"]),
                            onClick: p.S$,
                        },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: h.intl.string(f.default.qKDqet),
                        body: [h.intl.string(f.default.Yl0mh4)],
                        action: {
                            text: h.intl.string(f.default.Poezn1),
                            onClick: () => {
                                (0, c.Z)({ nextStatus: s.Skl.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: h.intl.string(f.default["6cA8HZ"]),
                        body: [h.intl.string(f.default["7cfFob"])],
                        action: {
                            text: h.intl.string(f.default.k4tCg2),
                            onClick: () => {
                                u.G6.updateSetting(!0), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
                            },
                        },
                        textLink: {
                            text: h.intl.string(h.t["ZrN+DT"]),
                            onClick: p.S$,
                        },
                    };
                case 3:
                    return {
                        type: "popout",
                        children: y,
                    };
                case 4:
                    return {
                        type: "popout",
                        children: v,
                    };
                case 5:
                    return {
                        type: "popout",
                        children: j,
                    };
                default:
                    return null;
            }
        })(g),
        C = (0, l.useRef)(t);
    if (
        ((0, l.useEffect)(() => {
            t && !C.current && b(n), t !== C.current && (C.current = t);
        }, [n, t]),
        null == O || !t)
    )
        return d;
    if ("popover" === O.type) {
        var E, x;
        let { action: e, title: t, body: n, textLink: l } = O;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.J2, {
                    targetElementRef: o,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: r,
                    title: t,
                    body: n,
                    textLink: l,
                    gradientColor: "purple",
                    graphic: {
                        type: "image",
                        src: m.Z,
                    },
                    actions: [
                        ((E = (function (e) {
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
                        })({}, e)),
                        (x = x =
                            {
                                onClick: (t) => {
                                    var n;
                                    null == (n = e.onClick) || n.call(e, t), r();
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(x))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(x)).forEach(function (e) {
                                  Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(x, e));
                              }),
                        E),
                    ],
                }),
                d,
            ],
        });
    }
    let { children: S } = O;
    return (0, i.jsx)(s.yRy, {
        targetElementRef: _,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S, { closePopout: t });
        },
        onRequestClose: r,
        children: () =>
            (0, i.jsx)(s.P3F, {
                innerRef: _,
                onClick: r,
                children: d,
            }),
    });
}
