n.d(t, { A: () => m });
var i = n(439372),
    r = n(695515),
    a = n(400492),
    s = n(885386),
    l = n(617617),
    o = n(803224),
    d = n(309010),
    c = n(967198),
    u = n(461213),
    _ = n(260498),
    E = n(189714),
    A = n(1371),
    h = n(246338),
    f = n(901173),
    I = n(652215),
    p = n(746080);
class T extends i.A {
    actions = { CONJURE_TURN_SETTLED: g, CONJURE_TURN_NOTIFICATION: S, LOGOUT: N };
}
let m = new T();
function g(e) {
    let { projectId: t, guildId: n, title: i, body: r, nonce: a } = e;
    C(t, n, i, r, a);
}
function S(e) {
    let { projectId: t, body: n, nonce: i } = e,
        r = _.Ay.getProject(t);
    null != r && C(t, r.guild_id ?? r.preview_guild_id ?? null, r.name, n, i);
}
function N() {
    D.clear();
}
function C(e, t, n, i, T) {
    if (null != T) {
        if (T <= (D.get(e) ?? 0)) return;
        D.set(e, T);
    }
    if (
        A.A.areTurnNotificationsDisabled() ||
        u.A.getStatus() === I.clD.DND ||
        s.NO.getSetting() ||
        r.A.isCurrentUserInRestrictedHours() ||
        (0, E.j)(l.A.settings, e)
    )
        return;
    let m = !o.A.isSoundDisabled(R),
        g = c.A.getGuildId();
    if (
        null != g &&
        _.Ay.getSelectedProjectId(g) === e &&
        d.Ay.getChannelId() === p.VV.CONJURE &&
        A.A.isWindowFocused()
    ) {
        m && (0, a.Ak)(O, y);
        return;
    }
    let S = t ?? (0, h.oX)(L);
    A.A.presentTurnNotification({
        projectId: e,
        guildId: S,
        title: n,
        body: (0, f.Lj)(i),
        route: null == S ? null : I.BVt.CHANNEL(S, p.VV.CONJURE, e),
        sound: m ? O : void 0,
        volume: y,
    });
}
let O = "bit_message1",
    R = "message1",
    L = "ConjureChatStore",
    y = 0.4,
    D = new Map();
