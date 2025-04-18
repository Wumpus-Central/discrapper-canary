n.d(t, {
    Vb: () => o,
    YI: () => s,
    j1: () => l,
    u5: () => a
}),
    n(642613),
    n(35282);
var r = n(192379),
    i = n(164484);
function a() {
    let e = n(274304).Z;
    return o()
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
function o() {
    return n(515297);
}
function s(e, t) {
    var n, r;
    let i = o()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (i.includes(e)) return e;
    let a = e.split('-');
    return i.includes(a[0]) ? a[0] : 'zh' === a[0] && a.length > 1 && 'Hant' === a[1] ? (null != (n = i.find((e) => 'zh-TW' === e)) ? n : t) : null != (r = i.find((e) => e.split('-')[0] === a[0])) ? r : t;
}
function l(e, t) {
    r.useSyncExternalStore(
        (t) => e.onChange(t),
        () => e.isLocaleLoaded(t.currentLocale)
    );
}
