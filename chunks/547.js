"use strict";
let i;
n.d(t, { A: () => X });
var r = n(506774),
    s = n(228366),
    a = n(157559),
    o = n(720149),
    l = n(56562),
    d = n(439372),
    _ = n(292446),
    u = n(343328),
    c = n(626584),
    E = n(366853),
    h = n(334465),
    m = n(976860),
    f = n(940382),
    g = n(95701),
    p = n(761640),
    A = n(734057),
    I = n(71393),
    T = n(222823),
    S = n(309010),
    N = n(967198),
    C = n(927813),
    R = n(202803),
    O = n(326337),
    y = n(652215),
    v = n(746080),
    D = n(985018);
let L = 10 * C.A.Millis.SECOND,
    b = new c.A("MessageManager");
function w(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: s,
        forceFetch: a,
        isPreload: d,
        jumpType: c,
        skipLocalFetch: h,
        avoidInitialScroll: m,
        fetchKey: f,
    } = e;
    if (null == n || (0, v.jq)(n)) return;
    let g = A.A.getChannel(n);
    if (g?.type === y.rbe.GUILD_STORE || (g?.type != null && y.kvI.GUILD_THREADS_ONLY.has(g.type))) return;
    let p = _.A.getOrCreate(n);
    p.some(R.$r) && (b.log("Found expired attachment link, clearing messages"), _.A.clear(n), (p = _.A.getOrCreate(n))),
        null != p.jumpTargetId &&
            null == s &&
            ((p = p.mutate({ jumpTargetId: null, jumped: !1, jumpType: l.US.ANIMATED })), _.A.commit(p)),
        null != p.focusTargetId && null == s && ((p = p.mutate({ focusTargetId: null })), _.A.commit(p));
    let S = a;
    if (
        (!d || E.A.isConnected() || p.loadingMore
            ? p.loadingMore || (p.ready && !p.cached)
                ? null != s && (S = !0)
                : (null == t || null != I.A.getGuild(t)) && (S = !0)
            : (S = !0),
        (0, u.A)(n) && T.Ay.hasUnread(n) && (S = !0),
        S)
    )
        if ((_.A.commit(p.mutate({ loadingMore: !0 })), null != s))
            o.A.jumpToMessage({
                channelId: n,
                messageId: s,
                flash: !0,
                isPreload: d,
                skipLocalFetch: h,
                jumpType: c,
                avoidInitialScroll: m,
            });
        else {
            if (
                g?.isThread() &&
                (function (e) {
                    if (T.Ay.hasOpenedThread(e) || (null == i && (i = r.w.get(k, {}) ?? {}), e in i)) return !1;
                    i[e] = Date.now();
                    let t = Date.now() - P;
                    for (let e in i) i[e] < t && delete i[e];
                    return r.w.set(k, i), !0;
                })(n)
            )
                return (
                    b.log(`Jumping to start of thread ${g.id}`),
                    o.A.fetchMessages({
                        channelId: n,
                        limit: (0, O.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: d,
                        skipLocalFetch: h,
                        avoidInitialScroll: m,
                        fetchKey: f,
                    })
                );
            if (!(g?.isThread() && T.Ay.hasTrackedUnread(g.id)) || p.ready)
                return o.A.fetchMessages({
                    channelId: n,
                    limit: (0, O.h)("MessageManager.initialFetch"),
                    isPreload: d,
                    skipLocalFetch: h,
                    jump: { jumpType: l.US.ANIMATED },
                    avoidInitialScroll: m,
                    fetchKey: f,
                });
            let e = T.Ay.getTrackedAckMessageId(g.id);
            return (
                b.log(`Jumping to most recent message in thread ${g.id} - ${e}`),
                o.A.fetchMessages({
                    channelId: n,
                    limit: (0, O.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: d,
                    skipLocalFetch: h,
                    avoidInitialScroll: m,
                    fetchKey: f,
                })
            );
        }
}
let P = 90 * C.A.Millis.DAY,
    k = "viewedThreadIds";
function M() {
    var e;
    let t,
        n = S.A.getChannelId();
    if (null == n) return;
    let i = A.A.getChannel(n);
    if (null == i) return;
    let r =
        ((e = i.id),
        (t = (0, h.B)((0, m.JK)().location.pathname, {
            path: y.BVt.CHANNEL(":guild", ":channel", ":message"),
            exact: !0,
        })),
        { channelId: e, messageId: t?.params?.message });
    w({ guildId: i.getGuildId(), channelId: i.id, messageId: r.messageId, avoidInitialScroll: null != r.messageId }),
        F(i.getGuildId(), i.id);
}
function U() {
    let e = S.A.getChannelId();
    if (null == e) return;
    let t = A.A.getChannel(e);
    if (null == t) return;
    if (!(0, g.pQ)(t.type)) return void F(t.getGuildId(), t.id);
    let n = _.A.getOrCreate(e);
    (n.ready && n.hasFetched) || w({ guildId: t.getGuildId(), channelId: t.id }), F(t.getGuildId(), t.id);
}
function x(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r, skipMessageFetch: s } = e;
    if (s) return !1;
    w({ guildId: t, channelId: n, messageId: i, jumpType: r }), F(t, n);
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    w({ guildId: t, channelId: n });
}
function V(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r } = e;
    w({ guildId: t, channelId: n, messageId: i, jumpType: r });
}
function F(e, t) {
    let n = p.Ay.getCurrentSidebarChannelId(t);
    null == n || w({ guildId: e, channelId: n, messageId: p.Ay.getCurrentSidebarMessageId(t) });
}
function B() {
    let e = S.A.getChannelId(),
        t = N.A.getGuildId();
    if (null == t || null == e) return;
    let n = p.Ay.getSidebarState(e);
    n?.type !== f.PE.VIEW_CHANNEL && F(t, e);
}
function H(e) {
    let { guildId: t, channelId: n, context: i } = e;
    i === y.QCW && (w({ guildId: t, channelId: n }), F(t, n));
}
function j(e) {
    let { channel: t, messageId: n } = e,
        i = t.guild_id;
    null != i && S.A.getChannelId(i) === t.id && w({ guildId: i, channelId: t.id, messageId: n });
}
function W(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === y.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            a.A.show({
                title: D.intl.string(D.t.Whhv4w),
                body: D.intl.formatToPlainString(D.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let Y = {};
function K(e) {
    let { channelId: t, jump: n, isStale: i, isPreview: r = !1 } = e;
    if (r) return;
    let s = Y[t] ?? 0;
    if (Date.now() - s < L) return;
    Y[t] = Date.now();
    let a = S.A.getChannelId(),
        l = p.Ay.getCurrentSidebarChannelId(a),
        d = t === a || t === l;
    i &&
        E.A.isConnected() &&
        d &&
        o.A.fetchMessages({ channelId: t, limit: (0, O.h)("MessageManager.staleFetch"), jump: n });
}
function z(e) {
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
function $() {
    let e = S.A.getChannelId();
    if (null == e) return !1;
    o.A.fetchNewLocalMessages(e, y.EMb);
}
class q extends d.A {
    fetchMessages = w;
    loadSelectedChannelIfNecessary = U;
    stores = new Map().set(p.Ay, B);
    actions = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: $,
        OVERLAY_INITIALIZE: M,
        CHANNEL_SELECT: x,
        VOICE_CHANNEL_SELECT: G,
        THREAD_CREATE: j,
        THREAD_LIST_SYNC: () => U(),
        CHANNEL_CREATE: j,
        CHANNEL_PRELOAD: H,
        GUILD_CREATE: () => U(),
        MESSAGE_END_EDIT: W,
        LOAD_MESSAGES_SUCCESS: K,
        UPLOAD_FAIL: z,
        CHANNEL_DELETE: () => U(),
        THREAD_DELETE: () => U(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: V,
    };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", M);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", M);
    }
}
let X = new q();
