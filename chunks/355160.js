r.d(t, { default: () => y }), r(388685);
var n = r(54381),
    i = r(473749),
    a = r(159691),
    c = r(481060),
    l = r(749210),
    o = r(479531),
    s = r(367907),
    u = r(906732),
    d = r(626135),
    b = r(51144),
    p = r(981631),
    O = r(388032),
    f = r(678286);
function y(e) {
    var t;
    let { transitionState: r, guild: y, user: g, ban: j, onClose: m } = e,
        [x, h] = i.useState(!1),
        [v, P] = i.useState(null),
        { analyticsLocations: w } = (0, u.ZP)(),
        k = null != (t = null == w ? void 0 : w[0]) ? t : null,
        S = i.useCallback(async () => {
            if (null != y) {
                P(null), h(!0);
                try {
                    var e, t;
                    await l.Z.unbanUser(y.id, g.id),
                        m(),
                        d.default.track(
                            p.rMx.GUILD_BAN_REMOVED,
                            ((e = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, (0, s.hH)(y.id))),
                            (t = {
                                target_user_id: g.id,
                                reason: j.reason,
                                location: k,
                            }),
                            (t = null != t ? t : {}),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(t)).forEach(function (r) {
                                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                  }),
                            e),
                        );
                } catch (e) {
                    P(new o.Z(e)), h(!1);
                }
            }
        }, [j.reason, y, k, m, g.id]);
    return (0, n.jsx)(a.u_l, {
        title: b.ZP.getUserTag(g, { mode: "username" }),
        actions: [
            {
                text: O.intl.string(O.t.UPcIa5),
                onClick: S,
                variant: "critical-secondary",
                loading: x,
            },
            {
                text: O.intl.string(O.t.i4jeWR),
                onClick: m,
            },
        ],
        onClose: m,
        transitionState: r,
        children: (0, n.jsxs)("div", {
            className: f.content,
            children: [
                (0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    children: O.intl.string(O.t["9Ki66N"]),
                }),
                (0, n.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: null != j.reason && "" !== j.reason ? j.reason : O.intl.string(O.t["t+2Zci"]),
                }),
                null != v
                    ? (0, n.jsx)(c.Text, {
                          className: f.error,
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: v.getAnyErrorMessage(),
                      })
                    : null,
            ],
        }),
    });
}
