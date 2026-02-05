n.d(t, { u5: () => S, zd: () => b });
var i,
    l = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(342494),
    o = n(397927),
    d = n(827827),
    c = n(253932),
    u = n(461213),
    h = n(481045),
    A = n(536482),
    g = n(985018),
    m = n(761960),
    p = n(233732);
function _(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: m.K2,
        children: (0, l.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(A.default.Poezn1),
            onClick: () => {
                t(), (0, d.A)({ nextStatus: o.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function x(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, a.bG)([u.A], () => u.A.getStatus());
    return (0, l.jsxs)("div", {
        className: m.E3,
        children: [
            (0, l.jsxs)("div", {
                className: m.fu,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: g.intl.string(A.default.WhdCGP),
                    }),
                    n &&
                        (0, l.jsxs)("div", {
                            className: m.$v,
                            children: [
                                (0, l.jsx)(o.nW6, { status: o.clD.ONLINE, size: 8 }),
                                (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === o.clD.INVISIBLE
                                            ? g.intl.string(A.default.a3AofS)
                                            : g.intl.string(g.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(o.dOG, {
                onChange: (e) => {
                    c.tz.updateSetting(e), n && (0, d.A)({ nextStatus: e ? o.clD.ONLINE : o.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function f(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, o.tjt)(n),
        (0, l.jsx)("div", { className: m.iE, ref: n, children: (0, l.jsx)("div", { className: m.Qs, children: t }) })
    );
}
function E(e) {
    let { closePopout: t } = e,
        n = c.tz.useSetting();
    return (0, l.jsxs)(f, {
        children: [
            (0, l.jsx)(x, { showCurrentGame: n }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: g.intl.string(A.default["7cfFob"]),
            }),
            (0, l.jsx)(o.cGx, { className: m.yF }),
            (0, l.jsx)(h.qA, { onClosePopout: t }),
        ],
    });
}
function C(e) {
    let { closePopout: t } = e;
    return (0, l.jsxs)(f, {
        children: [
            (0, l.jsxs)(o.BJc, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: m._M,
                        children: g.intl.string(A.default["5YsmGI"]),
                    }),
                    (0, l.jsxs)("div", {
                        className: m.$v,
                        children: [
                            (0, l.jsx)(o.nW6, { status: o.clD.ONLINE, size: 8 }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: g.intl.string(A.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: g.intl.string(A.default.Yl0mh4),
            }),
            (0, l.jsx)(_, { closePopout: t }),
        ],
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = c.tz.useSetting();
    return (0, l.jsxs)(f, {
        children: [
            (0, l.jsx)(x, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: g.intl.string(A.default["7cfFob"]),
            }),
            (0, l.jsx)(o.cGx, { className: m.yF }),
            (0, l.jsx)(h.qA, { onClosePopout: t }),
        ],
    });
}
var S =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function b(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: a, children: u } = e,
        [m, _] = (0, s.useState)(n),
        x = (0, s.useRef)(null),
        f = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: g.intl.string(A.default.vxVbGP),
                        body: [g.intl.string(A.default["7cfFob"])],
                        action: {
                            text: g.intl.string(A.default.k4tCg2),
                            onClick: () => {
                                c.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: g.intl.string(g.t["ZrN+DT"]), onClick: h.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: g.intl.string(A.default.qKDqet),
                        body: [g.intl.string(A.default.Yl0mh4)],
                        action: {
                            text: g.intl.string(A.default.Poezn1),
                            onClick: () => {
                                (0, d.A)({ nextStatus: o.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: g.intl.string(A.default["6cA8HZ"]),
                        body: [g.intl.string(A.default["7cfFob"])],
                        action: {
                            text: g.intl.string(A.default.k4tCg2),
                            onClick: () => {
                                c.tz.updateSetting(!0), (0, d.A)({ nextStatus: o.clD.ONLINE });
                            },
                        },
                        textLink: { text: g.intl.string(g.t["ZrN+DT"]), onClick: h.L7 },
                    };
                case 3:
                    return { type: "popout", children: E };
                case 4:
                    return { type: "popout", children: C };
                case 5:
                    return { type: "popout", children: I };
                default:
                    return null;
            }
        })(m),
        S = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !S.current && _(n), t !== S.current && (S.current = t);
        }, [n, t]),
        null == f || !t)
    )
        return u;
    if ("popover" === f.type) {
        let { action: e, title: t, body: n, textLink: s } = f;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.AM, {
                    targetElementRef: a,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: i,
                    title: t,
                    body: n,
                    textLink: s,
                    gradientColor: "purple",
                    graphic: { type: "image", src: p.A },
                    actions: [
                        {
                            ...e,
                            onClick: (t) => {
                                e.onClick?.(t), i();
                            },
                        },
                    ],
                }),
                u,
            ],
        });
    }
    let { children: b } = f;
    return (0, l.jsx)(o.YNO, {
        targetElementRef: x,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(b, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, l.jsx)(o.DUT, { innerRef: x, onClick: i, children: u }),
    });
}
