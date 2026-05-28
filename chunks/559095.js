"use strict";
n.d(t, { Y_: () => E, R9: () => u, h4: () => _, Mf: () => h, ui: () => p });
var i,
    r,
    s = (((i = {}).TOP = "top"), (i.BOTTOM = "bottom"), (i.CENTER = "center"), i),
    a = n(754474),
    o = (((r = {}).STAPLE = "staple"), (r.RAIL = "rail"), (r.BORDER = "border"), r);
let l = "responsive",
    u = { foreground: a.u.FRONT, background: a.u.BACK },
    c = new Set([o.STAPLE, o.RAIL, o.BORDER]),
    d = new Set([s.TOP, s.BOTTOM, s.CENTER]),
    _ = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...c].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...d].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${l}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function h(e) {
    var t;
    let n = e.replace(/\.\w+$/, "").split("_");
    if (n.length < 2 || n.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [i, r, ...a] = n;
    if (!/^\d+$/.test(i)) return { parsed: null, errorType: "invalid_index" };
    if (!c.has(r)) return { parsed: null, errorType: "invalid_type" };
    if (r === o.BORDER) {
        if (a.length > 0 && ((t = a[0]), d.has(t))) return { parsed: null, errorType: "border_has_anchor" };
        if (a.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === a.length && a[0] !== l) return { parsed: null, errorType: "invalid_responsive" };
        let e = 1 === a.length;
        return { parsed: { index: Number(i), type: r, anchor: s.CENTER, responsive: e }, errorType: null };
    }
    let u = a[0];
    if (null == u || !d.has(u)) return { parsed: null, errorType: "invalid_anchor" };
    if (a.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === a.length && a[1] !== l) return { parsed: null, errorType: "invalid_responsive" };
    let _ = 2 === a.length || r === o.RAIL;
    return { parsed: { index: Number(i), type: r, anchor: u, responsive: _ }, errorType: null };
}
let f = { [a.u.FRONT]: 0, [a.u.BACK]: 1 };
function p(e, t) {
    let n = f[e.order] - f[t.order];
    return 0 !== n ? n : e.index - t.index;
}
function E(e) {
    return "preview" === e.replace(/\.\w+$/, "");
}
