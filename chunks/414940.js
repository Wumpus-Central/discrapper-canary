"use strict";
n.d(t, { A: () => l });
var r = n(186306),
    i = n(35277),
    a = n(711371),
    s = n(407315);
let o = new Set(["line", "blockQuote"]);
function l(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: s, onChange: o } = e;
    (e.deleteBackward = (n) => {
        let r = a.VW.getCurrentBlock(e);
        if (r?.[0].type === "blockQuote") {
            let t = a.ZF.toPoint(e.selection);
            if (null != t && a.PW.isFirstChild(r[1], t.path) && 0 === t.offset)
                return void i.b.setNodes(e, { type: "line" }, { at: r[1] });
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [s, o] = a.ZF.edges(e.selection),
                    l = [s.path[0]],
                    u = a.VW.node(e, l),
                    c = [o.path[0]],
                    d = a.PW.equals(l, c) ? null : a.VW.node(e, c);
                r.o.withSingleEntry(e, () => {
                    u?.[0].type === "blockQuote" &&
                        a.Kh.isAtStart(s, u) &&
                        i.b.setNodes(e, { type: "line" }, { at: l }),
                        d?.[0].type === "blockQuote" &&
                            a.Kh.isAtEnd(o, d) &&
                            i.b.setNodes(e, { type: "line" }, { at: c }),
                        n(t);
                });
                return;
            }
            n(t);
        }),
        (e.insertBreak = () => {
            let t = a.VW.getCurrentBlock(e);
            if (t?.[0].type === "blockQuote") {
                let n = a.ZF.toPoint(e.selection);
                if (null == n) return;
                c(e, t, n) || i.b.splitNodes(e, { at: n, always: !0 });
                return;
            }
            s();
        });
    let l = null,
        d = !0;
    return (
        (e.onChange = () => {
            let t = a.VW.richValue(e);
            (t !== l || e.previewMarkdown !== d) &&
                (r.o.withMergedEntry(e, () => {
                    a.VW.withoutNormalizing(e, () => u(e));
                }),
                (l = t),
                (d = e.previewMarkdown)),
                o();
        }),
        e
    );
}
function u(e) {
    let t = !1;
    for (let n of a.VW.blocks(e)) {
        let [r, l] = n;
        if (!o.has(r.type)) continue;
        let u = { path: a.PW.child(l, 0), offset: 0 };
        if ((0, s.W)(e, u)) {
            "blockQuote" === r.type &&
                (i.b.setNodes(e, { type: "line" }, { at: l }), i.b.insertText(e, "> ", { at: u }));
            continue;
        }
        if ("blockQuote" === r.type || a.VW.areStylesDisabled(e)) continue;
        let c = r.children[0];
        if (!a.l5.isText(c)) continue;
        let d = c.text.match(/^\s*>>> /),
            _ = c.text.match(/^\s*> /);
        if ((null != _ || null != d || t) && (i.b.setNodes(e, { type: "blockQuote" }, { at: l }), !t)) {
            let n = _?.[0].length ?? d?.[0].length ?? 0,
                r = a.PW.child(l, 0);
            i.b.delete(e, { at: { anchor: { path: r, offset: 0 }, focus: { path: r, offset: n } } }), (t = null != d);
        }
    }
}
function c(e, t, n) {
    if (!a.VW.isEmpty(e, t[0])) return !1;
    let r = a.VW.previous(e, { at: t[1] });
    return (
        null != r &&
        !!a.AS.isType(r[0], "blockQuote") &&
        !!a.VW.isEmpty(e, r[0]) &&
        !!a.Kh.isAtStart(n, t) &&
        (i.b.setNodes(e, { type: "line" }, { at: t[1] }), i.b.removeNodes(e, { at: r[1] }), !0)
    );
}
