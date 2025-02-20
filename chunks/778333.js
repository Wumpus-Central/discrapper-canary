n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(493683),
    l = n(447543),
    s = n(955415),
    c = n(598077),
    d = n(314897),
    u = n(592125),
    p = n(699516),
    m = n(51144),
    f = n(981631),
    h = n(388032),
    g = n(217480);
function _(e) {
    var t;
    let { invite: n, getAcceptInviteContext: _ } = e,
        b = (0, a.e7)([d.default], () => d.default.getId()),
        v = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === b,
        y = n.state === f.r2o.ACCEPTING,
        x = (0, a.e7)([p.Z], () => {
            var e;
            return null != n.inviter && p.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }),
        O = i.useCallback(() => {
            null != n.inviter && null != u.Z.getDMFromUserId(n.inviter.id) && o.Z.openPrivateChannel([n.inviter.id]);
        }, [n.inviter]),
        E = i.useCallback(() => {
            let e = _('Invite Button Embed');
            l.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n.code, _]);
    if (null == n.inviter) return null;
    let j = x ? O : E,
        N = h.NW.string(h.t.ib7Ng4),
        C = s.Z.Button.Colors.GREEN;
    x ? ((N = h.NW.string(h.t.xhxnPj)), (C = s.Z.Button.Colors.PRIMARY)) : v && ((N = h.NW.string(h.t.ib7Ng4)), (C = s.Z.Button.Colors.PRIMARY));
    let I = v ? h.NW.string(h.t.eQyu1N) : h.NW.string(h.t.PYJHW1),
        S = null != n.inviter ? ''.concat(n.inviter.username) : '',
        P = null != n.inviter ? m.ZP.getUserTag(n.inviter) : '';
    return (0, r.jsxs)(s.Z, {
        children: [
            (0, r.jsx)(s.Z.Header, { text: I }),
            (0, r.jsxs)(s.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: g.headerLine,
                        children: [
                            (0, r.jsx)(s.Z.Icon, {
                                user: new c.Z(n.inviter),
                                onClick: x ? j : void 0
                            }),
                            (0, r.jsx)(s.Z.Info, {
                                title: S,
                                onClick: x ? j : void 0,
                                children: P
                            })
                        ]
                    }),
                    (0, r.jsx)(s.Z.Button, {
                        onClick: j,
                        submitting: y,
                        isDisabled: v,
                        color: C,
                        children: N
                    })
                ]
            })
        ]
    });
}
