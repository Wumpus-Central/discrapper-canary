n.d(t, { A: () => P });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(615300),
    o = n(702841),
    u = n(834730),
    c = n(276293),
    d = n(602853),
    h = n(661531),
    m = n(939249),
    p = n(935286),
    f = n(628284),
    g = n(775602),
    x = n(47167),
    S = n(713654),
    E = n(418842),
    y = n(734057),
    C = n(696451),
    A = n(71393),
    b = n(225142),
    I = n(374084),
    v = n(101611),
    N = n(473529),
    T = n(111487),
    j = n(652215),
    k = n(375708),
    _ = n(160639);
let R = { compact: 58, cozy: 74, default: 64 };
function w(e) {
    let { action: t } = e,
        n = (0, o.bG)([y.A], () => y.A.getChannel(t.channelId)),
        i = (0, x.Ay)(n, !0);
    return null == n
        ? (0, l.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: k.intl.format(k.t.MkzlDL, { channelName: k.intl.string(k.t.J90oLW) }),
          })
        : (0, l.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: k.intl.format(k.t.MkzlDL, { channelName: i }),
          });
}
function O(e) {
    let { channelId: t, emojiId: n, emojiName: i } = e,
        r = (0, o.bG)([y.A], () => y.A.getChannel(t));
    if (null == r) return null;
    let s = (0, S.gU)(r) ?? c.N;
    return (0, l.jsx)(T.A, {
        emojiId: n,
        emojiName: i,
        size: T.g.MEDIUM,
        defaultComponent: (0, l.jsx)(s, { className: _.p }),
    });
}
function L(e) {
    let { guildId: t, channel: n, className: r } = e,
        { channelAction: c, completed: x } = (0, v.j4)(t, n),
        S = (0, v.Lr)(t, c?.channelId),
        y = (0, o.bG)([g.Ay], () => g.Ay.useReducedMotion),
        C = c?.actionType === I.NewMemberActionTypes.VIEW,
        A = (0, d.r)(h.A.colors.WHITE),
        N = R[(0, E.C)()],
        [T, j] = i.useState(!1),
        [L] = i.useState(new a.A.Value(0)),
        [P] = i.useState(new a.A.Value(0));
    (i.useEffect(() => {
        x
            ? a.A.timing(L, { toValue: 0, duration: y ? 1 : 350, easing: a.A.Easing.quad, delay: 500 * !C }).start(() =>
                  j(!0),
              )
            : a.A.timing(L, { toValue: 1, duration: y ? 1 : 350, easing: a.A.Easing.quad, delay: 400 }).start();
    }, [x, L, C, y]),
        i.useEffect(() => {
            x && T && a.A.timing(P, { toValue: 1, duration: 350 * !y, easing: a.A.Easing.quad, delay: 400 }).start();
        }, [x, P, T, y]));
    let M = i.useCallback(() => {
        null != S && (0, b.qo)(t, S.channelId);
    }, [t, S]);
    return null == c || (C && !T)
        ? null
        : (0, l.jsx)("div", {
              className: s()(_.kL, r),
              children:
                  T && null != S
                      ? (0, l.jsx)(a.A.div, {
                            style: { marginBottom: P.interpolate({ inputRange: [0, 1], outputRange: [-N, 0] }) },
                            children: (0, l.jsxs)(m.D, {
                                className: s()(_.vK, _.vk, { [_.pJ]: n.isForumChannel() }),
                                onClick: M,
                                children: [
                                    (0, l.jsx)(O, {
                                        channelId: S.channelId,
                                        emojiId: S.emoji?.id,
                                        emojiName: S?.emoji?.name,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: _.Qq,
                                        children: [
                                            (0, l.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: k.intl.format(k.t["/beONw"], { step: S.title }),
                                            }),
                                            (0, l.jsx)(w, { action: S }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: _.kJ,
                                        children: (0, l.jsx)(p.E, { size: "xs", color: A.hex(), className: _.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, l.jsxs)(a.A.div, {
                            className: s()(_.vK, { [_.pJ]: n.isForumChannel() }),
                            style: { marginBottom: L.interpolate({ inputRange: [0, 1], outputRange: [-N, 0] }) },
                            children: [
                                (0, l.jsx)(O, {
                                    channelId: c.channelId,
                                    emojiId: c.emoji?.id,
                                    emojiName: c?.emoji?.name,
                                }),
                                (0, l.jsxs)("div", {
                                    className: _.Qq,
                                    children: [
                                        (0, l.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: k.intl.string(k.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                x
                                    ? (0, l.jsx)(f.y, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: _.so,
                                          secondaryColor: A.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function P(e) {
    let { guildId: t, channel: n, className: i } = e,
        r = (0, N.d)(t),
        s = (0, o.bG)([C.Ay], () => C.Ay.getSelfMember(t)?.isPending === !0),
        a = (0, v.jY)(t),
        u = (0, o.bG)([A.A], () => A.A.getGuild(t)?.features.has(j.GuildFeatures.GUILD_SERVER_GUIDE));
    return a || s || !r || !u ? null : (0, l.jsx)(L, { guildId: t, channel: n, className: i });
}
