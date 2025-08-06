n.d(t, { Z: () => h });
var r = n(73800),
    i = n(442837),
    l = n(445384),
    a = n(420438),
    s = n(271383),
    o = n(430824),
    c = n(594174),
    u = n(981631),
    d = n(440493);
function h(e) {
    let t = (0, i.e7)([o.Z, a.Z, c.default, s.ZP], () => {
        let t = o.Z.getGuild(e);
        if ((null == t ? void 0 : t.features.has(u.oNc.HUB)) !== !0 || !0 === a.Z.hasViewedPrompt(d.r.REAL_NAME_PROMPT, t.id)) return null;
        let n = c.default.getCurrentUser();
        if (null == n) return null;
        let r = s.ZP.getMember(t.id, null == n ? void 0 : n.id);
        return (null == r ? void 0 : r.nick) == null;
    });
    return (
        r.useEffect(() => {
            null != e && null != t && (t || l.Z.viewPrompt(d.r.REAL_NAME_PROMPT, e));
        }, [t, e]),
        !0 === t
    );
}
