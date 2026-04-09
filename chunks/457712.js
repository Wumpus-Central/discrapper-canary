n.d(t, { F: () => c });
var i = n(311907),
    s = n(419954),
    l = n(670492),
    a = n(780964),
    r = n(15173),
    o = n(272338),
    d = n(985018);
let c = (0, s.zZ)(a.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => d.intl.string(d.t.fC9qV0),
        useSubtitle: () =>
            (0, i.bG)([l.A], () => l.A.getBackupCodes().length > 0)
                ? d.intl.format(d.t.tp7zEK, {})
                : d.intl.string(d.t.LoOi4S),
        usePredicate: o.f,
        buildLayout: () => [u],
    }),
    u = (0, s.E2)(a.X.BACKUP_CODES_SETTING, { useSearchTerms: () => [d.intl.string(d.t.fC9qV0)], Component: r.A });
