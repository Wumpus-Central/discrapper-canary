var i = r(47120);
var a = r(846519),
    o = r(570140),
    s = r(872810),
    l = r(199902),
    u = r(314897),
    c = r(592125),
    d = r(936349),
    f = r(944486),
    p = r(959457),
    h = r(70956),
    _ = r(569545),
    m = r(981631);
let g = new a.V7(),
    E = new a.V7(),
    v = 180000,
    y = 5 * h.Z.Millis.SECOND,
    b = 12 * h.Z.Millis.SECOND,
    I = null;
function T(e, n) {
    if (f.Z.getVoiceChannelId() !== e) return !1;
    let r = c.Z.getChannel(e);
    if (null == r || (!r.isDM() && !r.isGuildStageVoice()) || null != l.Z.getActiveStreamForUser(n, r.getGuildId())) return !1;
    let i = l.Z.getStreamForUser(n, r.getGuildId());
    if (null == i) return !1;
    let a = (0, _.V9)(i);
    return a !== I && ((I = a), (0, s.rn)(i, { noFocus: !0 }), !0);
}
function S(e, n) {
    let r = null != n ? n : d.Z.getPreferredRegion();
    null != r && r !== d.Z.getRegion(p.Z.getHostname(p.Z.getActiveStreamKey())) && (0, s.dV)(e, r);
}
n.Z = {
    init() {
        let e = (e, n) => {
            !p.Z.getAllActiveStreamKeys().includes(e) &&
                E.start(n ? b : y, () => {
                    o.Z.dispatch({
                        type: 'STREAM_TIMED_OUT',
                        streamKey: e
                    });
                });
        };
        o.Z.subscribe('STREAM_WATCH', (n) => {
            let { streamKey: r } = n,
                { channelId: i } = (0, _.my)(r),
                a = c.Z.getChannel(i);
            e(r, null == a ? void 0 : a.isGuildStageVoice());
        }),
            o.Z.subscribe('STREAM_START', (n) => {
                let { streamType: r, guildId: i, channelId: a } = n,
                    o = c.Z.getChannel(a);
                e(
                    (0, _.V9)({
                        streamType: r,
                        guildId: i,
                        channelId: a,
                        ownerId: u.default.getId()
                    }),
                    null == o ? void 0 : o.isGuildStageVoice()
                );
            }),
            o.Z.subscribe('STREAM_CREATE', () => {
                E.stop();
            }),
            o.Z.subscribe('STREAM_UPDATE', () => {
                E.stop();
            }),
            o.Z.subscribe('STREAM_DELETE', () => {
                E.stop();
            }),
            o.Z.subscribe('STREAM_CLOSE', () => {
                g.stop(), E.stop();
            }),
            o.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
                let { channelId: n } = e;
                if (null == n) return;
                I = null;
                let r = l.Z.getAllApplicationStreamsForChannel(n).filter((e) => {
                    let { ownerId: n } = e;
                    return n !== u.default.getId();
                })[0];
                null != r && T(n, r.ownerId);
            }),
            o.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                let { voiceStates: n } = e;
                n.forEach((e) => {
                    let { userId: n, channelId: r, guildId: i, selfStream: a } = e;
                    if (n !== u.default.getId() && null != r) {
                        if (a && T(r, n)) return;
                        let e = l.Z.getActiveStreamForUser(n, i);
                        if (null != e && e.channelId === r && (!a && e.state !== m.jm8.ENDED && g.start(v, () => (0, s.aP)((0, _.V9)(e), !1)), a && e.state === m.jm8.ENDED)) {
                            g.stop();
                            let e = l.Z.getStreamForUser(n, i);
                            if (null == e) return;
                            (0, s.rn)(e);
                        }
                    }
                });
            }),
            o.Z.subscribe('CALL_UPDATE', (e) => {
                let { channelId: n, region: r } = e,
                    i = l.Z.getCurrentUserActiveStream();
                (null == i ? void 0 : i.channelId) === n && S((0, _.V9)(i), r);
            }),
            o.Z.subscribe('CHANNEL_UPDATES', (e) => {
                let { channels: n } = e,
                    r = l.Z.getCurrentUserActiveStream();
                if (null != r) for (let e of n) r.channelId === e.id && S((0, _.V9)(r), e.rtcRegion);
            });
    }
};
