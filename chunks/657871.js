n.d(t, {
    kB: () => c,
    zM: () => u,
});
var r = n(43169);
function i(e, t, n) {
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
function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = (0, n(818083).B)({
    kind: "user",
    id: "2025-09_mention_suggestion",
    label: "Mention Suggestions",
    defaultConfig: {
        enabled: !1,
        suggestionDesign: "horizontal",
        highlightDesign: "mention",
        onlyExactMatch: !1,
        eagerRecentSenders: !1,
        largeGuildExactMatchRecentSenders: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Default",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !1,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 2,
            label: "Exact match only",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 3,
            label: "Alternate highlight design",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "mention",
                onlyExactMatch: !1,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 4,
            label: "Horizontal suggestions",
            config: {
                enabled: !0,
                suggestionDesign: "horizontal",
                highlightDesign: "simple",
                onlyExactMatch: !1,
                eagerRecentSenders: !1,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 5,
            label: "Exact match + eager recent senders",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
                eagerRecentSenders: !0,
                largeGuildExactMatchRecentSenders: !1,
            },
        },
        {
            id: 6,
            label: "Eager match recent senders for small guilds, exact match for large guilds",
            config: {
                enabled: !0,
                suggestionDesign: "vertical",
                highlightDesign: "simple",
                onlyExactMatch: !0,
                eagerRecentSenders: !0,
                largeGuildExactMatchRecentSenders: !0,
            },
        },
    ],
});
function c(e, t) {
    var n;
    let i = (0, r.F4)(e);
    return l.getCurrentConfig({ location: e }, s(a({}, t), { disable: i || (null != (n = t.disable) && n) }));
}
function u(e, t) {
    var n;
    let i = (0, r.jX)(e);
    return l.useExperiment({ location: e }, s(a({}, t), { disable: i || (null != (n = t.disable) && n) }));
}
