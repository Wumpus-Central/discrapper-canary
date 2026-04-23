n.d(t, { i: () => u });
var i = n(311907),
    s = n(827343),
    l = n(419954),
    a = n(430452),
    r = n(780964),
    o = n(731854),
    d = n(985018);
let u = (0, l.zD)(r.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
    useTitle: () => d.intl.string(d.t.uancuJ),
    useSubtitle: () => d.intl.string(d.t.I1Eoqq),
    useValue: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.getQoS());
    },
    setValue: function (e) {
        s.A.setQoS(e);
    },
    usePredicate: function () {
        return (0, i.bG)([a.Ay], () => a.Ay.supports(o.O5.QOS));
    },
});
