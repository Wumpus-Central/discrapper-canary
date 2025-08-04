n.d(t, { VK: () => i });
var r = n(44315);
n(231338);
function i(e) {
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
