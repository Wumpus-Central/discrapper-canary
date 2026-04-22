n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(821609),
    s = n(311907),
    r = n(308528),
    o = n(846293),
    d = n(793574),
    c = n(688810),
    u = n(21599),
    m = n(529200),
    _ = n(427157),
    h = n(961350),
    p = n(734057),
    g = n(994500),
    A = n(427262),
    f = n(652215),
    x = n(985018),
    C = n(344900);
function E(e) {
    let { invite: t, message: n, getAcceptInviteContext: E } = e,
        I = (0, s.bG)([h.default], () => h.default.getId()),
        v = t.inviter?.id === I,
        b = t.state === f.elq.ACCEPTING,
        { analyticsLocations: T } = (0, c.Ay)(d.A.INVITE_EMBED),
        S = (0, s.bG)([g.A], () => null != t.inviter && g.A.isFriend(t.inviter?.id)),
        y = l.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != p.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), r.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, o.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, u._U)(t.code, n.id),
                    },
                    T,
                );
        }, [t, n, T]),
        N = l.useCallback(() => {
            (0, o.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, u._U)(t.code, n.id),
                },
                T,
            );
            let e = E("Invite Button Embed", t.code);
            o.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, T, E]);
    if (null == t.inviter) return null;
    let j = S ? y : N,
        L = x.intl.string(x.t.ib7Ng1),
        R = "active";
    S
        ? ((L = x.intl.string(x.t.xhxnPn)), (R = "secondary"))
        : v && ((L = x.intl.string(x.t.ib7Ng1)), (R = "secondary"));
    let P = v ? x.intl.string(x.t.eQyu1F) : x.intl.string(x.t.PYJHW6),
        w = null != t.inviter ? `${t.inviter.username}` : "",
        D = null != t.inviter ? A.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(m.A, {
        children: [
            (0, i.jsx)(m.A.Header, { text: P }),
            (0, i.jsxs)(m.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: C.iH,
                        children: [
                            (0, i.jsx)(m.A.Icon, { user: new _.A(t.inviter), onClick: S ? j : void 0 }),
                            (0, i.jsx)(m.A.Info, { title: w, onClick: S ? j : void 0, children: D }),
                        ],
                    }),
                    (0, i.jsx)(a.$, { onClick: j, text: L, loading: b, disabled: v, variant: R }),
                ],
            }),
        ],
    });
}
