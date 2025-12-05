n.d(e, { u: () => c });
var i = n(818710),
    l = n(442837),
    s = n(223245),
    r = n(509613),
    u = n(246946),
    a = n(313789),
    o = n(388032);
let c = (0, r.qs)(a.n.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => o.intl.string(o.t.IxjaoF),
    useValue: function () {
        return (0, l.e7)([u.Z], () => {
            let { autoToggle: t } = u.Z.getSettings();
            return t;
        });
    },
    setValue: function (t) {
        s.Z.update({ autoToggle: t });
    },
    usePredicate: function () {
        return i.FB;
    },
});
