n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(447543),
    s = n(66511),
    l = n(703656),
    c = n(769654),
    u = n(900849),
    d = n(330705),
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
    let { profile: t, onClick: n, submitting: h } = e,
        { guildId: g, validInviteKey: b, ctaType: y } = (0, f.ZP)(t),
        [v, O] = i.useState(!1),
        I = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, c.X)(g), null == n || n();
            },
            [g, n]
        ),
        S = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, l.uL)(_.Z5c.GUILD_MEMBER_VERIFICATION(g)), null == n || n();
            },
            [g, n]
        ),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != b &&
                        (a.ZP.acceptInvite({
                            inviteKey: b,
                            context: { location: 'guild_profile' }
                        }),
                        null == n || n());
            },
            [n, b]
        ),
        N = i.useCallback(
            (e) => {
                e.stopPropagation(), t.visibility !== d.k.PUBLIC_WITH_RECRUITMENT && null != b ? T(e) : s.Z.openMemberVerificationModal(g, void 0, b), null == n || n();
            },
            [g, T, n, t.visibility, b]
        ),
        A = i.useCallback(
            async (e) => {
                e.stopPropagation(), O(!0);
                try {
                    await (0, u.Ub)(g, { object: _.qAy.GUILD_PROFILE }), null == n || n();
                } catch (e) {
                } finally {
                    O(!1);
                }
            },
            [g, n]
        ),
        C = i.useMemo(
            () => ({
                size: o.zxk.Sizes.SMALL,
                fullWidth: !0,
                submitting: v || h
            }),
            [v, h]
        );
    switch (y) {
        case f.sE.IS_MEMBER:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, C), {
                    onClick: I,
                    children: p.NW.string(p.t.KLOhbG)
                })
            );
        case f.sE.HAS_APPLICATION:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, C), {
                    onClick: S,
                    children: p.NW.string(p.t['4yfIDg'])
                })
            );
        case f.sE.APPLY_TO_JOIN:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, C), {
                    onClick: N,
                    children: p.NW.string(p.t['7XdMW1'])
                })
            );
        case f.sE.LURK_DISCOVERABLE:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, C), {
                    onClick: A,
                    children: p.NW.string(p.t.eb9gDA)
                })
            );
        case f.sE.JOIN_VIA_INVITE:
            return (0, r.jsx)(
                o.zxk,
                E(m({}, C), {
                    onClick: T,
                    children: p.NW.string(p.t.eb9gDA)
                })
            );
        default:
            return null;
    }
}
