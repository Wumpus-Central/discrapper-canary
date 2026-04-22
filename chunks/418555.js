a.d(i, { A: () => d });
var r = a(627968);
a(64700);
var n = a(993401),
    l = a(784886),
    s = a(985018),
    t = a(656884);
function d(e) {
    let { user: i, hideMessageInput: a, hideExampleButton: d } = e;
    return a
        ? d
            ? null
            : (0, r.jsx)("div", {
                  className: t.qr,
                  children: (0, r.jsx)(n.FD, {
                      variant: "primary",
                      text: s.intl.string(s.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, r.jsx)("div", { className: t.qr, inert: !0, children: (0, r.jsx)(l.A, { user: i }) });
}
