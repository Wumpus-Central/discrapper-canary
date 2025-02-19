n.d(t, {
    U: () => C,
    Uf: () => I,
    ng: () => m
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(436774),
    c = n(706140),
    u = n(9156),
    d = n(594174),
    f = n(74538),
    h = n(759198),
    g = n(11352),
    O = n(213931),
    j = n(767157),
    N = n(112440),
    b = n(671105),
    p = n(552958),
    v = n(981631),
    x = n(921944),
    y = n(871465),
    _ = n(388032),
    S = n(381345);
function m(e, t) {
    let n = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        i = P(e, void 0, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top'),
        l = (n.nestedEntry && t) || (!n.nestedEntry && !t);
    return (0, r.jsx)(r.Fragment, { children: l && i });
}
function I(e, t, n) {
    return P(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function C() {
    let e = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, c.cv)([a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (0, r.jsx)(r.Fragment, {
        children:
            e.enabled &&
            e.nestedEntry &&
            t === a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, r.jsx)(o.IGR, {
                className: S.newBadge,
                text: _.NW.string(_.t.y2b7CA)
            })
    });
}
function P(e, t, a, m) {
    var I, C;
    let P = (0, b.OR)(e),
        E = (0, b._c)(e, t),
        T = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        Z = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        A = f.ZP.canUseCustomNotificationSounds(T),
        U = A ? (null != E ? E : P) : y.YC.CLASSIC,
        M = g.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [D, w] = i.useState(!1),
        { playSound: k } = (0, p.Z)(),
        [R, W] = (0, c.cv)([a]),
        G = R === a;
    if (
        (i.useEffect(
            () => () => {
                D && W(x.L.TAKE_ACTION);
            },
            [D, W]
        ),
        !M)
    )
        return null;
    let F = (n) => {
            if ((k(n), W(x.L.TAKE_ACTION), !A && n !== y.YC.CLASSIC)) {
                (0, j.Z)(n, 'contextMenu'), (0, N.Z)();
                return;
            }
            null != t ? (0, O.M)(e, t, U, n, 'contextMenu') : (0, O.t)(e, U, n, 'contextMenu');
        },
        L = A ? o.Text : h.Z,
        Y = (0, y.LB)(),
        Q = null !== (C = null === (I = Y.find((e) => e.value === U)) || void 0 === I ? void 0 : I.label) && void 0 !== C ? C : _.NW.string(_.t.p3Hg5e),
        V = (0, r.jsx)(o.IGR, {
            className: S.newBadge,
            text: _.NW.string(_.t.y2b7CA)
        });
    return (0, r.jsx)(o.sNh, {
        id: 'notification-sounds',
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && w(t),
                (0, r.jsxs)('div', {
                    className: S.rootContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                G && 'top' === m && V,
                                (0, r.jsxs)('div', {
                                    className: S.headerContainer,
                                    children: [
                                        (0, r.jsx)(L, {
                                            className: S.text,
                                            color: t ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: _.NW.string(_.t.mrqSOj)
                                        }),
                                        (0, r.jsx)(o.SrA, {
                                            size: 'xs',
                                            className: S.nitroWheel,
                                            color: t ? 'white' : A ? void 0 : s.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != Q &&
                                    (0, r.jsx)(L, {
                                        className: S.text,
                                        color: t ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: Q
                                    })
                            ]
                        }),
                        G && 'trailing' === m && V
                    ]
                })
            );
        },
        action:
            e !== v.aIL
                ? () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e('5863'), n.e('59819')]).then(n.bind(n, 751212));
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
                                A || e.value === y.YC.CLASSIC
                                    ? (0, r.jsx)(o.k5B, {
                                          id: e.label,
                                          group: 'notification-preset',
                                          checked: (null != U ? U : y.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => F(e.value)
                                      })
                                    : (0, r.jsx)(o.sNh, {
                                          id: e.label,
                                          label: (t) => {
                                              let { isFocused: n } = t;
                                              return (0, r.jsxs)('div', {
                                                  className: S.labelContainer,
                                                  children: [
                                                      (0, r.jsx)(h.Z, {
                                                          color: n ? 'always-white' : void 0,
                                                          variant: 'text-sm/medium',
                                                          children: e.label
                                                      }),
                                                      (0, r.jsx)(o.g8d, {
                                                          className: S.playButton,
                                                          color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
                                                      })
                                                  ]
                                              });
                                          },
                                          action: () => F(e.value)
                                      }),
                                e.value === y.YC.CLASSIC ? (0, r.jsx)(o.Clw, {}) : null
                            ]
                        },
                        t
                    )
                ),
                Z &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Clw, {}),
                            (0, r.jsx)(o.sNh, {
                                id: 'label',
                                label: (0, r.jsx)(o.Text, {
                                    className: S.mutedLabel,
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
