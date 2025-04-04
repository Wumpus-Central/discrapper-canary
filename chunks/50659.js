n.d(t, {
    U4: () => u,
    hm: () => m,
    py: () => h
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(53529),
    a = n(436660),
    s = n(887490);
let l = new Set(['*', '_', '~', '`', '|']),
    c = {
        bold: '**',
        italics: '*',
        underline: '__',
        strikethrough: '~~',
        inlineCode: '`',
        spoiler: '||'
    };
function u(e, t, n) {
    if (null == e.selection)
        return {
            before: {},
            after: {}
        };
    let r = d(e, t),
        i = d(e, n);
    for (let e in r) e in i || delete r[e];
    for (let e in i) e in r || delete i[e];
    return {
        before: r,
        after: i
    };
}
function d(e, t) {
    let [n] = s.bN.node(e, t.path);
    if (!s.LC.isText(n)) return {};
    let r = n.text,
        i = t.offset;
    for (let e = i - 1; e >= 0; e--)
        if (l.has(r.charAt(e))) i--;
        else break;
    let o = t.offset;
    for (let e = o; e < r.length; e++)
        if (l.has(r.charAt(e))) o++;
        else break;
    let a = r.substring(i, o),
        c = {};
    return (
        _({
            result: c,
            text: a,
            startIndex: i,
            syntax: '***',
            type1: 'italics',
            type2: 'bold'
        }),
        _({
            result: c,
            text: a,
            startIndex: i,
            syntax: '___',
            type1: 'italics',
            type2: 'underline'
        }),
        f(c, a, i, '**', 'bold'),
        f(c, a, i, '*', 'italics'),
        f(c, a, i, '_', 'italics'),
        f(c, a, i, '__', 'underline'),
        f(c, a, i, '`', 'inlineCode'),
        f(c, a, i, '~~', 'strikethrough'),
        f(c, a, i, '||', 'spoiler'),
        c
    );
}
function f(e, t, n, r, i) {
    let o = p(t, r);
    o >= 0 &&
        (e[i] = {
            chars: r,
            location: n + o
        });
}
function _(e) {
    let { result: t, text: n, startIndex: r, syntax: i, type1: o, type2: a } = e,
        s = p(n, i);
    s >= 0 &&
        ((t[o] = {
            chars: i.substring(0, 1),
            location: s + r
        }),
        (t[a] = {
            chars: i.substring(1),
            location: s + r + 1
        }));
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
    o.T.withSingleEntry(e, () => {
        s.bN.withoutNormalizing(e, () => {
            i()(null != e.selection, 'Editor has no selection');
            let [n, r] = s.M8.edges(e.selection),
                o = u(e, n, r),
                l = o.before[t],
                d = o.after[t],
                f = s.bN.node(e, n.path),
                _ = s.bN.node(e, r.path);
            if (null == f || null == _ || !s.LC.isText(f[0]) || !s.LC.isText(_[0])) return;
            let p = s.C0.equals(f[1], _[1]);
            if (null != l && null != d) {
                let t = {
                        path: n.path,
                        offset: l.location
                    },
                    i = {
                        path: r.path,
                        offset: d.location
                    };
                a.Q.delete(e, {
                    at: i,
                    distance: d.chars.length
                }),
                    a.Q.delete(e, {
                        at: t,
                        distance: l.chars.length
                    });
                let o = n.offset,
                    c = r.offset;
                s.Jz.isBefore(n, t) || (o -= l.chars.length),
                    p && !s.Jz.isBefore(r, t) && (c -= l.chars.length),
                    s.Jz.isAfter(r, i) && (c -= d.chars.length),
                    a.Q.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, o)
                        },
                        focus: {
                            path: r.path,
                            offset: Math.max(0, c)
                        }
                    });
            } else {
                let i = c[t];
                a.Q.insertText(e, i, { at: r }), a.Q.insertText(e, i, { at: n });
                let o = f[0].text.length + i.length,
                    s = _[0].text.length + (p ? 2 * i.length : i.length);
                a.Q.select(e, {
                    anchor: {
                        path: n.path,
                        offset: Math.min(o, n.offset + i.length)
                    },
                    focus: {
                        path: r.path,
                        offset: Math.min(s, r.offset + (p ? i.length : 0))
                    }
                });
            }
        });
    }),
        s.bN.focus(e);
}
function m(e, t) {
    let n = e.selection;
    if (null == n) return;
    let r = !0;
    for (let [i, o] of s.bN.blocks(e)) ('line' === i.type || i.type === t) && s.M8.includes(n, o) && (r = r && i.type === t);
    s.bN.withoutNormalizing(e, () => {
        for (let [i, o] of s.bN.blocks(e)) s.M8.includes(n, o) && (r || 'line' !== i.type ? r && i.type === t && a.Q.setNodes(e, { type: 'line' }, { at: o }) : a.Q.setNodes(e, { type: t }, { at: o }));
    }),
        s.bN.focus(e);
}
