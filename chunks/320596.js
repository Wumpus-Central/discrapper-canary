n.d(e, {
    Ie: () => h,
    mv: () => j,
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    s = n(692547),
    o = n(481060),
    l = n(239091),
    a = n(584511),
    c = n(699516),
    d = n(51144),
    u = n(88751),
    m = n(930180),
    x = n(388032),
    b = n(710316);
let j = (t) => {
        let { channelId: e } = t;
        return (0, r.jsx)(g, { channelId: e });
    },
    g = (t) => {
        let { channelId: e } = t,
            n = (0, m._d)(e),
            i = (0, m.K3)(e);
        if (0 === n && 0 === i) return null;
        let a = (t) => {
            (0, l.vq)(
                t,
                (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        f,
                        ((n = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (e) {
                                        var r;
                                        (r = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = r);
                                    });
                            }
                            return t;
                        })({}, t)),
                        (i = i = { channelId: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (t) {
                                  Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
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
        return n > 0 && i > 0
            ? (0, r.jsxs)("div", {
                  className: b.blockedNotice,
                  children: [
                      (0, r.jsx)(o.t6m, {
                          size: "lg",
                          color: s.Z.unsafe_rawColors.RED_400.css,
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: x.intl.string(x.t["P/KFX1"]),
                      }),
                      (0, r.jsx)(o.P3F, {
                          className: b.blockedButton,
                          onClick: a,
                          children: x.intl.string(x.t.rUEjBQ),
                      }),
                  ],
              })
            : i > 0
              ? (0, r.jsxs)("div", {
                    className: b.blockedNotice,
                    children: [
                        (0, r.jsx)(o.kZF, { size: "lg" }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: x.intl.format(x.t.Ri3o39, { number: i }),
                        }),
                        (0, r.jsx)(o.P3F, {
                            className: b.blockedButton,
                            onClick: a,
                            children: x.intl.string(x.t.rUEjBQ),
                        }),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: b.blockedNotice,
                    children: [
                        (0, r.jsx)(o.t6m, {
                            size: "lg",
                            color: s.Z.unsafe_rawColors.RED_400.css,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: x.intl.format(x.t["6Tcdt7"], { number: n }),
                        }),
                        (0, r.jsx)(o.P3F, {
                            className: b.blockedButton,
                            onClick: a,
                            children: x.intl.string(x.t.rUEjBQ),
                        }),
                    ],
                });
    },
    h = (t) => {
        let { user: e, showStatus: n, speaker: s, channelId: l } = t,
            m = (0, i.e7)([u.ZP], () => u.ZP.isModerator(e.id, l)),
            j = (0, i.e7)([c.Z], () => c.Z.isBlocked(e.id)),
            g = null;
        return (
            n && (g = s ? x.intl.string(x.t.LqMmGx) : m ? x.intl.string(x.t.GMZqSk) : x.intl.string(x.t.suRAp6)),
            (0, r.jsxs)("div", {
                className: b.user,
                children: [
                    (0, r.jsx)(
                        a.Z,
                        {
                            src: e.getAvatarURL(null, 32),
                            size: o.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () =>
                                      (0, r.jsx)(o.S6n, {
                                          size: "md",
                                          color: "currentColor",
                                          className: b.icon,
                                      })
                                : null,
                        },
                        e.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: b.userInfo,
                        children: [
                            (0, r.jsxs)("div", {
                                className: b.username,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        children: d.ZP.getName(e),
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: n ? "text-md/normal" : "text-sm/normal",
                                        color: "text-secondary",
                                        children: "#".concat(e.discriminator),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: b.username,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: j ? "text-danger" : "text-default",
                                        children: j ? x.intl.string(x.t["4bDptL"]) : x.intl.string(x.t.tFY5ZW),
                                    }),
                                    (0, r.jsxs)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ["| ", g],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    f = (t) => {
        let { channelId: e } = t,
            n = (0, m.z)(e),
            i = (0, m.bA)(e);
        return (0, r.jsx)(o.Ttm, {
            className: b.container,
            children: [...n, ...i].map((t) => {
                let { user: n } = t;
                return (0, r.jsx)(
                    h,
                    {
                        user: n,
                        channelId: e,
                    },
                    n.id,
                );
            }),
        });
    };
