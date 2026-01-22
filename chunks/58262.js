n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(308528),
    l = n(846293),
    c = n(793574),
    u = n(688810),
    d = n(529200),
    f = n(427157),
    p = n(961350),
    _ = n(734057),
    h = n(994500),
    m = n(427262),
    g = n(652215),
    E = n(985018),
    b = n(563111);

function y(e) {
    var t;
    let { invite: n, message: y, getAcceptInviteContext: O } = e,
        A = (0, s.bG)([p.default], () => p.default.getId()),
        v = (null == (t = n.inviter) ? void 0 : t.id) === A,
        S = n.state === g.elq.ACCEPTING,
        { analyticsLocations: I } = (0, u.Ay)(c.A.INVITE_EMBED),
        T = (0, s.bG)([h.A], () => {
            var e;
            return null != n.inviter && h.A.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        C = i.useCallback(() => {
            let e = "noop";
            null != n.inviter &&
                null != _.A.getDMFromUserId(n.inviter.id) &&
                ((e = "transition"),
                o.A.openPrivateChannel({
                    recipientIds: [n.inviter.id],
                })),
                (0, l.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: y.author.id,
                        invite_message_id: y.id,
                    },
                    I,
                );
        }, [n, y, I]),
        N = i.useCallback(() => {
            (0, l.he)(
                {
                    invite: n,
                    action: "accept",
                    inviter_id: y.author.id,
                    invite_message_id: y.id,
                },
                I,
            );
            let e = O("Invite Button Embed");
            l.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e,
            });
        }, [n, y, I, O]);
    if (null == n.inviter) return null;
    let R = T ? C : N,
        w = E.intl.string(E.t.ib7Ng1),
        P = "active";
    T
        ? ((w = E.intl.string(E.t.xhxnPn)), (P = "secondary"))
        : v && ((w = E.intl.string(E.t.ib7Ng1)), (P = "secondary"));
    let D = v ? E.intl.string(E.t.eQyu1F) : E.intl.string(E.t.PYJHW6),
        x = null != n.inviter ? "".concat(n.inviter.username) : "",
        L = null != n.inviter ? m.Ay.getUserTag(n.inviter) : "";
    return (0, r.jsxs)(d.A, {
        children: [
            (0, r.jsx)(d.A.Header, {
                text: D,
            }),
            (0, r.jsxs)(d.A.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: b.iH,
                        children: [
                            (0, r.jsx)(d.A.Icon, {
                                user: new f.A(n.inviter),
                                onClick: T ? R : void 0,
                            }),
                            (0, r.jsx)(d.A.Info, {
                                title: x,
                                onClick: T ? R : void 0,
                                children: L,
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.$nd, {
                        onClick: R,
                        text: w,
                        loading: S,
                        disabled: v,
                        variant: P,
                    }),
                ],
            }),
        ],
    });
}
