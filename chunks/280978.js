e.d(n, {
    B: () => d,
});
var o = e(627968);
e(64700);
var i = e(748964),
    a = e(652215),
    s = e(985018);

function d(t) {
    let { onContinue: n, onClose: e, errorCode: d } = t,
        r = d === a.t02.UNDER_MINIMUM_AGE ? s.intl.string(s.t["3dIn2A"]) : s.intl.string(s.t.qE9nqE);
    return (0, o.jsx)(i.s, {
        title: s.intl.string(s.t.eY3qHd),
        body: r,
        onClose: e,
        onContinue: n,
    });
}
