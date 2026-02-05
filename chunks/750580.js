n.d(t, { A: () => o });
var i = n(64700),
    l = n(311907),
    a = n(95701),
    s = n(769591),
    r = n(517092);
function o(e) {
    let t = (0, s.os)("useShouldRenderBanner"),
        [n, o] = i.useState("");
    i.useEffect(() => {
        o("");
    }, [e.id]);
    let c = (0, l.bG)([r.A], () => r.A.getLastActionTime(e.id));
    i.useEffect(() => {
        !a.B4.has(e.type) || n === e.id || (t && r.A.maybeAutoUpgradeChannel(e.id) && o(e.id));
    }, [n, t, c, e]);
    let d = i.useCallback(() => o(""), []);
    return { showUnreadsNotice: n === e.id, clearUnreadsNotice: d };
}
