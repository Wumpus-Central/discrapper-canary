n.d(t, { W: () => l, g: () => r });
let l = (e, t) => (null == t || null == e ? null : e[t]),
    r = (e, t) => {
        let n = l(e, t);
        return null != n ? n.type : null;
    };
