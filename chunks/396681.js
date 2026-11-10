var s = n(492462);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = null != e.hash && "" !== e.hash ? (0, s.qg)(e.hash) : null;
            if (t?.token != null) return t.token;
            let n = null != e.search && "" !== e.search ? (0, s.qg)(e.search) : null;
            return n?.token != null ? n.token : null;
        },
    },
);
