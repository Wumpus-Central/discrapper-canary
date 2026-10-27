l.d(t, { A: () => s });
var n = l(477900);
l(582128);
var a = l(514042),
    r = l(666476),
    i = l(490707);
function s(e) {
    let { projectId: t, file: l, className: i } = e;
    return null != t && null != l && r.XB.has(l.content_type)
        ? (0, n.jsx)(u, { projectId: t, attachmentId: l.id, className: i })
        : (0, n.jsx)(a.FileIcon, { size: "xs", color: "currentColor", className: i });
}
function u(e) {
    let { projectId: t, attachmentId: l, className: r } = e,
        { src: s, gone: u, handleError: o } = (0, i._)(t, l);
    return null == s || u
        ? (0, n.jsx)(a.FileIcon, { size: "xs", color: "currentColor", className: r })
        : (0, n.jsx)("img", { src: s, alt: "", className: r, onError: o });
}
