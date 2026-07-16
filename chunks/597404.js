"use strict";
n.d(t, { Mf: () => u, R9: () => l, Y_: () => A, h4: () => c, ui: () => E });
var i = n(102607),
    r = n(754474),
    a = n(374380);
let s = "responsive",
    l = { foreground: r.u.FRONT, background: r.u.BACK },
    o = new Set([a.O.STAPLE, a.O.RAIL, a.O.BORDER]),
    d = new Set([i.T.TOP, i.T.BOTTOM, i.T.CENTER]),
    c = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...o].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...d].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${s}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function u(e) {
    var t;
    let n = e.replace(/\.\w+$/, "").split("_");
    if (n.length < 2 || n.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [r, l, ...c] = n;
    if (!/^\d+$/.test(r)) return { parsed: null, errorType: "invalid_index" };
    if (!o.has(l)) return { parsed: null, errorType: "invalid_type" };
    if (l === a.O.BORDER) {
        if (c.length > 0 && ((t = c[0]), d.has(t))) return { parsed: null, errorType: "border_has_anchor" };
        if (c.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === c.length && c[0] !== s) return { parsed: null, errorType: "invalid_responsive" };
        let e = 1 === c.length;
        return { parsed: { index: Number(r), type: l, anchor: i.T.CENTER, responsive: e }, errorType: null };
    }
    let u = c[0];
    if (null == u || !d.has(u)) return { parsed: null, errorType: "invalid_anchor" };
    if (c.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === c.length && c[1] !== s) return { parsed: null, errorType: "invalid_responsive" };
    let _ = 2 === c.length || l === a.O.RAIL;
    return { parsed: { index: Number(r), type: l, anchor: u, responsive: _ }, errorType: null };
}
let _ = { [r.u.FRONT]: 0, [r.u.BACK]: 1 };
function E(e, t) {
    let n = _[e.order] - _[t.order];
    return 0 !== n ? n : e.index - t.index;
}
function A(e) {
    return "preview" === e.replace(/\.\w+$/, "");
}
