n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(445384),
    a = n(420438),
    s = n(271383),
    o = n(430824),
    c = n(594174),
    d = n(981631),
    u = n(440493);
function h(e) {
    let t = (0, l.e7)([o.Z, a.Z, c.default, s.ZP], () => {
        let t = o.Z.getGuild(e);
        if ((null == t ? void 0 : t.hasFeature(d.oNc.HUB)) !== !0 || !0 === a.Z.hasViewedPrompt(u.r.REAL_NAME_PROMPT, t.id)) return null;
        let n = c.default.getCurrentUser();
        if (null == n) return null;
        let i = s.ZP.getMember(t.id, null == n ? void 0 : n.id);
        return (null == i ? void 0 : i.nick) == null;
    });
    return (
        i.useEffect(() => {
            if (null != e && null != t) !t && r.Z.viewPrompt(u.r.REAL_NAME_PROMPT, e);
        }, [t, e]),
        !0 === t
    );
}
