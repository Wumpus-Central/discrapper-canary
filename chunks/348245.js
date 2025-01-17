let i;
var a = r(47120);
var s = r(512969),
    o = r(259443),
    l = r(433517),
    u = r(570140),
    c = r(668781),
    d = r(904245),
    f = r(593472),
    _ = r(147913),
    h = r(89892),
    p = r(702321),
    m = r(38618),
    g = r(897473),
    E = r(131704),
    v = r(433355),
    I = r(592125),
    T = r(430824),
    b = r(306680),
    y = r(944486),
    S = r(914010),
    A = r(70956),
    N = r(198620),
    C = r(981631),
    R = r(176505),
    O = r(388032);
function D(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let L = new o.Yd('MessageManager');
function x(e) {
    let { guildId: n, channelId: r, messageId: i, forceFetch: a, isPreload: s, jumpType: o, skipLocalFetch: l, logFailures: u } = e;
    if (null == r) {
        u && L.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, R.AB)(r)) {
        u && L.log('Skipping fetch because channelId is a static route');
        return;
    }
    let c = I.Z.getChannel(r);
    if ((null == c ? void 0 : c.type) === C.d4z.GUILD_STORE || ((null == c ? void 0 : c.type) != null && C.TPd.GUILD_THREADS_ONLY.has(c.type))) {
        u && L.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let _ = h.Z.getOrCreate(r);
    _.some(N.k5) && (L.log('Found expired attachment link, clearing messages'), h.Z.clear(r), (_ = h.Z.getOrCreate(r))),
        null != _.jumpTargetId &&
            null == i &&
            ((_ = _.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: f.SR.ANIMATED
            })),
            h.Z.commit(_)),
        null != _.focusTargetId && null == i && ((_ = _.mutate({ focusTargetId: null })), h.Z.commit(_));
    let g = a;
    if ((!s || m.Z.isConnected() || _.loadingMore ? (_.loadingMore || (_.ready && !_.cached) ? (null != i ? (g = !0) : u && L.log('Skipping fetch because no other conditions matched')) : null == n || null != T.Z.getGuild(n) ? (g = !0) : u && L.log('Skipping fetch we are connected and have loaded messages')) : (g = !0), (0, p.Z)(r) && b.ZP.hasUnread(r) && (g = !0), g)) {
        if ((h.Z.commit(_.mutate({ loadingMore: !0 })), null != i))
            d.Z.jumpToMessage({
                channelId: r,
                messageId: i,
                flash: !0,
                isPreload: s,
                skipLocalFetch: l,
                jumpType: o
            });
        else {
            if ((null == c ? void 0 : c.isThread()) && M(r))
                return (
                    L.log('Jumping to start of thread '.concat(c.id)),
                    d.Z.fetchMessages({
                        channelId: r,
                        limit: C.AQB,
                        jump: {
                            messageId: r,
                            flash: !1
                        },
                        isPreload: s,
                        skipLocalFetch: l
                    })
                );
            if (!((null == c ? void 0 : c.isThread()) && b.ZP.hasTrackedUnread(c.id)) || _.ready)
                return d.Z.fetchMessages({
                    channelId: r,
                    limit: C.AQB,
                    isPreload: s,
                    skipLocalFetch: l,
                    jump: { jumpType: f.SR.ANIMATED }
                });
            else {
                let e = b.ZP.getTrackedAckMessageId(c.id);
                return (
                    L.log('Jumping to most recent message in thread '.concat(c.id, ' - ').concat(e)),
                    d.Z.fetchMessages({
                        channelId: r,
                        limit: C.AQB,
                        jump: {
                            messageId: e,
                            flash: !1,
                            offset: 1
                        },
                        isPreload: s,
                        skipLocalFetch: l
                    })
                );
            }
        }
    }
}
let w = 90 * A.Z.Millis.DAY,
    P = 'viewedThreadIds';
function M(e) {
    if (b.ZP.hasOpenedThread(e)) return !1;
    if (null == i) {
        var n;
        i = null !== (n = l.K.get(P, {})) && void 0 !== n ? n : {};
    }
    if (e in i) return !1;
    i[e] = Date.now();
    let r = Date.now() - w;
    for (let e in i) i[e] < r && delete i[e];
    return l.K.set(P, i), !0;
}
function k() {
    let e = y.Z.getChannelId();
    if (null != e) {
        let r = I.Z.getChannel(e);
        if (null != r) {
            var n;
            let e = (0, s.LX)(location.pathname, {
                path: C.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            x({
                guildId: r.getGuildId(),
                channelId: r.id,
                messageId: null == e ? void 0 : null === (n = e.params) || void 0 === n ? void 0 : n.message
            }),
                Z(r.getGuildId(), r.id);
        }
    }
}
function U() {
    let { isPreload: e, skipLocalFetch: n, logFailures: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = y.Z.getChannelId();
    if (null != i) {
        let a = I.Z.getChannel(i);
        null != a
            ? ((0, E.Qm)(a.type)
                  ? x({
                        guildId: a.getGuildId(),
                        channelId: a.id,
                        isPreload: e,
                        skipLocalFetch: n,
                        logFailures: r
                    })
                  : r && L.log('Skipping fetch because the selected channel is not a text channel'),
              Z(a.getGuildId(), a.id))
            : r && L.log('Skipping fetch because channel is null');
    } else r && L.log('Skipping fetch because there is no selected channel');
}
function B(e) {
    let { guildId: n, channelId: r, messageId: i, jumpType: a } = e;
    x({
        guildId: n,
        channelId: r,
        messageId: i,
        jumpType: a
    }),
        Z(n, r);
}
function G(e) {
    let { guildId: n, channelId: r } = e;
    x({
        guildId: n,
        channelId: r
    });
}
function Z(e, n) {
    let r = v.ZP.getCurrentSidebarChannelId(n);
    if (null != r)
        x({
            guildId: e,
            channelId: r,
            messageId: v.ZP.getCurrentSidebarMessageId(n)
        });
}
function F() {
    let e = y.Z.getChannelId(),
        n = S.Z.getGuildId();
    if (null == n || null == e) return;
    let r = v.ZP.getSidebarState(e);
    if ((null == r ? void 0 : r.type) !== g.tI.VIEW_CHANNEL) Z(n, e);
}
function V(e) {
    let { guildId: n, channelId: r, context: i } = e;
    i === C.e3s &&
        (x({
            guildId: n,
            channelId: r
        }),
        Z(n, r));
}
function j(e) {
    let { channel: n, messageId: r } = e,
        i = n.guild_id;
    null != i &&
        y.Z.getChannelId(i) === n.id &&
        x({
            guildId: i,
            channelId: n.id,
            messageId: r
        });
}
function H(e) {
    let { response: n } = e;
    if (null == n || null == n.body) return null;
    if (n.body.code === C.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = n.body.retry_after;
        null != e &&
            c.Z.show({
                title: O.intl.string(O.t['Whhv4+']),
                body: O.intl.formatToPlainString(O.t.qoxdQE, { retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let Y = {};
function W(e) {
    var n;
    let { channelId: r, jump: i, isStale: a, isPreview: s = !1 } = e;
    if (s) return;
    let o = null !== (n = Y[r]) && void 0 !== n ? n : 0;
    if (Date.now() - o < 10 * A.Z.Millis.SECOND) return;
    Y[r] = Date.now();
    let l = y.Z.getChannelId(),
        u = v.ZP.getCurrentSidebarChannelId(l),
        c = r === l || r === u;
    a &&
        m.Z.isConnected() &&
        c &&
        d.Z.fetchMessages({
            channelId: r,
            limit: C.AQB,
            jump: i
        });
}
function K(e) {
    let { channelId: n, messageRecord: r, reason: i } = e;
    null != r &&
        u.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: n,
            messageId: r.id,
            reason: null != i ? i : null,
            shouldNotify: !1
        });
}
function z(e) {
    let { state: n } = e;
    if ('active' !== n) return !1;
    let r = y.Z.getChannelId();
    if (null == r) return !1;
    d.Z.fetchNewLocalMessages(r, C.AQB);
}
class q extends _.Z {
    _initialize() {
        u.Z.subscribe('CONNECTION_OPEN', k);
    }
    _terminate() {
        u.Z.unsubscribe('CONNECTION_OPEN', k);
    }
    constructor(...e) {
        super(...e),
            D(this, 'fetchMessages', x),
            D(this, 'loadSelectedChannelIfNecessary', U),
            D(this, 'stores', new Map().set(v.ZP, F)),
            D(this, 'actions', {
                APP_STATE_UPDATE: z,
                OVERLAY_INITIALIZE: k,
                CHANNEL_SELECT: B,
                VOICE_CHANNEL_SELECT: G,
                THREAD_CREATE: j,
                THREAD_LIST_SYNC: () => U(),
                CHANNEL_CREATE: j,
                CHANNEL_PRELOAD: V,
                GUILD_CREATE: () => U(),
                MESSAGE_END_EDIT: H,
                LOAD_MESSAGES_SUCCESS: W,
                UPLOAD_FAIL: K,
                CHANNEL_DELETE: () => U(),
                THREAD_DELETE: () => U()
            });
    }
}
n.Z = new q();
