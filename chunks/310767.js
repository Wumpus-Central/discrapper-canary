"use strict";
n.d(t, { A: () => r });
var i = n(627968),
    s = n(397927),
    l = n(927573);
function r(e) {
    let { value: t, onChange: n, error: r, disabled: a, autoFocus: o = !1 } = e;
    return (0, i.jsx)(s.ksK, {
        leading: `${l.mu}/`,
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: r,
        disabled: a,
        autoFocus: o,
    });
}
