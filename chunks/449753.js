n.d(t, { Z: () => T }), n(47120);
var i = n(846519),
    r = n(570140),
    a = n(872810),
    s = n(199902),
    o = n(314897),
    l = n(592125),
    u = n(936349),
    c = n(944486),
    d = n(959457),
    f = n(70956),
    _ = n(569545),
    p = n(981631);
let h = new i.V7(),
    m = new i.V7(),
    g = 180000,
    E = 5 * f.Z.Millis.SECOND,
    v = 12 * f.Z.Millis.SECOND,
    y = null;
function I(e, t) {
    if (c.Z.getVoiceChannelId() !== e) return !1;
    let n = l.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != s.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
    let i = s.Z.getStreamForUser(t, n.getGuildId());
    if (null == i) return !1;
    let r = (0, _.V9)(i);
    return r !== y && ((y = r), (0, a.rn)(i, { noFocus: !0 }), !0);
}
function b(e, t) {
    let n = null != t ? t : u.Z.getPreferredRegion();
    null != n && n !== u.Z.getRegion(d.Z.getHostname(d.Z.getActiveStreamKey())) && (0, a.dV)(e, n);
}
let T = {
    init() {
        let e = (e, t) => {
            d.Z.getAllActiveStreamKeys().includes(e) ||
                m.start(t ? v : E, () => {
                    r.Z.dispatch({
                        type: 'STREAM_TIMED_OUT',
                        streamKey: e
                    });
                });
        };
        r.Z.subscribe('STREAM_WATCH', (t) => {
            let { streamKey: n } = t,
                { channelId: i } = (0, _.my)(n),
                r = l.Z.getChannel(i);
            e(n, null == r ? void 0 : r.isGuildStageVoice());
        }),
            r.Z.subscribe('STREAM_START', (t) => {
                let { streamType: n, guildId: i, channelId: r } = t,
                    a = l.Z.getChannel(r);
                e(
                    (0, _.V9)({
                        streamType: n,
                        guildId: i,
                        channelId: r,
                        ownerId: o.default.getId()
                    }),
                    null == a ? void 0 : a.isGuildStageVoice()
                );
            }),
            r.Z.subscribe('STREAM_CREATE', () => {
                m.stop();
            }),
            r.Z.subscribe('STREAM_UPDATE', () => {
                m.stop();
            }),
            r.Z.subscribe('STREAM_DELETE', () => {
                m.stop();
            }),
            r.Z.subscribe('STREAM_CLOSE', () => {
                h.stop(), m.stop();
            }),
            r.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                y = null;
                let n = s.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== o.default.getId();
                })[0];
                null != n && I(t, n.ownerId);
            }),
            r.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: i, selfStream: r } = e;
                    if (t !== o.default.getId() && null != n) {
                        if (r && I(n, t)) return;
                        let e = s.Z.getActiveStreamForUser(t, i);
                        if (null != e && e.channelId === n && (r || e.state === p.jm8.ENDED || h.start(g, () => (0, a.aP)((0, _.V9)(e), !1)), r && e.state === p.jm8.ENDED)) {
                            h.stop();
                            let e = s.Z.getStreamForUser(t, i);
                            if (null == e) return;
                            (0, a.rn)(e);
                        }
                    }
                });
            }),
            r.Z.subscribe('CALL_UPDATE', (e) => {
                let { channelId: t, region: n } = e,
                    i = s.Z.getCurrentUserActiveStream();
                (null == i ? void 0 : i.channelId) === t && b((0, _.V9)(i), n);
            }),
            r.Z.subscribe('CHANNEL_UPDATES', (e) => {
                let { channels: t } = e,
                    n = s.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && b((0, _.V9)(n), e.rtcRegion);
            });
    }
};
