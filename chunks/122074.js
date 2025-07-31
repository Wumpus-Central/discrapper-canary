(n.d(t, {
    U: () => I,
    Uf: () => T,
    ng: () => x
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(436774),
    s = n(706140),
    u = n(9156),
    d = n(594174),
    f = n(74538),
    O = n(759198),
    b = n(11352),
    p = n(213931),
    h = n(767157),
    _ = n(112440),
    y = n(671105),
    j = n(552958),
    g = n(981631),
    m = n(921944),
    v = n(871465),
    N = n(388032),
    C = n(394049);
function x(e, t) {
    let n = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        r = P(e, void 0, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top');
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && r;
}
function T(e, t, n) {
    return P(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function I() {
    let e = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, s.cv)([a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, r.jsx)(o.IGR, {
            className: C.newBadge,
            text: N.intl.string(N.t.y2b7CA)
        })
    );
}
function P(e, t, a, x) {
    var T, I;
    let P = (0, y.OR)(e),
        E = (0, y._c)(e, t),
        S = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        A = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        D = f.ZP.canUseCustomNotificationSounds(S),
        U = D ? (null != E ? E : P) : v.YC.CLASSIC,
        w = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [M, Z] = i.useState(!1),
        { playSound: k } = (0, j.Z)(),
        [R, G] = (0, s.cv)([a]),
        L = R === a;
    if (
        (i.useEffect(
            () => () => {
                M && G(m.L.TAKE_ACTION);
            },
            [M, G]
        ),
        !w)
    )
        return null;
    let F = (n) => {
            if ((k(n), G(m.L.TAKE_ACTION), !D && n !== v.YC.CLASSIC)) {
                ((0, h.Z)(n, 'contextMenu'), (0, _.Z)());
                return;
            }
            null != t ? (0, p.M)(e, t, U, n, 'contextMenu') : (0, p.t)(e, U, n, 'contextMenu');
        },
        Y = D ? o.Text : O.Z,
        z = (0, v.LB)(),
        B = null != (I = null == (T = z.find((e) => e.value === U)) ? void 0 : T.label) ? I : N.intl.string(N.t.p3Hg5e),
        V = (0, r.jsx)(o.IGR, {
            className: C.newBadge,
            text: N.intl.string(N.t.y2b7CA)
        });
    return (0, r.jsx)(o.sNh, {
        id: 'notification-sounds',
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && Z(t),
                (0, r.jsxs)('div', {
                    className: C.rootContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                L && 'top' === x && V,
                                (0, r.jsxs)('div', {
                                    className: C.headerContainer,
                                    children: [
                                        (0, r.jsx)(Y, {
                                            className: C.text,
                                            variant: 'text-sm/medium',
                                            children: N.intl.string(N.t.mrqSOj)
                                        }),
                                        (0, r.jsx)(o.SrA, {
                                            size: 'xs',
                                            className: C.nitroWheel,
                                            color: D ? void 0 : c.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != B &&
                                    (0, r.jsx)(Y, {
                                        className: C.text,
                                        variant: 'text-xs/normal',
                                        children: B
                                    })
                            ]
                        }),
                        L && 'trailing' === x && V
                    ]
                })
            );
        },
        action:
            e !== g.aIL
                ? () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e('5863'), n.e('48445')]).then(n.bind(n, 751212));
                          return (n) => {
                              var i, l;
                              return (0, r.jsx)(
                                  t,
                                  ((i = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              r = Object.keys(n);
                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              r.forEach(function (t) {
                                                  var r;
                                                  ((r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = r));
                                              }));
                                      }
                                      return e;
                                  })({}, n)),
                                  (l = l = { guildId: e }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(l)).forEach(function (e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                        }),
                                  i)
                              );
                          };
                      })
                : void 0,
        hasSubmenu: !0,
        children: (0, r.jsxs)(o.kSQ, {
            children: [
                z.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                D || e.value === v.YC.CLASSIC
                                    ? (0, r.jsx)(o.k5B, {
                                          id: e.label,
                                          group: 'notification-preset',
                                          checked: (null != U ? U : v.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => F(e.value)
                                      })
                                    : (0, r.jsx)(o.sNh, {
                                          id: e.label,
                                          label: (t) => {
                                              let { isFocused: n } = t;
                                              return (0, r.jsxs)('div', {
                                                  className: C.labelContainer,
                                                  children: [
                                                      (0, r.jsx)(O.Z, {
                                                          color: n ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: e.label
                                                      }),
                                                      (0, r.jsx)(o.g8d, {
                                                          className: C.playButton,
                                                          color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => F(e.value)
                                      }),
                                e.value === v.YC.CLASSIC ? (0, r.jsx)(o.Clw, {}) : null
                            ]
                        },
                        t
                    )
                ),
                A &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Clw, {}),
                            (0, r.jsx)(o.sNh, {
                                id: 'label',
                                label: (0, r.jsx)(o.Text, {
                                    className: C.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: N.intl.string(N.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
