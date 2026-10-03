n.d(t, { $s: () => o, cI: () => s, qQ: () => u });
var i = n(17928),
    r = n(873298),
    l = n(594061),
    a = n(617617);
function s(e, t) {
    return e.vibegrations?.projects[t]?.muted === !0;
}
function o(e) {
    return (0, i.bG)([a.A], () => s(a.A.settings, e), [e]);
}
function u(e, t) {
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
