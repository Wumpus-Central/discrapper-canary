(n(323874), n(14289), n(35956));
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
function c(e) {
    if (s.A.getBuilderPreviewApplicationId() !== e) return null;
    let t = a.Ay.findProjectByApplicationId(e);
    if (null == t || t.preview_application_id !== e) return null;
    let n = l.A.getSelectedCapture(t.id);
    return null != n ? { projectId: t.id, capture: n } : null;
}
n.d(
    t,
    {},
    {
        _F: o,
        fX: function (e) {
            return null != c(e);
        },
        ng: async function (e) {
            let t = c(e);
            if (null == t) return { status: "capture_failed" };
            let { projectId: n, capture: r } = t;
            try {
                let e = await (async function (e, t) {
                    let n = `${e}:${t.id}:${t.image_etag}`,
                        r = d.get(n);
                    null == r &&
                        ((r = (async function (e, t) {
                            let n = await fetch(await o(e, t), { cache: "no-store" });
                            if (!n.ok) throw Error(`game capture fetch failed (${n.status})`);
                            return (0, i.We)(await n.blob());
                        })(e, t)),
                        d.set(n, r));
                    try {
                        return await r;
                    } catch (e) {
                        throw (d.get(n) === r && d.delete(n), e);
                    }
                })(n, r);
                return { status: "ok", image: e, width: r.width, height: r.height };
            } catch {
                return { status: "capture_failed" };
            }
        },
    },
);
