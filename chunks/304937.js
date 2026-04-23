"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(834730),
    a = n(212555),
    o = n(428855),
    c = n(880652),
    u = n(724368),
    d = n(992595);
function _(e) {
    let { question: t, questionId: n, responses: r, onResponseChange: _ } = e,
        E = (() => {
            switch (t.QuestionType) {
                case c.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(o.A, { question: t, questionId: n, value: r[n] ?? "", onValueChange: _ });
                case c.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(a.A, { question: t, questionId: n, value: r[n] ?? "", onValueChange: _ });
                case c.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: l()(d.PT, u.k),
              children: [
                  (0, i.jsx)(s.E, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  E,
              ],
          });
}
