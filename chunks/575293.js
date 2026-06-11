"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(702841),
    u = n(834730),
    c = n(276293),
    d = n(602853),
    _ = n(661531),
    h = n(939249),
    f = n(935286),
    p = n(628284),
    E = n(775602),
    m = n(47167),
    g = n(713654),
    A = n(418842),
    I = n(734057),
    T = n(696451),
    S = n(71393),
    y = n(225142),
    N = n(374084),
    v = n(101611),
    C = n(473529),
    R = n(111487),
    O = n(652215),
    b = n(375708),
    D = n(235054);
let L = { compact: 58, cozy: 74, default: 64 };
function w(e) {
    let { action: t } = e,
        n = (0, l.bG)([I.A], () => I.A.getChannel(t.channelId)),
        r = (0, m.Ay)(n, !0);
    return null == n
        ? (0, i.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: b.intl.format(b.t.MkzlDL, { channelName: b.intl.string(b.t.J90oLW) }),
          })
        : (0, i.jsx)(u.E, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: b.intl.format(b.t.MkzlDL, { channelName: r }),
          });
}
function M(e) {
    let { channelId: t, emojiId: n, emojiName: r } = e,
        s = (0, l.bG)([I.A], () => I.A.getChannel(t));
    if (null == s) return null;
    let a = (0, g.gU)(s) ?? c.N;
    return (0, i.jsx)(R.A, {
        emojiId: n,
        emojiName: r,
        size: R.g.MEDIUM,
        defaultComponent: (0, i.jsx)(a, { className: D.p }),
    });
}
function P(e) {
    let { guildId: t, channel: n, className: s } = e,
        { channelAction: c, completed: m } = (0, v.j4)(t, n),
        g = (0, v.Lr)(t, c?.channelId),
        I = (0, l.bG)([E.Ay], () => E.Ay.useReducedMotion),
        T = c?.actionType === N.NewMemberActionTypes.VIEW,
        S = (0, d.r)(_.A.colors.WHITE),
        C = L[(0, A.C)()],
        [R, O] = r.useState(!1),
        [P] = r.useState(new o.A.Value(0)),
        [x] = r.useState(new o.A.Value(0));
    r.useEffect(() => {
        m
            ? o.A.timing(P, { toValue: 0, duration: I ? 1 : 350, easing: o.A.Easing.quad, delay: 500 * !T }).start(() =>
                  O(!0),
              )
            : o.A.timing(P, { toValue: 1, duration: I ? 1 : 350, easing: o.A.Easing.quad, delay: 400 }).start();
    }, [m, P, T, I]),
        r.useEffect(() => {
            m && R && o.A.timing(x, { toValue: 1, duration: 350 * !I, easing: o.A.Easing.quad, delay: 400 }).start();
        }, [m, x, R, I]);
    let k = r.useCallback(() => {
        null != g && (0, y.qo)(t, g.channelId);
    }, [t, g]);
    return null == c || (T && !R)
        ? null
        : (0, i.jsx)("div", {
              className: a()(D.kL, s),
              children:
                  R && null != g
                      ? (0, i.jsx)(o.A.div, {
                            style: { marginBottom: x.interpolate({ inputRange: [0, 1], outputRange: [-C, 0] }) },
                            children: (0, i.jsxs)(h.D, {
                                className: a()(D.vK, D.vk, { [D.pJ]: n.isForumChannel() }),
                                onClick: k,
                                children: [
                                    (0, i.jsx)(M, {
                                        channelId: g.channelId,
                                        emojiId: g.emoji?.id,
                                        emojiName: g?.emoji?.name,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: D.Qq,
                                        children: [
                                            (0, i.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: b.intl.format(b.t["/beONw"], { step: g.title }),
                                            }),
                                            (0, i.jsx)(w, { action: g }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: D.kJ,
                                        children: (0, i.jsx)(f.E, { size: "xs", color: S.hex(), className: D.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, i.jsxs)(o.A.div, {
                            className: a()(D.vK, { [D.pJ]: n.isForumChannel() }),
                            style: { marginBottom: P.interpolate({ inputRange: [0, 1], outputRange: [-C, 0] }) },
                            children: [
                                (0, i.jsx)(M, {
                                    channelId: c.channelId,
                                    emojiId: c.emoji?.id,
                                    emojiName: c?.emoji?.name,
                                }),
                                (0, i.jsxs)("div", {
                                    className: D.Qq,
                                    children: [
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, i.jsx)(u.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: b.intl.string(b.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                m
                                    ? (0, i.jsx)(p.y, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: D.so,
                                          secondaryColor: S.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function x(e) {
    let { guildId: t, channel: n, className: r } = e,
        s = (0, C.d)(t),
        a = (0, l.bG)([T.Ay], () => T.Ay.getSelfMember(t)?.isPending === !0),
        o = (0, v.jY)(t),
        u = (0, l.bG)([S.A], () => S.A.getGuild(t)?.features.has(O.GuildFeatures.GUILD_SERVER_GUIDE));
    return o || a || !s || !u ? null : (0, i.jsx)(P, { guildId: t, channel: n, className: r });
}
