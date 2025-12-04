r.d(t, {
    $p: () => _,
    pT: () => o,
});
var n = r(288101),
    a = r(431660);
let i = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function o(e, t) {
    let r = (function (e) {
            let t;
            if (!e) return;
            let r = e.match(i);
            if (r)
                return (
                    "1" === r[3] ? (t = !0) : "0" === r[3] && (t = !1),
                    {
                        traceId: r[1],
                        parentSampled: t,
                        parentSpanId: r[2],
                    }
                );
        })(e),
        o = (0, n.EN)(t),
        { traceId: _, parentSpanId: s, parentSampled: c } = r || {};
    return r
        ? {
              traceId: _ || (0, a.DM)(),
              parentSpanId: s || (0, a.DM)().substring(16),
              spanId: (0, a.DM)().substring(16),
              sampled: c,
              dsc: o || {},
          }
        : {
              traceId: _ || (0, a.DM)(),
              spanId: (0, a.DM)().substring(16),
          };
}
function _(e = (0, a.DM)(), t = (0, a.DM)().substring(16), r) {
    let n = "";
    return void 0 !== r && (n = r ? "-1" : "-0"), `${e}-${t}${n}`;
}
