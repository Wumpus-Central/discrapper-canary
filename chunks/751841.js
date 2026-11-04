var i = n(463347),
    r = n(334465),
    a = n(652215),
    s = n(746080);
let l = [a.BVt.CONJURE, a.BVt.CONJURE_PROJECT(":projectId")],
    o = a.BVt.CHANNEL(i.pv.guildId(), s.VV.CONJURE_PROJECT, ":projectId");
n.d(
    t,
    {},
    {
        EB: function (e) {
            return a.BVt.CHANNEL(e, s.VV.CONJURE);
        },
        Oj: function (e, t) {
            return a.BVt.CHANNEL(e, s.VV.CONJURE_PROJECT, t);
        },
        Xj: function (e) {
            return (
                (0, r.B)(e, { path: a.BVt.CONJURE_PROJECT(":projectId"), exact: !0 })?.params.projectId ??
                null ??
                (0, r.B)(e, { path: o, exact: !0 })?.params.projectId ??
                null
            );
        },
        _g: l,
        hU: function (e) {
            return null == e ? a.BVt.CONJURE : a.BVt.CONJURE_PROJECT(e);
        },
        tb: function (e) {
            return null != (0, r.B)(e, { path: l, exact: !0 });
        },
    },
);
