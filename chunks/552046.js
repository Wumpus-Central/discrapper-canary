"use strict";
n.d(t, { A: () => l });
var r = n(719442),
    i = n(694403),
    s = n(323350),
    a = n(35277),
    o = n(711371);
function l(e) {
    return (
        (e.setFragmentData = (t) => {
            if (null != e.selection && !o.Kh.equals(e.selection.anchor, e.selection.focus)) {
                let n = (0, s.WO)(o.VW.richValue(e), { mode: "plain", range: e.selection, preventEmojiSurrogates: !0 });
                t.setData("text/plain", n);
            }
        }),
        (e.insertData = (t) => {
            e.insertTextData(t);
        }),
        (e.insertFragmentData = (e) => !1),
        (e.insertTextData = (t) => {
            let n = t.getData("text/plain");
            if (0 === n.length) return !1;
            if (null != e.selection && o.ZF.isExpanded(e.selection)) {
                let t = r.KE.string(e, e.selection),
                    s = (0, i.W1)(n),
                    l = (0, i.W1)(t);
                if (null != s && null == l) {
                    let [t, n] = o.ZF.edges(e.selection);
                    return (
                        o.VW.withoutNormalizing(e, () => {
                            a.b.select(e, t),
                                e.insertText("["),
                                a.b.select(e, n),
                                0 === o.PW.compare(t.path, n.path) && a.b.move(e, { distance: 1 }),
                                e.insertText(`](${s.target})`);
                        }),
                        !0
                    );
                }
                if (null != s && null != l) return a.b.delete(e, { at: e.selection }), e.insertText(s.target), !0;
                a.b.delete(e, { at: e.selection });
            }
            return e.insertText(n), !0;
        }),
        e
    );
}
