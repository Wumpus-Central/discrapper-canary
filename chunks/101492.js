n.d(t, { A: () => s }), n(321073);
var r = n(311907),
    i = n(719718),
    a = n(532294);
function s() {
    var e, t, n, s, o, l, c;
    let u = (0, r.bG)([i.A], () => i.A.getCheckpointData()),
        d = (0, r.bG)([i.A], () => i.A.getFetchState()),
        f = [a.Wf.WELCOME];
    return (
        d !== i.$.SUCCESS ||
            null == u.messages ||
            (f.push(a.Wf.MESSAGES),
            f.push(a.Wf.EMOJIS),
            f.push(a.Wf.VOICE),
            (null != (e = null == (s = u.guilds) ? void 0 : s.guilds.length) ? e : 0) > 0 && f.push(a.Wf.GUILDS),
            (null != (t = null == (o = u.users) ? void 0 : o.length) ? t : 0) > 0 &&
                null != u.sidekick &&
                null != u.sidekick.user &&
                (null == (l = u.users) ? void 0 : l[0].id) !== u.sidekick.user.id &&
                (f.push(a.Wf.FRIENDS_INTRO), f.push(a.Wf.FRIENDS_TRANSITION)),
            null != u.sidekick && null != u.sidekick.user && (f.push(a.Wf.FRIENDS_BEST), f.push(a.Wf.FRIENDS_LEAVE)),
            (null != (n = null == (c = u.applications) ? void 0 : c.applications.length) ? n : 0) > 0 &&
                f.push(a.Wf.GAMING),
            f.push(a.Wf.QUESTS),
            f.push(a.Wf.END_REWARD),
            f.push(a.Wf.END_CLAIM),
            f.push(a.Wf.END_SUMMARY)),
        f
    );
}
