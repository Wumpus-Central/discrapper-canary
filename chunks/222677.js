r.d(n, {
    $E: function () {
        return D;
    },
    T6: function () {
        return R;
    },
    TW: function () {
        return i;
    },
    U0: function () {
        return C;
    },
    WO: function () {
        return x;
    },
    rU: function () {
        return N;
    },
    wX: function () {
        return O;
    }
});
var i,
    a = r(544891),
    o = r(780384),
    s = r(570140),
    l = r(668781),
    u = r(367907),
    c = r(566006),
    d = r(346479),
    f = r(314897),
    p = r(592125),
    h = r(375954),
    _ = r(626135),
    m = r(585483),
    g = r(70956),
    E = r(176354),
    v = r(563114),
    y = r(981631),
    b = r(388032);
function I(e, n, r) {
    let { headers: i, status: a, body: o } = e;
    if (429 === a) {
        let e = parseInt(i['retry-after']);
        return !isNaN(e) && setTimeout(n, e * g.Z.Millis.SECOND), !1;
    }
    if (403 === a)
        switch (o && o.code) {
            case y.evJ.TOO_MANY_REACTIONS:
                l.Z.show({
                    title: b.intl.string(b.t.lFddsb),
                    body: b.intl.string(b.t.h27eIi),
                    confirmText: b.intl.string(b.t.BddRzc)
                });
                break;
            case y.evJ.REACTION_BLOCKED:
                m.S.dispatch(y.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                });
        }
    else if (!r.isRetry) return n(), !1;
    return !0;
}
function T(e, n, r, i, a) {
    var o, l;
    s.Z.dispatch({
        type: e,
        channelId: n,
        messageId: r,
        userId: null !== (o = null == a ? void 0 : a.userId) && void 0 !== o ? o : f.default.getId(),
        emoji: i,
        optimistic: !0,
        colors: null !== (l = null == a ? void 0 : a.colors) && void 0 !== l ? l : [],
        reactionType: (null == a ? void 0 : a.burst) ? c.O.BURST : c.O.NORMAL
    });
}
function S(e) {
    let { channelId: n, messageId: r, emoji: i, userId: a, useTypeEndpoint: o = !1, type: s = c.O.NORMAL } = e,
        l = null != i.id ? ''.concat(i.name, ':').concat(i.id) : i.name;
    return null == a ? y.ANM.REACTIONS(n, r, l) : o ? y.ANM.REACTION_WITH_TYPE(n, r, l, a, s) : y.ANM.REACTION(n, r, l, a);
}
function A(e, n, r) {
    var i;
    let a = null !== (i = r.id) && void 0 !== i ? i : r.name;
    return y.ANM.POLL_ANSWER_VOTERS(e, n, a);
}
async function C(e) {
    let { channelId: n, messageId: r, emoji: i, limit: o, after: l, type: u } = e,
        d =
            u === c.O.VOTE
                ? A(n, r, i)
                : S({
                      channelId: n,
                      messageId: r,
                      emoji: i
                  }),
        f = await a.tn.get({
            url: d,
            query: {
                limit: o,
                after: l,
                type: u
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
        p = u === c.O.VOTE ? f.body.users : f.body;
    return (
        s.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: n,
            messageId: r,
            users: p,
            emoji: i,
            reactionType: u
        }),
        p
    );
}
async function N(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        s = arguments.length > 4 ? arguments[4] : void 0,
        f = null != s && !!s.burst,
        h = null != s && !!s.isRetry;
    if (!h && w(e, n, r, f)) {
        l.Z.show({
            title: b.intl.string(b.t['uaUU/v']),
            body: b.intl.string(b.t.psMorq),
            confirmText: b.intl.string(b.t['NX+WJC'])
        });
        return;
    }
    let m = await L(r, f);
    return (
        T('MESSAGE_REACTION_ADD', e, n, r, {
            burst: f,
            colors: m
        }),
        await d.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .put({
                url: S({
                    channelId: e,
                    messageId: n,
                    emoji: r,
                    userId: '@me'
                }),
                query: {
                    location: i,
                    type: f ? c.O.BURST : c.O.NORMAL
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                if ('Message Shortcut' === i) {
                    var a;
                    let i = p.Z.getChannel(e);
                    _.default.track(y.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
                        channel_id: e,
                        guild_id: null == i ? void 0 : i.guild_id,
                        original_message_id: n,
                        emoji_id: null !== (a = r.id) && void 0 !== a ? a : r.name,
                        action: 'react',
                        ...(0, u.hH)(null == i ? void 0 : i.guild_id),
                        ...(0, u.v_)(i)
                    });
                }
                f
                    ? (o.uv.announce(b.intl.formatToPlainString(b.t['RJlG+f'], { name: r.name })),
                      v.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: n,
                          emoji: {
                              ...r,
                              animated: !1
                          }
                      }))
                    : o.uv.announce(b.intl.formatToPlainString(b.t.ol4acH, { name: r.name }));
            })
            .catch((a) => {
                I(
                    a,
                    () =>
                        N(e, n, r, i, {
                            burst: f,
                            isRetry: !0
                        }),
                    { isRetry: h }
                ) && (T('MESSAGE_REACTION_REMOVE', e, n, r, { burst: f }), f ? o.uv.announce(b.intl.formatToPlainString(b.t['fJeu8/'], { name: r.name })) : o.uv.announce(b.intl.formatToPlainString(b.t.UUn5V1, { name: r.name })));
            })
    );
}
function R(e) {
    let { channelId: n, messageId: r, emoji: i, key: a } = e;
    s.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: n,
        messageId: r,
        emoji: i,
        key: a
    });
}
async function O(e, n, r) {
    let i = null != r && !!r.isRetry;
    await d.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .del({
                url: y.ANM.REMOVE_REACTIONS(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .catch((r) => {
                I(r, () => O(e, n, { isRetry: !0 }), { isRetry: i });
            });
}
async function D(e, n, r, i) {
    let o = null != i && !!i.isRetry;
    await d.Z.unarchiveThreadIfNecessary(e);
    let s = null === r.id ? r.name : ''.concat(r.name, ':').concat(r.id);
    a.tn
        .del({
            url: y.ANM.REMOVE_EMOJI_REACTIONS(e, n, s),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .catch((i) => {
            I(i, () => D(e, n, r, { isRetry: !0 }), { isRetry: o });
        });
}
async function x(e) {
    let { channelId: n, messageId: r, emoji: i, location: s = 'Message', userId: l, options: u } = e,
        f = null != u && !!u.burst,
        p = null != u && !!u.isRetry;
    T('MESSAGE_REACTION_REMOVE', n, r, i, {
        userId: l,
        burst: f
    }),
        await d.Z.unarchiveThreadIfNecessary(n),
        a.tn
            .del({
                url: S({
                    channelId: n,
                    messageId: r,
                    emoji: i,
                    userId: null != l ? l : '@me',
                    type: f ? c.O.BURST : c.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: s,
                    burst: f
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                (null == u ? void 0 : u.burst) ? o.uv.announce(b.intl.formatToPlainString(b.t['3l9f6u'], { name: i.name })) : o.uv.announce(b.intl.formatToPlainString(b.t['DQxi+/'], { name: i.name }));
            })
            .catch(async (e) => {
                if (
                    I(
                        e,
                        () =>
                            x({
                                channelId: n,
                                messageId: r,
                                emoji: i,
                                location: s,
                                userId: l,
                                options: {
                                    burst: f,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: p }
                    )
                ) {
                    let e = await L(i, f);
                    T('MESSAGE_REACTION_ADD', n, r, i, {
                        userId: l,
                        burst: f,
                        colors: e
                    }),
                        (null == u ? void 0 : u.burst) ? o.uv.announce(b.intl.formatToPlainString(b.t.OamVbW, { name: i.name })) : o.uv.announce(b.intl.formatToPlainString(b.t['tD9+b2'], { name: i.name }));
                }
            });
}
async function L(e, n) {
    let r = [];
    if (n)
        try {
            r = await (0, E.B6)(e);
        } catch {}
    return r;
}
function w(e, n, r, i) {
    let a = h.Z.getMessage(e, n);
    return null != a && a.userHasReactedWithEmoji(r, i);
}
!(function (e) {
    (e.MESSAGE = 'Message'), (e.FORUM_TOOLBAR = 'Forum Toolbar'), (e.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (e.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (e.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (e.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (e.MESSAGE_REACTION_PICKER = 'Message Reaction Picker'), (e.MESSAGE_SHORTCUT = 'Message Shortcut');
})(i || (i = {}));
