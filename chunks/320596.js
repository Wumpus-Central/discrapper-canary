n.d(t, {
    Ie: () => f,
    mv: () => b,
}),
    n(388685);
var r = n(951288);
n(647438);
var l = n(442837),
    i = n(692547),
    a = n(481060),
    s = n(239091),
    c = n(584511),
    o = n(699516),
    u = n(51144),
    d = n(88751),
    x = n(930180),
    g = n(388032),
    m = n(165393);
let b = (e) => {
        let { channelId: t } = e;
        return (0, r.jsx)(h, { channelId: t });
    },
    h = (e) => {
        let { channelId: t } = e,
            n = (0, x._d)(t),
            l = (0, x.K3)(t);
        if (0 === n && 0 === l) return null;
        let c = (e) => {
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
                  className: m.blockedNotice,
                  children: [
                      (0, r.jsx)(a.t6m, {
                          size: "lg",
                          color: i.Z.unsafe_rawColors.RED_400.css,
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: g.intl.string(g.t["P/KFX1"]),
                      }),
                      (0, r.jsx)(a.P3F, {
                          className: m.blockedButton,
                          onClick: c,
                          children: g.intl.string(g.t.rUEjBQ),
                      }),
                  ],
              })
            : l > 0
              ? (0, r.jsxs)("div", {
                    className: m.blockedNotice,
                    children: [
                        (0, r.jsx)(a.kZF, { size: "lg" }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: g.intl.format(g.t.Ri3o39, { number: l }),
                        }),
                        (0, r.jsx)(a.P3F, {
                            className: m.blockedButton,
                            onClick: c,
                            children: g.intl.string(g.t.rUEjBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: m.blockedNotice,
                    children: [
                        (0, r.jsx)(a.t6m, {
                            size: "lg",
                            color: i.Z.unsafe_rawColors.RED_400.css,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: g.intl.format(g.t["6Tcdt7"], { number: n }),
                        }),
                        (0, r.jsx)(a.P3F, {
                            className: m.blockedButton,
                            onClick: c,
                            children: g.intl.string(g.t.rUEjBQ),
                        }),
                    ],
                });
    },
    f = (e) => {
        let { user: t, showStatus: n, speaker: i, channelId: s } = e,
            x = (0, l.e7)([d.ZP], () => d.ZP.isModerator(t.id, s)),
            b = (0, l.e7)([o.Z], () => o.Z.isBlocked(t.id)),
            h = null;
        return (
            n && (h = i ? g.intl.string(g.t.LqMmGx) : x ? g.intl.string(g.t.GMZqSk) : g.intl.string(g.t.suRAp6)),
            (0, r.jsxs)("div", {
                className: m.user,
                children: [
                    (0, r.jsx)(
                        c.Z,
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
                                          className: m.icon,
                                      })
                                : null,
                        },
                        t.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: m.userInfo,
                        children: [
                            (0, r.jsxs)("div", {
                                className: m.username,
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
                                className: m.username,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: b ? "text-danger" : "text-default",
                                        children: b ? g.intl.string(g.t["4bDptL"]) : g.intl.string(g.t.tFY5ZW),
                                    }),
                                    (0, r.jsxs)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", h],
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
            n = (0, x.z)(t),
            l = (0, x.bA)(t);
        return (0, r.jsx)(a.Ttm, {
            className: m.container,
            children: [...n, ...l].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
                    f,
                    {
                        user: n,
                        channelId: t,
                    },
                    n.id,
                );
            }),
        });
    };
