"use strict";
n.d(t, { Mf: () => d, R9: () => o, Y_: () => f, h4: () => c, ui: () => h });
var i = n(102607),
    r = n(754474),
    s = n(374380);
let a = "responsive",
    o = { foreground: r.u.FRONT, background: r.u.BACK },
    l = new Set([s.O.STAPLE, s.O.RAIL, s.O.BORDER]),
    u = new Set([i.T.TOP, i.T.BOTTOM, i.T.CENTER]),
    c = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...l].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...u].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${a}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function d(e) {
    var t;
    let n = e.replace(/\.\w+$/, "").split("_");
    if (n.length < 2 || n.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [r, o, ...c] = n;
    if (!/^\d+$/.test(r)) return { parsed: null, errorType: "invalid_index" };
    if (!l.has(o)) return { parsed: null, errorType: "invalid_type" };
    if (o === s.O.BORDER) {
        if (c.length > 0 && ((t = c[0]), u.has(t))) return { parsed: null, errorType: "border_has_anchor" };
        if (c.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === c.length && c[0] !== a) return { parsed: null, errorType: "invalid_responsive" };
        let e = 1 === c.length;
        return { parsed: { index: Number(r), type: o, anchor: i.T.CENTER, responsive: e }, errorType: null };
    }
    let d = c[0];
    if (null == d || !u.has(d)) return { parsed: null, errorType: "invalid_anchor" };
    if (c.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === c.length && c[1] !== a) return { parsed: null, errorType: "invalid_responsive" };
    let _ = 2 === c.length || o === s.O.RAIL;
    return { parsed: { index: Number(r), type: o, anchor: d, responsive: _ }, errorType: null };
}
let _ = { [r.u.FRONT]: 0, [r.u.BACK]: 1 };
function h(e, t) {
    let n = _[e.order] - _[t.order];
    return 0 !== n ? n : e.index - t.index;
}
function f(e) {
    return "preview" === e.replace(/\.\w+$/, "");
}
