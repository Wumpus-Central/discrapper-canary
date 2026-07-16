"use strict";
n.d(t, { K: () => x, default: () => k });
var i = n(627968),
    r = n(64700),
    a = n(189213),
    s = n(17928),
    l = n(192308),
    o = n(834730),
    d = n(27620),
    c = n(668131),
    u = n(797632);
function _(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: r, LeftOperand: a, RightOperand: s } = e;
    if (null == i) return !0;
    let l = t[i];
    if (null == l || "" === l) return !1;
    let o = r?.match(/SelectableChoice\/(\d+)/),
        d = o?.[1];
    switch (n) {
        case "Selected":
            return null != d && l.split(",").includes(d);
        case "NotSelected":
            return null != d && !l.split(",").includes(d);
        case "EqualTo":
            return l === (s ?? a);
        case "NotEqualTo":
            return l !== (s ?? a);
        case "GreaterThan":
            return Number(l) > Number(s ?? a ?? 0);
        case "LessThan":
            return Number(l) < Number(s ?? a ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(l) >= Number(s ?? a ?? 0);
        case "LessThanOrEqualTo":
            return Number(l) <= Number(s ?? a ?? 0);
        case "Contains":
            return l.includes(s ?? a ?? "");
        case "DoesNotContain":
            return !l.includes(s ?? a ?? "");
        default:
            return !0;
    }
}
function E(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function A(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
n(321073);
var h = n(503698),
    I = n.n(h),
    f = n(939249),
    p = n(144228),
    T = n(658675),
    m = n(292666),
    g = n(793361);
function S(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: r,
            onSelectionChange: a,
            inputType: s,
            textInputValue: l,
            onTextInputChange: d,
        } = e,
        c = "true" === n.TextEntry,
        u = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: g.NV,
        children: [
            (0, i.jsxs)(f.D, {
                className: g.d,
                onClick: function () {
                    a(t);
                },
                role: s,
                "aria-checked": r,
                "aria-labelledby": u,
                children: [
                    (0, i.jsx)("div", {
                        className: g.jl,
                        children:
                            "radio" === s
                                ? (0, i.jsx)(p.T, { disabled: !1, checked: r })
                                : (0, i.jsx)(T.P, { disabled: !1, checked: r }),
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
                    className: g.Vi,
                    children: (0, i.jsx)(m.k, {
                        value: l ?? "",
                        onChange: function (e) {
                            r || a(t), d?.(t, e);
                        },
                        disabled: !r,
                    }),
                }),
        ],
    });
}
var N = n(880652),
    C = n(225460);
function R(e) {
    let { question: t, questionId: n, value: r, onValueChange: a } = e,
        { selectedChoice: s, textInputs: l } = (function (e) {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(r);
    function d(e) {
        let i = l[e];
        null == i || "" === i
            ? a(n, e)
            : null != t.Choices && t.Choices[e]?.TextEntry === "true"
              ? a(n, `${e}:TEXT:${i}`)
              : a(n, e);
    }
    function c(e, t) {
        a(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
    }
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: C.kL,
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/medium",
                  className: C.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: C.kL,
              children: (0, i.jsx)("div", {
                  className: C.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s === t,
                              onSelectionChange: d,
                              inputType: "radio",
                              textInputValue: l[t],
                              onTextInputChange: c,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function O(e) {
    let { question: t, questionId: n, value: r, onValueChange: a } = e,
        { selectedChoices: s, textInputs: l } = (function (e) {
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
        })(r);
    function d(e, t) {
        return e
            .map((e) => {
                let n = t[e];
                return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
            })
            .join(",");
    }
    function c(e) {
        let t = s.includes(e) ? s.filter((t) => t !== e) : [...s, e],
            i = { ...l };
        t.includes(e) || delete i[e], a(n, d(t, i));
    }
    function u(e, t) {
        a(n, d(s, { ...l, [e]: t }));
    }
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: C.kL,
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/medium",
                  className: C.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: C.kL,
              children: (0, i.jsx)("div", {
                  className: C.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s.includes(t),
                              onSelectionChange: c,
                              inputType: "checkbox",
                              textInputValue: l[t],
                              onTextInputChange: u,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function L(e) {
    let { question: t, questionId: n, value: r, onValueChange: a } = e;
    return t.Selector === N.BO.SINGLE_ANSWER
        ? (0, i.jsx)(R, { question: t, questionId: n, value: r, onValueChange: a })
        : (0, i.jsx)(O, { question: t, questionId: n, value: r, onValueChange: a });
}
var D = n(260598),
    y = n(434122);
function v(e) {
    let { question: t, questionId: n, value: r, onValueChange: a } = e,
        s = t.Selector !== N.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: y.k,
        children: s
            ? (0, i.jsx)(D.f, { value: r, onChange: (e) => a(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(m.k, { value: r, onChange: (e) => a(n, e), placeholder: "Enter your response..." }),
    });
}
var b = n(724368),
    M = n(992595);
function P(e) {
    let { question: t, questionId: n, responses: r, onResponseChange: a } = e,
        s = (function () {
            switch (t.QuestionType) {
                case N.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(v, { question: t, questionId: n, value: r[n] ?? "", onValueChange: a });
                case N.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(L, { question: t, questionId: n, value: r[n] ?? "", onValueChange: a });
                case N.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: I()(M.PT, b.k),
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
var U = n(375708),
    w = n(772954);
function G(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: u } = e,
        { getSurveyResponses: h, setResponse: I, trackDisplayedQuestions: f } = (0, c.i)(),
        p = h(t),
        T = (function (e) {
            for (let t of E(e)) {
                let n = A(e.Blocks[t]);
                if (n.length > 0 && n[0].length > 0)
                    return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
            }
            return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
        })(n),
        [m, g] = r.useState(T.blockId),
        [S, N] = r.useState(T.pageIndex),
        [C, R] = r.useState(!1);
    function O(e, n) {
        I(t, e, n);
    }
    let L = r.useCallback(
            () => (
                C
                    ? s()
                    : (0, l.openModal)((e) =>
                          (0, i.jsx)(a.Modal, {
                              title: U.intl.string(U.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: U.intl.string(U.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: U.intl.string(U.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(o.E, {
                                  variant: "text-md/normal",
                                  children: U.intl.string(U.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, C],
        ),
        D = r.useMemo(
            () =>
                null == m
                    ? []
                    : (function (e, t) {
                          let { blockId: n, pageIndex: i, responses: r } = t,
                              a = e.Blocks[n];
                          if (null == a) return [];
                          let s = A(a);
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
                                                                    let r = n[e],
                                                                        a = _(r, t);
                                                                    i =
                                                                        "Or" ===
                                                                        (r.Conjuction ?? r.Conjunction ?? "And")
                                                                            ? i || a
                                                                            : i && a;
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
                                    })(e.Questions[t], r),
                                );
                      })(n, { blockId: m, pageIndex: S, responses: p }),
            [n, m, S, p],
        ),
        y = r.useCallback(() => {
            if (null == n || null == m) return;
            let e = (function (e, t) {
                let { blockId: n, pageIndex: i, responses: r } = t,
                    a = E(e),
                    s = e.Blocks[n];
                if (null == s) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                let l = A(s),
                    o = l[i];
                if (null != o && o.length > 0)
                    for (let t = o.length - 1; t >= 0; t--) {
                        let n = o[t];
                        if (null != e.Questions[n] && null != r[n]) {
                            let t = s.BlockElements.find((e) => e.QuestionID === n);
                            if (null != t) {
                                let n = (function (e, t) {
                                    if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                                    for (let n of e.SkipLogic) {
                                        let {
                                                QuestionID: e,
                                                Condition: i,
                                                Value: r,
                                                SkipToDestination: a,
                                                ChoiceLocator: s,
                                            } = n,
                                            l = t[e];
                                        if (null == l || "" === l) continue;
                                        let o = s?.match(/SelectableChoice\/(\d+)/),
                                            d = o?.[1],
                                            c = !1;
                                        switch (i) {
                                            case "Selected":
                                                c = null != d && l.split(",").includes(d);
                                                break;
                                            case "NotSelected":
                                                c = null != d && !l.split(",").includes(d);
                                                break;
                                            case "EqualTo":
                                                c = l === r?.toString();
                                                break;
                                            case "NotEqualTo":
                                                c = l !== r?.toString();
                                                break;
                                            case "GreaterThan":
                                                c = Number(l) > Number(r ?? 0);
                                                break;
                                            case "LessThan":
                                                c = Number(l) < Number(r ?? 0);
                                                break;
                                            case "GreaterThanOrEqualTo":
                                                c = Number(l) >= Number(r ?? 0);
                                                break;
                                            case "LessThanOrEqualTo":
                                                c = Number(l) <= Number(r ?? 0);
                                                break;
                                            case "Contains":
                                                c = l.includes(r?.toString() ?? "");
                                                break;
                                            case "DoesNotContain":
                                                c = !l.includes(r?.toString() ?? "");
                                        }
                                        if (c) {
                                            if ("ENDOFSURVEY" === a?.trim().toUpperCase()) return "ENDOFSURVEY";
                                            return a;
                                        }
                                    }
                                    return null;
                                })(t, r);
                                if ("ENDOFSURVEY" === n)
                                    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                                if (null != n)
                                    for (let t of a) {
                                        let i = A(e.Blocks[t]);
                                        for (let e = 0; e < i.length; e++)
                                            if (i[e].includes(n))
                                                return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                                    }
                            }
                        }
                    }
                if (i + 1 < l.length) return { blockId: n, pageIndex: i + 1, questionIds: l[i + 1], isComplete: !1 };
                let d = a.indexOf(n);
                for (let t = d + 1; t < a.length; t++) {
                    let n = a[t],
                        i = A(e.Blocks[n]);
                    if (i.length > 0 && i[0].length > 0)
                        return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
                }
                return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
            })(n, { blockId: m, pageIndex: S, responses: p });
            f(t, D), e.isComplete && d.Ay.submitSurveyResponse(t, p), g(e.blockId), N(e.pageIndex), R(e.isComplete);
        }, [n, m, S, p, t, D, f]);
    r.useEffect(() => {
        0 === D.length && y();
    }, [D, y]);
    let v = r.useMemo(() => {
        if (C) return !1;
        for (let e of D) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = p[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [C, D, n, p]);
    return C
        ? (0, i.jsxs)(a.Modal, {
              transitionState: u,
              onClose: s,
              size: "md",
              title: U.intl.string(U.t.OSqLUF),
              actions: [{ variant: "primary", text: U.intl.string(U.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: U.intl.string(U.t["2scvdw"]) }),
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: U.intl.string(U.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(a.Modal, {
              transitionState: u,
              onClose: L,
              title: U.intl.string(U.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: U.intl.string(U.t.PDTjLN), onClick: y, disabled: !v }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === D.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: w.Qs,
                                children: D.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              P,
                                              { question: t, questionId: e, responses: p, onResponseChange: O },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function x(e) {
    null != (await d.Ay.fetchSurveyDetails(e)) &&
        (c.i.getState().clearSurveyResponses(e),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 378974));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function k(e) {
    let { surveyId: t, onClose: n, transitionState: r } = e,
        a = (0, s.bG)([u.A], () => u.A.getSurvey(t));
    return null == a
        ? (0, i.jsx)(o.E, { variant: "text-md/medium", className: w.Lq, children: U.intl.string(U.t.MKDeyL) })
        : (0, i.jsx)(G, { surveyId: t, survey: a, onClose: n, transitionState: r });
}
