i.d(e, { r: () => d });
var n = i(311907),
    l = i(936388),
    s = i(714763),
    r = i(814278),
    a = i(419954),
    u = i(780964),
    o = i(985018);
let d = (0, a.zD)(u.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => o.intl.string(o.t["opi/XK"]),
    useSubtitle: () => o.intl.format(o.t["/T+ZlP"], { helpArticle: (0, r.Lu)() }),
    useValue: function () {
        return (0, n.bG)([s.A], () => s.A.getPersistentCodesEnabled());
    },
    setValue: function (t) {
        l.A.updatePersistentCodesEnabled(t);
    },
});
