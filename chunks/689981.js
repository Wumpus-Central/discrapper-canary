function r(e) {
    var n, t;
    if (null == e) return null;
    if ((null == (n = e.content) ? void 0 : n.length) > 0) return e.content;
    if ((null == (t = e.embeds) ? void 0 : t.length) > 0) {
        for (let n of e.embeds) if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription;
    }
    return null;
}
t.d(n, { Z: () => r }), t(388685);
