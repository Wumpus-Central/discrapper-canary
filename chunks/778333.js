n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(493683),
    l = n(447543),
    s = n(100527),
    c = n(906732),
    d = n(955415),
    u = n(598077),
    p = n(314897),
    m = n(592125),
    f = n(699516),
    h = n(51144),
    g = n(981631),
    _ = n(388032),
    b = n(217480);
function v(e) {
    var t;
    let { invite: n, getAcceptInviteContext: v } = e,
        y = (0, a.e7)([p.default], () => p.default.getId()),
        x = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === y,
        E = n.state === g.r2o.ACCEPTING,
        { analyticsLocations: O } = (0, c.ZP)(s.Z.INVITE_EMBED),
        j = (0, a.e7)([f.Z], () => {
            var e;
            return null != n.inviter && f.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }),
        N = i.useCallback(() => {
            let e = 'noop';
            null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && ((e = 'transition'), o.Z.openPrivateChannel([n.inviter.id])), (0, l.r$)(n, e, O);
        }, [n, O]),
        C = i.useCallback(() => {
            (0, l.r$)(n, 'accept', O);
            let e = v('Invite Button Embed');
            l.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n, O, v]);
    if (null == n.inviter) return null;
    let I = j ? N : C,
        S = _.NW.string(_.t.ib7Ng4),
        P = d.Z.Button.Colors.GREEN;
    j ? ((S = _.NW.string(_.t.xhxnPj)), (P = d.Z.Button.Colors.PRIMARY)) : x && ((S = _.NW.string(_.t.ib7Ng4)), (P = d.Z.Button.Colors.PRIMARY));
    let T = x ? _.NW.string(_.t.eQyu1N) : _.NW.string(_.t.PYJHW1),
        A = null != n.inviter ? ''.concat(n.inviter.username) : '',
        w = null != n.inviter ? h.ZP.getUserTag(n.inviter) : '';
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: T }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: b.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                user: new u.Z(n.inviter),
                                onClick: j ? I : void 0
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: A,
                                onClick: j ? I : void 0,
                                children: w
                            })
                        ]
                    }),
                    (0, r.jsx)(d.Z.Button, {
                        onClick: I,
                        submitting: E,
                        isDisabled: x,
                        color: P,
                        children: S
                    })
                ]
            })
        ]
    });
}
