n.d(t, {
    U: () => x,
    Uf: () => m,
    ng: () => v
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(436774),
    c = n(706140),
    u = n(9156),
    d = n(594174),
    g = n(74538),
    b = n(759198),
    p = n(11352),
    S = n(213931),
    f = n(767157),
    O = n(112440),
    N = n(671105),
    h = n(552958),
    E = n(981631),
    y = n(921944),
    j = n(871465),
    _ = n(388032),
    P = n(394049);
function v(e, t) {
    let n = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        i = A(e, void 0, l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top');
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && i;
}
function m(e, t, n) {
    return A(e, t, l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function x() {
    let e = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, c.cv)([l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, i.jsx)(o.IGR, {
            className: P.newBadge,
            text: _.NW.string(_.t.y2b7CA)
        })
    );
}
function A(e, t, l, v) {
    var m, x;
    let A = (0, N.OR)(e),
        L = (0, N._c)(e, t),
        I = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        Z = (0, s.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        D = g.ZP.canUseCustomNotificationSounds(I),
        M = D ? (null != L ? L : A) : j.YC.CLASSIC,
        T = p.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [G, w] = r.useState(!1),
        { playSound: k } = (0, h.Z)(),
        [U, C] = (0, c.cv)([l]),
        R = U === l;
    if (
        (r.useEffect(
            () => () => {
                G && C(y.L.TAKE_ACTION);
            },
            [G, C]
        ),
        !T)
    )
        return null;
    let W = (n) => {
            if ((k(n), C(y.L.TAKE_ACTION), !D && n !== j.YC.CLASSIC)) {
                (0, f.Z)(n, 'contextMenu'), (0, O.Z)();
                return;
            }
            null != t ? (0, S.M)(e, t, M, n, 'contextMenu') : (0, S.t)(e, M, n, 'contextMenu');
        },
        B = D ? o.Text : b.Z,
        Y = (0, j.LB)(),
        Q = null != (x = null == (m = Y.find((e) => e.value === M)) ? void 0 : m.label) ? x : _.NW.string(_.t.p3Hg5e),
        F = (0, i.jsx)(o.IGR, {
            className: P.newBadge,
            text: _.NW.string(_.t.y2b7CA)
        });
    return (0, i.jsx)(o.sNh, {
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
                                        (0, i.jsx)(o.SrA, {
                                            size: 'xs',
                                            className: P.nitroWheel,
                                            color: t ? 'white' : D ? void 0 : a.JX.PREMIUM_TIER_2
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
            e !== E.aIL
                ? () =>
                      (0, o.ZDy)(async () => {
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
        children: (0, i.jsxs)(o.kSQ, {
            children: [
                Y.map((e, t) =>
                    (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                D || e.value === j.YC.CLASSIC
                                    ? (0, i.jsx)(o.k5B, {
                                          id: e.label,
                                          group: 'notification-preset',
                                          checked: (null != M ? M : j.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => W(e.value)
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
                                          action: () => W(e.value)
                                      }),
                                e.value === j.YC.CLASSIC ? (0, i.jsx)(o.Clw, {}) : null
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
                                    children: _.NW.string(_.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
