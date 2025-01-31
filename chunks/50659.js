n.d(t, {
    U4: () => c,
    hm: () => m,
    py: () => h
}),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(53529),
    s = n(436660),
    o = n(887490);
let l = new Set(['*', '_', '~', '`', '|']),
    u = {
        bold: '**',
        italics: '*',
        underline: '__',
        strikethrough: '~~',
        inlineCode: '`',
        spoiler: '||'
    };
function c(e, t, n) {
    if (null == e.selection)
        return {
            before: {},
            after: {}
        };
    let i = d(e, t),
        r = d(e, n);
    for (let e in i) e in r || delete i[e];
    for (let e in r) e in i || delete r[e];
    return {
        before: i,
        after: r
    };
}
function d(e, t) {
    let [n] = o.bN.node(e, t.path);
    if (!o.LC.isText(n)) return {};
    let i = n.text,
        r = t.offset;
    for (let e = r - 1; e >= 0; e--)
        if (l.has(i.charAt(e))) r--;
        else break;
    let a = t.offset;
    for (let e = a; e < i.length; e++)
        if (l.has(i.charAt(e))) a++;
        else break;
    let s = i.substring(r, a),
        u = {};
    return (
        _({
            result: u,
            text: s,
            startIndex: r,
            syntax: '***',
            type1: 'italics',
            type2: 'bold'
        }),
        _({
            result: u,
            text: s,
            startIndex: r,
            syntax: '___',
            type1: 'italics',
            type2: 'underline'
        }),
        f(u, s, r, '**', 'bold'),
        f(u, s, r, '*', 'italics'),
        f(u, s, r, '_', 'italics'),
        f(u, s, r, '__', 'underline'),
        f(u, s, r, '`', 'inlineCode'),
        f(u, s, r, '~~', 'strikethrough'),
        f(u, s, r, '||', 'spoiler'),
        u
    );
}
function f(e, t, n, i, r) {
    let a = p(t, i);
    a >= 0 &&
        (e[r] = {
            chars: i,
            location: n + a
        });
}
function _(e) {
    let { result: t, text: n, startIndex: i, syntax: r, type1: a, type2: s } = e,
        o = p(n, r);
    o >= 0 &&
        ((t[a] = {
            chars: r.substring(0, 1),
            location: o + i
        }),
        (t[s] = {
            chars: r.substring(1),
            location: o + i + 1
        }));
}
function p(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
        let i = t.charAt(0);
        if ((n > 0 && e.charAt(n - 1) === i) || (n < e.length - 1 && e.charAt(n + t.length) === i)) return -1;
    }
    return n;
}
function h(e, t) {
    a.T.withSingleEntry(e, () => {
        o.bN.withoutNormalizing(e, () => {
            r()(null != e.selection, 'Editor has no selection');
            let [n, i] = o.M8.edges(e.selection),
                a = c(e, n, i),
                l = a.before[t],
                d = a.after[t],
                f = o.bN.node(e, n.path),
                _ = o.bN.node(e, i.path);
            if (null == f || null == _ || !o.LC.isText(f[0]) || !o.LC.isText(_[0])) return;
            let p = o.C0.equals(f[1], _[1]);
            if (null != l && null != d) {
                let t = {
                        path: n.path,
                        offset: l.location
                    },
                    r = {
                        path: i.path,
                        offset: d.location
                    };
                s.Q.delete(e, {
                    at: r,
                    distance: d.chars.length
                }),
                    s.Q.delete(e, {
                        at: t,
                        distance: l.chars.length
                    });
                let a = n.offset,
                    u = i.offset;
                o.Jz.isBefore(n, t) || (a -= l.chars.length),
                    p && !o.Jz.isBefore(i, t) && (u -= l.chars.length),
                    o.Jz.isAfter(i, r) && (u -= d.chars.length),
                    s.Q.select(e, {
                        anchor: {
                            path: n.path,
                            offset: Math.max(0, a)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.max(0, u)
                        }
                    });
            } else {
                let r = u[t];
                s.Q.insertText(e, r, { at: i }), s.Q.insertText(e, r, { at: n });
                let a = f[0].text.length + r.length,
                    o = _[0].text.length + (p ? 2 * r.length : r.length);
                s.Q.select(e, {
                    anchor: {
                        path: n.path,
                        offset: Math.min(a, n.offset + r.length)
                    },
                    focus: {
                        path: i.path,
                        offset: Math.min(o, i.offset + (p ? r.length : 0))
                    }
                });
            }
        });
    }),
        o.bN.focus(e);
}
function m(e, t) {
    let n = e.selection;
    if (null == n) return;
    let i = !0;
    for (let [r, a] of o.bN.blocks(e)) ('line' === r.type || r.type === t) && o.M8.includes(n, a) && (i = i && r.type === t);
    o.bN.withoutNormalizing(e, () => {
        for (let [r, a] of o.bN.blocks(e)) o.M8.includes(n, a) && (i || 'line' !== r.type ? i && r.type === t && s.Q.setNodes(e, { type: 'line' }, { at: a }) : s.Q.setNodes(e, { type: t }, { at: a }));
    }),
        o.bN.focus(e);
}
