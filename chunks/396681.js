var n = s(492462);
s.d(
    t,
    {},
    {
        A: function (e) {
            let t = null != e.hash && "" !== e.hash ? (0, n.qg)(e.hash) : null;
            if (t?.token != null) return t.token;
            let s = null != e.search && "" !== e.search ? (0, n.qg)(e.search) : null;
            return s?.token != null ? s.token : null;
        },
    },
);
