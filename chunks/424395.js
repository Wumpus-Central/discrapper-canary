n.d(t, {
    Vb: () => o,
    YI: () => a,
    u5: () => i
}),
    n(230036),
    n(301563);
var r = n(389117);
function i() {
    let e = n(402198).Z;
    return o()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: i } = t;
            return {
                value: n,
                name: i,
                localizedName: e[(0, r.runtimeHashMessageKey)(n)]
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
function a(e, t) {
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
    return i.includes(a[0]) ? a[0] : 'zh' === a[0] && a.length > 1 && 'Hant' === a[1] ? (null !== (n = i.find((e) => 'zh-TW' === e)) && void 0 !== n ? n : t) : null !== (r = i.find((e) => e.split('-')[0] === a[0])) && void 0 !== r ? r : t;
}
