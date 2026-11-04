var r = n(982240);
function u(e, t) {
    return e.reduce((e, n) => {
        let u = (0, r.rL)(n);
        return t >= u ? e : null == e || u < (0, r.rL)(e) ? n : e;
    }, null);
}
n.d(
    t,
    {},
    {
        XX: function (e, t) {
            return e.reduce((e, n) => {
                let u = (0, r.rL)(n);
                return t < u ? e : null == e || u > (0, r.rL)(e) ? n : e;
            }, null);
        },
        aZ: u,
        cz: function (e, t) {
            let n = u(e, t);
            return null == n ? null : (0, r.rL)(n) - t;
        },
    },
);
