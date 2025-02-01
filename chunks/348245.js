let i;
n.d(t, { Z: () => z }), n(47120);
var r = n(512969),
    a = n(259443),
    s = n(433517),
    o = n(570140),
    l = n(668781),
    u = n(904245),
    c = n(593472),
    d = n(147913),
    f = n(89892),
    _ = n(702321),
    p = n(38618),
    h = n(897473),
    m = n(131704),
    g = n(433355),
    E = n(592125),
    v = n(430824),
    y = n(306680),
    I = n(944486),
    T = n(914010),
    b = n(70956),
    S = n(198620),
    A = n(981631),
    N = n(176505),
    C = n(388032);
function R(e, t, n) {
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
let O = new a.Yd('MessageManager');
function D(e) {
    let { guildId: t, channelId: n, messageId: i, forceFetch: r, isPreload: a, jumpType: s, skipLocalFetch: o, logFailures: l } = e;
    if (null == n) {
        l && O.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, N.AB)(n)) {
        l && O.log('Skipping fetch because channelId is a static route');
        return;
    }
    let d = E.Z.getChannel(n);
    if ((null == d ? void 0 : d.type) === A.d4z.GUILD_STORE || ((null == d ? void 0 : d.type) != null && A.TPd.GUILD_THREADS_ONLY.has(d.type))) {
        l && O.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let h = f.Z.getOrCreate(n);
    h.some(S.k5) && (O.log('Found expired attachment link, clearing messages'), f.Z.clear(n), (h = f.Z.getOrCreate(n))),
        null != h.jumpTargetId &&
            null == i &&
            ((h = h.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: c.SR.ANIMATED
            })),
            f.Z.commit(h)),
        null != h.focusTargetId && null == i && ((h = h.mutate({ focusTargetId: null })), f.Z.commit(h));
    let m = r;
    if ((!a || p.Z.isConnected() || h.loadingMore ? (h.loadingMore || (h.ready && !h.cached) ? (null != i ? (m = !0) : l && O.log('Skipping fetch because no other conditions matched')) : null == t || null != v.Z.getGuild(t) ? (m = !0) : l && O.log('Skipping fetch we are connected and have loaded messages')) : (m = !0), (0, _.Z)(n) && y.ZP.hasUnread(n) && (m = !0), m)) {
        if ((f.Z.commit(h.mutate({ loadingMore: !0 })), null != i))
            u.Z.jumpToMessage({
                channelId: n,
                messageId: i,
                flash: !0,
                isPreload: a,
                skipLocalFetch: o,
                jumpType: s
            });
        else {
            if ((null == d ? void 0 : d.isThread()) && P(n))
                return (
                    O.log('Jumping to start of thread '.concat(d.id)),
                    u.Z.fetchMessages({
                        channelId: n,
                        limit: A.AQB,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: a,
                        skipLocalFetch: o
                    })
                );
            if (!((null == d ? void 0 : d.isThread()) && y.ZP.hasTrackedUnread(d.id)) || h.ready)
                return u.Z.fetchMessages({
                    channelId: n,
                    limit: A.AQB,
                    isPreload: a,
                    skipLocalFetch: o,
                    jump: { jumpType: c.SR.ANIMATED }
                });
            {
                let e = y.ZP.getTrackedAckMessageId(d.id);
                return (
                    O.log('Jumping to most recent message in thread '.concat(d.id, ' - ').concat(e)),
                    u.Z.fetchMessages({
                        channelId: n,
                        limit: A.AQB,
                        jump: {
                            messageId: e,
                            flash: !1,
                            offset: 1
                        },
                        isPreload: a,
                        skipLocalFetch: o
                    })
                );
            }
        }
    }
}
let x = 90 * b.Z.Millis.DAY,
    L = 'viewedThreadIds';
function P(e) {
    if (y.ZP.hasOpenedThread(e)) return !1;
    if (null == i) {
        var t;
        i = null !== (t = s.K.get(L, {})) && void 0 !== t ? t : {};
    }
    if (e in i) return !1;
    i[e] = Date.now();
    let n = Date.now() - x;
    for (let e in i) i[e] < n && delete i[e];
    return s.K.set(L, i), !0;
}
function w() {
    let e = I.Z.getChannelId();
    if (null != e) {
        let n = E.Z.getChannel(e);
        if (null != n) {
            var t;
            let e = (0, r.LX)(location.pathname, {
                path: A.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            D({
                guildId: n.getGuildId(),
                channelId: n.id,
                messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
            }),
                G(n.getGuildId(), n.id);
        }
    }
}
function M() {
    let { isPreload: e, skipLocalFetch: t, logFailures: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = I.Z.getChannelId();
    if (null != i) {
        let r = E.Z.getChannel(i);
        null != r
            ? ((0, m.Qm)(r.type)
                  ? D({
                        guildId: r.getGuildId(),
                        channelId: r.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    })
                  : n && O.log('Skipping fetch because the selected channel is not a text channel'),
              G(r.getGuildId(), r.id))
            : n && O.log('Skipping fetch because channel is null');
    } else n && O.log('Skipping fetch because there is no selected channel');
}
function k(e) {
    let { guildId: t, channelId: n, messageId: i, jumpType: r } = e;
    D({
        guildId: t,
        channelId: n,
        messageId: i,
        jumpType: r
    }),
        G(t, n);
}
function U(e) {
    let { guildId: t, channelId: n } = e;
    D({
        guildId: t,
        channelId: n
    });
}
function G(e, t) {
    let n = g.ZP.getCurrentSidebarChannelId(t);
    null != n &&
        D({
            guildId: e,
            channelId: n,
            messageId: g.ZP.getCurrentSidebarMessageId(t)
        });
}
function B() {
    let e = I.Z.getChannelId(),
        t = T.Z.getGuildId();
    if (null == t || null == e) return;
    let n = g.ZP.getSidebarState(e);
    (null == n ? void 0 : n.type) !== h.tI.VIEW_CHANNEL && G(t, e);
}
function Z(e) {
    let { guildId: t, channelId: n, context: i } = e;
    i === A.e3s &&
        (D({
            guildId: t,
            channelId: n
        }),
        G(t, n));
}
function F(e) {
    let { channel: t, messageId: n } = e,
        i = t.guild_id;
    null != i &&
        I.Z.getChannelId(i) === t.id &&
        D({
            guildId: i,
            channelId: t.id,
            messageId: n
        });
}
function V(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === A.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: C.intl.string(C.t['Whhv4+']),
                body: C.intl.formatToPlainString(C.t.qoxdQE, { retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let j = {};
function H(e) {
    var t;
    let { channelId: n, jump: i, isStale: r, isPreview: a = !1 } = e;
    if (a) return;
    let s = null !== (t = j[n]) && void 0 !== t ? t : 0;
    if (Date.now() - s < 10 * b.Z.Millis.SECOND) return;
    j[n] = Date.now();
    let o = I.Z.getChannelId(),
        l = g.ZP.getCurrentSidebarChannelId(o),
        c = n === o || n === l;
    r &&
        p.Z.isConnected() &&
        c &&
        u.Z.fetchMessages({
            channelId: n,
            limit: A.AQB,
            jump: i
        });
}
function Y(e) {
    let { channelId: t, messageRecord: n, reason: i } = e;
    null != n &&
        o.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != i ? i : null,
            shouldNotify: !1
        });
}
function W(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = I.Z.getChannelId();
    if (null == n) return !1;
    u.Z.fetchNewLocalMessages(n, A.AQB);
}
class K extends d.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', w);
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', w);
    }
    constructor(...e) {
        super(...e),
            R(this, 'fetchMessages', D),
            R(this, 'loadSelectedChannelIfNecessary', M),
            R(this, 'stores', new Map().set(g.ZP, B)),
            R(this, 'actions', {
                APP_STATE_UPDATE: W,
                OVERLAY_INITIALIZE: w,
                CHANNEL_SELECT: k,
                VOICE_CHANNEL_SELECT: U,
                THREAD_CREATE: F,
                THREAD_LIST_SYNC: () => M(),
                CHANNEL_CREATE: F,
                CHANNEL_PRELOAD: Z,
                GUILD_CREATE: () => M(),
                MESSAGE_END_EDIT: V,
                LOAD_MESSAGES_SUCCESS: H,
                UPLOAD_FAIL: Y,
                CHANNEL_DELETE: () => M(),
                THREAD_DELETE: () => M()
            });
    }
}
let z = new K();
