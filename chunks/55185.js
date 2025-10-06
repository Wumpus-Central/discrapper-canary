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
    p = n(316496),
    h = n(223730),
    f = n(893867),
    g = n(388032),
    m = n(515438),
    b = n(354810);
function _(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: m.goOnlineButton,
        children: (0, i.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(f.default.Poezn5),
            onClick: () => {
                t(), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function y(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, o.e7)([d.Z], () => d.Z.getStatus());
    return (0, i.jsxs)("div", {
        className: m.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: m.toggleContainerText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: g.intl.string(f.default.WhdCGB),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: m.toggleContainerOnlineRow,
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
                                            ? g.intl.string(f.default.a3AofX)
                                            : g.intl.string(g.t.WbGtnJ),
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
            className: m.wrapper,
            ref: n,
            children: (0, i.jsx)("div", {
                className: m.content,
                children: t,
            }),
        })
    );
}
function v(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, p.D)("popout");
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsx)(y, { showCurrentGame: n }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: g.intl.string(f.default["7cfFoa"]),
            }),
            r &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.izJ, { className: m.divider }), (0, i.jsx)(h.yj, { onClosePopout: t })],
                }),
        ],
    });
}
function j(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsxs)(s.Kqy, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        color: "header-primary",
                        className: m.controlTitle,
                        children: g.intl.string(f.default["5YsmGB"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: m.toggleContainerOnlineRow,
                        children: [
                            (0, i.jsx)(s.qbd, {
                                status: s.Skl.ONLINE,
                                size: 8,
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-secondary",
                                children: g.intl.string(f.default.U8MFdX),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: g.intl.string(f.default.Yl0mh4),
            }),
            (0, i.jsx)(_, { closePopout: t }),
        ],
    });
}
function x(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, p.D)("popout");
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsx)(y, {
                showCurrentGame: n,
                shouldShowStatus: !0,
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: g.intl.string(f.default["7cfFoa"]),
            }),
            r &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.izJ, { className: m.divider }), (0, i.jsx)(h.yj, { onClosePopout: t })],
                }),
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
        [p, m] = (0, l.useState)(n),
        _ = (0, l.useRef)(null),
        y = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: g.intl.string(f.default.vxVbGB),
                        body: [g.intl.string(f.default["7cfFoa"])],
                        action: {
                            text: g.intl.string(f.default.k4tCg4),
                            onClick: () => {
                                u.G6.updateSetting(!0);
                            },
                        },
                        textLink: {
                            text: g.intl.string(g.t["ZrN+DQ"]),
                            onClick: h.S$,
                        },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: g.intl.string(f.default.qKDqen),
                        body: [g.intl.string(f.default.Yl0mh4)],
                        action: {
                            text: g.intl.string(f.default.Poezn5),
                            onClick: () => {
                                (0, c.Z)({ nextStatus: s.Skl.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: g.intl.string(f.default["6cA8HR"]),
                        body: [g.intl.string(f.default["7cfFoa"])],
                        action: {
                            text: g.intl.string(f.default.k4tCg4),
                            onClick: () => {
                                u.G6.updateSetting(!0), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
                            },
                        },
                        textLink: {
                            text: g.intl.string(g.t["ZrN+DQ"]),
                            onClick: h.S$,
                        },
                    };
                case 3:
                    return {
                        type: "popout",
                        children: v,
                    };
                case 4:
                    return {
                        type: "popout",
                        children: j,
                    };
                case 5:
                    return {
                        type: "popout",
                        children: x,
                    };
                default:
                    return null;
            }
        })(p),
        O = (0, l.useRef)(t);
    if (
        ((0, l.useEffect)(() => {
            t && !O.current && m(n), t !== O.current && (O.current = t);
        }, [n, t]),
        null == y || !t)
    )
        return d;
    if ("popover" === y.type) {
        var C, E;
        let { action: e, title: t, body: n, textLink: l } = y;
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
                        src: b.Z,
                    },
                    actions: [
                        ((C = (function (e) {
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
                        (E = E =
                            {
                                onClick: (t) => {
                                    var n;
                                    null == (n = e.onClick) || n.call(e, t), r();
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(E))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(E)).forEach(function (e) {
                                  Object.defineProperty(C, e, Object.getOwnPropertyDescriptor(E, e));
                              }),
                        C),
                    ],
                }),
                d,
            ],
        });
    }
    let { children: S } = y;
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
