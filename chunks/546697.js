n.d(t, { q: () => i }), n(388685), n(539854);
var a = n(991346);
function i() {
    let e = (0, a.Pt)(),
        t = new Map();
    return (
        t.set("root", []),
        Object.entries(e).forEach((e) => {
            var n;
            let [a, i] = e;
            if (null != i.predicate && !i.predicate()) return;
            let r = null != (n = i.parent) ? n : "root";
            t.set(a, []), t.has(r) || t.set(r, []), t.get(r).push(a);
        }),
        { legacySettingDirectory: t }
    );
}
