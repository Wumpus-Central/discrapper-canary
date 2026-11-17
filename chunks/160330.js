var i = n(115560),
    r = n(350835),
    a = n(77729),
    s = n(47167),
    l = n(644727),
    o = n(985253),
    d = n(616356),
    c = n(46653),
    u = n(734057),
    _ = n(495867),
    E = n(994500),
    A = n(894768),
    f = n(287809),
    h = n(732752),
    I = n(696016),
    p = n(792996);
n.d(
    t,
    {},
    {
        A: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I.nQ.CLIP,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                m = arguments.length > 3 ? arguments[3] : void 0,
                g = arguments.length > 4 ? arguments[4] : void 0,
                {
                    sourceName: T,
                    sourceApplicationId: S,
                    activity: N,
                    isVoiceOnly: C,
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
                        h = _.A.getChannelId(),
                        I = null == c && null != h;
                    if (I) {
                        let e = null != h ? u.A.getChannel(h) : null;
                        c = null != e ? (0, s.m1)(e, f.default, E.A) : "";
                    }
                    let p = (0, o.A)(a),
                        m = A.A.getUnfilteredActivities(!0).filter(function (e) {
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
                            m.find(function (e) {
                                return (null != e.state && "" !== e.state) || (null != e.details && "" !== e.details);
                            }) ?? m[0],
                        ),
                        isVoiceOnly: I,
                    };
                })(),
                O = _.A.getChannelId(),
                R = _.A.getGuildId();
            n = n.flatMap((e) => {
                let t = (0, h.A)(e.signal);
                return null != t ? [{ ...e, signal: t }] : [];
            });
            let L = new Set([c.default.getId()]);
            n.forEach((e) => {
                let { signal: t } = e;
                "userId" in t && null != t.userId && L.add(t.userId);
            });
            let y = C && t === I.nQ.CLIP ? I.nQ.VOICE_CLIP : t,
                D = Date.now(),
                b = a.A.ntpClock?.getSyncInfo(),
                v = b?.synced === !0 ? D + b.offsetMs : void 0;
            return {
                id: (0, i.A)(),
                createdAt: D,
                syncTimestamp: v,
                version: 6,
                applicationName: T ?? p.intl.string(p.t.qtSJxb),
                applicationId: S,
                activity: N,
                users: Array.from(L),
                clipMethod: e,
                guildId: R ?? void 0,
                channelId: O ?? void 0,
                timeline: n,
                decision: m,
                gameSessionId: g,
                remoteClipId: m?.signal?.type === I.Gy.DISTRIBUTED ? m.signal.remoteTriggerClipId : void 0,
                length: 0,
                thumbnail: "",
                type: y,
            };
        },
    },
);
