n.d(t, {
    A: () => B,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    s = n(92674),
    l = n(311907),
    a = n(397927),
    o = n(73153),
    c = n(846293),
    u = n(900662),
    d = n(765671),
    h = n(854378),
    p = n(210714),
    g = n(961350),
    f = n(71393),
    _ = n(299091),
    m = n(954571),
    A = n(486020),
    x = n(403362),
    E = n(21599),
    v = n(949155),
    y = n(663572),
    b = n(131929),
    j = n(172799),
    O = n(652215),
    I = n(985018),
    S = n(446160);

function N(e) {
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
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function T() {
    return (0, r.jsx)("div", {
        className: S.$k,
        children: (0, r.jsx)(a.y$y, {}),
    });
}
let R = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case O.elq.RESOLVED:
        case O.elq.ACCEPTED:
        case O.elq.APP_NOT_OPENED:
        case O.elq.APP_OPENED:
        case O.elq.ACCEPTING:
        case O.elq.APP_OPENING:
            return 1;
        case O.elq.EXPIRED:
        case O.elq.BANNED:
        case O.elq.ERROR:
            return 2;
        case O.elq.RESOLVING:
            return 0;
        default:
            (0, x.xb)(n);
    }
};

function w(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === O.elq.BANNED
        ? (0, r.jsx)(u.N, {
              text: I.intl.string(I.t["5AkWAd"]),
              buttonCta: I.intl.string(I.t["8osdkn"]),
              onClick: n,
          })
        : (0, r.jsx)(u.N, {
              text: I.intl.string(I.t["usP+Mb"]),
              buttonCta: I.intl.string(I.t["8osdkn"]),
              onClick: n,
          });
}

function P(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: l, innerStyle: o } = e,
        { invite: c } = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.getOwnPropertyNames(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
            return s;
        })(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]),
        [u, h] = i.useState(R(c)),
        { ref: p, height: g } = (0, d.Ay)(),
        f = (0, a.zhh)({
            height: null != g && 0 !== g ? "".concat(g, "px") : "".concat(l, "px"),
            config: s.config.stiff,
        });
    return (
        i.useEffect(() => {
            let e = R(c);
            e !== u && h(e);
        }, [c, u]),
        (0, r.jsxs)(s.animated.div, {
            className: S.qF,
            style: f,
            children: [
                (0, r.jsx)(s.animated.div, {
                    className: S.NS,
                    style: f,
                    children: (0, r.jsx)("section", {
                        ref: p,
                        className: null == o ? void 0 : o(u),
                        children: t(u),
                    }),
                }),
                n,
            ],
        })
    );
}

function k(e) {
    let { invite: t } = e;
    return null != t && (0, v.Fk)(t)
        ? (0, r.jsx)(
              P,
              C(
                  N(
                      {
                          startAnimHeightPx: 0,
                          innerStyle: () => S.ui,
                      },
                      e,
                  ),
                  {
                      children: (e) =>
                          null == t
                              ? null
                              : 1 === e
                                ? (0, r.jsx)(b.s, {
                                      invite: t,
                                  })
                                : null,
                  },
              ),
          )
        : null;
}

function L(e) {
    let { invite: t } = e,
        n = {
            1: S._r,
            2: S.Gm,
            0: S.Kt,
        };
    return (0, r.jsx)(
        P,
        C(
            N(
                {
                    startAnimHeightPx: 200,
                    innerStyle: (e) => n[e],
                },
                e,
            ),
            {
                children: (n) =>
                    ((n) => {
                        if (null == t) return (0, r.jsx)(T, {});
                        switch (n) {
                            case 1:
                                return (0, r.jsx)(
                                    y.A,
                                    C(N({}, e), {
                                        invite: t,
                                    }),
                                );
                            case 2:
                                return (0, r.jsx)(
                                    w,
                                    C(N({}, e), {
                                        invite: t,
                                    }),
                                );
                            default:
                                return (0, r.jsx)(T, {});
                        }
                    })(n),
            },
        ),
    );
}

function D(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = null != t ? t : {},
        s = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = A.Ay.getGuildSplashURL({
            id: i.id,
            splash: i.splash,
        });
        null != e && ((s.backgroundImage = "url(".concat(e, ")")), (s.backgroundSize = "cover"));
    }
    return (0, r.jsxs)(h.Ay, {
        theme: O.NJ8.DARK,
        className: S.G3,
        style: s,
        contentClassName: S.__,
        children: [
            (0, r.jsx)(
                L,
                C(N({}, e), {
                    onAcceptInvite: n,
                }),
            ),
            (0, r.jsx)(k, N({}, e)),
        ],
    });
}

function B(e) {
    let { inviteKey: t, transitionTo: n } = e,
        s = (0, l.bG)([_.A], () => _.A.getInvite(t));
    return (
        i.useEffect(() => {
            let e = g.default.getAnalyticsToken();
            null != e &&
                o.h.dispatch({
                    type: "SET_ANALYTICS_TOKEN",
                    analyticsToken: e,
                    userId: g.default.getId(),
                }),
                (0, p.d)("invite_mobile"),
                m.default.track(
                    O.HAw.INVITE_VIEWED,
                    {
                        invite_code: t,
                    },
                    {
                        flush: !0,
                    },
                );
        }, []),
        (0, r.jsx)(D, {
            invite: s,
            onAcceptInvite: (e) => {
                var n, r, i;
                let l, a, o, u;
                null == e || e.preventDefault(),
                    m.default.track(O.HAw.INVITE_APP_OPENED, {
                        invite_code: (0, E.m0)(t),
                        guild_id: null == s || null == (n = s.guild) ? void 0 : n.id,
                        channel_id: null == s || null == (r = s.channel) ? void 0 : r.id,
                        inviter_id: null == s || null == (i = s.inviter) ? void 0 : i.id,
                        invite_type:
                            null != s && (null == s ? void 0 : s.type) != null
                                ? j.Xd[null == s ? void 0 : s.type]
                                : void 0,
                        user_is_member: null != s && null != s.guild && null != f.A.getGuild(s.guild.id),
                        size_total: null == s ? void 0 : s.approximate_member_count,
                    }),
                    (l = null != s && s.state !== O.elq.EXPIRED && s.state !== O.elq.BANNED ? t : void 0),
                    (o = null != (a = g.default.getFingerprint()) ? a : g.default.getId()),
                    (u =
                        null != s && (null == s ? void 0 : s.type) != null
                            ? Number(null == s ? void 0 : s.type)
                            : void 0),
                    c.Ay.openApp(l, void 0, o, void 0, u);
            },
            transitionTo: n,
        })
    );
}
