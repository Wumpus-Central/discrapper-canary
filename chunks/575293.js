n.d(t, { A: () => M });
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
    f = n(935286),
    p = n(628284),
    g = n(775602),
    x = n(47167),
    E = n(713654),
    S = n(418842),
    y = n(734057),
    A = n(696451),
    C = n(71393),
    b = n(225142),
    I = n(374084),
    v = n(101611),
    N = n(473529),
    T = n(111487),
    j = n(652215),
    _ = n(105292),
    k = n(160639);
let R = { compact: 58, cozy: 74, default: 64 };
function O(e) {
    let { action: t } = e,
        n = (0, o.bG)([y.A], () => y.A.getChannel(t.channelId)),
        i = (0, x.Ay)(n, !0);
    return null == n
        ? (0, l.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: _.intl.format(_.t.MkzlDL, { channelName: _.intl.string(_.t.J90oLW) }),
          })
        : (0, l.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: _.intl.format(_.t.MkzlDL, { channelName: i }),
          });
}
function w(e) {
    let { channelId: t, emojiId: n, emojiName: i } = e,
        r = (0, o.bG)([y.A], () => y.A.getChannel(t));
    if (null == r) return null;
    let s = (0, E.gU)(r) ?? c.N;
    return (0, l.jsx)(T.A, {
        emojiId: n,
        emojiName: i,
        size: T.g.MEDIUM,
        defaultComponent: (0, l.jsx)(s, { className: k.p }),
    });
}
function L(e) {
    let { guildId: t, channel: n, className: r } = e,
        { channelAction: c, completed: x } = (0, v.j4)(t, n),
        E = (0, v.Lr)(t, c?.channelId),
        y = (0, o.bG)([g.Ay], () => g.Ay.useReducedMotion),
        A = c?.actionType === I.NewMemberActionTypes.VIEW,
        C = (0, d.r)(h.A.colors.WHITE),
        N = R[(0, S.C)()],
        [T, j] = i.useState(!1),
        [L] = i.useState(new a.A.Value(0)),
        [M] = i.useState(new a.A.Value(0));
    (i.useEffect(() => {
        x
            ? a.A.timing(L, { toValue: 0, duration: y ? 1 : 350, easing: a.A.Easing.quad, delay: 500 * !A }).start(() =>
                  j(!0),
              )
            : a.A.timing(L, { toValue: 1, duration: y ? 1 : 350, easing: a.A.Easing.quad, delay: 400 }).start();
    }, [x, L, A, y]),
        i.useEffect(() => {
            x && T && a.A.timing(M, { toValue: 1, duration: 350 * !y, easing: a.A.Easing.quad, delay: 400 }).start();
        }, [x, M, T, y]));
    let P = i.useCallback(() => {
        null != E && (0, b.qo)(t, E.channelId);
    }, [t, E]);
    return null == c || (A && !T)
        ? null
        : (0, l.jsx)("div", {
              className: s()(k.kL, r),
              children:
                  T && null != E
                      ? (0, l.jsx)(a.A.div, {
                            style: { marginBottom: M.interpolate({ inputRange: [0, 1], outputRange: [-N, 0] }) },
                            children: (0, l.jsxs)(m.D, {
                                className: s()(k.vK, k.vk, { [k.pJ]: n.isForumChannel() }),
                                onClick: P,
                                children: [
                                    (0, l.jsx)(w, {
                                        channelId: E.channelId,
                                        emojiId: E.emoji?.id,
                                        emojiName: E?.emoji?.name,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: k.Qq,
                                        children: [
                                            (0, l.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: _.intl.format(_.t["/beONw"], { step: E.title }),
                                            }),
                                            (0, l.jsx)(O, { action: E }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: k.kJ,
                                        children: (0, l.jsx)(f.E, { size: "xs", color: C.hex(), className: k.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, l.jsxs)(a.A.div, {
                            className: s()(k.vK, { [k.pJ]: n.isForumChannel() }),
                            style: { marginBottom: L.interpolate({ inputRange: [0, 1], outputRange: [-N, 0] }) },
                            children: [
                                (0, l.jsx)(w, {
                                    channelId: c.channelId,
                                    emojiId: c.emoji?.id,
                                    emojiName: c?.emoji?.name,
                                }),
                                (0, l.jsxs)("div", {
                                    className: k.Qq,
                                    children: [
                                        (0, l.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: _.intl.string(_.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                x
                                    ? (0, l.jsx)(p.y, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: k.so,
                                          secondaryColor: C.hex(),
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
        r = (0, N.d)(t),
        s = (0, o.bG)([A.Ay], () => A.Ay.getSelfMember(t)?.isPending === !0),
        a = (0, v.jY)(t),
        u = (0, o.bG)([C.A], () => C.A.getGuild(t)?.features.has(j.GuildFeatures.GUILD_SERVER_GUIDE));
    return a || s || !r || !u ? null : (0, l.jsx)(L, { guildId: t, channel: n, className: i });
}
