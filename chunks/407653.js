n.d(t, { A: () => u });
var l = n(477900);
n(582128);
var a = n(514042),
    i = n(666476),
    r = n(490707);
function u(e) {
    let { projectId: t, file: n, className: r } = e;
    return null != t && null != n && i.XB.has(n.content_type)
        ? (0, l.jsx)(s, { projectId: t, attachmentId: n.id, className: r })
        : (0, l.jsx)(a.FileIcon, { size: "xs", color: "currentColor", className: r });
}
function s(e) {
    let { projectId: t, attachmentId: n, className: i } = e,
        { src: u, gone: s, handleError: o } = (0, r._)(t, n);
    return null == u || s
        ? (0, l.jsx)(a.FileIcon, { size: "xs", color: "currentColor", className: i })
        : (0, l.jsx)("img", { src: u, alt: "", className: i, onError: o });
}
