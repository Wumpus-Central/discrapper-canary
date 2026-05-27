t.d(r, { A: () => i });
var a = t(503698),
    s = t.n(a),
    l = t(77157);
function i(e) {
    let r = (0, l.A)(e);
    return s()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": r?.layers.some((e) => {
            let { type: r, anchor: t } = e;
            return "staple" === r && "bottom" === t;
        }),
    });
}
