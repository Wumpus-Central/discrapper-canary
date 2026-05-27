t.d(r, { Y_: () => _, R9: () => c, h4: () => f, Mf: () => v, ui: () => A });
var a,
    n,
    l,
    i = (((a = {}).TOP = "top"), (a.BOTTOM = "bottom"), (a.CENTER = "center"), a),
    o = (((n = {}).FRONT = "front"), (n.BACK = "back"), n),
    s = (((l = {}).STAPLE = "staple"), (l.RAIL = "rail"), (l.BORDER = "border"), l);
let u = "responsive",
    c = { foreground: o.FRONT, background: o.BACK },
    p = new Set([s.STAPLE, s.RAIL, s.BORDER]),
    d = new Set([i.TOP, i.BOTTOM, i.CENTER]),
    f = {
        wrong_part_count: "wrong filename format",
        invalid_index: "invalid index",
        invalid_type: `invalid type (expected: ${[...p].join(", ")})`,
        invalid_anchor: `invalid anchor (expected: ${[...d].join(", ")})`,
        invalid_responsive: `invalid suffix (expected '${u}')`,
        border_has_anchor: "border layers must omit the anchor",
    };
function v(e) {
    var r;
    let t = e.replace(/\.\w+$/, "").split("_");
    if (t.length < 2 || t.length > 4) return { parsed: null, errorType: "wrong_part_count" };
    let [a, n, ...l] = t;
    if (!/^\d+$/.test(a)) return { parsed: null, errorType: "invalid_index" };
    if (!p.has(n)) return { parsed: null, errorType: "invalid_type" };
    if (n === s.BORDER) {
        if (l.length > 0 && ((r = l[0]), d.has(r))) return { parsed: null, errorType: "border_has_anchor" };
        if (l.length > 1) return { parsed: null, errorType: "wrong_part_count" };
        if (1 === l.length && l[0] !== u) return { parsed: null, errorType: "invalid_responsive" };
        let e = 1 === l.length;
        return { parsed: { index: Number(a), type: n, anchor: i.CENTER, responsive: e }, errorType: null };
    }
    let o = l[0];
    if (null == o || !d.has(o)) return { parsed: null, errorType: "invalid_anchor" };
    if (l.length > 2) return { parsed: null, errorType: "wrong_part_count" };
    if (2 === l.length && l[1] !== u) return { parsed: null, errorType: "invalid_responsive" };
    let c = 2 === l.length || n === s.RAIL;
    return { parsed: { index: Number(a), type: n, anchor: o, responsive: c }, errorType: null };
}
let m = { [o.FRONT]: 0, [o.BACK]: 1 };
function A(e, r) {
    let t = m[e.order] - m[r.order];
    return 0 !== t ? t : e.index - r.index;
}
function _(e) {
    return "preview" === e.replace(/\.\w+$/, "");
}
