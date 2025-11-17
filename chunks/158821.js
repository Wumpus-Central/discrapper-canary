n.d(t, { d: () => o });
var r = n(929767),
    i = n(752689),
    a = n(90620);
function o(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let o = e[n];
        for (let e in o) {
            let n = t[e],
                s = o[e];
            "function" == typeof n &&
            "function" == typeof s &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (t[e] = (0, r.t)(n, s))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof s
                  ? (t[e] = (0, a.Z)(n, s))
                  : "id" === e && n && s
                    ? (t.id = (0, i.ur)(n, s))
                    : (t[e] = void 0 !== s ? s : n);
        }
    }
    return t;
}
