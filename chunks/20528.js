n.d(t, { Z: () => x }), n(47120);
var r = n(392711),
    i = n(846519),
    o = n(570140),
    a = n(872810),
    s = n(147913),
    l = n(785141),
    c = n(252158),
    u = n(695346),
    d = n(199902),
    f = n(314897),
    _ = n(592125),
    p = n(650774),
    h = n(936349),
    m = n(944486),
    g = n(959457),
    E = n(594174),
    b = n(70956),
    v = n(569545),
    y = n(70722),
    O = n(981631);
function I(e, t, n) {
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
let S = (0, r.debounce)(a.xc, 1000),
    T = new i.V7(),
    A = new i.V7(),
    N = 3 * b.Z.Millis.MINUTE,
    C = 5 * b.Z.Millis.SECOND,
    R = 12 * b.Z.Millis.SECOND,
    P = null;
function w(e, t) {
    if (m.Z.getVoiceChannelId() !== e) return !1;
    let n = _.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != d.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
    let r = d.Z.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, v.V9)(r);
    return i !== P && ((P = i), (0, a.rn)(r, { noFocus: !0 }), !0);
}
function D(e, t) {
    let n = null != t ? t : h.Z.getPreferredRegion();
    null != n && n !== h.Z.getRegion(g.Z.getHostname(g.Z.getActiveStreamKey())) && (0, a.dV)(e, n);
}
function L(e, t) {
    g.Z.getAllActiveStreamKeys().includes(e) ||
        A.start(t ? R : C, () => {
            o.Z.dispatch({
                type: 'STREAM_TIMED_OUT',
                streamKey: e
            });
        });
}
class x extends s.Z {
    constructor(...e) {
        super(...e),
            I(this, 'handleStreamWatch', (e) => {
                let { streamKey: t, allowMultiple: n } = e,
                    { channelId: r } = (0, v.my)(t),
                    i = _.Z.getChannel(r);
                L(t, null == i ? void 0 : i.isGuildStageVoice()),
                    n ||
                        d.Z.getAllActiveStreams().forEach((e) => {
                            let n = (0, v.V9)(e);
                            e.ownerId !== f.default.getId() && n !== t && (0, a.g)(n, !1);
                        });
            }),
            I(this, 'handleStreamStart', (e) => {
                let { channelId: t, streamType: n, guildId: r } = e,
                    i = _.Z.getChannel(t);
                L(
                    (0, v.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: t,
                        ownerId: f.default.getId()
                    }),
                    null == i ? void 0 : i.isGuildStageVoice()
                ),
                    this.platformHandleStreamStart(e);
            }),
            I(this, 'handleStreamCreate', (e) => {
                var t;
                let { streamKey: n } = e;
                A.stop();
                let { ownerId: r, guildId: i } = (0, v.my)(n);
                if (null == i || null == r || r !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                let o = p.Z.getMemberCount(i);
                null != o && !(o < 2) && !(o > y.tB) && u.eo.getSetting() && S(n);
            }),
            I(this, 'handleStreamUpdate', () => {
                A.stop();
            }),
            I(this, 'handleStreamDelete', (e) => {
                let { reason: t, streamKey: n } = e;
                A.stop(), t === O.si2.STREAM_FULL && ((0, l.kr)(l.u.STREAM_FULL, (0, c.r)(n)), (0, a.aP)(n, !1), this.platformShowStreamFull());
            }),
            I(this, 'handleStreamClose', () => {
                T.stop(), A.stop();
            }),
            I(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                P = null;
                let n = d.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== f.default.getId();
                })[0];
                null != n && w(t, n.ownerId);
            }),
            I(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: i } = e;
                    if ((this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n)) {
                        if (i && w(n, t)) return;
                        let e = d.Z.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n && (i || e.state === O.jm8.ENDED || T.start(N, () => (0, a.aP)((0, v.V9)(e), !1)), i && e.state === O.jm8.ENDED)) {
                            T.stop();
                            let e = d.Z.getStreamForUser(t, r);
                            if (null == e) return;
                            (0, a.rn)(e);
                        }
                    }
                });
            }),
            I(this, 'handleCallUpdate', (e) => {
                let { channelId: t, region: n } = e,
                    r = d.Z.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && D((0, v.V9)(r), n);
            }),
            I(this, 'handleChannelUpdates', (e) => {
                let { channels: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && D((0, v.V9)(n), e.rtcRegion);
            }),
            I(this, 'handleMediaEngineVideoStateChanged', (e) => {
                let { videoState: t } = e,
                    n = d.Z.getCurrentUserActiveStream();
                if (null != n) {
                    let e = t === O.FQ1.PAUSED;
                    (0, a.tK)(n, e);
                }
            }),
            I(this, 'actions', {
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
                MEDIA_ENGINE_VIDEO_STATE_CHANGED: this.handleMediaEngineVideoStateChanged
            });
    }
}
