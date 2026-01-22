n.d(t, { A: () => a });
var r = n(311907),
    l = n(71393),
    i = n(652215);
function a(e) {
    return (0, r.bG)([l.A], () => {
        var t;
        if (null == e) return !1;
        let n = l.A.getGuild(e);
        return null != (t = null == n ? void 0 : n.features.has(i.GuildFeatures.HUB)) && t;
    }, [e]);
}
