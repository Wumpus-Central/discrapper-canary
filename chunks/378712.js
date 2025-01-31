e.d(t, { J: () => a });
var i = e(544891),
    l = e(359119),
    r = e(981631);
function a(n) {
    return i.tn.post({
        url: r.ANM.ADD_SAFETY_WARNING(n),
        body: { safety_warning_type: l.pj.LIKELY_ATO },
        rejectWithError: !1
    });
}
