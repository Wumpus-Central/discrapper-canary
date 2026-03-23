n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
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
function v(e) {
    let t,
        {
            invite: n,
            currentUserId: a,
            guild: v,
            message: b,
            onTransitionToInviteChannel: T,
            onAcceptInstantInvite: y,
        } = e,
        S = v?.id,
        N = (0, o.bG)([p.A], () => p.A.getGuildId()),
        j = (0, o.bG)(
            [h.A],
            () => (null != n && null != n.target_user ? h.A.getActiveStreamForUser(n.target_user.id, S) : null),
            [n, S],
        ),
        L = (0, o.bG)(
            [h.A],
            () => (null != n && null != n.target_user ? h.A.getStreamForUser(n.target_user.id, S) : null),
            [n, S],
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
    l()(null != n, "Invite cannot be null");
    let { target_type: w, target_user: D } = n;
    l()(w === C.yV.STREAM && null != D, "invalid streaming invite");
    let k = a === D.id,
        O = n.state === f.elq.ACCEPTING,
        U = r.useCallback(() => {
            let e = "noop";
            P ? (T(), (e = "transition")) : (y(), (e = "accept")),
                (0, d.he)({ invite: n, action: e, inviter_id: b.author.id, invite_message_id: b.id }, R);
        }, [n, b, R, P, T, y]),
        B = null != v;
    if (null == v) {
        if (null == n.guild) return (0, i.jsx)(x.A, {});
        v = (0, g.DY)(n.guild);
    }
    let G = null != n.channel ? (0, m.OY)(n.channel) : null,
        F = A.Ay.getName(D),
        H = P || (!M && B),
        V = E.intl.string(E.t.I6JG46),
        q = "active";
    B && !M
        ? ((t = k ? E.intl.string(E.t.oBLoZJ) : E.intl.formatToPlainString(E.t["0QJmA+"], { name: F })),
          (V = E.intl.string(E.t.Wdi5E1)))
        : ((q = "active"),
          P && ((V = E.intl.string(E.t.Q1W99y)), (q = "secondary")),
          (t = k ? E.intl.string(E.t["4hyaHu"]) : E.intl.formatToPlainString(E.t.QmlLEq, { name: F })));
    let W =
        N === v.id && null != G
            ? (0, i.jsx)(_.A.Channel, { channel: G })
            : E.intl.formatToPlainString(E.t.u0vaDE, { guildName: v.name });
    return (0, i.jsxs)(_.A, {
        children: [
            (0, i.jsx)(_.A.Header, { text: E.intl.string(E.t["wS+5Wb"]) }),
            (0, i.jsxs)(_.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: I.iH,
                        children: [
                            (0, i.jsx)(_.A.Icon, { guild: v, onClick: B && M ? U : void 0 }),
                            (0, i.jsx)(_.A.Info, { title: t, onClick: B && M ? U : void 0, children: W }),
                        ],
                    }),
                    (0, i.jsx)(s.$nd, { onClick: U, loading: O, disabled: H, variant: q, text: V }),
                ],
            }),
        ],
    });
}
