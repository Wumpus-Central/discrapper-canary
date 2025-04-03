n.d(t, {
    U: () => P,
    Uf: () => I,
    ng: () => C
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
    N = n(112440),
    y = n(671105),
    _ = n(552958),
    g = n(981631),
    j = n(921944),
    m = n(871465),
    v = n(388032),
    x = n(394049);
function C(e, t) {
    let n = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        r = T(e, void 0, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top');
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && r;
}
function I(e, t, n) {
    return T(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function P() {
    let e = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, s.cv)([a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, r.jsx)(o.IGR, {
            className: x.newBadge,
            text: v.NW.string(v.t.y2b7CA)
        })
    );
}
function T(e, t, a, C) {
    var I, P;
    let T = (0, y.OR)(e),
        E = (0, y._c)(e, t),
        S = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        w = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        A = f.ZP.canUseCustomNotificationSounds(S),
        D = A ? (null != E ? E : T) : m.YC.CLASSIC,
        U = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [M, Z] = i.useState(!1),
        { playSound: k } = (0, _.Z)(),
        [R, G] = (0, s.cv)([a]),
        L = R === a;
    if (
        (i.useEffect(
            () => () => {
                M && G(j.L.TAKE_ACTION);
            },
            [M, G]
        ),
        !U)
    )
        return null;
    let W = (n) => {
            if ((k(n), G(j.L.TAKE_ACTION), !A && n !== m.YC.CLASSIC)) {
                (0, h.Z)(n, 'contextMenu'), (0, N.Z)();
                return;
            }
            null != t ? (0, p.M)(e, t, D, n, 'contextMenu') : (0, p.t)(e, D, n, 'contextMenu');
        },
        F = A ? o.Text : O.Z,
        Y = (0, m.LB)(),
        z = null != (P = null == (I = Y.find((e) => e.value === D)) ? void 0 : I.label) ? P : v.NW.string(v.t.p3Hg5e),
        B = (0, r.jsx)(o.IGR, {
            className: x.newBadge,
            text: v.NW.string(v.t.y2b7CA)
        });
    return (0, r.jsx)(o.sNh, {
        id: 'notification-sounds',
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && Z(t),
                (0, r.jsxs)('div', {
                    className: x.rootContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                L && 'top' === C && B,
                                (0, r.jsxs)('div', {
                                    className: x.headerContainer,
                                    children: [
                                        (0, r.jsx)(F, {
                                            className: x.text,
                                            color: t ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: v.NW.string(v.t.mrqSOj)
                                        }),
                                        (0, r.jsx)(o.SrA, {
                                            size: 'xs',
                                            className: x.nitroWheel,
                                            color: t ? 'white' : A ? void 0 : c.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != z &&
                                    (0, r.jsx)(F, {
                                        className: x.text,
                                        color: t ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: z
                                    })
                            ]
                        }),
                        L && 'trailing' === C && B
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
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              r.forEach(function (t) {
                                                  var r;
                                                  (r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = r);
                                              });
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
                Y.map((e, t) =>
                    (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                A || e.value === m.YC.CLASSIC
                                    ? (0, r.jsx)(o.k5B, {
                                          id: e.label,
                                          group: 'notification-preset',
                                          checked: (null != D ? D : m.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => W(e.value)
                                      })
                                    : (0, r.jsx)(o.sNh, {
                                          id: e.label,
                                          label: (t) => {
                                              let { isFocused: n } = t;
                                              return (0, r.jsxs)('div', {
                                                  className: x.labelContainer,
                                                  children: [
                                                      (0, r.jsx)(O.Z, {
                                                          color: n ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: e.label
                                                      }),
                                                      (0, r.jsx)(o.g8d, {
                                                          className: x.playButton,
                                                          color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => W(e.value)
                                      }),
                                e.value === m.YC.CLASSIC ? (0, r.jsx)(o.Clw, {}) : null
                            ]
                        },
                        t
                    )
                ),
                w &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Clw, {}),
                            (0, r.jsx)(o.sNh, {
                                id: 'label',
                                label: (0, r.jsx)(o.Text, {
                                    className: x.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: v.NW.string(v.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
