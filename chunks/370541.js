a.d(e, {
    $p: () => i,
    pT: () => o
});
var r = a(285883),
    n = a(394798);
let _ = RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
function o(t, e) {
    let a = (function (t) {
            let e;
            if (!t) return;
            let a = t.match(_);
            if (a)
                return (
                    '1' === a[3] ? (e = !0) : '0' === a[3] && (e = !1),
                    {
                        traceId: a[1],
                        parentSampled: e,
                        parentSpanId: a[2]
                    }
                );
        })(t),
        o = (0, r.EN)(e),
        { traceId: i, parentSpanId: c, parentSampled: s } = a || {};
    return a
        ? {
              traceId: i || (0, n.DM)(),
              parentSpanId: c || (0, n.DM)().substring(16),
              spanId: (0, n.DM)().substring(16),
              sampled: s,
              dsc: o || {}
          }
        : {
              traceId: i || (0, n.DM)(),
              spanId: (0, n.DM)().substring(16)
          };
}
function i(t = (0, n.DM)(), e = (0, n.DM)().substring(16), a) {
    let r = '';
    return void 0 !== a && (r = a ? '-1' : '-0'), `${t}-${e}${r}`;
}
