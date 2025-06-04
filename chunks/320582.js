n.d(t, {
    ML: () => l,
    N8: () => u,
    vh: () => c
}),
    n(388685);
var r = n(442837),
    i = n(136015),
    a = n(91896),
    o = n(981631);
function s(e, t) {
    let [n] = (0, r.e7)([a.Z], () => [a.Z.getGameRelationshipsForUserByType(e, t), a.Z.getGameRelationshipsVersion()], [t, e], i.Q);
    return n;
}
function l(e) {
    return s(e, o.OGo.FRIEND);
}
function c(e) {
    return s(e, o.OGo.PENDING_INCOMING);
}
function u(e, t) {
    let [n] = (0, r.e7)(
        [a.Z],
        () => {
            let n = a.Z.getGameRelationshipsForUserByType(e, t),
                r = a.Z.getGameRelationshipsVersion();
            return [n.length > 0, r];
        },
        [t, e],
        i.Q
    );
    return n;
}
