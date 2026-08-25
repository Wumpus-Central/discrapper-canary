"use strict";
n.d(t, { BB: () => R, Go: () => y, Jf: () => D, ao: () => O, et: () => v, on: () => L, qN: () => g });
var i,
    r = n(636537),
    a = n(765178),
    s = n(228366),
    l = n(157559),
    o = n(95561),
    d = n(505527),
    c = n(867455),
    u = n(280450),
    _ = n(734057),
    E = n(232835),
    A = n(174459),
    h = n(625494),
    I = n(927813),
    f = n(690521),
    p = n(350593),
    T = n(652215),
    m = n(375708),
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
        return isNaN(e) || setTimeout(t, e * I.A.Millis.SECOND), !1;
    }
    if (403 === r)
        switch (a && a.code) {
            case T.t02.TOO_MANY_REACTIONS:
                l.A.show({
                    title: m.intl.string(m.t.lFddsR),
                    body: m.intl.string(m.t.h27eIm),
                    confirmText: m.intl.string(m.t.BddRzS),
                });
                break;
            case T.t02.REACTION_BLOCKED:
                h._.dispatch(T.jej.SHAKE_APP, { duration: 200, intensity: 2 });
        }
    else if (!n.isRetry) return t(), !1;
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
        ? T.Rsh.REACTIONS(t, n, l)
        : a
          ? T.Rsh.REACTION_WITH_TYPE(t, n, l, r, s)
          : T.Rsh.REACTION(t, n, l, r);
}
async function O(e) {
    let t,
        { channelId: n, messageId: i, emoji: a, limit: l, after: o, type: c } = e,
        u =
            c === d.v.VOTE
                ? ((t = a.id ?? a.name), T.Rsh.POLL_ANSWER_VOTERS(n, i, t))
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
}
async function R(e, t, n) {
    var i, s, u, h;
    let I,
        f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        g = arguments.length > 4 ? arguments[4] : void 0,
        O = null != g && !!g.burst,
        L = null != g && !!g.isRetry;
    if (
        !L &&
        ((i = e), (s = t), (u = n), (h = O), null != (I = E.A.getMessage(i, s)) && I.userHasReactedWithEmoji(u, h))
    )
        return void l.A.show({
            title: m.intl.string(m.t["uaUU/g"]),
            body: m.intl.string(m.t.psMorl),
            confirmText: m.intl.string(m.t["NX+WJN"]),
        });
    let y = await b(n, O);
    return (
        N("MESSAGE_REACTION_ADD", e, t, n, { burst: O, colors: y }),
        await c.A.unarchiveThreadIfNecessary(e),
        r.Bo.put({
            url: C({ channelId: e, messageId: t, emoji: n, userId: "@me" }),
            query: { location: f, type: O ? d.v.BURST : d.v.NORMAL },
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        })
            .then(() => {
                if ("Message Shortcut" === f) {
                    let i = _.A.getChannel(e);
                    A.default.track(T.HAw.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: i?.guild_id,
                        original_message_id: t,
                        emoji_id: n.id ?? n.name,
                        action: "react",
                        ...(0, o.H$)(i?.guild_id),
                        ...(0, o.dI)(i),
                    });
                }
                O
                    ? (a.O.announce(m.intl.formatToPlainString(m.t["RJlG+R"], { name: n.name })),
                      p.A.triggerFullscreenAnimation({ channelId: e, messageId: t, emoji: { ...n, animated: !1 } }))
                    : a.O.announce(m.intl.formatToPlainString(m.t.ol4acF, { name: n.name }));
            })
            .catch((i) => {
                S(i, () => R(e, t, n, f, { burst: O, isRetry: !0 }), { isRetry: L }) &&
                    (N("MESSAGE_REACTION_REMOVE", e, t, n, { burst: O }),
                    O
                        ? a.O.announce(m.intl.formatToPlainString(m.t.fJeu87, { name: n.name }))
                        : a.O.announce(m.intl.formatToPlainString(m.t["UUn5V+"], { name: n.name })));
            })
    );
}
function L(e) {
    let { channelId: t, messageId: n, emoji: i, key: r } = e;
    s.h.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId: t, messageId: n, emoji: i, key: r });
}
async function y(e, t, n) {
    let i = null != n && !!n.isRetry;
    await c.A.unarchiveThreadIfNecessary(e),
        r.Bo.del({ url: T.Rsh.REMOVE_REACTIONS(e, t), oldFormErrors: !0, rejectWithError: (0, r.fT)() }).catch((n) => {
            S(n, () => y(e, t, { isRetry: !0 }), { isRetry: i });
        });
}
async function D(e, t, n, i) {
    let a = null != i && !!i.isRetry;
    await c.A.unarchiveThreadIfNecessary(e);
    let s = null === n.id ? n.name : `${n.name}:${n.id}`;
    r.Bo.del({ url: T.Rsh.REMOVE_EMOJI_REACTIONS(e, t, s), oldFormErrors: !0, rejectWithError: (0, r.fT)() }).catch(
        (i) => {
            S(i, () => D(e, t, n, { isRetry: !0 }), { isRetry: a });
        },
    );
}
async function v(e) {
    let { channelId: t, messageId: n, emoji: i, location: s = "Message", userId: l, options: o } = e,
        u = null != o && !!o.burst,
        _ = null != o && !!o.isRetry;
    N("MESSAGE_REACTION_REMOVE", t, n, i, { userId: l, burst: u }),
        await c.A.unarchiveThreadIfNecessary(t),
        r.Bo.del({
            url: C({
                channelId: t,
                messageId: n,
                emoji: i,
                userId: l ?? "@me",
                type: u ? d.v.BURST : d.v.NORMAL,
                useTypeEndpoint: !0,
            }),
            query: { location: s, burst: u },
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        })
            .then(() => {
                o?.burst
                    ? a.O.announce(m.intl.formatToPlainString(m.t["3l9f6u"], { name: i.name }))
                    : a.O.announce(m.intl.formatToPlainString(m.t["DQxi+7"], { name: i.name }));
            })
            .catch(async (e) => {
                if (
                    S(
                        e,
                        () =>
                            v({
                                channelId: t,
                                messageId: n,
                                emoji: i,
                                location: s,
                                userId: l,
                                options: { burst: u, isRetry: !0 },
                            }),
                        { isRetry: _ },
                    )
                ) {
                    let e = await b(i, u);
                    N("MESSAGE_REACTION_ADD", t, n, i, { userId: l, burst: u, colors: e }),
                        o?.burst
                            ? a.O.announce(m.intl.formatToPlainString(m.t.OamVbV, { name: i.name }))
                            : a.O.announce(m.intl.formatToPlainString(m.t["tD9+b+"], { name: i.name }));
                }
            });
}
async function b(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, f.D_)(e);
        } catch {}
    return n;
}
