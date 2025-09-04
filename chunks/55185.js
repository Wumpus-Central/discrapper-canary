n.d(t, {
    I: () => w,
    N: () => Z,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    o = n(793030),
    a = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(246133),
    d = n(695346),
    p = n(885110),
    h = n(63063),
    f = n(316496),
    g = n(223730),
    m = n(981631),
    b = n(933554),
    O = n(388032),
    y = n(87587),
    _ = n(354810);
function v(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: y.goOnlineButton,
        children: (0, i.jsx)(c.zxk, {
            variant: "primary",
            size: "sm",
            text: O.intl.string(b.default.Poezn5),
            onClick: () => {
                t(), (0, u.Z)({ nextStatus: c.Skl.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function j(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1, closePopout: l } = e,
        o = (0, a.e7)([p.Z], () => p.Z.getStatus()),
        { showLinkToSettings: h } = (0, f.D)("popout");
    return (0, i.jsxs)("div", {
        className: y.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: y.toggleContainerText,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: O.intl.string(O.t.KY0ilp),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: y.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(c.qbd, {
                                    status: c.Skl.ONLINE,
                                    size: 8,
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-secondary",
                                    children:
                                        o === c.Skl.INVISIBLE
                                            ? O.intl.string(b.default.a3AofX)
                                            : O.intl.string(O.t.WbGtnJ),
                                }),
                            ],
                        }),
                    r && h && (0, i.jsx)(g.K, { onClosePopout: l }),
                ],
            }),
            (0, i.jsx)(s.T2, {
                onChange: (e) => {
                    d.G6.updateSetting(e), n && (0, u.Z)({ nextStatus: e ? c.Skl.ONLINE : c.Skl.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function x(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, c.Tbt)(r);
    let s = d.G6.useSetting(),
        u = (0, a.e7)([p.Z], () => p.Z.getStatus()) === c.Skl.INVISIBLE && s;
    return (0, i.jsxs)("div", {
        className: y.wrapper,
        ref: r,
        children: [
            null != n && (0, i.jsx)("div", { className: y.gradient }),
            (0, i.jsxs)("div", {
                className: y.content,
                children: [
                    null != n &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("img", {
                                    alt: "",
                                    src: _.Z,
                                    className: y.controllerImage,
                                }),
                                (0, i.jsx)(o.X6, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    className: y.nuxTitle,
                                    children: O.intl.string(u ? b.default.MkgMBw : O.t.PRjSRk),
                                }),
                            ],
                        }),
                    t,
                ],
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: y.closeButton,
                    children: (0, i.jsx)(c.hU, {
                        icon: c.Dio,
                        onClick: n,
                        "aria-label": O.intl.string(O.t.cpT0Cg),
                        variant: "icon-only",
                        size: "sm",
                    }),
                }),
        ],
    });
}
function C(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting();
    return (0, i.jsxs)(x, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: y.nuxContent,
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: h.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: y.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
                    showCurrentGame: n,
                    shouldShowCustomizeLink: !0,
                    closePopout: t,
                }),
            }),
        ],
    });
}
function E(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(x, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: y.nuxContent,
                children: O.intl.format(b.default["vtp/IS"], {
                    learnMoreLink: h.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(v, { closePopout: t }),
        ],
    });
}
function S(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting();
    return (0, i.jsxs)(x, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: y.nuxContent,
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: h.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: y.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
                    showCurrentGame: n,
                    shouldShowStatus: !0,
                    closePopout: t,
                }),
            }),
        ],
    });
}
function P(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting(),
        { showLinkToSettings: r } = (0, f.D)("popout");
    return (0, i.jsxs)(x, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: n,
                closePopout: t,
            }),
            (0, i.jsx)(c.$i$, { className: y.divider }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: h.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            r && (0, i.jsx)(g.y, { onClosePopout: t }),
        ],
    });
}
function I(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(x, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: "heading-sm/semibold",
                color: "header-primary",
                className: y.controlTitle,
                children: O.intl.string(b.default.MkgMBw),
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: O.intl.format(b.default["vtp/IS"], {
                    learnMoreLink: h.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(v, { closePopout: t }),
        ],
    });
}
function N(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting(),
        { showLinkToSettings: r } = (0, f.D)("popout");
    return (0, i.jsxs)(x, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: n,
                shouldShowStatus: !0,
                closePopout: t,
            }),
            (0, i.jsx)(c.$i$, { className: y.divider }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: h.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            r && (0, i.jsx)(g.y, { onClosePopout: t }),
        ],
    });
}
var Z =
    (((r = {})[(r.ActivityNux = 0)] = "ActivityNux"),
    (r[(r.StatusNux = 1)] = "StatusNux"),
    (r[(r.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (r[(r.Activity = 3)] = "Activity"),
    (r[(r.Status = 4)] = "Status"),
    (r[(r.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    r);
function w(e) {
    let { popoutState: t, closePopout: n, onOpen: r } = e,
        [o] = (0, l.useState)(t);
    switch (
        ((0, l.useEffect)(() => {
            r();
        }, [r]),
        o)
    ) {
        case 0:
            return (0, i.jsx)(C, { closePopout: n });
        case 1:
            return (0, i.jsx)(E, { closePopout: n });
        case 2:
            return (0, i.jsx)(S, { closePopout: n });
        case 3:
            return (0, i.jsx)(P, { closePopout: n });
        case 4:
            return (0, i.jsx)(I, { closePopout: n });
        case 5:
            return (0, i.jsx)(N, { closePopout: n });
        default:
            return null;
    }
}
