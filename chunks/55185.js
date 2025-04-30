n.d(t, {
    I: () => A,
    N: () => T
}),
    n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(793030),
    s = n(442837),
    a = n(381499),
    c = n(481060),
    u = n(230711),
    d = n(100527),
    h = n(906732),
    p = n(695346),
    f = n(675478),
    g = n(885110),
    m = n(63063),
    b = n(981631),
    _ = n(676654),
    y = n(388032),
    O = n(22275),
    v = n(204794);
async function C(e) {
    await f.hW.updateAsync(
        'status',
        (t) => {
            (t.status = a.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        f.fy.INFREQUENT_USER_ACTION
    );
}
function j(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, s.e7)([g.Z], () => g.Z.getStatus());
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
                                    children: r === c.Skl.INVISIBLE ? y.intl.string(_.default.a3AofX) : y.intl.string(y.t.WbGtnJ)
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(c.rsf, {
                onChange: (e) => {
                    p.G6.updateSetting(e), n && C(e ? c.Skl.ONLINE : c.Skl.INVISIBLE);
                },
                checked: t
            })
        ]
    });
}
function S(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    return (
        (0, c.Tbt)(r),
        (0, i.jsxs)('div', {
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
                                        children: y.intl.string(y.t.PRjSRk)
                                    })
                                ]
                            }),
                        t
                    ]
                })
            ]
        })
    );
}
function E(e) {
    let { closePopout: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(d.Z.SHARING_CONTROLS_COACHMARK),
        r = p.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.nuxContent,
                children: y.intl.format(y.t.nEgjjo, {
                    onClickSettings: () => {
                        t(), u.Z.open(b.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: n });
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(j, { showCurrentGame: r })
            })
        ]
    });
}
function x(e) {
    let { closePopout: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(d.Z.SHARING_CONTROLS_COACHMARK),
        r = p.G6.useSetting();
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: O.controlTitle,
                children: y.intl.string(y.t['6x5uWV'])
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(y.t.nEgjjo, {
                    onClickSettings: () => {
                        t(), u.Z.open(b.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: n });
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(j, { showCurrentGame: r })
            })
        ]
    });
}
function P(e) {
    let { closePopout: t } = e,
        n = p.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.nuxContent,
                children: y.intl.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(j, { showCurrentGame: n })
            })
        ]
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = p.G6.useSetting();
    return (0, i.jsxs)(S, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.nuxContent,
                children: y.intl.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: O.toggleContainerWrapper,
                children: (0, i.jsx)(j, {
                    showCurrentGame: n,
                    shouldShowStatus: !0
                })
            })
        ]
    });
}
function w() {
    let e = p.G6.useSetting();
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(j, { showCurrentGame: e }),
            (0, i.jsx)(c.$i$, { className: O.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            })
        ]
    });
}
function N(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: O.controlTitle,
                children: y.intl.string(_.default.qKDqen)
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(c.zxk, {
                className: O.goOnlineButton,
                look: c.zxk.Looks.FILLED,
                size: c.zxk.Sizes.SMALL,
                color: c.zxk.Colors.GREEN,
                onClick: () => {
                    t(), C(c.Skl.ONLINE);
                },
                fullWidth: !0,
                children: y.intl.string(_.default.Poezn5)
            })
        ]
    });
}
function Z() {
    let e = p.G6.useSetting();
    return (0, i.jsxs)(S, {
        children: [
            (0, i.jsx)(j, {
                showCurrentGame: e,
                shouldShowStatus: !0
            }),
            (0, i.jsx)(c.$i$, { className: O.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.intl.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            })
        ]
    });
}
var T = (((r = {})[(r.ActivityNux = 0)] = 'ActivityNux'), (r[(r.NewActivityNux = 1)] = 'NewActivityNux'), (r[(r.ActivityAndStatusNux = 2)] = 'ActivityAndStatusNux'), (r[(r.Activity = 3)] = 'Activity'), (r[(r.NewActivity = 4)] = 'NewActivity'), (r[(r.Status = 5)] = 'Status'), (r[(r.ActivityAndStatus = 6)] = 'ActivityAndStatus'), r);
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
            return (0, i.jsx)(E, { closePopout: n });
        case 1:
            return (0, i.jsx)(P, { closePopout: n });
        case 2:
            return (0, i.jsx)(I, { closePopout: n });
        case 3:
            return (0, i.jsx)(x, { closePopout: n });
        case 4:
            return (0, i.jsx)(w, {});
        case 5:
            return (0, i.jsx)(N, { closePopout: n });
        case 6:
            return (0, i.jsx)(Z, {});
        default:
            return null;
    }
}
