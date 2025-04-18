n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(493683),
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
function x(e) {
    var t;
    let { invite: n, author: x, getAcceptInviteContext: y } = e,
        v = (0, a.e7)([p.default], () => p.default.getId()),
        E = (null == (t = n.inviter) ? void 0 : t.id) === v,
        O = n.state === g.r2o.ACCEPTING,
        { analyticsLocations: N } = (0, c.ZP)(s.Z.INVITE_EMBED),
        j = (0, a.e7)([f.Z], () => {
            var e;
            return null != n.inviter && f.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        C = i.useCallback(() => {
            let e = 'noop';
            null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && ((e = 'transition'), l.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })),
                (0, o.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: x.id
                    },
                    N
                );
        }, [n, x, N]),
        S = i.useCallback(() => {
            (0, o.r$)(
                {
                    invite: n,
                    action: 'accept',
                    inviter_id: x.id
                },
                N
            );
            let e = y('Invite Button Embed');
            o.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n, x, N, y]);
    if (null == n.inviter) return null;
    let I = j ? C : S,
        T = _.NW.string(_.t.ib7Ng4),
        P = u.Z.Button.Colors.GREEN;
    j ? ((T = _.NW.string(_.t.xhxnPj)), (P = u.Z.Button.Colors.PRIMARY)) : E && ((T = _.NW.string(_.t.ib7Ng4)), (P = u.Z.Button.Colors.PRIMARY));
    let A = E ? _.NW.string(_.t.eQyu1N) : _.NW.string(_.t.PYJHW1),
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
                                onClick: j ? I : void 0
                            }),
                            (0, r.jsx)(u.Z.Info, {
                                title: w,
                                onClick: j ? I : void 0,
                                children: Z
                            })
                        ]
                    }),
                    (0, r.jsx)(u.Z.Button, {
                        onClick: I,
                        submitting: O,
                        isDisabled: E,
                        color: P,
                        children: T
                    })
                ]
            })
        ]
    });
}
