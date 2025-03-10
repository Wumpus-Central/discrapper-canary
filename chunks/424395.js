n.d(t, {
    Vb: () => a,
    YI: () => s,
    j1: () => l,
    u5: () => o
}),
    n(230036),
    n(301563);
var r = n(192379),
    i = n(389117);
function o() {
    let e = n(415442).Z;
    return a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: r } = t;
            return {
                value: n,
                name: r,
                localizedName: e[(0, i.runtimeHashMessageKey)(n)]
            };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: r } = t;
            return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? -1 : +(n > r);
        });
}
function a() {
    return n(515297);
}
function s(e, t) {
    var n, r;
    let i = a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (i.includes(e)) return e;
    let o = e.split('-');
    return i.includes(o[0]) ? o[0] : 'zh' === o[0] && o.length > 1 && 'Hant' === o[1] ? (null !== (n = i.find((e) => 'zh-TW' === e)) && void 0 !== n ? n : t) : null !== (r = i.find((e) => e.split('-')[0] === o[0])) && void 0 !== r ? r : t;
}
function l(e, t) {
    r.useSyncExternalStore(
        (t) => e.onChange(t),
        () => e.isLocaleLoaded(t.currentLocale)
    );
}
