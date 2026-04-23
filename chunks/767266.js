n.d(t, { g: () => m });
var i = n(627968),
    s = n(311907),
    l = n(419954),
    a = n(670492),
    r = n(780964),
    o = n(943207),
    d = n(272338),
    u = n(398336),
    c = n(865054),
    g = n(985018);
let m = (0, l.E2)(r.X.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.m0FidJ), g.intl.string(g.t.xZEzbu)],
    usePredicate: function () {
        let e = (0, u.b)(),
            t = (0, c.A)(),
            n = (0, d.f)(),
            i = (0, s.bG)([a.A], () => a.A.getBackupCodes().length > 0);
        return !e && !t && n && i;
    },
    Component: function () {
        let e = (0, s.bG)([a.A], () => a.A.getBackupCodes());
        return (0, i.jsx)(o.A, { backupCodes: e });
    },
});
