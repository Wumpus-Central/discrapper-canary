n.d(t, { o: () => s });
var r = n(253018),
    i = n(35277),
    a = n(711371);
let s = (e, t) => {
    let {
        addMark: n,
        removeMark: s,
        deleteBackward: o,
        deleteForward: l,
        setFragmentData: c,
        insertData: u,
        insertFragmentData: d,
        insertTextData: f,
    } = e;
    return (
        ((e = (0, r.o$)(e)).addMark = n),
        (e.removeMark = s),
        (e.setFragmentData = c),
        (e.insertData = u),
        (e.insertFragmentData = d),
        (e.insertTextData = f),
        (e.deleteBackward = (n) => {
            if ("line" === n && !t) {
                let t = a.ZF.toPoint(e.selection);
                if (null != t) {
                    let r = a.VW.before(e, t, { unit: n });
                    if (null != r) {
                        let n = a.e0.getLineStart(e, t, !1);
                        null != n && a.Kh.isAfter(n, r)
                            ? i.b.delete(e, {
                                  at: {
                                      anchor: n,
                                      focus: t,
                                  },
                              })
                            : i.b.delete(e, {
                                  at: {
                                      anchor: r,
                                      focus: t,
                                  },
                              });
                        return;
                    }
                }
            }
            o(n);
        }),
        (e.deleteForward = (n) => {
            if ("line" === n && !t) {
                let t = a.ZF.toPoint(e.selection);
                if (null != t) {
                    let r = a.VW.after(e, t, { unit: n });
                    if (null != r) {
                        let n = a.e0.getLineEnd(e, t, !1);
                        null != n && a.Kh.isBefore(n, r)
                            ? i.b.delete(e, {
                                  at: {
                                      anchor: n,
                                      focus: t,
                                  },
                              })
                            : i.b.delete(e, {
                                  at: {
                                      anchor: r,
                                      focus: t,
                                  },
                              });
                        return;
                    }
                }
            }
            l(n);
        }),
        e
    );
};
