l.d(t, { i: () => r });
var n = l(261425),
    a = l(660183);
function r(e) {
    let t = e.id
        .replace(/([a-z\d])([A-Z])/g, "$1 $2")
        .replace(/[-_\s]+/g, " ")
        .trim()
        .toLowerCase();
    return "" === t || "default" === t ? a.intl.string(n.default.gHsgGe) : t.charAt(0).toUpperCase() + t.slice(1);
}
