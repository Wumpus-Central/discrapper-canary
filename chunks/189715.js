let n = r(864886),
    i = r(74509),
    o = r(800670);
e.exports = (e, t) => {
    e = new i(e, t);
    let r = new n("0.0.0");
    if (e.test(r) || ((r = new n("0.0.0-0")), e.test(r))) return r;
    r = null;
    for (let t = 0; t < e.set.length; ++t) {
        let i = e.set[t],
            a = null;
        i.forEach((e) => {
            let t = new n(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                    (!a || o(t, a)) && (a = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw Error(`Unexpected operation: ${e.operator}`);
            }
        }),
            a && (!r || o(r, a)) && (r = a);
    }
    return r && e.test(r) ? r : null;
};
