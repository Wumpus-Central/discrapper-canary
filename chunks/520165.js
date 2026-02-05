"use strict";
n.d(t, { A: () => A });
var r = n(15285),
    i = n(652896),
    a = n(616356),
    s = n(961350),
    o = n(734057),
    l = n(290863),
    u = n(383501),
    c = n(461213),
    d = n(977997),
    _ = n(661191),
    f = n(372684),
    p = n(696016),
    h = n(652215),
    m = n(985018);
function g(e) {
    if (null != e)
        return {
            state: e.state,
            details: e.details,
            timestamps: e.timestamps,
            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
        };
}
function E(e) {
    if (null != e) {
        let { ownerId: t } = i.Iy(e);
        if (t !== s.default.getId()) {
            let e = l.A.getActivities(t).find((e) => e.type === h.$pd.PLAYING);
            return { sourceName: e?.name, sourceApplicationId: e?.application_id, activity: g(e) };
        }
    }
    let t = a.A.getStreamerActiveStreamMetadata(),
        n = t?.pid,
        d = t?.sourceName,
        _ = (() => {
            if (null == t) return r.Ay.getVisibleGame();
            {
                let e = null != n ? r.Ay.getGameForPID(n) : null,
                    t = null != d ? r.Ay.getGameForName(d) : null;
                return e ?? t;
            }
        })(),
        f = t?.id ?? _?.id,
        p = t?.sourceName ?? _?.name,
        m = u.A.getChannelId(),
        E = null == p && null != m;
    if (E) {
        let e = null != m ? o.A.getChannel(m) : null;
        p = e?.name ?? "";
    }
    return {
        sourceName: p,
        sourceApplicationId: f,
        activity: g(c.A.getActivities(!1).find((e) => e.type === h.$pd.PLAYING && e.application_id === f)),
        isVoiceOnly: E,
    };
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.nQ.CLIP,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
        i = arguments.length > 4 ? arguments[4] : void 0,
        { sourceName: a, sourceApplicationId: o, activity: l, isVoiceOnly: c } = E(e),
        h = u.A.getChannelId(),
        g = u.A.getGuildId(),
        A = new Set([s.default.getId()]);
    null != h && (A = A.union(new Set(Object.keys(d.A.getVoiceStatesForChannel(h)))));
    let I = "auto" === t;
    r.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && A.add(t.userId);
    });
    let T = c && n === f.nQ.CLIP ? f.nQ.VOICE_CLIP : n;
    return {
        id: _.default.fromTimestamp(Date.now()),
        version: p.kd,
        applicationName: a ?? m.intl.string(m.t.qtSJxb),
        applicationId: o,
        activity: l,
        users: Array.from(A),
        clipMethod: t,
        isTemporary: I,
        guildId: g ?? void 0,
        channelId: h ?? void 0,
        timeline: r,
        decision: i,
        length: 0,
        thumbnail: "",
        type: T,
    };
}
