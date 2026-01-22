let r, i;
n.d(t, {
    A: () => Q,
}),
    n(896048);
var a = n(960488),
    s = n(506774),
    o = n(73153),
    l = n(157559),
    c = n(843472),
    u = n(56562),
    d = n(439372),
    f = n(128265),
    p = n(343328),
    _ = n(626584),
    h = n(142120),
    m = n(940382),
    g = n(95701),
    E = n(761640),
    b = n(734057),
    y = n(71393),
    O = n(222823),
    A = n(309010),
    v = n(967198),
    S = n(927813),
    I = n(202803),
    T = n(652215),
    C = n(746080),
    N = n(985018);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let w = new _.A("MessageManager");

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
    if (null == n || (0, C.jq)(n)) return;
    let _ = b.A.getChannel(n);
    if (
        (null == _ ? void 0 : _.type) === T.rbe.GUILD_STORE ||
        ((null == _ ? void 0 : _.type) != null && T.kvI.GUILD_THREADS_ONLY.has(_.type))
    )
        return;
    let m = f.A.getOrCreate(n);
    m.some(I.$r) && (w.log("Found expired attachment link, clearing messages"), f.A.clear(n), (m = f.A.getOrCreate(n))),
        null != m.jumpTargetId &&
            null == r &&
            ((m = m.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: u.US.ANIMATED,
            })),
            f.A.commit(m)),
        null != m.focusTargetId &&
            null == r &&
            ((m = m.mutate({
                focusTargetId: null,
            })),
            f.A.commit(m));
    let g = i;
    if (
        (!a || h.A.isConnected() || m.loadingMore
            ? m.loadingMore || (m.ready && !m.cached)
                ? null != r && (g = !0)
                : (null == t || null != y.A.getGuild(t)) && (g = !0)
            : (g = !0),
        (0, p.A)(n) && O.Ay.hasUnread(n) && (g = !0),
        g)
    )
        if (
            (f.A.commit(
                m.mutate({
                    loadingMore: !0,
                }),
            ),
            null != r)
        )
            c.A.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: a,
                skipLocalFetch: o,
                jumpType: s,
                avoidInitialScroll: l,
            });
        else {
            if ((null == _ ? void 0 : _.isThread()) && L(n))
                return (
                    w.log("Jumping to start of thread ".concat(_.id)),
                    c.A.fetchMessages({
                        channelId: n,
                        limit: T.EMb,
                        jump: {
                            messageId: n,
                            flash: !1,
                        },
                        isPreload: a,
                        skipLocalFetch: o,
                        avoidInitialScroll: l,
                        fetchKey: d,
                    })
                );
            if (!((null == _ ? void 0 : _.isThread()) && O.Ay.hasTrackedUnread(_.id)) || m.ready)
                return c.A.fetchMessages({
                    channelId: n,
                    limit: T.EMb,
                    isPreload: a,
                    skipLocalFetch: o,
                    jump: {
                        jumpType: u.US.ANIMATED,
                    },
                    avoidInitialScroll: l,
                    fetchKey: d,
                });
            let e = O.Ay.getTrackedAckMessageId(_.id);
            return (
                w.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)),
                c.A.fetchMessages({
                    channelId: n,
                    limit: T.EMb,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1,
                    },
                    isPreload: a,
                    skipLocalFetch: o,
                    avoidInitialScroll: l,
                    fetchKey: d,
                })
            );
        }
}
let D = 90 * S.A.Millis.DAY,
    x = "viewedThreadIds";

function L(e) {
    if (O.Ay.hasOpenedThread(e)) return !1;
    if (null == i) {
        var t;
        i = null != (t = s.w.get(x, {})) ? t : {};
    }
    if (e in i) return !1;
    i[e] = Date.now();
    let n = Date.now() - D;
    for (let e in i) i[e] < n && delete i[e];
    return s.w.set(x, i), !0;
}

function j(e) {
    var t;
    if (null != r && r.channelId === e) return r;
    let n = (0, a.B6)(location.pathname, {
        path: T.BVt.CHANNEL(":guild", ":channel", ":message"),
        exact: !0,
    });
    return {
        channelId: e,
        messageId: null == n || null == (t = n.params) ? void 0 : t.message,
    };
}

function M() {
    let e = A.A.getChannelId();
    if (null == e) return;
    let t = b.A.getChannel(e);
    if (null == t) return;
    let n = j(t.id);
    (r = void 0),
        P({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId,
        }),
        F(t.getGuildId(), t.id);
}

function k() {
    let e = A.A.getChannelId();
    if (null == e) return;
    let t = b.A.getChannel(e);
    if (null == t) return;
    if (!(0, g.pQ)(t.type)) return void F(t.getGuildId(), t.id);
    let n = f.A.getOrCreate(e);
    (n.ready && n.hasFetched) ||
        P({
            guildId: t.getGuildId(),
            channelId: t.id,
        }),
        F(t.getGuildId(), t.id);
}

function U(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: a, isInitialSetup: s } = e;
    if (s)
        return (
            null != n &&
                (r = {
                    channelId: n,
                    messageId: null != i ? i : void 0,
                    jumpType: a,
                }),
            !1
        );
    P({
        guildId: t,
        channelId: n,
        messageId: i,
        jumpType: a,
    }),
        F(t, n);
}

function G(e) {
    let { guildId: t, channelId: n } = e;
    P({
        guildId: t,
        channelId: n,
    });
}

function V(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    P({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i,
    });
}

function F(e, t) {
    let n = E.Ay.getCurrentSidebarChannelId(t);
    null == n ||
        P({
            guildId: e,
            channelId: n,
            messageId: E.Ay.getCurrentSidebarMessageId(t),
        });
}

function B() {
    let e = A.A.getChannelId(),
        t = v.A.getGuildId();
    if (null == t || null == e) return;
    let n = E.Ay.getSidebarState(e);
    (null == n ? void 0 : n.type) !== m.PE.VIEW_CHANNEL && F(t, e);
}

function H(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === T.QCW &&
        (P({
            guildId: t,
            channelId: n,
        }),
        F(t, n));
}

function Y(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        A.A.getChannelId(r) === t.id &&
        P({
            guildId: r,
            channelId: t.id,
            messageId: n,
        });
}

function W(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === T.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.A.show({
                title: N.intl.string(N.t.Whhv4w),
                body: N.intl.formatToPlainString(N.t.qoxdQB, {
                    retryAfterMinutes: Math.ceil(e / 60),
                }),
            });
    }
}
let K = {};

function z(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let s = null != (t = K[n]) ? t : 0;
    if (Date.now() - s < 10 * S.A.Millis.SECOND) return;
    K[n] = Date.now();
    let o = A.A.getChannelId(),
        l = E.Ay.getCurrentSidebarChannelId(o),
        u = n === o || n === l;
    i &&
        h.A.isConnected() &&
        u &&
        c.A.fetchMessages({
            channelId: n,
            limit: T.EMb,
            jump: r,
        });
}

function q(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null == n ||
        (!0 !== i &&
            o.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                channelId: t,
                messageId: n,
                reason: null != r ? r : null,
                shouldNotify: !1,
            }));
}

function X(e) {
    let { state: t } = e;
    if ("active" !== t) return !1;
    let n = A.A.getChannelId();
    if (null == n) return !1;
    c.A.fetchNewLocalMessages(n, T.EMb);
}
class Z extends d.A {
    _initialize() {
        o.h.subscribe("CONNECTION_OPEN", M);
    }
    _terminate() {
        o.h.unsubscribe("CONNECTION_OPEN", M);
    }
    constructor(...e) {
        super(...e),
            R(this, "fetchMessages", P),
            R(this, "loadSelectedChannelIfNecessary", k),
            R(this, "stores", new Map().set(E.Ay, B)),
            R(this, "actions", {
                APP_STATE_UPDATE: X,
                OVERLAY_INITIALIZE: M,
                CHANNEL_SELECT: U,
                VOICE_CHANNEL_SELECT: G,
                THREAD_CREATE: Y,
                THREAD_LIST_SYNC: () => k(),
                CHANNEL_CREATE: Y,
                CHANNEL_PRELOAD: H,
                GUILD_CREATE: () => k(),
                MESSAGE_END_EDIT: W,
                LOAD_MESSAGES_SUCCESS: z,
                UPLOAD_FAIL: q,
                CHANNEL_DELETE: () => k(),
                THREAD_DELETE: () => k(),
                CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: V,
            });
    }
}
let Q = new Z();
