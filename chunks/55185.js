n.d(t, {
    I: () => T,
    N: () => Z
}),
    n(388685);
var r,
    i = n(255367),
    l = n(73800),
    o = n(793030),
    s = n(442837),
    a = n(381499),
    c = n(481060),
    u = n(695346),
    d = n(675478),
    h = n(885110),
    p = n(63063),
    f = n(316496),
    g = n(223730),
    m = n(981631),
    b = n(29953),
    y = n(388032),
    O = n(22275),
    v = n(354810);
async function _(e) {
    await d.hW.updateAsync(
        'status',
        (t) => {
            (t.status = a.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        d.fy.INFREQUENT_USER_ACTION
    );
}
function C(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(c.zxk, {
        className: O.goOnlineButton,
        look: c.zxk.Looks.FILLED,
        size: c.zxk.Sizes.SMALL,
        color: c.zxk.Colors.BRAND,
        onClick: () => {
            t(), _(c.Skl.ONLINE);
        },
        fullWidth: !0,
        children: y.intl.string(b.default.Poezn5)
    });
}
function j(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1, closePopout: l } = e,
        o = (0, s.e7)([h.Z], () => h.Z.getStatus()),
        { showLinkToSettings: a } = (0, f.D)('popout');
    return (0, i.jsxs)('div', {
        className: O.toggleContainer,
        children: [
            (0, i.jsxs)('div', {
                className: O.toggleContainerText,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: y.intl.string(y.t.KY0ilp)
                    }),
                    n &&
                        (0, i.jsxs)('div', {
                            className: O.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(c.qbd, {
                                    status: c.Skl.ONLINE,
                                    size: 8
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: o === c.Skl.INVISIBLE ? y.intl.string(b.default.a3AofX) : y.intl.string(y.t.WbGtnJ)
                                })
                            ]
                        }),
                    r && a && (0, i.jsx)(g.K, { onClosePopout: l })
                ]
            }),
            (0, i.jsx)(c.rsf, {
                onChange: (e) => {
                    u.G6.updateSetting(e), n && _(e ? c.Skl.ONLINE : c.Skl.INVISIBLE);
                },
                checked: t
            })
        ]
    });
}
function S(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, c.Tbt)(r);
    let a = u.G6.useSetting(),
        d = (0, s.e7)([h.Z], () => h.Z.getStatus()) === c.Skl.INVISIBLE && a;
    return (0, i.jsxs)('div', {
        className: O.wrapper,
        ref: r,
        children: [
            null != n && (0, i.jsx)('div', { className: O.gradient }),
            (0, i.jsxs)('div', {
                className: O.content,
                children: [
                    null != n &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.zxk, {
                                    className: O.closeButton,
                                    'aria-label': y.intl.string(y.t.cpT0Cg),
                                    look: c.zxk.Looks.BLANK,
                                    size: c.zxk.Sizes.NONE,
                                    onClick: n,
                                    children: (0, i.jsx)(c.Dio, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: v.Z,
                                    className: O.controllerImage
                                }),
                                (0, i.jsx)(o.X6, {
                                    variant: 'heading-md/bold',
                                    color: 'header-primary',
                                    className: O.nuxTitle,
                                    children: y.intl.string(d ? b.default.MkgMBw : y.t.PRjSRk)
                                })
                            ]
                        }),
                    t
                ]
            })
        ]
    });
}
function x(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.nuxContent,
                children: y.intl.format(b.default.nHDuwM, { learnMoreLink: p.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
                    showCurrentGame: n,
                    shouldShowCustomizeLink: !0,
                    closePopout: t
                })
            })
        ]
    });
}
function E(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.nuxContent,
                children: y.intl.format(b.default['vtp/IS'], { learnMoreLink: p.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(C, { closePopout: t })
        ]
    });
}
function P(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.nuxContent,
                children: y.intl.format(b.default.nHDuwM, { learnMoreLink: p.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
                    showCurrentGame: n,
                    shouldShowStatus: !0,
                    closePopout: t
                })
            })
        ]
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, f.D)('popout');
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: n,
                closePopout: t
            }),
            (0, i.jsx)(c.$i$, { className: O.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(b.default.nHDuwM, { learnMoreLink: p.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            r && (0, i.jsx)(g.y, { onClosePopout: t })
        ]
    });
}
function w(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: O.controlTitle,
                children: y.intl.string(b.default.MkgMBw)
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(b.default['vtp/IS'], { learnMoreLink: p.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(C, { closePopout: t })
        ]
    });
}
function N(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting(),
        { showLinkToSettings: r } = (0, f.D)('popout');
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: n,
                shouldShowStatus: !0,
                closePopout: t
            }),
            (0, i.jsx)(c.$i$, { className: O.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(b.default.nHDuwM, { learnMoreLink: p.Z.getArticleURL(m.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            r && (0, i.jsx)(g.y, { onClosePopout: t })
        ]
    });
}
var Z = (((r = {})[(r.ActivityNux = 0)] = 'ActivityNux'), (r[(r.StatusNux = 1)] = 'StatusNux'), (r[(r.ActivityAndStatusNux = 2)] = 'ActivityAndStatusNux'), (r[(r.Activity = 3)] = 'Activity'), (r[(r.Status = 4)] = 'Status'), (r[(r.ActivityAndStatus = 5)] = 'ActivityAndStatus'), r);
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
            return (0, i.jsx)(E, { closePopout: n });
        case 2:
            return (0, i.jsx)(P, { closePopout: n });
        case 3:
            return (0, i.jsx)(I, { closePopout: n });
        case 4:
            return (0, i.jsx)(w, { closePopout: n });
        case 5:
            return (0, i.jsx)(N, { closePopout: n });
        default:
            return null;
    }
}
