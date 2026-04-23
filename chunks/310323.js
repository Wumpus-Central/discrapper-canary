"use strict";
n.d(t, { A: () => x });
var r = n(735438),
    i = n(451988),
    s = n(73153),
    a = n(401843),
    o = n(439372),
    l = n(487329),
    u = n(601900),
    c = n(253932),
    d = n(616356),
    _ = n(961350),
    f = n(734057),
    p = n(498642),
    h = n(873985),
    E = n(309010),
    m = n(162605),
    g = n(287809),
    A = n(927813),
    I = n(652896),
    T = n(502075),
    S = n(652215);
let y = (0, r.debounce)(a.a8, 1e3),
    N = {},
    v = {},
    C = 3 * A.A.Millis.MINUTE,
    O = 5 * A.A.Millis.SECOND,
    R = 12 * A.A.Millis.SECOND,
    b = null;
function D(e) {
    N[e]?.stop(), delete N[e];
}
function L(e) {
    v[e]?.stop(), delete v[e];
}
function w(e, t) {
    if (E.A.getVoiceChannelId() !== e) return !1;
    let n = f.A.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.A.getActiveStreamForUser(t, n.getGuildId()))
        return !1;
    let r = d.A.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, I._z)(r);
    return i !== b && ((b = i), (0, a.A9)(r, { noFocus: !0 }), !0);
}
function M(e, t) {
    let n = t ?? h.A.getPreferredRegion();
    null != n && n !== h.A.getRegion(m.A.getHostname(e)) && (0, a.dA)(e, n);
}
function P(e, t) {
    if (m.A.getAllActiveStreamKeys().includes(e)) return;
    let n = v[e] ?? new i.Ep();
    (v[e] = n),
        n.start(t ? R : O, () => {
            s.h.dispatch({ type: "STREAM_TIMED_OUT", streamKey: e });
        });
}
class x extends o.A {
    handleStreamWatch = (e) => {
        let { streamKey: t, allowMultiple: n } = e,
            { channelId: r } = (0, I.Iy)(t),
            i = f.A.getChannel(r);
        P(t, i?.isGuildStageVoice()),
            D(t),
            n ||
                d.A.getAllActiveStreams().forEach((e) => {
                    let n = (0, I._z)(e);
                    e.ownerId === _.default.getId() || (n !== t && (0, a.vN)(n, !1));
                });
    };
    handleStreamStart = (e) => {
        let { channelId: t, streamType: n, guildId: r } = e,
            i = f.A.getChannel(t);
        P((0, I._z)({ streamType: n, guildId: r, channelId: t, ownerId: _.default.getId() }), i?.isGuildStageVoice()),
            this.platformHandleStreamStart(e);
    };
    handleStreamCreate = (e) => {
        let { streamKey: t } = e;
        L(t);
        let { ownerId: n, guildId: r } = (0, I.Iy)(t);
        if (null == r || null == n || n !== g.default.getCurrentUser()?.id) return;
        let i = p.A.getMemberCount(r);
        null == i || i <= T.oe || i > T.G1 || (c.wv.getSetting() && y(t));
    };
    handleStreamUpdate = (e) => {
        let { streamKey: t } = e;
        L(t);
    };
    handleStreamDelete = (e) => {
        let { reason: t, streamKey: n } = e;
        L(n),
            t === S.H2B.STREAM_FULL &&
                ((0, l.QW)({ type: l.iy.STREAM_FULL, ...(0, u.id)(n) }),
                (0, a.Xi)(n, !1),
                this.platformShowStreamFull());
    };
    handleStreamClose = (e) => {
        let { streamKey: t } = e;
        D(t), L(t);
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        if (null == t) return;
        b = null;
        let n = d.A.getAllApplicationStreamsForChannel(t).filter((e) => {
            let { ownerId: t } = e;
            return t !== _.default.getId();
        })[0];
        null != n && w(t, n.ownerId);
    };
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n, guildId: r, selfStream: s } = e;
            if ((this.platformHandleVoiceStateUpdate(e), t !== _.default.getId() && null != n)) {
                if (s && w(n, t)) return;
                let e = d.A.getActiveStreamForUser(t, r);
                if (null != e && e.channelId === n) {
                    if (!s && e.state !== S.XYD.ENDED) {
                        let t = (0, I._z)(e),
                            n = N[t] ?? new i.Ep();
                        n.start(C, () => (0, a.Xi)(t, !1)), (N[t] = n);
                    }
                    if (s && e.state === S.XYD.ENDED) {
                        D((0, I._z)(e));
                        let n = d.A.getStreamForUser(t, r);
                        if (null == n) return;
                        (0, a.A9)(n);
                    }
                }
            }
        });
    };
    handleCallUpdate = (e) => {
        let { channelId: t, region: n } = e,
            r = d.A.getCurrentUserActiveStream();
        r?.channelId === t && M((0, I._z)(r), n);
    };
    handleChannelUpdates = (e) => {
        let { channels: t } = e,
            n = d.A.getCurrentUserActiveStream();
        if (null != n) for (let e of t) n.channelId === e.id && M((0, I._z)(n), e.rtcRegion);
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
