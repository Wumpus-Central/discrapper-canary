"use strict";
let r;
n.d(t, { A: () => er });
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
    C = n(723702),
    R = n(202803),
    O = n(662433),
    b = n(652215),
    D = n(746080),
    L = n(985018);
let w = 10 * N.A.Millis.SECOND,
    M = new _.A("MessageManager");
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
    if (null == n || (0, D.jq)(n)) return;
    let h = I.A.getChannel(n);
    if (h?.type === b.rbe.GUILD_STORE || (h?.type != null && b.kvI.GUILD_THREADS_ONLY.has(h.type))) return;
    let m = c.A.getOrCreate(n);
    m.some(R.$r) && (M.log("Found expired attachment link, clearing messages"), c.A.clear(n), (m = c.A.getOrCreate(n))),
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
            if (h?.isThread() && U(n))
                return (
                    M.log(`Jumping to start of thread ${h.id}`),
                    o.A.fetchMessages({
                        channelId: n,
                        limit: (0, O.h)("MessageManager.threadStart"),
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
                    limit: (0, O.h)("MessageManager.initialFetch"),
                    isPreload: s,
                    skipLocalFetch: u,
                    jump: { jumpType: l.US.ANIMATED },
                    avoidInitialScroll: _,
                    fetchKey: p,
                });
            let e = S.Ay.getTrackedAckMessageId(h.id);
            return (
                M.log(`Jumping to most recent message in thread ${h.id} - ${e}`),
                o.A.fetchMessages({
                    channelId: n,
                    limit: (0, O.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: s,
                    skipLocalFetch: u,
                    avoidInitialScroll: _,
                    fetchKey: p,
                })
            );
        }
}
let P = 90 * N.A.Millis.DAY,
    k = "viewedThreadIds";
function U(e) {
    if (S.Ay.hasOpenedThread(e) || (null == r && (r = i.w.get(k, {}) ?? {}), e in r)) return !1;
    r[e] = Date.now();
    let t = Date.now() - P;
    for (let e in r) r[e] < t && delete r[e];
    return i.w.set(k, r), !0;
}
function G(e) {
    let t = (0, h.B)((0, m.JK)().location.pathname, {
        path: b.BVt.CHANNEL(":guild", ":channel", ":message"),
        exact: !0,
    });
    return { channelId: e, messageId: t?.params?.message };
}
function F() {
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    let n = G(t.id);
    x({ guildId: t.getGuildId(), channelId: t.id, messageId: n.messageId, avoidInitialScroll: null != n.messageId }),
        W(t.getGuildId(), t.id);
}
function V() {
    if (!(0, p.K)()) return;
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    null != t && x({ guildId: t.getGuildId(), channelId: t.id });
}
function B() {
    let e = y.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    if (!(0, g.pQ)(t.type)) return void W(t.getGuildId(), t.id);
    let n = c.A.getOrCreate(e);
    (n.ready && n.hasFetched) || x({ guildId: t.getGuildId(), channelId: t.id }), W(t.getGuildId(), t.id);
}
function H(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i, skipMessageFetch: s } = e;
    if (s) return !1;
    x({ guildId: t, channelId: n, messageId: r, jumpType: i }), W(t, n);
}
function j(e) {
    let { guildId: t, channelId: n } = e;
    x({ guildId: t, channelId: n });
}
function Y(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    x({ guildId: t, channelId: n, messageId: r, jumpType: i });
}
function W(e, t) {
    let n = A.Ay.getCurrentSidebarChannelId(t);
    null == n || x({ guildId: e, channelId: n, messageId: A.Ay.getCurrentSidebarMessageId(t) });
}
function K() {
    let e = y.A.getChannelId(),
        t = v.A.getGuildId();
    if (null == t || null == e) return;
    let n = A.Ay.getSidebarState(e);
    n?.type !== E.PE.VIEW_CHANNEL && W(t, e);
}
function $(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === b.QCW && (x({ guildId: t, channelId: n }), W(t, n));
}
function z(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r && y.A.getChannelId(r) === t.id && x({ guildId: r, channelId: t.id, messageId: n });
}
function q(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === b.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            a.A.show({
                title: L.intl.string(L.t.Whhv4w),
                body: L.intl.formatToPlainString(L.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let Z = {};
function X(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let s = Z[t] ?? 0;
    if (Date.now() - s < w) return;
    Z[t] = Date.now();
    let a = y.A.getChannelId(),
        l = A.Ay.getCurrentSidebarChannelId(a),
        u = t === a || t === l;
    r &&
        f.A.isConnected() &&
        u &&
        o.A.fetchMessages({ channelId: t, limit: (0, O.h)("MessageManager.staleFetch"), jump: n });
}
function Q(e) {
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
function J() {
    let e = y.A.getChannelId();
    if (null == e) return !1;
    o.A.fetchNewLocalMessages(e, b.EMb);
}
function ee(e) {
    let { state: t } = e;
    if ((0, C.isIOS)() || "active" !== t) return !1;
    J();
}
function et() {
    J();
}
class en extends u.A {
    fetchMessages = x;
    loadSelectedChannelIfNecessary = B;
    stores = new Map().set(A.Ay, K);
    actions = {
        APP_STATE_UPDATE: ee,
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: et,
        OVERLAY_INITIALIZE: F,
        CONNECTION_RESUMED: V,
        CHANNEL_SELECT: H,
        VOICE_CHANNEL_SELECT: j,
        THREAD_CREATE: z,
        THREAD_LIST_SYNC: () => B(),
        CHANNEL_CREATE: z,
        CHANNEL_PRELOAD: $,
        GUILD_CREATE: () => B(),
        MESSAGE_END_EDIT: q,
        LOAD_MESSAGES_SUCCESS: X,
        UPLOAD_FAIL: Q,
        CHANNEL_DELETE: () => B(),
        THREAD_DELETE: () => B(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: Y,
    };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", F);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", F);
    }
}
let er = new en();
