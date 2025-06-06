n.d(t, { s: () => l });
var r = n(430824),
    i = n(863214);
function l(e, t) {
    if (null == t) return !1;
    let n = (0, i.p)(t, 'should_show_report_to_mod_survey'),
        l = r.Z.getGuild(t);
    return n && null != l && l.ownerId === e.id && l.features.has('REPORT_TO_MOD_SURVEY');
}
