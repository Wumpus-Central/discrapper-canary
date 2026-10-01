n.d(t, { Px: () => f, Sx: () => c, fO: () => g });
var l = n(284009),
    i = n.n(l),
    r = n(186306),
    s = n(35277),
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
    let r = t.offset;
    for (let e = r; e < l.length; e++)
        if (o.has(l.charAt(e))) r++;
        else break;
    let s = l.substring(i, r),
        u = {};
    return (
        m({ result: u, text: s, startIndex: i, syntax: "***", type1: "italics", type2: "bold" }),
        m({ result: u, text: s, startIndex: i, syntax: "___", type1: "italics", type2: "underline" }),
        h(u, s, i, "**", "bold"),
        h(u, s, i, "*", "italics"),
        h(u, s, i, "_", "italics"),
        h(u, s, i, "__", "underline"),
        h(u, s, i, "`", "inlineCode"),
        h(u, s, i, "~~", "strikethrough"),
        h(u, s, i, "||", "spoiler"),
        u
    );
}
function h(e, t, n, l, i) {
    let r = p(t, l);
    r >= 0 && (e[i] = { chars: l, location: n + r });
}
function m(e) {
    let { result: t, text: n, startIndex: l, syntax: i, type1: r, type2: s } = e,
        a = p(n, i);
    a >= 0 &&
        ((t[r] = { chars: i.substring(0, 1), location: a + l }),
        (t[s] = { chars: i.substring(1), location: a + l + 1 }));
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
    (r.o.withSingleEntry(e, () => {
        a.VW.withoutNormalizing(e, () => {
            i()(null != e.selection, "Editor has no selection");
            let [n, l] = a.ZF.edges(e.selection),
                r = c(e, n, l),
                o = r.before[t],
                d = r.after[t],
                h = a.VW.node(e, n.path),
                m = a.VW.node(e, l.path);
            if (null == h || null == m || !a.l5.isText(h[0]) || !a.l5.isText(m[0])) return;
            let p = a.PW.equals(h[1], m[1]);
            if (null != o && null != d) {
                let t = { path: n.path, offset: o.location },
                    i = { path: l.path, offset: d.location };
                (s.b.delete(e, { at: i, distance: d.chars.length }),
                    s.b.delete(e, { at: t, distance: o.chars.length }));
                let r = n.offset,
                    u = l.offset;
                (a.Kh.isBefore(n, t) || (r -= o.chars.length),
                    p && !a.Kh.isBefore(l, t) && (u -= o.chars.length),
                    a.Kh.isAfter(l, i) && (u -= d.chars.length),
                    s.b.select(e, {
                        anchor: { path: n.path, offset: Math.max(0, r) },
                        focus: { path: l.path, offset: Math.max(0, u) },
                    }));
            } else {
                let i = u[t];
                (s.b.insertText(e, i, { at: l }), s.b.insertText(e, i, { at: n }));
                let r = h[0].text.length + i.length,
                    a = m[0].text.length + (p ? 2 * i.length : i.length);
                s.b.select(e, {
                    anchor: { path: n.path, offset: Math.min(r, n.offset + i.length) },
                    focus: { path: l.path, offset: Math.min(a, l.offset + (p ? i.length : 0)) },
                });
            }
        });
    }),
        a.VW.focus(e));
}
function g(e, t) {
    let n = e.selection;
    if (null == n) return;
    let l = !0;
    for (let [i, r] of a.VW.blocks(e))
        ("line" === i.type || i.type === t) && a.ZF.includes(n, r) && (l = l && i.type === t);
    (a.VW.withoutNormalizing(e, () => {
        for (let [i, r] of a.VW.blocks(e))
            a.ZF.includes(n, r) &&
                (l || "line" !== i.type
                    ? l && i.type === t && s.b.setNodes(e, { type: "line" }, { at: r })
                    : s.b.setNodes(e, { type: t }, { at: r }));
    }),
        a.VW.focus(e));
}
