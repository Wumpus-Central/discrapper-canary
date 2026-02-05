l.d(n, { A: () => a });
function a(e) {
    if (null == e) return null;
    if (e.content?.length > 0) return e.content;
    if (e.embeds?.length > 0) {
        for (let n of e.embeds) if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription;
    }
    return null;
}
