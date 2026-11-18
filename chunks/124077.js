var l = e(673383),
    r = e(752222),
    u = e(792996);
e.d(
    t,
    {},
    {
        A: function (n) {
            let { displayNoun: t, lowercase: e = !1 } = n;
            switch (t) {
                case l.XG.GUILD:
                    return u.intl.string(e ? r.default.aikK3o : r.default.sm5cz5);
                case l.XG.ALLIANCE:
                    return u.intl.string(e ? r.default.Y84911 : r.default.qw4LoI);
                case l.XG.CLAN:
                    return u.intl.string(e ? r.default.QGuKKF : r.default.jc1qry);
                default:
                    return u.intl.string(e ? r.default.xXXGsq : r.default.nVMqjA);
            }
        },
    },
);
