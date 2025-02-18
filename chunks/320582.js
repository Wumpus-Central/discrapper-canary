n.d(t, {
    ML: () => l,
    N8: () => d,
    VQ: () => c,
    vh: () => u
}),
    n(47120);
var i = n(442837),
    r = n(136015),
    a = n(91896),
    s = n(981631);
function o(e, t) {
    let [n] = (0, i.e7)([a.Z], () => [a.Z.getGameRelationshipsForUserByType(e, t), a.Z.getGameRelationshipsVersion()], [t, e], r.Q);
    return n;
}
function l(e) {
    return o(e, s.OGo.FRIEND);
}
function u(e) {
    return o(e, s.OGo.PENDING_INCOMING);
}
function c(e) {
    let [t] = (0, i.e7)(
        [a.Z],
        () => {
            let t = a.Z.getGameRelationshipsForUser(e),
                n = a.Z.getGameRelationshipsVersion();
            return [t.length > 0, n];
        },
        [e],
        r.Q
    );
    return t;
}
function d(e, t) {
    let [n] = (0, i.e7)(
        [a.Z],
        () => {
            let n = a.Z.getGameRelationshipsForUserByType(e, t),
                i = a.Z.getGameRelationshipsVersion();
            return [n.length > 0, i];
        },
        [t, e],
        r.Q
    );
    return n;
}
