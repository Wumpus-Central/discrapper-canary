n.d(t, { ZP: () => h }), n(388685), n(35282), n(49124);
var r = n(544891),
    i = n(570140),
    a = n(960048),
    o = n(401302),
    s = n(841110),
    l = n(284881),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t, n) {
    let r = s.Z.getSurvey(e);
    if (null == r) return null;
    let i = {};
    for (let [e, n] of Object.entries(t)) {
        let t = r.Questions[e];
        null != t &&
            (t.QuestionType === l.S.MULTIPLE_CHOICE && t.Selector === l.E_.MULTIPLE_ANSWER
                ? ((i[e] = n.split(",")), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder))
                : t.QuestionType === l.S.MULTIPLE_CHOICE && t.Selector === l.E_.SINGLE_ANSWER
                  ? ((i[e] = parseInt(n)), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder))
                  : t.QuestionType === l.S.TEXT_ENTRY
                    ? (i["".concat(e, "_TEXT")] = n)
                    : (i[e] = n));
    }
    let a = Object.keys(t);
    return (
        n.forEach((e) => {
            if (!a.includes(e)) {
                let t = r.Questions[e];
                null != t &&
                    null != t.ChoiceOrder &&
                    t.QuestionType === l.S.MULTIPLE_CHOICE &&
                    (t.Selector === l.E_.MULTIPLE_ANSWER && (i[e] = []), (i["".concat(e, "_DO")] = t.ChoiceOrder));
            }
        }),
        i
    );
}
let h = {
    fetchSurveyDetails: async function (e) {
        try {
            let t = (
                await r.tn.get({
                    url: c.ANM.EMBEDDED_SURVEY(e),
                    rejectWithError: !0,
                })
            ).body;
            return (
                i.Z.dispatch({
                    type: "QUALTRICS_SURVEY_FETCH_SUCCESS",
                    surveyId: e,
                    surveyDetails: t,
                }),
                t
            );
        } catch (e) {
            return a.Z.captureException(e), null;
        }
    },
    submitSurveyResponse: async function (e, t, n) {
        let i = o.H.getState().getDisplayedQuestions(e),
            s = p(e, t, null != i ? i : []);
        if (null == s) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await r.tn.post({
                        url: c.ANM.EMBEDDED_SURVEY_RESPONSE(e),
                        body: {
                            values_json: JSON.stringify(s),
                            displayedFields: null != i ? i : [],
                            metadata: _(d({}, n), { timestamp: new Date().toISOString() }),
                        },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return a.Z.captureException(e), { responseId: "null" };
        }
    },
};
