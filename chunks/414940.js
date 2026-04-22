"use strict";
n.d(t, { A: () => o });
var i = n(186306),
    l = n(35277),
    s = n(711371),
    r = n(407315);
let a = new Set(["line", "blockQuote"]);
function o(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: o, onChange: c } = e;
    (e.deleteBackward = (n) => {
        let i = s.VW.getCurrentBlock(e);
        if (i?.[0].type === "blockQuote") {
            let t = s.ZF.toPoint(e.selection);
            if (null != t && s.PW.isFirstChild(i[1], t.path) && 0 === t.offset)
                return void l.b.setNodes(e, { type: "line" }, { at: i[1] });
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [r, a] = s.ZF.edges(e.selection),
                    o = [r.path[0]],
                    c = s.VW.node(e, o),
                    u = [a.path[0]],
                    d = s.PW.equals(o, u) ? null : s.VW.node(e, u);
                i.o.withSingleEntry(e, () => {
                    c?.[0].type === "blockQuote" &&
                        s.Kh.isAtStart(r, c) &&
                        l.b.setNodes(e, { type: "line" }, { at: o }),
                        d?.[0].type === "blockQuote" &&
                            s.Kh.isAtEnd(a, d) &&
                            l.b.setNodes(e, { type: "line" }, { at: u }),
                        n(t);
                });
                return;
            }
            n(t);
        }),
        (e.insertBreak = () => {
            let t = s.VW.getCurrentBlock(e);
            if (t?.[0].type === "blockQuote") {
                let n = s.ZF.toPoint(e.selection);
                if (null == n) return;
                !(function (e, t, n) {
                    if (!s.VW.isEmpty(e, t[0])) return !1;
                    let i = s.VW.previous(e, { at: t[1] });
                    return (
                        null != i &&
                        !!s.AS.isType(i[0], "blockQuote") &&
                        !!s.VW.isEmpty(e, i[0]) &&
                        !!s.Kh.isAtStart(n, t) &&
                        (l.b.setNodes(e, { type: "line" }, { at: t[1] }), l.b.removeNodes(e, { at: i[1] }), !0)
                    );
                })(e, t, n) && l.b.splitNodes(e, { at: n, always: !0 });
                return;
            }
            o();
        });
    let u = null,
        d = !0;
    return (
        (e.onChange = () => {
            let t = s.VW.richValue(e);
            (t !== u || e.previewMarkdown !== d) &&
                (i.o.withMergedEntry(e, () => {
                    s.VW.withoutNormalizing(e, () =>
                        (function (e) {
                            let t = !1;
                            for (let n of s.VW.blocks(e)) {
                                let [i, o] = n;
                                if (!a.has(i.type)) continue;
                                let c = { path: s.PW.child(o, 0), offset: 0 };
                                if ((0, r.W)(e, c)) {
                                    "blockQuote" === i.type &&
                                        (l.b.setNodes(e, { type: "line" }, { at: o }),
                                        l.b.insertText(e, "> ", { at: c }));
                                    continue;
                                }
                                if ("blockQuote" === i.type || s.VW.areStylesDisabled(e)) continue;
                                let u = i.children[0];
                                if (!s.l5.isText(u)) continue;
                                let d = u.text.match(/^\s*>>> /),
                                    h = u.text.match(/^\s*> /);
                                if (
                                    (null != h || null != d || t) &&
                                    (l.b.setNodes(e, { type: "blockQuote" }, { at: o }), !t)
                                ) {
                                    let n = h?.[0].length ?? d?.[0].length ?? 0,
                                        i = s.PW.child(o, 0);
                                    l.b.delete(e, {
                                        at: { anchor: { path: i, offset: 0 }, focus: { path: i, offset: n } },
                                    }),
                                        (t = null != d);
                                }
                            }
                        })(e),
                    );
                }),
                (u = t),
                (d = e.previewMarkdown)),
                c();
        }),
        e
    );
}
