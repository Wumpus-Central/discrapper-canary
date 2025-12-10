n.d(e, { E: () => o });
var i = n(442837),
    l = n(223245),
    s = n(509613),
    u = n(246946),
    r = n(313789),
    a = n(388032);
let o = (0, s.qs)(r.n.STREAMING_STREAMER_MODE, {
    useTitle: () => a.intl.string(a.t.TGNg6T),
    useSubtitle: () => a.intl.string(a.t["4nXLnE"]),
    useValue: function () {
        return (0, i.e7)([u.Z], () => {
            let { enabled: t } = u.Z.getSettings();
            return t;
        });
    },
    setValue: function (t) {
        l.Z.update({ enabled: t });
    },
});
