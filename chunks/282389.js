n.d(t, { A: () => l });
var r = n(503698),
    i = n.n(r),
    a = n(77157);
function l(e) {
    let t = (0, a.A)(e);
    return i()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: n } = e;
            return "staple" === t && "bottom" === n;
        }),
    });
}
