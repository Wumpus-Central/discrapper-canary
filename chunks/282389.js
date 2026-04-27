a.d(t, { A: () => i });
var r = a(503698),
    n = a.n(r),
    l = a(77157);
function i(e) {
    let t = (0, l.A)(e);
    return n()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: a } = e;
            return "staple" === t && "bottom" === a;
        }),
    });
}
