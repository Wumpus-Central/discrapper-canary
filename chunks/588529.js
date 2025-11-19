n.d(t, { ZP: () => m }), n(388685), n(35282), n(49124);
var r = n(544891),
    i = n(570140),
    a = n(960048),
    o = n(947245),
    s = n(401302),
    l = n(841110),
    c = n(284881),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t, n) {
    let r = l.Z.getSurvey(e);
    if (null == r) return null;
    let i = {};
    for (let [e, n] of Object.entries(t)) {
        let t = r.Questions[e];
        if (null != t)
            if (t.QuestionType === c.S.MULTIPLE_CHOICE && t.Selector === c.E_.MULTIPLE_ANSWER)
                (i[e] = n.split(",")), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            else if (t.QuestionType === c.S.MULTIPLE_CHOICE && t.Selector === c.E_.SINGLE_ANSWER) {
                if (n.includes(":TEXT:")) {
                    let t = n.split(":TEXT:", 2)[0],
                        r = n.split(":TEXT:", 2)[1];
                    (i[e] = parseInt(t)), (i["".concat(e, "_").concat(t, "_TEXT")] = r);
                } else i[e] = parseInt(n);
                null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
            } else t.QuestionType === c.S.TEXT_ENTRY ? (i["".concat(e, "_TEXT")] = n) : (i[e] = n);
    }
    let a = Object.keys(t);
    return (
        n.forEach((e) => {
            if (!a.includes(e)) {
                let t = r.Questions[e];
                null != t &&
                    null != t.ChoiceOrder &&
                    t.QuestionType === c.S.MULTIPLE_CHOICE &&
                    (t.Selector === c.E_.MULTIPLE_ANSWER && (i[e] = []), (i["".concat(e, "_DO")] = t.ChoiceOrder));
            }
        }),
        i
    );
}
let m = {
    fetchSurveyDetails: async function (e) {
        try {
            let t = (
                await r.tn.get({
                    url: u.ANM.EMBEDDED_SURVEY(e),
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
        let i = s.H.getState().getDisplayedQuestions(e),
            o = h(e, t, null != i ? i : []);
        if (null == o) return { responseId: "null" };
        try {
            return {
                responseId: (
                    await r.tn.post({
                        url: u.ANM.EMBEDDED_SURVEY_RESPONSE(e),
                        body: {
                            values_json: JSON.stringify(o),
                            displayedFields: null != i ? i : [],
                            metadata: p(f({}, n), { timestamp: new Date().toISOString() }),
                        },
                        rejectWithError: !0,
                    })
                ).body.responseId,
            };
        } catch (e) {
            return a.Z.captureException(e), { responseId: "null" };
        }
    },
    triggerEmbeddedSurvey: function (e) {
        o.E.getConfig({ location: "action creator" }).enableNitroUnsubSurvey &&
            i.Z.dispatch({
                type: "EMBEDDED_SURVEY_TRIGGER",
                trigger: e,
            });
    },
};
