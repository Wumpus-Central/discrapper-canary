n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(955415),
    f = n(131704),
    _ = n(199902),
    p = n(914010),
    h = n(411198),
    m = n(51144),
    g = n(358595),
    E = n(981631),
    b = n(245335),
    y = n(388032),
    O = n(664643);
function v(e) {
    let t,
        n,
        o,
        {
            invite: v,
            currentUserId: I,
            guild: T,
            message: S,
            onTransitionToInviteChannel: A,
            onAcceptInstantInvite: N,
        } = e,
        C = null == T ? void 0 : T.id,
        R = (0, s.e7)([p.Z], () => p.Z.getGuildId()),
        P = (0, s.e7)(
            [_.Z],
            () => (null != v && null != v.target_user ? _.Z.getActiveStreamForUser(v.target_user.id, C) : null),
            [v, C],
        ),
        w = (0, s.e7)(
            [_.Z],
            () => (null != v && null != v.target_user ? _.Z.getStreamForUser(v.target_user.id, C) : null),
            [v, C],
        ),
        { analyticsLocations: D } = (0, u.ZP)(c.Z.INVITE_EMBED),
        L = null != v && v.target_type === b.Iq.STREAM && null != v.target_user && null != P,
        x =
            null != v &&
            null != w &&
            null != v.channel &&
            null != v.guild &&
            w.channelId === v.channel.id &&
            w.guildId === v.guild.id;
    a()(null != v, "Invite cannot be null");
    let { target_type: M, target_user: j } = v;
    a()(M === b.Iq.STREAM && null != j, "invalid streaming invite");
    let k = I === j.id,
        U = v.state === E.r2o.ACCEPTING,
        G = i.useCallback(() => {
            let e = "noop";
            L ? (A(), (e = "transition")) : (N(), (e = "accept")),
                (0, l.r$)(
                    {
                        invite: v,
                        action: e,
                        inviter_id: S.author.id,
                        invite_message_id: S.id,
                    },
                    D,
                );
        }, [v, S, D, L, A, N]),
        B = null != T;
    if (null == T) {
        if (null == v.guild) return (0, r.jsx)(g.Z, {});
        T = (0, h.Qs)(v.guild);
    }
    let Z = null != v.channel ? (0, f.jD)(v.channel) : null,
        F = m.ZP.getName(j);
    B && !x
        ? (o = k ? y.intl.string(y.t.oBLoZG) : y.intl.formatToPlainString(y.t["0QJmAw"], { name: F }))
        : ((t = y.intl.string(y.t["I6JG4+"])),
          (n = d.Z.Button.Colors.GREEN),
          L && ((t = y.intl.string(y.t["Q1W99/"])), (n = d.Z.Button.Colors.PRIMARY)),
          (o = k ? y.intl.string(y.t["4hyaHh"]) : y.intl.formatToPlainString(y.t.QmlLEh, { name: F })));
    let V =
        R === T.id && null != Z
            ? (0, r.jsx)(d.Z.Channel, { channel: Z })
            : y.intl.formatToPlainString(y.t.u0vaDA, { guildName: T.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: y.intl.string(y.t["wS+5WV"]) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: O.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: T,
                                onClick: B && x ? G : void 0,
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: o,
                                onClick: B && x ? G : void 0,
                                children: V,
                            }),
                        ],
                    }),
                    x
                        ? (0, r.jsx)(d.Z.Button, {
                              disabled: B && !x,
                              onClick: G,
                              submitting: U,
                              isDisabled: L && x,
                              color: n,
                              children: t,
                          })
                        : null,
                ],
            }),
        ],
    });
}
