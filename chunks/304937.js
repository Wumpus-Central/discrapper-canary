"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(158954),
    a = n(212555),
    c = n(428855),
    o = n(880652),
    u = n(211680),
    d = n(782691);
function _(e) {
    let { question: t, questionId: n, responses: r, onResponseChange: _ } = e,
        E = (() => {
            switch (t.QuestionType) {
                case o.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(c.A, { question: t, questionId: n, value: r[n] ?? "", onValueChange: _ });
                case o.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(a.A, { question: t, questionId: n, value: r[n] ?? "", onValueChange: _ });
                case o.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: s()(d.PT, u.k),
              children: [
                  (0, i.jsx)(l.EYj, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  E,
              ],
          });
}
