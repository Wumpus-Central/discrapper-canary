"use strict";
n.d(t, { BB: () => C, Go: () => O, Jf: () => b, ao: () => N, et: () => D, on: () => R, qN: () => I });
var r = n(562465),
    i = n(582754),
    s = n(73153),
    a = n(157559),
    o = n(58149),
    l = n(505527),
    u = n(867455),
    c = n(961350),
    d = n(734057),
    _ = n(320501),
    f = n(954571),
    p = n(203982),
    h = n(927813),
    m = n(690521),
    E = n(300703),
    g = n(652215),
    A = n(985018),
    I = (function (e) {
        return (
            (e.MESSAGE = "Message"),
            (e.FORUM_TOOLBAR = "Forum Toolbar"),
            (e.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer"),
            (e.MESSAGE_HOVER_BAR = "Message Hover Bar"),
            (e.MESSAGE_INLINE_BUTTON = "Message Inline Button"),
            (e.MESSAGE_CONTEXT_MENU = "Message Context Menu"),
            (e.MESSAGE_REACTION_PICKER = "Message Reaction Picker"),
            (e.MESSAGE_SHORTCUT = "Message Shortcut"),
            (e.DOUBLE_TAP = "Double Tap"),
            (e.IN_APP_NOTIFICATION = "In App Notification"),
            e
        );
    })({});
function T(e, t, n) {
    let { headers: r, status: i, body: s } = e;
    if (429 === i) {
        if (n.isRetry) return !0;
        let e = parseInt(r["retry-after"]);
        return isNaN(e) || setTimeout(t, e * h.A.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (s && s.code) {
            case g.t02.TOO_MANY_REACTIONS:
                a.A.show({
                    title: A.intl.string(A.t.lFddsR),
                    body: A.intl.string(A.t.h27eIm),
                    confirmText: A.intl.string(A.t.BddRzS),
                });
                break;
            case g.t02.REACTION_BLOCKED:
                p._.dispatch(g.jej.SHAKE_APP, { duration: 200, intensity: 2 });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function S(e, t, n, r, i) {
    s.h.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: i?.userId ?? c.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: i?.colors ?? [],
        reactionType: i?.burst ? l.v.BURST : l.v.NORMAL,
    });
}
function y(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: s = !1, type: a = l.v.NORMAL } = e,
        o = null != r.id ? `${r.name}:${r.id}` : r.name;
    return null == i
        ? g.Rsh.REACTIONS(t, n, o)
        : s
          ? g.Rsh.REACTION_WITH_TYPE(t, n, o, i, a)
          : g.Rsh.REACTION(t, n, o, i);
}
function v(e, t, n) {
    let r = n.id ?? n.name;
    return g.Rsh.POLL_ANSWER_VOTERS(e, t, r);
}
async function N(e) {
    let { channelId: t, messageId: n, emoji: i, limit: a, after: o, type: u } = e,
        c = u === l.v.VOTE ? v(t, n, i) : y({ channelId: t, messageId: n, emoji: i }),
        d = await r.Bo.get({ url: c, query: { limit: a, after: o, type: u }, oldFormErrors: !0, rejectWithError: !1 }),
        _ = u === l.v.VOTE ? d.body.users : d.body;
    return (
        s.h.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: t,
            messageId: n,
            users: _,
            emoji: i,
            reactionType: u,
        }),
        _
    );
}
async function C(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        c = arguments.length > 4 ? arguments[4] : void 0,
        _ = null != c && !!c.burst,
        p = null != c && !!c.isRetry;
    if (!p && w(e, t, n, _))
        return void a.A.show({
            title: A.intl.string(A.t["uaUU/g"]),
            body: A.intl.string(A.t.psMorl),
            confirmText: A.intl.string(A.t["NX+WJN"]),
        });
    let h = await L(n, _);
    return (
        S("MESSAGE_REACTION_ADD", e, t, n, { burst: _, colors: h }),
        await u.A.unarchiveThreadIfNecessary(e),
        r.Bo.put({
            url: y({ channelId: e, messageId: t, emoji: n, userId: "@me" }),
            query: { location: s, type: _ ? l.v.BURST : l.v.NORMAL },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                if ("Message Shortcut" === s) {
                    let r = d.A.getChannel(e);
                    f.default.track(g.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: r?.guild_id,
                        original_message_id: t,
                        emoji_id: n.id ?? n.name,
                        action: "react",
                        ...(0, o.H$)(r?.guild_id),
                        ...(0, o.dI)(r),
                    });
                }
                _
                    ? (i.OR.announce(A.intl.formatToPlainString(A.t["RJlG+R"], { name: n.name })),
                      E.A.triggerFullscreenAnimation({ channelId: e, messageId: t, emoji: { ...n, animated: !1 } }))
                    : i.OR.announce(A.intl.formatToPlainString(A.t.ol4acF, { name: n.name }));
            })
            .catch((r) => {
                T(r, () => C(e, t, n, s, { burst: _, isRetry: !0 }), { isRetry: p }) &&
                    (S("MESSAGE_REACTION_REMOVE", e, t, n, { burst: _ }),
                    _
                        ? i.OR.announce(A.intl.formatToPlainString(A.t.fJeu87, { name: n.name }))
                        : i.OR.announce(A.intl.formatToPlainString(A.t["UUn5V+"], { name: n.name })));
            })
    );
}
function R(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    s.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: r, key: i });
}
async function O(e, t, n) {
    let i = null != n && !!n.isRetry;
    await u.A.unarchiveThreadIfNecessary(e),
        r.Bo.del({ url: g.Rsh.REMOVE_REACTIONS(e, t), oldFormErrors: !0, rejectWithError: !1 }).catch((n) => {
            T(n, () => O(e, t, { isRetry: !0 }), { isRetry: i });
        });
}
async function b(e, t, n, i) {
    let s = null != i && !!i.isRetry;
    await u.A.unarchiveThreadIfNecessary(e);
    let a = null === n.id ? n.name : `${n.name}:${n.id}`;
    r.Bo.del({ url: g.Rsh.REMOVE_EMOJI_REACTIONS(e, t, a), oldFormErrors: !0, rejectWithError: !1 }).catch((r) => {
        T(r, () => b(e, t, n, { isRetry: !0 }), { isRetry: s });
    });
}
async function D(e) {
    let { channelId: t, messageId: n, emoji: s, location: a = "Message", userId: o, options: c } = e,
        d = null != c && !!c.burst,
        _ = null != c && !!c.isRetry;
    S("MESSAGE_REACTION_REMOVE", t, n, s, { userId: o, burst: d }),
        await u.A.unarchiveThreadIfNecessary(t),
        r.Bo.del({
            url: y({
                channelId: t,
                messageId: n,
                emoji: s,
                userId: o ?? "@me",
                type: d ? l.v.BURST : l.v.NORMAL,
                useTypeEndpoint: !0,
            }),
            query: { location: a, burst: d },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                c?.burst
                    ? i.OR.announce(A.intl.formatToPlainString(A.t["3l9f6u"], { name: s.name }))
                    : i.OR.announce(A.intl.formatToPlainString(A.t["DQxi+7"], { name: s.name }));
            })
            .catch(async (e) => {
                if (
                    T(
                        e,
                        () =>
                            D({
                                channelId: t,
                                messageId: n,
                                emoji: s,
                                location: a,
                                userId: o,
                                options: { burst: d, isRetry: !0 },
                            }),
                        { isRetry: _ },
                    )
                ) {
                    let e = await L(s, d);
                    S("MESSAGE_REACTION_ADD", t, n, s, { userId: o, burst: d, colors: e }),
                        c?.burst
                            ? i.OR.announce(A.intl.formatToPlainString(A.t.OamVbV, { name: s.name }))
                            : i.OR.announce(A.intl.formatToPlainString(A.t["tD9+b+"], { name: s.name }));
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
function w(e, t, n, r) {
    let i = _.A.getMessage(e, t);
    return null != i && i.userHasReactedWithEmoji(n, r);
}
