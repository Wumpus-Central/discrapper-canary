n.d(e, { E: () => T });
var i = n(442837),
    l = n(90641),
    s = n(615830),
    u = n(630759),
    r = n(509613),
    a = n(313789),
    o = n(388032);
let T = (0, r.qs)(a.n.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => o.intl.string(o.t["opi/XK"]),
    useSubtitle: () => o.intl.format(o.t["/T+ZlP"], { helpArticle: (0, u.aZ)() }),
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getPersistentCodesEnabled());
    },
    setValue: function (t) {
        l.Z.updatePersistentCodesEnabled(t);
    },
});
