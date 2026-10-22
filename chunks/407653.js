n.d(t, { A: () => u });
var l = n(477900);
n(582128);
var i = n(514042),
    r = n(666476),
    a = n(490707);
function u(e) {
    let { projectId: t, file: n, className: a } = e;
    return null != t && null != n && r.XB.has(n.content_type)
        ? (0, l.jsx)(s, { projectId: t, attachmentId: n.id, className: a })
        : (0, l.jsx)(i.FileIcon, { size: "xs", color: "currentColor", className: a });
}
function s(e) {
    let { projectId: t, attachmentId: n, className: r } = e,
        { src: u, gone: s, handleError: o } = (0, a._)(t, n);
    return null == u || s
        ? (0, l.jsx)(i.FileIcon, { size: "xs", color: "currentColor", className: r })
        : (0, l.jsx)("img", { src: u, alt: "", className: r, onError: o });
}
