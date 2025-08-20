n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(803948),
    s = n(442837),
    o = n(481060),
    a = n(447543),
    c = n(587444),
    u = n(393238),
    d = n(388905),
    h = n(108427),
    p = n(314897),
    m = n(701190),
    g = n(626135),
    f = n(768581),
    _ = n(823379),
    x = n(264229),
    E = n(230224),
    v = n(617730),
    j = n(258356),
    b = n(981631),
    I = n(388032),
    O = n(271922);
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
function y(e, t) {
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
function S() {
    return (0, r.jsx)("div", {
        className: O.centerFlex,
        children: (0, r.jsx)(o.$jN, {}),
    });
}
let C = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case b.r2o.RESOLVED:
        case b.r2o.ACCEPTED:
        case b.r2o.APP_NOT_OPENED:
        case b.r2o.APP_OPENED:
        case b.r2o.ACCEPTING:
        case b.r2o.APP_OPENING:
            return 1;
        case b.r2o.EXPIRED:
        case b.r2o.BANNED:
        case b.r2o.ERROR:
            return 2;
        case b.r2o.RESOLVING:
            return 0;
        default:
            (0, _.vE)(n);
    }
};
function Z(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === b.r2o.BANNED
        ? (0, r.jsx)(c.u, {
              text: I.intl.string(I.t["5AkWAQ"]),
              buttonCta: I.intl.string(I.t["8osdkp"]),
              onClick: n,
          })
        : (0, r.jsx)(c.u, {
              text: I.intl.string(I.t["usP+MT"]),
              buttonCta: I.intl.string(I.t["8osdkp"]),
              onClick: n,
          });
}
function A(e) {
    var { children: t, cardChildren: n, startAnimHeightPx: s, innerStyle: a } = e;
    let { invite: c } = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]),
        [d, h] = i.useState(C(c)),
        { ref: p, height: m } = (0, u.ZP)(),
        g = (0, o.q_F)({
            height: null != m && 0 !== m ? "".concat(m, "px") : "".concat(s, "px"),
            config: l.config.stiff,
        });
    return (
        i.useEffect(() => {
            let e = C(c);
            e !== d && h(e);
        }, [c, d]),
        (0, r.jsxs)(l.animated.div, {
            className: O.inviteCard,
            style: g,
            children: [
                (0, r.jsx)(l.animated.div, {
                    className: O.inviteChildContainer,
                    style: g,
                    children: (0, r.jsx)("section", {
                        ref: p,
                        className: null == a ? void 0 : a(d),
                        children: t(d),
                    }),
                }),
                n,
            ],
        })
    );
}
function T(e) {
    let { invite: t } = e;
    return null != t && (0, E.JI)(t)
        ? (0, r.jsx)(
              A,
              y(
                  N(
                      {
                          startAnimHeightPx: 0,
                          innerStyle: () => O.guildInfoInner,
                      },
                      e,
                  ),
                  { children: (e) => (null == t ? null : 1 === e ? (0, r.jsx)(j.X, { invite: t }) : null) },
              ),
          )
        : null;
}
function P(e) {
    let { invite: t } = e,
        n = {
            1: O.inviteCardInner,
            2: O.inviteCardInnerError,
            0: O.inviteCardInnerLoading,
        };
    return (0, r.jsx)(
        A,
        y(
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
                        if (null == t) return (0, r.jsx)(S, {});
                        switch (n) {
                            case 1:
                                return (0, r.jsx)(v.Z, y(N({}, e), { invite: t }));
                            case 2:
                                return (0, r.jsx)(Z, y(N({}, e), { invite: t }));
                            default:
                                return (0, r.jsx)(S, {});
                        }
                    })(n),
            },
        ),
    );
}
function R(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = null != t ? t : {},
        l = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = f.ZP.getGuildSplashURL({
            id: i.id,
            splash: i.splash,
        });
        null != e && ((l.backgroundImage = "url(".concat(e, ")")), (l.backgroundSize = "cover"));
    }
    return (0, r.jsxs)(d.ZP, {
        theme: b.BRd.DARK,
        className: O.splashBackground,
        style: l,
        contentClassName: O.centerAuthBoxContent,
        children: [(0, r.jsx)(P, y(N({}, e), { onAcceptInvite: n })), (0, r.jsx)(T, N({}, e))],
    });
}
function w(e) {
    let { inviteKey: t, transitionTo: n } = e,
        l = (0, s.e7)([m.Z], () => m.Z.getInvite(t));
    return (
        i.useEffect(() => {
            (0, h.e)("invite_mobile");
        }, []),
        i.useEffect(() => {
            null != l &&
                l.state === b.r2o.RESOLVED &&
                g.default.track(
                    b.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == l ? void 0 : l.friends_count,
                    },
                    { flush: !0 },
                );
        }, [l, t]),
        (0, r.jsx)(R, {
            invite: l,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var r, i, l;
                    null == e || e.preventDefault(),
                        g.default.track(b.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, x.jX)(t),
                            guild_id: null == n || null == (r = n.guild) ? void 0 : r.id,
                            channel_id: null == n || null == (i = n.channel) ? void 0 : i.id,
                            inviter_id: null == n || null == (l = n.inviter) ? void 0 : l.id,
                        });
                    let s = null != n && n.state !== b.r2o.EXPIRED && n.state !== b.r2o.BANNED ? t : void 0,
                        o = p.default.getFingerprint(),
                        c = null != o ? o : p.default.getId(),
                        u =
                            null != n && (null == n ? void 0 : n.type) != null
                                ? Number(null == n ? void 0 : n.type)
                                : void 0;
                    a.ZP.openApp(s, void 0, c, void 0, u);
                })(e, t, l);
            },
            transitionTo: n,
        })
    );
}
