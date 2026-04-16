"use strict";
n.d(t, { A: () => I });
var r = n(47167),
    i = n(15285),
    s = n(616356),
    a = n(961350),
    o = n(734057),
    l = n(383501),
    u = n(994500),
    c = n(461213),
    d = n(287809),
    _ = n(977997),
    f = n(661191),
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
    let e = s.A.getStreamerActiveStreamMetadata(),
        t = e?.pid,
        n = e?.sourceName,
        a = (() => {
            if (null == e) return i.Ay.getVisibleGame();
            {
                let e = null != t ? i.Ay.getGameForPID(t) : null,
                    r = null != n ? i.Ay.getGameForName(n) : null;
                return e ?? r;
            }
        })(),
        _ = e?.id ?? a?.id,
        f = e?.sourceName ?? a?.name,
        p = l.A.getChannelId(),
        h = null == f && null != p;
    if (h) {
        let e = null != p ? o.A.getChannel(p) : null;
        f = null != e ? (0, r.m1)(e, d.default, u.A) : "";
    }
    return {
        sourceName: f,
        sourceApplicationId: _,
        activity: g(c.A.getActivities(!1).find((e) => e.type === m.$pd.PLAYING && e.application_id === _)),
        isVoiceOnly: h,
    };
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 ? arguments[3] : void 0,
        { sourceName: i, sourceApplicationId: s, activity: o, isVoiceOnly: u } = A(),
        c = l.A.getChannelId(),
        d = l.A.getGuildId(),
        m = new Set([a.default.getId()]);
    null != c && (m = m.union(new Set(Object.keys(_.A.getVoiceStatesForChannel(c)))));
    let g = "auto" === e;
    n.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && m.add(t.userId);
    });
    let I = u && t === p.nQ.CLIP ? p.nQ.VOICE_CLIP : t;
    return {
        id: f.default.fromTimestamp(Date.now()),
        version: h.kd,
        applicationName: i ?? E.intl.string(E.t.qtSJxb),
        applicationId: s,
        activity: o,
        users: Array.from(m),
        clipMethod: e,
        isTemporary: g,
        guildId: d ?? void 0,
        channelId: c ?? void 0,
        timeline: n,
        decision: r,
        length: 0,
        thumbnail: "",
        type: I,
    };
}
