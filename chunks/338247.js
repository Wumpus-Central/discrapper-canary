n.d(t, { s: () => a });
var r = n(430824),
    i = n(863214),
    l = n(981631);
function a(e, t) {
    if (null == t) return !1;
    let n = (0, i.p)(t, 'should_show_report_to_mod_survey'),
        a = r.Z.getGuild(t);
    return n && null != a && a.ownerId === e.id && a.features.has(l.oNc.REPORT_TO_MOD_SURVEY);
}
