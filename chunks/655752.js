var r = u(105909),
    e = u(682901);
u.d(
    t,
    {},
    {
        P: function () {
            let n = (0, r.$F)();
            if (null == n) return null;
            if (n.status === r.Wo.UPCOMING) return n;
            let t = e.sp.indexOf(n.id),
                u = e.sp[t + 1];
            return null == u || -1 === t ? null : e.VD[u];
        },
    },
);
