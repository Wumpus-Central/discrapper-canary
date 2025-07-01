(n.d(t, {
    Jl: () => i,
    g9: () => o
}),
    n(539854),
    n(35282));
var r = n(395041);
n(349033);
var s = n(999650);
n(72006);
var l = n(405656);
n(981631);
let a = {
    [s.Qe.FILTER]: r.w,
    [s.Qe.ANSWER]: r.O
};
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((n) => {
            let r = e[n];
            t.push({
                strategy: (e, t, r) => {
                    e.findEntityRanges((e) => {
                        let t = e.getEntity();
                        return null !== t && r.getEntity(t).getType() === n;
                    }, t);
                },
                component: a[r.componentType]
            });
        }),
        t
    );
}
function o(e, t) {
    let { focusOffset: n, anchorOffset: r } = t.getSelection();
    return (0, l.g9)(e, n, r);
}
