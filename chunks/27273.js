function i(e) {
    return e.split(/,/)[1];
}
function a(e) {
    return -1 !== e.search(/^(data:)/);
}
function o(e, n) {
    return `data:${n};base64,${e}`;
}
async function s(e, n, r) {
    let i = await fetch(e, n);
    if (404 === i.status) throw Error(`Resource "${i.url}" not found`);
    let a = await i.blob();
    return new Promise((e, n) => {
        let o = new FileReader();
        (o.onerror = n),
            (o.onloadend = () => {
                try {
                    e(
                        r({
                            res: i,
                            result: o.result
                        })
                    );
                } catch (e) {
                    n(e);
                }
            }),
            o.readAsDataURL(a);
    });
}
r.d(n, {
    DT: function () {
        return o;
    },
    cd: function () {
        return s;
    },
    pZ: function () {
        return a;
    },
    sx: function () {
        return c;
    }
});
let l = {};
function u(e, n, r) {
    let i = e.replace(/\?.*/, '');
    return r && (i = e), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, '')), n ? `[${n}]${i}` : i;
}
async function c(e, n, r) {
    let a;
    let c = u(e, n, r.includeQueryParams);
    if (null != l[c]) return l[c];
    r.cacheBust && (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
    try {
        let l = await s(e, r.fetchRequestInit, ({ res: e, result: r }) => (!n && (n = e.headers.get('Content-Type') || ''), i(r)));
        a = o(l, n);
    } catch (i) {
        a = r.imagePlaceholder || '';
        let n = `Failed to fetch resource: ${e}`;
        i && (n = 'string' == typeof i ? i : i.message), n && console.warn(n);
    }
    return (l[c] = a), a;
}
