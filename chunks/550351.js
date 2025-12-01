n.d(t, { Z: () => b }), n(388685);
var r = n(594190),
    i = n(569545),
    a = n(199902),
    o = n(314897),
    s = n(592125),
    l = n(158776),
    c = n(19780),
    u = n(885110),
    d = n(979651),
    f = n(709054),
    p = n(894694),
    _ = n(356659),
    m = n(981631),
    h = n(388032);
function g(e) {
    if (null != e)
        return {
            state: e.state,
            details: e.details,
            timestamps: e.timestamps,
            party:
                null != e.party
                    ? {
                          id: e.party.id,
                          size: e.party.size,
                      }
                    : void 0,
        };
}
function E(e) {
    var t, n, d;
    if (null != e) {
        let { ownerId: t } = i.my(e);
        if (t !== o.default.getId()) {
            let e = l.Z.getActivities(t).find((e) => e.type === m.IIU.PLAYING);
            return {
                sourceName: null == e ? void 0 : e.name,
                sourceApplicationId: null == e ? void 0 : e.application_id,
                activity: g(e),
            };
        }
    }
    let f = a.Z.getStreamerActiveStreamMetadata(),
        p = null == f ? void 0 : f.pid,
        _ = null == f ? void 0 : f.sourceName,
        h = (() => {
            if (null == f) return r.ZP.getVisibleGame();
            {
                let e = null != p ? r.ZP.getGameForPID(p) : null,
                    t = null != _ ? r.ZP.getGameForName(_) : null;
                return null != e ? e : t;
            }
        })(),
        E = null != (t = null == f ? void 0 : f.id) ? t : null == h ? void 0 : h.id,
        b = null != (n = null == f ? void 0 : f.sourceName) ? n : null == h ? void 0 : h.name,
        y = c.Z.getChannelId(),
        O = null == b && null != y;
    if (O) {
        let e = null != y ? s.Z.getChannel(y) : null;
        b = null != (d = null == e ? void 0 : e.name) ? d : "";
    }
    return {
        sourceName: b,
        sourceApplicationId: E,
        activity: g(u.Z.getActivities(!1).find((e) => e.type === m.IIU.PLAYING && e.application_id === E)),
        isVoiceOnly: O,
    };
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "manual",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.NJ.CLIP,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
        i = arguments.length > 4 ? arguments[4] : void 0,
        { sourceName: a, sourceApplicationId: s, activity: l, isVoiceOnly: u } = E(e),
        m = c.Z.getChannelId(),
        g = c.Z.getGuildId(),
        b = new Set([o.default.getId()]);
    null != m && (b = b.union(new Set(Object.keys(d.Z.getVoiceStatesForChannel(m)))));
    let y = "auto" === t;
    r.forEach((e) => {
        let { signal: t } = e;
        "userId" in t && null != t.userId && b.add(t.userId);
    });
    let O = u && n === p.NJ.CLIP ? p.NJ.VOICE_CLIP : n;
    return {
        id: f.default.fromTimestamp(Date.now()),
        version: _.Bg,
        applicationName: null != a ? a : h.intl.string(h.t.qtSJxb),
        applicationId: s,
        activity: l,
        users: Array.from(b),
        clipMethod: t,
        isTemporary: y,
        guildId: null != g ? g : void 0,
        channelId: null != m ? m : void 0,
        timeline: r,
        decision: i,
        length: 0,
        thumbnail: "",
        type: O,
    };
}
