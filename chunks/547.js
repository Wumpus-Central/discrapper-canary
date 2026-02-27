"use strict";
let r;
n.d(t, { A: () => ee });
var i = n(506774),
    s = n(73153),
    a = n(157559),
    o = n(843472),
    l = n(56562),
    u = n(439372),
    c = n(128265),
    d = n(343328),
    _ = n(626584),
    f = n(142120),
    p = n(491001),
    h = n(334465),
    m = n(976860),
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
    w = new _.A("MessageManager");
function x(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: r,
        forceFetch: i,
        isPreload: s,
        jumpType: a,
        skipLocalFetch: u,
        avoidInitialScroll: _,
        fetchKey: p,
    } = e;
    if (null == n || (0, O.jq)(n)) return;
    let h = I.A.getChannel(n);
    if (h?.type === R.rbe.GUILD_STORE || (h?.type != null && R.kvI.GUILD_THREADS_ONLY.has(h.type))) return;
    let m = c.A.getOrCreate(n);
    m.some(C.$r) && (w.log("Found expired attachment link, clearing messages"), c.A.clear(n), (m = c.A.getOrCreate(n))),
        null != m.jumpTargetId &&
            null == r &&
            ((m = m.mutate({ jumpTargetId: null, jumped: !1, jumpType: l.US.ANIMATED })), c.A.commit(m)),
        null != m.focusTargetId && null == r && ((m = m.mutate({ focusTargetId: null })), c.A.commit(m));
    let E = i;
    if (
        (!s || f.A.isConnected() || m.loadingMore
            ? m.loadingMore || (m.ready && !m.cached)
                ? null != r && (E = !0)
                : (null == t || null != T.A.getGuild(t)) && (E = !0)
            : (E = !0),
        (0, d.A)(n) && S.Ay.hasUnread(n) && (E = !0),
        E)
    )
        if ((c.A.commit(m.mutate({ loadingMore: !0 })), null != r))
            o.A.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: s,
                skipLocalFetch: u,
                jumpType: a,
                avoidInitialScroll: _,
            });
        else {
            if (h?.isThread() && k(n))
                return (
                    w.log(`Jumping to start of thread ${h.id}`),
                    o.A.fetchMessages({
                        channelId: n,
                        limit: (0, b.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: s,
                        skipLocalFetch: u,
                        avoidInitialScroll: _,
                        fetchKey: p,
                    })
                );
            if (!(h?.isThread() && S.Ay.hasTrackedUnread(h.id)) || m.ready)
                return o.A.fetchMessages({
                    channelId: n,
                    limit: (0, b.h)("MessageManager.initialFetch"),
                    isPreload: s,
                    skipLocalFetch: u,
                    jump: { jumpType: l.US.ANIMATED },
                    avoidInitialScroll: _,
                    fetchKey: p,
                });
            let e = S.Ay.getTrackedAckMessageId(h.id);
            return (
                w.log(`Jumping to most recent message in thread ${h.id} - ${e}`),
                o.A.fetchMessages({
                    channelId: n,
                    limit: (0, b.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: s,
                    skipLocalFetch: u,
                    avoidInitialScroll: _,
                    fetchKey: p,
                })
            );
        }
}
let M = 90 * N.A.Millis.DAY,
    P = "viewedThreadIds";
function k(e) {
    if (S.Ay.hasOpenedThread(e) || (null == r && (r = i.w.get(P, {}) ?? {}), e in r)) return !1;
    r[e] = Date.now();
    let t = Date.now() - M;
    for (let e in r) r[e] < t && delete r[e];
    return i.w.set(P, r), !0;
}
function U(e) {
    let t = (0, h.B)((0, m.JK)().location.pathname, {
        path: R.BVt.CHANNEL(":guild", ":channel", ":message"),
        exact: !0,
    });
    return { channelId: e, messageId: t?.params?.message };
}
function G() {
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    let n = U(t.id);
    x({ guildId: t.getGuildId(), channelId: t.id, messageId: n.messageId, avoidInitialScroll: null != n.messageId }),
        Y(t.getGuildId(), t.id);
}
function F() {
    if (!(0, p.K)()) return;
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
    let n = c.A.getOrCreate(e);
    (n.ready && n.hasFetched) || x({ guildId: t.getGuildId(), channelId: t.id }), Y(t.getGuildId(), t.id);
}
function B(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i, skipMessageFetch: s } = e;
    if (s) return !1;
    x({ guildId: t, channelId: n, messageId: r, jumpType: i }), Y(t, n);
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
            a.A.show({
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
        l = A.Ay.getCurrentSidebarChannelId(a),
        u = t === a || t === l;
    r &&
        f.A.isConnected() &&
        u &&
        o.A.fetchMessages({ channelId: t, limit: (0, b.h)("MessageManager.staleFetch"), jump: n });
}
function X(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null == n ||
        (!0 !== i &&
            s.h.dispatch({
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
    o.A.fetchNewLocalMessages(n, R.EMb);
}
class J extends u.A {
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
        s.h.subscribe("CONNECTION_OPEN", G);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", G);
    }
}
let ee = new J();
