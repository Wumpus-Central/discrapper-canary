n.d(t, {
    U: () => o,
    h: () => _,
});
var r = n(886649),
    i = n(390873);
function a(e) {
    let t = e.protocol ? `${e.protocol}:` : "",
        n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function o(e, t, n) {
    return (
        t ||
        `${a(e)}${e.projectId}/envelope/?${(0, r._j)({
            sentry_key: e.publicKey,
            sentry_version: "7",
            ...(n && { sentry_client: `${n.name}/${n.version}` }),
        })}`
    );
}
function _(e, t) {
    let n = (0, i.vK)(e);
    if (!n) return "";
    let r = `${a(n)}embed/error-page/`,
        o = `dsn=${(0, i.RA)(n)}`;
    for (let e in t)
        if ("dsn" !== e && "onClose" !== e)
            if ("user" === e) {
                let e = t.user;
                if (!e) continue;
                e.name && (o += `&name=${encodeURIComponent(e.name)}`),
                    e.email && (o += `&email=${encodeURIComponent(e.email)}`);
            } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
    return `${r}?${o}`;
}
