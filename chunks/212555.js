"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(597864),
    l = n(880652),
    a = n(118468);
function c(e) {
    let { question: t, questionId: n, value: l, onValueChange: c } = e,
        { selectedChoice: o, textInputs: u } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(l),
        d = (e) => {
            let i = u[e];
            null == i || "" === i
                ? c(n, e)
                : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                  ? c(n, `${e}:TEXT:${i}`)
                  : c(n, e);
        },
        _ = (e, t) => {
            c(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
        };
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: a.kL,
              children: (0, i.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  className: a.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: a.kL,
              children: (0, i.jsx)("div", {
                  className: a.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          s.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: o === t,
                              onSelectionChange: d,
                              inputType: "radio",
                              textInputValue: u[t],
                              onTextInputChange: _,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function o(e) {
    let { question: t, questionId: n, value: l, onValueChange: c } = e,
        { selectedChoices: o, textInputs: u } = ((e) => {
            if (null == e || "" === e) return { selectedChoices: [], textInputs: {} };
            let t = e.split(","),
                n = [],
                i = {};
            return (
                t.forEach((e) => {
                    let t = e.split(":TEXT:", 2),
                        r = t[0];
                    n.push(r), t.length > 1 && (i[r] = t[1]);
                }),
                { selectedChoices: n, textInputs: i }
            );
        })(l),
        d = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
                })
                .join(","),
        _ = (e) => {
            let t = o.includes(e) ? o.filter((t) => t !== e) : [...o, e],
                i = { ...u };
            t.includes(e) || delete i[e], c(n, d(t, i));
        },
        E = (e, t) => {
            c(n, d(o, { ...u, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: a.kL,
              children: (0, i.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  className: a.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: a.kL,
              children: (0, i.jsx)("div", {
                  className: a.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          s.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: o.includes(t),
                              onSelectionChange: _,
                              inputType: "checkbox",
                              textInputValue: u[t],
                              onTextInputChange: E,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function u(e) {
    let { question: t, questionId: n, value: r, onValueChange: s } = e;
    return t.Selector === l.BO.SINGLE_ANSWER
        ? (0, i.jsx)(c, { question: t, questionId: n, value: r, onValueChange: s })
        : (0, i.jsx)(o, { question: t, questionId: n, value: r, onValueChange: s });
}
