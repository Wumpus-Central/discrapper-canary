"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(880652),
    l = n(83034);
function a(e) {
    let { question: t, questionId: n, value: a, onValueChange: c } = e,
        o = t.Selector !== s.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: l.k,
        children: o
            ? (0, i.jsx)(r.fs1, { value: a, onChange: (e) => c(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(r.ksK, { value: a, onChange: (e) => c(n, e), placeholder: "Enter your response..." }),
    });
}
