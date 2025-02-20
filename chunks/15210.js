n.d(t, { Z: () => p });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(447543),
    c = n(234383),
    s = n(703656),
    u = n(769654),
    d = n(314897),
    m = n(271383),
    x = n(701190),
    v = n(900849),
    f = n(981631),
    j = n(388032);
function h(e) {
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
}
function g(e, t) {
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
function p(e) {
    let { profile: t } = e,
        { id: n, features: p } = t,
        b = (0, i.e7)([d.default], () => d.default.getId()),
        y = (0, i.e7)(
            [m.ZP],
            () => {
                var e;
                return (null === (e = null != n ? m.ZP.getMember(n, b) : null) || void 0 === e ? void 0 : e.joinedAt) != null;
            },
            [n, b]
        ),
        O = (0, c.Z)(),
        I = l.useCallback(() => {
            (0, u.X)(n);
        }, [n]),
        N = l.useCallback(() => {
            (0, s.uL)(f.Z5c.GUILD_MEMBER_VERIFICATION(n));
        }, [n]),
        P = l.useCallback(async () => {
            let e = x.Z.getInviteKeyForGuildId(n);
            null != e &&
                (await o.Z.acceptInvite({
                    inviteKey: e,
                    context: { location: 'guild_profile' }
                }));
        }, [n]),
        E = l.useCallback(() => {
            (0, v.Ub)(n, { object: f.qAy.GUILD_PROFILE });
        }, [n]),
        Z = l.useMemo(
            () => ({
                size: a.zxk.Sizes.SMALL,
                fullWidth: !0
            }),
            []
        );
    return l.useMemo(
        () =>
            y
                ? (0, r.jsx)(
                      a.zxk,
                      g(h({}, Z), {
                          onClick: I,
                          children: j.NW.string(j.t.KLOhbG)
                      })
                  )
                : O.includes(n)
                  ? (0, r.jsx)(
                        a.zxk,
                        g(h({}, Z), {
                            onClick: N,
                            children: j.NW.string(j.t['4yfIDg'])
                        })
                    )
                  : (null == p ? void 0 : p.includes(f.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == p ? void 0 : p.includes(f.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))
                    ? (0, r.jsx)(
                          a.zxk,
                          g(h({}, Z), {
                              onClick: P,
                              children: j.NW.string(j.t['7XdMW1'])
                          })
                      )
                    : (null == p ? void 0 : p.includes(f.oNc.DISCOVERABLE))
                      ? (0, r.jsx)(
                            a.zxk,
                            g(h({}, Z), {
                                onClick: E,
                                children: j.NW.string(j.t.d6r93d)
                            })
                        )
                      : void 0,
        [Z, p, n, N, I, E, P, y, O]
    );
}
