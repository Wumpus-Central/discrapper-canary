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
    v = n(22275),
    O = n(204794);
async function C(e) {
    await f.hW.updateAsync(
        'status',
        (t) => {
            (t.status = a.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        f.fy.INFREQUENT_USER_ACTION
    );
}
function S(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, s.e7)([g.Z], () => g.Z.getStatus());
    return (0, i.jsxs)('div', {
        className: v.toggleContainer,
        children: [
            (0, i.jsxs)('div', {
                className: v.toggleContainerText,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: y.NW.string(y.t.KY0ilp)
                    }),
                    n &&
                        (0, i.jsxs)('div', {
                            className: v.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(c.qbd, {
                                    status: c.Skl.ONLINE,
                                    size: 8
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: r === c.Skl.INVISIBLE ? y.NW.string(_.Z.a3AofX) : y.NW.string(y.t.WbGtnJ)
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
function j(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    return (
        (0, c.Tbt)(r),
        (0, i.jsxs)('div', {
            className: v.wrapper,
            ref: r,
            children: [
                null != n && (0, i.jsx)('div', { className: v.gradient }),
                (0, i.jsxs)('div', {
                    className: v.content,
                    children: [
                        null != n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(c.zxk, {
                                        className: v.closeButton,
                                        'aria-label': y.NW.string(y.t.cpT0Cg),
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
                                        src: O.Z,
                                        className: v.controllerImage
                                    }),
                                    (0, i.jsx)(o.X6, {
                                        variant: 'heading-md/bold',
                                        color: 'header-primary',
                                        className: v.nuxTitle,
                                        children: y.NW.string(y.t.PRjSRk)
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
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.nuxContent,
                children: y.NW.format(y.t.nEgjjo, {
                    onClickSettings: () => {
                        t(), u.Z.open(b.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: n });
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: v.toggleContainerWrapper,
                children: (0, i.jsx)(S, { showCurrentGame: r })
            })
        ]
    });
}
function x(e) {
    let { closePopout: t } = e,
        { analyticsLocations: n } = (0, h.ZP)(d.Z.SHARING_CONTROLS_COACHMARK),
        r = p.G6.useSetting();
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: v.controlTitle,
                children: y.NW.string(y.t['6x5uWV'])
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.NW.format(y.t.nEgjjo, {
                    onClickSettings: () => {
                        t(), u.Z.open(b.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: n });
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: v.toggleContainerWrapper,
                children: (0, i.jsx)(S, { showCurrentGame: r })
            })
        ]
    });
}
function N(e) {
    let { closePopout: t } = e,
        n = p.G6.useSetting();
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.nuxContent,
                children: y.NW.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: v.toggleContainerWrapper,
                children: (0, i.jsx)(S, { showCurrentGame: n })
            })
        ]
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = p.G6.useSetting();
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.nuxContent,
                children: y.NW.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: v.toggleContainerWrapper,
                children: (0, i.jsx)(S, {
                    showCurrentGame: n,
                    shouldShowStatus: !0
                })
            })
        ]
    });
}
function P() {
    let e = p.G6.useSetting();
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(S, { showCurrentGame: e }),
            (0, i.jsx)(c.$i$, { className: v.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.NW.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            })
        ]
    });
}
function w(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: v.controlTitle,
                children: y.NW.string(_.Z.qKDqen)
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.NW.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(c.zxk, {
                className: v.goOnlineButton,
                look: c.zxk.Looks.FILLED,
                size: c.zxk.Sizes.SMALL,
                color: c.zxk.Colors.GREEN,
                onClick: () => {
                    t(), C(c.Skl.ONLINE);
                },
                fullWidth: !0,
                children: y.NW.string(_.Z.Poezn5)
            })
        ]
    });
}
function Z() {
    let e = p.G6.useSetting();
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(S, {
                showCurrentGame: e,
                shouldShowStatus: !0
            }),
            (0, i.jsx)(c.$i$, { className: v.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.NW.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
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
            return (0, i.jsx)(N, { closePopout: n });
        case 2:
            return (0, i.jsx)(I, { closePopout: n });
        case 3:
            return (0, i.jsx)(x, { closePopout: n });
        case 4:
            return (0, i.jsx)(P, {});
        case 5:
            return (0, i.jsx)(w, { closePopout: n });
        case 6:
            return (0, i.jsx)(Z, {});
        default:
            return null;
    }
}
