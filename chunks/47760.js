n.d(t, {
    VK: () => a,
    e: () => o,
});
var r = n(900089),
    i = n(874893);
n(231338);
function a(e) {
    let { angle: t, colors: n } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(
        n
            .map((e) => {
                let { token: t, stop: n } = e;
                return "".concat((0, r.x3)(t, { saturation: 1 }), " ").concat(n, "%");
            })
            .join(", "),
        ")",
    );
}
let o = (e) => i.yW[e];
