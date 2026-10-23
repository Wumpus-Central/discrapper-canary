l.d(t, { A: () => u });
var n = l(477900);
l(582128);
var a = l(514042),
    i = l(666476),
    r = l(490707);
function u(e) {
    let { projectId: t, file: l, className: r } = e;
    return null != t && null != l && i.XB.has(l.content_type)
        ? (0, n.jsx)(s, { projectId: t, attachmentId: l.id, className: r })
        : (0, n.jsx)(a.FileIcon, { size: "xs", color: "currentColor", className: r });
}
function s(e) {
    let { projectId: t, attachmentId: l, className: i } = e,
        { src: u, gone: s, handleError: o } = (0, r._)(t, l);
    return null == u || s
        ? (0, n.jsx)(a.FileIcon, { size: "xs", color: "currentColor", className: i })
        : (0, n.jsx)("img", { src: u, alt: "", className: i, onError: o });
}
