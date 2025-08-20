n.d(t, { s: () => o });
var r = n(430824),
    i = n(863214),
    a = n(981631);
function o(e, t) {
    if (null == t) return !1;
    let n = (0, i.p)(t, "should_show_report_to_mod_survey"),
        o = r.Z.getGuild(t);
    return n && null != o && o.ownerId === e.id && o.features.has(a.oNc.REPORT_TO_MOD_SURVEY);
}
