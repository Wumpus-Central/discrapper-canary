"use strict";
n.d(t, { A: () => M });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(702841),
    c = n(834730),
    u = n(276293),
    d = n(602853),
    h = n(661531),
    m = n(939249),
    p = n(935286),
    f = n(628284),
    g = n(775602),
    _ = n(47167),
    x = n(713654),
    C = n(418842),
    A = n(734057),
    E = n(696451),
    I = n(71393),
    v = n(225142),
    y = n(374084),
    b = n(101611),
    S = n(473529),
    N = n(111487),
    j = n(652215),
    T = n(985018),
    w = n(235054);
let R = { compact: 58, cozy: 74, default: 64 };
function L(e) {
    let { action: t } = e,
        n = (0, o.bG)([A.A], () => A.A.getChannel(t.channelId)),
        i = (0, _.Ay)(n, !0);
    return null == n
        ? (0, l.jsx)(c.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: T.intl.format(T.t.MkzlDL, { channelName: T.intl.string(T.t.J90oLW) }),
          })
        : (0, l.jsx)(c.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: T.intl.format(T.t.MkzlDL, { channelName: i }),
          });
}
function k(e) {
    let { channelId: t, emojiId: n, emojiName: i } = e,
        s = (0, o.bG)([A.A], () => A.A.getChannel(t));
    if (null == s) return null;
    let a = (0, x.gU)(s) ?? u.N;
    return (0, l.jsx)(N.A, {
        emojiId: n,
        emojiName: i,
        size: N.g.MEDIUM,
        defaultComponent: (0, l.jsx)(a, { className: w.p }),
    });
}
function O(e) {
    let { guildId: t, channel: n, className: s } = e,
        { channelAction: u, completed: _ } = (0, b.j4)(t, n),
        x = (0, b.Lr)(t, u?.channelId),
        A = (0, o.bG)([g.A], () => g.A.useReducedMotion),
        E = u?.actionType === y.NewMemberActionTypes.VIEW,
        I = (0, d.r)(h.A.colors.WHITE),
        S = R[(0, C.C)()],
        [N, j] = i.useState(!1),
        [O] = i.useState(new r.A.Value(0)),
        [M] = i.useState(new r.A.Value(0));
    i.useEffect(() => {
        _
            ? r.A.timing(O, { toValue: 0, duration: A ? 1 : 350, easing: r.A.Easing.quad, delay: 500 * !E }).start(() =>
                  j(!0),
              )
            : r.A.timing(O, { toValue: 1, duration: A ? 1 : 350, easing: r.A.Easing.quad, delay: 400 }).start();
    }, [_, O, E, A]),
        i.useEffect(() => {
            _ && N && r.A.timing(M, { toValue: 1, duration: 350 * !A, easing: r.A.Easing.quad, delay: 400 }).start();
        }, [_, M, N, A]);
    let P = i.useCallback(() => {
        null != x && (0, v.qo)(t, x.channelId);
    }, [t, x]);
    return null == u || (E && !N)
        ? null
        : (0, l.jsx)("div", {
              className: a()(w.kL, s),
              children:
                  N && null != x
                      ? (0, l.jsx)(r.A.div, {
                            style: { marginBottom: M.interpolate({ inputRange: [0, 1], outputRange: [-S, 0] }) },
                            children: (0, l.jsxs)(m.D, {
                                className: a()(w.vK, w.vk, { [w.pJ]: n.isForumChannel() }),
                                onClick: P,
                                children: [
                                    (0, l.jsx)(k, {
                                        channelId: x.channelId,
                                        emojiId: x.emoji?.id,
                                        emojiName: x?.emoji?.name,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: w.Qq,
                                        children: [
                                            (0, l.jsx)(c.E, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: T.intl.format(T.t["/beONw"], { step: x.title }),
                                            }),
                                            (0, l.jsx)(L, { action: x }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: w.kJ,
                                        children: (0, l.jsx)(p.E, { size: "xs", color: I.hex(), className: w.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, l.jsxs)(r.A.div, {
                            className: a()(w.vK, { [w.pJ]: n.isForumChannel() }),
                            style: { marginBottom: O.interpolate({ inputRange: [0, 1], outputRange: [-S, 0] }) },
                            children: [
                                (0, l.jsx)(k, {
                                    channelId: u.channelId,
                                    emojiId: u.emoji?.id,
                                    emojiName: u?.emoji?.name,
                                }),
                                (0, l.jsxs)("div", {
                                    className: w.Qq,
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: u.title,
                                        }),
                                        (0, l.jsx)(c.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: T.intl.string(T.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                _
                                    ? (0, l.jsx)(f.y, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: w.so,
                                          secondaryColor: I.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function M(e) {
    let { guildId: t, channel: n, className: i } = e,
        s = (0, S.d)(t),
        a = (0, o.bG)([E.Ay], () => E.Ay.getSelfMember(t)?.isPending === !0),
        r = (0, b.jY)(t),
        c = (0, o.bG)([I.A], () => I.A.getGuild(t)?.features.has(j.GuildFeatures.GUILD_SERVER_GUIDE));
    return r || a || !s || !c ? null : (0, l.jsx)(O, { guildId: t, channel: n, className: i });
}
