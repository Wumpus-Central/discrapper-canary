n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(848275),
    l = n(786773),
    c = n(284881),
    u = n(129103),
    d = n(430864);
function f(e) {
    var t;
    let { question: n, questionId: i, responses: f, onResponseChange: p } = e,
        _ = (() => {
            var e, t;
            switch (n.QuestionType) {
                case c.S.TEXT_ENTRY:
                    return (0, r.jsx)(l.Z, {
                        question: n,
                        questionId: i,
                        value: null != (e = f[i]) ? e : "",
                        onValueChange: p,
                    });
                case c.S.MULTIPLE_CHOICE:
                    return (0, r.jsx)(s.Z, {
                        question: n,
                        questionId: i,
                        value: null != (t = f[i]) ? t : "",
                        onValueChange: p,
                    });
                case c.S.DESCRIPTIVE_BLOCK:
                    return (0, r.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == _
        ? null
        : (0, r.jsxs)("div", {
              className: a()(d.markup, u.container),
              children: [
                  (0, r.jsx)(o.xvT, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, r.jsx)("div", {
                          dangerouslySetInnerHTML: { __html: null != (t = n.QuestionText_Unsafe) ? t : "" },
                      }),
                  }),
                  _,
              ],
          });
}
