n.d(t, { A: () => c }), n(321073);
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(597864),
    r = n(880652),
    s = n(710871);
function o(e) {
    let { question: t, questionId: n, value: r, onValueChange: o } = e,
        { selectedChoice: d, textInputs: c } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(r),
        u = (e) => {
            let i = c[e];
            null == i || "" === i
                ? o(n, e)
                : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                  ? o(n, `${e}:TEXT:${i}`)
                  : o(n, e);
        },
        m = (e, t) => {
            o(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
        };
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: s.kL,
              children: (0, i.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  className: s.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: s.kL,
              children: (0, i.jsx)("div", {
                  className: s.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          a.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: d === t,
                              onSelectionChange: u,
                              inputType: "radio",
                              textInputValue: c[t],
                              onTextInputChange: m,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function d(e) {
    let { question: t, questionId: n, value: r, onValueChange: o } = e,
        { selectedChoices: d, textInputs: c } = ((e) => {
            if (null == e || "" === e) return { selectedChoices: [], textInputs: {} };
            let t = e.split(","),
                n = [],
                i = {};
            return (
                t.forEach((e) => {
                    let t = e.split(":TEXT:", 2),
                        l = t[0];
                    n.push(l), t.length > 1 && (i[l] = t[1]);
                }),
                { selectedChoices: n, textInputs: i }
            );
        })(r),
        u = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
                })
                .join(","),
        m = (e) => {
            let t = d.includes(e) ? d.filter((t) => t !== e) : [...d, e],
                i = { ...c };
            t.includes(e) || delete i[e], o(n, u(t, i));
        },
        _ = (e, t) => {
            o(n, u(d, { ...c, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: s.kL,
              children: (0, i.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  className: s.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: s.kL,
              children: (0, i.jsx)("div", {
                  className: s.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          a.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: d.includes(t),
                              onSelectionChange: m,
                              inputType: "checkbox",
                              textInputValue: c[t],
                              onTextInputChange: _,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function c(e) {
    let { question: t, questionId: n, value: l, onValueChange: a } = e;
    return t.Selector === r.BO.SINGLE_ANSWER
        ? (0, i.jsx)(o, { question: t, questionId: n, value: l, onValueChange: a })
        : (0, i.jsx)(d, { question: t, questionId: n, value: l, onValueChange: a });
}
