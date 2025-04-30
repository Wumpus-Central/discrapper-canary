n.d(t, { B: () => a });
var r = n(270445),
    i = n(436660),
    o = n(887490);
let a = (e, t) => {
    let { addMark: n, removeMark: a, deleteBackward: s, deleteForward: l, setFragmentData: c, insertData: u, insertFragmentData: d, insertTextData: f } = e;
    return (
        ((e = (0, r.BU)(e)).addMark = n),
        (e.removeMark = a),
        (e.setFragmentData = c),
        (e.insertData = u),
        (e.insertFragmentData = d),
        (e.insertTextData = f),
        (e.deleteBackward = (n) => {
            if ('line' !== n || t) s(n);
            else {
                let t = o.lP.getLineActionRange(e, !0);
                null != t && i.Q.delete(e, { at: t });
            }
        }),
        (e.deleteForward = (n) => {
            if ('line' !== n || t) l(n);
            else {
                let t = o.lP.getLineActionRange(e, !1);
                null != t && i.Q.delete(e, { at: t });
            }
        }),
        e
    );
};
