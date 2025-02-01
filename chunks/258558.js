n(653041),
    n(411104),
    !(function (e) {
        var t = Date.now ? Date.now() : +new Date(),
            n = e.performance || {},
            i = [],
            r = {},
            a = function (e, t) {
                for (var n = 0, r = i.length, a = []; n < r; n++) i[n][e] == t && a.push(i[n]);
                return a;
            },
            s = function (e, t) {
                for (var n, r = i.length; r--; ) (n = i[r]).entryType == e && (void 0 === t || n.name == t) && i.splice(r, 1);
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
                        i.push(t), (r[e] = t);
                    }),
            n.measure ||
                (n.measure =
                    n.webkitMeasure ||
                    function (e, t, a) {
                        var s, o;
                        if (void 0 !== a && void 0 === r[a]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + a + "' does not exist.");
                        if (void 0 !== t && void 0 === r[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
                        (s = r[t] ? r[t].startTime : 0),
                            (o = r[a] ? r[a].startTime : n.now()),
                            i.push({
                                name: e,
                                entryType: 'measure',
                                startTime: s,
                                duration: o - s
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
                        s('mark', e);
                    }),
            n.clearMeasures ||
                (n.clearMeasures =
                    n.webkitClearMeasures ||
                    function (e) {
                        s('measure', e);
                    }),
            (e.performance = n),
            'function' == typeof define &&
                (define.amd || define.ajs) &&
                define('performance', [], function () {
                    return n;
                });
    })(n.g);
