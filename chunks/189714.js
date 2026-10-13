n.d(t, { $L: () => d, iI: () => o, j: () => l });
var i = n(17928),
    r = n(873298),
    a = n(594061),
    s = n(617617);
function l(e, t) {
    return e.conjure?.projects[t]?.muted === !0;
}
function o(e) {
    return (0, i.bG)([s.A], () => l(s.A.settings, e), [e]);
}
function d(e, t) {
    a.wc.updateAsync(
        "conjure",
        (n) => {
            if (t) n.projects[e] = r.Zy.create({ muted: !0 });
            else {
                if (null == n.projects[e]) return !1;
                delete n.projects[e];
            }
        },
        a.Sb.INFREQUENT_USER_ACTION,
    );
}
