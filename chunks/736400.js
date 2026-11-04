var i = n(136722);
function r(e) {
    for (let { permissionOverwrites_: t } of e)
        if (null != t)
            for (let e in t) {
                let n = t[e];
                ((n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny)));
            }
}
n.d(
    t,
    {},
    {
        Ay: r,
        X3: function (e) {
            for (let [t, n] of e) r(n);
        },
        n2: function (e) {
            let { permissionOverwrites_: t } = e;
            if (null != t)
                for (let e in t) {
                    let n = t[e];
                    ((n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny)));
                }
            return e;
        },
    },
);
