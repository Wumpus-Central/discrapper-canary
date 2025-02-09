e.d(t, { default: () => N });
var i = e(200651),
    r = e(192379),
    o = e(990547),
    l = e(481060),
    s = e(194359),
    a = e(819557),
    c = e(138201),
    d = e(626135),
    x = e(63063),
    u = e(5192),
    m = e(478923),
    f = e(858380),
    h = e(981631),
    j = e(388032),
    _ = e(294794);
function C() {
    return (0, i.jsxs)(a.z, {
        children: [
            (0, i.jsx)(a.q, {
                title: j.intl.string(j.t.ruhGkp),
                description: j.intl.string(j.t['/FWKKC']),
                icon: l.owK
            }),
            (0, i.jsx)(a.q, {
                title: j.intl.string(j.t.N9v3en),
                description: j.intl.string(j.t.ddpuJi),
                icon: l.owK
            }),
            (0, i.jsx)(a.q, {
                title: j.intl.string(j.t['4ycGEx']),
                description: j.intl.string(j.t['5yfN+v']),
                icon: l.d3s
            })
        ]
    });
}
function N(n) {
    let { user: t, guildId: e, channelId: a, onIgnore: N, onBlock: g, location: I = 'ContextMenu', ...E } = n;
    return (
        r.useLayoutEffect(
            () => () => {
                d.default.track(h.rMx.USER_REMEDIATION_ACTION, {
                    action: f.l.DISMISS_IGNORE,
                    location: I
                });
            },
            [I]
        ),
        (0, i.jsx)(l.ConfirmModal, {
            confirmText: j.intl.string(j.t.ytCpKi),
            cancelText: j.intl.string(j.t['ETE/oK']),
            onConfirm: () => {
                null == N || N(), s.Z.ignoreUser(t.id, I, null != a ? a : void 0), d.default.track(h.rMx.IGNORE_USER_CONFIRMED);
            },
            onCancel: () => {
                d.default.track(h.rMx.USER_REMEDIATION_ACTION, {
                    action: f.l.CANCEL_IGNORE,
                    location: I
                });
            },
            impression: { impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: l.zxk.Colors.BRAND,
            ...E,
            children: (0, i.jsxs)('div', {
                className: _.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.confirmationHeader,
                        children: [
                            (0, i.jsxs)('div', {
                                className: _.iconContainer,
                                children: [
                                    (0, i.jsx)(l.qEK, {
                                        size: l.EFr.SIZE_56,
                                        src: t.getAvatarURL(void 0, 64),
                                        'aria-hidden': !0
                                    }),
                                    (0, i.jsx)('div', {
                                        className: _.icon,
                                        children: (0, i.jsx)(l.kZF, {})
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-xl/bold',
                                        color: 'header-primary',
                                        children: j.intl.format(j.t['WrQD/f'], { username: u.ZP.getName(e, a, t) })
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-secondary',
                                        children: j.intl.string(j.t.JKL1u7)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(C, {}),
                    (0, i.jsxs)('div', {
                        className: _.otherOptions,
                        children: [
                            (0, i.jsx)(c.rT, {
                                title: j.intl.string(j.t['1v01go']),
                                children: (0, i.jsx)(c.ZP, {
                                    title: j.intl.string(j.t.bwxY39),
                                    description: j.intl.string(j.t.NTnf1d),
                                    titleVariant: 'text-md/medium',
                                    descriptionVariant: 'text-xs/medium',
                                    buttonText: j.intl.string(j.t.QdfUHB),
                                    buttonColor: l.Ttl.PRIMARY,
                                    onButtonPress: () => {
                                        d.default.track(h.rMx.USER_REMEDIATION_ACTION, {
                                            action: f.l.GOTO_BLOCK,
                                            location: I
                                        }),
                                            (0, l.pTH)(),
                                            (0, l.h7j)((n) =>
                                                (0, i.jsx)(m.default, {
                                                    ...n,
                                                    user: t,
                                                    guildId: e,
                                                    channelId: a,
                                                    onBlock: g,
                                                    onIgnore: N,
                                                    location: I
                                                })
                                            );
                                    }
                                })
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: _.featureGuide,
                                children: j.intl.format(j.t.Hjvqr6, { articleLink: x.Z.getArticleURL(h.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
