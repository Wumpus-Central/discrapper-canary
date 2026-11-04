var i = n(687123),
    s = n(855986),
    r = n(155718),
    l = n(207560),
    a = n(287809);
function o(e) {
    return null != e && e !== r.Tk.VERIFIED_ADULT && e !== r.Tk.VERIFIED_TEEN;
}
n.d(
    t,
    {},
    {
        LH: function () {
            let e = (0, l.aX)(i.t.NOTICE),
                t = (0, s.bG)([a.default], () => o(a.default.getCurrentUser()?.ageVerificationStatus));
            return e && t;
        },
        S: function () {
            let e = (0, l.aX)(i.t.NOTICE),
                t = (0, s.bG)([a.default], () => {
                    var e;
                    return o((e = a.default.getCurrentUser()?.ageVerificationStatus)) && e !== r.Tk.INFERRED_ADULT;
                });
            return e && t;
        },
        Wt: function () {
            return (0, l.d6)(i.t.NOTICE) && o(a.default.getCurrentUser()?.ageVerificationStatus);
        },
    },
);
