n.d(t, { $L: () => a, iI: () => o, j: () => u });
var i = n(17928),
    l = n(873298),
    s = n(594061),
    r = n(617617);
function u(e, t) {
    return e.vibegrations?.projects[t]?.muted === !0;
}
function o(e) {
    return (0, i.bG)([r.A], () => u(r.A.settings, e), [e]);
}
function a(e, t) {
    s.wc.updateAsync(
        "vibegrations",
        (n) => {
            if (t) n.projects[e] = l.ky.create({ muted: !0 });
            else {
                if (null == n.projects[e]) return !1;
                delete n.projects[e];
            }
        },
        s.Sb.INFREQUENT_USER_ACTION,
    );
}
