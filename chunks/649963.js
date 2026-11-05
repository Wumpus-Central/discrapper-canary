var i,
    r = n(620632),
    a = n(765178),
    s = n(73153),
    l = n(157559),
    o = n(149468),
    d = n(505527),
    c = n(7909),
    u = n(46653),
    _ = n(734057),
    E = n(596344),
    A = n(129230),
    f = n(188567),
    h = n(927813),
    I = n(690521),
    p = n(673375),
    m = n(652215),
    T = n(792996),
    g =
        (((i = {}).MESSAGE = "Message"),
        (i.FORUM_TOOLBAR = "Forum Toolbar"),
        (i.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer"),
        (i.MESSAGE_HOVER_BAR = "Message Hover Bar"),
        (i.MESSAGE_INLINE_BUTTON = "Message Inline Button"),
        (i.MESSAGE_CONTEXT_MENU = "Message Context Menu"),
        (i.MESSAGE_REACTION_PICKER = "Message Reaction Picker"),
        (i.MESSAGE_SHORTCUT = "Message Shortcut"),
        (i.DOUBLE_TAP = "Double Tap"),
        (i.IN_APP_NOTIFICATION = "In App Notification"),
        i);
function S(e, t, n) {
    let { headers: i, status: r, body: a } = e;
    if (429 === r) {
        if (n.isRetry) return !0;
        let e = parseInt(i["retry-after"]);
        return (isNaN(e) || setTimeout(t, e * h.A.Millis.SECOND), !1);
    }
    if (403 === r)
        switch (a && a.code) {
            case m.t02.TOO_MANY_REACTIONS:
                l.A.show({
                    title: T.intl.string(T.t.lFddsR),
                    body: T.intl.string(T.t.h27eIm),
                    confirmText: T.intl.string(T.t.BddRzS),
                });
                break;
            case m.t02.REACTION_BLOCKED:
                f._.dispatch(m.jej.SHAKE_APP, { duration: 200, intensity: 2 });
        }
    else if (!n.isRetry) return (t(), !1);
    return !0;
}
function N(e, t, n, i, r) {
    s.h.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: r?.userId ?? u.default.getId(),
        emoji: i,
        optimistic: !0,
        colors: r?.colors ?? [],
        reactionType: r?.burst ? d.v.BURST : d.v.NORMAL,
    });
}
function C(e) {
    let { channelId: t, messageId: n, emoji: i, userId: r, useTypeEndpoint: a = !1, type: s = d.v.NORMAL } = e,
        l = null != i.id ? `${i.name}:${i.id}` : i.name;
    return null == r
        ? m.Rsh.REACTIONS(t, n, l)
        : a
          ? m.Rsh.REACTION_WITH_TYPE(t, n, l, r, s)
          : m.Rsh.REACTION(t, n, l, r);
}
async function O(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, I.D_)(e);
        } catch {}
    return n;
}
n.d(
    t,
    {},
    {
        BB: async function e(t, n, i) {
            var s, u, f, h;
            let I,
                g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
                R = arguments.length > 4 ? arguments[4] : void 0,
                L = null != R && !!R.burst,
                y = null != R && !!R.isRetry;
            if (
                !y &&
                ((s = t),
                (u = n),
                (f = i),
                (h = L),
                null != (I = E.A.getMessage(s, u)) && I.userHasReactedWithEmoji(f, h))
            )
                return void l.A.show({
                    title: T.intl.string(T.t["uaUU/g"]),
                    body: T.intl.string(T.t.psMorl),
                    confirmText: T.intl.string(T.t["NX+WJN"]),
                });
            let D = await O(i, L);
            return (
                N("MESSAGE_REACTION_ADD", t, n, i, { burst: L, colors: D }),
                await c.A.unarchiveThreadIfNecessary(t),
                r.Bo.put({
                    url: C({ channelId: t, messageId: n, emoji: i, userId: "@me" }),
                    query: { location: g, type: L ? d.v.BURST : d.v.NORMAL },
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                })
                    .then(() => {
                        if ("Message Shortcut" === g) {
                            let e = _.A.getChannel(t);
                            A.default.track(m.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                                channel_id: t,
                                guild_id: e?.guild_id,
                                original_message_id: n,
                                emoji_id: i.id ?? i.name,
                                action: "react",
                                ...(0, o.H$)(e?.guild_id),
                                ...(0, o.dI)(e),
                            });
                        }
                        L
                            ? (a.O.announce(T.intl.formatToPlainString(T.t["RJlG+R"], { name: i.name })),
                              p.A.triggerFullscreenAnimation({
                                  channelId: t,
                                  messageId: n,
                                  emoji: { ...i, animated: !1 },
                              }))
                            : a.O.announce(T.intl.formatToPlainString(T.t.ol4acF, { name: i.name }));
                    })
                    .catch((r) => {
                        S(r, () => e(t, n, i, g, { burst: L, isRetry: !0 }), { isRetry: y }) &&
                            (N("MESSAGE_REACTION_REMOVE", t, n, i, { burst: L }),
                            L
                                ? a.O.announce(T.intl.formatToPlainString(T.t.fJeu87, { name: i.name }))
                                : a.O.announce(T.intl.formatToPlainString(T.t["UUn5V+"], { name: i.name })));
                    })
            );
        },
        Go: async function e(t, n, i) {
            let a = null != i && !!i.isRetry;
            (await c.A.unarchiveThreadIfNecessary(t),
                r.Bo.del({ url: m.Rsh.REMOVE_REACTIONS(t, n), oldFormErrors: !0, rejectWithError: (0, r.fT)() }).catch(
                    (i) => {
                        S(i, () => e(t, n, { isRetry: !0 }), { isRetry: a });
                    },
                ));
        },
        Jf: async function e(t, n, i, a) {
            let s = null != a && !!a.isRetry;
            await c.A.unarchiveThreadIfNecessary(t);
            let l = null === i.id ? i.name : `${i.name}:${i.id}`;
            r.Bo.del({
                url: m.Rsh.REMOVE_EMOJI_REACTIONS(t, n, l),
                oldFormErrors: !0,
                rejectWithError: (0, r.fT)(),
            }).catch((r) => {
                S(r, () => e(t, n, i, { isRetry: !0 }), { isRetry: s });
            });
        },
        ao: async function (e) {
            let t,
                { channelId: n, messageId: i, emoji: a, limit: l, after: o, type: c } = e,
                u =
                    c === d.v.VOTE
                        ? ((t = a.id ?? a.name), m.Rsh.POLL_ANSWER_VOTERS(n, i, t))
                        : C({ channelId: n, messageId: i, emoji: a }),
                _ = await r.Bo.get({
                    url: u,
                    query: { limit: l, after: o, type: c },
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                }),
                E = c === d.v.VOTE ? _.body.users : _.body;
            return (
                s.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: n,
                    messageId: i,
                    users: E,
                    emoji: a,
                    reactionType: c,
                }),
                E
            );
        },
        et: async function e(t) {
            let { channelId: n, messageId: i, emoji: s, location: l = "Message", userId: o, options: u } = t,
                _ = null != u && !!u.burst,
                E = null != u && !!u.isRetry;
            (N("MESSAGE_REACTION_REMOVE", n, i, s, { userId: o, burst: _ }),
                await c.A.unarchiveThreadIfNecessary(n),
                r.Bo.del({
                    url: C({
                        channelId: n,
                        messageId: i,
                        emoji: s,
                        userId: o ?? "@me",
                        type: _ ? d.v.BURST : d.v.NORMAL,
                        useTypeEndpoint: !0,
                    }),
                    query: { location: l, burst: _ },
                    oldFormErrors: !0,
                    rejectWithError: (0, r.fT)(),
                })
                    .then(() => {
                        u?.burst
                            ? a.O.announce(T.intl.formatToPlainString(T.t["3l9f6u"], { name: s.name }))
                            : a.O.announce(T.intl.formatToPlainString(T.t["DQxi+7"], { name: s.name }));
                    })
                    .catch(async (t) => {
                        if (
                            S(
                                t,
                                () =>
                                    e({
                                        channelId: n,
                                        messageId: i,
                                        emoji: s,
                                        location: l,
                                        userId: o,
                                        options: { burst: _, isRetry: !0 },
                                    }),
                                { isRetry: E },
                            )
                        ) {
                            let e = await O(s, _);
                            (N("MESSAGE_REACTION_ADD", n, i, s, { userId: o, burst: _, colors: e }),
                                u?.burst
                                    ? a.O.announce(T.intl.formatToPlainString(T.t.OamVbV, { name: s.name }))
                                    : a.O.announce(T.intl.formatToPlainString(T.t["tD9+b+"], { name: s.name })));
                        }
                    }));
        },
        on: function (e) {
            let { channelId: t, messageId: n, emoji: i, key: r } = e;
            s.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: i, key: r });
        },
        qN: g,
    },
);
