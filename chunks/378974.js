n.d(t, { K: () => b, default: () => G });
var i = n(627968),
    l = n(64700),
    r = n(189213),
    s = n(17928),
    a = n(192308),
    c = n(834730),
    o = n(27620),
    d = n(668131),
    u = n(797632);
function E(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: l, LeftOperand: r, RightOperand: s } = e;
    if (null == i) return !0;
    let a = t[i];
    if (null == a || "" === a) return !1;
    let c = l?.match(/SelectableChoice\/(\d+)/),
        o = c?.[1];
    switch (n) {
        case "Selected":
            return null != o && a.split(",").includes(o);
        case "NotSelected":
            return null != o && !a.split(",").includes(o);
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
function _(e) {
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
    R = n(773812),
    m = n(658675),
    C = n(292666),
    p = n(793361);
function S(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: l,
            onSelectionChange: r,
            inputType: s,
            textInputValue: a,
            onTextInputChange: o,
        } = e,
        d = "true" === n.TextEntry,
        u = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: p.NV,
        children: [
            (0, i.jsxs)(N.D, {
                className: p.d,
                onClick: () => {
                    r(t);
                },
                role: s,
                "aria-checked": l,
                "aria-labelledby": u,
                children: [
                    (0, i.jsx)("div", {
                        className: p.jl,
                        children:
                            "radio" === s
                                ? (0, i.jsx)(R.T, { disabled: !1, checked: l })
                                : (0, i.jsx)(m.P, { disabled: !1, checked: l }),
                    }),
                    (0, i.jsx)(c.E, {
                        id: u,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            d &&
                (0, i.jsx)("div", {
                    className: p.Vi,
                    children: (0, i.jsx)(C.k, {
                        value: a ?? "",
                        onChange: (e) => {
                            l || r(t), o?.(t, e);
                        },
                        disabled: !l,
                    }),
                }),
        ],
    });
}
var O = n(880652),
    g = n(225460);
function h(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoice: s, textInputs: a } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(l),
        o = (e) => {
            let i = a[e];
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
              className: g.kL,
              children: (0, i.jsx)(c.E, {
                  variant: "text-sm/medium",
                  className: g.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: g.kL,
              children: (0, i.jsx)("div", {
                  className: g.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s === t,
                              onSelectionChange: o,
                              inputType: "radio",
                              textInputValue: a[t],
                              onTextInputChange: d,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function f(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoices: s, textInputs: a } = ((e) => {
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
        o = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
                })
                .join(","),
        d = (e) => {
            let t = s.includes(e) ? s.filter((t) => t !== e) : [...s, e],
                i = { ...a };
            t.includes(e) || delete i[e], r(n, o(t, i));
        },
        u = (e, t) => {
            r(n, o(s, { ...a, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: g.kL,
              children: (0, i.jsx)(c.E, {
                  variant: "text-sm/medium",
                  className: g.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: g.kL,
              children: (0, i.jsx)("div", {
                  className: g.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s.includes(t),
                              onSelectionChange: d,
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
function P(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e;
    return t.Selector === O.BO.SINGLE_ANSWER
        ? (0, i.jsx)(h, { question: t, questionId: n, value: l, onValueChange: r })
        : (0, i.jsx)(f, { question: t, questionId: n, value: l, onValueChange: r });
}
var M = n(260598),
    D = n(434122);
function x(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        s = t.Selector !== O.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: D.k,
        children: s
            ? (0, i.jsx)(M.f, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(C.k, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response..." }),
    });
}
var U = n(724368),
    y = n(992595);
function j(e) {
    let { question: t, questionId: n, responses: l, onResponseChange: r } = e,
        s = (() => {
            switch (t.QuestionType) {
                case O.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(x, { question: t, questionId: n, value: l[n] ?? "", onValueChange: r });
                case O.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(P, { question: t, questionId: n, value: l[n] ?? "", onValueChange: r });
                case O.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: I()(y.PT, U.k),
              children: [
                  (0, i.jsx)(c.E, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  s,
              ],
          });
}
var L = n(375708),
    k = n(772954);
function v(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: u } = e,
        { getSurveyResponses: T, setResponse: I, trackDisplayedQuestions: N } = (0, d.i)(),
        R = T(t),
        m = (function (e) {
            for (let t of A(e)) {
                let n = _(e.Blocks[t]);
                if (n.length > 0 && n[0].length > 0)
                    return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
            }
            return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
        })(n),
        [C, p] = l.useState(m.blockId),
        [S, O] = l.useState(m.pageIndex),
        [g, h] = l.useState(!1),
        f = (e, n) => {
            I(t, e, n);
        },
        P = l.useCallback(
            () => (
                g
                    ? s()
                    : (0, a.openModal)((e) =>
                          (0, i.jsx)(r.Modal, {
                              title: L.intl.string(L.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: L.intl.string(L.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: L.intl.string(L.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-md/normal",
                                  children: L.intl.string(L.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, g],
        ),
        M = l.useMemo(
            () =>
                null == C
                    ? []
                    : (function (e, t) {
                          let { blockId: n, pageIndex: i, responses: l } = t,
                              r = e.Blocks[n];
                          if (null == r) return [];
                          let s = _(r);
                          return i >= s.length
                              ? []
                              : s[i].filter((t) =>
                                    (function (e, t) {
                                        if (null == e.DisplayLogic) return !0;
                                        let { DisplayLogic: n } = e;
                                        for (let e in n)
                                            if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
                                                let i = n[e];
                                                if ("If" === i.Type || "ElseIf" === i.Type) {
                                                    if (
                                                        (function (e, t) {
                                                            let n = [];
                                                            for (let t in e)
                                                                "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
                                                            if (0 === n.length) return !0;
                                                            let i = E(n[0], t);
                                                            for (let e = 1; e < n.length; e++) {
                                                                let l = n[e],
                                                                    r = E(l, t);
                                                                i =
                                                                    "Or" === (l.Conjuction ?? l.Conjunction ?? "And")
                                                                        ? i || r
                                                                        : i && r;
                                                            }
                                                            return i;
                                                        })(i, t)
                                                    )
                                                        return !0;
                                                } else if ("Else" === i.Type) return !0;
                                            }
                                        return !1;
                                    })(e.Questions[t], l),
                                );
                      })(n, { blockId: C, pageIndex: S, responses: R }),
            [n, C, S, R],
        ),
        D = l.useCallback(() => {
            if (null == n || null == C) return;
            let e = (function (e, t) {
                let { blockId: n, pageIndex: i, responses: l } = t,
                    r = A(e),
                    s = e.Blocks[n];
                if (null == s) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                let a = _(s),
                    c = a[i];
                if (null != c && c.length > 0)
                    for (let t = c.length - 1; t >= 0; t--) {
                        let n = c[t];
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
                                        let c = s?.match(/SelectableChoice\/(\d+)/),
                                            o = c?.[1],
                                            d = !1;
                                        switch (i) {
                                            case "Selected":
                                                d = null != o && a.split(",").includes(o);
                                                break;
                                            case "NotSelected":
                                                d = null != o && !a.split(",").includes(o);
                                                break;
                                            case "EqualTo":
                                                d = a === l?.toString();
                                                break;
                                            case "NotEqualTo":
                                                d = a !== l?.toString();
                                                break;
                                            case "GreaterThan":
                                                d = Number(a) > Number(l ?? 0);
                                                break;
                                            case "LessThan":
                                                d = Number(a) < Number(l ?? 0);
                                                break;
                                            case "GreaterThanOrEqualTo":
                                                d = Number(a) >= Number(l ?? 0);
                                                break;
                                            case "LessThanOrEqualTo":
                                                d = Number(a) <= Number(l ?? 0);
                                                break;
                                            case "Contains":
                                                d = a.includes(l?.toString() ?? "");
                                                break;
                                            case "DoesNotContain":
                                                d = !a.includes(l?.toString() ?? "");
                                        }
                                        if (d) {
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
                                        let i = _(e.Blocks[t]);
                                        for (let e = 0; e < i.length; e++)
                                            if (i[e].includes(n))
                                                return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                                    }
                            }
                        }
                    }
                if (i + 1 < a.length) return { blockId: n, pageIndex: i + 1, questionIds: a[i + 1], isComplete: !1 };
                let o = r.indexOf(n);
                for (let t = o + 1; t < r.length; t++) {
                    let n = r[t],
                        i = _(e.Blocks[n]);
                    if (i.length > 0 && i[0].length > 0)
                        return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
                }
                return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
            })(n, { blockId: C, pageIndex: S, responses: R });
            N(t, M), e.isComplete && o.Ay.submitSurveyResponse(t, R), p(e.blockId), O(e.pageIndex), h(e.isComplete);
        }, [n, C, S, R, t, M, N]);
    l.useEffect(() => {
        0 === M.length && D();
    }, [M, D]);
    let x = l.useMemo(() => {
        if (g) return !1;
        for (let e of M) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = R[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [g, M, n, R]);
    return g
        ? (0, i.jsxs)(r.Modal, {
              transitionState: u,
              onClose: s,
              size: "md",
              title: L.intl.string(L.t.OSqLUF),
              actions: [{ variant: "primary", text: L.intl.string(L.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(c.E, { variant: "text-md/normal", children: L.intl.string(L.t["2scvdw"]) }),
                  (0, i.jsx)(c.E, { variant: "text-md/normal", children: L.intl.string(L.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(r.Modal, {
              transitionState: u,
              onClose: P,
              title: L.intl.string(L.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: L.intl.string(L.t.PDTjLN), onClick: D, disabled: !x }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === M.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: k.Qs,
                                children: M.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              j,
                                              { question: t, questionId: e, responses: R, onResponseChange: f },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function b(e) {
    null != (await o.Ay.fetchSurveyDetails(e)) &&
        (d.i.getState().clearSurveyResponses(e),
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 378974));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function G(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        r = (0, s.bG)([u.A], () => u.A.getSurvey(t));
    return null == r
        ? (0, i.jsx)(c.E, { variant: "text-md/medium", className: k.Lq, children: L.intl.string(L.t.MKDeyL) })
        : (0, i.jsx)(v, { surveyId: t, survey: r, onClose: n, transitionState: l });
}
