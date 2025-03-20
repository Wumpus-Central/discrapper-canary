n.d(t, { VK: () => o }), n(47120);
var r = n(44315),
    i = n(469115);
n(231338);
function o(e) {
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
[...i.bV, ...i.Qf];
