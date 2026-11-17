var n = r(982240);
function u(e, t) {
    return e.reduce((e, r) => {
        let u = (0, n.rL)(r);
        return t >= u ? e : null == e || u < (0, n.rL)(e) ? r : e;
    }, null);
}
r.d(
    t,
    {},
    {
        XX: function (e, t) {
            return e.reduce((e, r) => {
                let u = (0, n.rL)(r);
                return t < u ? e : null == e || u > (0, n.rL)(e) ? r : e;
            }, null);
        },
        aZ: u,
        cz: function (e, t) {
            let r = u(e, t);
            return null == r ? null : (0, n.rL)(r) - t;
        },
    },
);
