"use strict";
n.d(t, { A: () => g });
var r = n(835245),
    i = n(47167),
    s = n(15285),
    a = n(616356),
    o = n(961350),
    l = n(734057),
    u = n(383501),
    d = n(994500),
    c = n(461213),
    _ = n(287809),
    f = n(977997),
    E = n(372684),
    h = n(696016),
    p = n(652215),
    m = n(985018);
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        g = arguments.length > 3 ? arguments[3] : void 0,
        {
            sourceName: A,
            sourceApplicationId: I,
            activity: T,
            isVoiceOnly: S,
        } = (function () {
            let e = a.A.getStreamerActiveStreamMetadata(),
                t = e?.pid,
                n = e?.sourceName,
                r = (() => {
                    if (null == e) return s.Ay.getVisibleGame();
                    {
                        let e = null != t ? s.Ay.getGameForPID(t) : null,
                            r = null != n ? s.Ay.getGameForName(n) : null;
                        return e ?? r;
                    }
                })(),
                o = e?.id ?? r?.id,
                f = e?.sourceName ?? r?.name,
                E = u.A.getChannelId(),
                h = null == f && null != E;
            if (h) {
                let e = null != E ? l.A.getChannel(E) : null;
                f = null != e ? (0, i.m1)(e, _.default, d.A) : "";
            }
            return {
                sourceName: f,
                sourceApplicationId: o,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(c.A.getActivities(!1).find((e) => e.type === p.$pd.PLAYING && e.application_id === o)),
                isVoiceOnly: h,
            };
        })(),
        y = u.A.getChannelId(),
        N = u.A.getGuildId(),
        O = new Set([o.default.getId()]);
    null != y && (O = O.union(new Set(Object.keys(f.A.getVoiceStatesForChannel(y))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && O.add(t.userId);
        });
    let R = S && t === E.nQ.CLIP ? E.nQ.VOICE_CLIP : t;
    return {
        id: (0, r.A)(),
        createdAt: Date.now(),
        version: h.kd,
        applicationName: A ?? m.intl.string(m.t.qtSJxb),
        applicationId: I,
        activity: T,
        users: Array.from(O),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: N ?? void 0,
        channelId: y ?? void 0,
        timeline: n,
        decision: g,
        length: 0,
        thumbnail: "",
        type: R,
    };
}
