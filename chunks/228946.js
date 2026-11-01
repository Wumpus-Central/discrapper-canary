t.d(n, { closeBackgroundedConjureAppFrames: () => T, A: () => F, returnToConjureFrameSurface: () => V });
var i = t(582128),
    r = t(991690),
    a = t(197184),
    u = t(625180),
    l = t(91242),
    o = t(457827),
    c = t(995802),
    A = t(734057),
    p = t(754027),
    s = t(964167),
    d = t(271982),
    I = t(409397),
    f = t(869146),
    P = t(976860),
    C = t(566870),
    N = t(118591),
    O = t(652215),
    L = t(165610);
let m = {
    isInHostWindow: (e) => null != (0, I.A)(e),
    isActivityPopoutOpen: () => f.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT),
    hasOwnPictureInPicture: (e) => (0, C.A)(e),
    isPictureInPicture: (e) => (0, L.ny)(e)?.data.layoutMode === L.y0.PIP,
    enterPictureInPicture(e) {
        u.A.updateFrameLayoutMode({ frameId: e, layoutMode: L.y0.PIP });
    },
    isOnScreen(e) {
        let n = l.A.getFrame(e);
        return !(null != n && (0, N.mK)(n, (0, s.rm)())) && null != d.A.getWinningTarget(e);
    },
    openSurfaceChannel: (e, n) => ((0, P.pX)(O.BVt.CHANNEL(n.getGuildId() ?? O.ME, n.id)), !0),
};
var y = t(933958),
    E = t(326843),
    g = t(964404),
    h = t(778597),
    w = t(111534);
function _(e) {
    return (
        (0, p.Q5)(e.surface) ||
        (0, p.UT)(e) ||
        (e.intent === L.sV.MAIN && e.applicationId === w.A.getLastBuilderPreviewApplicationId())
    );
}
function T(e, n) {
    if ((0, c.Pc)(e))
        for (let t of l.A.getAllFrames())
            t.applicationId === e &&
                t.id !== n &&
                !(t.surface.type === r.U.OVERLAY || _(t) || m.isInHostWindow(t)) &&
                (l.A.getMainFrame()?.id === t.id
                    ? !m.isActivityPopoutOpen() && m.isPictureInPicture(t)
                    : !m.isOnScreen(t.id)) &&
                (0, o.r)(t.id);
}
function V(e) {
    if (e.intent !== L.sV.INLINE || (0, p.Q5)(e.surface) || !(0, c.Pc)(e.applicationId)) return !1;
    let n = A.A.getChannel((0, a.A)(e.surface));
    return null != n && m.openSurfaceChannel(e.surface, n);
}
function F(e, n) {
    let t = null != n ? (0, L.VA)(e, n) : null;
    i.useEffect(() => {
        if (null != t)
            return (
                T(e, t),
                !(function (e) {
                    let n = l.A.getFrame(e);
                    if (null == n || m.isActivityPopoutOpen()) return;
                    let t = l.A.getMainFrame()?.id === e;
                    n.intent === L.sV.MAIN
                        ? (t || u.A.promoteFrame(e), u.A.resetFrameLayoutModes(e))
                        : t && (0, c.Pc)(n.applicationId) && u.A.clearMainFrameSlot();
                })(t),
                () =>
                    (function (e) {
                        let n = l.A.getFrame(e);
                        if (null != n) {
                            var t;
                            let i;
                            ((0, E.A)(n, g.Ay) &&
                            (0, c.Pc)(n.applicationId) &&
                            ((t = n.id),
                            (null == (i = l.A.getMainFrame()) || i.id === t) &&
                                null == y.Ay.getCurrentEmbeddedActivity())
                                ? n.surface.type !== r.U.VOICE_CHANNEL || (0, p.Q5)(n.surface)
                                    ? 0
                                    : !h.A.isAppVisible(n.surface.channelId, !0)
                                : 1) ||
                            _(n) ||
                            m.hasOwnPictureInPicture(n) ||
                            m.isInHostWindow(n) ||
                            m.isActivityPopoutOpen()
                                ? n.intent === L.sV.MAIN && u.A.demoteMainFrame(e)
                                : (n.intent === L.sV.INLINE && u.A.promoteFrame(e), m.enterPictureInPicture(e));
                        }
                    })(t)
            );
    }, [e, t]);
}
