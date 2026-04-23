n.d(t, { c: () => u });
var i = n(574381),
    s = n(311907),
    l = n(55619),
    a = n(419954),
    r = n(351906),
    o = n(780964),
    d = n(985018);
let u = (0, a.zD)(o.X.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => d.intl.string(d.t.IxjaoF),
    useValue: function () {
        return (0, s.bG)([r.A], () => {
            let { autoToggle: e } = r.A.getSettings();
            return e;
        });
    },
    setValue: function (e) {
        l.A.update({ autoToggle: e });
    },
    usePredicate: function () {
        return i.Av;
    },
});
