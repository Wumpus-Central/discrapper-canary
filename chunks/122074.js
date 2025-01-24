t.d(e, {
    U: function () {
        return N;
    },
    Uf: function () {
        return E;
    },
    ng: function () {
        return T;
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
    m = t(759198),
    I = t(11352),
    x = t(213931),
    h = t(767157),
    g = t(112440),
    M = t(671105),
    _ = t(552958),
    p = t(981631),
    v = t(921944),
    C = t(871465),
    j = t(388032),
    Z = t(150626);
function T(n, e) {
    let t = I.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        r = S(n, void 0, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, t.nestedEntry ? 'trailing' : 'top'),
        l = (t.nestedEntry && e) || (!t.nestedEntry && !e);
    return (0, i.jsx)(i.Fragment, { children: l && r });
}
function E(n, e, t) {
    return S(n, e, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
}
function N() {
    let n = I.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [e] = (0, d.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.enabled &&
            n.nestedEntry &&
            e === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(a.TextBadge, {
                className: Z.newBadge,
                text: j.intl.string(j.t.y2b7CA)
            })
    });
}
function S(n, e, u, T) {
    var E, N;
    let S = (0, M.OR)(n),
        A = (0, M._c)(n, e),
        U = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        O = (0, l.e7)([s.ZP], () => s.ZP.isMuted(n), [n]),
        b = f.ZP.canUseCustomNotificationSounds(U),
        G = b ? (null != A ? A : S) : C.YC.CLASSIC,
        y = I.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [P, R] = r.useState(!1),
        { playSound: D } = (0, _.Z)(),
        [F, L] = (0, d.cv)([u]),
        k = F === u;
    if (
        (r.useEffect(
            () => () => {
                P && L(v.L.TAKE_ACTION);
            },
            [P, L]
        ),
        !y)
    )
        return null;
    let w = (t) => {
            if ((D(t), L(v.L.TAKE_ACTION), !b && t !== C.YC.CLASSIC)) {
                (0, h.Z)(t, 'contextMenu'), (0, g.Z)();
                return;
            }
            null != e ? (0, x.M)(n, e, G, t, 'contextMenu') : (0, x.t)(n, G, t, 'contextMenu');
        },
        z = b ? a.Text : m.Z,
        Y = (0, C.LB)(),
        B = null !== (N = null === (E = Y.find((n) => n.value === G)) || void 0 === E ? void 0 : E.label) && void 0 !== N ? N : j.intl.string(j.t.p3Hg5e),
        V = (0, i.jsx)(a.TextBadge, {
            className: Z.newBadge,
            text: j.intl.string(j.t.y2b7CA)
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'notification-sounds',
        label: (n) => {
            let { isFocused: e } = n;
            return (
                e && R(e),
                (0, i.jsxs)('div', {
                    className: Z.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                k && 'top' === T && V,
                                (0, i.jsxs)('div', {
                                    className: Z.headerContainer,
                                    children: [
                                        (0, i.jsx)(z, {
                                            className: Z.text,
                                            color: e ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: j.intl.string(j.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(a.NitroWheelIcon, {
                                            size: 'xs',
                                            className: Z.nitroWheel,
                                            color: e ? 'white' : b ? void 0 : o.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != B &&
                                    (0, i.jsx)(z, {
                                        className: Z.text,
                                        color: e ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: B
                                    })
                            ]
                        }),
                        k && 'trailing' === T && V
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
                Y.map((n, e) =>
                    (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                b || n.value === C.YC.CLASSIC
                                    ? (0, i.jsx)(a.MenuRadioItem, {
                                          id: n.label,
                                          group: 'notification-preset',
                                          checked: (null != G ? G : C.YC.CLASSIC) === n.value,
                                          label: n.label,
                                          action: () => w(n.value)
                                      })
                                    : (0, i.jsx)(a.MenuItem, {
                                          id: n.label,
                                          label: (e) => {
                                              let { isFocused: t } = e;
                                              return (0, i.jsxs)('div', {
                                                  className: Z.labelContainer,
                                                  children: [
                                                      (0, i.jsx)(m.Z, {
                                                          color: t ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: n.label
                                                      }),
                                                      (0, i.jsx)(a.CirclePlayIcon, {
                                                          className: Z.playButton,
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
                                    className: Z.mutedLabel,
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
