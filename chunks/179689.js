"use strict";
var i, r, s, a, o, l, u;
n.d(t, { u5: () => d, FO: () => _, fL: () => c }),
    n(321073),
    (i = n.g),
    (r = Date.now ? Date.now() : +new Date()),
    (s = i.performance || {}),
    (a = []),
    (o = {}),
    (l = function (e, t) {
        for (var n = 0, i = a.length, r = []; n < i; n++) a[n][e] == t && r.push(a[n]);
        return r;
    }),
    (u = function (e, t) {
        for (var n, i = a.length; i--; ) (n = a[i]).entryType == e && (void 0 === t || n.name == t) && a.splice(i, 1);
    }),
    s.now ||
        (s.now =
            s.webkitNow ||
            s.mozNow ||
            s.msNow ||
            function () {
                return (Date.now ? Date.now() : +new Date()) - r;
            }),
    s.mark ||
        (s.mark =
            s.webkitMark ||
            function (e) {
                var t = { name: e, entryType: "mark", startTime: s.now(), duration: 0 };
                a.push(t), (o[e] = t);
            }),
    s.measure ||
        (s.measure =
            s.webkitMeasure ||
            function (e, t, n) {
                var i, r;
                if (void 0 !== n && void 0 === o[n])
                    throw SyntaxError(
                        "Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.",
                    );
                if (void 0 !== t && void 0 === o[t])
                    throw SyntaxError(
                        "Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.",
                    );
                (i = o[t] ? o[t].startTime : 0),
                    (r = o[n] ? o[n].startTime : s.now()),
                    a.push({ name: e, entryType: "measure", startTime: i, duration: r - i });
            }),
    s.getEntriesByType ||
        (s.getEntriesByType =
            s.webkitGetEntriesByType ||
            function (e) {
                return l("entryType", e);
            }),
    s.getEntriesByName ||
        (s.getEntriesByName =
            s.webkitGetEntriesByName ||
            function (e) {
                return l("name", e);
            }),
    s.clearMarks ||
        (s.clearMarks =
            s.webkitClearMarks ||
            function (e) {
                u("mark", e);
            }),
    s.clearMeasures ||
        (s.clearMeasures =
            s.webkitClearMeasures ||
            function (e) {
                u("measure", e);
            }),
    (i.performance = s),
    "function" == typeof define &&
        (define.amd || define.ajs) &&
        define("performance", [], function () {
            return s;
        });
try {
    null == Date.now && (Date.now = () => new Date().valueOf());
} catch (e) {}
let c = (() => {
        try {
            return n.g.performance.timing.navigationStart ?? n.g.performance.now();
        } catch (e) {}
        return Date.now();
    })(),
    d = (() => {
        try {
            return n.g.performance.timeOrigin ?? c;
        } catch (e) {}
        return Date.now();
    })();
if (null == n.g.performance.timing)
    try {
        n.g.performance.timing = { navigationStart: c };
    } catch (e) {}
if (null == n.g.performance.timeOrigin)
    try {
        n.g.performance.timeOrigin = d;
    } catch (e) {}
let _ = n.g.performance;
