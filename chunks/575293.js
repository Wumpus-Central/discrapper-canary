"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(417597),
    u = n(397927),
    c = n(775602),
    d = n(47167),
    _ = n(713654),
    f = n(418842),
    p = n(734057),
    h = n(696451),
    m = n(71393),
    g = n(225142),
    E = n(374084),
    A = n(101611),
    I = n(473529),
    T = n(111487),
    y = n(652215),
    S = n(985018),
    v = n(392605);
let C = { compact: 58, cozy: 74, default: 64 };
function b(e) {
    let { action: t } = e,
        n = (0, l.bG)([p.A], () => p.A.getChannel(t.channelId)),
        i = (0, d.Ay)(n, !0);
    return null == n
        ? (0, r.jsx)(u.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: S.intl.format(S.t.MkzlDL, { channelName: S.intl.string(S.t.J90oLW) }),
          })
        : (0, r.jsx)(u.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: S.intl.format(S.t.MkzlDL, { channelName: i }),
          });
}
function N(e) {
    let { channelId: t, emojiId: n, emojiName: i } = e,
        a = (0, l.bG)([p.A], () => p.A.getChannel(t));
    if (null == a) return null;
    let s = (0, _.gU)(a) ?? u.N$i;
    return (0, r.jsx)(T.A, {
        emojiId: n,
        emojiName: i,
        size: T.g.MEDIUM,
        defaultComponent: (0, r.jsx)(s, { className: v.p }),
    });
}
function R(e) {
    let { guildId: t, channel: n, className: a } = e,
        { channelAction: d, completed: _ } = (0, A.j4)(t, n),
        p = (0, A.Lr)(t, d?.channelId),
        h = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        m = d?.actionType === E.NewMemberActionTypes.VIEW,
        I = (0, u.rdh)(u.LU0.colors.WHITE),
        T = C[(0, f.C)()],
        [y, R] = i.useState(!1),
        [O] = i.useState(new o.A.Value(0)),
        [D] = i.useState(new o.A.Value(0));
    i.useEffect(() => {
        _
            ? o.A.timing(O, { toValue: 0, duration: h ? 1 : 350, easing: o.A.Easing.quad, delay: 500 * !m }).start(() =>
                  R(!0),
              )
            : o.A.timing(O, { toValue: 1, duration: h ? 1 : 350, easing: o.A.Easing.quad, delay: 400 }).start();
    }, [_, O, m, h]),
        i.useEffect(() => {
            _ && y && o.A.timing(D, { toValue: 1, duration: 350 * !h, easing: o.A.Easing.quad, delay: 400 }).start();
        }, [_, D, y, h]);
    let L = i.useCallback(() => {
        null != p && (0, g.qo)(t, p.channelId);
    }, [t, p]);
    return null == d || (m && !y)
        ? null
        : (0, r.jsx)("div", {
              className: s()(v.kL, a),
              children:
                  y && null != p
                      ? (0, r.jsx)(o.A.div, {
                            style: { marginBottom: D.interpolate({ inputRange: [0, 1], outputRange: [-T, 0] }) },
                            children: (0, r.jsxs)(u.DUT, {
                                className: s()(v.vK, v.vk, { [v.pJ]: n.isForumChannel() }),
                                onClick: L,
                                children: [
                                    (0, r.jsx)(N, {
                                        channelId: p.channelId,
                                        emojiId: p.emoji?.id,
                                        emojiName: p?.emoji?.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: v.Qq,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: S.intl.format(S.t["/beONw"], { step: p.title }),
                                            }),
                                            (0, r.jsx)(b, { action: p }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: v.kJ,
                                        children: (0, r.jsx)(u.EdP, { size: "xs", color: I.hex(), className: v.fz }),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(o.A.div, {
                            className: s()(v.vK, { [v.pJ]: n.isForumChannel() }),
                            style: { marginBottom: O.interpolate({ inputRange: [0, 1], outputRange: [-T, 0] }) },
                            children: [
                                (0, r.jsx)(N, {
                                    channelId: d.channelId,
                                    emojiId: d.emoji?.id,
                                    emojiName: d?.emoji?.name,
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.Qq,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: d.title,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: S.intl.string(S.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                _
                                    ? (0, r.jsx)(u.yr3, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: v.so,
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
    let { guildId: t, channel: n, className: i } = e,
        a = (0, I.d)(t),
        s = (0, l.bG)([h.Ay], () => h.Ay.getSelfMember(t)?.isPending === !0),
        o = (0, A.jY)(t),
        u = (0, l.bG)([m.A], () => m.A.getGuild(t)?.features.has(y.GuildFeatures.GUILD_SERVER_GUIDE));
    return o || s || !a || !u ? null : (0, r.jsx)(R, { guildId: t, channel: n, className: i });
}
