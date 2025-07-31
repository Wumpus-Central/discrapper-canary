let r, i;
(n.d(t, { Z: () => Q }), n(388685));
var a = n(114858),
    o = n(433517),
    s = n(570140),
    l = n(668781),
    c = n(904245),
    u = n(593472),
    d = n(147913),
    _ = n(89892),
    f = n(702321),
    p = n(710845),
    h = n(38618),
    m = n(897473),
    g = n(131704),
    E = n(433355),
    b = n(592125),
    y = n(430824),
    O = n(306680),
    v = n(944486),
    I = n(914010),
    T = n(70956),
    S = n(198620),
    A = n(981631),
    N = n(176505),
    C = n(388032);
function R(e, t, n) {
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
let P = new p.Z('MessageManager');
function w(e) {
    let { guildId: t, channelId: n, messageId: r, forceFetch: i, isPreload: a, jumpType: o, skipLocalFetch: s, avoidInitialScroll: l } = e;
    if (null == n || (0, N.AB)(n)) return;
    let d = b.Z.getChannel(n);
    if ((null == d ? void 0 : d.type) === A.d4z.GUILD_STORE || ((null == d ? void 0 : d.type) != null && A.TPd.GUILD_THREADS_ONLY.has(d.type))) return;
    let p = _.Z.getOrCreate(n);
    (p.some(S.k5) && (P.log('Found expired attachment link, clearing messages'), _.Z.clear(n), (p = _.Z.getOrCreate(n))),
        null != p.jumpTargetId &&
            null == r &&
            ((p = p.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: u.SR.ANIMATED
            })),
            _.Z.commit(p)),
        null != p.focusTargetId && null == r && ((p = p.mutate({ focusTargetId: null })), _.Z.commit(p)));
    let m = i;
    if ((!a || h.Z.isConnected() || p.loadingMore ? (p.loadingMore || (p.ready && !p.cached) ? null != r && (m = !0) : (null == t || null != y.Z.getGuild(t)) && (m = !0)) : (m = !0), (0, f.Z)(n) && O.ZP.hasUnread(n) && (m = !0), m))
        if ((_.Z.commit(p.mutate({ loadingMore: !0 })), null != r))
            c.Z.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: a,
                skipLocalFetch: s,
                jumpType: o,
                avoidInitialScroll: l
            });
        else {
            if ((null == d ? void 0 : d.isThread()) && x(n))
                return (
                    P.log('Jumping to start of thread '.concat(d.id)),
                    c.Z.fetchMessages({
                        channelId: n,
                        limit: A.AQB,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: a,
                        skipLocalFetch: s,
                        avoidInitialScroll: l
                    })
                );
            if (!((null == d ? void 0 : d.isThread()) && O.ZP.hasTrackedUnread(d.id)) || p.ready)
                return c.Z.fetchMessages({
                    channelId: n,
                    limit: A.AQB,
                    isPreload: a,
                    skipLocalFetch: s,
                    jump: { jumpType: u.SR.ANIMATED },
                    avoidInitialScroll: l
                });
            let e = O.ZP.getTrackedAckMessageId(d.id);
            return (
                P.log('Jumping to most recent message in thread '.concat(d.id, ' - ').concat(e)),
                c.Z.fetchMessages({
                    channelId: n,
                    limit: A.AQB,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: a,
                    skipLocalFetch: s,
                    avoidInitialScroll: l
                })
            );
        }
}
let D = 90 * T.Z.Millis.DAY,
    L = 'viewedThreadIds';
function x(e) {
    if (O.ZP.hasOpenedThread(e)) return !1;
    if (null == i) {
        var t;
        i = null != (t = o.K.get(L, {})) ? t : {};
    }
    if (e in i) return !1;
    i[e] = Date.now();
    let n = Date.now() - D;
    for (let e in i) i[e] < n && delete i[e];
    return (o.K.set(L, i), !0);
}
function k(e) {
    var t;
    if (null != r && r.channelId === e) return r;
    let n = (0, a.LX)(location.pathname, {
        path: A.Z5c.CHANNEL(':guild', ':channel', ':message'),
        exact: !0
    });
    return {
        channelId: e,
        messageId: null == n || null == (t = n.params) ? void 0 : t.message
    };
}
function M() {
    let e = v.Z.getChannelId();
    if (null == e) return;
    let t = b.Z.getChannel(e);
    if (null == t) return;
    let n = k(t.id);
    ((r = void 0),
        w({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId
        }),
        V(t.getGuildId(), t.id));
}
function j() {
    let e = v.Z.getChannelId();
    if (null == e) return;
    let t = b.Z.getChannel(e);
    if (null == t) return;
    if (!(0, g.Qm)(t.type)) return void V(t.getGuildId(), t.id);
    let n = _.Z.getOrCreate(e);
    if (n.ready && n.hasFetched) return void V(t.getGuildId(), t.id);
    (w({
        guildId: t.getGuildId(),
        channelId: t.id
    }),
        V(t.getGuildId(), t.id));
}
function U(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: a, isInitialSetup: o } = e;
    if (o)
        return (
            null != n &&
                (r = {
                    channelId: n,
                    messageId: null != i ? i : void 0,
                    jumpType: a
                }),
            !1
        );
    (w({
        guildId: t,
        channelId: n,
        messageId: i,
        jumpType: a
    }),
        V(t, n));
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    w({
        guildId: t,
        channelId: n
    });
}
function B(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    w({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    });
}
function V(e, t) {
    let n = E.ZP.getCurrentSidebarChannelId(t);
    null != n &&
        w({
            guildId: e,
            channelId: n,
            messageId: E.ZP.getCurrentSidebarMessageId(t)
        });
}
function F() {
    let e = v.Z.getChannelId(),
        t = I.Z.getGuildId();
    if (null == t || null == e) return;
    let n = E.ZP.getSidebarState(e);
    (null == n ? void 0 : n.type) !== m.tI.VIEW_CHANNEL && V(t, e);
}
function Z(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === A.e3s &&
        (w({
            guildId: t,
            channelId: n
        }),
        V(t, n));
}
function H(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        v.Z.getChannelId(r) === t.id &&
        w({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function Y(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === A.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: C.intl.string(C.t['Whhv4+']),
                body: C.intl.formatToPlainString(C.t.qoxdQE, { retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let W = {};
function K(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let o = null != (t = W[n]) ? t : 0;
    if (Date.now() - o < 10 * T.Z.Millis.SECOND) return;
    W[n] = Date.now();
    let s = v.Z.getChannelId(),
        l = E.ZP.getCurrentSidebarChannelId(s),
        u = n === s || n === l;
    i &&
        h.Z.isConnected() &&
        u &&
        c.Z.fetchMessages({
            channelId: n,
            limit: A.AQB,
            jump: r
        });
}
function z(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null != n &&
        !0 !== i &&
        s.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n,
            reason: null != r ? r : null,
            shouldNotify: !1
        });
}
function q(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = v.Z.getChannelId();
    if (null == n) return !1;
    c.Z.fetchNewLocalMessages(n, A.AQB);
}
class X extends d.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', M);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', M);
    }
    constructor(...e) {
        (super(...e),
            R(this, 'fetchMessages', w),
            R(this, 'loadSelectedChannelIfNecessary', j),
            R(this, 'stores', new Map().set(E.ZP, F)),
            R(this, 'actions', {
                APP_STATE_UPDATE: q,
                OVERLAY_INITIALIZE: M,
                CHANNEL_SELECT: U,
                VOICE_CHANNEL_SELECT: G,
                THREAD_CREATE: H,
                THREAD_LIST_SYNC: () => j(),
                CHANNEL_CREATE: H,
                CHANNEL_PRELOAD: Z,
                GUILD_CREATE: () => j(),
                MESSAGE_END_EDIT: Y,
                LOAD_MESSAGES_SUCCESS: K,
                UPLOAD_FAIL: z,
                CHANNEL_DELETE: () => j(),
                THREAD_DELETE: () => j(),
                CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: B
            }));
    }
}
let Q = new X();
