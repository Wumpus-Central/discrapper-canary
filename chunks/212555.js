n.d(t, {
    A: () => d,
}),
    n(747238),
    n(896048),
    n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(597864),
    a = n(880652),
    s = n(710871);

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function c(e) {
    let { question: t, questionId: n, value: a, onValueChange: o } = e,
        { selectedChoice: c, textInputs: u } = ((e) => {
            if (null == e || "" === e)
                return {
                    selectedChoice: null,
                    textInputs: {},
                };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                r = {};
            return (
                t.length > 1 && (r[n] = t[1]),
                {
                    selectedChoice: n,
                    textInputs: r,
                }
            );
        })(a),
        d = (e) => {
            var r;
            let i = u[e];
            null == i || "" === i
                ? o(n, e)
                : null != t.Choices && (null == (r = t.Choices[e]) ? void 0 : r.TextEntry) === "true"
                  ? o(n, "".concat(e, ":TEXT:").concat(i))
                  : o(n, e);
        },
        p = (e, t) => {
            o(n, null != t && "" !== t ? "".concat(e, ":TEXT:").concat(t) : e);
        };
    return null == t.Choices
        ? (0, r.jsx)("div", {
              className: s.kL,
              children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: s.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, r.jsx)("div", {
              className: s.kL,
              children: (0, r.jsx)("div", {
                  className: s.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, r.jsx)(
                          l.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: c === t,
                              onSelectionChange: d,
                              inputType: "radio",
                              textInputValue: u[t],
                              onTextInputChange: p,
                          },
                          t,
                      );
                  }),
              }),
          });
}

function u(e) {
    let { question: t, questionId: n, value: a, onValueChange: c } = e,
        { selectedChoices: u, textInputs: d } = ((e) => {
            if (null == e || "" === e)
                return {
                    selectedChoices: [],
                    textInputs: {},
                };
            let t = e.split(","),
                n = [],
                r = {};
            return (
                t.forEach((e) => {
                    let t = e.split(":TEXT:", 2),
                        i = t[0];
                    n.push(i), t.length > 1 && (r[i] = t[1]);
                }),
                {
                    selectedChoices: n,
                    textInputs: r,
                }
            );
        })(a),
        p = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? "".concat(e, ":TEXT:").concat(n) : e;
                })
                .join(","),
        m = (e) => {
            let t = u.includes(e) ? u.filter((t) => t !== e) : [...u, e],
                r = o({}, d);
            t.includes(e) || delete r[e], c(n, p(t, r));
        },
        f = (e, t) => {
            var r, i;
            c(
                n,
                p(
                    u,
                    ((r = o({}, d)),
                    (i = i =
                        {
                            [e]: t,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r),
                ),
            );
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, r.jsx)("div", {
              className: s.kL,
              children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: s.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, r.jsx)("div", {
              className: s.kL,
              children: (0, r.jsx)("div", {
                  className: s.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, r.jsx)(
                          l.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: u.includes(t),
                              onSelectionChange: m,
                              inputType: "checkbox",
                              textInputValue: d[t],
                              onTextInputChange: f,
                          },
                          t,
                      );
                  }),
              }),
          });
}

function d(e) {
    let { question: t, questionId: n, value: i, onValueChange: l } = e;
    return t.Selector === a.BO.SINGLE_ANSWER
        ? (0, r.jsx)(c, {
              question: t,
              questionId: n,
              value: i,
              onValueChange: l,
          })
        : (0, r.jsx)(u, {
              question: t,
              questionId: n,
              value: i,
              onValueChange: l,
          });
}
