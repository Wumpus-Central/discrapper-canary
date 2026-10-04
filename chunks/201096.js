n.d(t, { q: () => N });
var i = n(870440),
    r = n(17928),
    a = n(73153),
    s = n(746080);
let l = { lastProjectIdByGuildId: {} },
    o = null,
    d = l;
class c extends r.Ay.PersistedStore {
    static displayName = "ConjureBuilderRouteStore";
    static persistKey = "VibegrationsBuilderRoute";
    initialize(e) {
        d = e ?? l;
    }
    getState() {
        return d;
    }
    getRoutedProjectId(e) {
        return o?.guildId === e ? o.projectId : null;
    }
    getLastProjectId(e) {
        return d.lastProjectIdByGuildId[e] ?? null;
    }
}
function u(e, t) {
    if ((d.lastProjectIdByGuildId[e] ?? null) === t) return !1;
    let n = { ...d.lastProjectIdByGuildId };
    return (null == t ? delete n[e] : (n[e] = t), (d = { lastProjectIdByGuildId: n }), !0);
}
let _ = new c(a.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, messageId: i } = e,
            r = n === s.VV.CONJURE && null != t && null != i ? { guildId: t, projectId: i } : null,
            a = r?.guildId !== o?.guildId || r?.projectId !== o?.projectId;
        return ((o = r), null == t) ? a : u(t, r?.projectId ?? null) || a;
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        return null == n && u(t, null);
    },
    LOGOUT: function () {
        ((o = null), (d = l));
    },
});
var E = n(181079),
    A = n(5180),
    h = n(713125),
    I = n(473529),
    f = n(313627),
    p = n(871123),
    T = n(734057),
    m = n(808728),
    g = n(71393),
    S = n(309010);
function N(e) {
    let t = _.getLastProjectId(e);
    if (null != t && C(e)) return [s.VV.CONJURE, t];
    let n = S.Ay.getChannelId(e),
        i = m.Ay.getDefaultChannel(e)?.id ?? void 0;
    if ((n === s.VV.GUILD_ONBOARDING && !h.Ay.shouldShowOnboarding(e)) || (n === s.VV.GUILD_HOME && !(0, I.K)(e)))
        return [i, null];
    if (n === s.VV.GUILD_SPACE)
        return (0, f.tT)(g.A.getGuild(e), "getChannelIdForGuildTransition") ? [n, null] : [i, null];
    if (n === s.VV.GAME_SHOP && (0, p.Ye)(e)) return [n, null];
    if (n === s.VV.CONJURE) return C(e) ? [n, null] : [i, null];
    let r = T.A.getChannel(n);
    return null == r || ((0, A.ai)(e) && !E.A.isChannelOrParentFavorited(r)) ? [i, null] : [n, null];
}
function C(e) {
    let t = g.A.getGuild(e);
    return null != t && (0, i.N)(t, "getChannelIdForGuildTransition");
}
(n(645959), n(652215));
