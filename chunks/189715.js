let n = r(864886),
    o = r(74509),
    i = r(800670);
e.exports = (e, t) => {
    e = new o(e, t);
    let r = new n("0.0.0");
    if (e.test(r) || ((r = new n("0.0.0-0")), e.test(r))) return r;
    r = null;
    for (let t = 0; t < e.set.length; ++t) {
        let o = e.set[t],
            a = null;
        o.forEach((e) => {
            let t = new n(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                    (!a || i(t, a)) && (a = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw Error(`Unexpected operation: ${e.operator}`);
            }
        }),
            a && (!r || i(r, a)) && (r = a);
    }
    return r && e.test(r) ? r : null;
};
