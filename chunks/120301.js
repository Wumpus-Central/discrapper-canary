"use strict";
n.d(t, { Y_: () => m, R9: () => c, h4: () => h, Mf: () => f, ui: () => E });
var i,
    r,
    s,
    a = (((i = {}).TOP = "top"), (i.BOTTOM = "bottom"), (i.CENTER = "center"), i),
    o = (((r = {}).FRONT = "front"), (r.BACK = "back"), r),
    l = (((s = {}).STAPLE = "staple"), (s.RAIL = "rail"), (s.BORDER = "border"), s);
let u = "responsive",
    c = { foreground: o.FRONT, background: o.BACK },
    d = new Set([l.STAPLE, l.RAIL, l.BORDER]),
    _ = new Set([a.TOP, a.BOTTOM, a.CENTER]),
    h = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...d].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[..._].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${u}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function f(e) {
    var t;
    let n = e.replace(/\.\w+$/, "").split("_");
    if (n.length < 2 || n.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [i, r, ...s] = n;
    if (!/^\d+$/.test(i)) return { parsed: null, errorType: "invalid_index" };
    if (!d.has(r)) return { parsed: null, errorType: "invalid_type" };
    if (r === l.BORDER) {
        if (s.length > 0 && ((t = s[0]), _.has(t))) return { parsed: null, errorType: "border_has_anchor" };
        if (s.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === s.length && s[0] !== u) return { parsed: null, errorType: "invalid_responsive" };
        let e = 1 === s.length;
        return { parsed: { index: Number(i), type: r, anchor: a.CENTER, responsive: e }, errorType: null };
    }
    let o = s[0];
    if (null == o || !_.has(o)) return { parsed: null, errorType: "invalid_anchor" };
    if (s.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === s.length && s[1] !== u) return { parsed: null, errorType: "invalid_responsive" };
    let c = 2 === s.length || r === l.RAIL;
    return { parsed: { index: Number(i), type: r, anchor: o, responsive: c }, errorType: null };
}
let p = { [o.FRONT]: 0, [o.BACK]: 1 };
function E(e, t) {
    let n = p[e.order] - p[t.order];
    return 0 !== n ? n : e.index - t.index;
}
function m(e) {
    return "preview" === e.replace(/\.\w+$/, "");
}
