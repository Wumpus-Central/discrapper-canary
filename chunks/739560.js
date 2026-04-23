a.d(t, { A: () => i }), a(667532);
var n = a(64700),
    l = a(506774);
function i() {
    let e = (0, n.useCallback)((e) => {
        let t = new Set(s());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), l.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [s(), e];
}
function s() {
    return l.w.get("RecentDismissibleOverrides") ?? [];
}
