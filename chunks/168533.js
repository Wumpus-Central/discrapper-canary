let i = n(40231),
    r = n(889658),
    a = n(393808),
    s = (e, t) => {
        e = new r(e, t);
        let n = new i('0.0.0');
        if (e.test(n) || ((n = new i('0.0.0-0')), e.test(n))) return n;
        n = null;
        for (let t = 0; t < e.set.length; ++t) {
            let r = e.set[t],
                s = null;
            r.forEach((e) => {
                let t = new i(e.semver.version);
                switch (e.operator) {
                    case '>':
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                    case '':
                    case '>=':
                        (!s || a(t, s)) && (s = t);
                        break;
                    case '<':
                    case '<=':
                        break;
                    default:
                        throw Error(`Unexpected operation: ${e.operator}`);
                }
            }),
                s && (!n || a(n, s)) && (n = s);
        }
        return n && e.test(n) ? n : null;
    };
e.exports = s;
