t.d(r, { A: () => n });
var s = t(503698),
    l = t.n(s),
    a = t(77157);
function n(e) {
    let r = (0, a.A)(e);
    return l()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": r?.layers.some((e) => {
            let { type: r, anchor: t } = e;
            return "staple" === r && "bottom" === t;
        }),
    });
}
