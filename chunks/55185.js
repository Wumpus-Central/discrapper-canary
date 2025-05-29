n.d(t, {
    I: () => Z,
    N: () => N
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
    f = n(223730),
    g = n(981631),
    m = n(797910),
    b = n(388032),
    y = n(22275),
    O = n(354810);
async function v(e) {
    await d.hW.updateAsync(
        'status',
        (t) => {
            (t.status = a.Gm.create({ value: e })), (t.statusExpiresAtMs = '0');
        },
        d.fy.INFREQUENT_USER_ACTION
    );
}
function _(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(c.zxk, {
        className: y.goOnlineButton,
        look: c.zxk.Looks.FILLED,
        size: c.zxk.Sizes.SMALL,
        color: c.zxk.Colors.BRAND,
        onClick: () => {
            t(), v(c.Skl.ONLINE);
        },
        fullWidth: !0,
        children: b.intl.string(m.default.Poezn5)
    });
}
function C(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1, shouldShowCustomizeLink: r = !1 } = e,
        l = (0, s.e7)([h.Z], () => h.Z.getStatus());
    return (0, i.jsxs)('div', {
        className: y.toggleContainer,
        children: [
            (0, i.jsxs)('div', {
                className: y.toggleContainerText,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: b.intl.string(b.t.KY0ilp)
                    }),
                    n &&
                        (0, i.jsxs)('div', {
                            className: y.toggleContainerOnlineRow,
                            children: [
                                (0, i.jsx)(c.qbd, {
                                    status: c.Skl.ONLINE,
                                    size: 8
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: l === c.Skl.INVISIBLE ? b.intl.string(m.default.a3AofX) : b.intl.string(b.t.WbGtnJ)
                                })
                            ]
                        }),
                    r && (0, i.jsx)(f.K, {})
                ]
            }),
            (0, i.jsx)(c.rsf, {
                onChange: (e) => {
                    u.G6.updateSetting(e), n && v(e ? c.Skl.ONLINE : c.Skl.INVISIBLE);
                },
                checked: t
            })
        ]
    });
}
function j(e) {
    let { children: t, closePopout: n } = e,
        r = (0, l.useRef)(null);
    (0, c.Tbt)(r);
    let a = u.G6.useSetting(),
        d = (0, s.e7)([h.Z], () => h.Z.getStatus()) === c.Skl.INVISIBLE && a;
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
                                (0, i.jsx)(c.zxk, {
                                    className: y.closeButton,
                                    'aria-label': b.intl.string(b.t.cpT0Cg),
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
                                    className: y.controllerImage
                                }),
                                (0, i.jsx)(o.X6, {
                                    variant: 'heading-md/bold',
                                    color: 'header-primary',
                                    className: y.nuxTitle,
                                    children: b.intl.string(d ? m.default.MkgMBw : b.t.PRjSRk)
                                })
                            ]
                        }),
                    t
                ]
            })
        ]
    });
}
function S(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: y.nuxContent,
                children: b.intl.format(b.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: y.toggleContainerWrapper,
                children: (0, i.jsx)(C, {
                    showCurrentGame: n,
                    shouldShowCustomizeLink: !0
                })
            })
        ]
    });
}
function E(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: y.nuxContent,
                children: b.intl.format(m.default.ZMYkIS, { learnMoreLink: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(_, { closePopout: t })
        ]
    });
}
function x(e) {
    let { closePopout: t } = e,
        n = u.G6.useSetting();
    return (0, i.jsxs)(j, {
        closePopout: t,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: y.nuxContent,
                children: b.intl.format(b.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)('div', {
                className: y.toggleContainerWrapper,
                children: (0, i.jsx)(C, {
                    showCurrentGame: n,
                    shouldShowStatus: !0
                })
            })
        ]
    });
}
function P() {
    let e = u.G6.useSetting();
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(C, { showCurrentGame: e }),
            (0, i.jsx)(c.$i$, { className: y.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: b.intl.format(b.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(f.y, {})
        ]
    });
}
function I(e) {
    let { closePopout: t } = e;
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(o.X6, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: y.controlTitle,
                children: b.intl.string(m.default.MkgMBw)
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: b.intl.format(b.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(_, { closePopout: t })
        ]
    });
}
function w() {
    let e = u.G6.useSetting();
    return (0, i.jsxs)(j, {
        children: [
            (0, i.jsx)(C, {
                showCurrentGame: e,
                shouldShowStatus: !0
            }),
            (0, i.jsx)(c.$i$, { className: y.divider }),
            (0, i.jsx)(c.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: b.intl.format(b.t.fF2TbW, { helpDeskUrl: p.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS) })
            }),
            (0, i.jsx)(f.y, {})
        ]
    });
}
var N = (((r = {})[(r.ActivityNux = 0)] = 'ActivityNux'), (r[(r.StatusNux = 1)] = 'StatusNux'), (r[(r.ActivityAndStatusNux = 2)] = 'ActivityAndStatusNux'), (r[(r.Activity = 3)] = 'Activity'), (r[(r.Status = 4)] = 'Status'), (r[(r.ActivityAndStatus = 5)] = 'ActivityAndStatus'), r);
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
            return (0, i.jsx)(S, { closePopout: n });
        case 1:
            return (0, i.jsx)(E, { closePopout: n });
        case 2:
            return (0, i.jsx)(x, { closePopout: n });
        case 3:
            return (0, i.jsx)(P, {});
        case 4:
            return (0, i.jsx)(I, { closePopout: n });
        case 5:
            return (0, i.jsx)(w, {});
        default:
            return null;
    }
}
