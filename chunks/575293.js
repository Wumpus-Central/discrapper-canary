"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(615300),
    o = n(417597),
    c = n(834730),
    u = n(276293),
    d = n(602853),
    h = n(827734),
    m = n(939249),
    p = n(935286),
    f = n(628284),
    g = n(775602),
    _ = n(47167),
    x = n(713654),
    A = n(418842),
    C = n(734057),
    E = n(696451),
    I = n(71393),
    v = n(225142),
    y = n(374084),
    S = n(101611),
    b = n(473529),
    N = n(111487),
    T = n(652215),
    j = n(985018),
    R = n(235054);
let w = { compact: 58, cozy: 74, default: 64 };
function L(e) {
    let { action: t } = e,
        n = (0, o.bG)([C.A], () => C.A.getChannel(t.channelId)),
        l = (0, _.Ay)(n, !0);
    return null == n
        ? (0, i.jsx)(c.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: j.intl.format(j.t.MkzlDL, { channelName: j.intl.string(j.t.J90oLW) }),
          })
        : (0, i.jsx)(c.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: j.intl.format(j.t.MkzlDL, { channelName: l }),
          });
}
function M(e) {
    let { channelId: t, emojiId: n, emojiName: l } = e,
        s = (0, o.bG)([C.A], () => C.A.getChannel(t));
    if (null == s) return null;
    let r = (0, x.gU)(s) ?? u.N;
    return (0, i.jsx)(N.A, {
        emojiId: n,
        emojiName: l,
        size: N.g.MEDIUM,
        defaultComponent: (0, i.jsx)(r, { className: R.p }),
    });
}
function k(e) {
    let { guildId: t, channel: n, className: s } = e,
        { channelAction: u, completed: _ } = (0, S.j4)(t, n),
        x = (0, S.Lr)(t, u?.channelId),
        C = (0, o.bG)([g.A], () => g.A.useReducedMotion),
        E = u?.actionType === y.NewMemberActionTypes.VIEW,
        I = (0, d.r)(h.A.colors.WHITE),
        b = w[(0, A.C)()],
        [N, T] = l.useState(!1),
        [k] = l.useState(new a.A.Value(0)),
        [O] = l.useState(new a.A.Value(0));
    l.useEffect(() => {
        _
            ? a.A.timing(k, { toValue: 0, duration: C ? 1 : 350, easing: a.A.Easing.quad, delay: 500 * !E }).start(() =>
                  T(!0),
              )
            : a.A.timing(k, { toValue: 1, duration: C ? 1 : 350, easing: a.A.Easing.quad, delay: 400 }).start();
    }, [_, k, E, C]),
        l.useEffect(() => {
            _ && N && a.A.timing(O, { toValue: 1, duration: 350 * !C, easing: a.A.Easing.quad, delay: 400 }).start();
        }, [_, O, N, C]);
    let P = l.useCallback(() => {
        null != x && (0, v.qo)(t, x.channelId);
    }, [t, x]);
    return null == u || (E && !N)
        ? null
        : (0, i.jsx)("div", {
              className: r()(R.kL, s),
              children:
                  N && null != x
                      ? (0, i.jsx)(a.A.div, {
                            style: { marginBottom: O.interpolate({ inputRange: [0, 1], outputRange: [-b, 0] }) },
                            children: (0, i.jsxs)(m.D, {
                                className: r()(R.vK, R.vk, { [R.pJ]: n.isForumChannel() }),
                                onClick: P,
                                children: [
                                    (0, i.jsx)(M, {
                                        channelId: x.channelId,
                                        emojiId: x.emoji?.id,
                                        emojiName: x?.emoji?.name,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: R.Qq,
                                        children: [
                                            (0, i.jsx)(c.E, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: j.intl.format(j.t["/beONw"], { step: x.title }),
                                            }),
                                            (0, i.jsx)(L, { action: x }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: R.kJ,
                                        children: (0, i.jsx)(p.E, { size: "xs", color: I.hex(), className: R.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, i.jsxs)(a.A.div, {
                            className: r()(R.vK, { [R.pJ]: n.isForumChannel() }),
                            style: { marginBottom: k.interpolate({ inputRange: [0, 1], outputRange: [-b, 0] }) },
                            children: [
                                (0, i.jsx)(M, {
                                    channelId: u.channelId,
                                    emojiId: u.emoji?.id,
                                    emojiName: u?.emoji?.name,
                                }),
                                (0, i.jsxs)("div", {
                                    className: R.Qq,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: u.title,
                                        }),
                                        (0, i.jsx)(c.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: j.intl.string(j.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                _
                                    ? (0, i.jsx)(f.y, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: R.so,
                                          secondaryColor: I.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function O(e) {
    let { guildId: t, channel: n, className: l } = e,
        s = (0, b.d)(t),
        r = (0, o.bG)([E.Ay], () => E.Ay.getSelfMember(t)?.isPending === !0),
        a = (0, S.jY)(t),
        c = (0, o.bG)([I.A], () => I.A.getGuild(t)?.features.has(T.GuildFeatures.GUILD_SERVER_GUIDE));
    return a || r || !s || !c ? null : (0, i.jsx)(k, { guildId: t, channel: n, className: l });
}
