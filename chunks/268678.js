r.d(t, { b: () => i });
var n = r(295551);
function i(e, t) {
    let { id: r, "aria-label": i, "aria-labelledby": o } = e;
    return (
        (r = (0, n.Bi)(r)),
        o && i
            ? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(" "))
            : o && (o = o.trim().split(/\s+/).join(" ")),
        i || o || !t || (i = t),
        { id: r, "aria-label": i, "aria-labelledby": o }
    );
}
