e(566702), e(47120), e(474991), e(398202), e(301563);
var n = e(658722),
    o = e.n(n),
    i = e(624138);
self.addEventListener('message', (t) => {
    let {
        data: { id: r, searchTerm: e, searchStrings: n, useRegex: u }
    } = t;
    if (u) {
        let t = (function (t, r) {
            let e = RegExp(t, 'i');
            return r.reduce((t, r, n) => {
                if ('' === r.trim()) return t;
                if (e.test(r)) return [...t, n];
                let o = (0, i.Fv)(r);
                return e.test(o) ? [...t, n] : t;
            }, []);
        })(e, n);
        self.postMessage({
            foundItemIndexes: t,
            id: r
        });
        return;
    }
    {
        let t = (function (t, r) {
            let e = t.toLocaleLowerCase(),
                n = (0, i.Fv)(e);
            return r.reduce((t, r, u) => {
                if ('' === r.trim()) return t;
                let a = r.toLocaleLowerCase(),
                    c = (0, i.Fv)(a);
                return o()(e, a) || o()(n, a) || o()(n, c) ? [...t, u] : t;
            }, []);
        })(e, n);
        self.postMessage({
            foundItemIndexes: t,
            id: r
        });
    }
});
