n.d(e, { A: () => i });
var r = n(477900),
    l = n(95477),
    s = n(927573);
function i(t) {
    let { value: e, onChange: n, error: i, disabled: a, autoFocus: c = !1 } = t;
    return (0, r.jsx)(l.k, {
        leading: `${s.mu}/`,
        value: e,
        onChange: function (t) {
            n(t.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: i,
        disabled: a,
        autoFocus: c,
    });
}
