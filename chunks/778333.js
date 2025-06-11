n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(493683),
    o = n(447543),
    s = n(100527),
    c = n(906732),
    u = n(955415),
    d = n(598077),
    p = n(314897),
    m = n(592125),
    f = n(699516),
    h = n(51144),
    g = n(981631),
    _ = n(388032),
    b = n(273254);
function E(e) {
    var t;
    let { invite: n, message: E, getAcceptInviteContext: y } = e,
        x = (0, l.e7)([p.default], () => p.default.getId()),
        v = (null == (t = n.inviter) ? void 0 : t.id) === x,
        O = n.state === g.r2o.ACCEPTING,
        { analyticsLocations: C } = (0, c.ZP)(s.Z.INVITE_EMBED),
        j = (0, l.e7)([f.Z], () => {
            var e;
            return null != n.inviter && f.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        S = i.useCallback(() => {
            let e = 'noop';
            null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && ((e = 'transition'), a.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })),
                (0, o.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: E.author.id,
                        invite_message_id: E.id
                    },
                    C
                );
        }, [n, E, C]),
        I = i.useCallback(() => {
            (0, o.r$)(
                {
                    invite: n,
                    action: 'accept',
                    inviter_id: E.author.id,
                    invite_message_id: E.id
                },
                C
            );
            let e = y('Invite Button Embed');
            o.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n, E, C, y]);
    if (null == n.inviter) return null;
    let N = j ? S : I,
        T = _.intl.string(_.t.ib7Ng4),
        P = u.Z.Button.Colors.GREEN;
    j ? ((T = _.intl.string(_.t.xhxnPj)), (P = u.Z.Button.Colors.PRIMARY)) : v && ((T = _.intl.string(_.t.ib7Ng4)), (P = u.Z.Button.Colors.PRIMARY));
    let A = v ? _.intl.string(_.t.eQyu1N) : _.intl.string(_.t.PYJHW1),
        w = null != n.inviter ? ''.concat(n.inviter.username) : '',
        Z = null != n.inviter ? h.ZP.getUserTag(n.inviter) : '';
    return (0, r.jsxs)(u.Z, {
        children: [
            (0, r.jsx)(u.Z.Header, { text: A }),
            (0, r.jsxs)(u.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: b.headerLine,
                        children: [
                            (0, r.jsx)(u.Z.Icon, {
                                user: new d.Z(n.inviter),
                                onClick: j ? N : void 0
                            }),
                            (0, r.jsx)(u.Z.Info, {
                                title: w,
                                onClick: j ? N : void 0,
                                children: Z
                            })
                        ]
                    }),
                    (0, r.jsx)(u.Z.Button, {
                        onClick: N,
                        submitting: O,
                        isDisabled: v,
                        color: P,
                        children: T
                    })
                ]
            })
        ]
    });
}
