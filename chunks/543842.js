function i(e, t) {
    var n;
    let i = null == t ? void 0 : null === (n = t.replace(/-/g, '_')) || void 0 === n ? void 0 : n.toUpperCase();
    if (null != i && i in e) return e[i];
}
n.d(t, { Z: () => i }), n(757143);
