function r(e, t, n) {
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
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
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
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, { H: () => s }), n(388685);
let s = (0, n(191336).U)((e, t) => ({
    responses: {},
    displayedQuestions: {},
    setResponse: (t, n, r) => {
        e((e) => ({ responses: o(i({}, e.responses), { [t]: o(i({}, e.responses[t]), { [n]: r }) }) }));
    },
    getSurveyResponses: (e) => {
        var n;
        return null != (n = t().responses[e]) ? n : {};
    },
    clearSurveyResponses: (t) => {
        e((e) => {
            let n = i({}, e.responses);
            delete n[t];
            let r = i({}, e.displayedQuestions);
            return (
                delete r[t],
                {
                    responses: n,
                    displayedQuestions: r,
                }
            );
        });
    },
    trackDisplayedQuestions: (t, n) => {
        e((e) => {
            var r;
            let a = new Set(null != (r = e.displayedQuestions[t]) ? r : new Set());
            return n.forEach((e) => a.add(e)), { displayedQuestions: o(i({}, e.displayedQuestions), { [t]: a }) };
        });
    },
    getDisplayedQuestions: (e) => {
        let n = t().displayedQuestions[e];
        return null != n ? Array.from(n) : [];
    },
}));
