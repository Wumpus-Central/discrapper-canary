a.d(e, {
    EZ: () => i,
    Gf: () => o
});
let r = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function n(...t) {
    let e = '',
        a = !1;
    for (let r = t.length - 1; r >= -1 && !a; r--) {
        let n = r >= 0 ? t[r] : '/';
        n && ((e = `${n}/${e}`), (a = '/' === n.charAt(0)));
    }
    return (
        (e = (function (t, e) {
            let a = 0;
            for (let e = t.length - 1; e >= 0; e--) {
                let r = t[e];
                '.' === r ? t.splice(e, 1) : '..' === r ? (t.splice(e, 1), a++) : a && (t.splice(e, 1), a--);
            }
            if (e) for (; a--; ) t.unshift('..');
            return t;
        })(
            e.split('/').filter((t) => !!t),
            !a
        ).join('/')),
        (a ? '/' : '') + e || '.'
    );
}
function _(t) {
    let e = 0;
    for (; e < t.length && '' === t[e]; e++);
    let a = t.length - 1;
    for (; a >= 0 && '' === t[a]; a--);
    return e > a ? [] : t.slice(e, a - e + 1);
}
function o(t, e) {
    (t = n(t).slice(1)), (e = n(e).slice(1));
    let a = _(t.split('/')),
        r = _(e.split('/')),
        o = Math.min(a.length, r.length),
        i = o;
    for (let t = 0; t < o; t++)
        if (a[t] !== r[t]) {
            i = t;
            break;
        }
    let c = [];
    for (let t = i; t < a.length; t++) c.push('..');
    return (c = c.concat(r.slice(i))).join('/');
}
function i(t, e) {
    let a =
        (function (t) {
            let e = t.length > 1024 ? `<truncated>${t.slice(-1024)}` : t,
                a = r.exec(e);
            return a ? a.slice(1) : [];
        })(t)[2] || '';
    return e && a.slice(-1 * e.length) === e && (a = a.slice(0, a.length - e.length)), a;
}
