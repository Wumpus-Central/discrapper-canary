n.d(t, { Z: () => o, k: () => a });
var r = n(608768);
function i(e) {
    let t = e.protocol ? `${e.protocol}:` : "",
        n = e.port ? `:${e.port}` : "";
    return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function o(e, t, n) {
    let r;
    return (
        t ||
        `${i(e)}${e.projectId}/envelope/?${((r = { sentry_version: "7" }), e.publicKey && (r.sentry_key = e.publicKey), n && (r.sentry_client = `${n.name}/${n.version}`), new URLSearchParams(r).toString())}`
    );
}
function a(e, t) {
    let n = (0, r.AD)(e);
    if (!n) return "";
    let o = `${i(n)}embed/error-page/`,
        a = `dsn=${(0, r.SB)(n)}`;
    for (let e in t)
        if ("dsn" !== e && "onClose" !== e)
            if ("user" === e) {
                let e = t.user;
                if (!e) continue;
                e.name && (a += `&name=${encodeURIComponent(e.name)}`),
                    e.email && (a += `&email=${encodeURIComponent(e.email)}`);
            } else a += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
    return `${o}?${a}`;
}
