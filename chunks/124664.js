let i = r(40231),
    a = r(868667),
    { safeRe: o, t: s } = r(646664),
    l = (e, n) => {
        if (e instanceof i) return e;
        if (('number' == typeof e && (e = String(e)), 'string' != typeof e)) return null;
        let r = null;
        if ((n = n || {}).rtl) {
            let i;
            let a = n.includePrerelease ? o[s.COERCERTLFULL] : o[s.COERCERTL];
            for (; (i = a.exec(e)) && (!r || r.index + r[0].length !== e.length); ) (!r || i.index + i[0].length !== r.index + r[0].length) && (r = i), (a.lastIndex = i.index + i[1].length + i[2].length);
            a.lastIndex = -1;
        } else r = e.match(n.includePrerelease ? o[s.COERCEFULL] : o[s.COERCE]);
        if (null === r) return null;
        let l = r[2],
            u = r[3] || '0',
            c = r[4] || '0',
            d = n.includePrerelease && r[5] ? `-${r[5]}` : '',
            f = n.includePrerelease && r[6] ? `+${r[6]}` : '';
        return a(`${l}.${u}.${c}${d}${f}`, n);
    };
e.exports = l;
