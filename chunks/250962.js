r.d(t, {
    U: () => o,
    h: () => _,
});
var n = r(886649),
    a = r(390873);
function i(e) {
    let t = e.protocol ? `${e.protocol}:` : "",
        r = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${r}${e.path ? `/${e.path}` : ""}/api/`;
}
function o(e, t, r) {
    return (
        t ||
        `${i(e)}${e.projectId}/envelope/?${(0, n._j)({
            sentry_key: e.publicKey,
            sentry_version: "7",
            ...(r && { sentry_client: `${r.name}/${r.version}` }),
        })}`
    );
}
function _(e, t) {
    let r = (0, a.vK)(e);
    if (!r) return "";
    let n = `${i(r)}embed/error-page/`,
        o = `dsn=${(0, a.RA)(r)}`;
    for (let e in t)
        if ("dsn" !== e && "onClose" !== e)
            if ("user" === e) {
                let e = t.user;
                if (!e) continue;
                e.name && (o += `&name=${encodeURIComponent(e.name)}`),
                    e.email && (o += `&email=${encodeURIComponent(e.email)}`);
            } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
    return `${n}?${o}`;
}
