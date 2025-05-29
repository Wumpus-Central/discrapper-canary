n.d(t, {
    I: () => I,
    N: () => P
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
    f = n(981631),
    g = n(797910),
    m = n(388032),
    b = n(22275),
    y = n(354810);
async function O(e) {
    await d.hW.updateAsync(
        'status',
        (t) => {
            (t.status = a.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        d.fy.INFREQUENT_USER_ACTION
    );
}
function _(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        r = (0, s.e7)([h.Z], () => h.Z.getStatus());
    return (0, i.jsxs)('div', {
        className: b.toggleContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.toggleContainerText,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: m.intl.string(m.t.KY0ilp)
                    }),
                    n &&
                        (0, i.jsxs)('div', {
                            className: b.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(c.qbd, {
                                    status: c.Skl.ONLINE,
                                    size: 8
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: r === c.Skl.INVISIBLE ? m.intl.string(g.default.a3AofX) : m.intl.string(m.t.WbGtnJ)
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(c.rsf, {
                onChange: (e) => {
                    u.G6.updateSetting(e), n && O(e ? c.Skl.ONLINE : c.Skl.INVISIBLE);
                },
                checked: t
            })
        ]
    });
}
function v(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    return (
        (0, c.Tbt)(r),
        (0, i.jsxs)('div', {
            className: b.wrapper,
            ref: r,
            children: [
                null != n && (0, i.jsx)('div', { className: b.gradient }),
                (0, i.jsxs)('div', {
                    className: b.content,
                    children: [
                        null != n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(c.zxk, {
                                        className: b.closeButton,
                                        'aria-label': m.intl.string(m.t.cpT0Cg),
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
                                        src: y.Z,
                                        className: b.controllerImage
                                    }),
                                    (0, i.jsx)(o.X6, {
                                        variant: 'heading-md/bold',
                                        color: 'header-primary',
                                        className: b.nuxTitle,
                                        children: m.intl.string(m.t.PRjSRk)
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
function C(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(v, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: b.nuxContent,
                children: m.intl.format(m.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: b.toggleContainerWrapper,
                children: (0, i.jsx)(_, { showCurrentGame: n })
            })
        ]
    });
}
function j(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(v, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: b.nuxContent,
                children: m.intl.format(m.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: b.toggleContainerWrapper,
                children: (0, i.jsx)(_, {
                    showCurrentGame: n,
                    shouldShowStatus: !0
                })
            })
        ]
    });
}
function S() {
    let e = u.G6.useSetting();
    return (0, i.jsxs)(v, {
        children: [
            (0, i.jsx)(_, { showCurrentGame: e }),
            (0, i.jsx)(c.$i$, { className: b.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: m.intl.format(m.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
            })
        ]
    });
}
function E(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(v, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: b.controlTitle,
                children: m.intl.string(g.default.qKDqen)
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: m.intl.format(m.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(c.zxk, {
                className: b.goOnlineButton,
                look: c.zxk.Looks.FILLED,
                size: c.zxk.Sizes.SMALL,
                color: c.zxk.Colors.GREEN,
                onClick: () => {
                    t(), O(c.Skl.ONLINE);
                },
                fullWidth: !0,
                children: m.intl.string(g.default.Poezn5)
            })
        ]
    });
}
function x() {
    let e = u.G6.useSetting();
    return (0, i.jsxs)(v, {
        children: [
            (0, i.jsx)(_, {
                showCurrentGame: e,
                shouldShowStatus: !0
            }),
            (0, i.jsx)(c.$i$, { className: b.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: m.intl.format(m.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(f.BhN.ACTIVITY_STATUS_SETTINGS) })
            })
        ]
    });
}
var P = (((r = {})[(r.ActivityNux = 0)] = 'ActivityNux'), (r[(r.ActivityAndStatusNux = 1)] = 'ActivityAndStatusNux'), (r[(r.Activity = 2)] = 'Activity'), (r[(r.Status = 3)] = 'Status'), (r[(r.ActivityAndStatus = 4)] = 'ActivityAndStatus'), r);
function I(e) {
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
            return (0, i.jsx)(j, { closePopout: n });
        case 2:
            return (0, i.jsx)(S, {});
        case 3:
            return (0, i.jsx)(E, { closePopout: n });
        case 4:
            return (0, i.jsx)(x, {});
        default:
            return null;
    }
}
