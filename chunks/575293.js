n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(417597),
    c = n(397927),
    u = n(775602),
    d = n(47167),
    f = n(713654),
    p = n(418842),
    _ = n(734057),
    h = n(696451),
    m = n(71393),
    g = n(225142),
    E = n(374084),
    b = n(101611),
    y = n(473529),
    O = n(111487),
    A = n(652215),
    v = n(985018),
    S = n(392605);
let I = {
    compact: 58,
    cozy: 74,
    default: 64,
};

function T(e) {
    let { action: t } = e,
        n = (0, l.bG)([_.A], () => _.A.getChannel(t.channelId)),
        i = (0, d.Ay)(n, !0);
    return null == n
        ? (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: v.intl.format(v.t.MkzlDL, {
                  channelName: v.intl.string(v.t.J90oLW),
              }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: v.intl.format(v.t.MkzlDL, {
                  channelName: i,
              }),
          });
}

function C(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: a } = e,
        s = (0, l.bG)([_.A], () => _.A.getChannel(n));
    if (null == s) return null;
    let o = null != (t = (0, f.gU)(s)) ? t : c.N$i;
    return (0, r.jsx)(O.A, {
        emojiId: i,
        emojiName: a,
        size: O.g.MEDIUM,
        defaultComponent: (0, r.jsx)(o, {
            className: S.p,
        }),
    });
}

function N(e) {
    var t, n, a, d;
    let { guildId: f, channel: _, className: h } = e,
        { channelAction: m, completed: y } = (0, b.j4)(f, _),
        O = (0, b.Lr)(f, null == m ? void 0 : m.channelId),
        A = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        N = (null == m ? void 0 : m.actionType) === E.NewMemberActionTypes.VIEW,
        R = (0, c.rdh)(c.LU0.colors.WHITE),
        w = I[(0, p.C)()],
        [P, D] = i.useState(!1),
        [x] = i.useState(new o.A.Value(0)),
        [L] = i.useState(new o.A.Value(0));
    i.useEffect(() => {
        y
            ? o.A.timing(x, {
                  toValue: 0,
                  duration: A ? 1 : 350,
                  easing: o.A.Easing.quad,
                  delay: 500 * !N,
              }).start(() => D(!0))
            : o.A.timing(x, {
                  toValue: 1,
                  duration: A ? 1 : 350,
                  easing: o.A.Easing.quad,
                  delay: 400,
              }).start();
    }, [y, x, N, A]),
        i.useEffect(() => {
            y &&
                P &&
                o.A.timing(L, {
                    toValue: 1,
                    duration: 350 * !A,
                    easing: o.A.Easing.quad,
                    delay: 400,
                }).start();
        }, [y, L, P, A]);
    let j = i.useCallback(() => {
        null != O && (0, g.qo)(f, O.channelId);
    }, [f, O]);
    return null == m || (N && !P)
        ? null
        : (0, r.jsx)("div", {
              className: s()(S.kL, h),
              children:
                  P && null != O
                      ? (0, r.jsx)(o.A.div, {
                            style: {
                                marginBottom: L.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-w, 0],
                                }),
                            },
                            children: (0, r.jsxs)(c.DUT, {
                                className: s()(S.vK, S.vk, {
                                    [S.pJ]: _.isForumChannel(),
                                }),
                                onClick: j,
                                children: [
                                    (0, r.jsx)(C, {
                                        channelId: O.channelId,
                                        emojiId: null == (t = O.emoji) ? void 0 : t.id,
                                        emojiName: null == O || null == (n = O.emoji) ? void 0 : n.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.Qq,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: v.intl.format(v.t["/beONw"], {
                                                    step: O.title,
                                                }),
                                            }),
                                            (0, r.jsx)(T, {
                                                action: O,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.kJ,
                                        children: (0, r.jsx)(c.EdP, {
                                            size: "xs",
                                            color: R.hex(),
                                            className: S.fz,
                                        }),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(o.A.div, {
                            className: s()(S.vK, {
                                [S.pJ]: _.isForumChannel(),
                            }),
                            style: {
                                marginBottom: x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-w, 0],
                                }),
                            },
                            children: [
                                (0, r.jsx)(C, {
                                    channelId: m.channelId,
                                    emojiId: null == (a = m.emoji) ? void 0 : a.id,
                                    emojiName: null == m || null == (d = m.emoji) ? void 0 : d.name,
                                }),
                                (0, r.jsxs)("div", {
                                    className: S.Qq,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            children: m.title,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: v.intl.string(v.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                y
                                    ? (0, r.jsx)(c.yr3, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: S.so,
                                          secondaryColor: R.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}

function R(e) {
    let { guildId: t, channel: n, className: i } = e,
        a = (0, y.d)(t),
        s = (0, l.bG)([h.Ay], () => {
            var e;
            return (null == (e = h.Ay.getSelfMember(t)) ? void 0 : e.isPending) === !0;
        }),
        o = (0, b.jY)(t),
        c = (0, l.bG)([m.A], () => {
            var e;
            return null == (e = m.A.getGuild(t)) ? void 0 : e.features.has(A.GuildFeatures.GUILD_SERVER_GUIDE);
        });
    return o || s || !a || !c
        ? null
        : (0, r.jsx)(N, {
              guildId: t,
              channel: n,
              className: i,
          });
}
