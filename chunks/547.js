"use strict";
let r, i;
n.d(t, { A: () => et });
var a = n(960488),
    s = n(506774),
    o = n(73153),
    l = n(157559),
    u = n(843472),
    c = n(56562),
    d = n(439372),
    _ = n(128265),
    f = n(343328),
    h = n(626584),
    p = n(142120),
    g = n(491001),
    E = n(940382),
    A = n(95701),
    I = n(761640),
    T = n(734057),
    y = n(71393),
    S = n(222823),
    v = n(309010),
    C = n(967198),
    b = n(927813),
    N = n(202803),
    R = n(662433),
    O = n(652215),
    D = n(746080),
    L = n(985018);
let w = 10 * b.A.Millis.SECOND,
    x = new h.A("MessageManager");
function P(e) {
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
    if (null == n || (0, D.jq)(n)) return;
    let h = T.A.getChannel(n);
    if (h?.type === O.rbe.GUILD_STORE || (h?.type != null && O.kvI.GUILD_THREADS_ONLY.has(h.type))) return;
    let g = _.A.getOrCreate(n);
    g.some(N.$r) && (x.log("Found expired attachment link, clearing messages"), _.A.clear(n), (g = _.A.getOrCreate(n))),
        null != g.jumpTargetId &&
            null == r &&
            ((g = g.mutate({ jumpTargetId: null, jumped: !1, jumpType: c.US.ANIMATED })), _.A.commit(g)),
        null != g.focusTargetId && null == r && ((g = g.mutate({ focusTargetId: null })), _.A.commit(g));
    let E = i;
    if (
        (!a || p.A.isConnected() || g.loadingMore
            ? g.loadingMore || (g.ready && !g.cached)
                ? null != r && (E = !0)
                : (null == t || null != y.A.getGuild(t)) && (E = !0)
            : (E = !0),
        (0, f.A)(n) && S.Ay.hasUnread(n) && (E = !0),
        E)
    )
        if ((_.A.commit(g.mutate({ loadingMore: !0 })), null != r))
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
            if (h?.isThread() && U(n))
                return (
                    x.log(`Jumping to start of thread ${h.id}`),
                    u.A.fetchMessages({
                        channelId: n,
                        limit: (0, R.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: a,
                        skipLocalFetch: o,
                        avoidInitialScroll: l,
                        fetchKey: d,
                    })
                );
            if (!(h?.isThread() && S.Ay.hasTrackedUnread(h.id)) || g.ready)
                return u.A.fetchMessages({
                    channelId: n,
                    limit: (0, R.h)("MessageManager.initialFetch"),
                    isPreload: a,
                    skipLocalFetch: o,
                    jump: { jumpType: c.US.ANIMATED },
                    avoidInitialScroll: l,
                    fetchKey: d,
                });
            let e = S.Ay.getTrackedAckMessageId(h.id);
            return (
                x.log(`Jumping to most recent message in thread ${h.id} - ${e}`),
                u.A.fetchMessages({
                    channelId: n,
                    limit: (0, R.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: a,
                    skipLocalFetch: o,
                    avoidInitialScroll: l,
                    fetchKey: d,
                })
            );
        }
}
let M = 90 * b.A.Millis.DAY,
    k = "viewedThreadIds";
function U(e) {
    if (S.Ay.hasOpenedThread(e) || (null == i && (i = s.w.get(k, {}) ?? {}), e in i)) return !1;
    i[e] = Date.now();
    let t = Date.now() - M;
    for (let e in i) i[e] < t && delete i[e];
    return s.w.set(k, i), !0;
}
function G(e) {
    if (null != r && r.channelId === e) return r;
    let t = (0, a.B6)(location.pathname, { path: O.BVt.CHANNEL(":guild", ":channel", ":message"), exact: !0 });
    return { channelId: e, messageId: t?.params?.message };
}
function F() {
    let e = v.A.getChannelId();
    if (null == e) return;
    let t = T.A.getChannel(e);
    if (null == t) return;
    let n = G(t.id);
    (r = void 0),
        P({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId,
        }),
        W(t.getGuildId(), t.id);
}
function V() {
    if (!(0, g.K)()) return;
    let e = v.A.getChannelId();
    if (null == e) return;
    let t = T.A.getChannel(e);
    null != t && P({ guildId: t.getGuildId(), channelId: t.id });
}
function B() {
    let e = v.A.getChannelId();
    if (null == e) return;
    let t = T.A.getChannel(e);
    if (null == t) return;
    if (!(0, A.pQ)(t.type)) return void W(t.getGuildId(), t.id);
    let n = _.A.getOrCreate(e);
    (n.ready && n.hasFetched) || P({ guildId: t.getGuildId(), channelId: t.id }), W(t.getGuildId(), t.id);
}
function j(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: a, isInitialSetup: s } = e;
    if (s) return null != n && (r = { channelId: n, messageId: i ?? void 0, jumpType: a }), !1;
    P({ guildId: t, channelId: n, messageId: i, jumpType: a }), W(t, n);
}
function H(e) {
    let { guildId: t, channelId: n } = e;
    P({ guildId: t, channelId: n });
}
function Y(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    P({ guildId: t, channelId: n, messageId: r, jumpType: i });
}
function W(e, t) {
    let n = I.Ay.getCurrentSidebarChannelId(t);
    null == n || P({ guildId: e, channelId: n, messageId: I.Ay.getCurrentSidebarMessageId(t) });
}
function K() {
    let e = v.A.getChannelId(),
        t = C.A.getGuildId();
    if (null == t || null == e) return;
    let n = I.Ay.getSidebarState(e);
    n?.type !== E.PE.VIEW_CHANNEL && W(t, e);
}
function $(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === O.QCW && (P({ guildId: t, channelId: n }), W(t, n));
}
function z(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r && v.A.getChannelId(r) === t.id && P({ guildId: r, channelId: t.id, messageId: n });
}
function q(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === O.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.A.show({
                title: L.intl.string(L.t.Whhv4w),
                body: L.intl.formatToPlainString(L.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let X = {};
function Z(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let a = X[t] ?? 0;
    if (Date.now() - a < w) return;
    X[t] = Date.now();
    let s = v.A.getChannelId(),
        o = I.Ay.getCurrentSidebarChannelId(s),
        l = t === s || t === o;
    r &&
        p.A.isConnected() &&
        l &&
        u.A.fetchMessages({ channelId: t, limit: (0, R.h)("MessageManager.staleFetch"), jump: n });
}
function Q(e) {
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
function J(e) {
    let { state: t } = e;
    if ("active" !== t) return !1;
    let n = v.A.getChannelId();
    if (null == n) return !1;
    u.A.fetchNewLocalMessages(n, O.EMb);
}
class ee extends d.A {
    fetchMessages = P;
    loadSelectedChannelIfNecessary = B;
    stores = new Map().set(I.Ay, K);
    actions = {
        APP_STATE_UPDATE: J,
        OVERLAY_INITIALIZE: F,
        CONNECTION_RESUMED: V,
        CHANNEL_SELECT: j,
        VOICE_CHANNEL_SELECT: H,
        THREAD_CREATE: z,
        THREAD_LIST_SYNC: () => B(),
        CHANNEL_CREATE: z,
        CHANNEL_PRELOAD: $,
        GUILD_CREATE: () => B(),
        MESSAGE_END_EDIT: q,
        LOAD_MESSAGES_SUCCESS: Z,
        UPLOAD_FAIL: Q,
        CHANNEL_DELETE: () => B(),
        THREAD_DELETE: () => B(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: Y,
    };
    _initialize() {
        o.h.subscribe("CONNECTION_OPEN", F);
    }
    _terminate() {
        o.h.unsubscribe("CONNECTION_OPEN", F);
    }
}
let et = new ee();
