r.d(t, { $L: () => o, iI: () => p, j: () => u });
var s = r(17928),
    i = r(873298),
    n = r(594061),
    c = r(617617);
function u(e, t) {
    return e.vibegrations?.projects[t]?.muted === !0;
}
function p(e) {
    return (0, s.bG)([c.A], () => u(c.A.settings, e), [e]);
}
function o(e, t) {
    n.wc.updateAsync(
        "vibegrations",
        (r) => {
            if (t) r.projects[e] = i.ky.create({ muted: !0 });
            else {
                if (null == r.projects[e]) return !1;
                delete r.projects[e];
            }
        },
        n.Sb.INFREQUENT_USER_ACTION,
    );
}
