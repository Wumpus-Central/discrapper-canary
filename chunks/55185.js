n.d(t, {
    I: () => E,
    NK: () => x,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(442837),
    o = n(907862),
    s = n(481060),
    c = n(246133),
    u = n(695346),
    d = n(885110),
    f = n(223730),
    h = n(512929),
    p = n(388032),
    g = n(509780),
    b = n(273701);
function m(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: g.goOnlineButton,
        children: (0, i.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: p.intl.string(h.default.Poezn1),
            onClick: () => {
                t(), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function y(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, a.e7)([d.Z], () => d.Z.getStatus());
    return (0, i.jsxs)("div", {
        className: g.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: g.toggleContainerText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: p.intl.string(h.default.WhdCGP),
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
                                    color: "text-subtle",
                                    children:
                                        r === s.Skl.INVISIBLE
                                            ? p.intl.string(h.default.a3AofS)
                                            : p.intl.string(p.t.WbGtnH),
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
function v(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsx)(y, { showCurrentGame: n }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: p.intl.string(h.default["7cfFob"]),
            }),
            (0, i.jsx)(s.izJ, { className: g.divider }),
            (0, i.jsx)(f.yj, { onClosePopout: t }),
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
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-primary",
                        className: g.controlTitle,
                        children: p.intl.string(h.default["5YsmGI"]),
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
                                color: "text-subtle",
                                children: p.intl.string(h.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: p.intl.string(h.default.Yl0mh4),
            }),
            (0, i.jsx)(m, { closePopout: t }),
        ],
    });
}
function C(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(O, {
        children: [
            (0, i.jsx)(y, {
                showCurrentGame: n,
                shouldShowStatus: !0,
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: p.intl.string(h.default["7cfFob"]),
            }),
            (0, i.jsx)(s.izJ, { className: g.divider }),
            (0, i.jsx)(f.yj, { onClosePopout: t }),
        ],
    });
}
var x =
    (((r = {})[(r.ActivityNux = 0)] = "ActivityNux"),
    (r[(r.StatusNux = 1)] = "StatusNux"),
    (r[(r.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (r[(r.Activity = 3)] = "Activity"),
    (r[(r.Status = 4)] = "Status"),
    (r[(r.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    r);
function E(e) {
    let { showPopout: t, popoutState: n, handleClose: r, popoutTargetRef: a, children: d } = e,
        [g, m] = (0, l.useState)(n),
        y = (0, l.useRef)(null),
        O = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: p.intl.string(h.default.vxVbGP),
                        body: [p.intl.string(h.default["7cfFob"])],
                        action: {
                            text: p.intl.string(h.default.k4tCg2),
                            onClick: () => {
                                u.G6.updateSetting(!0);
                            },
                        },
                        textLink: {
                            text: p.intl.string(p.t["ZrN+DT"]),
                            onClick: f.S$,
                        },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: p.intl.string(h.default.qKDqet),
                        body: [p.intl.string(h.default.Yl0mh4)],
                        action: {
                            text: p.intl.string(h.default.Poezn1),
                            onClick: () => {
                                (0, c.Z)({ nextStatus: s.Skl.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: p.intl.string(h.default["6cA8HZ"]),
                        body: [p.intl.string(h.default["7cfFob"])],
                        action: {
                            text: p.intl.string(h.default.k4tCg2),
                            onClick: () => {
                                u.G6.updateSetting(!0), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
                            },
                        },
                        textLink: {
                            text: p.intl.string(p.t["ZrN+DT"]),
                            onClick: f.S$,
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
                        children: C,
                    };
                default:
                    return null;
            }
        })(g),
        x = (0, l.useRef)(t);
    if (
        ((0, l.useEffect)(() => {
            t && !x.current && m(n), t !== x.current && (x.current = t);
        }, [n, t]),
        null == O || !t)
    )
        return d;
    if ("popover" === O.type) {
        var E, S;
        let { action: e, title: t, body: n, textLink: l } = O;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.J2, {
                    targetElementRef: a,
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
                        (S = S =
                            {
                                onClick: (t) => {
                                    var n;
                                    null == (n = e.onClick) || n.call(e, t), r();
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(S))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(S)).forEach(function (e) {
                                  Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(S, e));
                              }),
                        E),
                    ],
                }),
                d,
            ],
        });
    }
    let { children: I } = O;
    return (0, i.jsx)(s.yRy, {
        targetElementRef: y,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I, { closePopout: t });
        },
        onRequestClose: r,
        children: () =>
            (0, i.jsx)(s.P3F, {
                innerRef: y,
                onClick: r,
                children: d,
            }),
    });
}
