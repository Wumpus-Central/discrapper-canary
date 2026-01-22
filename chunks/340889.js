i.d(e, { U: () => o });
var n = i(311907),
    l = i(55619),
    s = i(419954),
    r = i(351906),
    u = i(780964),
    a = i(985018);
let o = (0, s.zD)(u.X.STREAMING_STREAMER_MODE, {
    useTitle: () => a.intl.string(a.t.TGNg6T),
    useSubtitle: () => a.intl.string(a.t["4nXLnE"]),
    useValue: function () {
        return (0, n.bG)([r.A], () => {
            let { enabled: t } = r.A.getSettings();
            return t;
        });
    },
    setValue: function (t) {
        l.A.update({ enabled: t });
    },
});
