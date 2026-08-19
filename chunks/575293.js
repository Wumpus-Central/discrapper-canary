"use strict";
n.d(t, { A: () => k });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
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
    A = n(174355),
    E = n(418842),
    C = n(734057),
    I = n(696451),
    y = n(71393),
    S = n(225142),
    v = n(374084),
    _ = n(101611),
    N = n(473529),
    T = n(111487),
    j = n(652215),
    b = n(375708),
    R = n(34406);
let L = { compact: 58, cozy: 74, default: 64 };
function O(e) {
    let { action: t } = e,
        n = (0, o.bG)([C.A], () => C.A.getChannel(t.channelId)),
        i = (0, x.Ay)(n, !0);
    return null == n
        ? (0, l.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: b.intl.format(b.t.MkzlDL, { channelName: b.intl.string(b.t.J90oLW) }),
          })
        : (0, l.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: b.intl.format(b.t.MkzlDL, { channelName: i }),
          });
}
function M(e) {
    let { channelId: t, emojiId: n, emojiName: i } = e,
        s = (0, o.bG)([C.A], () => C.A.getChannel(t));
    if (null == s) return null;
    let r = (0, A.gU)(s) ?? c.N;
    return (0, l.jsx)(T.A, {
        emojiId: n,
        emojiName: i,
        size: T.g.MEDIUM,
        defaultComponent: (0, l.jsx)(r, { className: R.p }),
    });
}
function w(e) {
    let { guildId: t, channel: n, className: s } = e,
        { channelAction: c, completed: x } = (0, _.j4)(t, n),
        A = (0, _.Lr)(t, c?.channelId),
        C = (0, o.bG)([g.Ay], () => g.Ay.useReducedMotion),
        I = c?.actionType === v.NewMemberActionTypes.VIEW,
        y = (0, d.r)(h.A.colors.WHITE),
        N = L[(0, E.C)()],
        [T, j] = i.useState(!1),
        [w] = i.useState(new a.A.Value(0)),
        [k] = i.useState(new a.A.Value(0));
    i.useEffect(() => {
        x
            ? a.A.timing(w, { toValue: 0, duration: C ? 1 : 350, easing: a.A.Easing.quad, delay: 500 * !I }).start(() =>
                  j(!0),
              )
            : a.A.timing(w, { toValue: 1, duration: C ? 1 : 350, easing: a.A.Easing.quad, delay: 400 }).start();
    }, [x, w, I, C]),
        i.useEffect(() => {
            x && T && a.A.timing(k, { toValue: 1, duration: 350 * !C, easing: a.A.Easing.quad, delay: 400 }).start();
        }, [x, k, T, C]);
    let P = i.useCallback(() => {
        null != A && (0, S.qo)(t, A.channelId);
    }, [t, A]);
    return null == c || (I && !T)
        ? null
        : (0, l.jsx)("div", {
              className: r()(R.kL, s),
              children:
                  T && null != A
                      ? (0, l.jsx)(a.A.div, {
                            style: { marginBottom: k.interpolate({ inputRange: [0, 1], outputRange: [-N, 0] }) },
                            children: (0, l.jsxs)(m.D, {
                                className: r()(R.vK, R.vk, { [R.pJ]: n.isForumChannel() }),
                                onClick: P,
                                children: [
                                    (0, l.jsx)(M, {
                                        channelId: A.channelId,
                                        emojiId: A.emoji?.id,
                                        emojiName: A?.emoji?.name,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: R.Qq,
                                        children: [
                                            (0, l.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: b.intl.format(b.t["/beONw"], { step: A.title }),
                                            }),
                                            (0, l.jsx)(O, { action: A }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: R.kJ,
                                        children: (0, l.jsx)(f.E, { size: "xs", color: y.hex(), className: R.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, l.jsxs)(a.A.div, {
                            className: r()(R.vK, { [R.pJ]: n.isForumChannel() }),
                            style: { marginBottom: w.interpolate({ inputRange: [0, 1], outputRange: [-N, 0] }) },
                            children: [
                                (0, l.jsx)(M, {
                                    channelId: c.channelId,
                                    emojiId: c.emoji?.id,
                                    emojiName: c?.emoji?.name,
                                }),
                                (0, l.jsxs)("div", {
                                    className: R.Qq,
                                    children: [
                                        (0, l.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: b.intl.string(b.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                x
                                    ? (0, l.jsx)(p.y, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: R.so,
                                          secondaryColor: y.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function k(e) {
    let { guildId: t, channel: n, className: i } = e,
        s = (0, N.d)(t),
        r = (0, o.bG)([I.Ay], () => I.Ay.getSelfMember(t)?.isPending === !0),
        a = (0, _.jY)(t),
        u = (0, o.bG)([y.A], () => y.A.getGuild(t)?.features.has(j.GuildFeatures.GUILD_SERVER_GUIDE));
    return a || r || !s || !u ? null : (0, l.jsx)(w, { guildId: t, channel: n, className: i });
}
