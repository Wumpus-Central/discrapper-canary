n.d(t, {
    $Q: () => c,
    Eo: () => d,
    JC: () => E,
    SG: () => h,
    UE: () => u,
    UQ: () => _,
    nE: () => o,
    ox: () => A,
    vQ: () => I,
});
var i = n(196765),
    r = n(314116),
    a = n(375708);
let s = (0, i.v)(() => ({ localClips: new Map() })),
    l = new Map();
function o(e, t) {
    s.setState((n) => ({ localClips: new Map(n.localClips).set(e, t) }));
}
function d(e, t) {
    s.setState((n) => {
        let i = n.localClips.get(e);
        return i?.status !== "uploading" ? n : { localClips: new Map(n.localClips).set(e, { ...i, progress: t }) };
    });
}
function c(e) {
    for (let t of s.getState().localClips.values()) if (t.clip.id === e) return !0;
    return !1;
}
function u(e) {
    s.setState((t) => {
        let n = new Map(t.localClips);
        return (n.delete(e), { localClips: n });
    });
}
function _() {
    return s((e) => e.localClips);
}
function E(e, t) {
    l.set(e, t);
}
function A(e) {
    l.delete(e);
}
function h(e) {
    (l.get(e)?.abort(), l.delete(e), u(e));
}
function I(e) {
    return (
        !!(function () {
            for (let e of s.getState().localClips.values()) if ("uploaded" !== e.status) return !0;
            return !1;
        })() &&
        ((0, r.A)({
            title: a.intl.string(a.t.PqpqTp),
            subtitle: a.intl.string(a.t.ByJmnc),
            confirmText: a.intl.string(a.t["ETE/oC"]),
            cancelText: a.intl.string(a.t["3ilveh"]),
            onConfirm: () => {
                for (let [e, t] of s.getState().localClips) "uploaded" !== t.status && h(e);
                (l.clear(), s.setState({ localClips: new Map() }), e());
            },
        }),
        !0)
    );
}
