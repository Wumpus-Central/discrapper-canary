r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(990547),
    s = r(481060),
    l = r(194359),
    u = r(138201),
    c = r(626135),
    d = r(63063),
    f = r(5192),
    p = r(478923),
    h = r(858380),
    _ = r(981631),
    m = r(388032),
    g = r(294794);
function E() {
    return (0, i.jsxs)(u.rT, {
        children: [
            (0, i.jsx)(u.ZP, {
                title: m.intl.string(m.t.ruhGkp),
                titleVariant: 'text-md/medium',
                description: m.intl.string(m.t['/FWKKC']),
                icon: s.CircleCheckIcon
            }),
            (0, i.jsx)(u.ZP, {
                title: m.intl.string(m.t.N9v3en),
                titleVariant: 'text-md/medium',
                description: m.intl.string(m.t.ddpuJi),
                icon: s.CircleCheckIcon
            }),
            (0, i.jsx)(u.ZP, {
                title: m.intl.string(m.t['4ycGEx']),
                titleVariant: 'text-md/medium',
                description: m.intl.string(m.t['5yfN+v']),
                icon: s.CircleInformationIcon
            })
        ]
    });
}
function v(e) {
    let { user: n, guildId: r, channelId: v, onIgnore: y, onBlock: b, location: I = 'ContextMenu', ...T } = e,
        S = () => {
            c.default.track(_.rMx.USER_REMEDIATION_ACTION, {
                action: h.l.CANCEL_IGNORE,
                location: I
            });
        };
    return (
        a.useLayoutEffect(
            () => () => {
                c.default.track(_.rMx.USER_REMEDIATION_ACTION, {
                    action: h.l.DISMISS_IGNORE,
                    location: I
                });
            },
            [I]
        ),
        (0, i.jsx)(s.ConfirmModal, {
            confirmText: m.intl.string(m.t.ytCpKi),
            cancelText: m.intl.string(m.t['ETE/oK']),
            onConfirm: () => {
                null == y || y(), l.Z.ignoreUser(n.id, I, null != v ? v : void 0), c.default.track(_.rMx.IGNORE_USER_CONFIRMED);
            },
            onCancel: S,
            impression: { impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION },
            confirmButtonColor: s.Button.Colors.BRAND,
            ...T,
            children: (0, i.jsxs)('div', {
                className: g.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.confirmationHeader,
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.iconContainer,
                                children: [
                                    (0, i.jsx)(s.Avatar, {
                                        size: s.AvatarSizes.SIZE_56,
                                        src: n.getAvatarURL(void 0, 64),
                                        'aria-hidden': !0
                                    }),
                                    (0, i.jsx)('div', {
                                        className: g.icon,
                                        children: (0, i.jsx)(s.EyeSlashIcon, {})
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(s.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'header-primary',
                                        children: m.intl.format(m.t['WrQD/f'], { username: f.ZP.getName(r, v, n) })
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-secondary',
                                        children: m.intl.string(m.t.JKL1u7)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(E, {}),
                    (0, i.jsxs)('div', {
                        className: g.otherOptions,
                        children: [
                            (0, i.jsx)(u.rT, {
                                title: m.intl.string(m.t['1v01go']),
                                children: (0, i.jsx)(u.ZP, {
                                    title: m.intl.string(m.t.bwxY39),
                                    description: m.intl.string(m.t.NTnf1d),
                                    titleVariant: 'text-md/medium',
                                    descriptionVariant: 'text-xs/medium',
                                    buttonText: m.intl.string(m.t.QdfUHB),
                                    buttonColor: s.ButtonColors.PRIMARY,
                                    onButtonPress: () => {
                                        c.default.track(_.rMx.USER_REMEDIATION_ACTION, {
                                            action: h.l.GOTO_BLOCK,
                                            location: I
                                        }),
                                            (0, s.closeAllModals)(),
                                            (0, s.openModal)((e) =>
                                                (0, i.jsx)(p.Z, {
                                                    ...e,
                                                    user: n,
                                                    guildId: r,
                                                    channelId: v,
                                                    onBlock: b,
                                                    onIgnore: y,
                                                    location: I
                                                })
                                            );
                                    }
                                })
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                className: g.featureGuide,
                                children: m.intl.format(m.t.Hjvqr6, { articleLink: d.Z.getArticleURL(_.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
