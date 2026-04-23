"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(260598),
    l = n(292666),
    s = n(880652),
    a = n(434122);
function o(e) {
    let { question: t, questionId: n, value: o, onValueChange: c } = e,
        u = t.Selector !== s.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: a.k,
        children: u
            ? (0, i.jsx)(r.f, { value: o, onChange: (e) => c(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(l.k, { value: o, onChange: (e) => c(n, e), placeholder: "Enter your response..." }),
    });
}
