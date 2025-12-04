n.d(t, { Z: () => o }), n(539854);
var r = n(442837),
    i = n(5888),
    a = n(612776);
function o() {
    var e, t, n, o, s, l, c;
    let u = (0, r.e7)([i.Z], () => i.Z.getCheckpointData()),
        d = (0, r.e7)([i.Z], () => i.Z.getFetchState()),
        f = [a.ij.WELCOME];
    return (
        d !== i.p.SUCCESS ||
            null == u.messages ||
            (f.push(a.ij.MESSAGES),
            f.push(a.ij.EMOJIS),
            f.push(a.ij.VOICE),
            (null != (s = null == (e = u.guilds) ? void 0 : e.guilds.length) ? s : 0) > 0 && f.push(a.ij.GUILDS),
            (null != (l = null == (t = u.users) ? void 0 : t.length) ? l : 0) > 0 &&
                null != u.sidekick &&
                null != u.sidekick.user &&
                (null == (n = u.users) ? void 0 : n[0].id) !== u.sidekick.user.id &&
                (f.push(a.ij.FRIENDS_INTRO), f.push(a.ij.FRIENDS_TRANSITION)),
            null != u.sidekick && null != u.sidekick.user && (f.push(a.ij.FRIENDS_BEST), f.push(a.ij.FRIENDS_LEAVE)),
            (null != (c = null == (o = u.applications) ? void 0 : o.applications.length) ? c : 0) > 0 &&
                f.push(a.ij.GAMING),
            f.push(a.ij.QUESTS),
            f.push(a.ij.END_REWARD),
            f.push(a.ij.END_CLAIM),
            f.push(a.ij.END_SUMMARY)),
        f
    );
}
