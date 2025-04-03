let r;
n.d(t, { Z: () => q }), n(47120);
var i = n(512969),
    o = n(259443),
    a = n(433517),
    s = n(570140),
    l = n(668781),
    c = n(904245),
    u = n(593472),
    d = n(147913),
    f = n(89892),
    _ = n(702321),
    p = n(38618),
    h = n(897473),
    m = n(131704),
    g = n(433355),
    E = n(592125),
    b = n(430824),
    y = n(306680),
    v = n(944486),
    O = n(914010),
    I = n(70956),
    S = n(198620),
    T = n(981631),
    N = n(176505),
    A = n(388032);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let R = new o.Yd('MessageManager');
function P(e) {
    let { guildId: t, channelId: n, messageId: r, forceFetch: i, isPreload: o, jumpType: a, skipLocalFetch: s, logFailures: l } = e;
    if (null == n) {
        l && R.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, N.AB)(n)) {
        l && R.log('Skipping fetch because channelId is a static route');
        return;
    }
    let d = E.Z.getChannel(n);
    if ((null == d ? void 0 : d.type) === T.d4z.GUILD_STORE || ((null == d ? void 0 : d.type) != null && T.TPd.GUILD_THREADS_ONLY.has(d.type))) {
        l && R.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let h = f.Z.getOrCreate(n);
    h.some(S.k5) && (R.log('Found expired attachment link, clearing messages'), f.Z.clear(n), (h = f.Z.getOrCreate(n))),
        null != h.jumpTargetId &&
            null == r &&
            ((h = h.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: u.SR.ANIMATED
            })),
            f.Z.commit(h)),
        null != h.focusTargetId && null == r && ((h = h.mutate({ focusTargetId: null })), f.Z.commit(h));
    let m = i;
    if ((!o || p.Z.isConnected() || h.loadingMore ? (h.loadingMore || (h.ready && !h.cached) ? (null != r ? (m = !0) : l && R.log('Skipping fetch because no other conditions matched')) : null == t || null != b.Z.getGuild(t) ? (m = !0) : l && R.log('Skipping fetch we are connected and have loaded messages')) : (m = !0), (0, _.Z)(n) && y.ZP.hasUnread(n) && (m = !0), m))
        if ((f.Z.commit(h.mutate({ loadingMore: !0 })), null != r))
            c.Z.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: o,
                skipLocalFetch: s,
                jumpType: a
            });
        else {
            if ((null == d ? void 0 : d.isThread()) && L(n))
                return (
                    R.log('Jumping to start of thread '.concat(d.id)),
                    c.Z.fetchMessages({
                        channelId: n,
                        limit: T.AQB,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: o,
                        skipLocalFetch: s
                    })
                );
            if (!((null == d ? void 0 : d.isThread()) && y.ZP.hasTrackedUnread(d.id)) || h.ready)
                return c.Z.fetchMessages({
                    channelId: n,
                    limit: T.AQB,
                    isPreload: o,
                    skipLocalFetch: s,
                    jump: { jumpType: u.SR.ANIMATED }
                });
            let e = y.ZP.getTrackedAckMessageId(d.id);
            return (
                R.log('Jumping to most recent message in thread '.concat(d.id, ' - ').concat(e)),
                c.Z.fetchMessages({
                    channelId: n,
                    limit: T.AQB,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: o,
                    skipLocalFetch: s
                })
            );
        }
}
let w = 90 * I.Z.Millis.DAY,
    D = 'viewedThreadIds';
function L(e) {
    if (y.ZP.hasOpenedThread(e)) return !1;
    if (null == r) {
        var t;
        r = null != (t = a.K.get(D, {})) ? t : {};
    }
    if (e in r) return !1;
    r[e] = Date.now();
    let n = Date.now() - w;
    for (let e in r) r[e] < n && delete r[e];
    return a.K.set(D, r), !0;
}
function x() {
    let e = v.Z.getChannelId();
    if (null != e) {
        let n = E.Z.getChannel(e);
        if (null != n) {
            var t;
            let e = (0, i.LX)(location.pathname, {
                path: T.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            P({
                guildId: n.getGuildId(),
                channelId: n.id,
                messageId: null == e || null == (t = e.params) ? void 0 : t.message
            }),
                G(n.getGuildId(), n.id);
        }
    }
}
function M() {
    let { isPreload: e, skipLocalFetch: t, logFailures: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = v.Z.getChannelId();
    if (null != r) {
        let i = E.Z.getChannel(r);
        null != i
            ? ((0, m.Qm)(i.type)
                  ? P({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    })
                  : n && R.log('Skipping fetch because the selected channel is not a text channel'),
              G(i.getGuildId(), i.id))
            : n && R.log('Skipping fetch because channel is null');
    } else n && R.log('Skipping fetch because there is no selected channel');
}
function k(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    P({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    }),
        G(t, n);
}
function j(e) {
    let { guildId: t, channelId: n } = e;
    P({
        guildId: t,
        channelId: n
    });
}
function U(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    P({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    });
}
function G(e, t) {
    let n = g.ZP.getCurrentSidebarChannelId(t);
    null != n &&
        P({
            guildId: e,
            channelId: n,
            messageId: g.ZP.getCurrentSidebarMessageId(t)
        });
}
function B() {
    let e = v.Z.getChannelId(),
        t = O.Z.getGuildId();
    if (null == t || null == e) return;
    let n = g.ZP.getSidebarState(e);
    (null == n ? void 0 : n.type) !== h.tI.VIEW_CHANNEL && G(t, e);
}
function F(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === T.e3s &&
        (P({
            guildId: t,
            channelId: n
        }),
        G(t, n));
}
function V(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        v.Z.getChannelId(r) === t.id &&
        P({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function Z(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === T.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: A.NW.string(A.t['Whhv4+']),
                body: A.NW.formatToPlainString(A.t.qoxdQE, { retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let H = {};
function W(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: o = !1 } = e;
    if (o) return;
    let a = null != (t = H[n]) ? t : 0;
    if (Date.now() - a < 10 * I.Z.Millis.SECOND) return;
    H[n] = Date.now();
    let s = v.Z.getChannelId(),
        l = g.ZP.getCurrentSidebarChannelId(s),
        u = n === s || n === l;
    i &&
        p.Z.isConnected() &&
        u &&
        c.Z.fetchMessages({
            channelId: n,
            limit: T.AQB,
            jump: r
        });
}
function Y(e) {
    let { channelId: t, messageRecord: n, reason: r } = e;
    null != n &&
        s.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null,
            shouldNotify: !1
        });
}
function K(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = v.Z.getChannelId();
    if (null == n) return !1;
    c.Z.fetchNewLocalMessages(n, T.AQB);
}
class z extends d.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', x);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', x);
    }
    constructor(...e) {
        super(...e),
            C(this, 'fetchMessages', P),
            C(this, 'loadSelectedChannelIfNecessary', M),
            C(this, 'stores', new Map().set(g.ZP, B)),
            C(this, 'actions', {
                APP_STATE_UPDATE: K,
                OVERLAY_INITIALIZE: x,
                CHANNEL_SELECT: k,
                VOICE_CHANNEL_SELECT: j,
                THREAD_CREATE: V,
                THREAD_LIST_SYNC: () => M(),
                CHANNEL_CREATE: V,
                CHANNEL_PRELOAD: F,
                GUILD_CREATE: () => M(),
                MESSAGE_END_EDIT: Z,
                LOAD_MESSAGES_SUCCESS: W,
                UPLOAD_FAIL: Y,
                CHANNEL_DELETE: () => M(),
                THREAD_DELETE: () => M(),
                CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: U
            });
    }
}
let q = new z();
