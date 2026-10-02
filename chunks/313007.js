n.d(t, { $s: () => u, cI: () => s, qQ: () => a });
var i = n(17928),
    r = n(873298),
    l = n(594061),
    o = n(617617);
function s(e, t) {
    return e.vibegrations?.projects[t]?.muted === !0;
}
function u(e) {
    return (0, i.bG)([o.A], () => s(o.A.settings, e), [e]);
}
function a(e, t) {
    l.wc.updateAsync(
        "vibegrations",
        (n) => {
            if (t) n.projects[e] = r.ky.create({ muted: !0 });
            else {
                if (null == n.projects[e]) return !1;
                delete n.projects[e];
            }
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
