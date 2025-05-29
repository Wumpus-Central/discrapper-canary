let r;
n.d(t, { Z: () => q }), n(388685);
var i = n(114858),
    a = n(259443),
    o = n(433517),
    s = n(570140),
    l = n(668781),
    c = n(904245),
    u = n(593472),
    d = n(147913),
    f = n(89892),
    _ = n(702321),
    p = n(38618),
    h = n(897473),
    m = n(131704),
    g = n(433355),
    E = n(592125),
    b = n(430824),
    y = n(306680),
    O = n(944486),
    v = n(914010),
    I = n(70956),
    S = n(198620),
    T = n(981631),
    A = n(176505),
    N = n(388032);
function C(e, t, n) {
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
let P = new a.Yd('MessageManager');
function R(e) {
    let { guildId: t, channelId: n, messageId: r, forceFetch: i, isPreload: a, jumpType: o, skipLocalFetch: s } = e;
    if (null == n || (0, A.AB)(n)) return;
    let l = E.Z.getChannel(n);
    if ((null == l ? void 0 : l.type) === T.d4z.GUILD_STORE || ((null == l ? void 0 : l.type) != null && T.TPd.GUILD_THREADS_ONLY.has(l.type))) return;
    let d = f.Z.getOrCreate(n);
    d.some(S.k5) && (P.log('Found expired attachment link, clearing messages'), f.Z.clear(n), (d = f.Z.getOrCreate(n))),
        null != d.jumpTargetId &&
            null == r &&
            ((d = d.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: u.SR.ANIMATED
            })),
            f.Z.commit(d)),
        null != d.focusTargetId && null == r && ((d = d.mutate({ focusTargetId: null })), f.Z.commit(d));
    let h = i;
    if ((!a || p.Z.isConnected() || d.loadingMore ? (d.loadingMore || (d.ready && !d.cached) ? null != r && (h = !0) : (null == t || null != b.Z.getGuild(t)) && (h = !0)) : (h = !0), (0, _.Z)(n) && y.ZP.hasUnread(n) && (h = !0), h))
        if ((f.Z.commit(d.mutate({ loadingMore: !0 })), null != r))
            c.Z.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: a,
                skipLocalFetch: s,
                jumpType: o
            });
        else {
            if ((null == l ? void 0 : l.isThread()) && L(n))
                return (
                    P.log('Jumping to start of thread '.concat(l.id)),
                    c.Z.fetchMessages({
                        channelId: n,
                        limit: T.AQB,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: a,
                        skipLocalFetch: s
                    })
                );
            if (!((null == l ? void 0 : l.isThread()) && y.ZP.hasTrackedUnread(l.id)) || d.ready)
                return c.Z.fetchMessages({
                    channelId: n,
                    limit: T.AQB,
                    isPreload: a,
                    skipLocalFetch: s,
                    jump: { jumpType: u.SR.ANIMATED }
                });
            let e = y.ZP.getTrackedAckMessageId(l.id);
            return (
                P.log('Jumping to most recent message in thread '.concat(l.id, ' - ').concat(e)),
                c.Z.fetchMessages({
                    channelId: n,
                    limit: T.AQB,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: a,
                    skipLocalFetch: s
                })
            );
        }
}
let w = 90 * I.Z.Millis.DAY,
    D = 'viewedThreadIds';
function L(e) {
    if (y.ZP.hasOpenedThread(e)) return !1;
    if (null == r) {
        var t;
        r = null != (t = o.K.get(D, {})) ? t : {};
    }
    if (e in r) return !1;
    r[e] = Date.now();
    let n = Date.now() - w;
    for (let e in r) r[e] < n && delete r[e];
    return o.K.set(D, r), !0;
}
function x() {
    var e;
    let t = O.Z.getChannelId();
    if (null == t) return;
    let n = E.Z.getChannel(t);
    if (null == n) return;
    let r = (0, i.LX)(location.pathname, {
        path: T.Z5c.CHANNEL(':guild', ':channel', ':message'),
        exact: !0
    });
    R({
        guildId: n.getGuildId(),
        channelId: n.id,
        messageId: null == r || null == (e = r.params) ? void 0 : e.message
    }),
        G(n.getGuildId(), n.id);
}
function k() {
    let e = O.Z.getChannelId();
    if (null == e) return;
    let t = E.Z.getChannel(e);
    if (null == t) return;
    if (!(0, m.Qm)(t.type)) return void G(t.getGuildId(), t.id);
    let n = f.Z.getOrCreate(e);
    if (n.ready && n.hasFetched) return void G(t.getGuildId(), t.id);
    R({
        guildId: t.getGuildId(),
        channelId: t.id
    }),
        G(t.getGuildId(), t.id);
}
function M(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i, isInitialSetup: a } = e;
    if (a) return !1;
    R({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    }),
        G(t, n);
}
function j(e) {
    let { guildId: t, channelId: n } = e;
    R({
        guildId: t,
        channelId: n
    });
}
function U(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    R({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    });
}
function G(e, t) {
    let n = g.ZP.getCurrentSidebarChannelId(t);
    null != n &&
        R({
            guildId: e,
            channelId: n,
            messageId: g.ZP.getCurrentSidebarMessageId(t)
        });
}
function B() {
    let e = O.Z.getChannelId(),
        t = v.Z.getGuildId();
    if (null == t || null == e) return;
    let n = g.ZP.getSidebarState(e);
    (null == n ? void 0 : n.type) !== h.tI.VIEW_CHANNEL && G(t, e);
}
function F(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === T.e3s &&
        (R({
            guildId: t,
            channelId: n
        }),
        G(t, n));
}
function V(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        O.Z.getChannelId(r) === t.id &&
        R({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function Z(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === T.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: N.intl.string(N.t['Whhv4+']),
                body: N.intl.formatToPlainString(N.t.qoxdQE, { retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let H = {};
function Y(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let o = null != (t = H[n]) ? t : 0;
    if (Date.now() - o < 10 * I.Z.Millis.SECOND) return;
    H[n] = Date.now();
    let s = O.Z.getChannelId(),
        l = g.ZP.getCurrentSidebarChannelId(s),
        u = n === s || n === l;
    i &&
        p.Z.isConnected() &&
        u &&
        c.Z.fetchMessages({
            channelId: n,
            limit: T.AQB,
            jump: r
        });
}
function W(e) {
    let { channelId: t, messageRecord: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null != n &&
        !0 !== i &&
        s.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null,
            shouldNotify: !1
        });
}
function K(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = O.Z.getChannelId();
    if (null == n) return !1;
    c.Z.fetchNewLocalMessages(n, T.AQB);
}
class z extends d.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', x);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', x);
    }
    constructor(...e) {
        super(...e),
            C(this, 'fetchMessages', R),
            C(this, 'loadSelectedChannelIfNecessary', k),
            C(this, 'stores', new Map().set(g.ZP, B)),
            C(this, 'actions', {
                APP_STATE_UPDATE: K,
                OVERLAY_INITIALIZE: x,
                CHANNEL_SELECT: M,
                VOICE_CHANNEL_SELECT: j,
                THREAD_CREATE: V,
                THREAD_LIST_SYNC: () => k(),
                CHANNEL_CREATE: V,
                CHANNEL_PRELOAD: F,
                GUILD_CREATE: () => k(),
                MESSAGE_END_EDIT: Z,
                LOAD_MESSAGES_SUCCESS: Y,
                UPLOAD_FAIL: W,
                CHANNEL_DELETE: () => k(),
                THREAD_DELETE: () => k(),
                CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: U
            });
    }
}
let q = new z();
