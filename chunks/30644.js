n.d(e, { u: () => T });
var i = n(818710),
    l = n(442837),
    s = n(223245),
    u = n(509613),
    r = n(246946),
    a = n(313789),
    o = n(388032);
let T = (0, u.qs)(a.n.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => o.intl.string(o.t.IxjaoF),
    useValue: function () {
        return (0, l.e7)([r.Z], () => {
            let { autoToggle: t } = r.Z.getSettings();
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
