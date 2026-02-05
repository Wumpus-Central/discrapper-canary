"use strict";
n.d(t, { Px: () => h, Sx: () => c, fO: () => m });
var r = n(284009),
    i = n.n(r),
    a = n(186306),
    s = n(35277),
    o = n(711371);
let l = new Set(["*", "_", "~", "`", "|"]),
    u = { bold: "**", italics: "*", underline: "__", strikethrough: "~~", inlineCode: "`", spoiler: "||" };
function c(e, t, n) {
    if (null == e.selection) return { before: {}, after: {} };
    let r = d(e, t),
        i = d(e, n);
    for (let e in r) e in i || delete r[e];
    for (let e in i) e in r || delete i[e];
    return { before: r, after: i };
}
function d(e, t) {
    let [n] = o.VW.node(e, t.path);
    if (!o.l5.isText(n)) return {};
    let r = n.text,
        i = t.offset;
    for (let e = i - 1; e >= 0; e--)
        if (l.has(r.charAt(e))) i--;
        else break;
    let a = t.offset;
    for (let e = a; e < r.length; e++)
        if (l.has(r.charAt(e))) a++;
        else break;
    let s = r.substring(i, a),
        u = {};
    return (
        f({ result: u, text: s, startIndex: i, syntax: "***", type1: "italics", type2: "bold" }),
        f({ result: u, text: s, startIndex: i, syntax: "___", type1: "italics", type2: "underline" }),
        _(u, s, i, "**", "bold"),
        _(u, s, i, "*", "italics"),
        _(u, s, i, "_", "italics"),
        _(u, s, i, "__", "underline"),
        _(u, s, i, "`", "inlineCode"),
        _(u, s, i, "~~", "strikethrough"),
        _(u, s, i, "||", "spoiler"),
        u
    );
}
function _(e, t, n, r, i) {
    let a = p(t, r);
    a >= 0 && (e[i] = { chars: r, location: n + a });
}
function f(e) {
    let { result: t, text: n, startIndex: r, syntax: i, type1: a, type2: s } = e,
        o = p(n, i);
    o >= 0 &&
        ((t[a] = { chars: i.substring(0, 1), location: o + r }),
        (t[s] = { chars: i.substring(1), location: o + r + 1 }));
}
function p(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
        let r = t.charAt(0);
        if ((n > 0 && e.charAt(n - 1) === r) || (n < e.length - 1 && e.charAt(n + t.length) === r)) return -1;
    }
    return n;
}
function h(e, t) {
    a.o.withSingleEntry(e, () => {
        o.VW.withoutNormalizing(e, () => {
            i()(null != e.selection, "Editor has no selection");
            let [n, r] = o.ZF.edges(e.selection),
                a = c(e, n, r),
                l = a.before[t],
                d = a.after[t],
                _ = o.VW.node(e, n.path),
                f = o.VW.node(e, r.path);
            if (null == _ || null == f || !o.l5.isText(_[0]) || !o.l5.isText(f[0])) return;
            let p = o.PW.equals(_[1], f[1]);
            if (null != l && null != d) {
                let t = { path: n.path, offset: l.location },
                    i = { path: r.path, offset: d.location };
                s.b.delete(e, { at: i, distance: d.chars.length }), s.b.delete(e, { at: t, distance: l.chars.length });
                let a = n.offset,
                    u = r.offset;
                o.Kh.isBefore(n, t) || (a -= l.chars.length),
                    p && !o.Kh.isBefore(r, t) && (u -= l.chars.length),
                    o.Kh.isAfter(r, i) && (u -= d.chars.length),
                    s.b.select(e, {
                        anchor: { path: n.path, offset: Math.max(0, a) },
                        focus: { path: r.path, offset: Math.max(0, u) },
                    });
            } else {
                let i = u[t];
                s.b.insertText(e, i, { at: r }), s.b.insertText(e, i, { at: n });
                let a = _[0].text.length + i.length,
                    o = f[0].text.length + (p ? 2 * i.length : i.length);
                s.b.select(e, {
                    anchor: { path: n.path, offset: Math.min(a, n.offset + i.length) },
                    focus: { path: r.path, offset: Math.min(o, r.offset + (p ? i.length : 0)) },
                });
            }
        });
    }),
        o.VW.focus(e);
}
function m(e, t) {
    let n = e.selection;
    if (null == n) return;
    let r = !0;
    for (let [i, a] of o.VW.blocks(e))
        ("line" === i.type || i.type === t) && o.ZF.includes(n, a) && (r = r && i.type === t);
    o.VW.withoutNormalizing(e, () => {
        for (let [i, a] of o.VW.blocks(e))
            o.ZF.includes(n, a) &&
                (r || "line" !== i.type
                    ? r && i.type === t && s.b.setNodes(e, { type: "line" }, { at: a })
                    : s.b.setNodes(e, { type: t }, { at: a }));
    }),
        o.VW.focus(e);
}
