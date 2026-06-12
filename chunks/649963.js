"use strict";
n.d(t, { BB: () => C, Go: () => O, Jf: () => b, ao: () => v, et: () => D, on: () => R, qN: () => T });
var i,
    r = n(636537),
    s = n(765178),
    a = n(228366),
    o = n(157559),
    l = n(95561),
    u = n(505527),
    c = n(867455),
    d = n(495544),
    _ = n(734057),
    h = n(232835),
    f = n(174459),
    p = n(625494),
    E = n(927813),
    m = n(690521),
    g = n(350593),
    A = n(652215),
    I = n(375708),
    T =
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
    let { headers: i, status: r, body: s } = e;
    if (429 === r) {
        if (n.isRetry) return !0;
        let e = parseInt(i["retry-after"]);
        return isNaN(e) || setTimeout(t, e * E.A.Millis.SECOND), !1;
    }
    if (403 === r)
        switch (s && s.code) {
            case A.t02.TOO_MANY_REACTIONS:
                o.A.show({
                    title: I.intl.string(I.t.lFddsR),
                    body: I.intl.string(I.t.h27eIm),
                    confirmText: I.intl.string(I.t.BddRzS),
                });
                break;
            case A.t02.REACTION_BLOCKED:
                p._.dispatch(A.jej.SHAKE_APP, { duration: 200, intensity: 2 });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function y(e, t, n, i, r) {
    a.h.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: r?.userId ?? d.default.getId(),
        emoji: i,
        optimistic: !0,
        colors: r?.colors ?? [],
        reactionType: r?.burst ? u.v.BURST : u.v.NORMAL,
    });
}
function N(e) {
    let { channelId: t, messageId: n, emoji: i, userId: r, useTypeEndpoint: s = !1, type: a = u.v.NORMAL } = e,
        o = null != i.id ? `${i.name}:${i.id}` : i.name;
    return null == r
        ? A.Rsh.REACTIONS(t, n, o)
        : s
          ? A.Rsh.REACTION_WITH_TYPE(t, n, o, r, a)
          : A.Rsh.REACTION(t, n, o, r);
}
async function v(e) {
    let t,
        { channelId: n, messageId: i, emoji: s, limit: o, after: l, type: c } = e,
        d =
            c === u.v.VOTE
                ? ((t = s.id ?? s.name), A.Rsh.POLL_ANSWER_VOTERS(n, i, t))
                : N({ channelId: n, messageId: i, emoji: s }),
        _ = await r.Bo.get({ url: d, query: { limit: o, after: l, type: c }, oldFormErrors: !0, rejectWithError: !1 }),
        h = c === u.v.VOTE ? _.body.users : _.body;
    return (
        a.h.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: n,
            messageId: i,
            users: h,
            emoji: s,
            reactionType: c,
        }),
        h
    );
}
async function C(e, t, n) {
    var i, a, d, p;
    let E,
        m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        T = arguments.length > 4 ? arguments[4] : void 0,
        v = null != T && !!T.burst,
        R = null != T && !!T.isRetry;
    if (
        !R &&
        ((i = e), (a = t), (d = n), (p = v), null != (E = h.A.getMessage(i, a)) && E.userHasReactedWithEmoji(d, p))
    )
        return void o.A.show({
            title: I.intl.string(I.t["uaUU/g"]),
            body: I.intl.string(I.t.psMorl),
            confirmText: I.intl.string(I.t["NX+WJN"]),
        });
    let O = await L(n, v);
    return (
        y("MESSAGE_REACTION_ADD", e, t, n, { burst: v, colors: O }),
        await c.A.unarchiveThreadIfNecessary(e),
        r.Bo.put({
            url: N({ channelId: e, messageId: t, emoji: n, userId: "@me" }),
            query: { location: m, type: v ? u.v.BURST : u.v.NORMAL },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                if ("Message Shortcut" === m) {
                    let i = _.A.getChannel(e);
                    f.default.track(A.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: i?.guild_id,
                        original_message_id: t,
                        emoji_id: n.id ?? n.name,
                        action: "react",
                        ...(0, l.H$)(i?.guild_id),
                        ...(0, l.dI)(i),
                    });
                }
                v
                    ? (s.O.announce(I.intl.formatToPlainString(I.t["RJlG+R"], { name: n.name })),
                      g.A.triggerFullscreenAnimation({ channelId: e, messageId: t, emoji: { ...n, animated: !1 } }))
                    : s.O.announce(I.intl.formatToPlainString(I.t.ol4acF, { name: n.name }));
            })
            .catch((i) => {
                S(i, () => C(e, t, n, m, { burst: v, isRetry: !0 }), { isRetry: R }) &&
                    (y("MESSAGE_REACTION_REMOVE", e, t, n, { burst: v }),
                    v
                        ? s.O.announce(I.intl.formatToPlainString(I.t.fJeu87, { name: n.name }))
                        : s.O.announce(I.intl.formatToPlainString(I.t["UUn5V+"], { name: n.name })));
            })
    );
}
function R(e) {
    let { channelId: t, messageId: n, emoji: i, key: r } = e;
    a.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: i, key: r });
}
async function O(e, t, n) {
    let i = null != n && !!n.isRetry;
    await c.A.unarchiveThreadIfNecessary(e),
        r.Bo.del({ url: A.Rsh.REMOVE_REACTIONS(e, t), oldFormErrors: !0, rejectWithError: !1 }).catch((n) => {
            S(n, () => O(e, t, { isRetry: !0 }), { isRetry: i });
        });
}
async function b(e, t, n, i) {
    let s = null != i && !!i.isRetry;
    await c.A.unarchiveThreadIfNecessary(e);
    let a = null === n.id ? n.name : `${n.name}:${n.id}`;
    r.Bo.del({ url: A.Rsh.REMOVE_EMOJI_REACTIONS(e, t, a), oldFormErrors: !0, rejectWithError: !1 }).catch((i) => {
        S(i, () => b(e, t, n, { isRetry: !0 }), { isRetry: s });
    });
}
async function D(e) {
    let { channelId: t, messageId: n, emoji: i, location: a = "Message", userId: o, options: l } = e,
        d = null != l && !!l.burst,
        _ = null != l && !!l.isRetry;
    y("MESSAGE_REACTION_REMOVE", t, n, i, { userId: o, burst: d }),
        await c.A.unarchiveThreadIfNecessary(t),
        r.Bo.del({
            url: N({
                channelId: t,
                messageId: n,
                emoji: i,
                userId: o ?? "@me",
                type: d ? u.v.BURST : u.v.NORMAL,
                useTypeEndpoint: !0,
            }),
            query: { location: a, burst: d },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                l?.burst
                    ? s.O.announce(I.intl.formatToPlainString(I.t["3l9f6u"], { name: i.name }))
                    : s.O.announce(I.intl.formatToPlainString(I.t["DQxi+7"], { name: i.name }));
            })
            .catch(async (e) => {
                if (
                    S(
                        e,
                        () =>
                            D({
                                channelId: t,
                                messageId: n,
                                emoji: i,
                                location: a,
                                userId: o,
                                options: { burst: d, isRetry: !0 },
                            }),
                        { isRetry: _ },
                    )
                ) {
                    let e = await L(i, d);
                    y("MESSAGE_REACTION_ADD", t, n, i, { userId: o, burst: d, colors: e }),
                        l?.burst
                            ? s.O.announce(I.intl.formatToPlainString(I.t.OamVbV, { name: i.name }))
                            : s.O.announce(I.intl.formatToPlainString(I.t["tD9+b+"], { name: i.name }));
                }
            });
}
async function L(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, m.D_)(e);
        } catch {}
    return n;
}
