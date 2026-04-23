n.d(t, { u5: () => G, zd: () => M });
var i,
    l = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(265486),
    o = n(821609),
    d = n(652215),
    c = n(834730),
    u = n(935154),
    h = n(243721),
    A = n(315710),
    _ = n(404778),
    m = n(331322),
    g = n(534514),
    p = n(265872),
    f = n(939249),
    E = n(827827),
    x = n(253932),
    I = n(461213),
    C = n(481045),
    b = n(395277),
    N = n(985018),
    S = n(982375),
    v = n(233732);
function T(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: S.K2,
        children: (0, l.jsx)(o.$, {
            variant: "primary",
            size: "sm",
            text: N.intl.string(b.default.Poezn1),
            onClick: () => {
                t(), (0, E.A)({ nextStatus: d.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function y(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, a.bG)([I.A], () => I.A.getStatus());
    return (0, l.jsxs)("div", {
        className: S.E3,
        children: [
            (0, l.jsxs)("div", {
                className: S.fu,
                children: [
                    (0, l.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: N.intl.string(b.default.WhdCGP),
                    }),
                    n &&
                        (0, l.jsxs)("div", {
                            className: S.$v,
                            children: [
                                (0, l.jsx)(u.nW, { status: d.clD.ONLINE, size: 8 }),
                                (0, l.jsx)(c.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === d.clD.INVISIBLE
                                            ? N.intl.string(b.default.a3AofS)
                                            : N.intl.string(N.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(h.d, {
                onChange: (e) => {
                    x.tz.updateSetting(e), n && (0, E.A)({ nextStatus: e ? d.clD.ONLINE : d.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function j(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, A.t)(n),
        (0, l.jsx)("div", { className: S.iE, ref: n, children: (0, l.jsx)("div", { className: S.Qs, children: t }) })
    );
}
function R(e) {
    let { closePopout: t } = e,
        n = x.tz.useSetting();
    return (0, l.jsxs)(j, {
        children: [
            (0, l.jsx)(y, { showCurrentGame: n }),
            (0, l.jsx)(c.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: N.intl.string(b.default["7cfFob"]),
            }),
            (0, l.jsx)(_.c, { className: S.yF }),
            (0, l.jsx)(C.qA, { onClosePopout: t }),
        ],
    });
}
function L(e) {
    let { closePopout: t } = e;
    return (0, l.jsxs)(j, {
        children: [
            (0, l.jsxs)(m.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, l.jsx)(g.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: S._M,
                        children: N.intl.string(b.default["5YsmGI"]),
                    }),
                    (0, l.jsxs)("div", {
                        className: S.$v,
                        children: [
                            (0, l.jsx)(u.nW, { status: d.clD.ONLINE, size: 8 }),
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: N.intl.string(b.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(c.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: N.intl.string(b.default.Yl0mh4),
            }),
            (0, l.jsx)(T, { closePopout: t }),
        ],
    });
}
function O(e) {
    let { closePopout: t } = e,
        n = x.tz.useSetting();
    return (0, l.jsxs)(j, {
        children: [
            (0, l.jsx)(y, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, l.jsx)(c.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: N.intl.string(b.default["7cfFob"]),
            }),
            (0, l.jsx)(_.c, { className: S.yF }),
            (0, l.jsx)(C.qA, { onClosePopout: t }),
        ],
    });
}
var G =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function M(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: a, children: o } = e,
        [c, u] = (0, s.useState)(n),
        h = (0, s.useRef)(null),
        A = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: N.intl.string(b.default.vxVbGP),
                        body: [N.intl.string(b.default["7cfFob"])],
                        action: {
                            text: N.intl.string(b.default.k4tCg2),
                            onClick: () => {
                                x.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: N.intl.string(N.t["ZrN+DT"]), onClick: C.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: N.intl.string(b.default.qKDqet),
                        body: [N.intl.string(b.default.Yl0mh4)],
                        action: {
                            text: N.intl.string(b.default.Poezn1),
                            onClick: () => {
                                (0, E.A)({ nextStatus: d.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: N.intl.string(b.default["6cA8HZ"]),
                        body: [N.intl.string(b.default["7cfFob"])],
                        action: {
                            text: N.intl.string(b.default.k4tCg2),
                            onClick: () => {
                                x.tz.updateSetting(!0), (0, E.A)({ nextStatus: d.clD.ONLINE });
                            },
                        },
                        textLink: { text: N.intl.string(N.t["ZrN+DT"]), onClick: C.L7 },
                    };
                case 3:
                    return { type: "popout", children: R };
                case 4:
                    return { type: "popout", children: L };
                case 5:
                    return { type: "popout", children: O };
                default:
                    return null;
            }
        })(c),
        _ = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !_.current && u(n), t !== _.current && (_.current = t);
        }, [n, t]),
        null == A || !t)
    )
        return o;
    if ("popover" === A.type) {
        let { action: e, title: t, body: n, textLink: s } = A;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(r.A, {
                    targetElementRef: a,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: i,
                    title: t,
                    body: n,
                    textLink: s,
                    gradientColor: "purple",
                    graphic: { type: "image", src: v.A },
                    actions: [
                        {
                            ...e,
                            onClick: (t) => {
                                e.onClick?.(t), i();
                            },
                        },
                    ],
                }),
                o,
            ],
        });
    }
    let { children: m } = A;
    return (0, l.jsx)(p.Y, {
        targetElementRef: h,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(m, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, l.jsx)(f.D, { innerRef: h, onClick: i, children: o }),
    });
}
