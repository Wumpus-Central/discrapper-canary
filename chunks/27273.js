function r(e) {
    return e.split(/,/)[1];
}
function i(e) {
    return -1 !== e.search(/^(data:)/);
}
function a(e, t) {
    return `data:${t};base64,${e}`;
}
async function o(e, t, n) {
    let r = await fetch(e, t);
    if (404 === r.status) throw Error(`Resource "${r.url}" not found`);
    let i = await r.blob();
    return new Promise((e, t) => {
        let a = new FileReader();
        (a.onerror = t),
            (a.onloadend = () => {
                try {
                    e(
                        n({
                            res: r,
                            result: a.result
                        })
                    );
                } catch (e) {
                    t(e);
                }
            }),
            a.readAsDataURL(i);
    });
}
n.d(t, {
    DT: () => a,
    cd: () => o,
    pZ: () => i,
    sx: () => c
});
let s = {};
function l(e, t, n) {
    let r = e.replace(/\?.*/, '');
    return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, '')), t ? `[${t}]${r}` : r;
}
async function c(e, t, n) {
    let i,
        c = l(e, t, n.includeQueryParams);
    if (null != s[c]) return s[c];
    n.cacheBust && (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
    try {
        let s = await o(e, n.fetchRequestInit, ({ res: e, result: n }) => (t || (t = e.headers.get('Content-Type') || ''), r(n)));
        i = a(s, t);
    } catch (r) {
        i = n.imagePlaceholder || '';
        let t = `Failed to fetch resource: ${e}`;
        r && (t = 'string' == typeof r ? r : r.message), t && console.warn(t);
    }
    return (s[c] = i), i;
}
