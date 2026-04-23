t(321073);
var n = t(91871),
    a = t.n(n),
    o = t(240248),
    l = t(18108),
    i = t(379078);
function s(e) {
    return e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => "" !== e);
}
function u(e) {
    return "string" == typeof e ? [e.trim()] : e.map((e) => e.trim());
}
self.addEventListener("message", (e) => {
    var r;
    let t,
        {
            data: {
                id: n,
                searchTerm: f,
                searchStrings: h,
                searchType: c,
                sortType: p,
                jaroWinklerSearchThreshold: m,
                maxSearchResults: d,
            },
        } = e,
        g = [];
    for (let e of s(f))
        switch (c) {
            case i.n.REGEX:
                g.push(
                    ...(function (e, r) {
                        let t = RegExp(e, "i");
                        return r.reduce((e, r, n) => (u(r).some((e) => t.test(e)) ? [...e, n] : e), []);
                    })(e, h),
                );
                break;
            case i.n.FUZZY:
                g.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, n) =>
                                u(t).some((r) => {
                                    let t, n;
                                    return (t = (0, o.S8)(e)), (n = (0, o.S8)(r)), a()(e, r) || a()(t, r) || a()(t, n);
                                })
                                    ? [...r, n]
                                    : r,
                            [],
                        );
                    })(e, h),
                );
                break;
            case i.n.JARO_WINKLER:
                g.push(
                    ...(function (e, r, t) {
                        return r.reduce(
                            (r, n, a) => (Math.max(...u(n).map((r) => (0, l.g)(e, r))) >= t ? [...r, a] : r),
                            [],
                        );
                    })(e, h, m),
                );
                break;
            case i.n.EXACT:
                g.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, n) =>
                                u(t).some((r) => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, n] : r,
                            [],
                        );
                    })(e, h),
                );
        }
    let b = [...new Set(g)];
    p === i.r.JARO_WINKLER &&
        ((r = b),
        (t = s(f)),
        (b = r
            .map((e) => {
                let r = u(h[e]);
                return { index: e, rank: Math.max(...t.flatMap((e) => r.map((r) => (0, l.g)(e, r)))) };
            })
            .sort((e, r) => r.rank - e.rank)
            .map((e) => e.index))),
        d > 0 && (b = b.slice(0, d));
    let v = { id: n, foundItemIndexes: b };
    self.postMessage(v);
});
