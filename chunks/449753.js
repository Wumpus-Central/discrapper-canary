n.d(t, { Z: () => S }), n(47120);
var r = n(846519),
    i = n(570140),
    o = n(872810),
    a = n(199902),
    s = n(314897),
    l = n(592125),
    c = n(936349),
    u = n(944486),
    d = n(959457),
    f = n(70956),
    p = n(569545),
    _ = n(981631);
let h = new r.V7(),
    m = new r.V7(),
    g = 180000,
    E = 5 * f.Z.Millis.SECOND,
    v = 12 * f.Z.Millis.SECOND,
    b = null;
function y(e, t) {
    if (u.Z.getVoiceChannelId() !== e) return !1;
    let n = l.Z.getChannel(e);
    if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != a.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
    let r = a.Z.getStreamForUser(t, n.getGuildId());
    if (null == r) return !1;
    let i = (0, p.V9)(r);
    return i !== b && ((b = i), (0, o.rn)(r, { noFocus: !0 }), !0);
}
function O(e, t) {
    let n = null != t ? t : c.Z.getPreferredRegion();
    null != n && n !== c.Z.getRegion(d.Z.getHostname(d.Z.getActiveStreamKey())) && (0, o.dV)(e, n);
}
let S = {
    init() {
        let e = (e, t) => {
            d.Z.getAllActiveStreamKeys().includes(e) ||
                m.start(t ? v : E, () => {
                    i.Z.dispatch({
                        type: 'STREAM_TIMED_OUT',
                        streamKey: e
                    });
                });
        };
        i.Z.subscribe('STREAM_WATCH', (t) => {
            let { streamKey: n } = t,
                { channelId: r } = (0, p.my)(n),
                i = l.Z.getChannel(r);
            e(n, null == i ? void 0 : i.isGuildStageVoice());
        }),
            i.Z.subscribe('STREAM_START', (t) => {
                let { streamType: n, guildId: r, channelId: i } = t,
                    o = l.Z.getChannel(i);
                e(
                    (0, p.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: i,
                        ownerId: s.default.getId()
                    }),
                    null == o ? void 0 : o.isGuildStageVoice()
                );
            }),
            i.Z.subscribe('STREAM_CREATE', () => {
                m.stop();
            }),
            i.Z.subscribe('STREAM_UPDATE', () => {
                m.stop();
            }),
            i.Z.subscribe('STREAM_DELETE', () => {
                m.stop();
            }),
            i.Z.subscribe('STREAM_CLOSE', () => {
                h.stop(), m.stop();
            }),
            i.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                b = null;
                let n = a.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== s.default.getId();
                })[0];
                null != n && y(t, n.ownerId);
            }),
            i.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                let { voiceStates: t } = e;
                t.forEach((e) => {
                    let { userId: t, channelId: n, guildId: r, selfStream: i } = e;
                    if (t !== s.default.getId() && null != n) {
                        if (i && y(n, t)) return;
                        let e = a.Z.getActiveStreamForUser(t, r);
                        if (null != e && e.channelId === n && (i || e.state === _.jm8.ENDED || h.start(g, () => (0, o.aP)((0, p.V9)(e), !1)), i && e.state === _.jm8.ENDED)) {
                            h.stop();
                            let e = a.Z.getStreamForUser(t, r);
                            if (null == e) return;
                            (0, o.rn)(e);
                        }
                    }
                });
            }),
            i.Z.subscribe('CALL_UPDATE', (e) => {
                let { channelId: t, region: n } = e,
                    r = a.Z.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && O((0, p.V9)(r), n);
            }),
            i.Z.subscribe('CHANNEL_UPDATES', (e) => {
                let { channels: t } = e,
                    n = a.Z.getCurrentUserActiveStream();
                if (null != n) for (let e of t) n.channelId === e.id && O((0, p.V9)(n), e.rtcRegion);
            });
    }
};
