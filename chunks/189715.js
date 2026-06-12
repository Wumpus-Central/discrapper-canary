let i = n(864886),
    r = n(74509),
    s = n(800670);
e.exports = (e, t) => {
    e = new r(e, t);
    let n = new i("0.0.0");
    if (e.test(n) || ((n = new i("0.0.0-0")), e.test(n))) return n;
    n = null;
    for (let t = 0; t < e.set.length; ++t) {
        let r = e.set[t],
            a = null;
        r.forEach((e) => {
            let t = new i(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                    (!a || s(t, a)) && (a = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw Error(`Unexpected operation: ${e.operator}`);
            }
        }),
            a && (!n || s(n, a)) && (n = a);
    }
    return n && e.test(n) ? n : null;
};
