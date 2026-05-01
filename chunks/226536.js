"use strict";
n.d(t, { Be: () => s, kG: () => a, kt: () => o, tp: () => l });
var i = n(64700),
    r = n(919523);
function s() {
    let e = n(692914).A;
    return a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: i } = t;
            return { value: n, name: i, localizedName: e[(0, r.runtimeHashMessageKey)(n)] };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: i } = t;
            return (n = n.toLowerCase()) < (i = i.toLowerCase()) ? -1 : +(n > i);
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
    let i = e.split("-");
    return n.includes(i[0])
        ? i[0]
        : "zh" === i[0] && i.length > 1 && "Hant" === i[1]
          ? (n.find((e) => "zh-TW" === e) ?? t)
          : (n.find((e) => e.split("-")[0] === i[0]) ?? t);
}
function l(e, t) {
    i.useSyncExternalStore(
        (t) => e.onChange(t),
        () => e.isLocaleLoaded(t.currentLocale),
    );
}
