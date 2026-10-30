let i;
n.d(t, { A: () => Z });
var r = n(506774),
    a = n(73153),
    s = n(157559),
    l = n(148494),
    o = n(56562),
    d = n(439372),
    c = n(868207);
n(198052);
var u = n(343328),
    _ = n(626584),
    E = n(403010),
    A = n(334465),
    h = n(976860),
    f = n(940382),
    I = n(95701),
    p = n(358047),
    T = n(734057),
    m = n(71393),
    g = n(573163),
    S = n(309010),
    N = n(967198),
    C = n(927813),
    O = n(679164),
    R = n(326337),
    L = n(652215),
    y = n(746080),
    D = n(105292);
let v = 10 * C.A.Millis.SECOND,
    b = new _.A("MessageManager");
function P(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: a,
        forceFetch: s,
        isPreload: d,
        jumpType: _,
        skipLocalFetch: A,
        avoidInitialScroll: h,
        fetchKey: f,
    } = e;
    if (null == n || (0, y.jq)(n)) return;
    let I = T.A.getChannel(n);
    if (I?.type === L.rbe.GUILD_STORE || (I?.type != null && L.kvI.GUILD_THREADS_ONLY.has(I.type))) return;
    let p = c.A.getOrCreate(n);
    (p.some(O.$r) &&
        (b.log("Found expired attachment link, clearing messages"), c.A.clear(n), (p = c.A.getOrCreate(n))),
        null != p.jumpTargetId &&
            null == a &&
            ((p = p.mutate({ jumpTargetId: null, jumped: !1, jumpType: o.vx.ANIMATED })), c.A.commit(p)),
        null != p.focusTargetId && null == a && ((p = p.mutate({ focusTargetId: null })), c.A.commit(p)));
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
                I?.isThread() &&
                (function (e) {
                    if (g.Ay.hasOpenedThread(e) || (null == i && (i = r.w.get(U, {}) ?? {}), e in i)) return !1;
                    i[e] = Date.now();
                    let t = Date.now() - M;
                    for (let e in i) i[e] < t && delete i[e];
                    return (r.w.set(U, i), !0);
                })(n)
            )
                return (
                    b.log(`Jumping to start of thread ${I.id}`),
                    l.A.fetchMessages({
                        channelId: n,
                        limit: (0, R.h)("MessageManager.threadStart"),
                        jump: { messageId: n, flash: !1 },
                        isPreload: d,
                        skipLocalFetch: A,
                        avoidInitialScroll: h,
                        fetchKey: f,
                    })
                );
            if (!(I?.isThread() && g.Ay.hasTrackedUnread(I.id)) || p.ready)
                return l.A.fetchMessages({
                    channelId: n,
                    limit: (0, R.h)("MessageManager.initialFetch"),
                    isPreload: d,
                    skipLocalFetch: A,
                    jump: { jumpType: o.vx.ANIMATED },
                    avoidInitialScroll: h,
                    fetchKey: f,
                });
            let e = g.Ay.getTrackedAckMessageId(I.id);
            return (
                b.log(`Jumping to most recent message in thread ${I.id} - ${e}`),
                l.A.fetchMessages({
                    channelId: n,
                    limit: (0, R.h)("MessageManager.threadUnread"),
                    jump: { messageId: e, flash: !1, offset: 1 },
                    isPreload: d,
                    skipLocalFetch: A,
                    avoidInitialScroll: h,
                    fetchKey: f,
                })
            );
        }
}
let M = 90 * C.A.Millis.DAY,
    U = "viewedThreadIds";
function w(e) {
    let t = (0, A.B)((0, h.JK)().location.pathname, {
        path: L.BVt.CHANNEL(":guild", ":channel", ":message"),
        exact: !0,
    });
    return { channelId: e, messageId: t?.params?.message };
}
function G() {
    let e = S.Ay.getChannelId();
    if (null == e) return;
    let t = T.A.getChannel(e);
    if (null == t) return;
    let n = w(t.id);
    (P({ guildId: t.getGuildId(), channelId: t.id, messageId: n.messageId, avoidInitialScroll: null != n.messageId }),
        V(t.getGuildId(), t.id));
}
function x() {
    let e = S.Ay.getChannelId();
    if (null == e) return;
    let t = T.A.getChannel(e);
    if (null == t) return;
    if (!(0, I.pQ)(t.type)) return void V(t.getGuildId(), t.id);
    let n = c.A.getOrCreate(e);
    ((n.ready && n.hasFetched) || P({ guildId: t.getGuildId(), channelId: t.id, messageId: w(t.id).messageId }),
        V(t.getGuildId(), t.id));
}
function k(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r, skipMessageFetch: a } = e;
    if (a) return !1;
    (P({ guildId: t, channelId: n, messageId: i, jumpType: r }), V(t, n));
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    P({ guildId: t, channelId: n });
}
function B(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r } = e;
    P({ guildId: t, channelId: n, messageId: i, jumpType: r });
}
function V(e, t) {
    let n = p.Ay.getCurrentSidebarChannelId(t);
    null == n || P({ guildId: e, channelId: n, messageId: p.Ay.getCurrentSidebarMessageId(t) });
}
function H() {
    let e = S.Ay.getChannelId(),
        t = N.A.getGuildId();
    if (null == t || null == e) return;
    let n = p.Ay.getSidebarState(e);
    (n?.type !== f.PE.VIEW_CHANNEL || n.channelId !== e) && V(t, e);
}
function j(e) {
    let { guildId: t, channelId: n, context: i } = e;
    i === L.QCW && (P({ guildId: t, channelId: n }), V(t, n));
}
function W(e) {
    let { channel: t, messageId: n } = e,
        i = t.guild_id;
    null != i && S.Ay.getChannelId(i) === t.id && P({ guildId: i, channelId: t.id, messageId: n });
}
function Y(e) {
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
let K = {};
function $(e) {
    let { channelId: t, jump: n, isStale: i, isPreview: r = !1 } = e;
    if (r) return;
    let a = K[t] ?? 0;
    if (Date.now() - a < v) return;
    K[t] = Date.now();
    let s = S.Ay.getChannelId(),
        o = p.Ay.getCurrentSidebarChannelId(s),
        d = t === s || t === o;
    i &&
        E.A.isConnected() &&
        d &&
        l.A.fetchMessages({ channelId: t, limit: (0, R.h)("MessageManager.staleFetch"), jump: n });
}
function z(e) {
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
function X() {
    let e = S.Ay.getChannelId();
    if (null == e) return !1;
    l.A.fetchNewLocalMessages(e, L.EMb);
}
class q extends d.A {
    fetchMessages = P;
    loadSelectedChannelIfNecessary = x;
    stores = new Map().set(p.Ay, H);
    actions = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: X,
        OVERLAY_INITIALIZE: G,
        CHANNEL_SELECT: k,
        VOICE_CHANNEL_SELECT: F,
        THREAD_CREATE: W,
        THREAD_LIST_SYNC: () => x(),
        CHANNEL_CREATE: W,
        CHANNEL_PRELOAD: j,
        GUILD_CREATE: () => x(),
        MESSAGE_END_EDIT: Y,
        LOAD_MESSAGES_SUCCESS: $,
        UPLOAD_FAIL: z,
        CHANNEL_DELETE: () => x(),
        THREAD_DELETE: () => x(),
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: B,
    };
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", G);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", G);
    }
}
let Z = new q();
