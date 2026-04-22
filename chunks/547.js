"use strict";
let r;
n.d(t, { A: () => X });
var i = n(506774),
    s = n(73153),
    a = n(157559),
    o = n(843472),
    l = n(56562),
    u = n(439372),
    d = n(128265),
    c = n(343328),
    _ = n(626584),
    f = n(142120),
    E = n(334465),
    h = n(976860),
    p = n(940382),
    m = n(95701),
    g = n(761640),
    A = n(734057),
    I = n(71393),
    T = n(222823),
    S = n(309010),
    y = n(967198),
    N = n(927813),
    O = n(202803),
    R = n(326337),
    v = n(652215),
    C = n(746080),
    b = n(985018);
let D = 10 * N.A.Millis.SECOND,
    L = new _.A("MessageManager");
function w(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: s,
        forceFetch: a,
        isPreload: u,
        jumpType: _,
        skipLocalFetch: E,
        avoidInitialScroll: h,
        fetchKey: p,
    } = e;
    if (null == n || (0, C.jq)(n)) return;
    let m = A.A.getChannel(n);
    if (m?.type === v.rbe.GUILD_STORE || (m?.type != null && v.kvI.GUILD_THREADS_ONLY.has(m.type))) return;
    let g = d.A.getOrCreate(n);
    g.some(O.$r) && (L.log("Found expired attachment link, clearing messages"), d.A.clear(n), (g = d.A.getOrCreate(n))),
        null != g.jumpTargetId &&
            null == s &&
            ((g = g.mutate({ jumpTargetId: null, jumped: !1, jumpType: l.US.ANIMATED })), d.A.commit(g)),
        null != g.focusTargetId && null == s && ((g = g.mutate({ focusTargetId: null })), d.A.commit(g));
    let S = a;
    if (
        (!u || f.A.isConnected() || g.loadingMore
            ? g.loadingMore || (g.ready && !g.cached)
                ? null != s && (S = !0)
                : (null == t || null != I.A.getGuild(t)) && (S = !0)
            : (S = !0),
        (0, c.A)(n) && T.Ay.hasUnread(n) && (S = !0),
        S)
    )
        if ((d.A.commit(g.mutate({ loadingMore: !0 })), null != s))
            o.A.jumpToMessage({
                channelId: n,
                messageId: s,
                flash: !0,
                isPreload: u,
                skipLocalFetch: E,
                jumpType: _,
                avoidInitialScroll: h,
            });
        else {
            if (
                m?.isThread() &&
                (function (e) {
                    if (T.Ay.hasOpenedThread(e) || (null == r && (r = i.w.get(P, {}) ?? {}), e in r)) return !1;
                    r[e] = Date.now();
                    let t = Date.now() - M;
                    for (let e in r) r[e] < t && delete r[e];
                    return i.w.set(P, r), !0;
                })(n)
            )
                return (
                    L.log(`Jumping to start of thread ${m.id}`),
                    o.A.fetchMessages({
                        channelId: n,
                        limit: (0, R.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: u,
                        skipLocalFetch: E,
                        avoidInitialScroll: h,
                        fetchKey: p,
                    })
                );
            if (!(m?.isThread() && T.Ay.hasTrackedUnread(m.id)) || g.ready)
                return o.A.fetchMessages({
                    channelId: n,
                    limit: (0, R.h)("MessageManager.initialFetch"),
                    isPreload: u,
                    skipLocalFetch: E,
                    jump: { jumpType: l.US.ANIMATED },
                    avoidInitialScroll: h,
                    fetchKey: p,
                });
            let e = T.Ay.getTrackedAckMessageId(m.id);
            return (
                L.log(`Jumping to most recent message in thread ${m.id} - ${e}`),
                o.A.fetchMessages({
                    channelId: n,
                    limit: (0, R.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: u,
                    skipLocalFetch: E,
                    avoidInitialScroll: h,
                    fetchKey: p,
                })
            );
        }
}
let M = 90 * N.A.Millis.DAY,
    P = "viewedThreadIds";
function U() {
    var e;
    let t,
        n = S.A.getChannelId();
    if (null == n) return;
    let r = A.A.getChannel(n);
    if (null == r) return;
    let i =
        ((e = r.id),
        (t = (0, E.B)((0, h.JK)().location.pathname, {
            path: v.BVt.CHANNEL(":guild", ":channel", ":message"),
            exact: !0,
        })),
        { channelId: e, messageId: t?.params?.message });
    w({ guildId: r.getGuildId(), channelId: r.id, messageId: i.messageId, avoidInitialScroll: null != i.messageId }),
        F(r.getGuildId(), r.id);
}
function k() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = A.A.getChannel(e);
    if (null == t) return;
    if (!(0, m.pQ)(t.type)) return void F(t.getGuildId(), t.id);
    let n = d.A.getOrCreate(e);
    (n.ready && n.hasFetched) || w({ guildId: t.getGuildId(), channelId: t.id }), F(t.getGuildId(), t.id);
}
function x(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i, skipMessageFetch: s } = e;
    if (s) return !1;
    w({ guildId: t, channelId: n, messageId: r, jumpType: i }), F(t, n);
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    w({ guildId: t, channelId: n });
}
function V(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    w({ guildId: t, channelId: n, messageId: r, jumpType: i });
}
function F(e, t) {
    let n = g.Ay.getCurrentSidebarChannelId(t);
    null == n || w({ guildId: e, channelId: n, messageId: g.Ay.getCurrentSidebarMessageId(t) });
}
function B() {
    let e = S.A.getChannelId(),
        t = y.A.getGuildId();
    if (null == t || null == e) return;
    let n = g.Ay.getSidebarState(e);
    n?.type !== p.PE.VIEW_CHANNEL && F(t, e);
}
function H(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === v.QCW && (w({ guildId: t, channelId: n }), F(t, n));
}
function Y(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r && S.A.getChannelId(r) === t.id && w({ guildId: r, channelId: t.id, messageId: n });
}
function W(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === v.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            a.A.show({
                title: b.intl.string(b.t.Whhv4w),
                body: b.intl.formatToPlainString(b.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let j = {};
function K(e) {
    let { channelId: t, jump: n, isStale: r, isPreview: i = !1 } = e;
    if (i) return;
    let s = j[t] ?? 0;
    if (Date.now() - s < D) return;
    j[t] = Date.now();
    let a = S.A.getChannelId(),
        l = g.Ay.getCurrentSidebarChannelId(a),
        u = t === a || t === l;
    r &&
        f.A.isConnected() &&
        u &&
        o.A.fetchMessages({ channelId: t, limit: (0, R.h)("MessageManager.staleFetch"), jump: n });
}
function $(e) {
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
function z() {
    let e = S.A.getChannelId();
    if (null == e) return !1;
    o.A.fetchNewLocalMessages(e, v.EMb);
}
class q extends u.A {
    fetchMessages = w;
    loadSelectedChannelIfNecessary = k;
    stores = new Map().set(g.Ay, B);
    actions = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: z,
        OVERLAY_INITIALIZE: U,
        CHANNEL_SELECT: x,
        VOICE_CHANNEL_SELECT: G,
        THREAD_CREATE: Y,
        THREAD_LIST_SYNC: () => k(),
        CHANNEL_CREATE: Y,
        CHANNEL_PRELOAD: H,
        GUILD_CREATE: () => k(),
        MESSAGE_END_EDIT: W,
        LOAD_MESSAGES_SUCCESS: K,
        UPLOAD_FAIL: $,
        CHANNEL_DELETE: () => k(),
        THREAD_DELETE: () => k(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: V,
    };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", U);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", U);
    }
}
let X = new q();
