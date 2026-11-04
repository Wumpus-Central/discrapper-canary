i.d(t, { v: () => a });
var s = i(477900),
    r = i(582128),
    n = i(62617);
function a(e) {
    let { alt: t, ariaLabel: i, ariaHidden: a, role: l, size: o = 64 } = e,
        c = r.useMemo(() => (0, n.H)({ width: o, height: o, intrinsicWidth: 64, intrinsicHeight: 64 }), [o]);
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/33e98755a49cf85d07b8189a0001926c17d91599d53662a39999329f5253254f.svg",
        className: (0, n.Z)(),
        alt: t,
        "aria-label": i,
        "aria-hidden": a,
        role: l ?? "img",
    });
}
