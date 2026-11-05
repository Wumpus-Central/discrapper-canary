var i = n(687123),
    r = n(855986),
    s = n(155718),
    l = n(207560),
    a = n(287809);
function o(e) {
    return null != e && e !== s.Tk.VERIFIED_ADULT && e !== s.Tk.VERIFIED_TEEN;
}
n.d(
    t,
    {},
    {
        LH: function () {
            let e = (0, l.aX)(i.t.NOTICE),
                t = (0, r.bG)([a.default], () => o(a.default.getCurrentUser()?.ageVerificationStatus));
            return e && t;
        },
        S: function () {
            let e = (0, l.aX)(i.t.NOTICE),
                t = (0, r.bG)([a.default], () => {
                    var e;
                    return o((e = a.default.getCurrentUser()?.ageVerificationStatus)) && e !== s.Tk.INFERRED_ADULT;
                });
            return e && t;
        },
        Wt: function () {
            return (0, l.d6)(i.t.NOTICE) && o(a.default.getCurrentUser()?.ageVerificationStatus);
        },
    },
);
