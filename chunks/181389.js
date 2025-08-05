(n.d(t, {
    Jl: () => l,
    g9: () => c
}),
    n(539854),
    n(35282));
var r = n(395041);
n(349033);
var i = n(607802),
    a = n(532428);
(n(72006), n(981631));
let o = {
    [a.Qe.FILTER]: r.w,
    [a.Qe.ANSWER]: r.O
};
function s(e, t, n, r) {
    t.findEntityRanges((t) => {
        let n = t.getEntity();
        return null !== n && e.getEntity(n).getType() === r;
    }, n);
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((n) => {
            let r = e[n];
            t.push({
                strategy: (e, t, r) => s(r, e, t, n),
                component: o[r.componentType]
            });
        }),
        t
    );
}
function c(e, t) {
    let { focusOffset: n, anchorOffset: r } = t.getSelection();
    return (0, i.g9)(e, n, r);
}
