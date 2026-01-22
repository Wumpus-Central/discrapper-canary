n.d(t, {
    Fm: () => o,
    R3: () => c,
    oC: () => u,
}),
    n(747238),
    n(896048),
    n(638769),
    n(321073),
    n(264879);
var r = n(294845),
    i = n.n(r);
let a = /^(\d{4}-\d{1,2})/;
function s(e) {
    let t = a.exec(e);
    return null != t ? t[1] : null;
}
function o(e) {
    return Array.from(Object.entries(e)).map((e) => {
        let [t, n] = e;
        return {
            id: t,
            experiment: n,
        };
    });
}
function l(e, t) {
    if (Array.isArray(e)) {
        for (let n of e) if (l(n, t)) return !0;
    } else if ("object" == typeof e && null !== e) {
        for (let n of Object.values(e)) if (l(n, t)) return !0;
    } else if ("string" == typeof e && e.toLowerCase().includes(t.toLowerCase())) return !0;
    return !1;
}
function c(e, t) {
    return e.slice().sort((e, n) => {
        if (null != t[null == e ? void 0 : e.id] && null == t[null == n ? void 0 : n.id]) return -1;
        if (null == t[null == e ? void 0 : e.id] && null != t[null == n ? void 0 : n.id]) return 1;
        let r = s(e.id),
            i = s(n.id);
        if (null != r && null != i) {
            let e = i.localeCompare(r);
            if (0 !== e) return e;
        }
        return e.experiment.title.localeCompare(n.experiment.title);
    });
}
function u(e, t) {
    let n = t.split(/\s+/g).filter((e) => "" !== e);
    if (0 === n.length) return e;
    let r = [];
    for (let t of e) {
        let e = 0;
        for (let r of n) l(t, r) && (e += 1);
        0 !== e && (null == r[e] && (r[e] = []), r[e].push(t));
    }
    return i()(r.filter((e) => void 0 !== e).reverse());
}
