n.d(t, {
    U: () => P,
    Uf: () => I,
    ng: () => N
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(436774),
    u = n(706140),
    s = n(9156),
    d = n(594174),
    f = n(74538),
    O = n(759198),
    b = n(173345),
    p = n(817876),
    h = n(213931),
    v = n(767157),
    g = n(112440),
    y = n(552958),
    j = n(981631),
    _ = n(921944),
    m = n(871465),
    x = n(388032),
    C = n(394049);
function N(e, t) {
    let n = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        r = S(e, void 0, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? 'trailing' : 'top');
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && r;
}
function I(e, t, n) {
    return S(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function P() {
    let e = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }),
        [t] = (0, u.cv)([a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, r.jsx)(o.IGR, {
            className: C.newBadge,
            text: x.intl.string(x.t.y2b7CA)
        })
    );
}
function S(e, t, a, N) {
    var I, P;
    let S = (0, p.OR)(e),
        T = (0, p._c)(e, t),
        E = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        w = (0, l.e7)([s.ZP], () => s.ZP.isMuted(e), [e]),
        A = f.ZP.canUseCustomNotificationSounds(E),
        D = A ? (null != T ? T : S) : m.YC.CLASSIC,
        U = b.Y.useExperiment({ location: 'guild_context_menu' }, { autoTrackExposure: !0 }).enabled,
        [Z, M] = i.useState(!1),
        { playSound: k } = (0, y.Z)(),
        [R, G] = (0, u.cv)([a]),
        L = R === a;
    if (
        (i.useEffect(
            () => () => {
                Z && G(_.L.TAKE_ACTION);
            },
            [Z, G]
        ),
        !U)
    )
        return null;
    let Y = (n) => {
            if ((k(n), G(_.L.TAKE_ACTION), !A && n !== m.YC.CLASSIC)) {
                (0, v.Z)(n, 'contextMenu'), (0, g.Z)();
                return;
            }
            null != t ? (0, h.M)(e, t, D, n, 'contextMenu') : (0, h.t)(e, D, n, 'contextMenu');
        },
        F = A ? o.Text : O.Z,
        z = (0, m.LB)(),
        B = null != (P = null == (I = z.find((e) => e.value === D)) ? void 0 : I.label) ? P : x.intl.string(x.t.p3Hg5e),
        V = (0, r.jsx)(o.IGR, {
            className: C.newBadge,
            text: x.intl.string(x.t.y2b7CA)
        });
    return (0, r.jsx)(o.sNh, {
        id: 'notification-sounds',
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && M(t),
                (0, r.jsxs)('div', {
                    className: C.rootContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                L && 'top' === N && V,
                                (0, r.jsxs)('div', {
                                    className: C.headerContainer,
                                    children: [
                                        (0, r.jsx)(F, {
                                            className: C.text,
                                            color: t ? 'always-white' : void 0,
                                            variant: 'text-sm/medium',
                                            children: x.intl.string(x.t.mrqSOj)
                                        }),
                                        (0, r.jsx)(o.SrA, {
                                            size: 'xs',
                                            className: C.nitroWheel,
                                            color: t ? 'white' : A ? void 0 : c.JX.PREMIUM_TIER_2
                                        })
                                    ]
                                }),
                                null != B &&
                                    (0, r.jsx)(F, {
                                        className: C.text,
                                        color: t ? 'always-white' : void 0,
                                        variant: 'text-xs/normal',
                                        children: B
                                    })
                            ]
                        }),
                        L && 'trailing' === N && V
                    ]
                })
            );
        },
        action:
            e !== j.aIL
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
                z.map((e, t) =>
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
                                          action: () => Y(e.value)
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
                                          action: () => Y(e.value)
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
                                    className: C.mutedLabel,
                                    variant: 'text-sm/medium',
                                    children: x.intl.string(x.t['a9G/ER'])
                                })
                            })
                        ]
                    })
            ]
        })
    });
}
