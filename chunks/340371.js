n.d(t, { B: () => i });
let r = n(606093).n;
function i() {
    let e = r.chrome,
        t = e && e.app && e.app.runtime,
        n = "history" in r && !!r.history.pushState && !!r.history.replaceState;
    return !t && n;
}
