n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    r = n(158954),
    l = n(311907),
    s = n(308528),
    o = n(846293),
    d = n(793574),
    c = n(688810),
    u = n(21599),
    _ = n(529200),
    m = n(427157),
    h = n(961350),
    p = n(734057),
    g = n(994500),
    A = n(427262),
    x = n(652215),
    f = n(985018),
    C = n(366228);
function I(e) {
    let { invite: t, message: n, getAcceptInviteContext: I } = e,
        E = (0, l.bG)([h.default], () => h.default.getId()),
        b = t.inviter?.id === E,
        v = t.state === x.elq.ACCEPTING,
        { analyticsLocations: T } = (0, c.Ay)(d.A.INVITE_EMBED),
        y = (0, l.bG)([g.A], () => null != t.inviter && g.A.isFriend(t.inviter?.id)),
        S = a.useCallback(() => {
            let e = "noop";
            null != t.inviter &&
                null != p.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), s.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
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
        N = a.useCallback(() => {
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
            let e = I("Invite Button Embed", t.code);
            o.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, T, I]);
    if (null == t.inviter) return null;
    let j = y ? S : N,
        L = f.intl.string(f.t.ib7Ng1),
        R = "active";
    y
        ? ((L = f.intl.string(f.t.xhxnPn)), (R = "secondary"))
        : b && ((L = f.intl.string(f.t.ib7Ng1)), (R = "secondary"));
    let P = b ? f.intl.string(f.t.eQyu1F) : f.intl.string(f.t.PYJHW6),
        w = null != t.inviter ? `${t.inviter.username}` : "",
        M = null != t.inviter ? A.Ay.getUserTag(t.inviter) : "";
    return (0, i.jsxs)(_.A, {
        children: [
            (0, i.jsx)(_.A.Header, { text: P }),
            (0, i.jsxs)(_.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: C.iH,
                        children: [
                            (0, i.jsx)(_.A.Icon, { user: new m.A(t.inviter), onClick: y ? j : void 0 }),
                            (0, i.jsx)(_.A.Info, { title: w, onClick: y ? j : void 0, children: M }),
                        ],
                    }),
                    (0, i.jsx)(r.$nd, { onClick: j, text: L, loading: v, disabled: b, variant: R }),
                ],
            }),
        ],
    });
}
