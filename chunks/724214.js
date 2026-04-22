"use strict";
var r, i, s, a, o, l, u;
n(321073),
    (r = n.g),
    (i = Date.now ? Date.now() : +new Date()),
    (s = r.performance || {}),
    (a = []),
    (o = {}),
    (l = function (e, t) {
        for (var n = 0, r = a.length, i = []; n < r; n++) a[n][e] == t && i.push(a[n]);
        return i;
    }),
    (u = function (e, t) {
        for (var n, r = a.length; r--; ) (n = a[r]).entryType == e && (void 0 === t || n.name == t) && a.splice(r, 1);
    }),
    s.now ||
        (s.now =
            s.webkitNow ||
            s.mozNow ||
            s.msNow ||
            function () {
                return (Date.now ? Date.now() : +new Date()) - i;
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
                var r, i;
                if (void 0 !== n && void 0 === o[n])
                    throw SyntaxError(
                        "Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.",
                    );
                if (void 0 !== t && void 0 === o[t])
                    throw SyntaxError(
                        "Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.",
                    );
                (r = o[t] ? o[t].startTime : 0),
                    (i = o[n] ? o[n].startTime : s.now()),
                    a.push({ name: e, entryType: "measure", startTime: r, duration: i - r });
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
    (r.performance = s),
    "function" == typeof define &&
        (define.amd || define.ajs) &&
        define("performance", [], function () {
            return s;
        });
