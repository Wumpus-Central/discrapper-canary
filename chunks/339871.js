"use strict";
n.d(t, { Px: () => p, Sx: () => c, fO: () => E });
var i = n(284009),
    r = n.n(i),
    s = n(186306),
    a = n(35277),
    o = n(820066);
let l = new Set(["*", "_", "~", "`", "|"]),
    u = { bold: "**", italics: "*", underline: "__", strikethrough: "~~", inlineCode: "`", spoiler: "||" };
function c(e, t, n) {
    if (null == e.selection) return { before: {}, after: {} };
    let i = d(e, t),
        r = d(e, n);
    for (let e in i) e in r || delete i[e];
    for (let e in r) e in i || delete r[e];
    return { before: i, after: r };
}
function d(e, t) {
    let [n] = o.VW.node(e, t.path);
    if (!o.l5.isText(n)) return {};
    let i = n.text,
        r = t.offset;
    for (let e = r - 1; e >= 0; e--)
        if (l.has(i.charAt(e))) r--;
        else break;
    let s = t.offset;
    for (let e = s; e < i.length; e++)
        if (l.has(i.charAt(e))) s++;
        else break;
    let a = i.substring(r, s),
        u = {};
    return (
        h({ result: u, text: a, startIndex: r, syntax: "***", type1: "italics", type2: "bold" }),
        h({ result: u, text: a, startIndex: r, syntax: "___", type1: "italics", type2: "underline" }),
        _(u, a, r, "**", "bold"),
        _(u, a, r, "*", "italics"),
        _(u, a, r, "_", "italics"),
        _(u, a, r, "__", "underline"),
        _(u, a, r, "`", "inlineCode"),
        _(u, a, r, "~~", "strikethrough"),
        _(u, a, r, "||", "spoiler"),
        u
    );
}
function _(e, t, n, i, r) {
    let s = f(t, i);
    s >= 0 && (e[r] = { chars: i, location: n + s });
}
function h(e) {
    let { result: t, text: n, startIndex: i, syntax: r, type1: s, type2: a } = e,
        o = f(n, r);
    o >= 0 &&
        ((t[s] = { chars: r.substring(0, 1), location: o + i }),
        (t[a] = { chars: r.substring(1), location: o + i + 1 }));
}
function f(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
        let i = t.charAt(0);
        if ((n > 0 && e.charAt(n - 1) === i) || (n < e.length - 1 && e.charAt(n + t.length) === i)) return -1;
    }
    return n;
}
function p(e, t) {
    s.o.withSingleEntry(e, () => {
        o.VW.withoutNormalizing(e, () => {
            r()(null != e.selection, "Editor has no selection");
            let [n, i] = o.ZF.edges(e.selection),
                s = c(e, n, i),
                l = s.before[t],
                d = s.after[t],
                _ = o.VW.node(e, n.path),
                h = o.VW.node(e, i.path);
            if (null == _ || null == h || !o.l5.isText(_[0]) || !o.l5.isText(h[0])) return;
            let f = o.PW.equals(_[1], h[1]);
            if (null != l && null != d) {
                let t = { path: n.path, offset: l.location },
                    r = { path: i.path, offset: d.location };
                a.b.delete(e, { at: r, distance: d.chars.length }), a.b.delete(e, { at: t, distance: l.chars.length });
                let s = n.offset,
                    u = i.offset;
                o.Kh.isBefore(n, t) || (s -= l.chars.length),
                    f && !o.Kh.isBefore(i, t) && (u -= l.chars.length),
                    o.Kh.isAfter(i, r) && (u -= d.chars.length),
                    a.b.select(e, {
                        anchor: { path: n.path, offset: Math.max(0, s) },
                        focus: { path: i.path, offset: Math.max(0, u) },
                    });
            } else {
                let r = u[t];
                a.b.insertText(e, r, { at: i }), a.b.insertText(e, r, { at: n });
                let s = _[0].text.length + r.length,
                    o = h[0].text.length + (f ? 2 * r.length : r.length);
                a.b.select(e, {
                    anchor: { path: n.path, offset: Math.min(s, n.offset + r.length) },
                    focus: { path: i.path, offset: Math.min(o, i.offset + (f ? r.length : 0)) },
                });
            }
        });
    }),
        o.VW.focus(e);
}
function E(e, t) {
    let n = e.selection;
    if (null == n) return;
    let i = !0;
    for (let [r, s] of o.VW.blocks(e))
        ("line" === r.type || r.type === t) && o.ZF.includes(n, s) && (i = i && r.type === t);
    o.VW.withoutNormalizing(e, () => {
        for (let [r, s] of o.VW.blocks(e))
            o.ZF.includes(n, s) &&
                (i || "line" !== r.type
                    ? i && r.type === t && a.b.setNodes(e, { type: "line" }, { at: s })
                    : a.b.setNodes(e, { type: t }, { at: s }));
    }),
        o.VW.focus(e);
}
