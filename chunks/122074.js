t.d(e, {
    U: function () {
        return Z;
    },
    Uf: function () {
        return N;
    },
    ng: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    u = t(704215),
    a = t(481060),
    o = t(436774),
    d = t(706140),
    s = t(9156),
    c = t(594174),
    f = t(74538),
    I = t(759198),
    x = t(11352),
    M = t(213931),
    _ = t(767157),
    h = t(112440),
    m = t(671105),
    g = t(552958),
    p = t(981631),
    v = t(921944),
    C = t(871465),
    j = t(388032),
    T = t(150626);
function E(n, e) {
    let t = x.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        r = S(n, void 0, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? 'trailing' : 'top'),
        l = (t.nestedEntry && e) || (!t.nestedEntry && !e);
    return (0, i.jsx)(i.Fragment, { children: l && r });
}
function N(n, e, t) {
    return S(n, e, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
}
function Z() {
    let n = x.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [e] = (0, d.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.enabled &&
            n.nestedEntry &&
            e === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(a.TextBadge, {
                className: T.newBadge,
                text: j.intl.string(j.t.y2b7CA)
            })
    });
}
function S(n, e, u, E) {
    var N, Z;
    let S = (0, m.OR)(n),
        A = (0, m._c)(n, e),
        U = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        O = (0, l.e7)([s.ZP], () => s.ZP.isMuted(n), [n]),
        G = f.ZP.canUseCustomNotificationSounds(U),
        y = G ? (null != A ? A : S) : C.YC.CLASSIC,
        P = x.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [b, R] = r.useState(!1),
        { playSound: D } = (0, g.Z)(),
        [L, F] = (0, d.cv)([u]),
        k = L === u;
    if (
        (r.useEffect(
            () => () => {
                b && F(v.L.TAKE_ACTION);
            },
            [b, F]
        ),
        !P)
    )
        return null;
    let w = (t) => {
            if ((D(t), F(v.L.TAKE_ACTION), !G && t !== C.YC.CLASSIC)) {
                (0, _.Z)(t, 'contextMenu'), (0, h.Z)();
                return;
            }
            null != e ? (0, M.M)(n, e, y, t, 'contextMenu') : (0, M.t)(n, y, t, 'contextMenu');
        },
        Y = G ? a.Text : I.Z,
        z = (0, C.LB)(),
        B = null !== (Z = null === (N = z.find((n) => n.value === y)) || void 0 === N ? void 0 : N.label) && void 0 !== Z ? Z : j.intl.string(j.t.p3Hg5e),
        V = (0, i.jsx)(a.TextBadge, {
            className: T.newBadge,
            text: j.intl.string(j.t.y2b7CA)
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'notification-sounds',
        label: (n) => {
            let { isFocused: e } = n;
            return (
                e && R(e),
                (0, i.jsxs)('div', {
                    className: T.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                k && 'top' === E && V,
                                (0, i.jsxs)('div', {
                                    className: T.headerContainer,
                                    children: [
                                        (0, i.jsx)(Y, {
                                            className: T.text,
                                            color: e ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: j.intl.string(j.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(a.NitroWheelIcon, {
                                            size: 'xs',
                                            className: T.nitroWheel,
                                            color: e ? 'white' : G ? void 0 : o.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != B &&
                                    (0, i.jsx)(Y, {
                                        className: T.text,
                                        color: e ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: B
                                    })
                            ]
                        }),
                        k && 'trailing' === E && V
                    ]
                })
            );
        },
        action:
            n !== p.aIL
                ? () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([t.e('5863'), t.e('66847')]).then(t.bind(t, 751212));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: n
                              });
                      })
                : void 0,
        hasSubmenu: !0,
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [
                z.map((n, e) =>
                    (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                G || n.value === C.YC.CLASSIC
                                    ? (0, i.jsx)(a.MenuRadioItem, {
                                          id: n.label,
                                          group: 'notification-preset',
                                          checked: (null != y ? y : C.YC.CLASSIC) === n.value,
                                          label: n.label,
                                          action: () => w(n.value)
                                      })
                                    : (0, i.jsx)(a.MenuItem, {
                                          id: n.label,
                                          label: (e) => {
                                              let { isFocused: t } = e;
                                              return (0, i.jsxs)('div', {
                                                  className: T.labelContainer,
                                                  children: [
                                                      (0, i.jsx)(I.Z, {
                                                          color: t ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: n.label
                                                      }),
                                                      (0, i.jsx)(a.CirclePlayIcon, {
                                                          className: T.playButton,
                                                          color: t ? a.tokens.colors.INTERACTIVE_ACTIVE : a.tokens.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => w(n.value)
                                      }),
                                n.value === C.YC.CLASSIC ? (0, i.jsx)(a.MenuSeparator, {}) : null
                            ]
                        },
                        e
                    )
                ),
                O &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.MenuSeparator, {}),
                            (0, i.jsx)(a.MenuItem, {
                                id: 'label',
                                label: (0, i.jsx)(a.Text, {
                                    className: T.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: j.intl.string(j.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
