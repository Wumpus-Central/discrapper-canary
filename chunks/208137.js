function s() {
    return null;
}
function l(e, t, n) {
    let l = s();
    if (null == l) return null;
    let a = t === e.preview_application_id ? `${l}/preview/${e.id}/` : `${l}/${e.id}/`;
    return null != n ? `${a}?ts=${n}` : a;
}
n.d(t, { V: () => s, s: () => l }), n(323874), n(14289), n(35956);
