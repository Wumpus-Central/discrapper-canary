function l(e, t) {
    return null == t || null == e ? null : e[t];
}
n.d(
    t,
    {},
    {
        W: l,
        g: function (e, t) {
            let n = l(e, t);
            return null != n ? n.type : null;
        },
    },
);
