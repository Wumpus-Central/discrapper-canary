n.d(t, { m: () => d });
var i = n(311907),
    s = n(419954),
    l = n(287809),
    a = n(780964),
    r = n(417628),
    o = n(985018);
let d = (0, s.Tf)(a.X.ACCOUNT_DISABLE_SETTING, {
    useTitle: () => o.intl.string(o.t["p/Tjtp"]),
    useSubtitle: () => o.intl.string(o.t.YvDmKb),
    useLabel: () => o.intl.string(o.t.jf5GGb),
    useVariant: () => "secondary",
    onClick: () => (0, r.c)(!1),
    usePredicate: () => {
        let e = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return e?.isClaimed() ?? !1;
    },
});
