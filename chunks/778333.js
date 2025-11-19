n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(493683),
    l = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(955415),
    f = n(598077),
    _ = n(314897),
    p = n(592125),
    h = n(699516),
    m = n(51144),
    g = n(981631),
    E = n(388032),
    b = n(105341);
function y(e) {
    var t;
    let { invite: n, message: y, getAcceptInviteContext: O } = e,
        v = (0, o.e7)([_.default], () => _.default.getId()),
        I = (null == (t = n.inviter) ? void 0 : t.id) === v,
        T = n.state === g.r2o.ACCEPTING,
        { analyticsLocations: S } = (0, u.ZP)(c.Z.INVITE_EMBED),
        A = (0, o.e7)([h.Z], () => {
            var e;
            return null != n.inviter && h.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        C = i.useCallback(() => {
            let e = "noop";
            null != n.inviter &&
                null != p.Z.getDMFromUserId(n.inviter.id) &&
                ((e = "transition"), s.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })),
                (0, l.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: y.author.id,
                        invite_message_id: y.id,
                    },
                    S,
                );
        }, [n, y, S]),
        N = i.useCallback(() => {
            (0, l.r$)(
                {
                    invite: n,
                    action: "accept",
                    inviter_id: y.author.id,
                    invite_message_id: y.id,
                },
                S,
            );
            let e = O("Invite Button Embed");
            l.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e,
            });
        }, [n, y, S, O]);
    if (null == n.inviter) return null;
    let R = A ? C : N,
        P = E.intl.string(E.t.ib7Ng1),
        D = "active";
    A
        ? ((P = E.intl.string(E.t.xhxnPn)), (D = "secondary"))
        : I && ((P = E.intl.string(E.t.ib7Ng1)), (D = "secondary"));
    let w = I ? E.intl.string(E.t.eQyu1F) : E.intl.string(E.t.PYJHW6),
        L = null != n.inviter ? "".concat(n.inviter.username) : "",
        x = null != n.inviter ? m.ZP.getUserTag(n.inviter) : "";
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: w }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: b.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                user: new f.Z(n.inviter),
                                onClick: A ? R : void 0,
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: L,
                                onClick: A ? R : void 0,
                                children: x,
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: R,
                        text: P,
                        loading: T,
                        disabled: I,
                        variant: D,
                    }),
                ],
            }),
        ],
    });
}
