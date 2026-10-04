n.d(t, { q: () => N });
var i = n(17928),
    r = n(73153),
    a = n(746080);
let s = { lastProjectIdByGuildId: {} },
    l = null,
    o = s;
class d extends i.Ay.PersistedStore {
    static displayName = "ConjureBuilderRouteStore";
    static persistKey = "VibegrationsBuilderRoute";
    initialize(e) {
        o = e ?? s;
    }
    getState() {
        return o;
    }
    getRoutedProjectId(e) {
        return l?.guildId === e ? l.projectId : null;
    }
    getLastProjectId(e) {
        return o.lastProjectIdByGuildId[e] ?? null;
    }
}
function c(e, t) {
    if ((o.lastProjectIdByGuildId[e] ?? null) === t) return !1;
    let n = { ...o.lastProjectIdByGuildId };
    return (null == t ? delete n[e] : (n[e] = t), (o = { lastProjectIdByGuildId: n }), !0);
}
let u = new d(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, messageId: i } = e,
            r = n === a.VV.CONJURE && null != t && null != i ? { guildId: t, projectId: i } : null,
            s = r?.guildId !== l?.guildId || r?.projectId !== l?.projectId;
        return ((l = r), null == t) ? s : c(t, r?.projectId ?? null) || s;
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        return null == n && c(t, null);
    },
    LOGOUT: function () {
        ((l = null), (o = s));
    },
});
var _ = n(246338),
    E = n(181079),
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
    let t = u.getLastProjectId(e);
    if (null != t && C(e)) return [a.VV.CONJURE, t];
    let n = S.Ay.getChannelId(e),
        i = m.Ay.getDefaultChannel(e)?.id ?? void 0;
    if ((n === a.VV.GUILD_ONBOARDING && !h.Ay.shouldShowOnboarding(e)) || (n === a.VV.GUILD_HOME && !(0, I.K)(e)))
        return [i, null];
    if (n === a.VV.GUILD_SPACE)
        return (0, f.tT)(g.A.getGuild(e), "getChannelIdForGuildTransition") ? [n, null] : [i, null];
    if (n === a.VV.GAME_SHOP && (0, p.Ye)(e)) return [n, null];
    if (n === a.VV.CONJURE) return C(e) ? [n, null] : [i, null];
    let r = T.A.getChannel(n);
    return null == r || ((0, A.ai)(e) && !E.A.isChannelOrParentFavorited(r)) ? [i, null] : [n, null];
}
function C(e) {
    let t = g.A.getGuild(e);
    return null != t && (0, _.N)(t, "getChannelIdForGuildTransition");
}
(n(645959), n(652215));
