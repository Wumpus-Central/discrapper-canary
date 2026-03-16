"use strict";
n.d(t, { Be: () => s, kG: () => a, kt: () => o, tp: () => l });
var r = n(64700),
    i = n(932433);
function s() {
    let e = n(70603).A;
    return a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: r } = t;
            return { value: n, name: r, localizedName: e[(0, i.runtimeHashMessageKey)(n)] };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: r } = t;
            return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? -1 : +(n > r);
        });
}
function a() {
    return n(416678);
}
function o(e, t) {
    let n = a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (n.includes(e)) return e;
    let r = e.split("-");
    return n.includes(r[0])
        ? r[0]
        : "zh" === r[0] && r.length > 1 && "Hant" === r[1]
          ? (n.find((e) => "zh-TW" === e) ?? t)
          : (n.find((e) => e.split("-")[0] === r[0]) ?? t);
}
function l(e, t) {
    r.useSyncExternalStore(
        (t) => e.onChange(t),
        () => e.isLocaleLoaded(t.currentLocale),
    );
}
