a.d(t, { A: () => i });
var n = a(503698),
    l = a.n(n),
    r = a(77157);
function i(e) {
    let t = (0, r.A)(e);
    return l()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": t?.layers.some((e) => {
            let { type: t, anchor: a } = e;
            return "staple" === t && "bottom" === a;
        }),
    });
}
