n.d(t, {
    Px: () => h,
    Sx: () => u,
    fO: () => m,
}),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(186306),
    s = n(35277),
    o = n(711371);
let l = new Set(["*", "_", "~", "`", "|"]),
    c = {
        bold: "**",
        italics: "*",
        underline: "__",
        strikethrough: "~~",
        inlineCode: "`",
        spoiler: "||",
    };

function u(e, t, n) {
    if (null == e.selection)
        return {
            before: {},
            after: {},
        };
    let r = d(e, t),
        i = d(e, n);
    for (let e in r) e in i || delete r[e];
    for (let e in i) e in r || delete i[e];
    return {
        before: r,
        after: i,
    };
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
        c = {};
    return (
        p({
            result: c,
            text: s,
            startIndex: i,
            syntax: "***",
            type1: "italics",
            type2: "bold",
        }),
        p({
            result: c,
            text: s,
            startIndex: i,
            syntax: "___",
            type1: "italics",
            type2: "underline",
        }),
        f(c, s, i, "**", "bold"),
        f(c, s, i, "*", "italics"),
        f(c, s, i, "_", "italics"),
        f(c, s, i, "__", "underline"),
        f(c, s, i, "`", "inlineCode"),
        f(c, s, i, "~~", "strikethrough"),
        f(c, s, i, "||", "spoiler"),
        c
    );
}

function f(e, t, n, r, i) {
    let a = _(t, r);
    a >= 0 &&
        (e[i] = {
            chars: r,
            location: n + a,
        });
}

function p(e) {
    let { result: t, text: n, startIndex: r, syntax: i, type1: a, type2: s } = e,
        o = _(n, i);
    o >= 0 &&
        ((t[a] = {
            chars: i.substring(0, 1),
            location: o + r,
        }),
        (t[s] = {
            chars: i.substring(1),
            location: o + r + 1,
        }));
}

function _(e, t) {
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
                a = u(e, n, r),
                l = a.before[t],
                d = a.after[t],
                f = o.VW.node(e, n.path),
                p = o.VW.node(e, r.path);
            if (null == f || null == p || !o.l5.isText(f[0]) || !o.l5.isText(p[0])) return;
            let _ = o.PW.equals(f[1], p[1]);
            if (null != l && null != d) {
                let t = {
                        path: n.path,
                        offset: l.location,
                    },
                    i = {
                        path: r.path,
                        offset: d.location,
                    };
                s.b.delete(e, {
                    at: i,
                    distance: d.chars.length,
                }),
                    s.b.delete(e, {
                        at: t,
                        distance: l.chars.length,
                    });
                let a = n.offset,
                    c = r.offset;
                o.Kh.isBefore(n, t) || (a -= l.chars.length),
                    _ && !o.Kh.isBefore(r, t) && (c -= l.chars.length),
                    o.Kh.isAfter(r, i) && (c -= d.chars.length),
                    s.b.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, a),
                        },
                        focus: {
                            path: r.path,
                            offset: Math.max(0, c),
                        },
                    });
            } else {
                let i = c[t];
                s.b.insertText(e, i, {
                    at: r,
                }),
                    s.b.insertText(e, i, {
                        at: n,
                    });
                let a = f[0].text.length + i.length,
                    o = p[0].text.length + (_ ? 2 * i.length : i.length);
                s.b.select(e, {
                    anchor: {
                        path: n.path,
                        offset: Math.min(a, n.offset + i.length),
                    },
                    focus: {
                        path: r.path,
                        offset: Math.min(o, r.offset + (_ ? i.length : 0)),
                    },
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
                    ? r &&
                      i.type === t &&
                      s.b.setNodes(
                          e,
                          {
                              type: "line",
                          },
                          {
                              at: a,
                          },
                      )
                    : s.b.setNodes(
                          e,
                          {
                              type: t,
                          },
                          {
                              at: a,
                          },
                      ));
    }),
        o.VW.focus(e);
}
