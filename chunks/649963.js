"use strict";
n.d(t, { BB: () => O, Go: () => v, Jf: () => D, ao: () => R, et: () => L, on: () => y, qN: () => T });
var i,
    r = n(636537),
    s = n(765178),
    a = n(228366),
    o = n(157559),
    l = n(58149),
    d = n(505527),
    _ = n(867455),
    u = n(495544),
    c = n(734057),
    E = n(232835),
    h = n(954571),
    m = n(625494),
    f = n(927813),
    g = n(690521),
    p = n(350593),
    A = n(652215),
    I = n(985018),
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
        return isNaN(e) || setTimeout(t, e * f.A.Millis.SECOND), !1;
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
                m._.dispatch(A.jej.SHAKE_APP, { duration: 200, intensity: 2 });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function N(e, t, n, i, r) {
    a.h.dispatch({
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
    let { channelId: t, messageId: n, emoji: i, userId: r, useTypeEndpoint: s = !1, type: a = d.v.NORMAL } = e,
        o = null != i.id ? `${i.name}:${i.id}` : i.name;
    return null == r
        ? A.Rsh.REACTIONS(t, n, o)
        : s
          ? A.Rsh.REACTION_WITH_TYPE(t, n, o, r, a)
          : A.Rsh.REACTION(t, n, o, r);
}
async function R(e) {
    let t,
        { channelId: n, messageId: i, emoji: s, limit: o, after: l, type: _ } = e,
        u =
            _ === d.v.VOTE
                ? ((t = s.id ?? s.name), A.Rsh.POLL_ANSWER_VOTERS(n, i, t))
                : C({ channelId: n, messageId: i, emoji: s }),
        c = await r.Bo.get({ url: u, query: { limit: o, after: l, type: _ }, oldFormErrors: !0, rejectWithError: !1 }),
        E = _ === d.v.VOTE ? c.body.users : c.body;
    return (
        a.h.dispatch({
            type: "MESSAGE_REACTION_ADD_USERS",
            channelId: n,
            messageId: i,
            users: E,
            emoji: s,
            reactionType: _,
        }),
        E
    );
}
async function O(e, t, n) {
    var i, a, u, m;
    let f,
        g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        T = arguments.length > 4 ? arguments[4] : void 0,
        R = null != T && !!T.burst,
        y = null != T && !!T.isRetry;
    if (
        !y &&
        ((i = e), (a = t), (u = n), (m = R), null != (f = E.A.getMessage(i, a)) && f.userHasReactedWithEmoji(u, m))
    )
        return void o.A.show({
            title: I.intl.string(I.t["uaUU/g"]),
            body: I.intl.string(I.t.psMorl),
            confirmText: I.intl.string(I.t["NX+WJN"]),
        });
    let v = await b(n, R);
    return (
        N("MESSAGE_REACTION_ADD", e, t, n, { burst: R, colors: v }),
        await _.A.unarchiveThreadIfNecessary(e),
        r.Bo.put({
            url: C({ channelId: e, messageId: t, emoji: n, userId: "@me" }),
            query: { location: g, type: R ? d.v.BURST : d.v.NORMAL },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(() => {
                if ("Message Shortcut" === g) {
                    let i = c.A.getChannel(e);
                    h.default.track(A.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: i?.guild_id,
                        original_message_id: t,
                        emoji_id: n.id ?? n.name,
                        action: "react",
                        ...(0, l.H$)(i?.guild_id),
                        ...(0, l.dI)(i),
                    });
                }
                R
                    ? (s.O.announce(I.intl.formatToPlainString(I.t["RJlG+R"], { name: n.name })),
                      p.A.triggerFullscreenAnimation({ channelId: e, messageId: t, emoji: { ...n, animated: !1 } }))
                    : s.O.announce(I.intl.formatToPlainString(I.t.ol4acF, { name: n.name }));
            })
            .catch((i) => {
                S(i, () => O(e, t, n, g, { burst: R, isRetry: !0 }), { isRetry: y }) &&
                    (N("MESSAGE_REACTION_REMOVE", e, t, n, { burst: R }),
                    R
                        ? s.O.announce(I.intl.formatToPlainString(I.t.fJeu87, { name: n.name }))
                        : s.O.announce(I.intl.formatToPlainString(I.t["UUn5V+"], { name: n.name })));
            })
    );
}
function y(e) {
    let { channelId: t, messageId: n, emoji: i, key: r } = e;
    a.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: i, key: r });
}
async function v(e, t, n) {
    let i = null != n && !!n.isRetry;
    await _.A.unarchiveThreadIfNecessary(e),
        r.Bo.del({ url: A.Rsh.REMOVE_REACTIONS(e, t), oldFormErrors: !0, rejectWithError: !1 }).catch((n) => {
            S(n, () => v(e, t, { isRetry: !0 }), { isRetry: i });
        });
}
async function D(e, t, n, i) {
    let s = null != i && !!i.isRetry;
    await _.A.unarchiveThreadIfNecessary(e);
    let a = null === n.id ? n.name : `${n.name}:${n.id}`;
    r.Bo.del({ url: A.Rsh.REMOVE_EMOJI_REACTIONS(e, t, a), oldFormErrors: !0, rejectWithError: !1 }).catch((i) => {
        S(i, () => D(e, t, n, { isRetry: !0 }), { isRetry: s });
    });
}
async function L(e) {
    let { channelId: t, messageId: n, emoji: i, location: a = "Message", userId: o, options: l } = e,
        u = null != l && !!l.burst,
        c = null != l && !!l.isRetry;
    N("MESSAGE_REACTION_REMOVE", t, n, i, { userId: o, burst: u }),
        await _.A.unarchiveThreadIfNecessary(t),
        r.Bo.del({
            url: C({
                channelId: t,
                messageId: n,
                emoji: i,
                userId: o ?? "@me",
                type: u ? d.v.BURST : d.v.NORMAL,
                useTypeEndpoint: !0,
            }),
            query: { location: a, burst: u },
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
                            L({
                                channelId: t,
                                messageId: n,
                                emoji: i,
                                location: a,
                                userId: o,
                                options: { burst: u, isRetry: !0 },
                            }),
                        { isRetry: c },
                    )
                ) {
                    let e = await b(i, u);
                    N("MESSAGE_REACTION_ADD", t, n, i, { userId: o, burst: u, colors: e }),
                        l?.burst
                            ? s.O.announce(I.intl.formatToPlainString(I.t.OamVbV, { name: i.name }))
                            : s.O.announce(I.intl.formatToPlainString(I.t["tD9+b+"], { name: i.name }));
                }
            });
}
async function b(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, g.D_)(e);
        } catch {}
    return n;
}
