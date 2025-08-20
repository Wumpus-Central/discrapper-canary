n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(493683),
    a = n(447543),
    s = n(100527),
    c = n(906732),
    u = n(955415),
    d = n(598077),
    p = n(314897),
    m = n(592125),
    f = n(699516),
    g = n(51144),
    _ = n(981631),
    h = n(388032),
    b = n(105341);
function E(e) {
    var t;
    let { invite: n, message: E, getAcceptInviteContext: C } = e,
        v = (0, l.e7)([p.default], () => p.default.getId()),
        O = (null == (t = n.inviter) ? void 0 : t.id) === v,
        y = n.state === _.r2o.ACCEPTING,
        { analyticsLocations: x } = (0, c.ZP)(s.Z.INVITE_EMBED),
        j = (0, l.e7)([f.Z], () => {
            var e;
            return null != n.inviter && f.Z.isFriend(null == (e = n.inviter) ? void 0 : e.id);
        }),
        I = i.useCallback(() => {
            let e = "noop";
            null != n.inviter &&
                null != m.Z.getDMFromUserId(n.inviter.id) &&
                ((e = "transition"), o.Z.openPrivateChannel({ recipientIds: [n.inviter.id] })),
                (0, a.r$)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: E.author.id,
                        invite_message_id: E.id,
                    },
                    x,
                );
        }, [n, E, x]),
        S = i.useCallback(() => {
            (0, a.r$)(
                {
                    invite: n,
                    action: "accept",
                    inviter_id: E.author.id,
                    invite_message_id: E.id,
                },
                x,
            );
            let e = C("Invite Button Embed");
            a.ZP.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e,
            });
        }, [n, E, x, C]);
    if (null == n.inviter) return null;
    let T = j ? I : S,
        P = h.intl.string(h.t.ib7Ng4),
        N = u.Z.Button.Colors.GREEN;
    j
        ? ((P = h.intl.string(h.t.xhxnPj)), (N = u.Z.Button.Colors.PRIMARY))
        : O && ((P = h.intl.string(h.t.ib7Ng4)), (N = u.Z.Button.Colors.PRIMARY));
    let A = O ? h.intl.string(h.t.eQyu1N) : h.intl.string(h.t.PYJHW1),
        w = null != n.inviter ? "".concat(n.inviter.username) : "",
        Z = null != n.inviter ? g.ZP.getUserTag(n.inviter) : "";
    return (0, r.jsxs)(u.Z, {
        children: [
            (0, r.jsx)(u.Z.Header, { text: A }),
            (0, r.jsxs)(u.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: b.headerLine,
                        children: [
                            (0, r.jsx)(u.Z.Icon, {
                                user: new d.Z(n.inviter),
                                onClick: j ? T : void 0,
                            }),
                            (0, r.jsx)(u.Z.Info, {
                                title: w,
                                onClick: j ? T : void 0,
                                children: Z,
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.Z.Button, {
                        onClick: T,
                        submitting: y,
                        isDisabled: O,
                        color: N,
                        children: P,
                    }),
                ],
            }),
        ],
    });
}
