n.d(e, { A: () => i });
var s = n(627968),
    l = n(292666),
    r = n(927573);
function i(t) {
    let { value: e, onChange: n, error: i, disabled: a, autoFocus: c = !1 } = t;
    return (0, s.jsx)(l.k, {
        leading: `${r.mu}/`,
        value: e,
        onChange: (t) => {
            n(t.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: i,
        disabled: a,
        autoFocus: c,
    });
}
