n.d(t, { u5: () => N, zd: () => T });
var i,
    l = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(342494),
    o = n(397927),
    c = n(827827),
    d = n(253932),
    u = n(461213),
    h = n(481045),
    A = n(536482),
    _ = n(985018),
    m = n(373431),
    g = n(233732);
function p(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: m.K2,
        children: (0, l.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: _.intl.string(A.default.Poezn1),
            onClick: () => {
                t(), (0, c.A)({ nextStatus: o.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function f(e) {
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
                        children: _.intl.string(A.default.WhdCGP),
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
                                            ? _.intl.string(A.default.a3AofS)
                                            : _.intl.string(_.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(o.dOG, {
                onChange: (e) => {
                    d.tz.updateSetting(e), n && (0, c.A)({ nextStatus: e ? o.clD.ONLINE : o.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function x(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, o.tjt)(n),
        (0, l.jsx)("div", { className: m.iE, ref: n, children: (0, l.jsx)("div", { className: m.Qs, children: t }) })
    );
}
function E(e) {
    let { closePopout: t } = e,
        n = d.tz.useSetting();
    return (0, l.jsxs)(x, {
        children: [
            (0, l.jsx)(f, { showCurrentGame: n }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: _.intl.string(A.default["7cfFob"]),
            }),
            (0, l.jsx)(o.cGx, { className: m.yF }),
            (0, l.jsx)(h.qA, { onClosePopout: t }),
        ],
    });
}
function I(e) {
    let { closePopout: t } = e;
    return (0, l.jsxs)(x, {
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
                        children: _.intl.string(A.default["5YsmGI"]),
                    }),
                    (0, l.jsxs)("div", {
                        className: m.$v,
                        children: [
                            (0, l.jsx)(o.nW6, { status: o.clD.ONLINE, size: 8 }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: _.intl.string(A.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: _.intl.string(A.default.Yl0mh4),
            }),
            (0, l.jsx)(p, { closePopout: t }),
        ],
    });
}
function C(e) {
    let { closePopout: t } = e,
        n = d.tz.useSetting();
    return (0, l.jsxs)(x, {
        children: [
            (0, l.jsx)(f, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: _.intl.string(A.default["7cfFob"]),
            }),
            (0, l.jsx)(o.cGx, { className: m.yF }),
            (0, l.jsx)(h.qA, { onClosePopout: t }),
        ],
    });
}
var N =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function T(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: a, children: u } = e,
        [m, p] = (0, s.useState)(n),
        f = (0, s.useRef)(null),
        x = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: _.intl.string(A.default.vxVbGP),
                        body: [_.intl.string(A.default["7cfFob"])],
                        action: {
                            text: _.intl.string(A.default.k4tCg2),
                            onClick: () => {
                                d.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: _.intl.string(_.t["ZrN+DT"]), onClick: h.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: _.intl.string(A.default.qKDqet),
                        body: [_.intl.string(A.default.Yl0mh4)],
                        action: {
                            text: _.intl.string(A.default.Poezn1),
                            onClick: () => {
                                (0, c.A)({ nextStatus: o.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: _.intl.string(A.default["6cA8HZ"]),
                        body: [_.intl.string(A.default["7cfFob"])],
                        action: {
                            text: _.intl.string(A.default.k4tCg2),
                            onClick: () => {
                                d.tz.updateSetting(!0), (0, c.A)({ nextStatus: o.clD.ONLINE });
                            },
                        },
                        textLink: { text: _.intl.string(_.t["ZrN+DT"]), onClick: h.L7 },
                    };
                case 3:
                    return { type: "popout", children: E };
                case 4:
                    return { type: "popout", children: I };
                case 5:
                    return { type: "popout", children: C };
                default:
                    return null;
            }
        })(m),
        N = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !N.current && p(n), t !== N.current && (N.current = t);
        }, [n, t]),
        null == x || !t)
    )
        return u;
    if ("popover" === x.type) {
        let { action: e, title: t, body: n, textLink: s } = x;
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
                    graphic: { type: "image", src: g.A },
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
    let { children: T } = x;
    return (0, l.jsx)(o.YNO, {
        targetElementRef: f,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(T, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, l.jsx)(o.DUT, { innerRef: f, onClick: i, children: u }),
    });
}
