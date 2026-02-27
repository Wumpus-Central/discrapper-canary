n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(529200),
    m = n(95701),
    h = n(616356),
    p = n(967198),
    g = n(860689),
    A = n(427262),
    x = n(168428),
    f = n(652215),
    C = n(172799),
    E = n(985018),
    I = n(563111);
function b(e) {
    let t,
        {
            invite: n,
            currentUserId: r,
            guild: b,
            message: T,
            onTransitionToInviteChannel: v,
            onAcceptInstantInvite: S,
        } = e,
        y = b?.id,
        N = (0, o.bG)([p.A], () => p.A.getGuildId()),
        j = (0, o.bG)(
            [h.A],
            () => (null != n && null != n.target_user ? h.A.getActiveStreamForUser(n.target_user.id, y) : null),
            [n, y],
        ),
        L = (0, o.bG)(
            [h.A],
            () => (null != n && null != n.target_user ? h.A.getStreamForUser(n.target_user.id, y) : null),
            [n, y],
        ),
        { analyticsLocations: R } = (0, u.Ay)(c.A.INVITE_EMBED),
        P = null != n && n.target_type === C.yV.STREAM && null != n.target_user && null != j,
        M =
            null != n &&
            null != L &&
            null != n.channel &&
            null != n.guild &&
            L.channelId === n.channel.id &&
            L.guildId === n.guild.id;
    a()(null != n, "Invite cannot be null");
    let { target_type: w, target_user: D } = n;
    a()(w === C.yV.STREAM && null != D, "invalid streaming invite");
    let k = r === D.id,
        O = n.state === f.elq.ACCEPTING,
        U = l.useCallback(() => {
            let e = "noop";
            P ? (v(), (e = "transition")) : (S(), (e = "accept")),
                (0, d.he)({ invite: n, action: e, inviter_id: T.author.id, invite_message_id: T.id }, R);
        }, [n, T, R, P, v, S]),
        B = null != b;
    if (null == b) {
        if (null == n.guild) return (0, i.jsx)(x.A, {});
        b = (0, g.DY)(n.guild);
    }
    let G = null != n.channel ? (0, m.OY)(n.channel) : null,
        F = A.Ay.getName(D),
        H = P || (!M && B),
        V = E.intl.string(E.t.I6JG46),
        W = "active";
    B && !M
        ? ((t = k ? E.intl.string(E.t.oBLoZJ) : E.intl.formatToPlainString(E.t["0QJmA+"], { name: F })),
          (V = E.intl.string(E.t.Wdi5E1)))
        : ((W = "active"),
          P && ((V = E.intl.string(E.t.Q1W99y)), (W = "secondary")),
          (t = k ? E.intl.string(E.t["4hyaHu"]) : E.intl.formatToPlainString(E.t.QmlLEq, { name: F })));
    let q =
        N === b.id && null != G
            ? (0, i.jsx)(_.A.Channel, { channel: G })
            : E.intl.formatToPlainString(E.t.u0vaDE, { guildName: b.name });
    return (0, i.jsxs)(_.A, {
        children: [
            (0, i.jsx)(_.A.Header, { text: E.intl.string(E.t["wS+5Wb"]) }),
            (0, i.jsxs)(_.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: I.iH,
                        children: [
                            (0, i.jsx)(_.A.Icon, { guild: b, onClick: B && M ? U : void 0 }),
                            (0, i.jsx)(_.A.Info, { title: t, onClick: B && M ? U : void 0, children: q }),
                        ],
                    }),
                    (0, i.jsx)(s.$nd, { onClick: U, loading: O, disabled: H, variant: W, text: V }),
                ],
            }),
        ],
    });
}
