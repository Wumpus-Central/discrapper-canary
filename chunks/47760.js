n.d(t, {
    VK: () => a,
    qu: () => s
}),
    n(47120);
var r = n(44315),
    i = n(469115),
    o = n(231338);
function a(e) {
    let { angle: t, colors: n } = e;
    return 'linear-gradient('.concat(t, 'deg, ').concat(
        n
            .map((e) => {
                let { token: t, stop: n } = e;
                return ''.concat((0, r.Lq)(t), ' ').concat(n, '%');
            })
            .join(', '),
        ')'
    );
}
function s(e, t) {
    return e === t || (e === o.BR.DARK && t === o.BR.DARKER) || (e === o.BR.DARKER && t === o.BR.DARK);
}
[...i.bV, ...i.Qf];
