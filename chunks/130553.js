"use strict";
n.d(t, { A: () => j });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(616356),
    s = n(280450),
    l = n(763827),
    o = n(435558),
    d = n(451988),
    c = n(228366),
    u = n(401843),
    _ = n(439372),
    E = n(487329),
    A = n(601900),
    h = n(885386),
    I = n(734057),
    f = n(498642),
    p = n(873985),
    T = n(309010),
    m = n(116956),
    g = n(287809),
    S = n(927813),
    N = n(652896),
    C = n(325278),
    R = n(652215);
let O = (0, o.debounce)(u.a8, 1e3),
    L = {},
    y = {},
    D = 3 * S.A.Millis.MINUTE,
    v = 5 * S.A.Millis.SECOND,
    b = 12 * S.A.Millis.SECOND,
    M = null,
    P = new Set();
function U() {
    P.forEach((e) => {
        a.A.isStreamMarkedFull(e) || P.delete(e);
    });
}
function w(e) {
    L[e]?.stop(), delete L[e];
}
function G(e) {
    y[e]?.stop(), delete y[e];
}
function x(e, t) {
    if (T.Ay.getVoiceChannelId() !== e) return !1;
    let n = I.A.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != a.A.getActiveStreamForUser(t, n.getGuildId()))
        return !1;
    let i = a.A.getStreamForUser(t, n.getGuildId());
    if (null == i) return !1;
    let r = (0, N._z)(i);
    return !(r === M || a.A.isStreamMarkedFull(r)) && ((M = r), (0, u.A9)(i, { noFocus: !0 }), !0);
}
function k(e, t) {
    let n = t ?? p.A.getPreferredRegion();
    null != n && n !== p.A.getRegion(m.A.getHostname(e)) && (0, u.dA)(e, n);
}
function F(e, t) {
    if (m.A.getAllActiveStreamKeys().includes(e)) return;
    let n = y[e] ?? new d.Ep();
    (y[e] = n),
        n.start(t ? b : v, () => {
            c.h.dispatch({ type: "STREAM_TIMED_OUT", streamKey: e });
        });
}
class V extends _.A {
    handleStreamWatch = (e) => {
        let { streamKey: t, allowMultiple: n } = e,
            { channelId: i } = (0, N.Iy)(t),
            r = I.A.getChannel(i);
        F(t, r?.isGuildStageVoice()),
            w(t),
            n ||
                a.A.getAllActiveStreams().forEach((e) => {
                    let n = (0, N._z)(e);
                    e.ownerId === s.default.getId() || (n !== t && (0, u.vN)(n, !1));
                });
    };
    handleStreamStart = (e) => {
        let { channelId: t, streamType: n, guildId: i } = e,
            r = I.A.getChannel(t);
        F((0, N._z)({ streamType: n, guildId: i, channelId: t, ownerId: s.default.getId() }), r?.isGuildStageVoice()),
            this.platformHandleStreamStart(e);
    };
    handleStreamCreate = (e) => {
        let { streamKey: t } = e;
        G(t), U();
        let { ownerId: n, guildId: i } = (0, N.Iy)(t);
        if (null == i || null == n || n !== g.default.getCurrentUser()?.id) return;
        let r = f.A.getMemberCount(i);
        null == r || r <= C.oe || r > C.G1 || (h.wv.getSetting() && O(t));
    };
    handleStreamUpdate = (e) => {
        let { streamKey: t } = e;
        G(t), U();
    };
    handleStreamDelete = (e) => {
        let { reason: t, streamKey: n } = e;
        G(n),
            t === R.H2B.STREAM_FULL &&
                ((0, E.QW)({ type: E.iy.STREAM_FULL, ...(0, A.id)(n) }),
                (0, u.Xi)(n, !1),
                P.has(n) || (P.add(n), this.platformShowStreamFull()));
    };
    handleStreamClose = (e) => {
        let { streamKey: t } = e;
        w(t), G(t);
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        if (null == t) return;
        (M = null), U();
        let n = a.A.getAllApplicationStreamsForChannel(t).find(
            (e) => e.ownerId !== s.default.getId() && !a.A.isStreamMarkedFull((0, N._z)(e)),
        );
        null != n && x(t, n.ownerId);
    };
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n, guildId: i, selfStream: r } = e;
            if (
                (this.platformHandleVoiceStateUpdate(e),
                t !== s.default.getId() && (!(r && null != n) && P.size > 0 && U(), null != n))
            ) {
                if (r && x(n, t)) return;
                let e = a.A.getActiveStreamForUser(t, i);
                if (null != e && e.channelId === n) {
                    if (!r && e.state !== R.XYD.ENDED) {
                        let t = (0, N._z)(e),
                            n = L[t] ?? new d.Ep();
                        n.start(D, () => (0, u.Xi)(t, !1)), (L[t] = n);
                    }
                    if (r && e.state === R.XYD.ENDED) {
                        w((0, N._z)(e));
                        let n = a.A.getStreamForUser(t, i);
                        if (null == n || a.A.isStreamMarkedFull((0, N._z)(n))) return;
                        (0, u.A9)(n);
                    }
                }
            }
        });
    };
    handleCallUpdate = (e) => {
        let { channelId: t, region: n } = e,
            i = a.A.getCurrentUserActiveStream();
        i?.channelId === t && k((0, N._z)(i), n);
    };
    handleChannelUpdates = (e) => {
        let { channels: t } = e,
            n = a.A.getCurrentUserActiveStream();
        if (null != n) for (let e of t) n.channelId === e.id && k((0, N._z)(n), e.rtcRegion);
    };
    handleSessionReset = () => {
        P.clear();
    };
    actions = {
        STREAM_WATCH: this.handleStreamWatch,
        STREAM_START: this.handleStreamStart,
        STREAM_CREATE: this.handleStreamCreate,
        STREAM_UPDATE: this.handleStreamUpdate,
        STREAM_DELETE: this.handleStreamDelete,
        STREAM_CLOSE: this.handleStreamClose,
        CALL_UPDATE: this.handleCallUpdate,
        CHANNEL_UPDATES: this.handleChannelUpdates,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        CONNECTION_CLOSED: this.handleSessionReset,
        LOGOUT: this.handleSessionReset,
    };
}
var B = n(725792),
    H = n(338771);
let j = new (class extends V {
    _initialize() {
        super._initialize(), B.Ay.initializeIfNeeded();
    }
    platformShowStreamFull() {
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await n.e("425894").then(n.bind(n, 166789));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: "stream-full-modal" },
        );
    }
    platformHandleStreamStart() {}
    platformHandleVoiceStateUpdate(e) {
        let { userId: t, sessionId: n } = e;
        if (t !== s.default.getId() || n !== s.default.getSessionId()) return;
        let i = a.A.getAllActiveStreams(),
            r = l.A.getChannelId();
        i.forEach((e) => {
            e.channelId !== r && (0, H.A)(e, !1);
        });
    }
})();
