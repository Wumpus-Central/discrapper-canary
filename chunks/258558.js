n(539854),
    n(415506),
    !(function (e) {
        var t = Date.now ? Date.now() : +new Date(),
            n = e.performance || {},
            r = [],
            i = {},
            a = function (e, t) {
                for (var n = 0, i = r.length, a = []; n < i; n++) r[n][e] == t && a.push(r[n]);
                return a;
            },
            o = function (e, t) {
                for (var n, i = r.length; i--; ) (n = r[i]).entryType == e && (void 0 === t || n.name == t) && r.splice(i, 1);
            };
        n.now ||
            (n.now =
                n.webkitNow ||
                n.mozNow ||
                n.msNow ||
                function () {
                    return (Date.now ? Date.now() : +new Date()) - t;
                }),
            n.mark ||
                (n.mark =
                    n.webkitMark ||
                    function (e) {
                        var t = {
                            name: e,
                            entryType: 'mark',
                            startTime: n.now(),
                            duration: 0
                        };
                        r.push(t), (i[e] = t);
                    }),
            n.measure ||
                (n.measure =
                    n.webkitMeasure ||
                    function (e, t, a) {
                        var o, s;
                        if (void 0 !== a && void 0 === i[a]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + a + "' does not exist.");
                        if (void 0 !== t && void 0 === i[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
                        (o = i[t] ? i[t].startTime : 0),
                            (s = i[a] ? i[a].startTime : n.now()),
                            r.push({
                                name: e,
                                entryType: 'measure',
                                startTime: o,
                                duration: s - o
                            });
                    }),
            n.getEntriesByType ||
                (n.getEntriesByType =
                    n.webkitGetEntriesByType ||
                    function (e) {
                        return a('entryType', e);
                    }),
            n.getEntriesByName ||
                (n.getEntriesByName =
                    n.webkitGetEntriesByName ||
                    function (e) {
                        return a('name', e);
                    }),
            n.clearMarks ||
                (n.clearMarks =
                    n.webkitClearMarks ||
                    function (e) {
                        o('mark', e);
                    }),
            n.clearMeasures ||
                (n.clearMeasures =
                    n.webkitClearMeasures ||
                    function (e) {
                        o('measure', e);
                    }),
            (e.performance = n),
            'function' == typeof define &&
                (define.amd || define.ajs) &&
                define('performance', [], function () {
                    return n;
                });
    })(n.g);
