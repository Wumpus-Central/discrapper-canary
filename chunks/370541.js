_.d(e, {
    $p: () => E,
    pT: () => o,
});
var a = _(285883),
    r = _(394798);
let n = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function o(t, e) {
    let _ = (function (t) {
            let e;
            if (!t) return;
            let _ = t.match(n);
            if (_)
                return (
                    "1" === _[3] ? (e = !0) : "0" === _[3] && (e = !1),
                    {
                        traceId: _[1],
                        parentSampled: e,
                        parentSpanId: _[2],
                    }
                );
        })(t),
        o = (0, a.EN)(e),
        { traceId: E, parentSpanId: i, parentSampled: c } = _ || {};
    return _
        ? {
              traceId: E || (0, r.DM)(),
              parentSpanId: i || (0, r.DM)().substring(16),
              spanId: (0, r.DM)().substring(16),
              sampled: c,
              dsc: o || {},
          }
        : {
              traceId: E || (0, r.DM)(),
              spanId: (0, r.DM)().substring(16),
          };
}
function E(t = (0, r.DM)(), e = (0, r.DM)().substring(16), _) {
    let a = "";
    return void 0 !== _ && (a = _ ? "-1" : "-0"), `${t}-${e}${a}`;
}
