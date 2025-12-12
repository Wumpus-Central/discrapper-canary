n.d(t, {
    Z: () => o,
    w: () => _,
});
var r = n(98076),
    i = n(4757),
    a = n(82255);
function o(e) {
    if (!i.X) return;
    let { description: t = "< unknown name >", op: n = "< unknown op >", parent_span_id: o } = (0, a.XU)(e),
        { spanId: _ } = e.spanContext(),
        s = (0, a.Tt)(e),
        c = (0, a.Gx)(e),
        E = c === e,
        l = `[Tracing] Starting ${s ? "sampled" : "unsampled"} ${E ? "root " : ""}span`,
        u = [`op: ${n}`, `name: ${t}`, `ID: ${_}`];
    if ((o && u.push(`parent ID: ${o}`), !E)) {
        let { op: e, description: t } = (0, a.XU)(c);
        u.push(`root ID: ${c.spanContext().spanId}`),
            e && u.push(`root op: ${e}`),
            t && u.push(`root description: ${t}`);
    }
    r.kg.log(`${l}
  ${u.join("\n  ")}`);
}
function _(e) {
    if (!i.X) return;
    let { description: t = "< unknown name >", op: n = "< unknown op >" } = (0, a.XU)(e),
        { spanId: o } = e.spanContext(),
        _ = (0, a.Gx)(e) === e,
        s = `[Tracing] Finishing "${n}" ${_ ? "root " : ""}span "${t}" with ID ${o}`;
    r.kg.log(s);
}
