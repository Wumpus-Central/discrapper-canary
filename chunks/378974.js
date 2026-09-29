n.d(t, { K: () => G, default: () => b });
var i = n(477900),
    l = n(582128),
    r = n(17928),
    s = n(189213),
    a = n(192308),
    o = n(834730),
    c = n(27620),
    E = n(668131),
    u = n(797632);
function d(e, t) {
    let { Operator: n, QuestionID: i, ChoiceLocator: l, LeftOperand: r, RightOperand: s } = e;
    if (null == i) return !0;
    let a = t[i];
    if (null == a || "" === a) return !1;
    let o = l?.match(/SelectableChoice\/(\d+)/),
        c = o?.[1];
    switch (n) {
        case "Selected":
            return null != c && a.split(",").includes(c);
        case "NotSelected":
            return null != c && !a.split(",").includes(c);
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
function _(e) {
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
    return (n.length > 0 && t.push(n), t);
}
n(321073);
var T = n(503698),
    I = n.n(T),
    N = n(939249),
    R = n(144228),
    C = n(658675),
    O = n(95477),
    m = n(94512);
function S(e) {
    let {
            choiceId: t,
            choice: n,
            isSelected: l,
            onSelectionChange: r,
            inputType: s,
            textInputValue: a,
            onTextInputChange: c,
        } = e,
        E = "true" === n.TextEntry,
        u = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: m.NV,
        children: [
            (0, i.jsxs)(N.D, {
                className: m.d,
                onClick: function () {
                    r(t);
                },
                role: s,
                "aria-checked": l,
                "aria-labelledby": u,
                children: [
                    (0, i.jsx)("div", {
                        className: m.jl,
                        children:
                            "radio" === s
                                ? (0, i.jsx)(R.T, { disabled: !1, checked: l })
                                : (0, i.jsx)(C.P, { disabled: !1, checked: l }),
                    }),
                    (0, i.jsx)(o.E, {
                        id: u,
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: n.Display } }),
                    }),
                ],
            }),
            E &&
                (0, i.jsx)("div", {
                    className: m.Vi,
                    children: (0, i.jsx)(O.k, {
                        value: a ?? "",
                        onChange: function (e) {
                            (l || r(t), c?.(t, e));
                        },
                        disabled: !l,
                    }),
                }),
        ],
    });
}
var f = n(880652),
    p = n(838353);
function g(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        { selectedChoice: s, textInputs: a } = (function (e) {
            if (null == e || "" === e) return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                i = {};
            return (t.length > 1 && (i[n] = t[1]), { selectedChoice: n, textInputs: i });
        })(l);
    function c(e) {
        let i = a[e];
        null == i || "" === i
            ? r(n, e)
            : null != t.Choices && t.Choices[e]?.TextEntry === "true"
              ? r(n, `${e}:TEXT:${i}`)
              : r(n, e);
    }
    function E(e, t) {
        r(n, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
    }
    return null == t.Choices
        ? (0, i.jsx)("div", {
              className: p.kL,
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/medium",
                  className: p.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: p.kL,
              children: (0, i.jsx)("div", {
                  className: p.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s === t,
                              onSelectionChange: c,
                              inputType: "radio",
                              textInputValue: a[t],
                              onTextInputChange: E,
                          },
                          t,
                      );
                  }),
              }),
          });
}
function D(e) {
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
                    (n.push(l), t.length > 1 && (i[l] = t[1]));
                }),
                { selectedChoices: n, textInputs: i }
            );
        })(l);
    function c(e, t) {
        return e
            .map((e) => {
                let n = t[e];
                return null != n && "" !== n ? `${e}:TEXT:${n}` : e;
            })
            .join(",");
    }
    function E(e) {
        let t = s.includes(e) ? s.filter((t) => t !== e) : [...s, e],
            i = { ...a };
        (t.includes(e) || delete i[e], r(n, c(t, i)));
    }
    function u(e, t) {
        r(n, c(s, { ...a, [e]: t }));
    }
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, i.jsx)("div", {
              className: p.kL,
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/medium",
                  className: p.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, i.jsx)("div", {
              className: p.kL,
              children: (0, i.jsx)("div", {
                  className: p.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, i.jsx)(
                          S,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: s.includes(t),
                              onSelectionChange: E,
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
    return t.Selector === f.BO.SINGLE_ANSWER
        ? (0, i.jsx)(g, { question: t, questionId: n, value: l, onValueChange: r })
        : (0, i.jsx)(D, { question: t, questionId: n, value: l, onValueChange: r });
}
var h = n(103557),
    M = n(424349);
function U(e) {
    let { question: t, questionId: n, value: l, onValueChange: r } = e,
        s = t.Selector !== f.BO.SINGLE_LINE;
    return (0, i.jsx)("div", {
        className: M.k,
        children: s
            ? (0, i.jsx)(h.f, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response...", rows: 4 })
            : (0, i.jsx)(O.k, { value: l, onChange: (e) => r(n, e), placeholder: "Enter your response..." }),
    });
}
var y = n(134035),
    L = n(165648);
function x(e) {
    let { question: t, questionId: n, responses: l, onResponseChange: r } = e,
        s = (function () {
            switch (t.QuestionType) {
                case f.SQ.TEXT_ENTRY:
                    return (0, i.jsx)(U, { question: t, questionId: n, value: l[n] ?? "", onValueChange: r });
                case f.SQ.MULTIPLE_CHOICE:
                    return (0, i.jsx)(P, { question: t, questionId: n, value: l[n] ?? "", onValueChange: r });
                case f.SQ.DESCRIPTIVE_BLOCK:
                    return (0, i.jsx)("div", {});
                default:
                    return null;
            }
        })();
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: I()(L.PT, y.k),
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
var k = n(375708),
    v = n(424355);
function j(e) {
    let { surveyId: t, survey: n, onClose: r, transitionState: u } = e,
        { getSurveyResponses: T, setResponse: I, trackDisplayedQuestions: N } = (0, E.i)(),
        R = T(t),
        C = (function (e) {
            for (let t of _(e)) {
                let n = A(e.Blocks[t]);
                if (n.length > 0 && n[0].length > 0)
                    return { blockId: t, pageIndex: 0, questionIds: n[0], isComplete: !1 };
            }
            return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
        })(n),
        [O, m] = l.useState(C.blockId),
        [S, f] = l.useState(C.pageIndex),
        [p, g] = l.useState(!1);
    function D(e, n) {
        I(t, e, n);
    }
    let P = l.useCallback(
            () => (
                p
                    ? r()
                    : (0, a.openModal)((e) =>
                          (0, i.jsx)(s.a, {
                              title: k.intl.string(k.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: k.intl.string(k.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: k.intl.string(k.t.p89ACt),
                                      onClick: () => {
                                          (e.onClose(), r());
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(o.E, {
                                  variant: "text-md/normal",
                                  children: k.intl.string(k.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [r, p],
        ),
        h = l.useMemo(
            () =>
                null == O
                    ? []
                    : (function (e, t) {
                          let { blockId: n, pageIndex: i, responses: l } = t,
                              r = e.Blocks[n];
                          if (null == r) return [];
                          let s = A(r);
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
                                                                let i = d(n[0], t);
                                                                for (let e = 1; e < n.length; e++) {
                                                                    let l = n[e],
                                                                        r = d(l, t);
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
                      })(n, { blockId: O, pageIndex: S, responses: R }),
            [n, O, S, R],
        ),
        M = l.useCallback(() => {
            if (null == n || null == O) return;
            let e = (function (e, t) {
                let { blockId: n, pageIndex: i, responses: l } = t,
                    r = _(e),
                    s = e.Blocks[n];
                if (null == s) return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
                let a = A(s),
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
                                            c = o?.[1],
                                            E = !1;
                                        switch (i) {
                                            case "Selected":
                                                E = null != c && a.split(",").includes(c);
                                                break;
                                            case "NotSelected":
                                                E = null != c && !a.split(",").includes(c);
                                                break;
                                            case "EqualTo":
                                                E = a === l?.toString();
                                                break;
                                            case "NotEqualTo":
                                                E = a !== l?.toString();
                                                break;
                                            case "GreaterThan":
                                                E = Number(a) > Number(l ?? 0);
                                                break;
                                            case "LessThan":
                                                E = Number(a) < Number(l ?? 0);
                                                break;
                                            case "GreaterThanOrEqualTo":
                                                E = Number(a) >= Number(l ?? 0);
                                                break;
                                            case "LessThanOrEqualTo":
                                                E = Number(a) <= Number(l ?? 0);
                                                break;
                                            case "Contains":
                                                E = a.includes(l?.toString() ?? "");
                                                break;
                                            case "DoesNotContain":
                                                E = !a.includes(l?.toString() ?? "");
                                        }
                                        if (E) {
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
                                        let i = A(e.Blocks[t]);
                                        for (let e = 0; e < i.length; e++)
                                            if (i[e].includes(n))
                                                return { blockId: t, pageIndex: e, questionIds: i[e], isComplete: !1 };
                                    }
                            }
                        }
                    }
                if (i + 1 < a.length) return { blockId: n, pageIndex: i + 1, questionIds: a[i + 1], isComplete: !1 };
                let c = r.indexOf(n);
                for (let t = c + 1; t < r.length; t++) {
                    let n = r[t],
                        i = A(e.Blocks[n]);
                    if (i.length > 0 && i[0].length > 0)
                        return { blockId: n, pageIndex: 0, questionIds: i[0], isComplete: !1 };
                }
                return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
            })(n, { blockId: O, pageIndex: S, responses: R });
            (N(t, h), e.isComplete && c.Ay.submitSurveyResponse(t, R), m(e.blockId), f(e.pageIndex), g(e.isComplete));
        }, [n, O, S, R, t, h, N]);
    l.useEffect(() => {
        0 === h.length && M();
    }, [h, M]);
    let U = l.useMemo(() => {
        if (p) return !1;
        for (let e of h) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = R[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [p, h, n, R]);
    return p
        ? (0, i.jsxs)(s.a, {
              transitionState: u,
              onClose: r,
              size: "md",
              title: k.intl.string(k.t.OSqLUF),
              actions: [{ variant: "primary", text: k.intl.string(k.t.i4jeWR), onClick: r }],
              children: [
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: k.intl.string(k.t["2scvdw"]) }),
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: k.intl.string(k.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(s.a, {
              transitionState: u,
              onClose: P,
              title: k.intl.string(k.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: k.intl.string(k.t.PDTjLN), onClick: M, disabled: !U }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === h.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: v.Qs,
                                children: h.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              x,
                                              { question: t, questionId: e, responses: R, onResponseChange: D },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function G(e) {
    null != (await c.Ay.fetchSurveyDetails(e)) &&
        (E.i.getState().clearSurveyResponses(e),
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 378974));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function b(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        s = (0, r.bG)([u.A], () => u.A.getSurvey(t));
    return null == s
        ? (0, i.jsx)(o.E, { variant: "text-md/medium", className: v.Lq, children: k.intl.string(k.t.MKDeyL) })
        : (0, i.jsx)(j, { surveyId: t, survey: s, onClose: n, transitionState: l });
}
