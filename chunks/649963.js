"use strict";
n.d(t, { BB: () => R, Go: () => C, Jf: () => b, ao: () => O, et: () => D, on: () => v, qN: () => T });
var r,
    i = n(562465),
    s = n(765178),
    a = n(73153),
    o = n(157559),
    l = n(58149),
    u = n(505527),
    d = n(867455),
    c = n(961350),
    _ = n(734057),
    f = n(320501),
    E = n(954571),
    h = n(203982),
    p = n(927813),
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
        return isNaN(e) || setTimeout(t, e * p.A.Millis.SECOND), !1;
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
        userId: i?.userId ?? c.default.getId(),
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
async function O(e) {
    let t,
        { channelId: n, messageId: r, emoji: s, limit: o, after: l, type: d } = e,
        c =
            d === u.v.VOTE
                ? ((t = s.id ?? s.name), A.Rsh.POLL_ANSWER_VOTERS(n, r, t))
                : N({ channelId: n, messageId: r, emoji: s }),
        _ = await i.Bo.get({ url: c, query: { limit: o, after: l, type: d }, oldFormErrors: !0, rejectWithError: !1 }),
        f = d === u.v.VOTE ? _.body.users : _.body;
    return (
        a.h.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: n,
            messageId: r,
            users: f,
            emoji: s,
            reactionType: d,
        }),
        f
    );
}
async function R(e, t, n) {
    var r, a, c, h;
    let p,
        m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        T = arguments.length > 4 ? arguments[4] : void 0,
        O = null != T && !!T.burst,
        v = null != T && !!T.isRetry;
    if (
        !v &&
        ((r = e), (a = t), (c = n), (h = O), null != (p = f.A.getMessage(r, a)) && p.userHasReactedWithEmoji(c, h))
    )
        return void o.A.show({
            title: I.intl.string(I.t["uaUU/g"]),
            body: I.intl.string(I.t.psMorl),
            confirmText: I.intl.string(I.t["NX+WJN"]),
        });
    let C = await L(n, O);
    return (
        y("MESSAGE_REACTION_ADD", e, t, n, { burst: O, colors: C }),
        await d.A.unarchiveThreadIfNecessary(e),
        i.Bo.put({
            url: N({ channelId: e, messageId: t, emoji: n, userId: "@me" }),
            query: { location: m, type: O ? u.v.BURST : u.v.NORMAL },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                if ("Message Shortcut" === m) {
                    let r = _.A.getChannel(e);
                    E.default.track(A.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: r?.guild_id,
                        original_message_id: t,
                        emoji_id: n.id ?? n.name,
                        action: "react",
                        ...(0, l.H$)(r?.guild_id),
                        ...(0, l.dI)(r),
                    });
                }
                O
                    ? (s.O.announce(I.intl.formatToPlainString(I.t["RJlG+R"], { name: n.name })),
                      g.A.triggerFullscreenAnimation({ channelId: e, messageId: t, emoji: { ...n, animated: !1 } }))
                    : s.O.announce(I.intl.formatToPlainString(I.t.ol4acF, { name: n.name }));
            })
            .catch((r) => {
                S(r, () => R(e, t, n, m, { burst: O, isRetry: !0 }), { isRetry: v }) &&
                    (y("MESSAGE_REACTION_REMOVE", e, t, n, { burst: O }),
                    O
                        ? s.O.announce(I.intl.formatToPlainString(I.t.fJeu87, { name: n.name }))
                        : s.O.announce(I.intl.formatToPlainString(I.t["UUn5V+"], { name: n.name })));
            })
    );
}
function v(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    a.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: r, key: i });
}
async function C(e, t, n) {
    let r = null != n && !!n.isRetry;
    await d.A.unarchiveThreadIfNecessary(e),
        i.Bo.del({ url: A.Rsh.REMOVE_REACTIONS(e, t), oldFormErrors: !0, rejectWithError: !1 }).catch((n) => {
            S(n, () => C(e, t, { isRetry: !0 }), { isRetry: r });
        });
}
async function b(e, t, n, r) {
    let s = null != r && !!r.isRetry;
    await d.A.unarchiveThreadIfNecessary(e);
    let a = null === n.id ? n.name : `${n.name}:${n.id}`;
    i.Bo.del({ url: A.Rsh.REMOVE_EMOJI_REACTIONS(e, t, a), oldFormErrors: !0, rejectWithError: !1 }).catch((r) => {
        S(r, () => b(e, t, n, { isRetry: !0 }), { isRetry: s });
    });
}
async function D(e) {
    let { channelId: t, messageId: n, emoji: r, location: a = "Message", userId: o, options: l } = e,
        c = null != l && !!l.burst,
        _ = null != l && !!l.isRetry;
    y("MESSAGE_REACTION_REMOVE", t, n, r, { userId: o, burst: c }),
        await d.A.unarchiveThreadIfNecessary(t),
        i.Bo.del({
            url: N({
                channelId: t,
                messageId: n,
                emoji: r,
                userId: o ?? "@me",
                type: c ? u.v.BURST : u.v.NORMAL,
                useTypeEndpoint: !0,
            }),
            query: { location: a, burst: c },
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
                                options: { burst: c, isRetry: !0 },
                            }),
                        { isRetry: _ },
                    )
                ) {
                    let e = await L(r, c);
                    y("MESSAGE_REACTION_ADD", t, n, r, { userId: o, burst: c, colors: e }),
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
