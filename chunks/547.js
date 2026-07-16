"use strict";
let i;
n.d(t, { A: () => Z });
var r = n(506774),
    a = n(228366),
    s = n(157559),
    l = n(493336),
    o = n(56562),
    d = n(439372),
    c = n(292446),
    u = n(343328),
    _ = n(626584),
    E = n(617710),
    A = n(334465),
    h = n(976860),
    I = n(940382),
    f = n(95701),
    p = n(761640),
    T = n(734057),
    m = n(71393),
    g = n(568548),
    S = n(309010),
    N = n(967198),
    C = n(927813),
    R = n(202803),
    O = n(326337),
    L = n(652215),
    y = n(746080),
    D = n(375708);
let v = 10 * C.A.Millis.SECOND,
    b = new _.A("MessageManager");
function M(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: a,
        forceFetch: s,
        isPreload: d,
        jumpType: _,
        skipLocalFetch: A,
        avoidInitialScroll: h,
        fetchKey: I,
    } = e;
    if (null == n || (0, y.jq)(n)) return;
    let f = T.A.getChannel(n);
    if (f?.type === L.rbe.GUILD_STORE || (f?.type != null && L.kvI.GUILD_THREADS_ONLY.has(f.type))) return;
    let p = c.A.getOrCreate(n);
    p.some(R.$r) && (b.log("Found expired attachment link, clearing messages"), c.A.clear(n), (p = c.A.getOrCreate(n))),
        null != p.jumpTargetId &&
            null == a &&
            ((p = p.mutate({ jumpTargetId: null, jumped: !1, jumpType: o.vx.ANIMATED })), c.A.commit(p)),
        null != p.focusTargetId && null == a && ((p = p.mutate({ focusTargetId: null })), c.A.commit(p));
    let S = s;
    if (
        (!d || E.A.isConnected() || p.loadingMore
            ? p.loadingMore || (p.ready && !p.cached)
                ? null != a && (S = !0)
                : (null == t || null != m.A.getGuild(t)) && (S = !0)
            : (S = !0),
        (0, u.A)(n) && g.Ay.hasUnread(n) && (S = !0),
        S)
    )
        if ((c.A.commit(p.mutate({ loadingMore: !0 })), null != a))
            l.A.jumpToMessage({
                channelId: n,
                messageId: a,
                flash: !0,
                isPreload: d,
                skipLocalFetch: A,
                jumpType: _,
                avoidInitialScroll: h,
            });
        else {
            if (
                f?.isThread() &&
                (function (e) {
                    if (g.Ay.hasOpenedThread(e) || (null == i && (i = r.w.get(U, {}) ?? {}), e in i)) return !1;
                    i[e] = Date.now();
                    let t = Date.now() - P;
                    for (let e in i) i[e] < t && delete i[e];
                    return r.w.set(U, i), !0;
                })(n)
            )
                return (
                    b.log(`Jumping to start of thread ${f.id}`),
                    l.A.fetchMessages({
                        channelId: n,
                        limit: (0, O.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: d,
                        skipLocalFetch: A,
                        avoidInitialScroll: h,
                        fetchKey: I,
                    })
                );
            if (!(f?.isThread() && g.Ay.hasTrackedUnread(f.id)) || p.ready)
                return l.A.fetchMessages({
                    channelId: n,
                    limit: (0, O.h)("MessageManager.initialFetch"),
                    isPreload: d,
                    skipLocalFetch: A,
                    jump: { jumpType: o.vx.ANIMATED },
                    avoidInitialScroll: h,
                    fetchKey: I,
                });
            let e = g.Ay.getTrackedAckMessageId(f.id);
            return (
                b.log(`Jumping to most recent message in thread ${f.id} - ${e}`),
                l.A.fetchMessages({
                    channelId: n,
                    limit: (0, O.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: d,
                    skipLocalFetch: A,
                    avoidInitialScroll: h,
                    fetchKey: I,
                })
            );
        }
}
let P = 90 * C.A.Millis.DAY,
    U = "viewedThreadIds";
function w() {
    var e;
    let t,
        n = S.Ay.getChannelId();
    if (null == n) return;
    let i = T.A.getChannel(n);
    if (null == i) return;
    let r =
        ((e = i.id),
        (t = (0, A.B)((0, h.JK)().location.pathname, {
            path: L.BVt.CHANNEL(":guild", ":channel", ":message"),
            exact: !0,
        })),
        { channelId: e, messageId: t?.params?.message });
    M({ guildId: i.getGuildId(), channelId: i.id, messageId: r.messageId, avoidInitialScroll: null != r.messageId }),
        V(i.getGuildId(), i.id);
}
function G() {
    let e = S.Ay.getChannelId();
    if (null == e) return;
    let t = T.A.getChannel(e);
    if (null == t) return;
    if (!(0, f.pQ)(t.type)) return void V(t.getGuildId(), t.id);
    let n = c.A.getOrCreate(e);
    (n.ready && n.hasFetched) || M({ guildId: t.getGuildId(), channelId: t.id }), V(t.getGuildId(), t.id);
}
function x(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r, skipMessageFetch: a } = e;
    if (a) return !1;
    M({ guildId: t, channelId: n, messageId: i, jumpType: r }), V(t, n);
}
function k(e) {
    let { guildId: t, channelId: n } = e;
    M({ guildId: t, channelId: n });
}
function F(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r } = e;
    M({ guildId: t, channelId: n, messageId: i, jumpType: r });
}
function V(e, t) {
    let n = p.Ay.getCurrentSidebarChannelId(t);
    null == n || M({ guildId: e, channelId: n, messageId: p.Ay.getCurrentSidebarMessageId(t) });
}
function B() {
    let e = S.Ay.getChannelId(),
        t = N.A.getGuildId();
    if (null == t || null == e) return;
    let n = p.Ay.getSidebarState(e);
    n?.type !== I.PE.VIEW_CHANNEL && V(t, e);
}
function H(e) {
    let { guildId: t, channelId: n, context: i } = e;
    i === L.QCW && (M({ guildId: t, channelId: n }), V(t, n));
}
function j(e) {
    let { channel: t, messageId: n } = e,
        i = t.guild_id;
    null != i && S.Ay.getChannelId(i) === t.id && M({ guildId: i, channelId: t.id, messageId: n });
}
function W(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === L.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            s.A.show({
                title: D.intl.string(D.t.Whhv4w),
                body: D.intl.formatToPlainString(D.t.qoxdQB, { retryAfterMinutes: Math.ceil(e / 60) }),
            });
    }
}
let Y = {};
function K(e) {
    let { channelId: t, jump: n, isStale: i, isPreview: r = !1 } = e;
    if (r) return;
    let a = Y[t] ?? 0;
    if (Date.now() - a < v) return;
    Y[t] = Date.now();
    let s = S.Ay.getChannelId(),
        o = p.Ay.getCurrentSidebarChannelId(s),
        d = t === s || t === o;
    i &&
        E.A.isConnected() &&
        d &&
        l.A.fetchMessages({ channelId: t, limit: (0, O.h)("MessageManager.staleFetch"), jump: n });
}
function $(e) {
    let { channelId: t, messageId: n, reason: i, noSendFailed: r, shouldSendNotification: s } = e;
    null == n ||
        (!0 !== r &&
            a.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                channelId: t,
                messageId: n,
                reason: i ?? null,
                shouldNotify: !1,
            }));
}
function z() {
    let e = S.Ay.getChannelId();
    if (null == e) return !1;
    l.A.fetchNewLocalMessages(e, L.EMb);
}
class q extends d.A {
    fetchMessages = M;
    loadSelectedChannelIfNecessary = G;
    stores = new Map().set(p.Ay, B);
    actions = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: z,
        OVERLAY_INITIALIZE: w,
        CHANNEL_SELECT: x,
        VOICE_CHANNEL_SELECT: k,
        THREAD_CREATE: j,
        THREAD_LIST_SYNC: () => G(),
        CHANNEL_CREATE: j,
        CHANNEL_PRELOAD: H,
        GUILD_CREATE: () => G(),
        MESSAGE_END_EDIT: W,
        LOAD_MESSAGES_SUCCESS: K,
        UPLOAD_FAIL: $,
        CHANNEL_DELETE: () => G(),
        THREAD_DELETE: () => G(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: F,
    };
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", w);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", w);
    }
}
let Z = new q();
