"use strict";
var i, r, a, s, l, o, d;
n.d(t, { u5: () => u, FO: () => _, fL: () => c }),
    n(321073),
    (i = n.g),
    (r = Date.now ? Date.now() : +new Date()),
    (a = i.performance || {}),
    (s = []),
    (l = {}),
    (o = function (e, t) {
        for (var n = 0, i = s.length, r = []; n < i; n++) s[n][e] == t && r.push(s[n]);
        return r;
    }),
    (d = function (e, t) {
        for (var n, i = s.length; i--; ) (n = s[i]).entryType == e && (void 0 === t || n.name == t) && s.splice(i, 1);
    }),
    a.now ||
        (a.now =
            a.webkitNow ||
            a.mozNow ||
            a.msNow ||
            function () {
                return (Date.now ? Date.now() : +new Date()) - r;
            }),
    a.mark ||
        (a.mark =
            a.webkitMark ||
            function (e) {
                var t = { name: e, entryType: "mark", startTime: a.now(), duration: 0 };
                s.push(t), (l[e] = t);
            }),
    a.measure ||
        (a.measure =
            a.webkitMeasure ||
            function (e, t, n) {
                var i, r;
                if (void 0 !== n && void 0 === l[n])
                    throw SyntaxError(
                        "Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.",
                    );
                if (void 0 !== t && void 0 === l[t])
                    throw SyntaxError(
                        "Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.",
                    );
                (i = l[t] ? l[t].startTime : 0),
                    (r = l[n] ? l[n].startTime : a.now()),
                    s.push({ name: e, entryType: "measure", startTime: i, duration: r - i });
            }),
    a.getEntriesByType ||
        (a.getEntriesByType =
            a.webkitGetEntriesByType ||
            function (e) {
                return o("entryType", e);
            }),
    a.getEntriesByName ||
        (a.getEntriesByName =
            a.webkitGetEntriesByName ||
            function (e) {
                return o("name", e);
            }),
    a.clearMarks ||
        (a.clearMarks =
            a.webkitClearMarks ||
            function (e) {
                d("mark", e);
            }),
    a.clearMeasures ||
        (a.clearMeasures =
            a.webkitClearMeasures ||
            function (e) {
                d("measure", e);
            }),
    (i.performance = a),
    "function" == typeof define &&
        (define.amd || define.ajs) &&
        define("performance", [], function () {
            return a;
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
    u = (() => {
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
        n.g.performance.timeOrigin = u;
    } catch (e) {}
let _ = n.g.performance;
