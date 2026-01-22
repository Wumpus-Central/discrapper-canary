n.d(t, {
    Be: () => a,
    kG: () => s,
    kt: () => o,
    tp: () => l,
}),
    n(638769),
    n(747238);
var r = n(64700),
    i = n(932433);
function a() {
    let e = n(70603).A;
    return s()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: r } = t;
            return {
                value: n,
                name: r,
                localizedName: e[(0, i.runtimeHashMessageKey)(n)],
            };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: r } = t;
            return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? -1 : +(n > r);
        });
}
function s() {
    return n(416678);
}
function o(e, t) {
    var n, r;
    let i = s()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (i.includes(e)) return e;
    let a = e.split("-");
    return i.includes(a[0])
        ? a[0]
        : "zh" === a[0] && a.length > 1 && "Hant" === a[1]
          ? null != (r = i.find((e) => "zh-TW" === e))
              ? r
              : t
          : null != (n = i.find((e) => e.split("-")[0] === a[0]))
            ? n
            : t;
}
function l(e, t) {
    r.useSyncExternalStore(
        (t) => e.onChange(t),
        () => e.isLocaleLoaded(t.currentLocale),
    );
}
