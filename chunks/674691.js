n.d(t, { G: () => o });
var r = n(911969),
    i = n(812206);
function o(e, t) {
    if (null === e.id || void 0 === e.id) return !1;
    let n = i.Z.getApplication(e.id);
    return (
        null != n &&
        null != n.linkedGames &&
        n.linkedGames.length > 0 &&
        void 0 !== n.linkedGames.find((e) => e.type === r.tE.LINKED && a(e.id, t))
    );
}
function a(e, t) {
    return null != t.find((t) => t.application_id === e);
}
