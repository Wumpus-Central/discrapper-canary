i.d(e, {
    c: () => _,
    f: () => d,
}),
    i(321073);
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(961350),
    u = i(670492),
    a = i(287809),
    o = i(780964),
    T = i(709913),
    A = i(32096),
    S = i(545214),
    E = i(985018);
function d() {
    return (0, l.bG)([a.default], () => {
        let t = a.default.getCurrentUser();
        return null != t && t.mfaEnabled;
    });
}
let _ = (0, s.E2)(o.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let t = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled()),
            e = [E.intl.string(E.t.m0FidJ), E.intl.string(E.t.xZEzbu)];
        return t ? e.push(E.intl.string(E.t["D+aE7g"])) : e.push(E.intl.string(E.t.cDgKte)), e;
    },
    usePredicate: function () {
        let t = (0, A.b)(),
            e = (0, S.A)(),
            i = d();
        return !t && !e && i;
    },
    Component: function () {
        let t = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
            e = (0, l.bG)([u.A], () => u.A.getBackupCodes()),
            i = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
        return null == t
            ? null
            : (0, n.jsx)(T.A, {
                  backupCodes: e,
                  currentUser: t,
                  hasTOTPEnabled: i,
              });
    },
});
