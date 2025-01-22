r.d(n, {
    B: function () {
        return s;
    }
});
var i = r(270445),
    a = r(436660),
    o = r(887490);
let s = (e, n) => {
    let { addMark: r, removeMark: s, deleteBackward: l, deleteForward: u, setFragmentData: c, insertData: d, insertFragmentData: f, insertTextData: p } = e;
    return (
        ((e = (0, i.BU)(e)).addMark = r),
        (e.removeMark = s),
        (e.setFragmentData = c),
        (e.insertData = d),
        (e.insertFragmentData = f),
        (e.insertTextData = p),
        (e.deleteBackward = (r) => {
            if ('line' !== r || n) l(r);
            else {
                let n = o.lP.getLineActionRange(e, !0);
                null != n && a.Q.delete(e, { at: n });
            }
        }),
        (e.deleteForward = (r) => {
            if ('line' !== r || n) u(r);
            else {
                let n = o.lP.getLineActionRange(e, !1);
                null != n && a.Q.delete(e, { at: n });
            }
        }),
        e
    );
};
