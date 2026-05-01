"use strict";
n.d(t, { A: () => A });
var i = n(132500),
    r = n(47167),
    s = n(328153),
    a = n(616356),
    o = n(495544),
    l = n(734057),
    _ = n(763827),
    d = n(994500),
    u = n(461213),
    c = n(287809),
    E = n(977997),
    h = n(372684),
    m = n(696016),
    f = n(652215),
    g = n(985018);
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        A = arguments.length > 3 ? arguments[3] : void 0,
        {
            sourceName: I,
            sourceApplicationId: p,
            activity: T,
            isVoiceOnly: S,
        } = (function () {
            let e = a.A.getStreamerActiveStreamMetadata(),
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
                o = e?.id ?? i?.id,
                E = e?.sourceName ?? i?.name,
                h = _.A.getChannelId(),
                m = null == E && null != h;
            if (m) {
                let e = null != h ? l.A.getChannel(h) : null;
                E = null != e ? (0, r.m1)(e, c.default, d.A) : "";
            }
            return {
                sourceName: E,
                sourceApplicationId: o,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(u.A.getActivities(!1).find((e) => e.type === f.$pd.PLAYING && e.application_id === o)),
                isVoiceOnly: m,
            };
        })(),
        N = _.A.getChannelId(),
        O = _.A.getGuildId(),
        R = new Set([o.default.getId()]);
    null != N && (R = R.union(new Set(Object.keys(E.A.getVoiceStatesForChannel(N))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && R.add(t.userId);
        });
    let C = S && t === h.nQ.CLIP ? h.nQ.VOICE_CLIP : t;
    return {
        id: (0, i.A)(),
        createdAt: Date.now(),
        version: m.kd,
        applicationName: I ?? g.intl.string(g.t.qtSJxb),
        applicationId: p,
        activity: T,
        users: Array.from(R),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: O ?? void 0,
        channelId: N ?? void 0,
        timeline: n,
        decision: A,
        remoteClipId: A?.signal?.type === h.Gy.DISTRIBUTED ? A.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: C,
    };
}
