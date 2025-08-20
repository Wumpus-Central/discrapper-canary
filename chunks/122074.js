n.d(t, {
    U: () => E,
    Uf: () => v,
    ng: () => x,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
    _ = n(213931),
    p = n(767157),
    h = n(112440),
    N = n(671105),
    m = n(552958),
    y = n(981631),
    j = n(921944),
    C = n(871465),
    T = n(388032),
    g = n(392238);
function x(e, t) {
    let n = b.Y.useExperiment({ location: "guild_context_menu" }, { autoTrackExposure: !0 }),
        r = I(e, void 0, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? "trailing" : "top");
    return ((n.nestedEntry && t) || (!n.nestedEntry && !t)) && r;
}
function v(e, t, n) {
    return I(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n);
}
function E() {
    let e = b.Y.useExperiment({ location: "guild_context_menu" }, { autoTrackExposure: !0 }),
        [t] = (0, s.cv)([a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
    return (
        e.enabled &&
        e.nestedEntry &&
        t === a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
        (0, r.jsx)(o.IGR, {
            className: g.newBadge,
            text: T.intl.string(T.t.y2b7CA),
        })
    );
}
function I(e, t, a, x) {
    var v, E;
    let I = (0, N.OR)(e),
        P = (0, N._c)(e, t),
        S = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        A = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
        U = f.ZP.canUseCustomNotificationSounds(S),
        D = U ? (null != P ? P : I) : C.YC.CLASSIC,
        M = b.Y.useExperiment({ location: "guild_context_menu" }, { autoTrackExposure: !0 }).enabled,
        [w, Z] = i.useState(!1),
        { playSound: R } = (0, m.Z)(),
        [k, G] = (0, s.cv)([a]),
        L = k === a;
    if (
        (i.useEffect(
            () => () => {
                w && G(j.L.TAKE_ACTION);
            },
            [w, G],
        ),
        !M)
    )
        return null;
    let B = (n) => {
            if ((R(n), G(j.L.TAKE_ACTION), !U && n !== C.YC.CLASSIC)) {
                (0, p.Z)(n, "contextMenu"), (0, h.Z)();
                return;
            }
            null != t ? (0, _.M)(e, t, D, n, "contextMenu") : (0, _.t)(e, D, n, "contextMenu");
        },
        F = U ? o.Text : O.Z,
        Y = (0, C.LB)(),
        z = null != (E = null == (v = Y.find((e) => e.value === D)) ? void 0 : v.label) ? E : T.intl.string(T.t.p3Hg5e),
        V = (0, r.jsx)(o.IGR, {
            className: g.newBadge,
            text: T.intl.string(T.t.y2b7CA),
        });
    return (0, r.jsx)(o.sNh, {
        id: "notification-sounds",
        label: (e) => {
            let { isFocused: t } = e;
            return (
                t && Z(t),
                (0, r.jsxs)("div", {
                    className: g.rootContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                L && "top" === x && V,
                                (0, r.jsxs)("div", {
                                    className: g.headerContainer,
                                    children: [
                                        (0, r.jsx)(F, {
                                            className: g.text,
                                            variant: "text-sm/medium",
                                            children: T.intl.string(T.t.mrqSOj),
                                        }),
                                        (0, r.jsx)(o.SrA, {
                                            size: "xs",
                                            className: g.nitroWheel,
                                            color: U ? void 0 : c.JX.PREMIUM_TIER_2,
                                        }),
                                    ],
                                }),
                                null != z &&
                                    (0, r.jsx)(F, {
                                        className: g.text,
                                        variant: "text-xs/normal",
                                        children: z,
                                    }),
                            ],
                        }),
                        L && "trailing" === x && V,
                    ],
                })
            );
        },
        action:
            e !== y.aIL
                ? () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e("15076"), n.e("99964")]).then(n.bind(n, 907941));
                          return (n) => {
                              var i, l;
                              return (0, r.jsx)(
                                  t,
                                  ((i = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              r = Object.keys(n);
                                          "function" == typeof Object.getOwnPropertySymbols &&
                                              (r = r.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  }),
                                              )),
                                              r.forEach(function (t) {
                                                  var r;
                                                  (r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0,
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
                                  i),
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
                                U || e.value === C.YC.CLASSIC
                                    ? (0, r.jsx)(o.k5B, {
                                          id: e.label,
                                          group: "notification-preset",
                                          checked: (null != D ? D : C.YC.CLASSIC) === e.value,
                                          label: e.label,
                                          action: () => B(e.value),
                                      })
                                    : (0, r.jsx)(o.sNh, {
                                          id: e.label,
                                          label: (t) => {
                                              let { isFocused: n } = t;
                                              return (0, r.jsxs)("div", {
                                                  className: g.labelContainer,
                                                  children: [
                                                      (0, r.jsx)(O.Z, {
                                                          color: n ? "always-white" : void 0,
                                                          variant: "text-sm/medium",
                                                          children: e.label,
                                                      }),
                                                      (0, r.jsx)(o.g8d, {
                                                          className: g.playButton,
                                                          color: n
                                                              ? o.TVs.colors.INTERACTIVE_ACTIVE
                                                              : o.TVs.colors.INTERACTIVE_NORMAL,
                                                      }),
                                                  ],
                                              });
                                          },
                                          action: () => B(e.value),
                                      }),
                                e.value === C.YC.CLASSIC ? (0, r.jsx)(o.Clw, {}) : null,
                            ],
                        },
                        t,
                    ),
                ),
                A &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Clw, {}),
                            (0, r.jsx)(o.sNh, {
                                id: "label",
                                label: (0, r.jsx)(o.Text, {
                                    className: g.mutedLabel,
                                    variant: "text-sm/medium",
                                    children: T.intl.string(T.t["a9G/ER"]),
                                }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
