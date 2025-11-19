_.d(e, {
    U: () => o,
    h: () => E,
});
var a = _(370336),
    r = _(967752);
function n(t) {
    let e = t.protocol ? `${t.protocol}:` : "",
        _ = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${_}${t.path ? `/${t.path}` : ""}/api/`;
}
function o(t, e, _) {
    return (
        e ||
        `${n(t)}${t.projectId}/envelope/?${(0, a._j)({
            sentry_key: t.publicKey,
            sentry_version: "7",
            ...(_ && { sentry_client: `${_.name}/${_.version}` }),
        })}`
    );
}
function E(t, e) {
    let _ = (0, r.vK)(t);
    if (!_) return "";
    let a = `${n(_)}embed/error-page/`,
        o = `dsn=${(0, r.RA)(_)}`;
    for (let t in e)
        if ("dsn" !== t && "onClose" !== t)
            if ("user" === t) {
                let t = e.user;
                if (!t) continue;
                t.name && (o += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (o += `&email=${encodeURIComponent(t.email)}`);
            } else o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
    return `${a}?${o}`;
}
