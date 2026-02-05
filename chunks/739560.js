n.d(t, { A: () => i }), n(667532);
var a = n(64700),
    s = n(506774);
function i() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(l());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), s.w.set("RecentDismissibleOverrides", n);
    }, []);
    return [l(), e];
}
function l() {
    return s.w.get("RecentDismissibleOverrides") ?? [];
}
