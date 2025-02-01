t(724458), t(47120), t(312677);
var n = t(658722),
    o = t.n(n),
    i = t(624138);
self.addEventListener('message', (r) => {
    let {
        data: { id: e, searchTerm: t, searchStrings: n, useRegex: u }
    } = r;
    if (u) {
        let r = (function (r, e) {
            let t = RegExp(r, 'i');
            return e.reduce((r, e, n) => {
                if ('' === e.trim()) return r;
                if (t.test(e)) return [...r, n];
                let o = (0, i.Fv)(e);
                return t.test(o) ? [...r, n] : r;
            }, []);
        })(t, n);
        self.postMessage({
            foundItemIndexes: r,
            id: e
        });
        return;
    }
    {
        let r = (function (r, e) {
            let t = r.toLocaleLowerCase(),
                n = (0, i.Fv)(t);
            return e.reduce((r, e, u) => {
                if ('' === e.trim()) return r;
                let a = e.toLocaleLowerCase(),
                    c = (0, i.Fv)(a);
                return o()(t, a) || o()(n, a) || o()(n, c) ? [...r, u] : r;
            }, []);
        })(t, n);
        self.postMessage({
            foundItemIndexes: r,
            id: e
        });
    }
});
