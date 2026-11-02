(n.d(t, { _F: () => o, fX: () => E, ng: () => A }), n(323874), n(14289), n(35956));
var i = n(515718),
    r = n(649121),
    a = n(260498),
    s = n(111534),
    l = n(493490);
async function o(e, t) {
    let { ticket: n, baseUrl: i } = await (0, r.BK)(e),
        a = new URLSearchParams({ ticket: n, v: t.image_etag });
    return `${i}/agent/game-captures/${encodeURIComponent(t.id)}?${a}`;
}
let d = new Map();
async function c(e, t) {
    let n = await fetch(await o(e, t), { cache: "no-store" });
    if (!n.ok) throw Error(`game capture fetch failed (${n.status})`);
    return (0, i.We)(await n.blob());
}
async function u(e, t) {
    let n = `${e}:${t.id}:${t.image_etag}`,
        i = d.get(n);
    null == i && ((i = c(e, t)), d.set(n, i));
    try {
        return await i;
    } catch (e) {
        throw (d.get(n) === i && d.delete(n), e);
    }
}
function _(e) {
    if (s.A.getBuilderPreviewApplicationId() !== e) return null;
    let t = a.Ay.findProjectByApplicationId(e);
    if (null == t || t.preview_application_id !== e) return null;
    let n = l.A.getSelectedCapture(t.id);
    return null != n ? { projectId: t.id, capture: n } : null;
}
function E(e) {
    return null != _(e);
}
async function A(e) {
    let t = _(e);
    if (null == t) return { status: "capture_failed" };
    let { projectId: n, capture: i } = t;
    try {
        let e = await u(n, i);
        return { status: "ok", image: e, width: i.width, height: i.height };
    } catch {
        return { status: "capture_failed" };
    }
}
