"use strict";
n.d(t, { o: () => a });
var r = n(253018),
    i = n(35277),
    s = n(711371);
let a = (e, t) => {
    let {
        addMark: n,
        removeMark: a,
        deleteBackward: o,
        deleteForward: l,
        setFragmentData: u,
        insertData: c,
        insertFragmentData: d,
        insertTextData: _,
    } = e;
    return (
        ((e = (0, r.o$)(e)).addMark = n),
        (e.removeMark = a),
        (e.setFragmentData = u),
        (e.insertData = c),
        (e.insertFragmentData = d),
        (e.insertTextData = _),
        (e.deleteBackward = (n) => {
            if ("line" === n && !t) {
                let t = s.ZF.toPoint(e.selection);
                if (null != t) {
                    let r = s.VW.before(e, t, { unit: n });
                    if (null != r) {
                        let n = s.e0.getLineStart(e, t, !1);
                        null != n && s.Kh.isAfter(n, r)
                            ? i.b.delete(e, { at: { anchor: n, focus: t } })
                            : i.b.delete(e, { at: { anchor: r, focus: t } });
                        return;
                    }
                }
            }
            o(n);
        }),
        (e.deleteForward = (n) => {
            if ("line" === n && !t) {
                let t = s.ZF.toPoint(e.selection);
                if (null != t) {
                    let r = s.VW.after(e, t, { unit: n });
                    if (null != r) {
                        let n = s.e0.getLineEnd(e, t, !1);
                        null != n && s.Kh.isBefore(n, r)
                            ? i.b.delete(e, { at: { anchor: n, focus: t } })
                            : i.b.delete(e, { at: { anchor: r, focus: t } });
                        return;
                    }
                }
            }
            l(n);
        }),
        e
    );
};
