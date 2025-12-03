n.d(t, {
    Ie: () => p,
    mv: () => h,
}),
    n(388685);
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(692547),
    a = n(481060),
    s = n(239091),
    o = n(584511),
    c = n(699516),
    u = n(51144),
    d = n(88751),
    g = n(930180),
    m = n(388032),
    x = n(165393);
let h = (e) => {
        let { channelId: t } = e;
        return (0, l.jsx)(v, { channelId: t });
    },
    v = (e) => {
        let { channelId: t } = e,
            n = (0, g._d)(t),
            r = (0, g.K3)(t);
        if (0 === n && 0 === r) return null;
        let o = (e) => {
            (0, s.vq)(
                e,
                (e) => {
                    var n, r;
                    return (0, l.jsx)(
                        f,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    );
                },
                {
                    position: "left",
                    align: "bottom",
                },
            );
        };
        return n > 0 && r > 0
            ? (0, l.jsxs)("div", {
                  className: x.blockedNotice,
                  children: [
                      (0, l.jsx)(a.t6m, {
                          size: "lg",
                          color: i.Z.unsafe_rawColors.RED_400.css,
                      }),
                      (0, l.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: m.intl.string(m.t["P/KFXz"]),
                      }),
                      (0, l.jsx)(a.P3F, {
                          className: x.blockedButton,
                          onClick: o,
                          children: m.intl.string(m.t.rUEjBe),
                      }),
                  ],
              })
            : r > 0
              ? (0, l.jsxs)("div", {
                    className: x.blockedNotice,
                    children: [
                        (0, l.jsx)(a.kZF, { size: "lg" }),
                        (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: m.intl.format(m.t.Ri3o33, { number: r }),
                        }),
                        (0, l.jsx)(a.P3F, {
                            className: x.blockedButton,
                            onClick: o,
                            children: m.intl.string(m.t.rUEjBe),
                        }),
                    ],
                })
              : (0, l.jsxs)("div", {
                    className: x.blockedNotice,
                    children: [
                        (0, l.jsx)(a.t6m, {
                            size: "lg",
                            color: i.Z.unsafe_rawColors.RED_400.css,
                        }),
                        (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: m.intl.format(m.t["6Tcdt7"], { number: n }),
                        }),
                        (0, l.jsx)(a.P3F, {
                            className: x.blockedButton,
                            onClick: o,
                            children: m.intl.string(m.t.rUEjBe),
                        }),
                    ],
                });
    },
    p = (e) => {
        let { user: t, showStatus: n, speaker: i, channelId: s } = e,
            g = (0, r.e7)([d.ZP], () => d.ZP.isModerator(t.id, s)),
            h = (0, r.e7)([c.Z], () => c.Z.isBlocked(t.id)),
            v = null;
        return (
            n && (v = i ? m.intl.string(m.t.LqMmG2) : g ? m.intl.string(m.t.GMZqSi) : m.intl.string(m.t.suRApw)),
            (0, l.jsxs)("div", {
                className: x.user,
                children: [
                    (0, l.jsx)(
                        o.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: a.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i
                                ? () =>
                                      (0, l.jsx)(a.S6n, {
                                          size: "md",
                                          color: "currentColor",
                                          className: x.icon,
                                      })
                                : null,
                        },
                        t.id,
                    ),
                    (0, l.jsxs)("div", {
                        className: x.userInfo,
                        children: [
                            (0, l.jsxs)("div", {
                                className: x.username,
                                children: [
                                    (0, l.jsx)(a.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        children: u.ZP.getName(t),
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        color: "text-subtle",
                                        children: "#".concat(t.discriminator),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: x.username,
                                children: [
                                    (0, l.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: h ? "text-feedback-critical" : "text-default",
                                        children: h ? m.intl.string(m.t["4bDptI"]) : m.intl.string(m.t.tFY5Zb),
                                    }),
                                    (0, l.jsxs)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", v],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    f = (e) => {
        let { channelId: t } = e,
            n = (0, g.z)(t),
            r = (0, g.bA)(t);
        return (0, l.jsx)(a.Ttm, {
            className: x.container,
            children: [...n, ...r].map((e) => {
                let { user: n } = e;
                return (0, l.jsx)(
                    p,
                    {
                        user: n,
                        channelId: t,
                    },
                    n.id,
                );
            }),
        });
    };
