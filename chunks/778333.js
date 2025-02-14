n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(493683),
    s = n(447543),
    o = n(955415),
    c = n(598077),
    d = n(314897),
    u = n(592125),
    m = n(699516),
    _ = n(51144),
    h = n(981631),
    p = n(388032),
    g = n(791686);
function f(e) {
    var t;
    let { invite: n, getAcceptInviteContext: f } = e,
        x = (0, a.e7)([d.default], () => d.default.getId()),
        C = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === x,
        E = n.state === h.r2o.ACCEPTING,
        v = (0, a.e7)([m.Z], () => {
            var e;
            return null != n.inviter && m.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }),
        I = l.useCallback(() => {
            null != n.inviter && null != u.Z.getDMFromUserId(n.inviter.id) && r.Z.openPrivateChannel([n.inviter.id]);
        }, [n.inviter]),
        N = l.useCallback(() => {
            let e = f('Invite Button Embed');
            s.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n.code, f]);
    if (null == n.inviter) return null;
    let S = v ? I : N,
        T = p.intl.string(p.t.ib7Ng4),
        b = o.Z.Button.Colors.GREEN;
    v ? ((T = p.intl.string(p.t.xhxnPj)), (b = o.Z.Button.Colors.PRIMARY)) : C && ((T = p.intl.string(p.t.ib7Ng4)), (b = o.Z.Button.Colors.PRIMARY));
    let A = C ? p.intl.string(p.t.eQyu1N) : p.intl.string(p.t.PYJHW1),
        j = null != n.inviter ? ''.concat(n.inviter.username) : '',
        y = null != n.inviter ? _.ZP.getUserTag(n.inviter) : '';
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(o.Z.Header, { text: A }),
            (0, i.jsxs)(o.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.headerLine,
                        children: [
                            (0, i.jsx)(o.Z.Icon, {
                                user: new c.Z(n.inviter),
                                onClick: v ? S : void 0
                            }),
                            (0, i.jsx)(o.Z.Info, {
                                title: j,
                                onClick: v ? S : void 0,
                                children: y
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z.Button, {
                        onClick: S,
                        submitting: E,
                        isDisabled: C,
                        color: b,
                        children: T
                    })
                ]
            })
        ]
    });
}
