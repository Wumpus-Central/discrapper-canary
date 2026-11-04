var i = n(582128),
    r = n(95498),
    a = n(269563);
let s = { es: "es-ES", nb: "no", nn: "no" };
function l() {
    return n(416678);
}
n.d(
    t,
    {},
    {
        Be: function () {
            let e = n(802249).A;
            return l()
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
        },
        b2: function (e, t) {
            let n = (0, a.qg)(e, { ignoreTag: !0 });
            return new r.InternalIntlMessage(n, t);
        },
        kG: l,
        kt: function (e, t) {
            let n = l()
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
            if (n.includes(i[0])) return i[0];
            let r = 1 === i.length ? s[i[0]] : null;
            return null != r && n.includes(r)
                ? r
                : "zh" === i[0] && i.length > 1 && "Hant" === i[1]
                  ? (n.find((e) => "zh-TW" === e) ?? t)
                  : (n.find((e) => e.split("-")[0] === i[0]) ?? t);
        },
        tp: function (e, t) {
            i.useSyncExternalStore(
                (t) => e.onChange(t),
                () => e.isLocaleLoaded(t.currentLocale),
            );
        },
    },
);
