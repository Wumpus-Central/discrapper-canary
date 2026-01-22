n.d(t, { A: () => l }), n(896048);
var r = n(719442),
    i = n(694403),
    a = n(323350),
    s = n(35277),
    o = n(711371);
function l(e) {
    return (
        (e.setFragmentData = (t) => {
            if (null != e.selection && !o.Kh.equals(e.selection.anchor, e.selection.focus)) {
                let n = (0, a.WO)(o.VW.richValue(e), {
                    mode: "plain",
                    range: e.selection,
                    preventEmojiSurrogates: !0,
                });
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
                    a = (0, i.W1)(n),
                    l = (0, i.W1)(t);
                if (null != a && null == l) {
                    let [t, n] = o.ZF.edges(e.selection);
                    return (
                        o.VW.withoutNormalizing(e, () => {
                            s.b.select(e, t),
                                e.insertText("["),
                                s.b.select(e, n),
                                0 === o.PW.compare(t.path, n.path) && s.b.move(e, { distance: 1 }),
                                e.insertText("](".concat(a.target, ")"));
                        }),
                        !0
                    );
                }
                if (null != a && null != l) return s.b.delete(e, { at: e.selection }), e.insertText(a.target), !0;
                s.b.delete(e, { at: e.selection });
            }
            return e.insertText(n), !0;
        }),
        e
    );
}
