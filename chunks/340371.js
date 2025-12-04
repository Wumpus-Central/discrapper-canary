r.d(t, { B: () => a });
let n = r(606093).n;
function a() {
    let e = n.chrome,
        t = e && e.app && e.app.runtime,
        r = "history" in n && !!n.history.pushState && !!n.history.replaceState;
    return !t && r;
}
