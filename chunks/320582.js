n.d(t, {
    ML: () => l,
    N8: () => u,
    vh: () => c
}),
    n(47120);
var r = n(442837),
    i = n(136015),
    o = n(91896),
    a = n(981631);
function s(e, t) {
    let [n] = (0, r.e7)([o.Z], () => [o.Z.getGameRelationshipsForUserByType(e, t), o.Z.getGameRelationshipsVersion()], [t, e], i.Q);
    return n;
}
function l(e) {
    return s(e, a.OGo.FRIEND);
}
function c(e) {
    return s(e, a.OGo.PENDING_INCOMING);
}
function u(e, t) {
    let [n] = (0, r.e7)(
        [o.Z],
        () => {
            let n = o.Z.getGameRelationshipsForUserByType(e, t),
                r = o.Z.getGameRelationshipsVersion();
            return [n.length > 0, r];
        },
        [t, e],
        i.Q
    );
    return n;
}
