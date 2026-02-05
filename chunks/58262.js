n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(308528),
    o = n(846293),
    d = n(793574),
    c = n(688810),
    u = n(529200),
    m = n(427157),
    _ = n(961350),
    h = n(734057),
    p = n(994500),
    g = n(427262),
    A = n(652215),
    f = n(985018),
    x = n(563111);
function E(e) {
    let { invite: t, message: n, getAcceptInviteContext: E } = e,
        C = (0, r.bG)([_.default], () => _.default.getId()),
        I = t.inviter?.id === C,
        T = t.state === A.elq.ACCEPTING,
        { analyticsLocations: v } = (0, c.Ay)(d.A.INVITE_EMBED),
        N = (0, r.bG)([p.A], () => null != t.inviter && p.A.isFriend(t.inviter?.id)),
        S = l.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != h.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), s.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, o.he)({ invite: t, action: e, inviter_id: n.author.id, invite_message_id: n.id }, v);
        }, [t, n, v]),
        b = l.useCallback(() => {
            (0, o.he)({ invite: t, action: "accept", inviter_id: n.author.id, invite_message_id: n.id }, v);
            let e = E("Invite Button Embed");
            o.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, v, E]);
    if (null == t.inviter) return null;
    let y = N ? S : b,
        j = f.intl.string(f.t.ib7Ng1),
        R = "active";
    N
        ? ((j = f.intl.string(f.t.xhxnPn)), (R = "secondary"))
        : I && ((j = f.intl.string(f.t.ib7Ng1)), (R = "secondary"));
    let L = I ? f.intl.string(f.t.eQyu1F) : f.intl.string(f.t.PYJHW6),
        M = null != t.inviter ? `${t.inviter.username}` : "",
        O = null != t.inviter ? g.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(u.A, {
        children: [
            (0, i.jsx)(u.A.Header, { text: L }),
            (0, i.jsxs)(u.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: x.iH,
                        children: [
                            (0, i.jsx)(u.A.Icon, { user: new m.A(t.inviter), onClick: N ? y : void 0 }),
                            (0, i.jsx)(u.A.Info, { title: M, onClick: N ? y : void 0, children: O }),
                        ],
                    }),
                    (0, i.jsx)(a.$nd, { onClick: y, text: j, loading: T, disabled: I, variant: R }),
                ],
            }),
        ],
    });
}
