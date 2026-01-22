n.d(t, { A: () => i }), n(896048), n(667532);
var a = n(64700),
    l = n(506774);
function i() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(r());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), l.w.set("RecentDismissibleOverrides", n);
    }, []);
    return [r(), e];
}
function r() {
    var e;
    return null != (e = l.w.get("RecentDismissibleOverrides")) ? e : [];
}
