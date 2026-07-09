n.d(t, { K: () => q, default: () => v });
var i = n(627968),
    l = n(64700),
    r = n(189213),
    s = n(17928),
    a = n(192308),
    o = n(834730),
    E = n(27620),
    c = n(668131),
    u = n(797632);
function _(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: l, LeftOperand: r, RightOperand: s } = e;
    if (null == i) return !0;
    let a = t[i];
    if (null == a || "" === a) return !1;
    let o = l?.match(/SelectableChoice\/(\d+)/),
        E = o?.[1];
    switch (n) {
        case "Selected":
            return null != E && a.split(",").includes(E);
        case "NotSelected":
            return null != E && !a.split(",").includes(E);
        case "EqualTo":
            return a === (s ?? r);
        case "NotEqualTo":
            return a !== (s ?? r);
        case "GreaterThan":
            return Number(a) > Number(s ?? r ?? 0);
        case "LessThan":
            return Number(a) < Number(s ?? r ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(a) >= Number(s ?? r ?? 0);
        case "LessThanOrEqualTo":
            return Number(a) <= Number(s ?? r ?? 0);
        case "Contains":
            return a.includes(s ?? r ?? "");
        case "DoesNotContain":
            return !a.includes(s ?? r ?? "");
        default:
            return !0;
    }
}
function A(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function d(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
n(321073);
var T = n(503698),
    I = n.n(T),
    N = n(939249),
    R = n(144228),
    S = n(658675),
    O = n(292666),
    C = n(682705);
function D(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: l,
            onSelectionChange: r,
            inputType: s,
            textInputValue: a,
            onTextInputChange: E,
        } = e,
        c = "true" === n.TextEntry,
        u = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: C.NV,
        children: [
            (0, i.jsxs)(N.D, {
                className: C.d,
                onClick: function () {
                    r(t);
                },
                role: s,
                "aria-checked": l,
                "aria-labelledby": u,
                children: [
                    (0, i.jsx)("div", {
                        className: C.jl,
                        children:
                            "radio" === s
                                ? (0, i.jsx)(R.T, { disabled: !1, checked: l })
                                : (0, i.jsx)(S.P, { disabled: !1, checked: l }),
                    }),
                    (0, i.jsx)(o.E, {
                        id: u,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            c &&
                (0, i.jsx)("div", {
                    className: C.Vi,
                    children: (0, i.jsx)(O.k, {
                        value: a ?? "",
                        onChange: function (e) {
                            l || r(t), E?.(t, e);
                        },
                        disabled: !l,
                    }),
                }),
        ],
    });
}
var P = n(880652),
    M = n(627764);
function p(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoice: s, textInputs: a } = (function (e) {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(l);
    function E(e) {
        let i = a[e];
        null == i || "" === i
            ? r(n, e)
            : null != t.Choices && t.Choices[e]?.TextEntry === "true"
              ? r(n, `${e}:TEXT:${i}`)
              : r(n, e);
    }
    function c(e, t) {
        r(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
    }
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: M.kL,
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/medium",
                  className: M.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: M.kL,
              children: (0, i.jsx)("div", {
                  className: M.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          D,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s === t,
                              onSelectionChange: E,
                              inputType: "radio",
                              textInputValue: a[t],
                              onTextInputChange: c,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function m(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoices: s, textInputs: a } = (function (e) {
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
        })(l);
    function E(e, t) {
        return e
            .map((e) => {
                let n = t[e];
                return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
            })
            .join(",");
    }
    function c(e) {
        let t = s.includes(e) ? s.filter((t) => t !== e) : [...s, e],
            i = { ...a };
        t.includes(e) || delete i[e], r(n, E(t, i));
    }
    function u(e, t) {
        r(n, E(s, { ...a, [e]: t }));
    }
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: M.kL,
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/medium",
                  className: M.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: M.kL,
              children: (0, i.jsx)("div", {
                  className: M.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          D,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s.includes(t),
                              onSelectionChange: c,
                              inputType: "checkbox",
                              textInputValue: a[t],
                              onTextInputChange: u,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function f(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e;
    return t.Selector === P.BO.SINGLE_ANSWER
        ? (0, i.jsx)(p, { question: t, questionId: n, value: l, onValueChange: r })
        : (0, i.jsx)(m, { question: t, questionId: n, value: l, onValueChange: r });
}
var g = n(260598),
    U = n(375882);
function h(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        s = t.Selector !== P.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: U.k,
        children: s
            ? (0, i.jsx)(g.f, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(O.k, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response..." }),
    });
}
var k = n(666128),
    y = n(168147);
function L(e) {
    let { question: t, questionId: n, responses: l, onResponseChange: r } = e,
        s = (function () {
            switch (t.QuestionType) {
                case P.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(h, { question: t, questionId: n, value: l[n] ?? "", onValueChange: r });
                case P.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(f, { question: t, questionId: n, value: l[n] ?? "", onValueChange: r });
                case P.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: I()(y.PT, k.k),
              children: [
                  (0, i.jsx)(o.E, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  s,
              ],
          });
}
var x = n(375708),
    G = n(360602);
function j(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: u } = e,
        { getSurveyResponses: T, setResponse: I, trackDisplayedQuestions: N } = (0, c.i)(),
        R = T(t),
        S = (function (e) {
            for (let t of A(e)) {
                let n = d(e.Blocks[t]);
                if (n.length > 0 && n[0].length > 0)
                    return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
            }
            return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
        })(n),
        [O, C] = l.useState(S.blockId),
        [D, P] = l.useState(S.pageIndex),
        [M, p] = l.useState(!1);
    function m(e, n) {
        I(t, e, n);
    }
    let f = l.useCallback(
            () => (
                M
                    ? s()
                    : (0, a.openModal)((e) =>
                          (0, i.jsx)(r.Modal, {
                              title: x.intl.string(x.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: x.intl.string(x.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: x.intl.string(x.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(o.E, {
                                  variant: "text-md/normal",
                                  children: x.intl.string(x.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, M],
        ),
        g = l.useMemo(
            () =>
                null == O
                    ? []
                    : (function (e, t) {
                          let { blockId: n, pageIndex: i, responses: l } = t,
                              r = e.Blocks[n];
                          if (null == r) return [];
                          let s = d(r);
                          return i >= s.length
                              ? []
                              : s[i].filter((t) =>
                                    (function (e, t) {
                                        if (null == e.DisplayLogic) return !0;
                                        let { DisplayLogic: n } = e;
                                        for (let e in n)
                                            if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                                                let i = n[e];
                                                switch (i.Type) {
                                                    case "If":
                                                    case "ElseIf":
                                                        if (
                                                            (function (e, t) {
                                                                let n = [];
                                                                for (let t in e)
                                                                    "Type" !== t &&
                                                                        "object" == typeof e[t] &&
                                                                        n.push(e[t]);
                                                                if (0 === n.length) return !0;
                                                                let i = _(n[0], t);
                                                                for (let e = 1; e < n.length; e++) {
                                                                    let l = n[e],
                                                                        r = _(l, t);
                                                                    i =
                                                                        "Or" ===
                                                                        (l.Conjuction ?? l.Conjunction ?? "And")
                                                                            ? i || r
                                                                            : i && r;
                                                                }
                                                                return i;
                                                            })(i, t)
                                                        )
                                                            return !0;
                                                        break;
                                                    case "Else":
                                                        return !0;
                                                    default:
                                                        i.Type;
                                                }
                                            }
                                        return !1;
                                    })(e.Questions[t], l),
                                );
                      })(n, { blockId: O, pageIndex: D, responses: R }),
            [n, O, D, R],
        ),
        U = l.useCallback(() => {
            if (null == n || null == O) return;
            let e = (function (e, t) {
                let { blockId: n, pageIndex: i, responses: l } = t,
                    r = A(e),
                    s = e.Blocks[n];
                if (null == s) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                let a = d(s),
                    o = a[i];
                if (null != o && o.length > 0)
                    for (let t = o.length - 1; t >= 0; t--) {
                        let n = o[t];
                        if (null != e.Questions[n] && null != l[n]) {
                            let t = s.BlockElements.find((e) => e.QuestionID === n);
                            if (null != t) {
                                let n = (function (e, t) {
                                    if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                                    for (let n of e.SkipLogic) {
                                        let {
                                                QuestionID: e,
                                                Condition: i,
                                                Value: l,
                                                SkipToDestination: r,
                                                ChoiceLocator: s,
                                            } = n,
                                            a = t[e];
                                        if (null == a || "" === a) continue;
                                        let o = s?.match(/SelectableChoice\/(\d+)/),
                                            E = o?.[1],
                                            c = !1;
                                        switch (i) {
                                            case "Selected":
                                                c = null != E && a.split(",").includes(E);
                                                break;
                                            case "NotSelected":
                                                c = null != E && !a.split(",").includes(E);
                                                break;
                                            case "EqualTo":
                                                c = a === l?.toString();
                                                break;
                                            case "NotEqualTo":
                                                c = a !== l?.toString();
                                                break;
                                            case "GreaterThan":
                                                c = Number(a) > Number(l ?? 0);
                                                break;
                                            case "LessThan":
                                                c = Number(a) < Number(l ?? 0);
                                                break;
                                            case "GreaterThanOrEqualTo":
                                                c = Number(a) >= Number(l ?? 0);
                                                break;
                                            case "LessThanOrEqualTo":
                                                c = Number(a) <= Number(l ?? 0);
                                                break;
                                            case "Contains":
                                                c = a.includes(l?.toString() ?? "");
                                                break;
                                            case "DoesNotContain":
                                                c = !a.includes(l?.toString() ?? "");
                                        }
                                        if (c) {
                                            if ("ENDOFSURVEY" === r?.trim().toUpperCase()) return "ENDOFSURVEY";
                                            return r;
                                        }
                                    }
                                    return null;
                                })(t, l);
                                if ("ENDOFSURVEY" === n)
                                    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                                if (null != n)
                                    for (let t of r) {
                                        let i = d(e.Blocks[t]);
                                        for (let e = 0; e < i.length; e++)
                                            if (i[e].includes(n))
                                                return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                                    }
                            }
                        }
                    }
                if (i + 1 < a.length) return { blockId: n, pageIndex: i + 1, questionIds: a[i + 1], isComplete: !1 };
                let E = r.indexOf(n);
                for (let t = E + 1; t < r.length; t++) {
                    let n = r[t],
                        i = d(e.Blocks[n]);
                    if (i.length > 0 && i[0].length > 0)
                        return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
                }
                return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
            })(n, { blockId: O, pageIndex: D, responses: R });
            N(t, g), e.isComplete && E.Ay.submitSurveyResponse(t, R), C(e.blockId), P(e.pageIndex), p(e.isComplete);
        }, [n, O, D, R, t, g, N]);
    l.useEffect(() => {
        0 === g.length && U();
    }, [g, U]);
    let h = l.useMemo(() => {
        if (M) return !1;
        for (let e of g) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = R[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [M, g, n, R]);
    return M
        ? (0, i.jsxs)(r.Modal, {
              transitionState: u,
              onClose: s,
              size: "md",
              title: x.intl.string(x.t.OSqLUF),
              actions: [{ variant: "primary", text: x.intl.string(x.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: x.intl.string(x.t["2scvdw"]) }),
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: x.intl.string(x.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(r.Modal, {
              transitionState: u,
              onClose: f,
              title: x.intl.string(x.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: x.intl.string(x.t.PDTjLN), onClick: U, disabled: !h }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === g.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: G.Qs,
                                children: g.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              L,
                                              { question: t, questionId: e, responses: R, onResponseChange: m },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function q(e) {
    null != (await E.Ay.fetchSurveyDetails(e)) &&
        (c.i.getState().clearSurveyResponses(e),
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 378974));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function v(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        r = (0, s.bG)([u.A], () => u.A.getSurvey(t));
    return null == r
        ? (0, i.jsx)(o.E, { variant: "text-md/medium", className: G.Lq, children: x.intl.string(x.t.MKDeyL) })
        : (0, i.jsx)(j, { surveyId: t, survey: r, onClose: n, transitionState: l });
}
