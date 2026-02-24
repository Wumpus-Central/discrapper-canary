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
    I = n(42441);
function b(e) {
    let t,
        n,
        {
            invite: r,
            currentUserId: b,
            guild: T,
            message: v,
            onTransitionToInviteChannel: S,
            onAcceptInstantInvite: y,
        } = e,
        N = T?.id,
        j = (0, o.bG)([p.A], () => p.A.getGuildId()),
        L = (0, o.bG)(
            [h.A],
            () => (null != r && null != r.target_user ? h.A.getActiveStreamForUser(r.target_user.id, N) : null),
            [r, N],
        ),
        R = (0, o.bG)(
            [h.A],
            () => (null != r && null != r.target_user ? h.A.getStreamForUser(r.target_user.id, N) : null),
            [r, N],
        ),
        { analyticsLocations: P } = (0, u.Ay)(c.A.INVITE_EMBED),
        M = null != r && r.target_type === C.yV.STREAM && null != r.target_user && null != L,
        w =
            null != r &&
            null != R &&
            null != r.channel &&
            null != r.guild &&
            R.channelId === r.channel.id &&
            R.guildId === r.guild.id;
    a()(null != r, "Invite cannot be null");
    let { target_type: k, target_user: D } = r;
    a()(k === C.yV.STREAM && null != D, "invalid streaming invite");
    let O = b === D.id,
        U = r.state === f.elq.ACCEPTING,
        G = l.useCallback(() => {
            let e = "noop";
            M ? (S(), (e = "transition")) : (y(), (e = "accept")),
                (0, d.he)({ invite: r, action: e, inviter_id: v.author.id, invite_message_id: v.id }, P);
        }, [r, v, P, M, S, y]),
        B = null != T;
    if (null == T) {
        if (null == r.guild) return (0, i.jsx)(x.A, {});
        T = (0, g.DY)(r.guild);
    }
    let F = null != r.channel ? (0, m.OY)(r.channel) : null,
        H = A.Ay.getName(D),
        V = "active";
    B && !w
        ? (n = O ? E.intl.string(E.t.oBLoZJ) : E.intl.formatToPlainString(E.t["0QJmA+"], { name: H }))
        : ((t = E.intl.string(E.t.I6JG46)),
          (V = "active"),
          M && ((t = E.intl.string(E.t.Q1W99y)), (V = "secondary")),
          (n = O ? E.intl.string(E.t["4hyaHu"]) : E.intl.formatToPlainString(E.t.QmlLEq, { name: H })));
    let W =
        j === T.id && null != F
            ? (0, i.jsx)(_.A.Channel, { channel: F })
            : E.intl.formatToPlainString(E.t.u0vaDE, { guildName: T.name });
    return (0, i.jsxs)(_.A, {
        children: [
            (0, i.jsx)(_.A.Header, { text: E.intl.string(E.t["wS+5Wb"]) }),
            (0, i.jsxs)(_.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: I.iH,
                        children: [
                            (0, i.jsx)(_.A.Icon, { guild: T, onClick: B && w ? G : void 0 }),
                            (0, i.jsx)(_.A.Info, { title: n, onClick: B && w ? G : void 0, children: W }),
                        ],
                    }),
                    w ? (0, i.jsx)(s.$nd, { onClick: G, loading: U, disabled: M, variant: V, text: t }) : null,
                ],
            }),
        ],
    });
}
