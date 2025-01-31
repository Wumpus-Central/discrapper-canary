n.d(t, {
    Jl: () => s,
    g9: () => o
}),
    n(653041);
var i = n(395041);
n(349033);
var l = n(999650);
n(72006);
var a = n(405656);
n(981631);
let r = {
    [l.Qe.FILTER]: i.w,
    [l.Qe.ANSWER]: i.O
};
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((n) => {
            let i = e[n];
            t.push({
                strategy: (e, t, i) =>
                    (function (e, t, n, i) {
                        t.findEntityRanges((t) => {
                            let n = t.getEntity();
                            return null !== n && e.getEntity(n).getType() === i;
                        }, n);
                    })(i, e, t, n),
                component: r[i.componentType]
            });
        }),
        t
    );
}
function o(e, t) {
    let { focusOffset: n, anchorOffset: i } = t.getSelection();
    return (0, a.g9)(e, n, i);
}
