r.d(n, {
    U4: function () {
        return f;
    },
    hm: function () {
        return E;
    },
    py: function () {
        return g;
    }
});
var i = r(47120);
var a = r(512722),
    o = r.n(a),
    s = r(53529),
    l = r(436660),
    u = r(887490);
let c = new Set(['*', '_', '~', '`', '|']),
    d = {
        bold: '**',
        italics: '*',
        underline: '__',
        strikethrough: '~~',
        inlineCode: '`',
        spoiler: '||'
    };
function f(e, n, r) {
    if (null == e.selection)
        return {
            before: {},
            after: {}
        };
    let i = p(e, n),
        a = p(e, r);
    for (let e in i) !(e in a) && delete i[e];
    for (let e in a) !(e in i) && delete a[e];
    return {
        before: i,
        after: a
    };
}
function p(e, n) {
    let [r] = u.bN.node(e, n.path);
    if (!u.LC.isText(r)) return {};
    let i = r.text,
        a = n.offset;
    for (let e = a - 1; e >= 0; e--)
        if (c.has(i.charAt(e))) a--;
        else break;
    let o = n.offset;
    for (let e = o; e < i.length; e++)
        if (c.has(i.charAt(e))) o++;
        else break;
    let s = i.substring(a, o),
        l = {};
    return (
        _({
            result: l,
            text: s,
            startIndex: a,
            syntax: '***',
            type1: 'italics',
            type2: 'bold'
        }),
        _({
            result: l,
            text: s,
            startIndex: a,
            syntax: '___',
            type1: 'italics',
            type2: 'underline'
        }),
        h(l, s, a, '**', 'bold'),
        h(l, s, a, '*', 'italics'),
        h(l, s, a, '_', 'italics'),
        h(l, s, a, '__', 'underline'),
        h(l, s, a, '`', 'inlineCode'),
        h(l, s, a, '~~', 'strikethrough'),
        h(l, s, a, '||', 'spoiler'),
        l
    );
}
function h(e, n, r, i, a) {
    let o = m(n, i);
    o >= 0 &&
        (e[a] = {
            chars: i,
            location: r + o
        });
}
function _(e) {
    let { result: n, text: r, startIndex: i, syntax: a, type1: o, type2: s } = e,
        l = m(r, a);
    l >= 0 &&
        ((n[o] = {
            chars: a.substring(0, 1),
            location: l + i
        }),
        (n[s] = {
            chars: a.substring(1),
            location: l + i + 1
        }));
}
function m(e, n) {
    let r = e.indexOf(n);
    if (r >= 0) {
        let i = n.charAt(0);
        if ((r > 0 && e.charAt(r - 1) === i) || (r < e.length - 1 && e.charAt(r + n.length) === i)) return -1;
    }
    return r;
}
function g(e, n) {
    s.T.withSingleEntry(e, () => {
        u.bN.withoutNormalizing(e, () => {
            o()(null != e.selection, 'Editor has no selection');
            let [r, i] = u.M8.edges(e.selection),
                a = f(e, r, i),
                s = a.before[n],
                c = a.after[n],
                p = u.bN.node(e, r.path),
                h = u.bN.node(e, i.path);
            if (null == p || null == h || !u.LC.isText(p[0]) || !u.LC.isText(h[0])) return;
            let _ = u.C0.equals(p[1], h[1]);
            if (null != s && null != c) {
                let n = {
                        path: r.path,
                        offset: s.location
                    },
                    a = {
                        path: i.path,
                        offset: c.location
                    };
                l.Q.delete(e, {
                    at: a,
                    distance: c.chars.length
                }),
                    l.Q.delete(e, {
                        at: n,
                        distance: s.chars.length
                    });
                let o = r.offset,
                    d = i.offset;
                !u.Jz.isBefore(r, n) && (o -= s.chars.length),
                    _ && !u.Jz.isBefore(i, n) && (d -= s.chars.length),
                    u.Jz.isAfter(i, a) && (d -= c.chars.length),
                    l.Q.select(e, {
                        anchor: {
                            path: r.path,
                            offset: Math.max(0, o)
                        },
                        focus: {
                            path: i.path,
                            offset: Math.max(0, d)
                        }
                    });
            } else {
                let a = d[n];
                l.Q.insertText(e, a, { at: i }), l.Q.insertText(e, a, { at: r });
                let o = p[0].text.length + a.length,
                    s = h[0].text.length + (_ ? 2 * a.length : a.length);
                l.Q.select(e, {
                    anchor: {
                        path: r.path,
                        offset: Math.min(o, r.offset + a.length)
                    },
                    focus: {
                        path: i.path,
                        offset: Math.min(s, i.offset + (_ ? a.length : 0))
                    }
                });
            }
        });
    }),
        u.bN.focus(e);
}
function E(e, n) {
    let r = e.selection;
    if (null == r) return;
    let i = !0;
    for (let [a, o] of u.bN.blocks(e)) ('line' === a.type || a.type === n) && u.M8.includes(r, o) && (i = i && a.type === n);
    u.bN.withoutNormalizing(e, () => {
        for (let [a, o] of u.bN.blocks(e)) u.M8.includes(r, o) && (i || 'line' !== a.type ? i && a.type === n && l.Q.setNodes(e, { type: 'line' }, { at: o }) : l.Q.setNodes(e, { type: n }, { at: o }));
    }),
        u.bN.focus(e);
}
