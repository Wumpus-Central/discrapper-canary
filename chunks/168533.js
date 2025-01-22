let i = r(40231),
    a = r(889658),
    o = r(393808),
    s = (e, n) => {
        e = new a(e, n);
        let r = new i('0.0.0');
        if (e.test(r)) return r;
        if (((r = new i('0.0.0-0')), e.test(r))) return r;
        r = null;
        for (let n = 0; n < e.set.length; ++n) {
            let a = e.set[n],
                s = null;
            a.forEach((e) => {
                let n = new i(e.semver.version);
                switch (e.operator) {
                    case '>':
                        0 === n.prerelease.length ? n.patch++ : n.prerelease.push(0), (n.raw = n.format());
                    case '':
                    case '>=':
                        (!s || o(n, s)) && (s = n);
                        break;
                    case '<':
                    case '<=':
                        break;
                    default:
                        throw Error(`Unexpected operation: ${e.operator}`);
                }
            }),
                s && (!r || o(r, s)) && (r = s);
        }
        return r && e.test(r) ? r : null;
    };
e.exports = s;
