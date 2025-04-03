a.d(e, {
    U: () => o,
    h: () => i
});
var r = a(370336),
    n = a(967752);
function _(t) {
    let e = t.protocol ? `${t.protocol}:` : '',
        a = t.port ? `:${t.port}` : '';
    return `${e}//${t.host}${a}${t.path ? `/${t.path}` : ''}/api/`;
}
function o(t, e, a) {
    return (
        e ||
        `${_(t)}${t.projectId}/envelope/?${(0, r._j)({
            sentry_key: t.publicKey,
            sentry_version: '7',
            ...(a && { sentry_client: `${a.name}/${a.version}` })
        })}`
    );
}
function i(t, e) {
    let a = (0, n.vK)(t);
    if (!a) return '';
    let r = `${_(a)}embed/error-page/`,
        o = `dsn=${(0, n.RA)(a)}`;
    for (let t in e)
        if ('dsn' !== t && 'onClose' !== t)
            if ('user' === t) {
                let t = e.user;
                if (!t) continue;
                t.name && (o += `&name=${encodeURIComponent(t.name)}`), t.email && (o += `&email=${encodeURIComponent(t.email)}`);
            } else o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
    return `${r}?${o}`;
}
