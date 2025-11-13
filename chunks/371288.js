n.d(e, { Z: () => o });
var i = n(442837),
    l = n(223245),
    u = n(509613),
    r = n(246946),
    s = n(313789),
    a = n(388032);
let o = (0, u.qs)(s.n.STREAMING_STREAMER_MODE, {
    useTitle: () => a.intl.string(a.t.TGNg6T),
    useSubtitle: () => a.intl.string(a.t["4nXLnE"]),
    useValue: function () {
        return (0, i.e7)([r.Z], () => {
            let { enabled: t } = r.Z.getSettings();
            return t;
        });
    },
    setValue: function (t) {
        l.Z.update({ enabled: t });
    },
});
