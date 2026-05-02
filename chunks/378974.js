"use strict";
n.d(t, { K: () => k, default: () => G });
var i = n(627968),
    r = n(64700),
    s = n(189213),
    a = n(17928),
    o = n(192308),
    l = n(834730),
    u = n(27620),
    c = n(668131),
    d = n(797632);
function _(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: r, LeftOperand: s, RightOperand: a } = e;
    if (null == i) return !0;
    let o = t[i];
    if (null == o || "" === o) return !1;
    let l = r?.match(/SelectableChoice\/(\d+)/),
        u = l?.[1];
    switch (n) {
        case "Selected":
            return null != u && o.split(",").includes(u);
        case "NotSelected":
            return null != u && !o.split(",").includes(u);
        case "EqualTo":
            return o === (a ?? s);
        case "NotEqualTo":
            return o !== (a ?? s);
        case "GreaterThan":
            return Number(o) > Number(a ?? s ?? 0);
        case "LessThan":
            return Number(o) < Number(a ?? s ?? 0);
        case "GreaterThanOrEqualTo":
            return Number(o) >= Number(a ?? s ?? 0);
        case "LessThanOrEqualTo":
            return Number(o) <= Number(a ?? s ?? 0);
        case "Contains":
            return o.includes(a ?? s ?? "");
        case "DoesNotContain":
            return !o.includes(a ?? s ?? "");
        default:
            return !0;
    }
}
function f(e) {
    let t = [];
    for (let n of e.SurveyFlow.Flow) ("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
    return t;
}
function h(e) {
    let t = [],
        n = [];
    for (let i of e.BlockElements)
        "Page Break" === i.Type
            ? n.length > 0 && (t.push(n), (n = []))
            : "Question" === i.Type && null != i.QuestionID && n.push(i.QuestionID);
    return n.length > 0 && t.push(n), t;
}
n(321073);
var p = n(503698),
    E = n.n(p),
    m = n(939249),
    g = n(773812),
    A = n(658675),
    I = n(292666),
    T = n(793361);
function S(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: r,
            onSelectionChange: s,
            inputType: a,
            textInputValue: o,
            onTextInputChange: u,
        } = e,
        c = "true" === n.TextEntry,
        d = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: T.NV,
        children: [
            (0, i.jsxs)(m.D, {
                className: T.d,
                onClick: () => {
                    s(t);
                },
                role: a,
                "aria-checked": r,
                "aria-labelledby": d,
                children: [
                    (0, i.jsx)("div", {
                        className: T.jl,
                        children:
                            "radio" === a
                                ? (0, i.jsx)(g.T, { disabled: !1, checked: r })
                                : (0, i.jsx)(A.P, { disabled: !1, checked: r }),
                    }),
                    (0, i.jsx)(l.E, {
                        id: d,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            c &&
                (0, i.jsx)("div", {
                    className: T.Vi,
                    children: (0, i.jsx)(I.k, {
                        value: o ?? "",
                        onChange: (e) => {
                            r || s(t), u?.(t, e);
                        },
                        disabled: !r,
                    }),
                }),
        ],
    });
}
var N = n(880652),
    y = n(225460);
function C(e) {
    let { question: t, questionId: n, value: r, onValueChange: s } = e,
        { selectedChoice: a, textInputs: o } = ((e) => {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i };
        })(r),
        u = (e) => {
            let i = o[e];
            null == i || "" === i
                ? s(n, e)
                : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                  ? s(n, `${e}:TEXT:${i}`)
                  : s(n, e);
        },
        c = (e, t) => {
            s(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
        };
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: y.kL,
              children: (0, i.jsx)(l.E, {
                  variant: "text-sm/medium",
                  className: y.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: y.kL,
              children: (0, i.jsx)("div", {
                  className: y.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: a === t,
                              onSelectionChange: u,
                              inputType: "radio",
                              textInputValue: o[t],
                              onTextInputChange: c,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function v(e) {
    let { question: t, questionId: n, value: r, onValueChange: s } = e,
        { selectedChoices: a, textInputs: o } = ((e) => {
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
        })(r),
        u = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
                })
                .join(","),
        c = (e) => {
            let t = a.includes(e) ? a.filter((t) => t !== e) : [...a, e],
                i = { ...o };
            t.includes(e) || delete i[e], s(n, u(t, i));
        },
        d = (e, t) => {
            s(n, u(a, { ...o, [e]: t }));
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: y.kL,
              children: (0, i.jsx)(l.E, {
                  variant: "text-sm/medium",
                  className: y.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: y.kL,
              children: (0, i.jsx)("div", {
                  className: y.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: a.includes(t),
                              onSelectionChange: c,
                              inputType: "checkbox",
                              textInputValue: o[t],
                              onTextInputChange: d,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function O(e) {
    let { question: t, questionId: n, value: r, onValueChange: s } = e;
    return t.Selector === N.BO.SINGLE_ANSWER
        ? (0, i.jsx)(C, { question: t, questionId: n, value: r, onValueChange: s })
        : (0, i.jsx)(v, { question: t, questionId: n, value: r, onValueChange: s });
}
var R = n(260598),
    b = n(434122);
function D(e) {
    let { question: t, questionId: n, value: r, onValueChange: s } = e,
        a = t.Selector !== N.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: b.k,
        children: a
            ? (0, i.jsx)(R.f, { value: r, onChange: (e) => s(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(I.k, { value: r, onChange: (e) => s(n, e), placeholder: "Enter your response..." }),
    });
}
var L = n(724368),
    w = n(992595);
function M(e) {
    let { question: t, questionId: n, responses: r, onResponseChange: s } = e,
        a = (() => {
            switch (t.QuestionType) {
                case N.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(D, { question: t, questionId: n, value: r[n] ?? "", onValueChange: s });
                case N.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(O, { question: t, questionId: n, value: r[n] ?? "", onValueChange: s });
                case N.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              className: E()(w.PT, L.k),
              children: [
                  (0, i.jsx)(l.E, {
                      variant: "text-lg/normal",
                      color: "text-strong",
                      children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t.QuestionText_Unsafe ?? "" } }),
                  }),
                  a,
              ],
          });
}
var P = n(375708),
    x = n(772954);
function U(e) {
    let { surveyId: t, survey: n, onClose: a, transitionState: d } = e,
        { getSurveyResponses: p, setResponse: E, trackDisplayedQuestions: m } = (0, c.i)(),
        g = p(t),
        A = (function (e) {
            for (let t of f(e)) {
                let n = h(e.Blocks[t]);
                if (n.length > 0 && n[0].length > 0)
                    return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
            }
            return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
        })(n),
        [I, T] = r.useState(A.blockId),
        [S, N] = r.useState(A.pageIndex),
        [y, C] = r.useState(!1),
        v = (e, n) => {
            E(t, e, n);
        },
        O = r.useCallback(
            () => (
                y
                    ? a()
                    : (0, o.openModal)((e) =>
                          (0, i.jsx)(s.Modal, {
                              title: P.intl.string(P.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: P.intl.string(P.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: P.intl.string(P.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), a();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(l.E, {
                                  variant: "text-md/normal",
                                  children: P.intl.string(P.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [a, y],
        ),
        R = r.useMemo(
            () =>
                null == I
                    ? []
                    : (function (e, t) {
                          let { blockId: n, pageIndex: i, responses: r } = t,
                              s = e.Blocks[n];
                          if (null == s) return [];
                          let a = h(s);
                          return i >= a.length
                              ? []
                              : a[i].filter((t) =>
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
                                                            let i = _(n[0], t);
                                                            for (let e = 1; e < n.length; e++) {
                                                                let r = n[e],
                                                                    s = _(r, t);
                                                                i =
                                                                    "Or" === (r.Conjuction ?? r.Conjunction ?? "And")
                                                                        ? i || s
                                                                        : i && s;
                                                            }
                                                            return i;
                                                        })(i, t)
                                                    )
                                                        return !0;
                                                } else if ("Else" === i.Type) return !0;
                                            }
                                        return !1;
                                    })(e.Questions[t], r),
                                );
                      })(n, { blockId: I, pageIndex: S, responses: g }),
            [n, I, S, g],
        ),
        b = r.useCallback(() => {
            if (null == n || null == I) return;
            let e = (function (e, t) {
                let { blockId: n, pageIndex: i, responses: r } = t,
                    s = f(e),
                    a = e.Blocks[n];
                if (null == a) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                let o = h(a),
                    l = o[i];
                if (null != l && l.length > 0)
                    for (let t = l.length - 1; t >= 0; t--) {
                        let n = l[t];
                        if (null != e.Questions[n] && null != r[n]) {
                            let t = a.BlockElements.find((e) => e.QuestionID === n);
                            if (null != t) {
                                let n = (function (e, t) {
                                    if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
                                    for (let n of e.SkipLogic) {
                                        let {
                                                QuestionID: e,
                                                Condition: i,
                                                Value: r,
                                                SkipToDestination: s,
                                                ChoiceLocator: a,
                                            } = n,
                                            o = t[e];
                                        if (null == o || "" === o) continue;
                                        let l = a?.match(/SelectableChoice\/(\d+)/),
                                            u = l?.[1],
                                            c = !1;
                                        switch (i) {
                                            case "Selected":
                                                c = null != u && o.split(",").includes(u);
                                                break;
                                            case "NotSelected":
                                                c = null != u && !o.split(",").includes(u);
                                                break;
                                            case "EqualTo":
                                                c = o === r?.toString();
                                                break;
                                            case "NotEqualTo":
                                                c = o !== r?.toString();
                                                break;
                                            case "GreaterThan":
                                                c = Number(o) > Number(r ?? 0);
                                                break;
                                            case "LessThan":
                                                c = Number(o) < Number(r ?? 0);
                                                break;
                                            case "GreaterThanOrEqualTo":
                                                c = Number(o) >= Number(r ?? 0);
                                                break;
                                            case "LessThanOrEqualTo":
                                                c = Number(o) <= Number(r ?? 0);
                                                break;
                                            case "Contains":
                                                c = o.includes(r?.toString() ?? "");
                                                break;
                                            case "DoesNotContain":
                                                c = !o.includes(r?.toString() ?? "");
                                        }
                                        if (c) {
                                            if ("ENDOFSURVEY" === s?.trim().toUpperCase()) return "ENDOFSURVEY";
                                            return s;
                                        }
                                    }
                                    return null;
                                })(t, r);
                                if ("ENDOFSURVEY" === n)
                                    return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                                if (null != n)
                                    for (let t of s) {
                                        let i = h(e.Blocks[t]);
                                        for (let e = 0; e < i.length; e++)
                                            if (i[e].includes(n))
                                                return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                                    }
                            }
                        }
                    }
                if (i + 1 < o.length) return { blockId: n, pageIndex: i + 1, questionIds: o[i + 1], isComplete: !1 };
                let u = s.indexOf(n);
                for (let t = u + 1; t < s.length; t++) {
                    let n = s[t],
                        i = h(e.Blocks[n]);
                    if (i.length > 0 && i[0].length > 0)
                        return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
                }
                return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
            })(n, { blockId: I, pageIndex: S, responses: g });
            m(t, R), e.isComplete && u.Ay.submitSurveyResponse(t, g), T(e.blockId), N(e.pageIndex), C(e.isComplete);
        }, [n, I, S, g, t, R, m]);
    r.useEffect(() => {
        0 === R.length && b();
    }, [R, b]);
    let D = r.useMemo(() => {
        if (y) return !1;
        for (let e of R) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = g[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [y, R, n, g]);
    return y
        ? (0, i.jsxs)(s.Modal, {
              transitionState: d,
              onClose: a,
              size: "md",
              title: P.intl.string(P.t.OSqLUF),
              actions: [{ variant: "primary", text: P.intl.string(P.t.i4jeWR), onClick: a }],
              children: [
                  (0, i.jsx)(l.E, { variant: "text-md/normal", children: P.intl.string(P.t["2scvdw"]) }),
                  (0, i.jsx)(l.E, { variant: "text-md/normal", children: P.intl.string(P.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(s.Modal, {
              transitionState: d,
              onClose: O,
              title: P.intl.string(P.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: P.intl.string(P.t.PDTjLN), onClick: b, disabled: !D }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === R.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: x.Qs,
                                children: R.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              M,
                                              { question: t, questionId: e, responses: g, onResponseChange: v },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function k(e) {
    null != (await u.Ay.fetchSurveyDetails(e)) &&
        (c.i.getState().clearSurveyResponses(e),
        (0, o.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 378974));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function G(e) {
    let { surveyId: t, onClose: n, transitionState: r } = e,
        s = (0, a.bG)([d.A], () => d.A.getSurvey(t));
    return null == s
        ? (0, i.jsx)(l.E, { variant: "text-md/medium", className: x.Lq, children: P.intl.string(P.t.MKDeyL) })
        : (0, i.jsx)(U, { surveyId: t, survey: s, onClose: n, transitionState: r });
}
