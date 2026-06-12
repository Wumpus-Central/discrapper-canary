"use strict";
let i;
n.d(t, { A: () => X });
var r = n(506774),
    s = n(228366),
    a = n(157559),
    o = n(720149),
    l = n(56562),
    u = n(439372),
    c = n(292446),
    d = n(343328),
    _ = n(626584),
    h = n(617710),
    f = n(334465),
    p = n(976860),
    E = n(940382),
    m = n(95701),
    g = n(761640),
    A = n(734057),
    I = n(71393),
    T = n(222823),
    S = n(309010),
    y = n(967198),
    N = n(927813),
    v = n(202803),
    C = n(326337),
    R = n(652215),
    O = n(746080),
    b = n(375708);
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
        skipLocalFetch: f,
        avoidInitialScroll: p,
        fetchKey: E,
    } = e;
    if (null == n || (0, O.jq)(n)) return;
    let m = A.A.getChannel(n);
    if (m?.type === R.rbe.GUILD_STORE || (m?.type != null && R.kvI.GUILD_THREADS_ONLY.has(m.type))) return;
    let g = c.A.getOrCreate(n);
    g.some(v.$r) && (L.log("Found expired attachment link, clearing messages"), c.A.clear(n), (g = c.A.getOrCreate(n))),
        null != g.jumpTargetId &&
            null == s &&
            ((g = g.mutate({ jumpTargetId: null, jumped: !1, jumpType: l.US.ANIMATED })), c.A.commit(g)),
        null != g.focusTargetId && null == s && ((g = g.mutate({ focusTargetId: null })), c.A.commit(g));
    let S = a;
    if (
        (!u || h.A.isConnected() || g.loadingMore
            ? g.loadingMore || (g.ready && !g.cached)
                ? null != s && (S = !0)
                : (null == t || null != I.A.getGuild(t)) && (S = !0)
            : (S = !0),
        (0, d.A)(n) && T.Ay.hasUnread(n) && (S = !0),
        S)
    )
        if ((c.A.commit(g.mutate({ loadingMore: !0 })), null != s))
            o.A.jumpToMessage({
                channelId: n,
                messageId: s,
                flash: !0,
                isPreload: u,
                skipLocalFetch: f,
                jumpType: _,
                avoidInitialScroll: p,
            });
        else {
            if (
                m?.isThread() &&
                (function (e) {
                    if (T.Ay.hasOpenedThread(e) || (null == i && (i = r.w.get(P, {}) ?? {}), e in i)) return !1;
                    i[e] = Date.now();
                    let t = Date.now() - M;
                    for (let e in i) i[e] < t && delete i[e];
                    return r.w.set(P, i), !0;
                })(n)
            )
                return (
                    L.log(`Jumping to start of thread ${m.id}`),
                    o.A.fetchMessages({
                        channelId: n,
                        limit: (0, C.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: u,
                        skipLocalFetch: f,
                        avoidInitialScroll: p,
                        fetchKey: E,
                    })
                );
            if (!(m?.isThread() && T.Ay.hasTrackedUnread(m.id)) || g.ready)
                return o.A.fetchMessages({
                    channelId: n,
                    limit: (0, C.h)("MessageManager.initialFetch"),
                    isPreload: u,
                    skipLocalFetch: f,
                    jump: { jumpType: l.US.ANIMATED },
                    avoidInitialScroll: p,
                    fetchKey: E,
                });
            let e = T.Ay.getTrackedAckMessageId(m.id);
            return (
                L.log(`Jumping to most recent message in thread ${m.id} - ${e}`),
                o.A.fetchMessages({
                    channelId: n,
                    limit: (0, C.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: u,
                    skipLocalFetch: f,
                    avoidInitialScroll: p,
                    fetchKey: E,
                })
            );
        }
}
let M = 90 * N.A.Millis.DAY,
    P = "viewedThreadIds";
function x() {
    var e;
    let t,
        n = S.A.getChannelId();
    if (null == n) return;
    let i = A.A.getChannel(n);
    if (null == i) return;
    let r =
        ((e = i.id),
        (t = (0, f.B)((0, p.JK)().location.pathname, {
            path: R.BVt.CHANNEL(":guild", ":channel", ":message"),
            exact: !0,
        })),
        { channelId: e, messageId: t?.params?.message });
    w({ guildId: i.getGuildId(), channelId: i.id, messageId: r.messageId, avoidInitialScroll: null != r.messageId }),
        V(i.getGuildId(), i.id);
}
function k() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = A.A.getChannel(e);
    if (null == t) return;
    if (!(0, m.pQ)(t.type)) return void V(t.getGuildId(), t.id);
    let n = c.A.getOrCreate(e);
    (n.ready && n.hasFetched) || w({ guildId: t.getGuildId(), channelId: t.id }), V(t.getGuildId(), t.id);
}
function U(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r, skipMessageFetch: s } = e;
    if (s) return !1;
    w({ guildId: t, channelId: n, messageId: i, jumpType: r }), V(t, n);
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    w({ guildId: t, channelId: n });
}
function F(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r } = e;
    w({ guildId: t, channelId: n, messageId: i, jumpType: r });
}
function V(e, t) {
    let n = g.Ay.getCurrentSidebarChannelId(t);
    null == n || w({ guildId: e, channelId: n, messageId: g.Ay.getCurrentSidebarMessageId(t) });
}
function B() {
    let e = S.A.getChannelId(),
        t = y.A.getGuildId();
    if (null == t || null == e) return;
    let n = g.Ay.getSidebarState(e);
    n?.type !== E.PE.VIEW_CHANNEL && V(t, e);
}
function H(e) {
    let { guildId: t, channelId: n, context: i } = e;
    i === R.QCW && (w({ guildId: t, channelId: n }), V(t, n));
}
function j(e) {
    let { channel: t, messageId: n } = e,
        i = t.guild_id;
    null != i && S.A.getChannelId(i) === t.id && w({ guildId: i, channelId: t.id, messageId: n });
}
function Y(e) {
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
let W = {};
function K(e) {
    let { channelId: t, jump: n, isStale: i, isPreview: r = !1 } = e;
    if (r) return;
    let s = W[t] ?? 0;
    if (Date.now() - s < D) return;
    W[t] = Date.now();
    let a = S.A.getChannelId(),
        l = g.Ay.getCurrentSidebarChannelId(a),
        u = t === a || t === l;
    i &&
        h.A.isConnected() &&
        u &&
        o.A.fetchMessages({ channelId: t, limit: (0, C.h)("MessageManager.staleFetch"), jump: n });
}
function $(e) {
    let { channelId: t, messageId: n, reason: i, noSendFailed: r, shouldSendNotification: a } = e;
    null == n ||
        (!0 !== r &&
            s.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                channelId: t,
                messageId: n,
                reason: i ?? null,
                shouldNotify: !1,
            }));
}
function z() {
    let e = S.A.getChannelId();
    if (null == e) return !1;
    o.A.fetchNewLocalMessages(e, R.EMb);
}
class q extends u.A {
    fetchMessages = w;
    loadSelectedChannelIfNecessary = k;
    stores = new Map().set(g.Ay, B);
    actions = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: z,
        OVERLAY_INITIALIZE: x,
        CHANNEL_SELECT: U,
        VOICE_CHANNEL_SELECT: G,
        THREAD_CREATE: j,
        THREAD_LIST_SYNC: () => k(),
        CHANNEL_CREATE: j,
        CHANNEL_PRELOAD: H,
        GUILD_CREATE: () => k(),
        MESSAGE_END_EDIT: Y,
        LOAD_MESSAGES_SUCCESS: K,
        UPLOAD_FAIL: $,
        CHANNEL_DELETE: () => k(),
        THREAD_DELETE: () => k(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: F,
    };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", x);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", x);
    }
}
let X = new q();
