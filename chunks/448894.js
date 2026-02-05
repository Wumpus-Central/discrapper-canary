n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    m = n(529200),
    _ = n(95701),
    h = n(616356),
    p = n(967198),
    g = n(860689),
    A = n(427262),
    f = n(168428),
    x = n(652215),
    E = n(172799),
    C = n(985018),
    I = n(563111);
function T(e) {
    let t,
        n,
        {
            invite: a,
            currentUserId: T,
            guild: v,
            message: N,
            onTransitionToInviteChannel: S,
            onAcceptInstantInvite: b,
        } = e,
        y = v?.id,
        j = (0, o.bG)([p.A], () => p.A.getGuildId()),
        R = (0, o.bG)(
            [h.A],
            () => (null != a && null != a.target_user ? h.A.getActiveStreamForUser(a.target_user.id, y) : null),
            [a, y],
        ),
        L = (0, o.bG)(
            [h.A],
            () => (null != a && null != a.target_user ? h.A.getStreamForUser(a.target_user.id, y) : null),
            [a, y],
        ),
        { analyticsLocations: M } = (0, u.Ay)(c.A.INVITE_EMBED),
        O = null != a && a.target_type === E.yV.STREAM && null != a.target_user && null != R,
        P =
            null != a &&
            null != L &&
            null != a.channel &&
            null != a.guild &&
            L.channelId === a.channel.id &&
            L.guildId === a.guild.id;
    r()(null != a, "Invite cannot be null");
    let { target_type: D, target_user: k } = a;
    r()(D === E.yV.STREAM && null != k, "invalid streaming invite");
    let U = T === k.id,
        w = a.state === x.elq.ACCEPTING,
        G = l.useCallback(() => {
            let e = "noop";
            O ? (S(), (e = "transition")) : (b(), (e = "accept")),
                (0, d.he)({ invite: a, action: e, inviter_id: N.author.id, invite_message_id: N.id }, M);
        }, [a, N, M, O, S, b]),
        B = null != v;
    if (null == v) {
        if (null == a.guild) return (0, i.jsx)(f.A, {});
        v = (0, g.DY)(a.guild);
    }
    let F = null != a.channel ? (0, _.OY)(a.channel) : null,
        H = A.Ay.getName(k),
        V = "active";
    B && !P
        ? (n = U ? C.intl.string(C.t.oBLoZJ) : C.intl.formatToPlainString(C.t["0QJmA+"], { name: H }))
        : ((t = C.intl.string(C.t.I6JG46)),
          (V = "active"),
          O && ((t = C.intl.string(C.t.Q1W99y)), (V = "secondary")),
          (n = U ? C.intl.string(C.t["4hyaHu"]) : C.intl.formatToPlainString(C.t.QmlLEq, { name: H })));
    let z =
        j === v.id && null != F
            ? (0, i.jsx)(m.A.Channel, { channel: F })
            : C.intl.formatToPlainString(C.t.u0vaDE, { guildName: v.name });
    return (0, i.jsxs)(m.A, {
        children: [
            (0, i.jsx)(m.A.Header, { text: C.intl.string(C.t["wS+5Wb"]) }),
            (0, i.jsxs)(m.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: I.iH,
                        children: [
                            (0, i.jsx)(m.A.Icon, { guild: v, onClick: B && P ? G : void 0 }),
                            (0, i.jsx)(m.A.Info, { title: n, onClick: B && P ? G : void 0, children: z }),
                        ],
                    }),
                    P ? (0, i.jsx)(s.$nd, { onClick: G, loading: w, disabled: O, variant: V, text: t }) : null,
                ],
            }),
        ],
    });
}
