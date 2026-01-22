n.d(t, { v: () => a });
var r = n(155718),
    i = n(587895);
function a(e, t) {
    if (null === e.id || void 0 === e.id) return !1;
    let n = i.A.getApplication(e.id);
    return (
        null != n &&
        null != n.linkedGames &&
        n.linkedGames.length > 0 &&
        void 0 !== n.linkedGames.find((e) => e.type === r.Mh.LINKED && s(e.id, t))
    );
}
function s(e, t) {
    return null != t.find((t) => t.application_id === e);
}
