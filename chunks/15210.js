n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(447543),
    s = n(66511),
    l = n(300284),
    c = n(703656),
    u = n(769654),
    d = n(900849),
    f = n(330705),
    _ = n(993860),
    p = n(981631),
    h = n(526761),
    m = n(388032);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { profile: t, onClick: n, submitting: g, onClose: b } = e,
        { guildId: v, validInviteKey: O, ctaType: I } = (0, _.ZP)(t),
        [S, T] = i.useState(!1),
        N = (0, l.Z)({ scrollPosition: h.Y_.GUILD_TAG }),
        A = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, u.X)(v), null == n || n();
            },
            [v, n]
        ),
        C = i.useCallback(() => {
            null == b || b(), N(), null == n || n();
        }, [N, n, b]),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(v)), null == n || n();
            },
            [v, n]
        ),
        P = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != O &&
                        (a.ZP.acceptInvite({
                            inviteKey: O,
                            context: { location: 'guild_profile' }
                        }),
                        null == n || n());
            },
            [n, O]
        ),
        w = i.useCallback(
            (e) => {
                e.stopPropagation(), t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != O ? P(e) : s.Z.openMemberVerificationModal(v, void 0, O), null == n || n();
            },
            [v, P, n, t.visibility, O]
        ),
        D = i.useCallback(
            async (e) => {
                e.stopPropagation(), T(!0);
                try {
                    await (0, d.Ub)(v, { object: p.qAy.GUILD_PROFILE }), null == n || n();
                } catch (e) {
                } finally {
                    T(!1);
                }
            },
            [v, n]
        ),
        L = i.useMemo(
            () => ({
                size: o.zxk.Sizes.SMALL,
                fullWidth: !0,
                submitting: S || g
            }),
            [S, g]
        );
    switch (I) {
        case _.sE.IS_MEMBER:
            return (0, r.jsx)(
                o.zxk,
                y(E({}, L), {
                    onClick: A,
                    children: m.NW.string(m.t.KLOhbG)
                })
            );
        case _.sE.ADOPT_TAG:
            return (0, r.jsx)(
                o.zxk,
                y(E({}, L), {
                    onClick: C,
                    children: m.NW.string(m.t.cQDYRk)
                })
            );
        case _.sE.HAS_APPLICATION:
            return (0, r.jsx)(
                o.zxk,
                y(E({}, L), {
                    onClick: R,
                    children: m.NW.string(m.t['4yfIDg'])
                })
            );
        case _.sE.APPLY_TO_JOIN:
            return (0, r.jsx)(
                o.zxk,
                y(E({}, L), {
                    onClick: w,
                    children: m.NW.string(m.t['7XdMW1'])
                })
            );
        case _.sE.LURK_DISCOVERABLE:
            return (0, r.jsx)(
                o.zxk,
                y(E({}, L), {
                    onClick: D,
                    children: m.NW.string(m.t.eb9gDA)
                })
            );
        case _.sE.JOIN_VIA_INVITE:
            return (0, r.jsx)(
                o.zxk,
                y(E({}, L), {
                    onClick: P,
                    children: m.NW.string(m.t.eb9gDA)
                })
            );
        default:
            return null;
    }
}
