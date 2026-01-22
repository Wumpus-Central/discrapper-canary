n.d(t, {
    A: () => s,
}),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(397927),
    l = n(927573);

function s(e) {
    let { value: t, onChange: n, error: s, disabled: a, autoFocus: c = !1 } = e;
    return (0, r.jsx)(i.ksK, {
        leading: "".concat(l.mu, "/"),
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: s,
        disabled: a,
        autoFocus: c,
    });
}
