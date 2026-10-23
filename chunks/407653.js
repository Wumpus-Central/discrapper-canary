n.d(t, { A: () => u });
var l = n(477900);
n(582128);
var i = n(514042),
    a = n(666476),
    r = n(490707);
function u(e) {
    let { projectId: t, file: n, className: r } = e;
    return null != t && null != n && a.XB.has(n.content_type)
        ? (0, l.jsx)(s, { projectId: t, attachmentId: n.id, className: r })
        : (0, l.jsx)(i.FileIcon, { size: "xs", color: "currentColor", className: r });
}
function s(e) {
    let { projectId: t, attachmentId: n, className: a } = e,
        { src: u, gone: s, handleError: o } = (0, r._)(t, n);
    return null == u || s
        ? (0, l.jsx)(i.FileIcon, { size: "xs", color: "currentColor", className: a })
        : (0, l.jsx)("img", { src: u, alt: "", className: a, onError: o });
}
