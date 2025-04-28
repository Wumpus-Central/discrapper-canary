n.d(t, { Z: () => p });
var r = n(192379),
    i = n(442837),
    l = n(445384),
    o = n(420438),
    a = n(271383),
    s = n(430824),
    c = n(594174),
    u = n(981631),
    d = n(440493);
function p(e) {
    let t = (0, i.e7)([s.Z, o.Z, c.default, a.ZP], () => {
        let t = s.Z.getGuild(e);
        if ((null == t ? void 0 : t.hasFeature(u.oNc.HUB)) !== !0 || !0 === o.Z.hasViewedPrompt(d.r.REAL_NAME_PROMPT, t.id)) return null;
        let n = c.default.getCurrentUser();
        if (null == n) return null;
        let r = a.ZP.getMember(t.id, null == n ? void 0 : n.id);
        return (null == r ? void 0 : r.nick) == null;
    });
    return (
        r.useEffect(() => {
            null != e && null != t && (t || l.Z.viewPrompt(d.r.REAL_NAME_PROMPT, e));
        }, [t, e]),
        !0 === t
    );
}
