n.d(t, { U: () => d });
var i = n(311907),
    s = n(55619),
    l = n(419954),
    a = n(351906),
    r = n(780964),
    o = n(985018);
let d = (0, l.zD)(r.X.STREAMING_STREAMER_MODE, {
    useTitle: () => o.intl.string(o.t.TGNg6T),
    useSubtitle: () => o.intl.string(o.t["4nXLnE"]),
    useValue: function () {
        return (0, i.bG)([a.A], () => {
            let { enabled: e } = a.A.getSettings();
            return e;
        });
    },
    setValue: function (e) {
        s.A.update({ enabled: e });
    },
});
