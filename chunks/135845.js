n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(955415),
    p = n(131704),
    m = n(199902),
    f = n(914010),
    _ = n(411198),
    g = n(51144),
    h = n(358595),
    b = n(981631),
    E = n(245335),
    C = n(388032),
    v = n(105341);
function O(e) {
    let t,
        n,
        l,
        {
            invite: O,
            currentUserId: y,
            guild: x,
            message: j,
            onTransitionToInviteChannel: I,
            onAcceptInstantInvite: S,
        } = e,
        T = null == x ? void 0 : x.id,
        P = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        N = (0, o.e7)(
            [m.Z],
            () => (null != O && null != O.target_user ? m.Z.getActiveStreamForUser(O.target_user.id, T) : null),
            [O, T],
        ),
        A = (0, o.e7)(
            [m.Z],
            () => (null != O && null != O.target_user ? m.Z.getStreamForUser(O.target_user.id, T) : null),
            [O, T],
        ),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != O && O.target_type === E.Iq.STREAM && null != O.target_user && null != N,
        R =
            null != O &&
            null != A &&
            null != O.channel &&
            null != O.guild &&
            A.channelId === O.channel.id &&
            A.guildId === O.guild.id;
    a()(null != O, "Invite cannot be null");
    let { target_type: L, target_user: D } = O;
    a()(L === E.Iq.STREAM && null != D, "invalid streaming invite");
    let M = y === D.id,
        k = O.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = "noop";
            Z ? (I(), (e = "transition")) : (S(), (e = "accept")),
                (0, s.r$)(
                    {
                        invite: O,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id,
                    },
                    w,
                );
        }, [O, j, w, Z, I, S]),
        F = null != x;
    if (null == x) {
        if (null == O.guild) return (0, r.jsx)(h.Z, {});
        x = (0, _.Qs)(O.guild);
    }
    let B = null != O.channel ? (0, p.jD)(O.channel) : null,
        G = g.ZP.getName(D);
    F && !R
        ? (l = M ? C.intl.string(C.t.oBLoZG) : C.intl.formatToPlainString(C.t["0QJmAw"], { name: G }))
        : ((t = C.intl.string(C.t["I6JG4+"])),
          (n = d.Z.Button.Colors.GREEN),
          Z && ((t = C.intl.string(C.t["Q1W99/"])), (n = d.Z.Button.Colors.PRIMARY)),
          (l = M ? C.intl.string(C.t["4hyaHh"]) : C.intl.formatToPlainString(C.t.QmlLEh, { name: G })));
    let H =
        P === x.id && null != B
            ? (0, r.jsx)(d.Z.Channel, { channel: B })
            : C.intl.formatToPlainString(C.t.u0vaDA, { guildName: x.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: C.intl.string(C.t["wS+5WV"]) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: v.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: x,
                                onClick: F && R ? U : void 0,
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: l,
                                onClick: F && R ? U : void 0,
                                children: H,
                            }),
                        ],
                    }),
                    R
                        ? (0, r.jsx)(d.Z.Button, {
                              disabled: F && !R,
                              onClick: U,
                              submitting: k,
                              isDisabled: Z && R,
                              color: n,
                              children: t,
                          })
                        : null,
                ],
            }),
        ],
    });
}
