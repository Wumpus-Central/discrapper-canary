let r, i;
n.d(t, { Z: () => Q }), n(388685);
var a = n(114858),
    o = n(259443),
    s = n(433517),
    l = n(570140),
    c = n(668781),
    u = n(904245),
    d = n(593472),
    f = n(147913),
    _ = n(89892),
    p = n(702321),
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
let P = new o.Yd('MessageManager');
function w(e) {
    let { guildId: t, channelId: n, messageId: r, forceFetch: i, isPreload: a, jumpType: o, skipLocalFetch: s, avoidInitialScroll: l } = e;
    if (null == n || (0, N.AB)(n)) return;
    let c = b.Z.getChannel(n);
    if ((null == c ? void 0 : c.type) === A.d4z.GUILD_STORE || ((null == c ? void 0 : c.type) != null && A.TPd.GUILD_THREADS_ONLY.has(c.type))) return;
    let f = _.Z.getOrCreate(n);
    f.some(S.k5) && (P.log('Found expired attachment link, clearing messages'), _.Z.clear(n), (f = _.Z.getOrCreate(n))),
        null != f.jumpTargetId &&
            null == r &&
            ((f = f.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: d.SR.ANIMATED
            })),
            _.Z.commit(f)),
        null != f.focusTargetId && null == r && ((f = f.mutate({ focusTargetId: null })), _.Z.commit(f));
    let m = i;
    if ((!a || h.Z.isConnected() || f.loadingMore ? (f.loadingMore || (f.ready && !f.cached) ? null != r && (m = !0) : (null == t || null != y.Z.getGuild(t)) && (m = !0)) : (m = !0), (0, p.Z)(n) && O.ZP.hasUnread(n) && (m = !0), m))
        if ((_.Z.commit(f.mutate({ loadingMore: !0 })), null != r))
            u.Z.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: a,
                skipLocalFetch: s,
                jumpType: o,
                avoidInitialScroll: l
            });
        else {
            if ((null == c ? void 0 : c.isThread()) && x(n))
                return (
                    P.log('Jumping to start of thread '.concat(c.id)),
                    u.Z.fetchMessages({
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
            if (!((null == c ? void 0 : c.isThread()) && O.ZP.hasTrackedUnread(c.id)) || f.ready)
                return u.Z.fetchMessages({
                    channelId: n,
                    limit: A.AQB,
                    isPreload: a,
                    skipLocalFetch: s,
                    jump: { jumpType: d.SR.ANIMATED },
                    avoidInitialScroll: l
                });
            let e = O.ZP.getTrackedAckMessageId(c.id);
            return (
                P.log('Jumping to most recent message in thread '.concat(c.id, ' - ').concat(e)),
                u.Z.fetchMessages({
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
        i = null != (t = s.K.get(L, {})) ? t : {};
    }
    if (e in i) return !1;
    i[e] = Date.now();
    let n = Date.now() - D;
    for (let e in i) i[e] < n && delete i[e];
    return s.K.set(L, i), !0;
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
    (r = void 0),
        w({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId
        }),
        V(t.getGuildId(), t.id);
}
function j() {
    let e = v.Z.getChannelId();
    if (null == e) return;
    let t = b.Z.getChannel(e);
    if (null == t) return;
    if (!(0, g.Qm)(t.type)) return void V(t.getGuildId(), t.id);
    let n = _.Z.getOrCreate(e);
    if (n.ready && n.hasFetched) return void V(t.getGuildId(), t.id);
    w({
        guildId: t.getGuildId(),
        channelId: t.id
    }),
        V(t.getGuildId(), t.id);
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
    w({
        guildId: t,
        channelId: n,
        messageId: i,
        jumpType: a
    }),
        V(t, n);
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
            c.Z.show({
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
        c = n === s || n === l;
    i &&
        h.Z.isConnected() &&
        c &&
        u.Z.fetchMessages({
            channelId: n,
            limit: A.AQB,
            jump: r
        });
}
function z(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null != n &&
        !0 !== i &&
        l.Z.dispatch({
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
    u.Z.fetchNewLocalMessages(n, A.AQB);
}
class X extends f.Z {
    _initialize() {
        l.Z.subscribe('CONNECTION_OPEN', M);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTION_OPEN', M);
    }
    constructor(...e) {
        super(...e),
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
            });
    }
}
let Q = new X();
