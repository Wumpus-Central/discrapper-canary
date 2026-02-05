n.d(t, { A: () => a });
var i = n(311907),
    l = n(71393),
    s = n(652215);
function a(e) {
    return (0, i.bG)([l.A], () => {
        if (null == e) return !1;
        let t = l.A.getGuild(e);
        return t?.features.has(s.GuildFeatures.HUB) ?? !1;
    }, [e]);
}
