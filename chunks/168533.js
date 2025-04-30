let r = n(40231),
    i = n(889658),
    a = n(393808);
e.exports = (e, t) => {
    e = new i(e, t);
    let n = new r('0.0.0');
    if (e.test(n) || ((n = new r('0.0.0-0')), e.test(n))) return n;
    n = null;
    for (let t = 0; t < e.set.length; ++t) {
        let i = e.set[t],
            o = null;
        i.forEach((e) => {
            let t = new r(e.semver.version);
            switch (e.operator) {
                case '>':
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case '':
                case '>=':
                    (!o || a(t, o)) && (o = t);
                    break;
                case '<':
                case '<=':
                    break;
                default:
                    throw Error(`Unexpected operation: ${e.operator}`);
            }
        }),
            o && (!n || a(n, o)) && (n = o);
    }
    return n && e.test(n) ? n : null;
};
