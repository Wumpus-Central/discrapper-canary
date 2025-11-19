n.d(t, { q: () => l }), n(388685), n(539854);
var a = n(991346);
function l() {
    let e = (0, a.Pt)(),
        t = new Map();
    return (
        t.set("root", []),
        Object.entries(e).forEach((e) => {
            var n;
            let [a, l] = e;
            if (null != l.predicate && !l.predicate()) return;
            let i = null != (n = l.parent) ? n : "root";
            t.set(a, []), t.has(i) || t.set(i, []), t.get(i).push(a);
        }),
        { legacySettingDirectory: t }
    );
}
