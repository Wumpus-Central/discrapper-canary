n.d(t, {
    ys: () => l,
    zZ: () => c,
}),
    n(321073),
    n(747238);
var r = n(851671);
n(988665);
var i = n(822382),
    a = n(771650);
n(504531), n(652215);
let s = {
    [a.v1.FILTER]: r.d,
    [a.v1.ANSWER]: r.F,
};

function o(e, t, n, r) {
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
                strategy: (e, t, r) => o(r, e, t, n),
                component: s[r.componentType],
            });
        }),
        t
    );
}

function c(e, t) {
    let { focusOffset: n, anchorOffset: r } = t.getSelection();
    return (0, i.zZ)(e, n, r);
}
