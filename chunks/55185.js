n.d(t, {
    I: () => T,
    N: () => Z,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    o = n(793030),
    a = n(442837),
    s = n(381499),
    c = n(481060),
    u = n(695346),
    d = n(675478),
    p = n(885110),
    f = n(63063),
    h = n(316496),
    g = n(223730),
    m = n(981631),
    b = n(933554),
    O = n(388032),
    _ = n(87587),
    y = n(354810);
async function v(e) {
    await d.hW.updateAsync(
        "status",
        (t) => {
            (t.status = s.Gm.create({ value: e })), (t.statusExpiresAtMs = "0");
        },
        d.fy.INFREQUENT_USER_ACTION,
    );
}
function j(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: _.goOnlineButton,
        children: (0, i.jsx)(c.zxk, {
            variant: "primary",
            size: "sm",
            text: O.intl.string(b.default.Poezn5),
            onClick: () => {
                t(), v(c.Skl.ONLINE);
            },
            fullWidth: !0,
        }),
    });
}
function C(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1, closePopout: l } = e,
        o = (0, a.e7)([p.Z], () => p.Z.getStatus()),
        { showLinkToSettings: s } = (0, h.D)("popout");
    return (0, i.jsxs)("div", {
        className: _.toggleContainer,
        children: [
            (0, i.jsxs)("div", {
                className: _.toggleContainerText,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: O.intl.string(O.t.KY0ilp),
                    }),
                    n &&
                        (0, i.jsxs)("div", {
                            className: _.toggleContainerOnlineRow,
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
                    r && s && (0, i.jsx)(g.K, { onClosePopout: l }),
                ],
            }),
            (0, i.jsx)(c.rsf, {
                onChange: (e) => {
                    u.G6.updateSetting(e), n && v(e ? c.Skl.ONLINE : c.Skl.INVISIBLE);
                },
                checked: t,
            }),
        ],
    });
}
function E(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, c.Tbt)(r);
    let s = u.G6.useSetting(),
        d = (0, a.e7)([p.Z], () => p.Z.getStatus()) === c.Skl.INVISIBLE && s;
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
                                    src: y.Z,
                                    className: _.controllerImage,
                                }),
                                (0, i.jsx)(o.X6, {
                                    variant: "heading-md/bold",
                                    color: "header-primary",
                                    className: _.nuxTitle,
                                    children: O.intl.string(d ? b.default.MkgMBw : O.t.PRjSRk),
                                }),
                            ],
                        }),
                    t,
                ],
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: _.closeButton,
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
function x(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(E, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: _.nuxContent,
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: _.toggleContainerWrapper,
                children: (0, i.jsx)(C, {
                    showCurrentGame: n,
                    shouldShowCustomizeLink: !0,
                    closePopout: t,
                }),
            }),
        ],
    });
}
function S(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(E, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: _.nuxContent,
                children: O.intl.format(b.default["vtp/IS"], {
                    learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(j, { closePopout: t }),
        ],
    });
}
function P(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(E, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: _.nuxContent,
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)("div", {
                className: _.toggleContainerWrapper,
                children: (0, i.jsx)(C, {
                    showCurrentGame: n,
                    shouldShowStatus: !0,
                    closePopout: t,
                }),
            }),
        ],
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, h.D)("popout");
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(C, {
                showCurrentGame: n,
                closePopout: t,
            }),
            (0, i.jsx)(c.$i$, { className: _.divider }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            r && (0, i.jsx)(g.y, { onClosePopout: t }),
        ],
    });
}
function N(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: "heading-sm/semibold",
                color: "header-primary",
                className: _.controlTitle,
                children: O.intl.string(b.default.MkgMBw),
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: O.intl.format(b.default["vtp/IS"], {
                    learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
                }),
            }),
            (0, i.jsx)(j, { closePopout: t }),
        ],
    });
}
function w(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, h.D)("popout");
    return (0, i.jsxs)(E, {
        children: [
            (0, i.jsx)(C, {
                showCurrentGame: n,
                shouldShowStatus: !0,
                closePopout: t,
            }),
            (0, i.jsx)(c.$i$, { className: _.divider }),
            (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: O.intl.format(b.default.nHDuwM, {
                    learnMoreLink: f.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS),
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
function T(e) {
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
            return (0, i.jsx)(S, { closePopout: n });
        case 2:
            return (0, i.jsx)(P, { closePopout: n });
        case 3:
            return (0, i.jsx)(I, { closePopout: n });
        case 4:
            return (0, i.jsx)(N, { closePopout: n });
        case 5:
            return (0, i.jsx)(w, { closePopout: n });
        default:
            return null;
    }
}
