"use strict";
let r, i;
n.d(t, { A: () => ee });
var s = n(506774),
    a = n(73153),
    o = n(157559),
    l = n(843472),
    u = n(56562),
    c = n(439372),
    d = n(128265),
    _ = n(343328),
    f = n(626584),
    p = n(142120),
    h = n(491001),
    m = n(334465),
    E = n(940382),
    g = n(95701),
    A = n(761640),
    I = n(734057),
    T = n(71393),
    S = n(222823),
    y = n(309010),
    v = n(967198),
    N = n(927813),
    C = n(202803),
    b = n(662433),
    R = n(652215),
    O = n(746080),
    D = n(985018);
let L = 10 * N.A.Millis.SECOND,
    w = new f.A("MessageManager");
function x(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: r,
        forceFetch: i,
        isPreload: s,
        jumpType: a,
        skipLocalFetch: o,
        avoidInitialScroll: c,
        fetchKey: f,
    } = e;
    if (null == n || (0, O.jq)(n)) return;
    let h = I.A.getChannel(n);
    if (h?.type === R.rbe.GUILD_STORE || (h?.type != null && R.kvI.GUILD_THREADS_ONLY.has(h.type))) return;
    let m = d.A.getOrCreate(n);
    m.some(C.$r) && (w.log("Found expired attachment link, clearing messages"), d.A.clear(n), (m = d.A.getOrCreate(n))),
        null != m.jumpTargetId &&
            null == r &&
            ((m = m.mutate({ jumpTargetId: null, jumped: !1, jumpType: u.US.ANIMATED })), d.A.commit(m)),
        null != m.focusTargetId && null == r && ((m = m.mutate({ focusTargetId: null })), d.A.commit(m));
    let E = i;
    if (
        (!s || p.A.isConnected() || m.loadingMore
            ? m.loadingMore || (m.ready && !m.cached)
                ? null != r && (E = !0)
                : (null == t || null != T.A.getGuild(t)) && (E = !0)
            : (E = !0),
        (0, _.A)(n) && S.Ay.hasUnread(n) && (E = !0),
        E)
    )
        if ((d.A.commit(m.mutate({ loadingMore: !0 })), null != r))
            l.A.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: s,
                skipLocalFetch: o,
                jumpType: a,
                avoidInitialScroll: c,
            });
        else {
            if (h?.isThread() && k(n))
                return (
                    w.log(`Jumping to start of thread ${h.id}`),
                    l.A.fetchMessages({
                        channelId: n,
                        limit: (0, b.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: s,
                        skipLocalFetch: o,
                        avoidInitialScroll: c,
                        fetchKey: f,
                    })
                );
            if (!(h?.isThread() && S.Ay.hasTrackedUnread(h.id)) || m.ready)
                return l.A.fetchMessages({
                    channelId: n,
                    limit: (0, b.h)("MessageManager.initialFetch"),
                    isPreload: s,
                    skipLocalFetch: o,
                    jump: { jumpType: u.US.ANIMATED },
                    avoidInitialScroll: c,
                    fetchKey: f,
                });
            let e = S.Ay.getTrackedAckMessageId(h.id);
            return (
                w.log(`Jumping to most recent message in thread ${h.id} - ${e}`),
                l.A.fetchMessages({
                    channelId: n,
                    limit: (0, b.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: s,
                    skipLocalFetch: o,
                    avoidInitialScroll: c,
                    fetchKey: f,
                })
            );
        }
}
let M = 90 * N.A.Millis.DAY,
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
    let t = (0, m.B)(location.pathname, { path: R.BVt.CHANNEL(":guild", ":channel", ":message"), exact: !0 });
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
    if (!(0, h.K)()) return;
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
    if (!(0, g.pQ)(t.type)) return void Y(t.getGuildId(), t.id);
    let n = d.A.getOrCreate(e);
    (n.ready && n.hasFetched) || x({ guildId: t.getGuildId(), channelId: t.id }), Y(t.getGuildId(), t.id);
}
function B(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: s, isInitialSetup: a } = e;
    if (a) return null != n && (r = { channelId: n, messageId: i ?? void 0, jumpType: s }), !1;
    x({ guildId: t, channelId: n, messageId: i, jumpType: s }), Y(t, n);
}
function H(e) {
    let { guildId: t, channelId: n } = e;
    x({ guildId: t, channelId: n });
}
function j(e) {
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
    n?.type !== E.PE.VIEW_CHANNEL && Y(t, e);
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
            o.A.show({
                title: D.intl.string(D.t.Whhv4w),
                body: D.intl.formatToPlainString(D.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let q = {};
function Z(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let s = q[t] ?? 0;
    if (Date.now() - s < L) return;
    q[t] = Date.now();
    let a = y.A.getChannelId(),
        o = A.Ay.getCurrentSidebarChannelId(a),
        u = t === a || t === o;
    r &&
        p.A.isConnected() &&
        u &&
        l.A.fetchMessages({ channelId: t, limit: (0, b.h)("MessageManager.staleFetch"), jump: n });
}
function X(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: s } = e;
    null == n ||
        (!0 !== i &&
            a.h.dispatch({
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
    l.A.fetchNewLocalMessages(n, R.EMb);
}
class J extends c.A {
    fetchMessages = x;
    loadSelectedChannelIfNecessary = V;
    stores = new Map().set(A.Ay, W);
    actions = {
        APP_STATE_UPDATE: Q,
        OVERLAY_INITIALIZE: G,
        CONNECTION_RESUMED: F,
        CHANNEL_SELECT: B,
        VOICE_CHANNEL_SELECT: H,
        THREAD_CREATE: z,
        THREAD_LIST_SYNC: () => V(),
        CHANNEL_CREATE: z,
        CHANNEL_PRELOAD: K,
        GUILD_CREATE: () => V(),
        MESSAGE_END_EDIT: $,
        LOAD_MESSAGES_SUCCESS: Z,
        UPLOAD_FAIL: X,
        CHANNEL_DELETE: () => V(),
        THREAD_DELETE: () => V(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: j,
    };
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", G);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", G);
    }
}
let ee = new J();
