n.d(t, { A: () => s });
var l = n(477900);
n(582128);
var r = n(514042),
    a = n(666476),
    i = n(490707);
function s(e) {
    let { projectId: t, file: n, className: i } = e;
    return null != t && null != n && a.XB.has(n.content_type)
        ? (0, l.jsx)(o, { projectId: t, attachmentId: n.id, className: i })
        : (0, l.jsx)(r.FileIcon, { size: "xs", color: "currentColor", className: i });
}
function o(e) {
    let { projectId: t, attachmentId: n, className: a } = e,
        { src: s, gone: o, handleError: u } = (0, i._)(t, n);
    return null == s || o
        ? (0, l.jsx)(r.FileIcon, { size: "xs", color: "currentColor", className: a })
        : (0, l.jsx)("img", { src: s, alt: "", className: a, onError: u });
}
