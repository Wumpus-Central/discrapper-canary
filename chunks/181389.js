(r.d(t, {
    Jl: () => i,
    g9: () => o
}),
    r(539854),
    r(35282));
var n = r(395041);
r(349033);
var s = r(607802),
    l = r(532428);
(r(72006), r(981631));
let a = {
    [l.Qe.FILTER]: n.w,
    [l.Qe.ANSWER]: n.O
};
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((r) => {
            let n = e[r];
            t.push({
                strategy: (e, t, n) => {
                    e.findEntityRanges((e) => {
                        let t = e.getEntity();
                        return null !== t && n.getEntity(t).getType() === r;
                    }, t);
                },
                component: a[n.componentType]
            });
        }),
        t
    );
}
function o(e, t) {
    let { focusOffset: r, anchorOffset: n } = t.getSelection();
    return (0, s.g9)(e, r, n);
}
