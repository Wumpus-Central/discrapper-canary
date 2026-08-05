"use strict";
n.d(t, { A: () => k });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(31728),
    l = n(933958),
    o = n(216418),
    d = n(969151),
    c = n(108959),
    u = n(449571),
    _ = n(313961),
    E = n(71855),
    A = n(91242),
    h = n(210954),
    I = n(26113),
    f = n(205297),
    p = n(699426),
    T = n(979186),
    m = n(869146),
    g = n(363195),
    S = n(742023),
    N = n(806911),
    C = n(734057),
    O = n(334463),
    R = n(309010),
    L = n(531685),
    D = n(403362),
    y = n(652215),
    v = n(5867),
    b = n(806931),
    M = n(165610),
    P = n(179698);
let U = { [y.o1q.VIDEO]: N.A, [y.o1q.ACTIVITY]: u.A, [y.o1q.FRAME]: h.A, [y.o1q.HAVEN]: I.A },
    w = { minWidth: b.mn[b.R8.VIDEO], maxWidth: b.cF[b.R8.VIDEO] },
    G = [];
class x extends r.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: r,
                maxY: a,
                theme: s,
                dockedRect: l,
                appContext: o,
                roundCorners: d,
                getDockedRectPositionY: c,
                windowSize: u,
                inPopoutWindow: _,
                activityPIPWindow: E,
                chatOpen: A,
                callChatSidebarWidth: h,
            } = this.props,
            I = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            T = "" !== I ? parseInt(I, 10) : y.MdR,
            m = u.width - T - (A ? h : 0);
        return (0, i.jsxs)(p.ic, {
            children: [
                (0, i.jsx)(f.A, {
                    pictureInPictureComponents: U,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: r,
                    maxY: a,
                    dockedRect: l,
                    theme: s,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: o,
                    roundCorners: d,
                    resizeConfig: w,
                    getDockedRectPositionY: c,
                }),
                (0, i.jsx)(p.Md, { className: !_ && null != E && A && m < 550 ? P.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        s.tw(e, t);
    };
    handleWindowResize = (e) => {
        s.EB(e, b.R8.VIDEO);
    };
}
let k = a.Ay.connectStores([m.A, l.Ay, L.A, g.A, C.A, R.Ay, O.A, _.A, S.Ay, A.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: i = !1 } = e,
        r = m.A.getWindowOpen(y.MLl.CHANNEL_CALL_POPOUT),
        a = m.A.getWindowOpen(y.MLl.ACTIVITY_POPOUT),
        s = l.Ay.getCurrentEmbeddedActivity(),
        u = (0, d.H)(s?.location),
        h = null != s && !(0, c.A)(u, C.A, R.Ay),
        I = l.Ay.getActivityPanelMode(),
        f = h && I === v.Gd.PANEL,
        p = null != s && null != u && _.A.getSelectedParticipant(u)?.type === b.lp.ACTIVITY,
        N = (0, M.ny)(A.A.getMainFrame()),
        P = N?.data.layoutMode === M.y0.FOCUSED,
        U = null != n,
        w = U ? m.A.getWindow(n) : null,
        x = !!U && m.A.isWindowFullScreen(n),
        k = L.A.windowSize();
    U && (k = null == w ? k : { width: w.innerWidth, height: w.innerHeight });
    let F = U ? y.BRT.POPOUT : y.BRT.APP;
    t =
        (null != s && a) || (U && h) || (U && null != N)
            ? null
            : U || !r || h || null != N
              ? null != s && f
                  ? (O.A.pipActivityWindow ?? O.A.pipVideoWindow)
                  : null != N && P
                    ? (O.A.pipFrameWindow ?? O.A.pipVideoWindow ?? O.A.pipActivityWindow)
                    : (O.A.pipHavenWindow ?? O.A.pipVideoWindow ?? O.A.pipActivityWindow ?? O.A.pipFrameWindow)
              : null;
    let V = Array.from(O.A.pipWindows.values()),
        B = O.A.pipWidth(b.R8.VIDEO),
        H = V.find((e) => e.component === y.o1q.VIDEO),
        j = V.find((e) => e.component === y.o1q.ACTIVITY),
        W = V.find((e) => e.component === y.o1q.FRAME),
        Y = [V.find((e) => e.component === y.o1q.HAVEN), H, j, W].filter(D.Vq),
        K = S.Ay.callChatSidebarWidth,
        $ = R.Ay.getVoiceChannelId(),
        z = R.Ay.getChannelId() === $,
        q = null != $ && _.A.getChatOpen($),
        Z = f || p,
        X = Z && null != s && (0, o.q)(s.applicationId),
        Q = !Z && null != t && z;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === Y.length ? G : Y,
        pipWidth: B,
        maxX: k.width - (Q && q ? K : 0),
        maxY: k.height,
        theme: g.A.theme,
        dockedRect: O.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: function (e) {
            return U && (0, T.q)({ withTitleBar: i, isFullScreen: x }) ? e - (0, E.LI)({ isPopoutWindow: U }) : e;
        },
        appContext: F,
        roundCorners: !X,
        windowSize: k,
        inPopoutWindow: U,
        activityPIPWindow: j,
        chatOpen: q,
        callChatSidebarWidth: K,
    };
})(x);
