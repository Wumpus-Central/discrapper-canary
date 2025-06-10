a.d(e, {
    U: () => o,
    h: () => i
});
var r = a(370336),
    _ = a(967752);
function n(t) {
    let e = t.protocol ? `${t.protocol}:` : '',
        a = t.port ? `:${t.port}` : '';
    return `${e}//${t.host}${a}${t.path ? `/${t.path}` : ''}/api/`;
}
function o(t, e, a) {
    return (
        e ||
        `${n(t)}${t.projectId}/envelope/?${(0, r._j)({
            sentry_key: t.publicKey,
            sentry_version: '7',
            ...(a && { sentry_client: `${a.name}/${a.version}` })
        })}`
    );
}
function i(t, e) {
    let a = (0, _.vK)(t);
    if (!a) return '';
    let r = `${n(a)}embed/error-page/`,
        o = `dsn=${(0, _.RA)(a)}`;
    for (let t in e)
        if ('dsn' !== t && 'onClose' !== t)
            if ('user' === t) {
                let t = e.user;
                if (!t) continue;
                t.name && (o += `&name=${encodeURIComponent(t.name)}`), t.email && (o += `&email=${encodeURIComponent(t.email)}`);
            } else o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
    return `${r}?${o}`;
}
