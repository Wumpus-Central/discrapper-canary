n.d(t, { closeBackgroundedConjureAppFrames: () => O, A: () => F, returnToConjureFrameSurface: () => V });
var i = n(582128),
    r = n(991690),
    u = n(197184),
    a = n(625180),
    l = n(91242),
    o = n(457827),
    c = n(995802),
    s = n(734057),
    d = n(754027),
    A = n(271982),
    p = n(409397),
    f = n(869146),
    I = n(976860),
    P = n(652215),
    C = n(165610);
let E = {
    isInHostWindow: (e) => null != (0, p.A)(e),
    isActivityPopoutOpen: () => f.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT),
    isPictureInPicture: (e) => (0, C.ny)(e)?.data.layoutMode === C.y0.PIP,
    enterPictureInPicture(e) {
        a.A.updateFrameLayoutMode({ frameId: e, layoutMode: C.y0.PIP });
    },
    isOnScreen: (e) => null != A.A.getWinningTarget(e),
    openSurfaceChannel: (e, t) => ((0, I.pX)(P.BVt.CHANNEL(t.getGuildId() ?? P.ME, t.id)), !0),
};
var m = n(933958),
    g = n(964404),
    y = n(778597),
    N = n(111534);
function O(e, t) {
    if ((0, c.Pc)(e))
        for (let n of l.A.getAllFrames())
            n.applicationId === e &&
                n.id !== t &&
                (function (e) {
                    return (
                        !(
                            e.surface.type === r.U.OVERLAY ||
                            (0, d.Q5)(e.surface) ||
                            (e.intent === C.sV.MAIN && e.applicationId === N.A.getLastBuilderPreviewApplicationId()) ||
                            E.isInHostWindow(e)
                        ) &&
                        (l.A.getMainFrame()?.id === e.id
                            ? !E.isActivityPopoutOpen() && E.isPictureInPicture(e)
                            : !E.isOnScreen(e.id))
                    );
                })(n) &&
                (0, o.r)(n.id);
}
function V(e) {
    if (e.intent !== C.sV.INLINE || (0, d.Q5)(e.surface) || !(0, c.Pc)(e.applicationId)) return !1;
    let t = s.A.getChannel((0, u.A)(e.surface));
    return null != t && E.openSurfaceChannel(e.surface, t);
}
function F(e, t) {
    let n = null != t ? (0, C.VA)(e, t) : null;
    i.useEffect(() => {
        if (null != n)
            return (
                O(e, n),
                !(function (e) {
                    let t = l.A.getFrame(e);
                    if (null == t || E.isActivityPopoutOpen()) return;
                    let n = l.A.getMainFrame()?.id === e;
                    t.intent === C.sV.MAIN
                        ? (n || a.A.promoteFrame(e), a.A.resetFrameLayoutModes(e))
                        : n && (0, c.Pc)(t.applicationId) && a.A.clearMainFrameSlot();
                })(n),
                () =>
                    (function (e) {
                        let t = l.A.getFrame(e);
                        if (null != t) {
                            var n;
                            let i;
                            ((0, C.x1)(t) &&
                            t.data.runsInBackground &&
                            g.Ay.allowConjureRunInBackground &&
                            (0, c.Pc)(t.applicationId) &&
                            ((n = t.id),
                            (null == (i = l.A.getMainFrame()) || i.id === n) &&
                                null == m.Ay.getCurrentEmbeddedActivity())
                                ? t.surface.type !== r.U.VOICE_CHANNEL || (0, d.Q5)(t.surface)
                                    ? 0
                                    : !y.A.isAppVisible(t.surface.channelId, !0)
                                : 1) ||
                            E.isInHostWindow(t) ||
                            E.isActivityPopoutOpen()
                                ? t.intent === C.sV.MAIN && a.A.demoteMainFrame(e)
                                : (t.intent === C.sV.INLINE && a.A.promoteFrame(e), E.enterPictureInPicture(e));
                        }
                    })(n)
            );
    }, [e, n]);
}
