function o(e, t, n) {
    var o = '';
    return (
        n.split(' ').forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ';') : n && (o += n + ' ');
        }),
        o
    );
}
n.d(t, {
    My: () => i,
    fp: () => o,
    hC: () => r
});
var r = function (e, t, n) {
        var o = e.key + '-' + t.name;
        !1 === n && void 0 === e.registered[o] && (e.registered[o] = t.styles);
    },
    i = function (e, t, n) {
        r(e, t, n);
        var o = e.key + '-' + t.name;
        if (void 0 === e.inserted[t.name]) {
            var i = t;
            do e.insert(t === i ? '.' + o : '', i, e.sheet, !0), (i = i.next);
            while (void 0 !== i);
        }
    };
