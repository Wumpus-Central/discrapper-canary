let i = r(40231),
    a = r(889658),
    s = r(393808),
    o = (e, n) => {
        e = new a(e, n);
        let r = new i('0.0.0');
        if (e.test(r)) return r;
        if (((r = new i('0.0.0-0')), e.test(r))) return r;
        r = null;
        for (let n = 0; n < e.set.length; ++n) {
            let a = e.set[n],
                o = null;
            a.forEach((e) => {
                let n = new i(e.semver.version);
                switch (e.operator) {
                    case '>':
                        0 === n.prerelease.length ? n.patch++ : n.prerelease.push(0), (n.raw = n.format());
                    case '':
                    case '>=':
                        (!o || s(n, o)) && (o = n);
                        break;
                    case '<':
                    case '<=':
                        break;
                    default:
                        throw Error(`Unexpected operation: ${e.operator}`);
                }
            }),
                o && (!r || s(r, o)) && (r = o);
        }
        return r && e.test(r) ? r : null;
    };
e.exports = o;
