r.d(t, { ys: () => i, zZ: () => o }), r(321073);
var n = r(851671);
r(988665);
var s = r(822382),
    l = r(771650);
r(504531), r(652215);
let a = { [l.v1.FILTER]: n.d, [l.v1.ANSWER]: n.F };
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
                component: a[n.componentType],
            });
        }),
        t
    );
}
function o(e, t) {
    let { focusOffset: r, anchorOffset: n } = t.getSelection();
    return (0, s.zZ)(e, r, n);
}
