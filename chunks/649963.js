"use strict";
n.d(t, { BB: () => C, Go: () => R, Jf: () => b, ao: () => v, et: () => D, on: () => O, qN: () => T });
var r,
    i = n(562465),
    s = n(765178),
    a = n(73153),
    o = n(157559),
    l = n(58149),
    u = n(505527),
    c = n(867455),
    d = n(961350),
    _ = n(734057),
    f = n(320501),
    p = n(954571),
    h = n(203982),
    E = n(927813),
    m = n(690521),
    g = n(300703),
    A = n(652215),
    I = n(985018),
    T =
        (((r = {}).MESSAGE = "Message"),
        (r.FORUM_TOOLBAR = "Forum Toolbar"),
        (r.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer"),
        (r.MESSAGE_HOVER_BAR = "Message Hover Bar"),
        (r.MESSAGE_INLINE_BUTTON = "Message Inline Button"),
        (r.MESSAGE_CONTEXT_MENU = "Message Context Menu"),
        (r.MESSAGE_REACTION_PICKER = "Message Reaction Picker"),
        (r.MESSAGE_SHORTCUT = "Message Shortcut"),
        (r.DOUBLE_TAP = "Double Tap"),
        (r.IN_APP_NOTIFICATION = "In App Notification"),
        r);
function S(e, t, n) {
    let { headers: r, status: i, body: s } = e;
    if (429 === i) {
        if (n.isRetry) return !0;
        let e = parseInt(r["retry-after"]);
        return isNaN(e) || setTimeout(t, e * E.A.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (s && s.code) {
            case A.t02.TOO_MANY_REACTIONS:
                o.A.show({
                    title: I.intl.string(I.t.lFddsR),
                    body: I.intl.string(I.t.h27eIm),
                    confirmText: I.intl.string(I.t.BddRzS),
                });
                break;
            case A.t02.REACTION_BLOCKED:
                h._.dispatch(A.jej.SHAKE_APP, { duration: 200, intensity: 2 });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function y(e, t, n, r, i) {
    a.h.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: i?.userId ?? d.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: i?.colors ?? [],
        reactionType: i?.burst ? u.v.BURST : u.v.NORMAL,
    });
}
function N(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: s = !1, type: a = u.v.NORMAL } = e,
        o = null != r.id ? `${r.name}:${r.id}` : r.name;
    return null == i
        ? A.Rsh.REACTIONS(t, n, o)
        : s
          ? A.Rsh.REACTION_WITH_TYPE(t, n, o, i, a)
          : A.Rsh.REACTION(t, n, o, i);
}
async function v(e) {
    let t,
        { channelId: n, messageId: r, emoji: s, limit: o, after: l, type: c } = e,
        d =
            c === u.v.VOTE
                ? ((t = s.id ?? s.name), A.Rsh.POLL_ANSWER_VOTERS(n, r, t))
                : N({ channelId: n, messageId: r, emoji: s }),
        _ = await i.Bo.get({ url: d, query: { limit: o, after: l, type: c }, oldFormErrors: !0, rejectWithError: !1 }),
        f = c === u.v.VOTE ? _.body.users : _.body;
    return (
        a.h.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: n,
            messageId: r,
            users: f,
            emoji: s,
            reactionType: c,
        }),
        f
    );
}
async function C(e, t, n) {
    var r, a, d, h;
    let E,
        m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        T = arguments.length > 4 ? arguments[4] : void 0,
        v = null != T && !!T.burst,
        O = null != T && !!T.isRetry;
    if (
        !O &&
        ((r = e), (a = t), (d = n), (h = v), null != (E = f.A.getMessage(r, a)) && E.userHasReactedWithEmoji(d, h))
    )
        return void o.A.show({
            title: I.intl.string(I.t["uaUU/g"]),
            body: I.intl.string(I.t.psMorl),
            confirmText: I.intl.string(I.t["NX+WJN"]),
        });
    let R = await L(n, v);
    return (
        y("MESSAGE_REACTION_ADD", e, t, n, { burst: v, colors: R }),
        await c.A.unarchiveThreadIfNecessary(e),
        i.Bo.put({
            url: N({ channelId: e, messageId: t, emoji: n, userId: "@me" }),
            query: { location: m, type: v ? u.v.BURST : u.v.NORMAL },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                if ("Message Shortcut" === m) {
                    let r = _.A.getChannel(e);
                    p.default.track(A.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: r?.guild_id,
                        original_message_id: t,
                        emoji_id: n.id ?? n.name,
                        action: "react",
                        ...(0, l.H$)(r?.guild_id),
                        ...(0, l.dI)(r),
                    });
                }
                v
                    ? (s.O.announce(I.intl.formatToPlainString(I.t["RJlG+R"], { name: n.name })),
                      g.A.triggerFullscreenAnimation({ channelId: e, messageId: t, emoji: { ...n, animated: !1 } }))
                    : s.O.announce(I.intl.formatToPlainString(I.t.ol4acF, { name: n.name }));
            })
            .catch((r) => {
                S(r, () => C(e, t, n, m, { burst: v, isRetry: !0 }), { isRetry: O }) &&
                    (y("MESSAGE_REACTION_REMOVE", e, t, n, { burst: v }),
                    v
                        ? s.O.announce(I.intl.formatToPlainString(I.t.fJeu87, { name: n.name }))
                        : s.O.announce(I.intl.formatToPlainString(I.t["UUn5V+"], { name: n.name })));
            })
    );
}
function O(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    a.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: r, key: i });
}
async function R(e, t, n) {
    let r = null != n && !!n.isRetry;
    await c.A.unarchiveThreadIfNecessary(e),
        i.Bo.del({ url: A.Rsh.REMOVE_REACTIONS(e, t), oldFormErrors: !0, rejectWithError: !1 }).catch((n) => {
            S(n, () => R(e, t, { isRetry: !0 }), { isRetry: r });
        });
}
async function b(e, t, n, r) {
    let s = null != r && !!r.isRetry;
    await c.A.unarchiveThreadIfNecessary(e);
    let a = null === n.id ? n.name : `${n.name}:${n.id}`;
    i.Bo.del({ url: A.Rsh.REMOVE_EMOJI_REACTIONS(e, t, a), oldFormErrors: !0, rejectWithError: !1 }).catch((r) => {
        S(r, () => b(e, t, n, { isRetry: !0 }), { isRetry: s });
    });
}
async function D(e) {
    let { channelId: t, messageId: n, emoji: r, location: a = "Message", userId: o, options: l } = e,
        d = null != l && !!l.burst,
        _ = null != l && !!l.isRetry;
    y("MESSAGE_REACTION_REMOVE", t, n, r, { userId: o, burst: d }),
        await c.A.unarchiveThreadIfNecessary(t),
        i.Bo.del({
            url: N({
                channelId: t,
                messageId: n,
                emoji: r,
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
                    ? s.O.announce(I.intl.formatToPlainString(I.t["3l9f6u"], { name: r.name }))
                    : s.O.announce(I.intl.formatToPlainString(I.t["DQxi+7"], { name: r.name }));
            })
            .catch(async (e) => {
                if (
                    S(
                        e,
                        () =>
                            D({
                                channelId: t,
                                messageId: n,
                                emoji: r,
                                location: a,
                                userId: o,
                                options: { burst: d, isRetry: !0 },
                            }),
                        { isRetry: _ },
                    )
                ) {
                    let e = await L(r, d);
                    y("MESSAGE_REACTION_ADD", t, n, r, { userId: o, burst: d, colors: e }),
                        l?.burst
                            ? s.O.announce(I.intl.formatToPlainString(I.t.OamVbV, { name: r.name }))
                            : s.O.announce(I.intl.formatToPlainString(I.t["tD9+b+"], { name: r.name }));
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
