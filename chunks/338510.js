n.d(t, {
    u: () => a,
}),
    n(638769);
var r = n(617641),
    l = n(168447),
    i = n(546140);

function a(e) {
    let t = (0, r.Lc)({
            location: "safety-tools-button",
        }),
        n = (0, i.L)(),
        a = (0, l.Y)(e);
    if (!t || !n) return;
    let s = a.filter((e) => null != e.dismiss_timestamp);
    if (0 !== s.length)
        return s.sort((e, t) => (e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
