t.d(n, { J: () => a });
var i = t(544891),
    r = t(359119),
    l = t(981631);
function a(e) {
    return i.tn.post({
        url: l.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: r.pj.LIKELY_ATO },
        rejectWithError: !1,
    });
}
