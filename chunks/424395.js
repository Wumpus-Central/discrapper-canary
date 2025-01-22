r.d(n, {
    Vb: function () {
        return s;
    },
    YI: function () {
        return l;
    },
    u5: function () {
        return o;
    },
    vJ: function () {
        return a;
    }
});
var i = r(969090);
let a = r(139458).B || !1;
function o() {
    let e = r(610398).Z;
    return s()
        .filter((e) => {
            let { enabled: n } = e;
            return n;
        })
        .map((n) => {
            let { code: r, name: a } = n;
            return {
                value: r,
                name: a,
                localizedName: e[(0, i.runtimeHashMessageKey)(r)]
            };
        })
        .sort((e, n) => {
            let { name: r } = e,
                { name: i } = n;
            return (r = r.toLowerCase()), r < (i = i.toLowerCase()) ? -1 : r > i ? 1 : 0;
        });
}
function s() {
    return r(515297);
}
function l(e, n) {
    var r, i;
    let a = s()
        .filter((e) => {
            let { enabled: n } = e;
            return n;
        })
        .map((e) => {
            let { code: n } = e;
            return n;
        });
    if (a.includes(e)) return e;
    let o = e.split('-');
    return a.includes(o[0]) ? o[0] : 'zh' === o[0] && o.length > 1 && 'Hant' === o[1] ? (null !== (r = a.find((e) => 'zh-TW' === e)) && void 0 !== r ? r : n) : null !== (i = a.find((e) => e.split('-')[0] === o[0])) && void 0 !== i ? i : n;
}
