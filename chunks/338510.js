n.d(t, { u: () => a });
var i = n(617641),
    l = n(168447),
    s = n(546140);
function a(e) {
    let t = (0, i.Lc)({ location: "safety-tools-button" }),
        n = (0, s.L)(),
        a = (0, l.Y)(e);
    if (!t || !n) return;
    let r = a.filter((e) => null != e.dismiss_timestamp);
    if (0 !== r.length)
        return r.sort((e, t) => (e.type > t.type || e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1))[0];
}
