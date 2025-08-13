n.d(t, {
    Ie: () => h,
    mv: () => j,
}),
    n(388685);
var r = n(255367);
n(73800);
var o = n(442837),
    s = n(692547),
    c = n(481060),
    a = n(239091),
    i = n(584511),
    l = n(699516),
    d = n(51144),
    u = n(88751),
    b = n(930180),
    m = n(388032),
    x = n(710316);
let j = (e) => {
        let { channelId: t } = e;
        return (0, r.jsx)(p, { channelId: t });
    },
    p = (e) => {
        let { channelId: t } = e,
            n = (0, b._d)(t),
            o = (0, b.K3)(t);
        if (0 === n && 0 === o) return null;
        let i = (e) => {
            (0, a.vq)(
                e,
                (e) => {
                    var n, o;
                    return (0, r.jsx)(
                        g,
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
                        (o = o = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
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
        return n > 0 && o > 0
            ? (0, r.jsxs)("div", {
                  className: x.blockedNotice,
                  children: [
                      (0, r.jsx)(c.t6m, {
                          size: "lg",
                          color: s.Z.unsafe_rawColors.RED_400.css,
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: m.intl.string(m.t["P/KFX1"]),
                      }),
                      (0, r.jsx)(c.P3F, {
                          className: x.blockedButton,
                          onClick: i,
                          children: m.intl.string(m.t.rUEjBQ),
                      }),
                  ],
              })
            : o > 0
              ? (0, r.jsxs)("div", {
                    className: x.blockedNotice,
                    children: [
                        (0, r.jsx)(c.kZF, { size: "lg" }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: m.intl.format(m.t.Ri3o39, { number: o }),
                        }),
                        (0, r.jsx)(c.P3F, {
                            className: x.blockedButton,
                            onClick: i,
                            children: m.intl.string(m.t.rUEjBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: x.blockedNotice,
                    children: [
                        (0, r.jsx)(c.t6m, {
                            size: "lg",
                            color: s.Z.unsafe_rawColors.RED_400.css,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: m.intl.format(m.t["6Tcdt7"], { number: n }),
                        }),
                        (0, r.jsx)(c.P3F, {
                            className: x.blockedButton,
                            onClick: i,
                            children: m.intl.string(m.t.rUEjBQ),
                        }),
                    ],
                });
    },
    h = (e) => {
        let { user: t, showStatus: n, speaker: s, channelId: a } = e,
            b = (0, o.e7)([u.ZP], () => u.ZP.isModerator(t.id, a)),
            j = (0, o.e7)([l.Z], () => l.Z.isBlocked(t.id)),
            p = null;
        return (
            n && (p = s ? m.intl.string(m.t.LqMmGx) : b ? m.intl.string(m.t.GMZqSk) : m.intl.string(m.t.suRAp6)),
            (0, r.jsxs)("div", {
                className: x.user,
                children: [
                    (0, r.jsx)(
                        i.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: c.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () =>
                                      (0, r.jsx)(c.S6n, {
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
                                    (0, r.jsx)(c.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        children: d.ZP.getName(t),
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        color: "text-secondary",
                                        children: "#".concat(t.discriminator),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: x.username,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: j ? "text-danger" : "text-default",
                                        children: j ? m.intl.string(m.t["4bDptL"]) : m.intl.string(m.t.tFY5ZW),
                                    }),
                                    (0, r.jsxs)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", p],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    g = (e) => {
        let { channelId: t } = e,
            n = (0, b.z)(t),
            o = (0, b.bA)(t);
        return (0, r.jsx)(c.Ttm, {
            className: x.container,
            children: [...n, ...o].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
                    h,
                    {
                        user: n,
                        channelId: t,
                    },
                    n.id,
                );
            }),
        });
    };
