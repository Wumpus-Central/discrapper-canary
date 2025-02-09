n.d(t, { default: () => v }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(831209),
    o = n(442837),
    a = n(481060),
    l = n(688465),
    d = n(430824),
    c = n(626135),
    x = n(369994),
    h = n(162157),
    u = n(533244),
    _ = n(487419),
    C = n(821312),
    m = n(676770),
    p = n(981631),
    j = n(388032),
    g = n(851493);
function v(e) {
    let { guildId: t, transitionState: n, onClose: v, analyticsData: N } = e,
        T = (0, o.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        k = !!(null == T ? void 0 : T.hasFeature(p.oNc.INVITES_DISABLED)),
        [E] = s.useState(!1),
        [I, S] = s.useState(m.Fl),
        f = (0, o.e7)([_.Z], () => _.Z.getGuildIncident(t)),
        A = (0, h.BT)(T),
        z = (0, u.SG)(f) || k,
        b = (0, u.sN)(f),
        [R, D] = s.useState(z),
        [M, L] = s.useState(b),
        [w, y] = s.useState(!1),
        O = R !== z || M !== b || w,
        Z = k && !A;
    if (null == T) return v(), null;
    function P() {
        D((e) => !e);
    }
    return (0, i.jsxs)(a.Y0X, {
        transitionState: n,
        size: a.CgR.MEDIUM,
        children: [
            (0, i.jsx)(a.xBx, {
                separator: !0,
                children: (0, i.jsxs)('div', {
                    className: g.headerContainer,
                    children: [
                        (0, i.jsx)(a.mBM, {
                            size: 'xs',
                            color: r.Z.INTERACTIVE_NORMAL
                        }),
                        (0, i.jsx)(a.X6q, {
                            color: 'header-primary',
                            variant: 'heading-md/semibold',
                            children: j.intl.string(j.t.oCYAc3)
                        }),
                        (0, i.jsx)(l.Z, {})
                    ]
                })
            }),
            (0, i.jsx)(a.hzk, {
                children: (0, i.jsxs)('div', {
                    className: g.mainContainer,
                    children: [
                        (0, i.jsx)(a.PhF, {
                            placeholder: j.intl.string(j.t.vKYZzc),
                            options: (0, m.c1)(),
                            select: (e) => {
                                S(e), y(!0);
                            },
                            isSelected: (e) => e === I,
                            serialize: (e) => String(e)
                        }),
                        (0, i.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: j.intl.string(j.t.Uwsjn5)
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: j.intl.string(j.t.qPJkZm)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(a.ua7, {
                                    text: j.intl.string(j.t['9GPbsb']),
                                    shouldShow: k,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(a.rsf, {
                                                className: g.toggle,
                                                onChange: P,
                                                checked: R,
                                                disabled: Z
                                            })
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: g.pauseContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: g.pauseText,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: j.intl.string(j.t.wrDmAw)
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: j.intl.string(j.t.UQbJW1)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(a.rsf, {
                                    className: g.toggle,
                                    onChange: function () {
                                        L((e) => !e);
                                    },
                                    checked: M
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        onClick: () => {
                            (z || b) && !R && !M
                                ? ((0, x.n)(T.id, !1, !1),
                                  (0, a.ZDy)(() =>
                                      Promise.resolve((e) =>
                                          (0, i.jsx)(C.Z, {
                                              ...e,
                                              guildId: t
                                          })
                                      )
                                  ))
                                : (0, x.n)(T.id, R, M, I);
                            let { source: e, alertType: n, messageId: s } = N;
                            c.default.track(p.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                guild_id: t,
                                source: e,
                                raid_alert_id: s,
                                raid_alert_type: n,
                                intervention_type_enabled: (0, u.sO)(R, M),
                                intervention_type_disabled: (0, u.lk)(R, M),
                                duration: 60 * I
                            }),
                                v();
                        },
                        color: a.zxk.Colors.BRAND,
                        look: a.zxk.Looks.FILLED,
                        submitting: E,
                        disabled: !O,
                        children: j.intl.string(j.t['pwm/z8'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: v,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        disabled: E,
                        children: j.intl.string(j.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
