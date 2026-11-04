var i = n(582128),
    l = n(855986),
    r = n(851767);
let s = [];
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.bG)([r.A], () => r.A.getUserProfile(e));
            return (0, i.useMemo)(
                () => (t?.applicationRoleConnections == null ? s : t.applicationRoleConnections),
                [t?.applicationRoleConnections],
            );
        },
    },
);
