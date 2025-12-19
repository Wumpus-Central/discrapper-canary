n.d(e, { c: () => _ });
var i = n(54381),
    l = n(442837),
    s = n(509613),
    u = n(314897),
    r = n(325067),
    a = n(594174),
    o = n(313789),
    T = n(867289),
    S = n(857314),
    c = n(968021),
    E = n(921356),
    d = n(388032);
let _ = (0, s.ON)(o.n.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [d.intl.string(d.t.uHAJ5v)],
    usePredicate: function () {
        let t = (0, c.Y)(),
            e = (0, E.O)(),
            n = (0, S.N)(),
            i = (0, l.e7)([u.default], () => u.default.hasTOTPEnabled());
        return !t && !e && n && i;
    },
    Component: function () {
        let t = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
            e = (0, l.e7)([r.Z], () => r.Z.togglingSMS);
        return null == t
            ? null
            : (0, i.jsx)(T.Z, {
                  currentUser: t,
                  togglingSMS: e,
              });
    },
});
