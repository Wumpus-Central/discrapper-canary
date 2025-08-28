n.d(t, {
    I: () => Z,
    N: () => N,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    o = n(793030),
    a = n(442837),
    s = n(481060),
    c = n(246133),
    u = n(695346),
    d = n(885110),
    p = n(63063),
    h = n(316496),
    f = n(223730),
    g = n(981631),
    m = n(933554),
    b = n(388032),
    O = n(87587),
    y = n(354810);
function _(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: O.goOnlineButton,
        children: (0, i.jsx)(s.zxk, {
            variant: "primary",
            size: "sm",
            text: b.intl.string(m.default.Poezn5),
            onClick: () => {
                t(), (0, c.Z)({ nextStatus: s.Skl.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function v(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1, closePopout: l } = e,
        o = (0, a.e7)([d.Z], () => d.Z.getStatus()),
        { showLinkToSettings: p } = (0, h.D)("popout");
    return (0, i.jsxs)("div", {
        className: O.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: O.toggleContainerText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: b.intl.string(b.t.KY0ilp),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: O.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(s.qbd, {
                                    status: s.Skl.ONLINE,
                                    size: 8,
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-secondary",
                                    children:
                                        o === s.Skl.INVISIBLE
                                            ? b.intl.string(m.default.a3AofX)
                                            : b.intl.string(b.t.WbGtnJ),
                                }),
                            ],
                        }),
                    r && p && (0, i.jsx)(f.K, { onClosePopout: l }),
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
function j(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, s.Tbt)(r);
    let c = u.G6.useSetting(),
        p = (0, a.e7)([d.Z], () => d.Z.getStatus()) === s.Skl.INVISIBLE && c;
    return (0, i.jsxs)("div", {
        className: O.wrapper,
        ref: r,
        children: [
            null != n && (0, i.jsx)("div", { className: O.gradient }),
            (0, i.jsxs)("div", {
                className: O.content,
                children: [
                    null != n &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("img", {
                                    alt: "",
                                    src: y.Z,
                                    className: O.controllerImage,
                                }),
                                (0, i.jsx)(o.X6, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    className: O.nuxTitle,
                                    children: b.intl.string(p ? m.default.MkgMBw : b.t.PRjSRk),
                                }),
                            ],
                        }),
                    t,
                ],
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: O.closeButton,
                    children: (0, i.jsx)(s.hU, {
                        icon: s.Dio,
                        onClick: n,
                        "aria-label": b.intl.string(b.t.cpT0Cg),
                        variant: "icon-only",
                        size: "sm",
                    }),
                }),
        ],
    });
}
function x(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: O.nuxContent,
                children: b.intl.format(m.default.nHDuwM, {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(v, {
                    showCurrentGame: n,
                    shouldShowCustomizeLink: !0,
                    closePopout: t,
                }),
            }),
        ],
    });
}
function C(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: O.nuxContent,
                children: b.intl.format(m.default["vtp/IS"], {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(_, { closePopout: t }),
        ],
    });
}
function E(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: O.nuxContent,
                children: b.intl.format(m.default.nHDuwM, {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(v, {
                    showCurrentGame: n,
                    shouldShowStatus: !0,
                    closePopout: t,
                }),
            }),
        ],
    });
}
function S(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, h.D)("popout");
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(v, {
                showCurrentGame: n,
                closePopout: t,
            }),
            (0, i.jsx)(s.$i$, { className: O.divider }),
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: b.intl.format(m.default.nHDuwM, {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            r && (0, i.jsx)(f.y, { onClosePopout: t }),
        ],
    });
}
function P(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: "heading-sm/semibold",
                color: "header-primary",
                className: O.controlTitle,
                children: b.intl.string(m.default.MkgMBw),
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: b.intl.format(m.default["vtp/IS"], {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(_, { closePopout: t }),
        ],
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, h.D)("popout");
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(v, {
                showCurrentGame: n,
                shouldShowStatus: !0,
                closePopout: t,
            }),
            (0, i.jsx)(s.$i$, { className: O.divider }),
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: b.intl.format(m.default.nHDuwM, {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            r && (0, i.jsx)(f.y, { onClosePopout: t }),
        ],
    });
}
var N =
    (((r = {})[(r.ActivityNux = 0)] = "ActivityNux"),
    (r[(r.StatusNux = 1)] = "StatusNux"),
    (r[(r.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (r[(r.Activity = 3)] = "Activity"),
    (r[(r.Status = 4)] = "Status"),
    (r[(r.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    r);
function Z(e) {
    let { popoutState: t, closePopout: n, onOpen: r } = e,
        [o] = (0, l.useState)(t);
    switch (
        ((0, l.useEffect)(() => {
            r();
        }, [r]),
        o)
    ) {
        case 0:
            return (0, i.jsx)(x, { closePopout: n });
        case 1:
            return (0, i.jsx)(C, { closePopout: n });
        case 2:
            return (0, i.jsx)(E, { closePopout: n });
        case 3:
            return (0, i.jsx)(S, { closePopout: n });
        case 4:
            return (0, i.jsx)(P, { closePopout: n });
        case 5:
            return (0, i.jsx)(I, { closePopout: n });
        default:
            return null;
    }
}
