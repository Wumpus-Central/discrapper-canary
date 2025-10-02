n.d(t, {
    I: () => w,
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
    m = n(893867),
    b = n(388032),
    _ = n(515438),
    O = n(354810);
function y(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: _.goOnlineButton,
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
function j(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1, closePopout: l } = e,
        o = (0, a.e7)([d.Z], () => d.Z.getStatus()),
        { showLinkToSettings: p } = (0, h.D)("popout");
    return (0, i.jsxs)("div", {
        className: _.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: _.toggleContainerText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: b.intl.string(b.t.KY0ilp),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: _.toggleContainerOnlineRow,
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
function v(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, s.Tbt)(r);
    let c = u.G6.useSetting(),
        p = (0, a.e7)([d.Z], () => d.Z.getStatus()) === s.Skl.INVISIBLE && c;
    return (0, i.jsxs)("div", {
        className: _.wrapper,
        ref: r,
        children: [
            null != n && (0, i.jsx)("div", { className: _.gradient }),
            (0, i.jsxs)("div", {
                className: _.content,
                children: [
                    null != n &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("img", {
                                    alt: "",
                                    src: O.Z,
                                    className: _.controllerImage,
                                }),
                                (0, i.jsx)(o.X6q, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    className: _.nuxTitle,
                                    children: b.intl.string(p ? m.default.MkgMBw : b.t.PRjSRk),
                                }),
                            ],
                        }),
                    t,
                ],
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: _.closeButton,
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
    return (0, i.jsxs)(v, {
        closePopout: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: _.nuxContent,
                children: b.intl.format(m.default.nHDuwM, {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: _.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
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
    return (0, i.jsxs)(v, {
        closePopout: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: _.nuxContent,
                children: b.intl.format(m.default["vtp/IS"], {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(y, { closePopout: t }),
        ],
    });
}
function E(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(v, {
        closePopout: t,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: _.nuxContent,
                children: b.intl.format(m.default.nHDuwM, {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: _.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
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
    return (0, i.jsxs)(v, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: n,
                closePopout: t,
            }),
            (0, i.jsx)(s.izJ, { className: _.divider }),
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
    return (0, i.jsxs)(v, {
        children: [
            (0, i.jsx)(o.X6q, {
                variant: "heading-sm/semibold",
                color: "header-primary",
                className: _.controlTitle,
                children: b.intl.string(m.default.MkgMBw),
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: b.intl.format(m.default["vtp/IS"], {
                    learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(y, { closePopout: t }),
        ],
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, h.D)("popout");
    return (0, i.jsxs)(v, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: n,
                shouldShowStatus: !0,
                closePopout: t,
            }),
            (0, i.jsx)(s.izJ, { className: _.divider }),
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
