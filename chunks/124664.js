let i = n(40231),
    r = n(868667),
    { safeRe: a, t: s } = n(646664),
    o = (e, t) => {
        if (e instanceof i) return e;
        if (('number' == typeof e && (e = String(e)), 'string' != typeof e)) return null;
        let n = null;
        if ((t = t || {}).rtl) {
            let i;
            let r = t.includePrerelease ? a[s.COERCERTLFULL] : a[s.COERCERTL];
            for (; (i = r.exec(e)) && (!n || n.index + n[0].length !== e.length); ) (n && i.index + i[0].length === n.index + n[0].length) || (n = i), (r.lastIndex = i.index + i[1].length + i[2].length);
            r.lastIndex = -1;
        } else n = e.match(t.includePrerelease ? a[s.COERCEFULL] : a[s.COERCE]);
        if (null === n) return null;
        let o = n[2],
            l = n[3] || '0',
            u = n[4] || '0',
            c = t.includePrerelease && n[5] ? `-${n[5]}` : '',
            d = t.includePrerelease && n[6] ? `+${n[6]}` : '';
        return r(`${o}.${l}.${u}${c}${d}`, t);
    };
e.exports = o;
