"use strict";
n.d(t, { A: () => l });
var r = n(186306),
    i = n(35277),
    s = n(711371),
    a = n(407315);
let o = new Set(["line", "blockQuote"]);
function l(e) {
    let { deleteBackward: t, deleteFragment: n, insertBreak: l, onChange: u } = e;
    (e.deleteBackward = (n) => {
        let r = s.VW.getCurrentBlock(e);
        if (r?.[0].type === "blockQuote") {
            let t = s.ZF.toPoint(e.selection);
            if (null != t && s.PW.isFirstChild(r[1], t.path) && 0 === t.offset)
                return void i.b.setNodes(e, { type: "line" }, { at: r[1] });
        }
        t(n);
    }),
        (e.deleteFragment = (t) => {
            if (null != e.selection) {
                let [a, o] = s.ZF.edges(e.selection),
                    l = [a.path[0]],
                    u = s.VW.node(e, l),
                    c = [o.path[0]],
                    d = s.PW.equals(l, c) ? null : s.VW.node(e, c);
                r.o.withSingleEntry(e, () => {
                    u?.[0].type === "blockQuote" &&
                        s.Kh.isAtStart(a, u) &&
                        i.b.setNodes(e, { type: "line" }, { at: l }),
                        d?.[0].type === "blockQuote" &&
                            s.Kh.isAtEnd(o, d) &&
                            i.b.setNodes(e, { type: "line" }, { at: c }),
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
                    let r = s.VW.previous(e, { at: t[1] });
                    return (
                        null != r &&
                        !!s.AS.isType(r[0], "blockQuote") &&
                        !!s.VW.isEmpty(e, r[0]) &&
                        !!s.Kh.isAtStart(n, t) &&
                        (i.b.setNodes(e, { type: "line" }, { at: t[1] }), i.b.removeNodes(e, { at: r[1] }), !0)
                    );
                })(e, t, n) && i.b.splitNodes(e, { at: n, always: !0 });
                return;
            }
            l();
        });
    let c = null,
        d = !0;
    return (
        (e.onChange = () => {
            let t = s.VW.richValue(e);
            (t !== c || e.previewMarkdown !== d) &&
                (r.o.withMergedEntry(e, () => {
                    s.VW.withoutNormalizing(e, () =>
                        (function (e) {
                            let t = !1;
                            for (let n of s.VW.blocks(e)) {
                                let [r, l] = n;
                                if (!o.has(r.type)) continue;
                                let u = { path: s.PW.child(l, 0), offset: 0 };
                                if ((0, a.W)(e, u)) {
                                    "blockQuote" === r.type &&
                                        (i.b.setNodes(e, { type: "line" }, { at: l }),
                                        i.b.insertText(e, "> ", { at: u }));
                                    continue;
                                }
                                if ("blockQuote" === r.type || s.VW.areStylesDisabled(e)) continue;
                                let c = r.children[0];
                                if (!s.l5.isText(c)) continue;
                                let d = c.text.match(/^\s*>>> /),
                                    _ = c.text.match(/^\s*> /);
                                if (
                                    (null != _ || null != d || t) &&
                                    (i.b.setNodes(e, { type: "blockQuote" }, { at: l }), !t)
                                ) {
                                    let n = _?.[0].length ?? d?.[0].length ?? 0,
                                        r = s.PW.child(l, 0);
                                    i.b.delete(e, {
                                        at: { anchor: { path: r, offset: 0 }, focus: { path: r, offset: n } },
                                    }),
                                        (t = null != d);
                                }
                            }
                        })(e),
                    );
                }),
                (c = t),
                (d = e.previewMarkdown)),
                u();
        }),
        e
    );
}
