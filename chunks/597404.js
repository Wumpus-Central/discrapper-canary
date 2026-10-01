n.d(e, { Mf: () => O, R9: () => o, Y_: () => s, h4: () => d, ui: () => h });
var t = n(102607),
    l = n(754474),
    i = n(374380);
let a = "responsive",
    o = { foreground: l.u.FRONT, background: l.u.BACK },
    u = new Set([i.O.STAPLE, i.O.RAIL, i.O.BORDER]),
    p = new Set([t.T.TOP, t.T.BOTTOM, t.T.CENTER]),
    d = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...u].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...p].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${a}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function O(r) {
    var e;
    let n = r.replace(/\.\w+$/, "").split("_");
    if (n.length < 2 || n.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [l, o, ...d] = n;
    if (!/^\d+$/.test(l)) return { parsed: null, errorType: "invalid_index" };
    if (!u.has(o)) return { parsed: null, errorType: "invalid_type" };
    if (o === i.O.BORDER) {
        if (d.length > 0 && ((e = d[0]), p.has(e))) return { parsed: null, errorType: "border_has_anchor" };
        if (d.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === d.length && d[0] !== a) return { parsed: null, errorType: "invalid_responsive" };
        let r = 1 === d.length;
        return { parsed: { index: Number(l), type: o, anchor: t.T.CENTER, responsive: r }, errorType: null };
    }
    let O = d[0];
    if (null == O || !p.has(O)) return { parsed: null, errorType: "invalid_anchor" };
    if (d.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === d.length && d[1] !== a) return { parsed: null, errorType: "invalid_responsive" };
    let T = 2 === d.length || o === i.O.RAIL;
    return { parsed: { index: Number(l), type: o, anchor: O, responsive: T }, errorType: null };
}
let T = { [l.u.FRONT]: 0, [l.u.BACK]: 1 };
function h(r, e) {
    let n = T[r.order] - T[e.order];
    return 0 !== n ? n : r.index - e.index;
}
function s(r) {
    return "preview" === r.replace(/\.\w+$/, "");
}
