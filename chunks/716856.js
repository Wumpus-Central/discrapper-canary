n.d(e, { o: () => E });
var i = n(54381),
    l = n(442837),
    s = n(509613),
    u = n(325067),
    r = n(313789),
    a = n(616495),
    o = n(857314),
    T = n(968021),
    S = n(921356),
    c = n(388032);
let E = (0, s.ON)(r.n.ACCOUNT_BACKUP_CODES_SETTING, {
    useSearchTerms: () => [c.intl.string(c.t.m0FidJ), c.intl.string(c.t.xZEzbu)],
    usePredicate: function () {
        let t = (0, T.Y)(),
            e = (0, S.O)(),
            n = (0, o.N)(),
            i = (0, l.e7)([u.Z], () => u.Z.getBackupCodes().length > 0);
        return !t && !e && n && i;
    },
    Component: function () {
        let t = (0, l.e7)([u.Z], () => u.Z.getBackupCodes());
        return (0, i.jsx)(a.Z, { backupCodes: t });
    },
});
