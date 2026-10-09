n.d(t, { i: () => a });
var l = n(248675),
    r = n(660183);
function a(e) {
    let t = e.id
        .replace(/([a-z\d])([A-Z])/g, "$1 $2")
        .replace(/[-_\s]+/g, " ")
        .trim()
        .toLowerCase();
    return "" === t || "default" === t ? r.intl.string(l.default.gHsgGe) : t.charAt(0).toUpperCase() + t.slice(1);
}
