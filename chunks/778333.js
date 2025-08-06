n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(493683),
    s = n(447543),
    l = n(100527),
    c = n(906732),
    u = n(955415),
    d = n(598077),
    f = n(314897),
    _ = n(592125),
    p = n(699516),
    h = n(51144),
    m = n(981631),
    g = n(388032),
    E = n(273254);
function b(e) {
    var t;
    let { invite: n, message: b, getAcceptInviteContext: y } = e,
        O = (0, o.e7)([f.default], () => f.default.getId()),
        v = (null == (t = n.inviter) ? void 0 : t.id) === O,
        I = n.state === m.r2o.ACCEPTING,
        { analyticsLocations: T } = (0, c.ZP)(l.Z.INVITE_EMBED),
        S = (0, o.e7)([p.Z], () => {
            var e;
            return null != n.inviter && p.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        A = i.useCallback(() => {
            let e = 'noop';
            (null != n.inviter && null != _.Z.getDMFromUserId(n.inviter.id) && ((e = 'transition'), a.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })),
                (0, s.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: b.author.id,
                        invite_message_id: b.id
                    },
                    T
                ));
        }, [n, b, T]),
        N = i.useCallback(() => {
            (0, s.r$)(
                {
                    invite: n,
                    action: 'accept',
                    inviter_id: b.author.id,
                    invite_message_id: b.id
                },
                T
            );
            let e = y('Invite Button Embed');
            s.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n, b, T, y]);
    if (null == n.inviter) return null;
    let C = S ? A : N,
        R = g.intl.string(g.t.ib7Ng4),
        P = u.Z.Button.Colors.GREEN;
    S ? ((R = g.intl.string(g.t.xhxnPj)), (P = u.Z.Button.Colors.PRIMARY)) : v && ((R = g.intl.string(g.t.ib7Ng4)), (P = u.Z.Button.Colors.PRIMARY));
    let w = v ? g.intl.string(g.t.eQyu1N) : g.intl.string(g.t.PYJHW1),
        D = null != n.inviter ? ''.concat(n.inviter.username) : '',
        L = null != n.inviter ? h.ZP.getUserTag(n.inviter) : '';
    return (0, r.jsxs)(u.Z, {
        children: [
            (0, r.jsx)(u.Z.Header, { text: w }),
            (0, r.jsxs)(u.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: E.headerLine,
                        children: [
                            (0, r.jsx)(u.Z.Icon, {
                                user: new d.Z(n.inviter),
                                onClick: S ? C : void 0
                            }),
                            (0, r.jsx)(u.Z.Info, {
                                title: D,
                                onClick: S ? C : void 0,
                                children: L
                            })
                        ]
                    }),
                    (0, r.jsx)(u.Z.Button, {
                        onClick: C,
                        submitting: I,
                        isDisabled: v,
                        color: P,
                        children: R
                    })
                ]
            })
        ]
    });
}
