"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(880652),
    a = n(434122);
function l(e) {
    let { question: t, questionId: n, value: l, onValueChange: o } = e,
        c = t.Selector !== s.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: a.k,
        children: c
            ? (0, i.jsx)(r.fs1, { value: l, onChange: (e) => o(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(r.ksK, { value: l, onChange: (e) => o(n, e), placeholder: "Enter your response..." }),
    });
}
