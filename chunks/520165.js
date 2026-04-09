"use strict";
n.d(t, { A: () => S });
var r = n(47167),
    i = n(15285),
    s = n(652896),
    a = n(616356),
    o = n(961350),
    l = n(734057),
    u = n(290863),
    c = n(383501),
    d = n(994500),
    _ = n(461213),
    f = n(287809),
    p = n(977997),
    h = n(661191),
    m = n(372684),
    E = n(696016),
    g = n(652215),
    A = n(985018);
function I(e) {
    if (null != e)
        return {
            state: e.state,
            details: e.details,
            timestamps: e.timestamps,
            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
        };
}
function T(e) {
    if (null != e) {
        let { ownerId: t } = s.Iy(e);
        if (t !== o.default.getId()) {
            let e = u.A.getActivities(t).find((e) => e.type === g.$pd.PLAYING);
            return { sourceName: e?.name, sourceApplicationId: e?.application_id, activity: I(e) };
        }
    }
    let t = a.A.getStreamerActiveStreamMetadata(),
        n = t?.pid,
        p = t?.sourceName,
        h = (() => {
            if (null == t) return i.Ay.getVisibleGame();
            {
                let e = null != n ? i.Ay.getGameForPID(n) : null,
                    t = null != p ? i.Ay.getGameForName(p) : null;
                return e ?? t;
            }
        })(),
        m = t?.id ?? h?.id,
        E = t?.sourceName ?? h?.name,
        A = c.A.getChannelId(),
        T = null == E && null != A;
    if (T) {
        let e = null != A ? l.A.getChannel(A) : null;
        E = null != e ? (0, r.m1)(e, f.default, d.A) : "";
    }
    return {
        sourceName: E,
        sourceApplicationId: m,
        activity: I(_.A.getActivities(!1).find((e) => e.type === g.$pd.PLAYING && e.application_id === m)),
        isVoiceOnly: T,
    };
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.nQ.CLIP,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
        i = arguments.length > 4 ? arguments[4] : void 0,
        { sourceName: s, sourceApplicationId: a, activity: l, isVoiceOnly: u } = T(e),
        d = c.A.getChannelId(),
        _ = c.A.getGuildId(),
        f = new Set([o.default.getId()]);
    null != d && (f = f.union(new Set(Object.keys(p.A.getVoiceStatesForChannel(d)))));
    let g = "auto" === t;
    r.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && f.add(t.userId);
    });
    let I = u && n === m.nQ.CLIP ? m.nQ.VOICE_CLIP : n;
    return {
        id: h.default.fromTimestamp(Date.now()),
        version: E.kd,
        applicationName: s ?? A.intl.string(A.t.qtSJxb),
        applicationId: a,
        activity: l,
        users: Array.from(f),
        clipMethod: t,
        isTemporary: g,
        guildId: _ ?? void 0,
        channelId: d ?? void 0,
        timeline: r,
        decision: i,
        length: 0,
        thumbnail: "",
        type: I,
    };
}
