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
    let { invite: n, getAcceptInviteContext: x } = e,
        y = (0, a.e7)([p.default], () => p.default.getId()),
        E = (null == (t = n.inviter) ? void 0 : t.id) === y,
        v = n.state === g.r2o.ACCEPTING,
        { analyticsLocations: N } = (0, c.ZP)(s.Z.INVITE_EMBED),
        O = (0, a.e7)([f.Z], () => {
            var e;
            return null != n.inviter && f.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        j = i.useCallback(() => {
            let e = 'noop';
            null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && ((e = 'transition'), l.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })), (0, o.r$)(n, e, N);
        }, [n, N]),
        C = i.useCallback(() => {
            (0, o.r$)(n, 'accept', N);
            let e = x('Invite Button Embed');
            o.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n, N, x]);
    if (null == n.inviter) return null;
    let S = O ? j : C,
        I = _.NW.string(_.t.ib7Ng4),
        T = u.Z.Button.Colors.GREEN;
    O ? ((I = _.NW.string(_.t.xhxnPj)), (T = u.Z.Button.Colors.PRIMARY)) : E && ((I = _.NW.string(_.t.ib7Ng4)), (T = u.Z.Button.Colors.PRIMARY));
    let P = E ? _.NW.string(_.t.eQyu1N) : _.NW.string(_.t.PYJHW1),
        A = null != n.inviter ? ''.concat(n.inviter.username) : '',
        w = null != n.inviter ? h.ZP.getUserTag(n.inviter) : '';
    return (0, r.jsxs)(u.Z, {
        children: [
            (0, r.jsx)(u.Z.Header, { text: P }),
            (0, r.jsxs)(u.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: b.headerLine,
                        children: [
                            (0, r.jsx)(u.Z.Icon, {
                                user: new d.Z(n.inviter),
                                onClick: O ? S : void 0
                            }),
                            (0, r.jsx)(u.Z.Info, {
                                title: A,
                                onClick: O ? S : void 0,
                                children: w
                            })
                        ]
                    }),
                    (0, r.jsx)(u.Z.Button, {
                        onClick: S,
                        submitting: v,
                        isDisabled: E,
                        color: T,
                        children: I
                    })
                ]
            })
        ]
    });
}
