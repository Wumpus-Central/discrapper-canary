n.d(t, { DU: () => O, LK: () => S, mK: () => C });
var r = n(582128),
    i = n(17928),
    l = n(964167),
    u = n(587895),
    A = n(197184),
    a = n(91242),
    c = n(326843),
    o = n(409397),
    d = n(869146),
    p = n(976860),
    E = n(964404),
    f = n(309010),
    s = n(111534),
    I = n(754027),
    _ = n(260498),
    P = n(333807),
    L = n(566870);
let R = 588245 != n.j ? [a.A, E.Ay, f.Ay, u.A, _.Ay, s.A, d.A] : null;
function C(e, t) {
    let n =
        (0, I.Q5)(e.surface) && (0, P.A)(e.applicationId) && s.A.getBuilderPreviewApplicationId() !== e.applicationId;
    return (
        (!!n || !!(0, L.A)(e)) &&
        !!(0, c.A)(e, E.Ay) &&
        a.A.getMainFrame()?.id !== e.id &&
        null == (0, o.A)(e) &&
        (n || t || f.Ay.getChannelId() !== (0, A.A)(e.surface))
    );
}
function T(e) {
    return (0, p.JK)().listen(e);
}
function N() {
    return r.useSyncExternalStore(T, l.rm);
}
function O() {
    let e = N();
    return (0, i.yK)(
        R,
        () =>
            a.A.getAllFrames()
                .filter((t) => C(t, e))
                .map((e) => e.id),
        [e],
    );
}
function S(e) {
    let t = N();
    return (0, i.bG)(R, () => {
        let n = a.A.getFrame(e);
        return null != n && C(n, t);
    }, [e, t]);
}
