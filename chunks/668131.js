"use strict";
n.d(t, { i: () => r });
let r = (0, n(353640).v)((e, t) => ({
    responses: {},
    displayedQuestions: {},
    setResponse: (t, n, r) => {
        e((e) => ({ responses: { ...e.responses, [t]: { ...e.responses[t], [n]: r } } }));
    },
    getSurveyResponses: (e) => t().responses[e] ?? {},
    clearSurveyResponses: (t) => {
        e((e) => {
            let n = { ...e.responses };
            delete n[t];
            let r = { ...e.displayedQuestions };
            return delete r[t], { responses: n, displayedQuestions: r };
        });
    },
    trackDisplayedQuestions: (t, n) => {
        e((e) => {
            let r = new Set(e.displayedQuestions[t] ?? new Set());
            return n.forEach((e) => r.add(e)), { displayedQuestions: { ...e.displayedQuestions, [t]: r } };
        });
    },
    getDisplayedQuestions: (e) => {
        let n = t().displayedQuestions[e];
        return null != n ? Array.from(n) : [];
    },
}));
