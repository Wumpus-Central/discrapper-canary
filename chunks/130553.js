"use strict";
n.d(t, { A: () => B });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(616356),
    a = n(495544),
    o = n(763827),
    l = n(735438),
    d = n(451988),
    _ = n(228366),
    u = n(401843),
    c = n(439372),
    E = n(487329),
    h = n(601900),
    m = n(253932),
    f = n(734057),
    g = n(498642),
    p = n(873985),
    A = n(309010),
    I = n(116956),
    T = n(287809),
    S = n(927813),
    N = n(652896),
    C = n(325278),
    R = n(652215);
let O = (0, l.debounce)(u.a8, 1e3),
    y = {},
    v = {},
    D = 3 * S.A.Millis.MINUTE,
    L = 5 * S.A.Millis.SECOND,
    b = 12 * S.A.Millis.SECOND,
    w = null;
function P(e) {
    y[e]?.stop(), delete y[e];
}
function k(e) {
    v[e]?.stop(), delete v[e];
}
function M(e, t) {
    if (A.A.getVoiceChannelId() !== e) return !1;
    let n = f.A.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != s.A.getActiveStreamForUser(t, n.getGuildId()))
        return !1;
    let i = s.A.getStreamForUser(t, n.getGuildId());
    if (null == i) return !1;
    let r = (0, N._z)(i);
    return r !== w && ((w = r), (0, u.A9)(i, { noFocus: !0 }), !0);
}
function U(e, t) {
    let n = t ?? p.A.getPreferredRegion();
    null != n && n !== p.A.getRegion(I.A.getHostname(e)) && (0, u.dA)(e, n);
}
function x(e, t) {
    if (I.A.getAllActiveStreamKeys().includes(e)) return;
    let n = v[e] ?? new d.Ep();
    (v[e] = n),
        n.start(t ? b : L, () => {
            _.h.dispatch({ type: "STREAM_TIMED_OUT", streamKey: e });
        });
}
class G extends c.A {
    handleStreamWatch = (e) => {
        let { streamKey: t, allowMultiple: n } = e,
            { channelId: i } = (0, N.Iy)(t),
            r = f.A.getChannel(i);
        x(t, r?.isGuildStageVoice()),
            P(t),
            n ||
                s.A.getAllActiveStreams().forEach((e) => {
                    let n = (0, N._z)(e);
                    e.ownerId === a.default.getId() || (n !== t && (0, u.vN)(n, !1));
                });
    };
    handleStreamStart = (e) => {
        let { channelId: t, streamType: n, guildId: i } = e,
            r = f.A.getChannel(t);
        x((0, N._z)({ streamType: n, guildId: i, channelId: t, ownerId: a.default.getId() }), r?.isGuildStageVoice()),
            this.platformHandleStreamStart(e);
    };
    handleStreamCreate = (e) => {
        let { streamKey: t } = e;
        k(t);
        let { ownerId: n, guildId: i } = (0, N.Iy)(t);
        if (null == i || null == n || n !== T.default.getCurrentUser()?.id) return;
        let r = g.A.getMemberCount(i);
        null == r || r <= C.oe || r > C.G1 || (m.wv.getSetting() && O(t));
    };
    handleStreamUpdate = (e) => {
        let { streamKey: t } = e;
        k(t);
    };
    handleStreamDelete = (e) => {
        let { reason: t, streamKey: n } = e;
        k(n),
            t === R.H2B.STREAM_FULL &&
                ((0, E.QW)({ type: E.iy.STREAM_FULL, ...(0, h.id)(n) }),
                (0, u.Xi)(n, !1),
                this.platformShowStreamFull());
    };
    handleStreamClose = (e) => {
        let { streamKey: t } = e;
        P(t), k(t);
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        if (null == t) return;
        w = null;
        let n = s.A.getAllApplicationStreamsForChannel(t).filter((e) => {
            let { ownerId: t } = e;
            return t !== a.default.getId();
        })[0];
        null != n && M(t, n.ownerId);
    };
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n, guildId: i, selfStream: r } = e;
            if ((this.platformHandleVoiceStateUpdate(e), t !== a.default.getId() && null != n)) {
                if (r && M(n, t)) return;
                let e = s.A.getActiveStreamForUser(t, i);
                if (null != e && e.channelId === n) {
                    if (!r && e.state !== R.XYD.ENDED) {
                        let t = (0, N._z)(e),
                            n = y[t] ?? new d.Ep();
                        n.start(D, () => (0, u.Xi)(t, !1)), (y[t] = n);
                    }
                    if (r && e.state === R.XYD.ENDED) {
                        P((0, N._z)(e));
                        let n = s.A.getStreamForUser(t, i);
                        if (null == n) return;
                        (0, u.A9)(n);
                    }
                }
            }
        });
    };
    handleCallUpdate = (e) => {
        let { channelId: t, region: n } = e,
            i = s.A.getCurrentUserActiveStream();
        i?.channelId === t && U((0, N._z)(i), n);
    };
    handleChannelUpdates = (e) => {
        let { channels: t } = e,
            n = s.A.getCurrentUserActiveStream();
        if (null != n) for (let e of t) n.channelId === e.id && U((0, N._z)(n), e.rtcRegion);
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
    };
}
var V = n(725792),
    F = n(338771);
let B = new (class extends G {
    _initialize() {
        super._initialize(), V.Ay.initializeIfNeeded();
    }
    platformShowStreamFull() {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e("25894").then(n.bind(n, 166789));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    platformHandleStreamStart() {}
    platformHandleVoiceStateUpdate(e) {
        let { userId: t, sessionId: n } = e;
        if (t !== a.default.getId() || n !== a.default.getSessionId()) return;
        let i = s.A.getAllActiveStreams(),
            r = o.A.getChannelId();
        i.forEach((e) => {
            e.channelId !== r && (0, F.A)(e, !1);
        });
    }
})();
