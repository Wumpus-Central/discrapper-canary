n.d(e, { Z: () => o });
var i = n(442837),
    r = n(223245),
    l = n(509613),
    s = n(246946),
    u = n(313789),
    a = n(388032);
let o = (0, l.qs)(u.n.STREAMING_STREAMER_MODE, {
    useTitle: () => a.intl.string(a.t.TGNg6T),
    useSubtitle: () => a.intl.string(a.t["4nXLnE"]),
    useValue: function () {
        return (0, i.e7)([s.Z], () => {
            let { enabled: t } = s.Z.getSettings();
            return t;
        });
    },
    setValue: function (t) {
        r.Z.update({ enabled: t });
    },
});
