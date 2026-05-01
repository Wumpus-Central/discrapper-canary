l.d(t, { A: () => O });
var n = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    s = l(834730);
l(321073);
var a = l(939249),
    u = l(144228),
    o = l(658675),
    c = l(292666),
    d = l(793361);
function E(e) {
    let {
            choiceId: t,
            choice: l,
            isSelected: i,
            onSelectionChange: r,
            inputType: E,
            textInputValue: h,
            onTextInputChange: _,
        } = e,
        T = "true" === l.TextEntry,
        A = `choice-label-${t}`;
    return (0, n.jsxs)("div", {
        className: d.NV,
        children: [
            (0, n.jsxs)(a.D, {
                className: d.d,
                onClick: () => {
                    r(t);
                },
                role: E,
                "aria-checked": i,
                "aria-labelledby": A,
                children: [
                    (0, n.jsx)("div", {
                        className: d.jl,
                        children:
                            "radio" === E
                                ? (0, n.jsx)(u.T, { disabled: !1, checked: i })
                                : (0, n.jsx)(o.P, { disabled: !1, checked: i }),
                    }),
                    (0, n.jsx)(s.E, {
                        id: A,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, n.jsx)("div", { dangerouslySetInnerHTML: { __html: l.Display } }),
                    }),
                ],
            }),
            T &&
                (0, n.jsx)("div", {
                    className: d.Vi,
                    children: (0, n.jsx)(c.k, {
                        value: h ?? "",
                        onChange: (e) => {
                            i || r(t), _?.(t, e);
                        },
                        disabled: !i,
                    }),
                }),
        ],
    });
}
var h = l(880652),
    _ = l(225460);
function T(e) {
    let { question: t, questionId: l, value: i, onValueChange: r } = e,
        { selectedChoice: a, textInputs: u } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                l = t[0],
                n = {};
            return t.length > 1 && (n[l] = t[1]), { selectedChoice: l, textInputs: n };
        })(i),
        o = (e) => {
            let n = u[e];
            null == n || "" === n
                ? r(l, e)
                : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                  ? r(l, `${e}:TEXT:${n}`)
                  : r(l, e);
        },
        c = (e, t) => {
            r(l, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
        };
    return null == t.Choices
        ? (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)(s.E, {
                  variant: "text-sm/medium",
                  className: _.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)("div", {
                  className: _.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, l] = e;
                      return (0, n.jsx)(
                          E,
                          {
                              choiceId: t,
                              choice: l,
                              isSelected: a === t,
                              onSelectionChange: o,
                              inputType: "radio",
                              textInputValue: u[t],
                              onTextInputChange: c,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function A(e) {
    let { question: t, questionId: l, value: i, onValueChange: r } = e,
        { selectedChoices: a, textInputs: u } = ((e) => {
            if (null == e || "" === e) return { selectedChoices: [], textInputs: {} };
            let t = e.split(","),
                l = [],
                n = {};
            return (
                t.forEach((e) => {
                    let t = e.split(":TEXT:", 2),
                        i = t[0];
                    l.push(i), t.length > 1 && (n[i] = t[1]);
                }),
                { selectedChoices: l, textInputs: n }
            );
        })(i),
        o = (e, t) =>
            e
                .map((e) => {
                    let l = t[e];
                    return null != l && "" !== l ? `${e}:TEXT:${l}` : e;
                })
                .join(","),
        c = (e) => {
            let t = a.includes(e) ? a.filter((t) => t !== e) : [...a, e],
                n = { ...u };
            t.includes(e) || delete n[e], r(l, o(t, n));
        },
        d = (e, t) => {
            r(l, o(a, { ...u, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)(s.E, {
                  variant: "text-sm/medium",
                  className: _.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)("div", {
                  className: _.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, l] = e;
                      return (0, n.jsx)(
                          E,
                          {
                              choiceId: t,
                              choice: l,
                              isSelected: a.includes(t),
                              onSelectionChange: c,
                              inputType: "checkbox",
                              textInputValue: u[t],
                              onTextInputChange: d,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function S(e) {
    let { question: t, questionId: l, value: i, onValueChange: r } = e;
    return t.Selector === h.BO.SINGLE_ANSWER
        ? (0, n.jsx)(T, { question: t, questionId: l, value: i, onValueChange: r })
        : (0, n.jsx)(A, { question: t, questionId: l, value: i, onValueChange: r });
}
var I = l(260598),
    p = l(434122);
function f(e) {
    let { question: t, questionId: l, value: i, onValueChange: r } = e,
        s = t.Selector !== h.BO.SINGLE_LINE;
    return (0, n.jsx)("div", {
        className: p.k,
        children: s
            ? (0, n.jsx)(I.f, { value: i, onChange: (e) => r(l, e), placeholder: "Enter your response...", rows: 4 })
            : (0, n.jsx)(c.k, { value: i, onChange: (e) => r(l, e), placeholder: "Enter your response..." }),
    });
}
var N = l(724368),
    g = l(992595);
function O(e) {
    let { question: t, questionId: l, responses: i, onResponseChange: a } = e,
        u = (() => {
            switch (t.QuestionType) {
                case h.SQ.TEXT_ENTRY:
                    return (0, n.jsx)(f, { question: t, questionId: l, value: i[l] ?? "", onValueChange: a });
                case h.SQ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(S, { question: t, questionId: l, value: i[l] ?? "", onValueChange: a });
                case h.SQ.DESCRIPTIVE_BLOCK:
                    return (0, n.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == u
        ? null
        : (0, n.jsxs)("div", {
              className: r()(g.PT, N.k),
              children: [
                  (0, n.jsx)(s.E, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, n.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  u,
              ],
          });
}
