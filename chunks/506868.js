n.d(t, { DU: () => O, LK: () => S, mK: () => R });
var r = n(582128),
    i = n(17928),
    l = n(964167),
    u = n(587895),
    A = n(197184),
    a = n(91242),
    c = n(326843),
    d = n(409397),
    o = n(869146),
    p = n(976860),
    E = n(964404),
    f = n(309010),
    s = n(111534),
    I = n(754027),
    _ = n(260498),
    P = n(333807),
    L = n(566870);
let N = 588245 != n.j ? [a.A, E.Ay, f.Ay, u.A, _.Ay, s.A, o.A] : null;
function R(e, t) {
    let n =
        (0, I.Q5)(e.surface) && (0, P.A)(e.applicationId) && s.A.getBuilderPreviewApplicationId() !== e.applicationId;
    return (
        (!!n || !!(0, L.A)(e)) &&
        !!(0, c.A)(e, E.Ay) &&
        a.A.getMainFrame()?.id !== e.id &&
        null == (0, d.A)(e) &&
        (n || t || f.Ay.getChannelId() !== (0, A.A)(e.surface))
    );
}
function C(e) {
    return (0, p.JK)().listen(e);
}
function T() {
    return r.useSyncExternalStore(C, l.rm);
}
function O() {
    let e = T();
    return (0, i.yK)(
        N,
        () =>
            a.A.getAllFrames()
                .filter((t) => R(t, e))
                .map((e) => e.id),
        [e],
    );
}
function S(e) {
    let t = T();
    return (0, i.bG)(N, () => {
        let n = a.A.getFrame(e);
        return null != n && R(n, t);
    }, [e, t]);
}
