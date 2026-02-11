"use strict";
let r, i;
n.d(t, { A: () => ee });
var a = n(960488),
    s = n(506774),
    o = n(73153),
    l = n(157559),
    u = n(843472),
    c = n(56562),
    d = n(439372),
    _ = n(128265),
    f = n(343328),
    p = n(626584),
    h = n(142120),
    m = n(491001),
    g = n(940382),
    E = n(95701),
    A = n(761640),
    I = n(734057),
    T = n(71393),
    S = n(222823),
    y = n(309010),
    v = n(967198),
    C = n(927813),
    N = n(202803),
    b = n(662433),
    R = n(652215),
    O = n(746080),
    D = n(985018);
let L = 10 * C.A.Millis.SECOND,
    w = new p.A("MessageManager");
function x(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: r,
        forceFetch: i,
        isPreload: a,
        jumpType: s,
        skipLocalFetch: o,
        avoidInitialScroll: l,
        fetchKey: d,
    } = e;
    if (null == n || (0, O.jq)(n)) return;
    let p = I.A.getChannel(n);
    if (p?.type === R.rbe.GUILD_STORE || (p?.type != null && R.kvI.GUILD_THREADS_ONLY.has(p.type))) return;
    let m = _.A.getOrCreate(n);
    m.some(N.$r) && (w.log("Found expired attachment link, clearing messages"), _.A.clear(n), (m = _.A.getOrCreate(n))),
        null != m.jumpTargetId &&
            null == r &&
            ((m = m.mutate({ jumpTargetId: null, jumped: !1, jumpType: c.US.ANIMATED })), _.A.commit(m)),
        null != m.focusTargetId && null == r && ((m = m.mutate({ focusTargetId: null })), _.A.commit(m));
    let g = i;
    if (
        (!a || h.A.isConnected() || m.loadingMore
            ? m.loadingMore || (m.ready && !m.cached)
                ? null != r && (g = !0)
                : (null == t || null != T.A.getGuild(t)) && (g = !0)
            : (g = !0),
        (0, f.A)(n) && S.Ay.hasUnread(n) && (g = !0),
        g)
    )
        if ((_.A.commit(m.mutate({ loadingMore: !0 })), null != r))
            u.A.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: a,
                skipLocalFetch: o,
                jumpType: s,
                avoidInitialScroll: l,
            });
        else {
            if (p?.isThread() && k(n))
                return (
                    w.log(`Jumping to start of thread ${p.id}`),
                    u.A.fetchMessages({
                        channelId: n,
                        limit: (0, b.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: a,
                        skipLocalFetch: o,
                        avoidInitialScroll: l,
                        fetchKey: d,
                    })
                );
            if (!(p?.isThread() && S.Ay.hasTrackedUnread(p.id)) || m.ready)
                return u.A.fetchMessages({
                    channelId: n,
                    limit: (0, b.h)("MessageManager.initialFetch"),
                    isPreload: a,
                    skipLocalFetch: o,
                    jump: { jumpType: c.US.ANIMATED },
                    avoidInitialScroll: l,
                    fetchKey: d,
                });
            let e = S.Ay.getTrackedAckMessageId(p.id);
            return (
                w.log(`Jumping to most recent message in thread ${p.id} - ${e}`),
                u.A.fetchMessages({
                    channelId: n,
                    limit: (0, b.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: a,
                    skipLocalFetch: o,
                    avoidInitialScroll: l,
                    fetchKey: d,
                })
            );
        }
}
let M = 90 * C.A.Millis.DAY,
    P = "viewedThreadIds";
function k(e) {
    if (S.Ay.hasOpenedThread(e) || (null == i && (i = s.w.get(P, {}) ?? {}), e in i)) return !1;
    i[e] = Date.now();
    let t = Date.now() - M;
    for (let e in i) i[e] < t && delete i[e];
    return s.w.set(P, i), !0;
}
function U(e) {
    if (null != r && r.channelId === e) return r;
    let t = (0, a.B6)(location.pathname, { path: R.BVt.CHANNEL(":guild", ":channel", ":message"), exact: !0 });
    return { channelId: e, messageId: t?.params?.message };
}
function G() {
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    let n = U(t.id);
    (r = void 0),
        x({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId,
        }),
        Y(t.getGuildId(), t.id);
}
function F() {
    if (!(0, m.K)()) return;
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    null != t && x({ guildId: t.getGuildId(), channelId: t.id });
}
function V() {
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    if (!(0, E.pQ)(t.type)) return void Y(t.getGuildId(), t.id);
    let n = _.A.getOrCreate(e);
    (n.ready && n.hasFetched) || x({ guildId: t.getGuildId(), channelId: t.id }), Y(t.getGuildId(), t.id);
}
function B(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: a, isInitialSetup: s } = e;
    if (s) return null != n && (r = { channelId: n, messageId: i ?? void 0, jumpType: a }), !1;
    x({ guildId: t, channelId: n, messageId: i, jumpType: a }), Y(t, n);
}
function j(e) {
    let { guildId: t, channelId: n } = e;
    x({ guildId: t, channelId: n });
}
function H(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    x({ guildId: t, channelId: n, messageId: r, jumpType: i });
}
function Y(e, t) {
    let n = A.Ay.getCurrentSidebarChannelId(t);
    null == n || x({ guildId: e, channelId: n, messageId: A.Ay.getCurrentSidebarMessageId(t) });
}
function W() {
    let e = y.A.getChannelId(),
        t = v.A.getGuildId();
    if (null == t || null == e) return;
    let n = A.Ay.getSidebarState(e);
    n?.type !== g.PE.VIEW_CHANNEL && Y(t, e);
}
function K(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === R.QCW && (x({ guildId: t, channelId: n }), Y(t, n));
}
function z(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r && y.A.getChannelId(r) === t.id && x({ guildId: r, channelId: t.id, messageId: n });
}
function $(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === R.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.A.show({
                title: D.intl.string(D.t.Whhv4w),
                body: D.intl.formatToPlainString(D.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let q = {};
function X(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let a = q[t] ?? 0;
    if (Date.now() - a < L) return;
    q[t] = Date.now();
    let s = y.A.getChannelId(),
        o = A.Ay.getCurrentSidebarChannelId(s),
        l = t === s || t === o;
    r &&
        h.A.isConnected() &&
        l &&
        u.A.fetchMessages({ channelId: t, limit: (0, b.h)("MessageManager.staleFetch"), jump: n });
}
function Z(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null == n ||
        (!0 !== i &&
            o.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                channelId: t,
                messageId: n,
                reason: r ?? null,
                shouldNotify: !1,
            }));
}
function Q(e) {
    let { state: t } = e;
    if ("active" !== t) return !1;
    let n = y.A.getChannelId();
    if (null == n) return !1;
    u.A.fetchNewLocalMessages(n, R.EMb);
}
class J extends d.A {
    fetchMessages = x;
    loadSelectedChannelIfNecessary = V;
    stores = new Map().set(A.Ay, W);
    actions = {
        APP_STATE_UPDATE: Q,
        OVERLAY_INITIALIZE: G,
        CONNECTION_RESUMED: F,
        CHANNEL_SELECT: B,
        VOICE_CHANNEL_SELECT: j,
        THREAD_CREATE: z,
        THREAD_LIST_SYNC: () => V(),
        CHANNEL_CREATE: z,
        CHANNEL_PRELOAD: K,
        GUILD_CREATE: () => V(),
        MESSAGE_END_EDIT: $,
        LOAD_MESSAGES_SUCCESS: X,
        UPLOAD_FAIL: Z,
        CHANNEL_DELETE: () => V(),
        THREAD_DELETE: () => V(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: H,
    };
    _initialize() {
        o.h.subscribe("CONNECTION_OPEN", G);
    }
    _terminate() {
        o.h.unsubscribe("CONNECTION_OPEN", G);
    }
}
let ee = new J();
