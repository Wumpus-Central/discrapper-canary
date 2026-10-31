n.d(t, { A: () => d, w: () => o });
var i = n(582128),
    r = n(17928),
    a = n(587895),
    s = n(486020),
    l = n(537129);
function o(e) {
    return { glyphSize: Math.round(0.6 * e), radius: e / 4 };
}
function d(e, t) {
    let n = e.preview_application_id ?? e.application_id,
        d = (0, r.bG)([a.A], () => a.A.getApplication(n)?.icon);
    return (
        i.useEffect(() => (0, l.A)(n), [n]),
        { url: null != d ? s.Ay.getApplicationIconURL({ id: n, icon: d, size: t }) : void 0, ...o(t) }
    );
}
