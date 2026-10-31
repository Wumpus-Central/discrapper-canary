n.d(t, { DU: () => F, Gl: () => S, LK: () => O, W4: () => N, mK: () => g });
var r = n(582128),
    u = n(17928),
    l = n(964167),
    i = n(587895),
    a = n(197184),
    c = n(625180),
    o = n(91242),
    A = n(326843),
    d = n(409397),
    f = n(869146),
    s = n(976860),
    E = n(964404),
    p = n(309010),
    I = n(111534),
    P = n(754027),
    y = n(260498),
    _ = n(333807),
    L = n(566870),
    R = n(165610);
let C = 588245 != n.j ? [o.A, E.Ay, p.Ay, i.A, y.Ay, I.A, f.A] : null;
function g(e, t) {
    let n =
        (0, P.Q5)(e.surface) && (0, _.A)(e.applicationId) && I.A.getBuilderPreviewApplicationId() !== e.applicationId;
    return (
        (!!n || !!(0, L.A)(e)) &&
        !!(0, A.A)(e, E.Ay) &&
        o.A.getMainFrame()?.id !== e.id &&
        null == (0, d.A)(e) &&
        (n || t || p.Ay.getChannelId() !== (0, a.A)(e.surface))
    );
}
function h(e) {
    return (0, s.JK)().listen(e);
}
function m() {
    return r.useSyncExternalStore(h, l.rm);
}
function F() {
    let e = m();
    return (0, u.yK)(
        C,
        () =>
            o.A.getAllFrames()
                .filter((t) => g(t, e))
                .map((e) => e.id),
        [e],
    );
}
function O(e) {
    let t = m();
    return (0, u.bG)(C, () => {
        let n = o.A.getFrame(e);
        return null != n && g(n, t);
    }, [e, t]);
}
function S(e) {
    return (0, u.bG)(
        [o.A],
        () => {
            var t;
            let n;
            return (
                (t = o.A.getFrame(e)),
                null != (n = (0, R.ny)(t)) &&
                    n.data.pictureInPictureInteractive &&
                    n.data.layoutMode === R.y0.PIP &&
                    !(0, P.Q5)(n.surface)
            );
        },
        [e],
    );
}
function T(e) {
    let t = (0, R.ny)(o.A.getFrame(e));
    null == t ||
        (0, P.Q5)(t.surface) ||
        t.data.layoutMode === R.y0.PIP ||
        c.A.updateFrameLayoutMode({ frameId: e, layoutMode: R.y0.PIP });
}
function M(e) {
    let t = (0, R.ny)(o.A.getFrame(e));
    null == t ||
        (0, P.Q5)(t.surface) ||
        t.data.layoutMode !== R.y0.PIP ||
        c.A.updateFrameLayoutMode({ frameId: e, layoutMode: R.y0.FOCUSED });
}
function N(e) {
    let t = r.useRef([]);
    (r.useEffect(() => {
        let n = t.current;
        (n.filter((t) => !e.includes(t)).forEach(M), e.filter((e) => !n.includes(e)).forEach(T), (t.current = e));
    }, [e]),
        r.useEffect(
            () => () => {
                (t.current.forEach(M), (t.current = []));
            },
            [],
        ));
}
