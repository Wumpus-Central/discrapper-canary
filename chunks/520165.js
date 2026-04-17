"use strict";
n.d(t, { A: () => I });
var r = n(835245),
    i = n(47167),
    s = n(15285),
    a = n(616356),
    o = n(961350),
    l = n(734057),
    u = n(383501),
    c = n(994500),
    d = n(461213),
    _ = n(287809),
    f = n(977997),
    p = n(372684),
    h = n(696016),
    m = n(652215),
    E = n(985018);
function g(e) {
    if (null != e)
        return {
            state: e.state,
            details: e.details,
            timestamps: e.timestamps,
            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
        };
}
function A() {
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
        p = u.A.getChannelId(),
        h = null == f && null != p;
    if (h) {
        let e = null != p ? l.A.getChannel(p) : null;
        f = null != e ? (0, i.m1)(e, _.default, c.A) : "";
    }
    return {
        sourceName: f,
        sourceApplicationId: o,
        activity: g(d.A.getActivities(!1).find((e) => e.type === m.$pd.PLAYING && e.application_id === o)),
        isVoiceOnly: h,
    };
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        { sourceName: s, sourceApplicationId: a, activity: l, isVoiceOnly: c } = A(),
        d = u.A.getChannelId(),
        _ = u.A.getGuildId(),
        m = new Set([o.default.getId()]);
    null != d && (m = m.union(new Set(Object.keys(f.A.getVoiceStatesForChannel(d)))));
    let g = "auto" === e;
    n.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && m.add(t.userId);
    });
    let I = c && t === p.nQ.CLIP ? p.nQ.VOICE_CLIP : t;
    return {
        id: (0, r.A)(),
        createdAt: Date.now(),
        version: h.kd,
        applicationName: s ?? E.intl.string(E.t.qtSJxb),
        applicationId: a,
        activity: l,
        users: Array.from(m),
        clipMethod: e,
        isTemporary: g,
        guildId: _ ?? void 0,
        channelId: d ?? void 0,
        timeline: n,
        decision: i,
        length: 0,
        thumbnail: "",
        type: I,
    };
}
