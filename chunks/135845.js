n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(447543),
    u = n(100527),
    d = n(906732),
    f = n(955415),
    p = n(131704),
    _ = n(199902),
    m = n(914010),
    h = n(411198),
    g = n(51144),
    E = n(358595),
    b = n(981631),
    y = n(245335),
    O = n(388032),
    v = n(105341);
function S(e) {
    let t,
        n,
        {
            invite: a,
            currentUserId: S,
            guild: I,
            message: T,
            onTransitionToInviteChannel: A,
            onAcceptInstantInvite: C,
        } = e,
        N = null == I ? void 0 : I.id,
        P = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        R = (0, l.e7)(
            [_.Z],
            () => (null != a && null != a.target_user ? _.Z.getActiveStreamForUser(a.target_user.id, N) : null),
            [a, N],
        ),
        w = (0, l.e7)(
            [_.Z],
            () => (null != a && null != a.target_user ? _.Z.getStreamForUser(a.target_user.id, N) : null),
            [a, N],
        ),
        { analyticsLocations: D } = (0, d.ZP)(u.Z.INVITE_EMBED),
        x = null != a && a.target_type === y.Iq.STREAM && null != a.target_user && null != R,
        L =
            null != a &&
            null != w &&
            null != a.channel &&
            null != a.guild &&
            w.channelId === a.channel.id &&
            w.guildId === a.guild.id;
    o()(null != a, "Invite cannot be null");
    let { target_type: j, target_user: M } = a;
    o()(j === y.Iq.STREAM && null != M, "invalid streaming invite");
    let k = S === M.id,
        U = a.state === b.r2o.ACCEPTING,
        G = i.useCallback(() => {
            let e = "noop";
            x ? (A(), (e = "transition")) : (C(), (e = "accept")),
                (0, c.r$)(
                    {
                        invite: a,
                        action: e,
                        inviter_id: T.author.id,
                        invite_message_id: T.id,
                    },
                    D,
                );
        }, [a, T, D, x, A, C]),
        Z = null != I;
    if (null == I) {
        if (null == a.guild) return (0, r.jsx)(E.Z, {});
        I = (0, h.Qs)(a.guild);
    }
    let B = null != a.channel ? (0, p.jD)(a.channel) : null,
        F = g.ZP.getName(M),
        V = "active";
    Z && !L
        ? (n = k ? O.intl.string(O.t.oBLoZJ) : O.intl.formatToPlainString(O.t["0QJmA+"], { name: F }))
        : ((t = O.intl.string(O.t.I6JG46)),
          (V = "active"),
          x && ((t = O.intl.string(O.t.Q1W99y)), (V = "secondary")),
          (n = k ? O.intl.string(O.t["4hyaHu"]) : O.intl.formatToPlainString(O.t.QmlLEq, { name: F })));
    let H =
        P === I.id && null != B
            ? (0, r.jsx)(f.Z.Channel, { channel: B })
            : O.intl.formatToPlainString(O.t.u0vaDE, { guildName: I.name });
    return (0, r.jsxs)(f.Z, {
        children: [
            (0, r.jsx)(f.Z.Header, { text: O.intl.string(O.t["wS+5Wb"]) }),
            (0, r.jsxs)(f.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: v.headerLine,
                        children: [
                            (0, r.jsx)(f.Z.Icon, {
                                guild: I,
                                onClick: Z && L ? G : void 0,
                            }),
                            (0, r.jsx)(f.Z.Info, {
                                title: n,
                                onClick: Z && L ? G : void 0,
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
