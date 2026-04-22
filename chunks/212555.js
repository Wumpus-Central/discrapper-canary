"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(627968);
n(64700);
var r = n(834730),
    l = n(597864),
    s = n(880652),
    a = n(225460);
function o(e) {
    let { question: t, questionId: n, value: s, onValueChange: o } = e,
        { selectedChoice: c, textInputs: u } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(s),
        d = (e) => {
            let i = u[e];
            null == i || "" === i
                ? o(n, e)
                : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                  ? o(n, `${e}:TEXT:${i}`)
                  : o(n, e);
        },
        _ = (e, t) => {
            o(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
        };
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: a.kL,
              children: (0, i.jsx)(r.E, {
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
                          l.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: c === t,
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
function c(e) {
    let { question: t, questionId: n, value: s, onValueChange: o } = e,
        { selectedChoices: c, textInputs: u } = ((e) => {
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
        })(s),
        d = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
                })
                .join(","),
        _ = (e) => {
            let t = c.includes(e) ? c.filter((t) => t !== e) : [...c, e],
                i = { ...u };
            t.includes(e) || delete i[e], o(n, d(t, i));
        },
        E = (e, t) => {
            o(n, d(c, { ...u, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: a.kL,
              children: (0, i.jsx)(r.E, {
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
                          l.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: c.includes(t),
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
    let { question: t, questionId: n, value: r, onValueChange: l } = e;
    return t.Selector === s.BO.SINGLE_ANSWER
        ? (0, i.jsx)(o, { question: t, questionId: n, value: r, onValueChange: l })
        : (0, i.jsx)(c, { question: t, questionId: n, value: r, onValueChange: l });
}
