n.d(t, { Z: () => l });
var i = n(198139),
    r = n(388032);
let l = {
    getStatusErrorText: function (e) {
        switch (e) {
            case i.jw.CANCELED:
            case i.jw.DEFERRED:
                return r.intl.string(r.t['0SrNPz']);
            case i.jw.DEFERRED_INTERNAL:
                return r.intl.string(r.t.OtZ5k5);
            case i.jw.ERROR:
                return r.intl.string(r.t.ninjcX);
            case i.jw.REJECTED:
                return r.intl.string(r.t.TSC809);
            case i.jw.RISK_REVIEW:
                return r.intl.string(r.t.rppxMj);
        }
    }
};
