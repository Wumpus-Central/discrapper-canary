n.d(t, { G: () => a });
var r = n(911969),
    i = n(812206);
function a(e, t) {
    if (null === e.id || void 0 === e.id) return !1;
    let n = i.Z.getApplication(e.id);
    return (
        null != n &&
        null != n.linkedGames &&
        n.linkedGames.length > 0 &&
        void 0 !== n.linkedGames.find((e) => e.type === r.tE.LINKED && o(e.id, t))
    );
}
function o(e, t) {
    return null != t.find((t) => t.application_id === e);
}
