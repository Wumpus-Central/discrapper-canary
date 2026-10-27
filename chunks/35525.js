n.d(t, { A: () => f });
var i = n(964167),
    r = n(625180),
    u = n(91242),
    a = n(667811),
    l = n(409397),
    c = n(869146),
    A = n(976860),
    o = n(566870),
    s = n(506868),
    d = n(652215),
    p = n(165610);
let f = {
    isInHostWindow: (e) => null != (0, l.A)(e),
    isActivityPopoutOpen: () => c.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT),
    hasOwnPictureInPicture: (e) => (0, o.A)(e),
    isPictureInPicture: (e) => (0, p.ny)(e)?.data.layoutMode === p.y0.PIP,
    enterPictureInPicture(e) {
        r.A.updateFrameLayoutMode({ frameId: e, layoutMode: p.y0.PIP });
    },
    isOnScreen(e) {
        let t = u.A.getFrame(e);
        return !(null != t && (0, s.mK)(t, (0, i.rm)())) && null != a.A.getWinningTarget(e);
    },
    openSurfaceChannel: (e, t) => ((0, A.pX)(d.BVt.CHANNEL(t.getGuildId() ?? d.ME, t.id)), !0),
};
