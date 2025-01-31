n.d(t, {
    $E: () => O,
    T6: () => C,
    TW: () => y,
    U0: () => A,
    WO: () => D,
    rU: () => N,
    wX: () => R
});
var i = n(544891),
    r = n(780384),
    a = n(570140),
    s = n(668781),
    o = n(367907),
    l = n(566006),
    u = n(346479),
    c = n(314897),
    d = n(592125),
    f = n(375954),
    _ = n(626135),
    p = n(585483),
    h = n(70956),
    m = n(176354),
    g = n(563114),
    E = n(981631),
    v = n(388032),
    y = (function (e) {
        return (e.MESSAGE = 'Message'), (e.FORUM_TOOLBAR = 'Forum Toolbar'), (e.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (e.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (e.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (e.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (e.MESSAGE_REACTION_PICKER = 'Message Reaction Picker'), (e.MESSAGE_SHORTCUT = 'Message Shortcut'), e;
    })({});
function I(e, t, n) {
    let { headers: i, status: r, body: a } = e;
    if (429 === r) {
        let e = parseInt(i['retry-after']);
        return isNaN(e) || setTimeout(t, e * h.Z.Millis.SECOND), !1;
    }
    if (403 === r)
        switch (a && a.code) {
            case E.evJ.TOO_MANY_REACTIONS:
                s.Z.show({
                    title: v.intl.string(v.t.lFddsb),
                    body: v.intl.string(v.t.h27eIi),
                    confirmText: v.intl.string(v.t.BddRzc)
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
function b(e, t, n, i, r) {
    var s, o;
    a.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null !== (s = null == r ? void 0 : r.userId) && void 0 !== s ? s : c.default.getId(),
        emoji: i,
        optimistic: !0,
        colors: null !== (o = null == r ? void 0 : r.colors) && void 0 !== o ? o : [],
        reactionType: (null == r ? void 0 : r.burst) ? l.O.BURST : l.O.NORMAL
    });
}
function T(e) {
    let { channelId: t, messageId: n, emoji: i, userId: r, useTypeEndpoint: a = !1, type: s = l.O.NORMAL } = e,
        o = null != i.id ? ''.concat(i.name, ':').concat(i.id) : i.name;
    return null == r ? E.ANM.REACTIONS(t, n, o) : a ? E.ANM.REACTION_WITH_TYPE(t, n, o, r, s) : E.ANM.REACTION(t, n, o, r);
}
function S(e, t, n) {
    var i;
    let r = null !== (i = n.id) && void 0 !== i ? i : n.name;
    return E.ANM.POLL_ANSWER_VOTERS(e, t, r);
}
async function A(e) {
    let { channelId: t, messageId: n, emoji: r, limit: s, after: o, type: u } = e,
        c =
            u === l.O.VOTE
                ? S(t, n, r)
                : T({
                      channelId: t,
                      messageId: n,
                      emoji: r
                  }),
        d = await i.tn.get({
            url: c,
            query: {
                limit: s,
                after: o,
                type: u
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
        f = u === l.O.VOTE ? d.body.users : d.body;
    return (
        a.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: t,
            messageId: n,
            users: f,
            emoji: r,
            reactionType: u
        }),
        f
    );
}
async function N(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        c = arguments.length > 4 ? arguments[4] : void 0,
        f = null != c && !!c.burst,
        p = null != c && !!c.isRetry;
    if (!p && L(e, t, n, f)) {
        s.Z.show({
            title: v.intl.string(v.t['uaUU/v']),
            body: v.intl.string(v.t.psMorq),
            confirmText: v.intl.string(v.t['NX+WJC'])
        });
        return;
    }
    let h = await x(n, f);
    return (
        b('MESSAGE_REACTION_ADD', e, t, n, {
            burst: f,
            colors: h
        }),
        await u.Z.unarchiveThreadIfNecessary(e),
        i.tn
            .put({
                url: T({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    userId: '@me'
                }),
                query: {
                    location: a,
                    type: f ? l.O.BURST : l.O.NORMAL
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                if ('Message Shortcut' === a) {
                    var i;
                    let r = d.Z.getChannel(e);
                    _.default.track(E.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: null == r ? void 0 : r.guild_id,
                        original_message_id: t,
                        emoji_id: null !== (i = n.id) && void 0 !== i ? i : n.name,
                        action: 'react',
                        ...(0, o.hH)(null == r ? void 0 : r.guild_id),
                        ...(0, o.v_)(r)
                    });
                }
                f
                    ? (r.uv.announce(v.intl.formatToPlainString(v.t['RJlG+f'], { name: n.name })),
                      g.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: {
                              ...n,
                              animated: !1
                          }
                      }))
                    : r.uv.announce(v.intl.formatToPlainString(v.t.ol4acH, { name: n.name }));
            })
            .catch((i) => {
                I(
                    i,
                    () =>
                        N(e, t, n, a, {
                            burst: f,
                            isRetry: !0
                        }),
                    { isRetry: p }
                ) && (b('MESSAGE_REACTION_REMOVE', e, t, n, { burst: f }), f ? r.uv.announce(v.intl.formatToPlainString(v.t['fJeu8/'], { name: n.name })) : r.uv.announce(v.intl.formatToPlainString(v.t.UUn5V1, { name: n.name })));
            })
    );
}
function C(e) {
    let { channelId: t, messageId: n, emoji: i, key: r } = e;
    a.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: i,
        key: r
    });
}
async function R(e, t, n) {
    let r = null != n && !!n.isRetry;
    await u.Z.unarchiveThreadIfNecessary(e),
        i.tn
            .del({
                url: E.ANM.REMOVE_REACTIONS(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((n) => {
                I(n, () => R(e, t, { isRetry: !0 }), { isRetry: r });
            });
}
async function O(e, t, n, r) {
    let a = null != r && !!r.isRetry;
    await u.Z.unarchiveThreadIfNecessary(e);
    let s = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    i.tn
        .del({
            url: E.ANM.REMOVE_EMOJI_REACTIONS(e, t, s),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((i) => {
            I(i, () => O(e, t, n, { isRetry: !0 }), { isRetry: a });
        });
}
async function D(e) {
    let { channelId: t, messageId: n, emoji: a, location: s = 'Message', userId: o, options: c } = e,
        d = null != c && !!c.burst,
        f = null != c && !!c.isRetry;
    b('MESSAGE_REACTION_REMOVE', t, n, a, {
        userId: o,
        burst: d
    }),
        await u.Z.unarchiveThreadIfNecessary(t),
        i.tn
            .del({
                url: T({
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    userId: null != o ? o : '@me',
                    type: d ? l.O.BURST : l.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: s,
                    burst: d
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                (null == c ? void 0 : c.burst) ? r.uv.announce(v.intl.formatToPlainString(v.t['3l9f6u'], { name: a.name })) : r.uv.announce(v.intl.formatToPlainString(v.t['DQxi+/'], { name: a.name }));
            })
            .catch(async (e) => {
                if (
                    I(
                        e,
                        () =>
                            D({
                                channelId: t,
                                messageId: n,
                                emoji: a,
                                location: s,
                                userId: o,
                                options: {
                                    burst: d,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: f }
                    )
                ) {
                    let e = await x(a, d);
                    b('MESSAGE_REACTION_ADD', t, n, a, {
                        userId: o,
                        burst: d,
                        colors: e
                    }),
                        (null == c ? void 0 : c.burst) ? r.uv.announce(v.intl.formatToPlainString(v.t.OamVbW, { name: a.name })) : r.uv.announce(v.intl.formatToPlainString(v.t['tD9+b2'], { name: a.name }));
                }
            });
}
async function x(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, m.B6)(e);
        } catch {}
    return n;
}
function L(e, t, n, i) {
    let r = f.Z.getMessage(e, t);
    return null != r && r.userHasReactedWithEmoji(n, i);
}
