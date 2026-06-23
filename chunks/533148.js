n.d(e, { A: () => i });
var r = n(627968),
    l = n(292666),
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
