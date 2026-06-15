t.d(r, { Mf: () => p, R9: () => o, Y_: () => m, h4: () => c, ui: () => f });
var a = t(102607),
    n = t(754474),
    l = t(374380);
let i = "responsive",
    o = { foreground: n.u.FRONT, background: n.u.BACK },
    s = new Set([l.O.STAPLE, l.O.RAIL, l.O.BORDER]),
    u = new Set([a.T.TOP, a.T.BOTTOM, a.T.CENTER]),
    c = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...s].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...u].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${i}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function p(e) {
    var r;
    let t = e.replace(/\.\w+$/, "").split("_");
    if (t.length < 2 || t.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [n, o, ...c] = t;
    if (!/^\d+$/.test(n)) return { parsed: null, errorType: "invalid_index" };
    if (!s.has(o)) return { parsed: null, errorType: "invalid_type" };
    if (o === l.O.BORDER) {
        if (c.length > 0 && ((r = c[0]), u.has(r))) return { parsed: null, errorType: "border_has_anchor" };
        if (c.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === c.length && c[0] !== i) return { parsed: null, errorType: "invalid_responsive" };
        let e = 1 === c.length;
        return { parsed: { index: Number(n), type: o, anchor: a.T.CENTER, responsive: e }, errorType: null };
    }
    let p = c[0];
    if (null == p || !u.has(p)) return { parsed: null, errorType: "invalid_anchor" };
    if (c.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === c.length && c[1] !== i) return { parsed: null, errorType: "invalid_responsive" };
    let d = 2 === c.length || o === l.O.RAIL;
    return { parsed: { index: Number(n), type: o, anchor: p, responsive: d }, errorType: null };
}
let d = { [n.u.FRONT]: 0, [n.u.BACK]: 1 };
function f(e, r) {
    let t = d[e.order] - d[r.order];
    return 0 !== t ? t : e.index - r.index;
}
function m(e) {
    return "preview" === e.replace(/\.\w+$/, "");
}
