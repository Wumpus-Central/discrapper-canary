(n.d(t, {
    I: () => A,
    N: () => Z
}),
    n(388685));
var r,
    i = n(255367),
    l = n(73800),
    o = n(793030),
    a = n(442837),
    s = n(381499),
    c = n(755721),
    u = n(481060),
    d = n(695346),
    h = n(675478),
    p = n(885110),
    f = n(63063),
    g = n(316496),
    m = n(223730),
    b = n(981631),
    _ = n(29953),
    O = n(388032),
    y = n(22275),
    C = n(354810);
async function v(e) {
    await h.hW.updateAsync(
        'status',
        (t) => {
            ((t.status = s.Gm.create({ value: e })), (t.statusExpiresAtMs = '0'));
        },
        h.fy.INFREQUENT_USER_ACTION
    );
}
function j(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)('div', {
        'data-button-hoisted-classname-wrapper': !0,
        className: y.goOnlineButton,
        children: (0, i.jsx)(u.zxk, {
            variant: 'primary',
            size: 'sm',
            text: O.intl.string(_.default.Poezn5),
            onClick: () => {
                (t(), v(u.Skl.ONLINE));
            },
            fullWidth: !0
        })
    });
}
function E(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1, closePopout: l } = e,
        o = (0, a.e7)([p.Z], () => p.Z.getStatus()),
        { showLinkToSettings: s } = (0, g.D)('popout');
    return (0, i.jsxs)('div', {
        className: y.toggleContainer,
        children: [
            (0, i.jsxs)('div', {
                className: y.toggleContainerText,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: O.intl.string(O.t.KY0ilp)
                    }),
                    n &&
                        (0, i.jsxs)('div', {
                            className: y.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(u.qbd, {
                                    status: u.Skl.ONLINE,
                                    size: 8
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: o === u.Skl.INVISIBLE ? O.intl.string(_.default.a3AofX) : O.intl.string(O.t.WbGtnJ)
                                })
                            ]
                        }),
                    r && s && (0, i.jsx)(m.K, { onClosePopout: l })
                ]
            }),
            (0, i.jsx)(u.rsf, {
                onChange: (e) => {
                    (d.G6.updateSetting(e), n && v(e ? u.Skl.ONLINE : u.Skl.INVISIBLE));
                },
                checked: t
            })
        ]
    });
}
function S(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, u.Tbt)(r);
    let s = d.G6.useSetting(),
        h = (0, a.e7)([p.Z], () => p.Z.getStatus()) === u.Skl.INVISIBLE && s;
    return (0, i.jsxs)('div', {
        className: y.wrapper,
        ref: r,
        children: [
            null != n && (0, i.jsx)('div', { className: y.gradient }),
            (0, i.jsxs)('div', {
                className: y.content,
                children: [
                    null != n &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.zx, {
                                    className: y.closeButton,
                                    'aria-label': O.intl.string(O.t.cpT0Cg),
                                    look: c.zx.Looks.BLANK,
                                    size: c.zx.Sizes.NONE,
                                    onClick: n,
                                    children: (0, i.jsx)(u.Dio, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                }),
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: C.Z,
                                    className: y.controllerImage
                                }),
                                (0, i.jsx)(o.X6, {
                                    variant: 'heading-md/bold',
                                    color: 'header-primary',
                                    className: y.nuxTitle,
                                    children: O.intl.string(h ? _.default.MkgMBw : O.t.PRjSRk)
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
        n = d.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: y.nuxContent,
                children: O.intl.format(_.default.nHDuwM, { learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: y.toggleContainerWrapper,
                children: (0, i.jsx)(E, {
                    showCurrentGame: n,
                    shouldShowCustomizeLink: !0,
                    closePopout: t
                })
            })
        ]
    });
}
function I(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: y.nuxContent,
                children: O.intl.format(_.default['vtp/IS'], { learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(j, { closePopout: t })
        ]
    });
}
function P(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: y.nuxContent,
                children: O.intl.format(_.default.nHDuwM, { learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: y.toggleContainerWrapper,
                children: (0, i.jsx)(E, {
                    showCurrentGame: n,
                    shouldShowStatus: !0,
                    closePopout: t
                })
            })
        ]
    });
}
function N(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting(),
        { showLinkToSettings: r } = (0, g.D)('popout');
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(E, {
                showCurrentGame: n,
                closePopout: t
            }),
            (0, i.jsx)(u.$i$, { className: y.divider }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: O.intl.format(_.default.nHDuwM, { learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            r && (0, i.jsx)(m.y, { onClosePopout: t })
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
                className: y.controlTitle,
                children: O.intl.string(_.default.MkgMBw)
            }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: O.intl.format(_.default['vtp/IS'], { learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(j, { closePopout: t })
        ]
    });
}
function T(e) {
    let { closePopout: t } = e,
        n = d.G6.useSetting(),
        { showLinkToSettings: r } = (0, g.D)('popout');
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(E, {
                showCurrentGame: n,
                shouldShowStatus: !0,
                closePopout: t
            }),
            (0, i.jsx)(u.$i$, { className: y.divider }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: O.intl.format(_.default.nHDuwM, { learnMoreLink: f.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            r && (0, i.jsx)(m.y, { onClosePopout: t })
        ]
    });
}
var Z = (((r = {})[(r.ActivityNux = 0)] = 'ActivityNux'), (r[(r.StatusNux = 1)] = 'StatusNux'), (r[(r.ActivityAndStatusNux = 2)] = 'ActivityAndStatusNux'), (r[(r.Activity = 3)] = 'Activity'), (r[(r.Status = 4)] = 'Status'), (r[(r.ActivityAndStatus = 5)] = 'ActivityAndStatus'), r);
function A(e) {
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
            return (0, i.jsx)(I, { closePopout: n });
        case 2:
            return (0, i.jsx)(P, { closePopout: n });
        case 3:
            return (0, i.jsx)(N, { closePopout: n });
        case 4:
            return (0, i.jsx)(w, { closePopout: n });
        case 5:
            return (0, i.jsx)(T, { closePopout: n });
        default:
            return null;
    }
}
