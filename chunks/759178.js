n.d(t, { Z: () => l });
var r = n(198139),
    i = n(388032);
let l = {
    getStatusErrorText: function (e) {
        switch (e) {
            case r.jw.CANCELED:
            case r.jw.DEFERRED:
                return i.intl.string(i.t["0SrNPx"]);
            case r.jw.DEFERRED_INTERNAL:
                return i.intl.string(i.t.OtZ5kz);
            case r.jw.ERROR:
                return i.intl.string(i.t.ninjcc);
            case r.jw.REJECTED:
                return i.intl.string(i.t.TSC803);
            case r.jw.RISK_REVIEW:
                return i.intl.string(i.t.rppxMj);
        }
    },
};
