n.d(t, {
    Ie: () => p,
    mv: () => h,
}),
    n(388685);
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(692547),
    a = n(481060),
    s = n(239091),
    o = n(584511),
    c = n(699516),
    u = n(51144),
    d = n(88751),
    g = n(930180),
    m = n(388032),
    x = n(362303);
let h = (e) => {
        let { channelId: t } = e;
        return (0, r.jsx)(v, { channelId: t });
    },
    v = (e) => {
        let { channelId: t } = e,
            n = (0, g._d)(t),
            l = (0, g.K3)(t);
        if (0 === n && 0 === l) return null;
        let o = (e) => {
            (0, s.vq)(
                e,
                (e) => {
                    var n, l;
                    return (0, r.jsx)(
                        j,
                        ((n = (function (e) {
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
                        })({}, e)),
                        (l = l = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
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
        return n > 0 && l > 0
            ? (0, r.jsxs)("div", {
                  className: x.blockedNotice,
                  children: [
                      (0, r.jsx)(a.t6m, {
                          size: "lg",
                          color: i.Z.unsafe_rawColors.RED_400.css,
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: m.intl.string(m.t["P/KFXz"]),
                      }),
                      (0, r.jsx)(a.P3F, {
                          className: x.blockedButton,
                          onClick: o,
                          children: m.intl.string(m.t.rUEjBe),
                      }),
                  ],
              })
            : l > 0
              ? (0, r.jsxs)("div", {
                    className: x.blockedNotice,
                    children: [
                        (0, r.jsx)(a.kZF, { size: "lg" }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: m.intl.format(m.t.Ri3o33, { number: l }),
                        }),
                        (0, r.jsx)(a.P3F, {
                            className: x.blockedButton,
                            onClick: o,
                            children: m.intl.string(m.t.rUEjBe),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: x.blockedNotice,
                    children: [
                        (0, r.jsx)(a.t6m, {
                            size: "lg",
                            color: i.Z.unsafe_rawColors.RED_400.css,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: m.intl.format(m.t["6Tcdt7"], { number: n }),
                        }),
                        (0, r.jsx)(a.P3F, {
                            className: x.blockedButton,
                            onClick: o,
                            children: m.intl.string(m.t.rUEjBe),
                        }),
                    ],
                });
    },
    p = (e) => {
        let { user: t, showStatus: n, speaker: i, channelId: s } = e,
            g = (0, l.e7)([d.ZP], () => d.ZP.isModerator(t.id, s)),
            h = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
            v = null;
        return (
            n && (v = i ? m.intl.string(m.t.LqMmG2) : g ? m.intl.string(m.t.GMZqSi) : m.intl.string(m.t.suRApw)),
            (0, r.jsxs)("div", {
                className: x.user,
                children: [
                    (0, r.jsx)(
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
                                      (0, r.jsx)(a.S6n, {
                                          size: "md",
                                          color: "currentColor",
                                          className: x.icon,
                                      })
                                : null,
                        },
                        t.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: x.userInfo,
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.username,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        children: u.ZP.getName(t),
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        color: "text-secondary",
                                        children: "#".concat(t.discriminator),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: x.username,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: h ? "text-danger" : "text-default",
                                        children: h ? m.intl.string(m.t["4bDptI"]) : m.intl.string(m.t.tFY5Zb),
                                    }),
                                    (0, r.jsxs)(a.Text, {
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
    j = (e) => {
        let { channelId: t } = e,
            n = (0, g.z)(t),
            l = (0, g.bA)(t);
        return (0, r.jsx)(a.Ttm, {
            className: x.container,
            children: [...n, ...l].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
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
