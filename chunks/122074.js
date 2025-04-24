n.d(t, {
    U: () => x,
    Uf: () => m,
    ng: () => v
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(704215),
    o = n(481060),
    a = n(436774),
    c = n(706140),
    u = n(9156),
    d = n(594174),
    g = n(74538),
    b = n(759198),
    p = n(173345),
    f = n(817876),
    S = n(213931),
    O = n(767157),
    h = n(112440),
    E = n(552958),
    y = n(981631),
    j = n(921944),
    _ = n(871465),
    N = n(388032),
    P = n(394049);
function v(e, t) {
    let n = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        i = A(e, void 0, s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top');
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && i;
}
function m(e, t, n) {
    return A(e, t, s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function x() {
    let e = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, c.cv)([s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, i.jsx)(o.IGR, {
            className: P.newBadge,
            text: N.intl.string(N.t.y2b7CA)
        })
    );
}
function A(e, t, s, v) {
    var m, x;
    let A = (0, f.OR)(e),
        L = (0, f._c)(e, t),
        I = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        Z = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        D = g.ZP.canUseCustomNotificationSounds(I),
        M = D ? (null != L ? L : A) : _.YC.CLASSIC,
        T = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [w, k] = r.useState(!1),
        { playSound: G } = (0, E.Z)(),
        [U, C] = (0, c.cv)([s]),
        R = U === s;
    if (
        (r.useEffect(
            () => () => {
                w && C(j.L.TAKE_ACTION);
            },
            [w, C]
        ),
        !T)
    )
        return null;
    let B = (n) => {
            if ((G(n), C(j.L.TAKE_ACTION), !D && n !== _.YC.CLASSIC)) {
                (0, O.Z)(n, 'contextMenu'), (0, h.Z)();
                return;
            }
            null != t ? (0, S.M)(e, t, M, n, 'contextMenu') : (0, S.t)(e, M, n, 'contextMenu');
        },
        Y = D ? o.Text : b.Z,
        Q = (0, _.LB)(),
        F = null != (x = null == (m = Q.find((e) => e.value === M)) ? void 0 : m.label) ? x : N.intl.string(N.t.p3Hg5e),
        H = (0, i.jsx)(o.IGR, {
            className: P.newBadge,
            text: N.intl.string(N.t.y2b7CA)
        });
    return (0, i.jsx)(o.sNh, {
        id: 'notification-sounds',
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && k(t),
                (0, i.jsxs)('div', {
                    className: P.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                R && 'top' === v && H,
                                (0, i.jsxs)('div', {
                                    className: P.headerContainer,
                                    children: [
                                        (0, i.jsx)(Y, {
                                            className: P.text,
                                            color: t ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: N.intl.string(N.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(o.SrA, {
                                            size: 'xs',
                                            className: P.nitroWheel,
                                            color: t ? 'white' : D ? void 0 : a.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != F &&
                                    (0, i.jsx)(Y, {
                                        className: P.text,
                                        color: t ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: F
                                    })
                            ]
                        }),
                        R && 'trailing' === v && H
                    ]
                })
            );
        },
        action:
            e !== y.aIL
                ? () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e('5863'), n.e('48445')]).then(n.bind(n, 751212));
                          return (n) => {
                              var r, l;
                              return (0, i.jsx)(
                                  t,
                                  ((r = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              i = Object.keys(n);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (i = i.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              i.forEach(function (t) {
                                                  var i;
                                                  (i = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: i,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = i);
                                              });
                                      }
                                      return e;
                                  })({}, n)),
                                  (l = l = { guildId: e }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, i);
                                            }
                                            return n;
                                        })(Object(l)).forEach(function (e) {
                                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                        }),
                                  r)
                              );
                          };
                      })
                : void 0,
        hasSubmenu: !0,
        children: (0, i.jsxs)(o.kSQ, {
            children: [
                Q.map((e, t) =>
                    (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                D || e.value === _.YC.CLASSIC
                                    ? (0, i.jsx)(o.k5B, {
                                          id: e.label,
                                          group: 'notification-preset',
                                          checked: (null != M ? M : _.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => B(e.value)
                                      })
                                    : (0, i.jsx)(o.sNh, {
                                          id: e.label,
                                          label: (t) => {
                                              let { isFocused: n } = t;
                                              return (0, i.jsxs)('div', {
                                                  className: P.labelContainer,
                                                  children: [
                                                      (0, i.jsx)(b.Z, {
                                                          color: n ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: e.label
                                                      }),
                                                      (0, i.jsx)(o.g8d, {
                                                          className: P.playButton,
                                                          color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => B(e.value)
                                      }),
                                e.value === _.YC.CLASSIC ? (0, i.jsx)(o.Clw, {}) : null
                            ]
                        },
                        t
                    )
                ),
                Z &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(o.Clw, {}),
                            (0, i.jsx)(o.sNh, {
                                id: 'label',
                                label: (0, i.jsx)(o.Text, {
                                    className: P.mutedLabel,
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
