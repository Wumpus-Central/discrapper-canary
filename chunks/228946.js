n.d(t, { closeBackgroundedConjureAppFrames: () => M, A: () => v, returnToConjureFrameSurface: () => _ });
var i = n(582128),
    r = n(991690),
    u = n(197184),
    a = n(625180),
    l = n(91242),
    c = n(457827),
    o = n(995802),
    s = n(734057),
    A = n(754027),
    d = n(964167),
    p = n(667811),
    f = n(409397),
    I = n(869146),
    P = n(976860),
    m = n(566870),
    C = n(506868),
    E = n(652215),
    y = n(165610);
let N = {
    isInHostWindow: (e) => null != (0, f.A)(e),
    isActivityPopoutOpen: () => I.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT),
    hasOwnPictureInPicture: (e) => (0, m.A)(e),
    isPictureInPicture: (e) => (0, y.ny)(e)?.data.layoutMode === y.y0.PIP,
    enterPictureInPicture(e) {
        a.A.updateFrameLayoutMode({ frameId: e, layoutMode: y.y0.PIP });
    },
    isOnScreen(e) {
        let t = l.A.getFrame(e);
        return !(null != t && (0, C.mK)(t, (0, d.rm)())) && null != p.A.getWinningTarget(e);
    },
    openSurfaceChannel: (e, t) => ((0, P.pX)(E.BVt.CHANNEL(t.getGuildId() ?? E.ME, t.id)), !0),
};
var O = n(933958),
    g = n(326843),
    F = n(964404),
    V = n(778597),
    L = n(111534);
function h(e) {
    return (
        (0, A.Q5)(e.surface) ||
        (0, A.UT)(e) ||
        (e.intent === y.sV.MAIN && e.applicationId === L.A.getLastBuilderPreviewApplicationId())
    );
}
function M(e, t) {
    if ((0, o.Pc)(e))
        for (let n of l.A.getAllFrames())
            n.applicationId === e &&
                n.id !== t &&
                !(n.surface.type === r.U.OVERLAY || h(n) || N.isInHostWindow(n)) &&
                (l.A.getMainFrame()?.id === n.id
                    ? !N.isActivityPopoutOpen() && N.isPictureInPicture(n)
                    : !N.isOnScreen(n.id)) &&
                (0, c.r)(n.id);
}
function _(e) {
    if (e.intent !== y.sV.INLINE || (0, A.Q5)(e.surface) || !(0, o.Pc)(e.applicationId)) return !1;
    let t = s.A.getChannel((0, u.A)(e.surface));
    return null != t && N.openSurfaceChannel(e.surface, t);
}
function v(e, t) {
    let n = null != t ? (0, y.VA)(e, t) : null;
    i.useEffect(() => {
        if (null != n)
            return (
                M(e, n),
                !(function (e) {
                    let t = l.A.getFrame(e);
                    if (null == t || N.isActivityPopoutOpen()) return;
                    let n = l.A.getMainFrame()?.id === e;
                    t.intent === y.sV.MAIN
                        ? (n || a.A.promoteFrame(e), a.A.resetFrameLayoutModes(e))
                        : n && (0, o.Pc)(t.applicationId) && a.A.clearMainFrameSlot();
                })(n),
                () =>
                    (function (e) {
                        let t = l.A.getFrame(e);
                        if (null != t) {
                            var n;
                            let i;
                            ((0, g.A)(t, F.Ay) &&
                            (0, o.Pc)(t.applicationId) &&
                            ((n = t.id),
                            (null == (i = l.A.getMainFrame()) || i.id === n) &&
                                null == O.Ay.getCurrentEmbeddedActivity())
                                ? t.surface.type !== r.U.VOICE_CHANNEL || (0, A.Q5)(t.surface)
                                    ? 0
                                    : !V.A.isAppVisible(t.surface.channelId, !0)
                                : 1) ||
                            h(t) ||
                            N.hasOwnPictureInPicture(t) ||
                            N.isInHostWindow(t) ||
                            N.isActivityPopoutOpen()
                                ? t.intent === y.sV.MAIN && a.A.demoteMainFrame(e)
                                : (t.intent === y.sV.INLINE && a.A.promoteFrame(e), N.enterPictureInPicture(e));
                        }
                    })(n)
            );
    }, [e, n]);
}
