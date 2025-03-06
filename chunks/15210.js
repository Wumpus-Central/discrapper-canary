n.d(t, { Z: () => b });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(447543),
    o = n(66511),
    c = n(703656),
    s = n(769654),
    u = n(900849),
    d = n(405222),
    m = n(993860),
    v = n(981631),
    f = n(388032);
function j(e) {
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
function x(e, t) {
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
function b(e) {
    let { profile: t, submitting: n, onClick: b } = e,
        { guildId: h, validInviteKey: p, ctaType: g } = (0, m.Z)(t),
        y = l.useCallback(() => {
            (0, s.X)(h), null == b || b();
        }, [h, b]),
        I = l.useCallback(() => {
            (0, c.uL)(v.Z5c.GUILD_MEMBER_VERIFICATION(h)), null == b || b();
        }, [h, b]),
        O = l.useCallback(() => {
            null != p &&
                (a.ZP.acceptInvite({
                    inviteKey: p,
                    context: { location: 'guild_profile' }
                }),
                null == b || b());
        }, [b, p]),
        P = l.useCallback(() => {
            t.visibility !== d.k.PUBLIC_WITH_RECRUITMENT && null != p ? O() : o.Z.openMemberVerificationModal(h, void 0, p), null == b || b();
        }, [h, O, b, t.visibility, p]),
        N = l.useCallback(() => {
            (0, u.Ub)(h, { object: v.qAy.GUILD_PROFILE }), null == b || b();
        }, [h, b]),
        E = l.useMemo(
            () => ({
                size: i.zxk.Sizes.SMALL,
                fullWidth: !0,
                submitting: n
            }),
            [n]
        );
    switch (g) {
        case m.s.IS_MEMBER:
            return (0, r.jsx)(
                i.zxk,
                x(j({}, E), {
                    onClick: y,
                    children: f.NW.string(f.t.KLOhbG)
                })
            );
        case m.s.HAS_APPLICATION:
            return (0, r.jsx)(
                i.zxk,
                x(j({}, E), {
                    onClick: I,
                    children: f.NW.string(f.t['4yfIDg'])
                })
            );
        case m.s.APPLY_TO_JOIN:
            return (0, r.jsx)(
                i.zxk,
                x(j({}, E), {
                    onClick: P,
                    children: f.NW.string(f.t['7XdMW1'])
                })
            );
        case m.s.LURK_DISCOVERABLE:
            return (0, r.jsx)(
                i.zxk,
                x(j({}, E), {
                    onClick: N,
                    children: f.NW.string(f.t.eb9gDA)
                })
            );
        case m.s.JOIN_VIA_INVITE:
            return (0, r.jsx)(
                i.zxk,
                x(j({}, E), {
                    onClick: O,
                    children: f.NW.string(f.t.eb9gDA)
                })
            );
        default:
            return null;
    }
}
