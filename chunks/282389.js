t.d(r, { A: () => n });
var s = t(503698),
    a = t.n(s),
    l = t(77157);
function n(e) {
    let r = (0, l.A)(e);
    return a()({
        "custom-profile-frame": !!e,
        "custom-profile-frame-bottom": r?.layers.some((e) => {
            let { type: r, anchor: t } = e;
            return "staple" === r && "bottom" === t;
        }),
    });
}
