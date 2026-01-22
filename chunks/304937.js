n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(212555),
    l = n(428855),
    c = n(880652),
    u = n(106181),
    d = n(206314);

function f(e) {
    var t;
    let { question: n, questionId: i, responses: f, onResponseChange: p } = e,
        _ = (() => {
            var e, t;
            switch (n.QuestionType) {
                case c.SQ.TEXT_ENTRY:
                    return (0, r.jsx)(l.A, {
                        question: n,
                        questionId: i,
                        value: null != (e = f[i]) ? e : "",
                        onValueChange: p,
                    });
                case c.SQ.MULTIPLE_CHOICE:
                    return (0, r.jsx)(o.A, {
                        question: n,
                        questionId: i,
                        value: null != (t = f[i]) ? t : "",
                        onValueChange: p,
                    });
                case c.SQ.DESCRIPTIVE_BLOCK:
                    return (0, r.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == _
        ? null
        : (0, r.jsxs)("div", {
              className: a()(d.PT, u.k),
              children: [
                  (0, r.jsx)(s.EYj, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, r.jsx)("div", {
                          dangerouslySetInnerHTML: {
                              __html: null != (t = n.QuestionText_Unsafe) ? t : "",
                          },
                      }),
                  }),
                  _,
              ],
          });
}
