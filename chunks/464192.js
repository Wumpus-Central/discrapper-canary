n.d(t, { LH: () => c, S: () => u, Wt: () => d });
var i = n(687123),
    l = n(17928),
    r = n(155718),
    s = n(207560),
    a = n(287809);
function o(e) {
    return null != e && e !== r.Tk.VERIFIED_ADULT && e !== r.Tk.VERIFIED_TEEN;
}
function d() {
    return (0, s.d6)(i.t.NOTICE) && o(a.default.getCurrentUser()?.ageVerificationStatus);
}
function c() {
    let e = (0, s.aX)(i.t.NOTICE),
        t = (0, l.bG)([a.default], () => o(a.default.getCurrentUser()?.ageVerificationStatus));
    return e && t;
}
function u() {
    let e = (0, s.aX)(i.t.NOTICE),
        t = (0, l.bG)([a.default], () => {
            var e;
            return o((e = a.default.getCurrentUser()?.ageVerificationStatus)) && e !== r.Tk.INFERRED_ADULT;
        });
    return e && t;
}
