n(321073);
let i = /^[0-9]+$/;
function r(e) {
    let t = [];
    for (let n of e) if (!(!i.test(n) || t.includes(n)) && (t.push(n), 6 === t.length)) break;
    return t;
}
n.d(
    t,
    {},
    {
        Z_: r,
        m5: function (e, t) {
            return `${e.join(",")}-${t}`;
        },
        rg: function (e) {
            let t = e.split("-");
            if (2 !== t.length) return null;
            let [n, a] = t;
            if (!i.test(a)) return null;
            let s = r(n.split(","));
            return 0 === s.length ? null : { scopeId: a, skuIds: s };
        },
    },
);
