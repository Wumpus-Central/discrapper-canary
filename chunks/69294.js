r.d(t, { mK: () => M, DU: () => Q, W4: () => w, LK: () => b, Gl: () => k });
var n = r(582128),
    u = r(855986),
    a = r(964167),
    l = r(587895),
    c = r(197184),
    i = r(625180),
    o = r(91242),
    d = r(326843),
    A = r(409397),
    f = r(869146),
    y = r(976860),
    s = r(964404),
    p = r(309010),
    P = r(111534),
    m = r(754027),
    I = r(260498),
    h = r(566870),
    F = r(333807),
    g = r(165610);
let E = 588245 != r.j ? [o.A, s.Ay, p.Ay, l.A, I.Ay, P.A, f.A] : null;
function M(e, t) {
    let r =
        (0, m.Q5)(e.surface) && (0, F.A)(e.applicationId) && P.A.getBuilderPreviewApplicationId() !== e.applicationId;
    return (
        (!!r || !!(0, h.A)(e)) &&
        !!(0, d.A)(e, s.Ay) &&
        o.A.getMainFrame()?.id !== e.id &&
        null == (0, A.A)(e) &&
        (r || t || p.Ay.getChannelId() !== (0, c.A)(e.surface))
    );
}
function v(e) {
    return (0, y.JK)().listen(e);
}
function C() {
    return n.useSyncExternalStore(v, a.rm);
}
function Q() {
    let e = C();
    return (0, u.yK)(
        E,
        () =>
            o.A.getAllFrames()
                .filter((t) => M(t, e))
                .map((e) => e.id),
        [e],
    );
}
function b(e) {
    let t = C();
    return (0, u.bG)(E, () => {
        let r = o.A.getFrame(e);
        return null != r && M(r, t);
    }, [e, t]);
}
function k(e) {
    return (0, u.bG)(
        [o.A],
        () => {
            var t;
            let r;
            return (
                (t = o.A.getFrame(e)),
                null != (r = (0, g.ny)(t)) &&
                    r.data.pictureInPictureInteractive &&
                    r.data.layoutMode === g.y0.PIP &&
                    !(0, m.Q5)(r.surface)
            );
        },
        [e],
    );
}
function K(e) {
    let t = (0, g.ny)(o.A.getFrame(e));
    null == t ||
        (0, m.Q5)(t.surface) ||
        t.data.layoutMode === g.y0.PIP ||
        i.A.updateFrameLayoutMode({ frameId: e, layoutMode: g.y0.PIP });
}
function L(e) {
    let t = (0, g.ny)(o.A.getFrame(e));
    null == t ||
        (0, m.Q5)(t.surface) ||
        t.data.layoutMode !== g.y0.PIP ||
        i.A.updateFrameLayoutMode({ frameId: e, layoutMode: g.y0.FOCUSED });
}
function w(e) {
    let t = n.useRef([]);
    (n.useEffect(() => {
        let r = t.current;
        (r.filter((t) => !e.includes(t)).forEach(L), e.filter((e) => !r.includes(e)).forEach(K), (t.current = e));
    }, [e]),
        n.useEffect(
            () => () => {
                (t.current.forEach(L), (t.current = []));
            },
            [],
        ));
}
