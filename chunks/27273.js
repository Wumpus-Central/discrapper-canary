function i(e) {
    return e.split(/,/)[1];
}
function r(e) {
    return -1 !== e.search(/^(data:)/);
}
function a(e, t) {
    return `data:${t};base64,${e}`;
}
async function s(e, t, n) {
    let i = await fetch(e, t);
    if (404 === i.status) throw Error(`Resource "${i.url}" not found`);
    let r = await i.blob();
    return new Promise((e, t) => {
        let a = new FileReader();
        (a.onerror = t),
            (a.onloadend = () => {
                try {
                    e(
                        n({
                            res: i,
                            result: a.result
                        })
                    );
                } catch (e) {
                    t(e);
                }
            }),
            a.readAsDataURL(r);
    });
}
n.d(t, {
    DT: () => a,
    cd: () => s,
    pZ: () => r,
    sx: () => u
});
let o = {};
function l(e, t, n) {
    let i = e.replace(/\?.*/, '');
    return n && (i = e), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, '')), t ? `[${t}]${i}` : i;
}
async function u(e, t, n) {
    let r;
    let u = l(e, t, n.includeQueryParams);
    if (null != o[u]) return o[u];
    n.cacheBust && (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
    try {
        let o = await s(e, n.fetchRequestInit, ({ res: e, result: n }) => (t || (t = e.headers.get('Content-Type') || ''), i(n)));
        r = a(o, t);
    } catch (i) {
        r = n.imagePlaceholder || '';
        let t = `Failed to fetch resource: ${e}`;
        i && (t = 'string' == typeof i ? i : i.message), t && console.warn(t);
    }
    return (o[u] = r), r;
}
