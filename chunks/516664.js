n.d(t, { m: () => d });
var i = n(311907),
    s = n(419954),
    l = n(287809),
    r = n(780964),
    a = n(417628),
    o = n(985018);
let d = (0, s.Tf)(r.X.ACCOUNT_DISABLE_SETTING, {
    useTitle: () => o.intl.string(o.t["p/Tjtp"]),
    useSubtitle: () => o.intl.string(o.t.YvDmKb),
    useLabel: () => o.intl.string(o.t.jf5GGb),
    useVariant: () => "critical-secondary",
    onClick: () => (0, a.c)(!1),
    usePredicate: () => {
        let e = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return e?.isClaimed() ?? !1;
    },
});
