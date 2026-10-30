n.d(t, { A: () => p });
var i = n(132500),
    r = n(350835),
    a = n(77729),
    s = n(47167),
    l = n(952818),
    o = n(985253),
    d = n(616356),
    c = n(280450),
    u = n(734057),
    _ = n(763827),
    E = n(994500),
    A = n(461213),
    h = n(287809),
    f = n(696016),
    I = n(105292);
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        p = arguments.length > 3 ? arguments[3] : void 0,
        T = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: m,
            sourceApplicationId: g,
            activity: S,
            isVoiceOnly: N,
        } = (function () {
            let e = d.A.getStreamerActiveStreamMetadata(),
                t = e?.pid,
                n = e?.sourceName,
                i = (() => {
                    if (null == e) return l.Ay.getVisibleGame();
                    {
                        let e = null != t ? l.Ay.getGameForPID(t) : null,
                            i = null != n ? l.Ay.getGameForName(n) : null;
                        return e ?? i;
                    }
                })(),
                a = e?.id ?? i?.id,
                c = e?.sourceName ?? i?.name,
                f = _.A.getChannelId(),
                I = null == c && null != f;
            if (I) {
                let e = null != f ? u.A.getChannel(f) : null;
                c = null != e ? (0, s.m1)(e, h.default, E.A) : "";
            }
            let p = (0, o.A)(a),
                T = A.A.getUnfilteredActivities(!0).filter(function (e) {
                    return e.type === r.$.PLAYING && null != e.application_id && p.has(e.application_id);
                });
            return {
                sourceName: c,
                sourceApplicationId: a,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(
                    T.find(function (e) {
                        return (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details);
                    }) ?? T[0],
                ),
                isVoiceOnly: I,
            };
        })(),
        C = _.A.getChannelId(),
        O = _.A.getGuildId(),
        R = new Set([c.default.getId()]);
    n.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && R.add(t.userId);
    });
    let L = N && t === f.nQ.CLIP ? f.nQ.VOICE_CLIP : t,
        y = Date.now(),
        D = a.A.ntpClock?.getSyncInfo(),
        v = D?.synced === !0 ? y + D.offsetMs : void 0;
    return {
        id: (0, i.A)(),
        createdAt: y,
        syncTimestamp: v,
        version: f.kd,
        applicationName: m ?? I.intl.string(I.t.qtSJxb),
        applicationId: g,
        activity: S,
        users: Array.from(R),
        clipMethod: e,
        guildId: O ?? void 0,
        channelId: C ?? void 0,
        timeline: n,
        decision: p,
        gameSessionId: T,
        remoteClipId: p?.signal?.type === f.Gy.DISTRIBUTED ? p.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: L,
    };
}
