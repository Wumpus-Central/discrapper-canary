var a = u(390544);
let n = new Set([a.M.SLEEPING, a.M.OFFLINE, a.M.ONLINE]);
u.d(
    t,
    {},
    {
        A: function (s) {
            return null == s || (null != s.status && n.has(s.status));
        },
    },
);
