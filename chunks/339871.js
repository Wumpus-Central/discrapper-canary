"use strict";
n.d(t, { Px: () => f, Sx: () => u, fO: () => g });
var l = n(284009),
    i = n.n(l),
    s = n(186306),
    a = n(35277),
    r = n(820066);
let o = new Set(["*", "_", "~", "`", "|"]),
    c = { bold: "**", italics: "*", underline: "__", strikethrough: "~~", inlineCode: "`", spoiler: "||" };
function u(e, t, n) {
    if (null == e.selection) return { before: {}, after: {} };
    let l = d(e, t),
        i = d(e, n);
    for (let e in l) e in i || delete l[e];
    for (let e in i) e in l || delete i[e];
    return { before: l, after: i };
}
function d(e, t) {
    let [n] = r.VW.node(e, t.path);
    if (!r.l5.isText(n)) return {};
    let l = n.text,
        i = t.offset;
    for (let e = i - 1; e >= 0; e--)
        if (o.has(l.charAt(e))) i--;
        else break;
    let s = t.offset;
    for (let e = s; e < l.length; e++)
        if (o.has(l.charAt(e))) s++;
        else break;
    let a = l.substring(i, s),
        c = {};
    return (
        m({ result: c, text: a, startIndex: i, syntax: "***", type1: "italics", type2: "bold" }),
        m({ result: c, text: a, startIndex: i, syntax: "___", type1: "italics", type2: "underline" }),
        h(c, a, i, "**", "bold"),
        h(c, a, i, "*", "italics"),
        h(c, a, i, "_", "italics"),
        h(c, a, i, "__", "underline"),
        h(c, a, i, "`", "inlineCode"),
        h(c, a, i, "~~", "strikethrough"),
        h(c, a, i, "||", "spoiler"),
        c
    );
}
function h(e, t, n, l, i) {
    let s = p(t, l);
    s >= 0 && (e[i] = { chars: l, location: n + s });
}
function m(e) {
    let { result: t, text: n, startIndex: l, syntax: i, type1: s, type2: a } = e,
        r = p(n, i);
    r >= 0 &&
        ((t[s] = { chars: i.substring(0, 1), location: r + l }),
        (t[a] = { chars: i.substring(1), location: r + l + 1 }));
}
function p(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
        let l = t.charAt(0);
        if ((n > 0 && e.charAt(n - 1) === l) || (n < e.length - 1 && e.charAt(n + t.length) === l)) return -1;
    }
    return n;
}
function f(e, t) {
    s.o.withSingleEntry(e, () => {
        r.VW.withoutNormalizing(e, () => {
            i()(null != e.selection, "Editor has no selection");
            let [n, l] = r.ZF.edges(e.selection),
                s = u(e, n, l),
                o = s.before[t],
                d = s.after[t],
                h = r.VW.node(e, n.path),
                m = r.VW.node(e, l.path);
            if (null == h || null == m || !r.l5.isText(h[0]) || !r.l5.isText(m[0])) return;
            let p = r.PW.equals(h[1], m[1]);
            if (null != o && null != d) {
                let t = { path: n.path, offset: o.location },
                    i = { path: l.path, offset: d.location };
                a.b.delete(e, { at: i, distance: d.chars.length }), a.b.delete(e, { at: t, distance: o.chars.length });
                let s = n.offset,
                    c = l.offset;
                r.Kh.isBefore(n, t) || (s -= o.chars.length),
                    p && !r.Kh.isBefore(l, t) && (c -= o.chars.length),
                    r.Kh.isAfter(l, i) && (c -= d.chars.length),
                    a.b.select(e, {
                        anchor: { path: n.path, offset: Math.max(0, s) },
                        focus: { path: l.path, offset: Math.max(0, c) },
                    });
            } else {
                let i = c[t];
                a.b.insertText(e, i, { at: l }), a.b.insertText(e, i, { at: n });
                let s = h[0].text.length + i.length,
                    r = m[0].text.length + (p ? 2 * i.length : i.length);
                a.b.select(e, {
                    anchor: { path: n.path, offset: Math.min(s, n.offset + i.length) },
                    focus: { path: l.path, offset: Math.min(r, l.offset + (p ? i.length : 0)) },
                });
            }
        });
    }),
        r.VW.focus(e);
}
function g(e, t) {
    let n = e.selection;
    if (null == n) return;
    let l = !0;
    for (let [i, s] of r.VW.blocks(e))
        ("line" === i.type || i.type === t) && r.ZF.includes(n, s) && (l = l && i.type === t);
    r.VW.withoutNormalizing(e, () => {
        for (let [i, s] of r.VW.blocks(e))
            r.ZF.includes(n, s) &&
                (l || "line" !== i.type
                    ? l && i.type === t && a.b.setNodes(e, { type: "line" }, { at: s })
                    : a.b.setNodes(e, { type: t }, { at: s }));
    }),
        r.VW.focus(e);
}
