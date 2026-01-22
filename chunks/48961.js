t(114821), t(339614), t(896048), t(638769), t(747238), t(733351), t(591487), t(727858), t(321073);
var a = t(91871),
    n = t.n(a),
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
                id: a,
                searchTerm: f,
                searchStrings: h,
                searchType: p,
                sortType: c,
                jaroWinklerSearchThreshold: d,
                maxSearchResults: m,
            },
        } = e,
        g = [];
    for (let e of s(f))
        switch (p) {
            case i.n.REGEX:
                g.push(
                    ...(function (e, r) {
                        let t = RegExp(e, "i");
                        return r.reduce((e, r, a) => (u(r).some((e) => t.test(e)) ? [...e, a] : e), []);
                    })(e, h),
                );
                break;
            case i.n.FUZZY:
                g.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, a) =>
                                u(t).some((r) => {
                                    let t, a;
                                    return (t = (0, o.S8)(e)), (a = (0, o.S8)(r)), n()(e, r) || n()(t, r) || n()(t, a);
                                })
                                    ? [...r, a]
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
                            (r, a, n) => (Math.max(...u(a).map((r) => (0, l.g)(e, r))) >= t ? [...r, n] : r),
                            [],
                        );
                    })(e, h, d),
                );
                break;
            case i.n.EXACT:
                g.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, a) =>
                                u(t).some((r) => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, a] : r,
                            [],
                        );
                    })(e, h),
                );
        }
    let v = [...new Set(g)];
    c === i.r.JARO_WINKLER &&
        ((r = v),
        (t = s(f)),
        (v = r
            .map((e) => {
                let r = u(h[e]);
                return {
                    index: e,
                    rank: Math.max(...t.flatMap((e) => r.map((r) => (0, l.g)(e, r)))),
                };
            })
            .sort((e, r) => r.rank - e.rank)
            .map((e) => e.index))),
        m > 0 && (v = v.slice(0, m));
    let b = {
        id: a,
        foundItemIndexes: v,
    };
    self.postMessage(b);
});
