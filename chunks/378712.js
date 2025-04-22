e.d(t, { J: () => d });
var i = e(544891),
    l = e(359119),
    r = e(981631);
function d(n) {
    return i.tn.post({
        url: r.ANM.ADD_SAFETY_WARNING(n),
        body: { safety_warning_type: l.pj.LIKELY_ATO },
        rejectWithError: !1
    });
}
