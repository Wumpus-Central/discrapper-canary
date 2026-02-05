"use strict";
let r, i;
n.d(t, { A: () => J });
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
    y = n(222823),
    S = n(309010),
    v = n(967198),
    C = n(927813),
    b = n(202803),
    N = n(652215),
    R = n(746080),
    O = n(985018);
let D = 10 * C.A.Millis.SECOND,
    L = new p.A("MessageManager");
function w(e) {
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
    if (null == n || (0, R.jq)(n)) return;
    let p = I.A.getChannel(n);
    if (p?.type === N.rbe.GUILD_STORE || (p?.type != null && N.kvI.GUILD_THREADS_ONLY.has(p.type))) return;
    let m = _.A.getOrCreate(n);
    m.some(b.$r) && (L.log("Found expired attachment link, clearing messages"), _.A.clear(n), (m = _.A.getOrCreate(n))),
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
        (0, f.A)(n) && y.Ay.hasUnread(n) && (g = !0),
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
            if (p?.isThread() && M(n))
                return (
                    L.log(`Jumping to start of thread ${p.id}`),
                    u.A.fetchMessages({
                        channelId: n,
                        limit: N.EMb,
                        jump: { messageId: n, flash: !1 },
                        isPreload: a,
                        skipLocalFetch: o,
                        avoidInitialScroll: l,
                        fetchKey: d,
                    })
                );
            if (!(p?.isThread() && y.Ay.hasTrackedUnread(p.id)) || m.ready)
                return u.A.fetchMessages({
                    channelId: n,
                    limit: N.EMb,
                    isPreload: a,
                    skipLocalFetch: o,
                    jump: { jumpType: c.US.ANIMATED },
                    avoidInitialScroll: l,
                    fetchKey: d,
                });
            let e = y.Ay.getTrackedAckMessageId(p.id);
            return (
                L.log(`Jumping to most recent message in thread ${p.id} - ${e}`),
                u.A.fetchMessages({
                    channelId: n,
                    limit: N.EMb,
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: a,
                    skipLocalFetch: o,
                    avoidInitialScroll: l,
                    fetchKey: d,
                })
            );
        }
}
let x = 90 * C.A.Millis.DAY,
    P = "viewedThreadIds";
function M(e) {
    if (y.Ay.hasOpenedThread(e) || (null == i && (i = s.w.get(P, {}) ?? {}), e in i)) return !1;
    i[e] = Date.now();
    let t = Date.now() - x;
    for (let e in i) i[e] < t && delete i[e];
    return s.w.set(P, i), !0;
}
function k(e) {
    if (null != r && r.channelId === e) return r;
    let t = (0, a.B6)(location.pathname, { path: N.BVt.CHANNEL(":guild", ":channel", ":message"), exact: !0 });
    return { channelId: e, messageId: t?.params?.message };
}
function U() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    let n = k(t.id);
    (r = void 0),
        w({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId,
        }),
        H(t.getGuildId(), t.id);
}
function G() {
    if (!(0, m.K)()) return;
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    null != t && w({ guildId: t.getGuildId(), channelId: t.id });
}
function V() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = I.A.getChannel(e);
    if (null == t) return;
    if (!(0, E.pQ)(t.type)) return void H(t.getGuildId(), t.id);
    let n = _.A.getOrCreate(e);
    (n.ready && n.hasFetched) || w({ guildId: t.getGuildId(), channelId: t.id }), H(t.getGuildId(), t.id);
}
function F(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: a, isInitialSetup: s } = e;
    if (s) return null != n && (r = { channelId: n, messageId: i ?? void 0, jumpType: a }), !1;
    w({ guildId: t, channelId: n, messageId: i, jumpType: a }), H(t, n);
}
function B(e) {
    let { guildId: t, channelId: n } = e;
    w({ guildId: t, channelId: n });
}
function j(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    w({ guildId: t, channelId: n, messageId: r, jumpType: i });
}
function H(e, t) {
    let n = A.Ay.getCurrentSidebarChannelId(t);
    null == n || w({ guildId: e, channelId: n, messageId: A.Ay.getCurrentSidebarMessageId(t) });
}
function Y() {
    let e = S.A.getChannelId(),
        t = v.A.getGuildId();
    if (null == t || null == e) return;
    let n = A.Ay.getSidebarState(e);
    n?.type !== g.PE.VIEW_CHANNEL && H(t, e);
}
function W(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === N.QCW && (w({ guildId: t, channelId: n }), H(t, n));
}
function K(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r && S.A.getChannelId(r) === t.id && w({ guildId: r, channelId: t.id, messageId: n });
}
function z(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === N.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.A.show({
                title: O.intl.string(O.t.Whhv4w),
                body: O.intl.formatToPlainString(O.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let $ = {};
function q(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let a = $[t] ?? 0;
    if (Date.now() - a < D) return;
    $[t] = Date.now();
    let s = S.A.getChannelId(),
        o = A.Ay.getCurrentSidebarChannelId(s),
        l = t === s || t === o;
    r && h.A.isConnected() && l && u.A.fetchMessages({ channelId: t, limit: N.EMb, jump: n });
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
    let n = S.A.getChannelId();
    if (null == n) return !1;
    u.A.fetchNewLocalMessages(n, N.EMb);
}
class X extends d.A {
    fetchMessages = w;
    loadSelectedChannelIfNecessary = V;
    stores = new Map().set(A.Ay, Y);
    actions = {
        APP_STATE_UPDATE: Q,
        OVERLAY_INITIALIZE: U,
        CONNECTION_RESUMED: G,
        CHANNEL_SELECT: F,
        VOICE_CHANNEL_SELECT: B,
        THREAD_CREATE: K,
        THREAD_LIST_SYNC: () => V(),
        CHANNEL_CREATE: K,
        CHANNEL_PRELOAD: W,
        GUILD_CREATE: () => V(),
        MESSAGE_END_EDIT: z,
        LOAD_MESSAGES_SUCCESS: q,
        UPLOAD_FAIL: Z,
        CHANNEL_DELETE: () => V(),
        THREAD_DELETE: () => V(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: j,
    };
    _initialize() {
        o.h.subscribe("CONNECTION_OPEN", U);
    }
    _terminate() {
        o.h.unsubscribe("CONNECTION_OPEN", U);
    }
}
let J = new X();
