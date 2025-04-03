t(13667), t(390547), t(47120), t(230036), t(301563), t(566702), t(474991), t(398202), t(653041);
var n = t(658722),
    a = t.n(n),
    o = t(624138),
    l = t(697497),
    i = t(886118);
function u(e) {
    return e
        .split(',')
        .map((e) => e.trim())
        .filter((e) => '' !== e);
}
function f(e) {
    return 'string' == typeof e ? [e.trim()] : e.map((e) => e.trim());
}
self.addEventListener('message', (e) => {
    let {
            data: { id: r, searchTerm: t, searchStrings: n, searchType: s, sortType: c, jaroWinklerSearchThreshold: h }
        } = e,
        p = [];
    for (let e of u(t))
        switch (s) {
            case i.S.REGEX:
                p.push(
                    ...(function (e, r) {
                        let t = RegExp(e, 'i');
                        return r.reduce((e, r, n) => (f(r).some((e) => t.test(e)) ? [...e, n] : e), []);
                    })(e, n)
                );
                break;
            case i.S.FUZZY:
                p.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, n) =>
                                f(t).some((r) =>
                                    (function (e, r) {
                                        let t = (0, o.Fv)(e),
                                            n = (0, o.Fv)(r);
                                        return a()(e, r) || a()(t, r) || a()(t, n);
                                    })(e, r)
                                )
                                    ? [...r, n]
                                    : r,
                            []
                        );
                    })(e, n)
                );
                break;
            case i.S.JARO_WINKLER:
                p.push(
                    ...(function (e, r, t) {
                        return r.reduce((r, n, a) => (Math.max(...f(n).map((r) => (0, l.H)(e, r))) >= t ? [...r, a] : r), []);
                    })(e, n, h)
                );
                break;
            case i.S.EXACT:
                p.push(
                    ...(function (e, r) {
                        return r.reduce((r, t, n) => (f(t).some((r) => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, n] : r), []);
                    })(e, n)
                );
        }
    let m = [...new Set(p)];
    c === i.E.JARO_WINKLER &&
        (m = (function (e, r, t) {
            let n = u(e);
            return t
                .map((e) => {
                    let t = f(r[e]);
                    return {
                        index: e,
                        rank: Math.max(...n.flatMap((e) => t.map((r) => (0, l.H)(e, r))))
                    };
                })
                .sort((e, r) => r.rank - e.rank)
                .map((e) => e.index);
        })(t, n, m));
    let d = {
        id: r,
        foundItemIndexes: m
    };
    self.postMessage(d);
});
