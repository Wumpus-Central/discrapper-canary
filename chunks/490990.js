n.d(t, {
    $p: () => _,
    pT: () => o,
});
var r = n(288101),
    i = n(431660);
let a = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function o(e, t) {
    let n = (function (e) {
            let t;
            if (!e) return;
            let n = e.match(a);
            if (n)
                return (
                    "1" === n[3] ? (t = !0) : "0" === n[3] && (t = !1),
                    {
                        traceId: n[1],
                        parentSampled: t,
                        parentSpanId: n[2],
                    }
                );
        })(e),
        o = (0, r.EN)(t),
        { traceId: _, parentSpanId: s, parentSampled: c } = n || {};
    return n
        ? {
              traceId: _ || (0, i.DM)(),
              parentSpanId: s || (0, i.DM)().substring(16),
              spanId: (0, i.DM)().substring(16),
              sampled: c,
              dsc: o || {},
          }
        : {
              traceId: _ || (0, i.DM)(),
              spanId: (0, i.DM)().substring(16),
          };
}
function _(e = (0, i.DM)(), t = (0, i.DM)().substring(16), n) {
    let r = "";
    return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
}
