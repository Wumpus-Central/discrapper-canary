n(321073);
var i,
    r,
    a = n(129230),
    s = n(696016),
    l = n(652215),
    o = n(731854),
    d =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.KILL = 1)] = "KILL"),
        (i[(i.MULTIKILL = 2)] = "MULTIKILL"),
        (i[(i.DEATH = 3)] = "DEATH"),
        i),
    c =
        (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.LAUGHTER = 1)] = "LAUGHTER"),
        (r[(r.SHOUTING = 2)] = "SHOUTING"),
        r);
n.d(
    t,
    {},
    {
        Ae: function (e) {
            if (null == e.syncTimestamp) return;
            let t = e.editMetadata?.end != null ? 1e3 * e.editMetadata.end : e.length;
            return new Date(e.syncTimestamp - (e.length - t)).toISOString();
        },
        B: c,
        Q_: d,
        Uq: function (e) {
            return new Date(e).toISOString();
        },
        gD: function (e) {
            return e.slice(0, 100);
        },
        lz: function (e) {
            if (
                ((e.timeline?.length ?? 0) === 0 && (e.audioEvents?.length ?? 0) === 0) ||
                e.decision?.timestamp == null
            )
                return;
            let t = e.editMetadata ?? { start: 0, end: e.length / 1e3 },
                n = e.decision.timestamp - e.length,
                i = n + 1e3 * t.start,
                r = n + 1e3 * t.end,
                d = e.timeline
                    .filter(
                        (t) =>
                            (e.editMetadata?.voiceAudio !== !1 && t.signal.type === s.Gy.SPEAKING) ||
                            t.signal.type === s.Gy.GAME_EVENT,
                    )
                    .sort((e, t) => e.timestamp - t.timestamp),
                c = e.editMetadata?.voiceAudio !== !1 ? (e.audioEvents ?? []) : [];
            if (0 === d.length && 0 === c.length) return;
            let u = new Map(),
                _ = [];
            for (let e of d) {
                if (e.signal.type !== s.Gy.SPEAKING) continue;
                if (e.timestamp >= i) break;
                let t = (e.signal.speakingFlags & o.ME.VOICE) === o.ME.VOICE;
                u.set(e.signal.userId, t);
            }
            for (let [e, t] of u)
                t && _.push({ timestamp_ms: 0, speaking: { user_id: e, speaking_flags: o.ME.VOICE } });
            for (let e of d)
                if (e.signal.type === s.Gy.SPEAKING) {
                    if (e.timestamp < i) continue;
                    if (e.timestamp > r) break;
                    let t = (e.signal.speakingFlags & o.ME.VOICE) === o.ME.VOICE;
                    if ((u.get(e.signal.userId) ?? !1) === t) continue;
                    (u.set(e.signal.userId, t),
                        _.push({
                            timestamp_ms: Math.round(e.timestamp - i),
                            speaking: { user_id: e.signal.userId, speaking_flags: e.signal.speakingFlags },
                        }));
                } else if (e.signal.type === s.Gy.GAME_EVENT) {
                    if (e.timestamp < i) continue;
                    if (e.timestamp > r) break;
                    let t = 0;
                    switch (e.signal.eventType) {
                        case s.rb.KILL:
                            t = 1;
                            break;
                        case s.rb.MULTIKILL:
                            t = 2;
                            break;
                        case s.rb.DEATH:
                            t = 3;
                    }
                    _.push({
                        timestamp_ms: Math.round(e.timestamp - i),
                        game: { type: t, event_name: e.signal.eventName },
                    });
                }
            for (let e of c)
                e.peakMs < i ||
                    e.peakMs > r ||
                    _.push({
                        timestamp_ms: Math.round(e.peakMs - i),
                        emotion: { type: e.type === s.Gy.LAUGHTER ? 1 : 2 },
                    });
            _.sort((e, t) => e.timestamp_ms - t.timestamp_ms);
            let E = _.slice(0, 1e3);
            return (
                E.length !== _.length &&
                    a.default.track(l.HAw.CLIP_TIMELINE_TRIMMED, {
                        clip_uuid: e.id,
                        clip_event_timeline_size: _.length,
                        clip_runtime: "v3",
                    }),
                E.length > 0 ? E : void 0
            );
        },
    },
);
