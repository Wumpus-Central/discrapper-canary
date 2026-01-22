n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(880652),
    s = n(474071);
function o(e) {
    let { question: t, questionId: n, value: o, onValueChange: l } = e,
        c = t.Selector !== a.BO.SINGLE_LINE;
    return (0, r.jsx)("div", {
        className: s.k,
        children: c
            ? (0, r.jsx)(i.fs1, {
                  value: o,
                  onChange: (e) => l(n, e),
                  placeholder: "Enter your response...",
                  rows: 4,
              })
            : (0, r.jsx)(i.ksK, {
                  value: o,
                  onChange: (e) => l(n, e),
                  placeholder: "Enter your response...",
              }),
    });
}
