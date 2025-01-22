r.d(n, {
    VK: function () {
        return u;
    },
    qu: function () {
        return d;
    }
});
var i = r(47120);
var a = r(44315),
    o = r(469115),
    s = r(231338);
let l = 0.3;
function u(e) {
    let { angle: n, colors: r } = e;
    return 'linear-gradient('.concat(n, 'deg, ').concat(
        r
            .map((e) => {
                let { token: n, stop: r } = e;
                return ''.concat((0, a.Lq)(n), ' ').concat(r, '%');
            })
            .join(', '),
        ')'
    );
}
let c = [...o.bV, ...o.Qf];
function d(e, n) {
    return e === n || (e === s.BR.DARK && n === s.BR.DARKER) || (e === s.BR.DARKER && n === s.BR.DARK) || !1;
}
