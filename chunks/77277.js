s.d(t, { ys: () => u, zZ: () => _ }), s(321073);
var n = s(627968);
s(64700);
var r = s(834730),
    i = s(863476);
function a(e, t) {
    let { children: s } = e;
    return (0, n.jsx)(r.E, { variant: "text-sm/medium", className: t, children: s });
}
s(988665);
var c = s(822382),
    o = s(304578);
s(504531), s(652215);
let l = { [o.v1.FILTER]: (e) => a(e, i.nM), [o.v1.ANSWER]: (e) => a(e, i.pB) };
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];
    return (
        Object.keys(e).forEach((s) => {
            let n = e[s];
            t.push({
                strategy: (e, t, n) => {
                    e.findEntityRanges((e) => {
                        let t = e.getEntity();
                        return null !== t && n.getEntity(t).getType() === s;
                    }, t);
                },
                component: l[n.componentType],
            });
        }),
        t
    );
}
function _(e, t) {
    let { focusOffset: s, anchorOffset: n } = t.getSelection();
    return (0, c.zZ)(e, s, n);
}
