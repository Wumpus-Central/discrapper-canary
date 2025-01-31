n.d(t, { B: () => s });
var i = n(270445),
    r = n(436660),
    a = n(887490);
let s = (e, t) => {
    let { addMark: n, removeMark: s, deleteBackward: o, deleteForward: l, setFragmentData: u, insertData: c, insertFragmentData: d, insertTextData: f } = e;
    return (
        ((e = (0, i.BU)(e)).addMark = n),
        (e.removeMark = s),
        (e.setFragmentData = u),
        (e.insertData = c),
        (e.insertFragmentData = d),
        (e.insertTextData = f),
        (e.deleteBackward = (n) => {
            if ('line' !== n || t) o(n);
            else {
                let t = a.lP.getLineActionRange(e, !0);
                null != t && r.Q.delete(e, { at: t });
            }
        }),
        (e.deleteForward = (n) => {
            if ('line' !== n || t) l(n);
            else {
                let t = a.lP.getLineActionRange(e, !1);
                null != t && r.Q.delete(e, { at: t });
            }
        }),
        e
    );
};
