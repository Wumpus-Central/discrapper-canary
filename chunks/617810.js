n.d(t, { q: () => r }), n(388685), n(539854);
var a = n(991346);
function r() {
    let e = (0, a.Pt)(),
        t = new Map();
    return (
        t.set("root", []),
        Object.entries(e).forEach((e) => {
            var n;
            let [a, r] = e;
            if (null != r.predicate && !r.predicate()) return;
            let i = null != (n = r.parent) ? n : "root";
            t.set(a, []), t.has(i) || t.set(i, []), t.get(i).push(a);
        }),
        { legacySettingDirectory: t }
    );
}
