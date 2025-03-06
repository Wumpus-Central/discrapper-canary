t(47120), t(230036), t(566702), t(474991), t(398202), t(301563);
var n = t(658722),
    o = t.n(n),
    a = t(624138),
    i = t(697497),
    u = t(886118);
function l(e) {
    return 'string' == typeof e ? [e.trim()] : e.map((e) => e.trim());
}
self.addEventListener('message', (e) => {
    let r,
        {
            data: { id: t, searchTerm: n, searchStrings: f, searchType: c, sortType: s, jaroWinklerSearchThreshold: h }
        } = e;
    switch (c) {
        case u.S.REGEX:
            r = (function (e, r) {
                let t = RegExp(e, 'i');
                return r.reduce((e, r, n) => (l(r).some((e) => t.test(e)) ? [...e, n] : e), []);
            })(n, f);
            break;
        case u.S.FUZZY:
            r = f.reduce(
                (e, r, t) =>
                    l(r).some((e) =>
                        (function (e, r) {
                            let t = (0, a.Fv)(e),
                                n = (0, a.Fv)(r);
                            return o()(e, r) || o()(t, r) || o()(t, n);
                        })(n, e)
                    )
                        ? [...e, t]
                        : e,
                []
            );
            break;
        case u.S.JARO_WINKLER:
            r = f.reduce((e, r, t) => (Math.max(...l(r).map((e) => (0, i.H)(n, e))) >= h ? [...e, t] : e), []);
            break;
        case u.S.EXACT:
            r = f.reduce((e, r, t) => (l(r).some((e) => e.toLocaleLowerCase() === n.toLocaleLowerCase()) ? [...e, t] : e), []);
    }
    s === u.E.JARO_WINKLER &&
        (r = r
            .map((e) => {
                let r = Math.max(...l(f[e]).map((e) => (0, i.H)(n, e)));
                return {
                    index: e,
                    rank: r
                };
            })
            .sort((e, r) => r.rank - e.rank)
            .map((e) => e.index));
    let p = {
        id: t,
        foundItemIndexes: r
    };
    self.postMessage(p);
});
