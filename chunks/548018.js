i.d(e, { c: () => g, f: () => E }), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    a = i(670492),
    u = i(287809),
    o = i(780964),
    d = i(709913),
    T = i(32096),
    A = i(545214),
    S = i(985018);
function E() {
    return (0, l.bG)([u.default], () => {
        let t = u.default.getCurrentUser();
        return null != t && t.mfaEnabled;
    });
}
let g = (0, s.E2)(o.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let t = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled()),
            e = [S.intl.string(S.t.m0FidJ), S.intl.string(S.t.xZEzbu)];
        return t ? e.push(S.intl.string(S.t["D+aE7g"])) : e.push(S.intl.string(S.t.cDgKte)), e;
    },
    usePredicate: function () {
        let t = (0, T.b)(),
            e = (0, A.A)(),
            i = E();
        return !t && !e && i;
    },
    Component: function () {
        let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
            e = (0, l.bG)([a.A], () => a.A.getBackupCodes()),
            i = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return null == t ? null : (0, n.jsx)(d.A, { backupCodes: e, currentUser: t, hasTOTPEnabled: i });
    },
});
