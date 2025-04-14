n.d(t, {
    $E: () => L,
    T6: () => w,
    TW: () => S,
    U0: () => R,
    WO: () => x,
    rU: () => P,
    wX: () => D
});
var r = n(544891),
    i = n(780384),
    o = n(570140),
    a = n(668781),
    s = n(367907),
    l = n(566006),
    c = n(346479),
    u = n(314897),
    d = n(592125),
    f = n(375954),
    _ = n(626135),
    p = n(585483),
    h = n(70956),
    m = n(176354),
    g = n(563114),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var S = (function (e) {
    return (e.MESSAGE = 'Message'), (e.FORUM_TOOLBAR = 'Forum Toolbar'), (e.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (e.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (e.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (e.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (e.MESSAGE_REACTION_PICKER = 'Message Reaction Picker'), (e.MESSAGE_SHORTCUT = 'Message Shortcut'), e;
})({});
function T(e, t, n) {
    let { headers: r, status: i, body: o } = e;
    if (429 === i) {
        let e = parseInt(r['retry-after']);
        return isNaN(e) || setTimeout(t, e * h.Z.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (o && o.code) {
            case E.evJ.TOO_MANY_REACTIONS:
                a.Z.show({
                    title: b.NW.string(b.t.lFddsb),
                    body: b.NW.string(b.t.h27eIi),
                    confirmText: b.NW.string(b.t.BddRzc)
                });
                break;
            case E.evJ.REACTION_BLOCKED:
                p.S.dispatch(E.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function N(e, t, n, r, i) {
    var a, s;
    o.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null != (a = null == i ? void 0 : i.userId) ? a : u.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null != (s = null == i ? void 0 : i.colors) ? s : [],
        reactionType: (null == i ? void 0 : i.burst) ? l.O.BURST : l.O.NORMAL
    });
}
function A(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: o = !1, type: a = l.O.NORMAL } = e,
        s = null != r.id ? ''.concat(r.name, ':').concat(r.id) : r.name;
    return null == i ? E.ANM.REACTIONS(t, n, s) : o ? E.ANM.REACTION_WITH_TYPE(t, n, s, i, a) : E.ANM.REACTION(t, n, s, i);
}
function C(e, t, n) {
    var r;
    let i = null != (r = n.id) ? r : n.name;
    return E.ANM.POLL_ANSWER_VOTERS(e, t, i);
}
async function R(e) {
    let { channelId: t, messageId: n, emoji: i, limit: a, after: s, type: c } = e,
        u =
            c === l.O.VOTE
                ? C(t, n, i)
                : A({
                      channelId: t,
                      messageId: n,
                      emoji: i
                  }),
        d = await r.tn.get({
            url: u,
            query: {
                limit: a,
                after: s,
                type: c
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
        f = c === l.O.VOTE ? d.body.users : d.body;
    return (
        o.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: t,
            messageId: n,
            users: f,
            emoji: i,
            reactionType: c
        }),
        f
    );
}
async function P(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        u = arguments.length > 4 ? arguments[4] : void 0,
        f = null != u && !!u.burst,
        p = null != u && !!u.isRetry;
    if (!p && k(e, t, n, f))
        return void a.Z.show({
            title: b.NW.string(b.t['uaUU/v']),
            body: b.NW.string(b.t.psMorq),
            confirmText: b.NW.string(b.t['NX+WJC'])
        });
    let h = await M(n, f);
    return (
        N('MESSAGE_REACTION_ADD', e, t, n, {
            burst: f,
            colors: h
        }),
        await c.Z.unarchiveThreadIfNecessary(e),
        r.tn
            .put({
                url: A({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    userId: '@me'
                }),
                query: {
                    location: o,
                    type: f ? l.O.BURST : l.O.NORMAL
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                if ('Message Shortcut' === o) {
                    var r;
                    let i = d.Z.getChannel(e);
                    _.default.track(
                        E.rMx.MESSAGE_SHORTCUT_ACTION_SENT,
                        v(
                            {
                                channel_id: e,
                                guild_id: null == i ? void 0 : i.guild_id,
                                original_message_id: t,
                                emoji_id: null != (r = n.id) ? r : n.name,
                                action: 'react'
                            },
                            (0, s.hH)(null == i ? void 0 : i.guild_id),
                            (0, s.v_)(i)
                        )
                    );
                }
                f
                    ? (i.uv.announce(b.NW.formatToPlainString(b.t['RJlG+f'], { name: n.name })),
                      g.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: I(v({}, n), { animated: !1 })
                      }))
                    : i.uv.announce(b.NW.formatToPlainString(b.t.ol4acH, { name: n.name }));
            })
            .catch((r) => {
                T(
                    r,
                    () =>
                        P(e, t, n, o, {
                            burst: f,
                            isRetry: !0
                        }),
                    { isRetry: p }
                ) && (N('MESSAGE_REACTION_REMOVE', e, t, n, { burst: f }), f ? i.uv.announce(b.NW.formatToPlainString(b.t['fJeu8/'], { name: n.name })) : i.uv.announce(b.NW.formatToPlainString(b.t.UUn5V1, { name: n.name })));
            })
    );
}
function w(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    o.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    });
}
async function D(e, t, n) {
    let i = null != n && !!n.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e),
        r.tn
            .del({
                url: E.ANM.REMOVE_REACTIONS(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((n) => {
                T(n, () => D(e, t, { isRetry: !0 }), { isRetry: i });
            });
}
async function L(e, t, n, i) {
    let o = null != i && !!i.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e);
    let a = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    r.tn
        .del({
            url: E.ANM.REMOVE_EMOJI_REACTIONS(e, t, a),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((r) => {
            T(r, () => L(e, t, n, { isRetry: !0 }), { isRetry: o });
        });
}
async function x(e) {
    let { channelId: t, messageId: n, emoji: o, location: a = 'Message', userId: s, options: u } = e,
        d = null != u && !!u.burst,
        f = null != u && !!u.isRetry;
    N('MESSAGE_REACTION_REMOVE', t, n, o, {
        userId: s,
        burst: d
    }),
        await c.Z.unarchiveThreadIfNecessary(t),
        r.tn
            .del({
                url: A({
                    channelId: t,
                    messageId: n,
                    emoji: o,
                    userId: null != s ? s : '@me',
                    type: d ? l.O.BURST : l.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: a,
                    burst: d
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                (null == u ? void 0 : u.burst) ? i.uv.announce(b.NW.formatToPlainString(b.t['3l9f6u'], { name: o.name })) : i.uv.announce(b.NW.formatToPlainString(b.t['DQxi+/'], { name: o.name }));
            })
            .catch(async (e) => {
                if (
                    T(
                        e,
                        () =>
                            x({
                                channelId: t,
                                messageId: n,
                                emoji: o,
                                location: a,
                                userId: s,
                                options: {
                                    burst: d,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: f }
                    )
                ) {
                    let e = await M(o, d);
                    N('MESSAGE_REACTION_ADD', t, n, o, {
                        userId: s,
                        burst: d,
                        colors: e
                    }),
                        (null == u ? void 0 : u.burst) ? i.uv.announce(b.NW.formatToPlainString(b.t.OamVbW, { name: o.name })) : i.uv.announce(b.NW.formatToPlainString(b.t['tD9+b2'], { name: o.name }));
                }
            });
}
async function M(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, m.B6)(e);
        } catch (e) {}
    return n;
}
function k(e, t, n, r) {
    let i = f.Z.getMessage(e, t);
    return null != i && i.userHasReactedWithEmoji(n, r);
}
