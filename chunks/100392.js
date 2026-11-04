var i = n(220478),
    r = n(102609),
    a = n(769054);
let s = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
n.d(
    t,
    {},
    {
        GI: function (e, t) {
            if (null == t || null == e) return null;
            switch (e.system) {
                case r.l5.LEGACY:
                    return i.A.getExperimentBucketName(t.bucket);
                case r.l5.APEX:
                    return `Variant ${t.variantId}`;
                default:
                    return (e.system, null);
            }
        },
        Kb: function (e) {
            let t = e.match(s);
            return null == t || t.length < 3 ? null : parseInt(t[2], 10);
        },
        OL: function (e) {
            let t = e.match(s);
            return null == t || t.length < 2 ? null : t[1];
        },
        W0: function (e) {
            return s.test(e);
        },
        hp: function (e) {
            return (0, a.h)(e).map((e) => ({ id: e.id, label: e.label, value: e.id }));
        },
        yA: function (e, t) {
            return null != t ? `dev://experiment/${e}/${t}` : `dev://experiment/${e}`;
        },
    },
);
