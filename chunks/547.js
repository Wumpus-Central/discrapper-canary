"use strict";
let r;
n.d(t, { A: () => Q });
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
    p = n(334465),
    h = n(976860),
    m = n(940382),
    E = n(95701),
    g = n(761640),
    A = n(734057),
    I = n(71393),
    T = n(222823),
    S = n(309010),
    y = n(967198),
    v = n(927813),
    N = n(202803),
    C = n(662433),
    R = n(652215),
    O = n(746080),
    b = n(985018);
let D = 10 * v.A.Millis.SECOND,
    L = new _.A("MessageManager");
function w(e) {
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
    let h = A.A.getChannel(n);
    if (h?.type === R.rbe.GUILD_STORE || (h?.type != null && R.kvI.GUILD_THREADS_ONLY.has(h.type))) return;
    let m = c.A.getOrCreate(n);
    m.some(N.$r) && (L.log("Found expired attachment link, clearing messages"), c.A.clear(n), (m = c.A.getOrCreate(n))),
        null != m.jumpTargetId &&
            null == r &&
            ((m = m.mutate({ jumpTargetId: null, jumped: !1, jumpType: l.US.ANIMATED })), c.A.commit(m)),
        null != m.focusTargetId && null == r && ((m = m.mutate({ focusTargetId: null })), c.A.commit(m));
    let E = i;
    if (
        (!s || f.A.isConnected() || m.loadingMore
            ? m.loadingMore || (m.ready && !m.cached)
                ? null != r && (E = !0)
                : (null == t || null != I.A.getGuild(t)) && (E = !0)
            : (E = !0),
        (0, d.A)(n) && T.Ay.hasUnread(n) && (E = !0),
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
            if (h?.isThread() && P(n))
                return (
                    L.log(`Jumping to start of thread ${h.id}`),
                    o.A.fetchMessages({
                        channelId: n,
                        limit: (0, C.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: s,
                        skipLocalFetch: u,
                        avoidInitialScroll: _,
                        fetchKey: p,
                    })
                );
            if (!(h?.isThread() && T.Ay.hasTrackedUnread(h.id)) || m.ready)
                return o.A.fetchMessages({
                    channelId: n,
                    limit: (0, C.h)("MessageManager.initialFetch"),
                    isPreload: s,
                    skipLocalFetch: u,
                    jump: { jumpType: l.US.ANIMATED },
                    avoidInitialScroll: _,
                    fetchKey: p,
                });
            let e = T.Ay.getTrackedAckMessageId(h.id);
            return (
                L.log(`Jumping to most recent message in thread ${h.id} - ${e}`),
                o.A.fetchMessages({
                    channelId: n,
                    limit: (0, C.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: s,
                    skipLocalFetch: u,
                    avoidInitialScroll: _,
                    fetchKey: p,
                })
            );
        }
}
let M = 90 * v.A.Millis.DAY,
    x = "viewedThreadIds";
function P(e) {
    if (T.Ay.hasOpenedThread(e) || (null == r && (r = i.w.get(x, {}) ?? {}), e in r)) return !1;
    r[e] = Date.now();
    let t = Date.now() - M;
    for (let e in r) r[e] < t && delete r[e];
    return i.w.set(x, r), !0;
}
function k(e) {
    let t = (0, p.B)((0, h.JK)().location.pathname, {
        path: R.BVt.CHANNEL(":guild", ":channel", ":message"),
        exact: !0,
    });
    return { channelId: e, messageId: t?.params?.message };
}
function U() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = A.A.getChannel(e);
    if (null == t) return;
    let n = k(t.id);
    w({ guildId: t.getGuildId(), channelId: t.id, messageId: n.messageId, avoidInitialScroll: null != n.messageId }),
        H(t.getGuildId(), t.id);
}
function G() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = A.A.getChannel(e);
    if (null == t) return;
    if (!(0, E.pQ)(t.type)) return void H(t.getGuildId(), t.id);
    let n = c.A.getOrCreate(e);
    (n.ready && n.hasFetched) || w({ guildId: t.getGuildId(), channelId: t.id }), H(t.getGuildId(), t.id);
}
function F(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i, skipMessageFetch: s } = e;
    if (s) return !1;
    w({ guildId: t, channelId: n, messageId: r, jumpType: i }), H(t, n);
}
function V(e) {
    let { guildId: t, channelId: n } = e;
    w({ guildId: t, channelId: n });
}
function B(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    w({ guildId: t, channelId: n, messageId: r, jumpType: i });
}
function H(e, t) {
    let n = g.Ay.getCurrentSidebarChannelId(t);
    null == n || w({ guildId: e, channelId: n, messageId: g.Ay.getCurrentSidebarMessageId(t) });
}
function j() {
    let e = S.A.getChannelId(),
        t = y.A.getGuildId();
    if (null == t || null == e) return;
    let n = g.Ay.getSidebarState(e);
    n?.type !== m.PE.VIEW_CHANNEL && H(t, e);
}
function Y(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === R.QCW && (w({ guildId: t, channelId: n }), H(t, n));
}
function W(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r && S.A.getChannelId(r) === t.id && w({ guildId: r, channelId: t.id, messageId: n });
}
function K(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === R.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            a.A.show({
                title: b.intl.string(b.t.Whhv4w),
                body: b.intl.formatToPlainString(b.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let $ = {};
function z(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let s = $[t] ?? 0;
    if (Date.now() - s < D) return;
    $[t] = Date.now();
    let a = S.A.getChannelId(),
        l = g.Ay.getCurrentSidebarChannelId(a),
        u = t === a || t === l;
    r &&
        f.A.isConnected() &&
        u &&
        o.A.fetchMessages({ channelId: t, limit: (0, C.h)("MessageManager.staleFetch"), jump: n });
}
function q(e) {
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
function Z() {
    let e = S.A.getChannelId();
    if (null == e) return !1;
    o.A.fetchNewLocalMessages(e, R.EMb);
}
class X extends u.A {
    fetchMessages = w;
    loadSelectedChannelIfNecessary = G;
    stores = new Map().set(g.Ay, j);
    actions = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: Z,
        OVERLAY_INITIALIZE: U,
        CHANNEL_SELECT: F,
        VOICE_CHANNEL_SELECT: V,
        THREAD_CREATE: W,
        THREAD_LIST_SYNC: () => G(),
        CHANNEL_CREATE: W,
        CHANNEL_PRELOAD: Y,
        GUILD_CREATE: () => G(),
        MESSAGE_END_EDIT: K,
        LOAD_MESSAGES_SUCCESS: z,
        UPLOAD_FAIL: q,
        CHANNEL_DELETE: () => G(),
        THREAD_DELETE: () => G(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: B,
    };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", U);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", U);
    }
}
let Q = new X();
