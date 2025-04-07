n.d(t, {
    U: () => m,
    Uf: () => A,
    ng: () => v
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(436774),
    c = n(706140),
    u = n(9156),
    d = n(594174),
    g = n(74538),
    b = n(759198),
    p = n(11352),
    f = n(213931),
    S = n(767157),
    N = n(112440),
    O = n(671105),
    E = n(552958),
    h = n(981631),
    y = n(921944),
    j = n(871465),
    _ = n(388032),
    P = n(394049);
function v(e, t) {
    let n = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        i = x(e, void 0, l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top');
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && i;
}
function A(e, t, n) {
    return x(e, t, l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function m() {
    let e = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, c.cv)([l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, i.jsx)(a.IGR, {
            className: P.newBadge,
            text: _.NW.string(_.t.y2b7CA)
        })
    );
}
function x(e, t, l, v) {
    var A, m;
    let x = (0, O.OR)(e),
        L = (0, O._c)(e, t),
        I = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        Z = (0, s.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        M = g.ZP.canUseCustomNotificationSounds(I),
        T = M ? (null != L ? L : x) : j.YC.CLASSIC,
        D = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [G, w] = r.useState(!1),
        { playSound: C } = (0, E.Z)(),
        [U, k] = (0, c.cv)([l]),
        R = U === l;
    if (
        (r.useEffect(
            () => () => {
                G && k(y.L.TAKE_ACTION);
            },
            [G, k]
        ),
        !D)
    )
        return null;
    let W = (n) => {
            if ((C(n), k(y.L.TAKE_ACTION), !M && n !== j.YC.CLASSIC)) {
                (0, S.Z)(n, 'contextMenu'), (0, N.Z)();
                return;
            }
            null != t ? (0, f.M)(e, t, T, n, 'contextMenu') : (0, f.t)(e, T, n, 'contextMenu');
        },
        B = M ? a.Text : b.Z,
        Y = (0, j.LB)(),
        Q = null != (m = null == (A = Y.find((e) => e.value === T)) ? void 0 : A.label) ? m : _.NW.string(_.t.p3Hg5e),
        F = (0, i.jsx)(a.IGR, {
            className: P.newBadge,
            text: _.NW.string(_.t.y2b7CA)
        });
    return (0, i.jsx)(a.sNh, {
        id: 'notification-sounds',
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && w(t),
                (0, i.jsxs)('div', {
                    className: P.rootContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                R && 'top' === v && F,
                                (0, i.jsxs)('div', {
                                    className: P.headerContainer,
                                    children: [
                                        (0, i.jsx)(B, {
                                            className: P.text,
                                            color: t ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: _.NW.string(_.t.mrqSOj)
                                        }),
                                        (0, i.jsx)(a.SrA, {
                                            size: 'xs',
                                            className: P.nitroWheel,
                                            color: t ? 'white' : M ? void 0 : o.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != Q &&
                                    (0, i.jsx)(B, {
                                        className: P.text,
                                        color: t ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: Q
                                    })
                            ]
                        }),
                        R && 'trailing' === v && F
                    ]
                })
            );
        },
        action:
            e !== h.aIL
                ? () =>
                      (0, a.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e('5863'), n.e('48445')]).then(n.bind(n, 751212));
                          return (n) => {
                              var r, s;
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
                                  (s = s = { guildId: e }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, i);
                                            }
                                            return n;
                                        })(Object(s)).forEach(function (e) {
                                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                                        }),
                                  r)
                              );
                          };
                      })
                : void 0,
        hasSubmenu: !0,
        children: (0, i.jsxs)(a.kSQ, {
            children: [
                Y.map((e, t) =>
                    (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                M || e.value === j.YC.CLASSIC
                                    ? (0, i.jsx)(a.k5B, {
                                          id: e.label,
                                          group: 'notification-preset',
                                          checked: (null != T ? T : j.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => W(e.value)
                                      })
                                    : (0, i.jsx)(a.sNh, {
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
                                                      (0, i.jsx)(a.g8d, {
                                                          className: P.playButton,
                                                          color: n ? a.TVs.colors.INTERACTIVE_ACTIVE : a.TVs.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => W(e.value)
                                      }),
                                e.value === j.YC.CLASSIC ? (0, i.jsx)(a.Clw, {}) : null
                            ]
                        },
                        t
                    )
                ),
                Z &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(a.Clw, {}),
                            (0, i.jsx)(a.sNh, {
                                id: 'label',
                                label: (0, i.jsx)(a.Text, {
                                    className: P.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: _.NW.string(_.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
