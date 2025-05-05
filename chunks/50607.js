n.d(t, { B: () => o });
var r = n(650557),
    i = n(436660),
    a = n(887490);
let o = (e, t) => {
    let { addMark: n, removeMark: o, deleteBackward: s, deleteForward: l, setFragmentData: c, insertData: u, insertFragmentData: d, insertTextData: f } = e;
    return (
        ((e = (0, r.BU)(e)).addMark = n),
        (e.removeMark = o),
        (e.setFragmentData = c),
        (e.insertData = u),
        (e.insertFragmentData = d),
        (e.insertTextData = f),
        (e.deleteBackward = (n) => {
            if ('line' !== n || t) s(n);
            else {
                let t = a.lP.getLineActionRange(e, !0);
                null != t && i.Q.delete(e, { at: t });
            }
        }),
        (e.deleteForward = (n) => {
            if ('line' !== n || t) l(n);
            else {
                let t = a.lP.getLineActionRange(e, !1);
                null != t && i.Q.delete(e, { at: t });
            }
        }),
        e
    );
};
