n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(880652),
    r = n(508025);
function s(e) {
    let { question: t, questionId: n, value: s, onValueChange: o } = e,
        c = t.Selector !== l.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: r.k,
        children: c
            ? (0, i.jsx)(a.fs1, { value: s, onChange: (e) => o(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(a.ksK, { value: s, onChange: (e) => o(n, e), placeholder: "Enter your response..." }),
    });
}
