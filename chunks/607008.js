let n = r(864886),
    i = r(532618),
    { safeRe: o, t: a } = r(64672);
e.exports = (e, t) => {
    if (e instanceof n) return e;
    if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null;
    let r = null;
    if ((t = t || {}).rtl) {
        let n,
            i = t.includePrerelease ? o[a.COERCERTLFULL] : o[a.COERCERTL];
        for (; (n = i.exec(e)) && (!r || r.index + r[0].length !== e.length); )
            (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
                (i.lastIndex = n.index + n[1].length + n[2].length);
        i.lastIndex = -1;
    } else r = e.match(t.includePrerelease ? o[a.COERCEFULL] : o[a.COERCE]);
    if (null === r) return null;
    let s = r[2],
        l = r[3] || "0",
        u = r[4] || "0",
        c = t.includePrerelease && r[5] ? `-${r[5]}` : "",
        f = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return i(`${s}.${l}.${u}${c}${f}`, t);
};
