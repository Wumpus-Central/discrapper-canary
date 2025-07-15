(r.d(t, {
    Jl: () => o,
    g9: () => i
}),
    r(539854),
    r(35282));
var n = r(395041);
r(349033);
var s = r(999650);
r(72006);
var l = r(405656);
r(981631);
let a = {
    [s.Qe.FILTER]: n.w,
    [s.Qe.ANSWER]: n.O
};
function o() {
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
function i(e, t) {
    let { focusOffset: r, anchorOffset: n } = t.getSelection();
    return (0, l.g9)(e, r, n);
}
