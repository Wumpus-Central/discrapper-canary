n.d(t, { A: () => m, closeBackgroundedConjureAppFrames: () => I, returnToConjureFrameSurface: () => P });
var i = n(582128),
    r = n(991690),
    u = n(197184),
    a = n(625180),
    l = n(91242),
    c = n(457827),
    A = n(995802),
    o = n(734057),
    s = n(754027),
    d = n(35525),
    p = n(881511),
    f = n(165610);
function I(e, t) {
    if ((0, A.Pc)(e))
        for (let n of l.A.getAllFrames())
            n.applicationId === e &&
                n.id !== t &&
                !(n.surface.type === r.U.OVERLAY || (0, p.D)(n) || d.A.isInHostWindow(n)) &&
                (l.A.getMainFrame()?.id === n.id
                    ? !d.A.isActivityPopoutOpen() && d.A.isPictureInPicture(n)
                    : !d.A.isOnScreen(n.id)) &&
                (0, c.r)(n.id);
}
function P(e) {
    if (e.intent !== f.sV.INLINE || (0, s.Q5)(e.surface) || !(0, A.Pc)(e.applicationId)) return !1;
    let t = o.A.getChannel((0, u.A)(e.surface));
    return null != t && d.A.openSurfaceChannel(e.surface, t);
}
function m(e, t) {
    let n = null != t ? (0, f.VA)(e, t) : null;
    i.useEffect(() => {
        if (null != n)
            return (
                I(e, n),
                !(function (e) {
                    let t = l.A.getFrame(e);
                    if (null == t || d.A.isActivityPopoutOpen()) return;
                    let n = l.A.getMainFrame()?.id === e;
                    t.intent === f.sV.MAIN
                        ? (n || a.A.promoteFrame(e), a.A.resetFrameLayoutModes(e))
                        : n && (0, A.Pc)(t.applicationId) && a.A.clearMainFrameSlot();
                })(n),
                () =>
                    (function (e) {
                        let t = l.A.getFrame(e);
                        null != t &&
                            (!(0, p.M)(t) ||
                            (0, p.D)(t) ||
                            d.A.hasOwnPictureInPicture(t) ||
                            d.A.isInHostWindow(t) ||
                            d.A.isActivityPopoutOpen()
                                ? t.intent === f.sV.MAIN && a.A.demoteMainFrame(e)
                                : (t.intent === f.sV.INLINE && a.A.promoteFrame(e), d.A.enterPictureInPicture(e)));
                    })(n)
            );
    }, [e, n]);
}
