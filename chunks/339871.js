n.d(t, { Px: () => p, Sx: () => c, fO: () => g });
var l = n(284009),
    i = n.n(l),
    s = n(186306),
    r = n(35277),
    a = n(820066);
let o = new Set(["*", "_", "~", "`", "|"]),
    u = { bold: "**", italics: "*", underline: "__", strikethrough: "~~", inlineCode: "`", spoiler: "||" };
function c(e, t, n) {
    if (null == e.selection) return { before: {}, after: {} };
    let l = d(e, t),
        i = d(e, n);
    for (let e in l) e in i || delete l[e];
    for (let e in i) e in l || delete i[e];
    return { before: l, after: i };
}
function d(e, t) {
    let [n] = a.VW.node(e, t.path);
    if (!a.l5.isText(n)) return {};
    let l = n.text,
        i = t.offset;
    for (let e = i - 1; e >= 0; e--)
        if (o.has(l.charAt(e))) i--;
        else break;
    let s = t.offset;
    for (let e = s; e < l.length; e++)
        if (o.has(l.charAt(e))) s++;
        else break;
    let r = l.substring(i, s),
        u = {};
    return (
        m({ result: u, text: r, startIndex: i, syntax: "***", type1: "italics", type2: "bold" }),
        m({ result: u, text: r, startIndex: i, syntax: "___", type1: "italics", type2: "underline" }),
        h(u, r, i, "**", "bold"),
        h(u, r, i, "*", "italics"),
        h(u, r, i, "_", "italics"),
        h(u, r, i, "__", "underline"),
        h(u, r, i, "`", "inlineCode"),
        h(u, r, i, "~~", "strikethrough"),
        h(u, r, i, "||", "spoiler"),
        u
    );
}
function h(e, t, n, l, i) {
    let s = f(t, l);
    s >= 0 && (e[i] = { chars: l, location: n + s });
}
function m(e) {
    let { result: t, text: n, startIndex: l, syntax: i, type1: s, type2: r } = e,
        a = f(n, i);
    a >= 0 &&
        ((t[s] = { chars: i.substring(0, 1), location: a + l }),
        (t[r] = { chars: i.substring(1), location: a + l + 1 }));
}
function f(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
        let l = t.charAt(0);
        if ((n > 0 && e.charAt(n - 1) === l) || (n < e.length - 1 && e.charAt(n + t.length) === l)) return -1;
    }
    return n;
}
function p(e, t) {
    s.o.withSingleEntry(e, () => {
        a.VW.withoutNormalizing(e, () => {
            i()(null != e.selection, "Editor has no selection");
            let [n, l] = a.ZF.edges(e.selection),
                s = c(e, n, l),
                o = s.before[t],
                d = s.after[t],
                h = a.VW.node(e, n.path),
                m = a.VW.node(e, l.path);
            if (null == h || null == m || !a.l5.isText(h[0]) || !a.l5.isText(m[0])) return;
            let f = a.PW.equals(h[1], m[1]);
            if (null != o && null != d) {
                let t = { path: n.path, offset: o.location },
                    i = { path: l.path, offset: d.location };
                r.b.delete(e, { at: i, distance: d.chars.length }), r.b.delete(e, { at: t, distance: o.chars.length });
                let s = n.offset,
                    u = l.offset;
                a.Kh.isBefore(n, t) || (s -= o.chars.length),
                    f && !a.Kh.isBefore(l, t) && (u -= o.chars.length),
                    a.Kh.isAfter(l, i) && (u -= d.chars.length),
                    r.b.select(e, {
                        anchor: { path: n.path, offset: Math.max(0, s) },
                        focus: { path: l.path, offset: Math.max(0, u) },
                    });
            } else {
                let i = u[t];
                r.b.insertText(e, i, { at: l }), r.b.insertText(e, i, { at: n });
                let s = h[0].text.length + i.length,
                    a = m[0].text.length + (f ? 2 * i.length : i.length);
                r.b.select(e, {
                    anchor: { path: n.path, offset: Math.min(s, n.offset + i.length) },
                    focus: { path: l.path, offset: Math.min(a, l.offset + (f ? i.length : 0)) },
                });
            }
        });
    }),
        a.VW.focus(e);
}
function g(e, t) {
    let n = e.selection;
    if (null == n) return;
    let l = !0;
    for (let [i, s] of a.VW.blocks(e))
        ("line" === i.type || i.type === t) && a.ZF.includes(n, s) && (l = l && i.type === t);
    a.VW.withoutNormalizing(e, () => {
        for (let [i, s] of a.VW.blocks(e))
            a.ZF.includes(n, s) &&
                (l || "line" !== i.type
                    ? l && i.type === t && r.b.setNodes(e, { type: "line" }, { at: s })
                    : r.b.setNodes(e, { type: t }, { at: s }));
    }),
        a.VW.focus(e);
}
