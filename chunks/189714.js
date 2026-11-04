var i = n(855986),
    r = n(873298),
    a = n(594061),
    s = n(617617);
function l(e, t) {
    return e.conjure?.projects[t]?.muted === !0;
}
n.d(
    t,
    {},
    {
        $L: function (e, t) {
            a.wc.updateAsync(
                "conjure",
                (n) => {
                    let i = n.projects[e];
                    if (t) n.projects[e] = r.Zy.create({ ...i, muted: !0 });
                    else {
                        if (null == i) return !1;
                        Number(i.sidebarDismissedAt) > 0 ? (i.muted = !1) : delete n.projects[e];
                    }
                },
                a.Sb.INFREQUENT_USER_ACTION,
            );
        },
        iI: function (e) {
            return (0, i.bG)([s.A], () => l(s.A.settings, e), [e]);
        },
        j: l,
    },
);
