r.d(t, { ys: () => i, zZ: () => o }), r(321073);
var s = r(851671);
r(988665);
var n = r(822382),
    l = r(771650);
r(504531), r(652215);
let a = { [l.v1.FILTER]: s.d, [l.v1.ANSWER]: s.F };
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((r) => {
            let s = e[r];
            t.push({
                strategy: (e, t, s) => {
                    e.findEntityRanges((e) => {
                        let t = e.getEntity();
                        return null !== t && s.getEntity(t).getType() === r;
                    }, t);
                },
                component: a[s.componentType],
            });
        }),
        t
    );
}
function o(e, t) {
    let { focusOffset: r, anchorOffset: s } = t.getSelection();
    return (0, n.zZ)(e, r, s);
}
