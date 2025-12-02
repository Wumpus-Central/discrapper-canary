n.d(e, { Z: () => c });
var i = n(818710),
    r = n(442837),
    l = n(223245),
    s = n(509613),
    u = n(246946),
    a = n(313789),
    o = n(388032);
let c = (0, s.qs)(a.n.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => o.intl.string(o.t.IxjaoF),
    usePredicate: function () {
        return i.FB;
    },
    useValue: function () {
        return (0, r.e7)([u.Z], () => {
            let { autoToggle: t } = u.Z.getSettings();
            return t;
        });
    },
    setValue: function (t) {
        l.Z.update({ autoToggle: t });
    },
});
