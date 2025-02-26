n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(447543),
    s = n(66511),
    o = n(703656),
    c = n(769654),
    u = n(900849),
    d = n(405222),
    m = n(993860),
    v = n(981631),
    x = n(388032);
function f(e) {
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
function I(e, t) {
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
function h(e) {
    let { profile: t } = e,
        { guildId: n, validInviteKey: h, ctaType: j } = (0, m.Z)(t),
        g = l.useCallback(() => {
            (0, c.X)(n);
        }, [n]),
        b = l.useCallback(() => {
            (0, o.uL)(v.Z5c.GUILD_MEMBER_VERIFICATION(n));
        }, [n]),
        p = l.useCallback(() => {
            null != h &&
                a.Z.acceptInvite({
                    inviteKey: h,
                    context: { location: 'guild_profile' }
                });
        }, [h]),
        O = l.useCallback(() => {
            t.visibility !== d.k.PUBLIC_WITH_RECRUITMENT && null != h ? p() : s.Z.openMemberVerificationModal(n, void 0, h);
        }, [n, p, t.visibility, h]),
        y = l.useCallback(() => {
            (0, u.Ub)(n, { object: v.qAy.GUILD_PROFILE });
        }, [n]),
        N = l.useMemo(
            () => ({
                size: i.zxk.Sizes.SMALL,
                fullWidth: !0
            }),
            []
        );
    switch (j) {
        case m.s.IS_MEMBER:
            return (0, r.jsx)(
                i.zxk,
                I(f({}, N), {
                    onClick: g,
                    children: x.NW.string(x.t.KLOhbG)
                })
            );
        case m.s.HAS_APPLICATION:
            return (0, r.jsx)(
                i.zxk,
                I(f({}, N), {
                    onClick: b,
                    children: x.NW.string(x.t['4yfIDg'])
                })
            );
        case m.s.APPLY_TO_JOIN:
            return (0, r.jsx)(
                i.zxk,
                I(f({}, N), {
                    onClick: O,
                    children: x.NW.string(x.t['7XdMW1'])
                })
            );
        case m.s.LURK_DISCOVERABLE:
            return (0, r.jsx)(
                i.zxk,
                I(f({}, N), {
                    onClick: y,
                    children: x.NW.string(x.t.eb9gDA)
                })
            );
        case m.s.JOIN_VIA_INVITE:
            return (0, r.jsx)(
                i.zxk,
                I(f({}, N), {
                    onClick: p,
                    children: x.NW.string(x.t.eb9gDA)
                })
            );
        default:
            return null;
    }
}
