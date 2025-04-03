t.d(e, { J: () => d });
var i = t(544891),
    l = t(359119),
    r = t(981631);
function d(n) {
    return i.tn.post({
        url: r.ANM.ADD_SAFETY_WARNING(n),
        body: { safety_warning_type: l.pj.LIKELY_ATO },
        rejectWithError: !1
    });
}
