n.d(t, { c: () => c });
var i = n(574381),
    s = n(311907),
    l = n(55619),
    r = n(419954),
    a = n(351906),
    o = n(780964),
    d = n(985018);
let c = (0, r.zD)(o.X.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => d.intl.string(d.t.IxjaoF),
    useValue: function () {
        return (0, s.bG)([a.A], () => {
            let { autoToggle: e } = a.A.getSettings();
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
