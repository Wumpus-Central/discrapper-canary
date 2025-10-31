n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(447543),
    u = n(100527),
    d = n(906732),
    f = n(955415),
    _ = n(131704),
    p = n(199902),
    h = n(914010),
    m = n(411198),
    g = n(51144),
    E = n(358595),
    b = n(981631),
    y = n(245335),
    O = n(388032),
    v = n(105341);
function I(e) {
    let t,
        n,
        {
            invite: a,
            currentUserId: I,
            guild: T,
            message: S,
            onTransitionToInviteChannel: A,
            onAcceptInstantInvite: C,
        } = e,
        N = null == T ? void 0 : T.id,
        R = (0, l.e7)([h.Z], () => h.Z.getGuildId()),
        P = (0, l.e7)(
            [p.Z],
            () => (null != a && null != a.target_user ? p.Z.getActiveStreamForUser(a.target_user.id, N) : null),
            [a, N],
        ),
        w = (0, l.e7)(
            [p.Z],
            () => (null != a && null != a.target_user ? p.Z.getStreamForUser(a.target_user.id, N) : null),
            [a, N],
        ),
        { analyticsLocations: D } = (0, d.ZP)(u.Z.INVITE_EMBED),
        x = null != a && a.target_type === y.Iq.STREAM && null != a.target_user && null != P,
        L =
            null != a &&
            null != w &&
            null != a.channel &&
            null != a.guild &&
            w.channelId === a.channel.id &&
            w.guildId === a.guild.id;
    o()(null != a, "Invite cannot be null");
    let { target_type: M, target_user: j } = a;
    o()(M === y.Iq.STREAM && null != j, "invalid streaming invite");
    let k = I === j.id,
        U = a.state === b.r2o.ACCEPTING,
        G = i.useCallback(() => {
            let e = "noop";
            x ? (A(), (e = "transition")) : (C(), (e = "accept")),
                (0, c.r$)(
                    {
                        invite: a,
                        action: e,
                        inviter_id: S.author.id,
                        invite_message_id: S.id,
                    },
                    D,
                );
        }, [a, S, D, x, A, C]),
        B = null != T;
    if (null == T) {
        if (null == a.guild) return (0, r.jsx)(E.Z, {});
        T = (0, m.Qs)(a.guild);
    }
    let Z = null != a.channel ? (0, _.jD)(a.channel) : null,
        F = g.ZP.getName(j),
        V = "active";
    B && !L
        ? (n = k ? O.intl.string(O.t.oBLoZJ) : O.intl.formatToPlainString(O.t["0QJmA+"], { name: F }))
        : ((t = O.intl.string(O.t.I6JG46)),
          (V = "active"),
          x && ((t = O.intl.string(O.t.Q1W99y)), (V = "secondary")),
          (n = k ? O.intl.string(O.t["4hyaHu"]) : O.intl.formatToPlainString(O.t.QmlLEq, { name: F })));
    let H =
        R === T.id && null != Z
            ? (0, r.jsx)(f.Z.Channel, { channel: Z })
            : O.intl.formatToPlainString(O.t.u0vaDE, { guildName: T.name });
    return (0, r.jsxs)(f.Z, {
        children: [
            (0, r.jsx)(f.Z.Header, { text: O.intl.string(O.t["wS+5Wb"]) }),
            (0, r.jsxs)(f.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: v.headerLine,
                        children: [
                            (0, r.jsx)(f.Z.Icon, {
                                guild: T,
                                onClick: B && L ? G : void 0,
                            }),
                            (0, r.jsx)(f.Z.Info, {
                                title: n,
                                onClick: B && L ? G : void 0,
                                children: H,
                            }),
                        ],
                    }),
                    L
                        ? (0, r.jsx)(s.zxk, {
                              onClick: G,
                              loading: U,
                              disabled: x,
                              variant: V,
                              text: t,
                          })
                        : null,
                ],
            }),
        ],
    });
}
