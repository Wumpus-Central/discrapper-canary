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
    p = n(314897),
    _ = n(592125),
    m = n(699516),
    h = n(51144),
    g = n(981631),
    E = n(388032),
    b = n(105341);
function y(e) {
    var t;
    let { invite: n, message: y, getAcceptInviteContext: O } = e,
        v = (0, o.e7)([p.default], () => p.default.getId()),
        S = (null == (t = n.inviter) ? void 0 : t.id) === v,
        I = n.state === g.r2o.ACCEPTING,
        { analyticsLocations: T } = (0, u.ZP)(c.Z.INVITE_EMBED),
        C = (0, o.e7)([m.Z], () => {
            var e;
            return null != n.inviter && m.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        A = i.useCallback(() => {
            let e = "noop";
            null != n.inviter &&
                null != _.Z.getDMFromUserId(n.inviter.id) &&
                ((e = "transition"), s.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })),
                (0, l.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: y.author.id,
                        invite_message_id: y.id,
                    },
                    T,
                );
        }, [n, y, T]),
        N = i.useCallback(() => {
            (0, l.r$)(
                {
                    invite: n,
                    action: "accept",
                    inviter_id: y.author.id,
                    invite_message_id: y.id,
                },
                T,
            );
            let e = O("Invite Button Embed");
            l.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e,
            });
        }, [n, y, T, O]);
    if (null == n.inviter) return null;
    let P = C ? A : N,
        R = E.intl.string(E.t.ib7Ng1),
        D = "active";
    C
        ? ((R = E.intl.string(E.t.xhxnPn)), (D = "secondary"))
        : S && ((R = E.intl.string(E.t.ib7Ng1)), (D = "secondary"));
    let w = S ? E.intl.string(E.t.eQyu1F) : E.intl.string(E.t.PYJHW6),
        x = null != n.inviter ? "".concat(n.inviter.username) : "",
        L = null != n.inviter ? h.ZP.getUserTag(n.inviter) : "";
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
                                onClick: C ? P : void 0,
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: x,
                                onClick: C ? P : void 0,
                                children: L,
                            }),
                        ],
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: P,
                        text: R,
                        loading: I,
                        disabled: S,
                        variant: D,
                    }),
                ],
            }),
        ],
    });
}
