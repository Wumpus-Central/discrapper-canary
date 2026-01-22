n.d(t, {
    A: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    f = n(529200),
    p = n(95701),
    _ = n(616356),
    h = n(967198),
    m = n(860689),
    g = n(427262),
    E = n(168428),
    b = n(652215),
    y = n(172799),
    O = n(985018),
    A = n(563111);

function v(e) {
    let t,
        n,
        {
            invite: a,
            currentUserId: v,
            guild: S,
            message: I,
            onTransitionToInviteChannel: T,
            onAcceptInstantInvite: C,
        } = e,
        N = null == S ? void 0 : S.id,
        R = (0, l.bG)([h.A], () => h.A.getGuildId()),
        w = (0, l.bG)(
            [_.A],
            () => (null != a && null != a.target_user ? _.A.getActiveStreamForUser(a.target_user.id, N) : null),
            [a, N],
        ),
        P = (0, l.bG)(
            [_.A],
            () => (null != a && null != a.target_user ? _.A.getStreamForUser(a.target_user.id, N) : null),
            [a, N],
        ),
        { analyticsLocations: D } = (0, d.Ay)(u.A.INVITE_EMBED),
        x = null != a && a.target_type === y.yV.STREAM && null != a.target_user && null != w,
        L =
            null != a &&
            null != P &&
            null != a.channel &&
            null != a.guild &&
            P.channelId === a.channel.id &&
            P.guildId === a.guild.id;
    s()(null != a, "Invite cannot be null");
    let { target_type: j, target_user: M } = a;
    s()(j === y.yV.STREAM && null != M, "invalid streaming invite");
    let k = v === M.id,
        U = a.state === b.elq.ACCEPTING,
        G = i.useCallback(() => {
            let e = "noop";
            x ? (T(), (e = "transition")) : (C(), (e = "accept")),
                (0, c.he)(
                    {
                        invite: a,
                        action: e,
                        inviter_id: I.author.id,
                        invite_message_id: I.id,
                    },
                    D,
                );
        }, [a, I, D, x, T, C]),
        V = null != S;
    if (null == S) {
        if (null == a.guild) return (0, r.jsx)(E.A, {});
        S = (0, m.DY)(a.guild);
    }
    let F = null != a.channel ? (0, p.OY)(a.channel) : null,
        B = g.Ay.getName(M),
        H = "active";
    V && !L
        ? (n = k
              ? O.intl.string(O.t.oBLoZJ)
              : O.intl.formatToPlainString(O.t["0QJmA+"], {
                    name: B,
                }))
        : ((t = O.intl.string(O.t.I6JG46)),
          (H = "active"),
          x && ((t = O.intl.string(O.t.Q1W99y)), (H = "secondary")),
          (n = k
              ? O.intl.string(O.t["4hyaHu"])
              : O.intl.formatToPlainString(O.t.QmlLEq, {
                    name: B,
                })));
    let Y =
        R === S.id && null != F
            ? (0, r.jsx)(f.A.Channel, {
                  channel: F,
              })
            : O.intl.formatToPlainString(O.t.u0vaDE, {
                  guildName: S.name,
              });
    return (0, r.jsxs)(f.A, {
        children: [
            (0, r.jsx)(f.A.Header, {
                text: O.intl.string(O.t["wS+5Wb"]),
            }),
            (0, r.jsxs)(f.A.Body, {
                children: [
                    (0, r.jsxs)("div", {
                        className: A.iH,
                        children: [
                            (0, r.jsx)(f.A.Icon, {
                                guild: S,
                                onClick: V && L ? G : void 0,
                            }),
                            (0, r.jsx)(f.A.Info, {
                                title: n,
                                onClick: V && L ? G : void 0,
                                children: Y,
                            }),
                        ],
                    }),
                    L
                        ? (0, r.jsx)(o.$nd, {
                              onClick: G,
                              loading: U,
                              disabled: x,
                              variant: H,
                              text: t,
                          })
                        : null,
                ],
            }),
        ],
    });
}
