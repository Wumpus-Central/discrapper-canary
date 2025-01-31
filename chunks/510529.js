a.d(e, {
    U: () => _,
    h: () => i
});
var r = a(370336),
    n = a(967752);
function o(t) {
    let e = t.protocol ? `${t.protocol}:` : '',
        a = t.port ? `:${t.port}` : '';
    return `${e}//${t.host}${a}${t.path ? `/${t.path}` : ''}/api/`;
}
function _(t, e, a) {
    return (
        e ||
        `${o(t)}${t.projectId}/envelope/?${(0, r._j)({
            sentry_key: t.publicKey,
            sentry_version: '7',
            ...(a && { sentry_client: `${a.name}/${a.version}` })
        })}`
    );
}
function i(t, e) {
    let a = (0, n.vK)(t);
    if (!a) return '';
    let r = `${o(a)}embed/error-page/`,
        _ = `dsn=${(0, n.RA)(a)}`;
    for (let t in e)
        if ('dsn' !== t && 'onClose' !== t) {
            if ('user' === t) {
                let t = e.user;
                if (!t) continue;
                t.name && (_ += `&name=${encodeURIComponent(t.name)}`), t.email && (_ += `&email=${encodeURIComponent(t.email)}`);
            } else _ += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
        }
    return `${r}?${_}`;
}
