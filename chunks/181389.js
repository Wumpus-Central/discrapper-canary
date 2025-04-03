n.d(t, {
    Jl: () => o,
    g9: () => s
}),
    n(653041),
    n(301563);
var r = n(395041);
n(349033);
var i = n(999650);
n(72006);
var a = n(405656);
n(981631);
let l = {
    [i.Qe.FILTER]: r.w,
    [i.Qe.ANSWER]: r.O
};
function o() {
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
                component: l[r.componentType]
            });
        }),
        t
    );
}
function s(e, t) {
    let { focusOffset: n, anchorOffset: r } = t.getSelection();
    return (0, a.g9)(e, n, r);
}
