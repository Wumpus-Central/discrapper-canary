n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(447543),
    s = n(66511),
    l = n(703656),
    c = n(769654),
    u = n(900849),
    d = n(405222),
    f = n(993860),
    _ = n(981631),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { profile: t, submitting: n, onClick: h } = e,
        { guildId: g, validInviteKey: b, ctaType: v } = (0, f.Z)(t),
        y = i.useCallback(() => {
            (0, c.X)(g), null == h || h();
        }, [g, h]),
        O = i.useCallback(() => {
            (0, l.uL)(_.Z5c.GUILD_MEMBER_VERIFICATION(g)), null == h || h();
        }, [g, h]),
        I = i.useCallback(() => {
            null != b &&
                (a.ZP.acceptInvite({
                    inviteKey: b,
                    context: { location: 'guild_profile' }
                }),
                null == h || h());
        }, [h, b]),
        S = i.useCallback(() => {
            t.visibility !== d.k.PUBLIC_WITH_RECRUITMENT && null != b ? I() : s.Z.openMemberVerificationModal(g, void 0, b), null == h || h();
        }, [g, I, h, t.visibility, b]),
        T = i.useCallback(() => {
            (0, u.Ub)(g, { object: _.qAy.GUILD_PROFILE }), null == h || h();
        }, [g, h]),
        N = i.useMemo(
            () => ({
                size: o.zxk.Sizes.SMALL,
                fullWidth: !0,
                submitting: n
            }),
            [n]
        );
    switch (v) {
        case f.s.IS_MEMBER:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, N), {
                    onClick: y,
                    children: p.NW.string(p.t.KLOhbG)
                })
            );
        case f.s.HAS_APPLICATION:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, N), {
                    onClick: O,
                    children: p.NW.string(p.t['4yfIDg'])
                })
            );
        case f.s.APPLY_TO_JOIN:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, N), {
                    onClick: S,
                    children: p.NW.string(p.t['7XdMW1'])
                })
            );
        case f.s.LURK_DISCOVERABLE:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, N), {
                    onClick: T,
                    children: p.NW.string(p.t.eb9gDA)
                })
            );
        case f.s.JOIN_VIA_INVITE:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, N), {
                    onClick: I,
                    children: p.NW.string(p.t.eb9gDA)
                })
            );
        default:
            return null;
    }
}
