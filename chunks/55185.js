n.d(t, {
    I: () => A,
    N: () => T
}),
    n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(793030),
    a = n(442837),
    s = n(381499),
    c = n(481060),
    u = n(230711),
    d = n(100527),
    p = n(906732),
    h = n(695346),
    f = n(675478),
    g = n(885110),
    m = n(63063),
    b = n(981631),
    _ = n(676654),
    y = n(388032),
    v = n(22275),
    O = n(204794);
async function j(e) {
    await f.hW.updateAsync(
        'status',
        (t) => {
            (t.status = s.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        f.fy.INFREQUENT_USER_ACTION
    );
}
function C(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, a.e7)([g.Z], () => g.Z.getStatus());
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
                    h.G6.updateSetting(e), n && j(e ? c.Skl.ONLINE : c.Skl.INVISIBLE);
                },
                checked: t
            })
        ]
    });
}
function x(e) {
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
function S(e) {
    let { closePopout: t } = e,
        { analyticsLocations: n } = (0, p.ZP)(d.Z.SHARING_CONTROLS_COACHMARK),
        r = h.G6.useSetting();
    return (0, i.jsxs)(x, {
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
                children: (0, i.jsx)(C, { showCurrentGame: r })
            })
        ]
    });
}
function P(e) {
    let { closePopout: t } = e,
        { analyticsLocations: n } = (0, p.ZP)(d.Z.SHARING_CONTROLS_COACHMARK),
        r = h.G6.useSetting();
    return (0, i.jsxs)(x, {
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
                children: (0, i.jsx)(C, { showCurrentGame: r })
            })
        ]
    });
}
function I(e) {
    let { closePopout: t } = e,
        n = h.G6.useSetting();
    return (0, i.jsxs)(x, {
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
                children: (0, i.jsx)(C, { showCurrentGame: n })
            })
        ]
    });
}
function N(e) {
    let { closePopout: t } = e,
        n = h.G6.useSetting();
    return (0, i.jsxs)(x, {
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
                children: (0, i.jsx)(C, {
                    showCurrentGame: n,
                    shouldShowStatus: !0
                })
            })
        ]
    });
}
function Z() {
    let e = h.G6.useSetting();
    return (0, i.jsxs)(x, {
        children: [
            (0, i.jsx)(C, { showCurrentGame: e }),
            (0, i.jsx)(c.$i$, { className: v.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: y.NW.format(y.t.fF2TbW, { helpDeskUrl: m.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS) })
            })
        ]
    });
}
function E(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(x, {
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
                    t(), j(c.Skl.ONLINE);
                },
                fullWidth: !0,
                children: y.NW.string(_.Z.Poezn5)
            })
        ]
    });
}
function w() {
    let e = h.G6.useSetting();
    return (0, i.jsxs)(x, {
        children: [
            (0, i.jsx)(C, {
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
            return (0, i.jsx)(S, { closePopout: n });
        case 1:
            return (0, i.jsx)(I, { closePopout: n });
        case 2:
            return (0, i.jsx)(N, { closePopout: n });
        case 3:
            return (0, i.jsx)(P, { closePopout: n });
        case 4:
            return (0, i.jsx)(Z, {});
        case 5:
            return (0, i.jsx)(E, { closePopout: n });
        case 6:
            return (0, i.jsx)(w, {});
        default:
            return null;
    }
}
