let n = r(864886),
    o = r(532618),
    { safeRe: i, t: a } = r(64672);
e.exports = (e, t) => {
    if (e instanceof n) return e;
    if (("number" == typeof e && (e = String(e)), "string" != typeof e)) return null;
    let r = null;
    if ((t = t || {}).rtl) {
        let n,
            o = t.includePrerelease ? i[a.COERCERTLFULL] : i[a.COERCERTL];
        for (; (n = o.exec(e)) && (!r || r.index + r[0].length !== e.length); )
            (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
                (o.lastIndex = n.index + n[1].length + n[2].length);
        o.lastIndex = -1;
    } else r = e.match(t.includePrerelease ? i[a.COERCEFULL] : i[a.COERCE]);
    if (null === r) return null;
    let s = r[2],
        l = r[3] || "0",
        u = r[4] || "0",
        c = t.includePrerelease && r[5] ? `-${r[5]}` : "",
        f = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return o(`${s}.${l}.${u}${c}${f}`, t);
};
