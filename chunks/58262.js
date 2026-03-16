n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(158954),
    l = n(311907),
    s = n(308528),
    o = n(846293),
    d = n(793574),
    c = n(688810),
    u = n(529200),
    _ = n(427157),
    m = n(961350),
    h = n(734057),
    p = n(994500),
    g = n(427262),
    A = n(652215),
    x = n(985018),
    f = n(563111);
function C(e) {
    let { invite: t, message: n, getAcceptInviteContext: C } = e,
        E = (0, l.bG)([m.default], () => m.default.getId()),
        I = t.inviter?.id === E,
        b = t.state === A.elq.ACCEPTING,
        { analyticsLocations: T } = (0, c.Ay)(d.A.INVITE_EMBED),
        v = (0, l.bG)([p.A], () => null != t.inviter && p.A.isFriend(t.inviter?.id)),
        S = r.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != h.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), s.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, o.he)({ invite: t, action: e, inviter_id: n.author.id, invite_message_id: n.id }, T);
        }, [t, n, T]),
        y = r.useCallback(() => {
            (0, o.he)({ invite: t, action: "accept", inviter_id: n.author.id, invite_message_id: n.id }, T);
            let e = C("Invite Button Embed");
            o.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, T, C]);
    if (null == t.inviter) return null;
    let N = v ? S : y,
        j = x.intl.string(x.t.ib7Ng1),
        L = "active";
    v
        ? ((j = x.intl.string(x.t.xhxnPn)), (L = "secondary"))
        : I && ((j = x.intl.string(x.t.ib7Ng1)), (L = "secondary"));
    let R = I ? x.intl.string(x.t.eQyu1F) : x.intl.string(x.t.PYJHW6),
        P = null != t.inviter ? `${t.inviter.username}` : "",
        M = null != t.inviter ? g.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(u.A, {
        children: [
            (0, i.jsx)(u.A.Header, { text: R }),
            (0, i.jsxs)(u.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: f.iH,
                        children: [
                            (0, i.jsx)(u.A.Icon, { user: new _.A(t.inviter), onClick: v ? N : void 0 }),
                            (0, i.jsx)(u.A.Info, { title: P, onClick: v ? N : void 0, children: M }),
                        ],
                    }),
                    (0, i.jsx)(a.$nd, { onClick: N, text: j, loading: b, disabled: I, variant: L }),
                ],
            }),
        ],
    });
}
