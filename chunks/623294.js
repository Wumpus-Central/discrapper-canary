n.d(t, { Q: () => i });
var r = n(231338);
function i(e) {
    if (null == e) return;
    let t = r.Al.get(e);
    return null != t
        ? "theme-".concat(t, " theme-").concat(e, " images-").concat(t)
        : "theme-".concat(e, " images-").concat(e);
}
