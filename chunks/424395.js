n.d(t, {
    Vb: () => a,
    YI: () => s,
    u5: () => r
});
var i = n(852985);
function r() {
    let e = n(959994).Z;
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
                { name: i } = t;
            return (n = n.toLowerCase()) < (i = i.toLowerCase()) ? -1 : n > i ? 1 : 0;
        });
}
function a() {
    return n(515297);
}
function s(e, t) {
    var n, i;
    let r = a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (r.includes(e)) return e;
    let s = e.split('-');
    return r.includes(s[0]) ? s[0] : 'zh' === s[0] && s.length > 1 && 'Hant' === s[1] ? (null !== (n = r.find((e) => 'zh-TW' === e)) && void 0 !== n ? n : t) : null !== (i = r.find((e) => e.split('-')[0] === s[0])) && void 0 !== i ? i : t;
}
