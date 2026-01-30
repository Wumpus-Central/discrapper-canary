let r, i;
n.d(t, {
    A: () => ee,
}),
    n(896048);
var a = n(960488),
    o = n(506774),
    s = n(73153),
    l = n(157559),
    c = n(843472),
    u = n(56562),
    d = n(439372),
    f = n(128265),
    p = n(343328),
    _ = n(626584),
    h = n(142120),
    m = n(491001),
    g = n(940382),
    E = n(95701),
    y = n(761640),
    b = n(734057),
    O = n(71393),
    v = n(222823),
    A = n(309010),
    I = n(967198),
    S = n(927813),
    T = n(202803),
    C = n(652215),
    N = n(746080),
    w = n(985018);

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
let P = 10 * S.A.Millis.SECOND,
    D = new _.A("MessageManager");

function L(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: r,
        forceFetch: i,
        isPreload: a,
        jumpType: o,
        skipLocalFetch: s,
        avoidInitialScroll: l,
        fetchKey: d,
    } = e;
    if (null == n || (0, N.jq)(n)) return;
    let _ = b.A.getChannel(n);
    if (
        (null == _ ? void 0 : _.type) === C.rbe.GUILD_STORE ||
        ((null == _ ? void 0 : _.type) != null && C.kvI.GUILD_THREADS_ONLY.has(_.type))
    )
        return;
    let m = f.A.getOrCreate(n);
    m.some(T.$r) && (D.log("Found expired attachment link, clearing messages"), f.A.clear(n), (m = f.A.getOrCreate(n))),
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
                : (null == t || null != O.A.getGuild(t)) && (g = !0)
            : (g = !0),
        (0, p.A)(n) && v.Ay.hasUnread(n) && (g = !0),
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
                skipLocalFetch: s,
                jumpType: o,
                avoidInitialScroll: l,
            });
        else {
            if ((null == _ ? void 0 : _.isThread()) && j(n))
                return (
                    D.log("Jumping to start of thread ".concat(_.id)),
                    c.A.fetchMessages({
                        channelId: n,
                        limit: C.EMb,
                        jump: {
                            messageId: n,
                            flash: !1,
                        },
                        isPreload: a,
                        skipLocalFetch: s,
                        avoidInitialScroll: l,
                        fetchKey: d,
                    })
                );
            if (!((null == _ ? void 0 : _.isThread()) && v.Ay.hasTrackedUnread(_.id)) || m.ready)
                return c.A.fetchMessages({
                    channelId: n,
                    limit: C.EMb,
                    isPreload: a,
                    skipLocalFetch: s,
                    jump: {
                        jumpType: u.US.ANIMATED,
                    },
                    avoidInitialScroll: l,
                    fetchKey: d,
                });
            let e = v.Ay.getTrackedAckMessageId(_.id);
            return (
                D.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)),
                c.A.fetchMessages({
                    channelId: n,
                    limit: C.EMb,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1,
                    },
                    isPreload: a,
                    skipLocalFetch: s,
                    avoidInitialScroll: l,
                    fetchKey: d,
                })
            );
        }
}
let x = 90 * S.A.Millis.DAY,
    M = "viewedThreadIds";

function j(e) {
    if (v.Ay.hasOpenedThread(e)) return !1;
    if (null == i) {
        var t;
        i = null != (t = o.w.get(M, {})) ? t : {};
    }
    if (e in i) return !1;
    i[e] = Date.now();
    let n = Date.now() - x;
    for (let e in i) i[e] < n && delete i[e];
    return o.w.set(M, i), !0;
}

function k(e) {
    var t;
    if (null != r && r.channelId === e) return r;
    let n = (0, a.B6)(location.pathname, {
        path: C.BVt.CHANNEL(":guild", ":channel", ":message"),
        exact: !0,
    });
    return {
        channelId: e,
        messageId: null == n || null == (t = n.params) ? void 0 : t.message,
    };
}

function U() {
    let e = A.A.getChannelId();
    if (null == e) return;
    let t = b.A.getChannel(e);
    if (null == t) return;
    let n = k(t.id);
    (r = void 0),
        L({
            guildId: t.getGuildId(),
            channelId: t.id,
            messageId: n.messageId,
            jumpType: n.jumpType,
            avoidInitialScroll: null != n.messageId,
        }),
        Y(t.getGuildId(), t.id);
}

function G() {
    if (!(0, m.K)()) return;
    let e = A.A.getChannelId();
    if (null == e) return;
    let t = b.A.getChannel(e);
    null != t &&
        L({
            guildId: t.getGuildId(),
            channelId: t.id,
        });
}

function F() {
    let e = A.A.getChannelId();
    if (null == e) return;
    let t = b.A.getChannel(e);
    if (null == t) return;
    if (!(0, E.pQ)(t.type)) return void Y(t.getGuildId(), t.id);
    let n = f.A.getOrCreate(e);
    (n.ready && n.hasFetched) ||
        L({
            guildId: t.getGuildId(),
            channelId: t.id,
        }),
        Y(t.getGuildId(), t.id);
}

function V(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: a, isInitialSetup: o } = e;
    if (o)
        return (
            null != n &&
                (r = {
                    channelId: n,
                    messageId: null != i ? i : void 0,
                    jumpType: a,
                }),
            !1
        );
    L({
        guildId: t,
        channelId: n,
        messageId: i,
        jumpType: a,
    }),
        Y(t, n);
}

function B(e) {
    let { guildId: t, channelId: n } = e;
    L({
        guildId: t,
        channelId: n,
    });
}

function H(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    L({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i,
    });
}

function Y(e, t) {
    let n = y.Ay.getCurrentSidebarChannelId(t);
    null == n ||
        L({
            guildId: e,
            channelId: n,
            messageId: y.Ay.getCurrentSidebarMessageId(t),
        });
}

function W() {
    let e = A.A.getChannelId(),
        t = I.A.getGuildId();
    if (null == t || null == e) return;
    let n = y.Ay.getSidebarState(e);
    (null == n ? void 0 : n.type) !== g.PE.VIEW_CHANNEL && Y(t, e);
}

function K(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === C.QCW &&
        (L({
            guildId: t,
            channelId: n,
        }),
        Y(t, n));
}

function z(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        A.A.getChannelId(r) === t.id &&
        L({
            guildId: r,
            channelId: t.id,
            messageId: n,
        });
}

function q(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === C.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.A.show({
                title: w.intl.string(w.t.Whhv4w),
                body: w.intl.formatToPlainString(w.t.qoxdQB, {
                    retryAfterMinutes: Math.ceil(e / 60),
                }),
            });
    }
}
let Z = {};

function Q(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let o = null != (t = Z[n]) ? t : 0;
    if (Date.now() - o < P) return;
    Z[n] = Date.now();
    let s = A.A.getChannelId(),
        l = y.Ay.getCurrentSidebarChannelId(s),
        u = n === s || n === l;
    i &&
        h.A.isConnected() &&
        u &&
        c.A.fetchMessages({
            channelId: n,
            limit: C.EMb,
            jump: r,
        });
}

function X(e) {
    let { channelId: t, messageId: n, reason: r, noSendFailed: i, shouldSendNotification: a } = e;
    null == n ||
        (!0 !== i &&
            s.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                channelId: t,
                messageId: n,
                reason: null != r ? r : null,
                shouldNotify: !1,
            }));
}

function J(e) {
    let { state: t } = e;
    if ("active" !== t) return !1;
    let n = A.A.getChannelId();
    if (null == n) return !1;
    c.A.fetchNewLocalMessages(n, C.EMb);
}
class $ extends d.A {
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", U);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", U);
    }
    constructor(...e) {
        super(...e),
            R(this, "fetchMessages", L),
            R(this, "loadSelectedChannelIfNecessary", F),
            R(this, "stores", new Map().set(y.Ay, W)),
            R(this, "actions", {
                APP_STATE_UPDATE: J,
                OVERLAY_INITIALIZE: U,
                CONNECTION_RESUMED: G,
                CHANNEL_SELECT: V,
                VOICE_CHANNEL_SELECT: B,
                THREAD_CREATE: z,
                THREAD_LIST_SYNC: () => F(),
                CHANNEL_CREATE: z,
                CHANNEL_PRELOAD: K,
                GUILD_CREATE: () => F(),
                MESSAGE_END_EDIT: q,
                LOAD_MESSAGES_SUCCESS: Q,
                UPLOAD_FAIL: X,
                CHANNEL_DELETE: () => F(),
                THREAD_DELETE: () => F(),
                CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: H,
            });
    }
}
let ee = new $();
