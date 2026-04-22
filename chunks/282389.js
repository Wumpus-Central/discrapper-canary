n.d(t, { A: () => a });
var l = n(503698),
    r = n.n(l),
    i = n(77157);
function a(e) {
    let t = (0, i.A)(e);
    return r()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: n } = e;
            return "staple" === t && "bottom" === n;
        }),
    });
}
