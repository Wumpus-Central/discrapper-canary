n.d(t, { A: () => p });
var i = n(132500),
    r = n(77729),
    a = n(47167),
    s = n(952818),
    l = n(985253),
    o = n(616356),
    d = n(280450),
    c = n(734057),
    u = n(763827),
    _ = n(994500),
    E = n(461213),
    A = n(287809),
    h = n(696016),
    I = n(652215),
    f = n(375708);
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        p = arguments.length > 3 ? arguments[3] : void 0,
        T = arguments.length > 4 ? arguments[4] : void 0,
        {
            sourceName: m,
            sourceApplicationId: g,
            activity: S,
            isVoiceOnly: N,
        } = (function () {
            let e = o.A.getStreamerActiveStreamMetadata(),
                t = e?.pid,
                n = e?.sourceName,
                i = (() => {
                    if (null == e) return s.Ay.getVisibleGame();
                    {
                        let e = null != t ? s.Ay.getGameForPID(t) : null,
                            i = null != n ? s.Ay.getGameForName(n) : null;
                        return e ?? i;
                    }
                })(),
                r = e?.id ?? i?.id,
                d = e?.sourceName ?? i?.name,
                h = u.A.getChannelId(),
                f = null == d && null != h;
            if (f) {
                let e = null != h ? c.A.getChannel(h) : null;
                d = null != e ? (0, a.m1)(e, A.default, _.A) : "";
            }
            let p = (0, l.A)(r),
                T = E.A.getUnfilteredActivities(!0).filter(function (e) {
                    return e.type === I.$pd.PLAYING && null != e.application_id && p.has(e.application_id);
                });
            return {
                sourceName: d,
                sourceApplicationId: r,
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
                isVoiceOnly: f,
            };
        })(),
        C = u.A.getChannelId(),
        O = u.A.getGuildId(),
        R = new Set([d.default.getId()]);
    n.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && R.add(t.userId);
    });
    let L = N && t === h.nQ.CLIP ? h.nQ.VOICE_CLIP : t,
        y = Date.now(),
        D = r.A.ntpClock?.getSyncInfo(),
        v = D?.synced === !0 ? y + D.offsetMs : void 0;
    return {
        id: (0, i.A)(),
        createdAt: y,
        syncTimestamp: v,
        version: h.kd,
        applicationName: m ?? f.intl.string(f.t.qtSJxb),
        applicationId: g,
        activity: S,
        users: Array.from(R),
        clipMethod: e,
        guildId: O ?? void 0,
        channelId: C ?? void 0,
        timeline: n,
        decision: p,
        gameSessionId: T,
        remoteClipId: p?.signal?.type === h.Gy.DISTRIBUTED ? p.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: L,
    };
}
