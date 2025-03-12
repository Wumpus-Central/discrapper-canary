r(13667), r(390547), r(47120), r(230036), r(301563), r(566702), r(474991), r(398202), r(653041);
var n = r(658722),
    o = r.n(n),
    a = r(624138),
    u = r(697497),
    i = r(886118);
function l(e) {
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
            data: { id: t, searchTerm: r, searchStrings: n, searchType: c, sortType: s, jaroWinklerSearchThreshold: h }
        } = e,
        p = [];
    for (let e of l(r))
        switch (c) {
            case i.S.REGEX:
                p.push(
                    ...(function (e, t) {
                        let r = RegExp(e, 'i');
                        return t.reduce((e, t, n) => (f(t).some((e) => r.test(e)) ? [...e, n] : e), []);
                    })(e, n)
                );
                break;
            case i.S.FUZZY:
                p.push(
                    ...(function (e, t) {
                        return t.reduce(
                            (t, r, n) =>
                                f(r).some((t) =>
                                    (function (e, t) {
                                        let r = (0, a.Fv)(e),
                                            n = (0, a.Fv)(t);
                                        return o()(e, t) || o()(r, t) || o()(r, n);
                                    })(e, t)
                                )
                                    ? [...t, n]
                                    : t,
                            []
                        );
                    })(e, n)
                );
                break;
            case i.S.JARO_WINKLER:
                p.push(
                    ...(function (e, t, r) {
                        return t.reduce((t, n, o) => (Math.max(...f(n).map((t) => (0, u.H)(e, t))) >= r ? [...t, o] : t), []);
                    })(e, n, h)
                );
                break;
            case i.S.EXACT:
                p.push(
                    ...(function (e, t) {
                        return t.reduce((t, r, n) => (f(r).some((t) => t.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...t, n] : t), []);
                    })(e, n)
                );
        }
    let m = [...new Set(p)];
    s === i.E.JARO_WINKLER &&
        (m = (function (e, t, r) {
            let n = l(e);
            return r
                .map((e) => {
                    let r = f(t[e]);
                    return {
                        index: e,
                        rank: Math.max(...n.flatMap((e) => r.map((t) => (0, u.H)(e, t))))
                    };
                })
                .sort((e, t) => t.rank - e.rank)
                .map((e) => e.index);
        })(r, n, m));
    let d = {
        id: t,
        foundItemIndexes: m
    };
    self.postMessage(d);
});
