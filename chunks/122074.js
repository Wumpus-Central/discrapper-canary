e.d(t, {
    U: () => A,
    Uf: () => E,
    ng: () => Z
}),
    e(47120);
var i = e(200651),
    l = e(192379),
    r = e(442837),
    a = e(704215),
    s = e(481060),
    d = e(436774),
    u = e(706140),
    o = e(9156),
    c = e(594174),
    h = e(74538),
    f = e(759198),
    x = e(11352),
    _ = e(213931),
    g = e(767157),
    I = e(112440),
    N = e(671105),
    S = e(552958),
    v = e(981631),
    C = e(921944),
    j = e(871465),
    m = e(388032),
    T = e(150626);
function Z(n, t) {
    let e = x.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        l = U(n, void 0, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, e.nestedEntry ? 'trailing' : 'top'),
        r = (e.nestedEntry && t) || (!e.nestedEntry && !t);
    return (0, i.jsx)(i.Fragment, { children: r && l });
}
function E(n, t, e) {
    return U(n, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, e);
}
function A() {
    let n = x.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, u.cv)([a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.enabled &&
            n.nestedEntry &&
            t === a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(s.IGR, {
                className: T.newBadge,
                text: m.intl.string(m.t.y2b7CA)
            })
    });
}
function U(n, t, a, Z) {
    var E, A;
    let U = (0, N.OR)(n),
        O = (0, N._c)(n, t),
        p = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        M = (0, r.e7)([o.ZP], () => o.ZP.isMuted(n), [n]),
        y = h.ZP.canUseCustomNotificationSounds(p),
        b = y ? (null != O ? O : U) : j.YC.CLASSIC,
        P = x.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [k, R] = l.useState(!1),
        { playSound: D } = (0, S.Z)(),
        [G, F] = (0, u.cv)([a]),
        L = G === a;
    if (
        (l.useEffect(
            () => () => {
                k && F(C.L.TAKE_ACTION);
            },
            [k, F]
        ),
        !P)
    )
        return null;
    let w = (e) => {
            if ((D(e), F(C.L.TAKE_ACTION), !y && e !== j.YC.CLASSIC)) {
                (0, g.Z)(e, 'contextMenu'), (0, I.Z)();
                return;
            }
            null != t ? (0, _.M)(n, t, b, e, 'contextMenu') : (0, _.t)(n, b, e, 'contextMenu');
        },
        Y = y ? s.Text : f.Z,
        Q = (0, j.LB)(),
        V = null !== (A = null === (E = Q.find((n) => n.value === b)) || void 0 === E ? void 0 : E.label) && void 0 !== A ? A : m.intl.string(m.t.p3Hg5e),
        z = (0, i.jsx)(s.IGR, {
            className: T.newBadge,
            text: m.intl.string(m.t.y2b7CA)
        });
    return (0, i.jsx)(s.sNh, {
        id: 'notification-sounds',
        label: (n) => {
            let { isFocused: t } = n;
            return (
                t && R(t),
                (0, i.jsxs)('div', {
                    className: T.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                L && 'top' === Z && z,
                                (0, i.jsxs)('div', {
                                    className: T.headerContainer,
                                    children: [
                                        (0, i.jsx)(Y, {
                                            className: T.text,
                                            color: t ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: m.intl.string(m.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(s.SrA, {
                                            size: 'xs',
                                            className: T.nitroWheel,
                                            color: t ? 'white' : y ? void 0 : d.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != V &&
                                    (0, i.jsx)(Y, {
                                        className: T.text,
                                        color: t ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: V
                                    })
                            ]
                        }),
                        L && 'trailing' === Z && z
                    ]
                })
            );
        },
        action:
            n !== v.aIL
                ? () =>
                      (0, s.ZDy)(async () => {
                          let { default: t } = await Promise.all([e.e('5863'), e.e('66847')]).then(e.bind(e, 751212));
                          return (e) =>
                              (0, i.jsx)(t, {
                                  ...e,
                                  guildId: n
                              });
                      })
                : void 0,
        hasSubmenu: !0,
        children: (0, i.jsxs)(s.kSQ, {
            children: [
                Q.map((n, t) =>
                    (0, i.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                y || n.value === j.YC.CLASSIC
                                    ? (0, i.jsx)(s.k5B, {
                                          id: n.label,
                                          group: 'notification-preset',
                                          checked: (null != b ? b : j.YC.CLASSIC) === n.value,
                                          label: n.label,
                                          action: () => w(n.value)
                                      })
                                    : (0, i.jsx)(s.sNh, {
                                          id: n.label,
                                          label: (t) => {
                                              let { isFocused: e } = t;
                                              return (0, i.jsxs)('div', {
                                                  className: T.labelContainer,
                                                  children: [
                                                      (0, i.jsx)(f.Z, {
                                                          color: e ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: n.label
                                                      }),
                                                      (0, i.jsx)(s.g8d, {
                                                          className: T.playButton,
                                                          color: e ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => w(n.value)
                                      }),
                                n.value === j.YC.CLASSIC ? (0, i.jsx)(s.Clw, {}) : null
                            ]
                        },
                        t
                    )
                ),
                M &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.Clw, {}),
                            (0, i.jsx)(s.sNh, {
                                id: 'label',
                                label: (0, i.jsx)(s.Text, {
                                    className: T.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: m.intl.string(m.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
