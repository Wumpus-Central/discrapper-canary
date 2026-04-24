n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(834730);
n(321073);
var o = n(939249),
    s = n(144228),
    u = n(658675),
    d = n(292666),
    c = n(793361);
function E(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: l,
            onSelectionChange: r,
            inputType: E,
            textInputValue: _,
            onTextInputChange: A,
        } = e,
        I = "true" === n.TextEntry,
        h = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: c.NV,
        children: [
            (0, i.jsxs)(o.D, {
                className: c.d,
                onClick: () => {
                    r(t);
                },
                role: E,
                "aria-checked": l,
                "aria-labelledby": h,
                children: [
                    (0, i.jsx)("div", {
                        className: c.jl,
                        children:
                            "radio" === E
                                ? (0, i.jsx)(s.T, { disabled: !1, checked: l })
                                : (0, i.jsx)(u.P, { disabled: !1, checked: l }),
                    }),
                    (0, i.jsx)(a.E, {
                        id: h,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            I &&
                (0, i.jsx)("div", {
                    className: c.Vi,
                    children: (0, i.jsx)(d.k, {
                        value: _ ?? "",
                        onChange: (e) => {
                            l || r(t), A?.(t, e);
                        },
                        disabled: !l,
                    }),
                }),
        ],
    });
}
var _ = n(880652),
    A = n(225460);
function I(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoice: o, textInputs: s } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(l),
        u = (e) => {
            let i = s[e];
            null == i || "" === i
                ? r(n, e)
                : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                  ? r(n, `${e}:TEXT:${i}`)
                  : r(n, e);
        },
        d = (e, t) => {
            r(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
        };
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: A.kL,
              children: (0, i.jsx)(a.E, {
                  variant: "text-sm/medium",
                  className: A.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: A.kL,
              children: (0, i.jsx)("div", {
                  className: A.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          E,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: o === t,
                              onSelectionChange: u,
                              inputType: "radio",
                              textInputValue: s[t],
                              onTextInputChange: d,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function h(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoices: o, textInputs: s } = ((e) => {
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
        })(l),
        u = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
                })
                .join(","),
        d = (e) => {
            let t = o.includes(e) ? o.filter((t) => t !== e) : [...o, e],
                i = { ...s };
            t.includes(e) || delete i[e], r(n, u(t, i));
        },
        c = (e, t) => {
            r(n, u(o, { ...s, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: A.kL,
              children: (0, i.jsx)(a.E, {
                  variant: "text-sm/medium",
                  className: A.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: A.kL,
              children: (0, i.jsx)("div", {
                  className: A.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          E,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: o.includes(t),
                              onSelectionChange: d,
                              inputType: "checkbox",
                              textInputValue: s[t],
                              onTextInputChange: c,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function T(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e;
    return t.Selector === _.BO.SINGLE_ANSWER
        ? (0, i.jsx)(I, { question: t, questionId: n, value: l, onValueChange: r })
        : (0, i.jsx)(h, { question: t, questionId: n, value: l, onValueChange: r });
}
var S = n(260598),
    p = n(434122);
function N(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        a = t.Selector !== _.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: p.k,
        children: a
            ? (0, i.jsx)(S.f, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(d.k, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response..." }),
    });
}
var O = n(724368),
    f = n(992595);
function g(e) {
    let { question: t, questionId: n, responses: l, onResponseChange: o } = e,
        s = (() => {
            switch (t.QuestionType) {
                case _.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(N, { question: t, questionId: n, value: l[n] ?? "", onValueChange: o });
                case _.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(T, { question: t, questionId: n, value: l[n] ?? "", onValueChange: o });
                case _.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: r()(f.PT, O.k),
              children: [
                  (0, i.jsx)(a.E, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  s,
              ],
          });
}
