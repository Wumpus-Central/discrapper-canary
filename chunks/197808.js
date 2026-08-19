"use strict";
n.d(t, { A: () => x });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(31728),
    l = n(933958),
    o = n(216418),
    d = n(969151),
    c = n(108959),
    u = n(449571),
    _ = n(198052),
    E = n(71855),
    A = n(91242),
    h = n(210954),
    I = n(205297),
    f = n(699426),
    p = n(979186),
    T = n(869146),
    m = n(363195),
    g = n(742023),
    S = n(806911),
    N = n(734057),
    C = n(334463),
    O = n(309010),
    R = n(531685),
    L = n(403362),
    y = n(652215),
    D = n(5867),
    v = n(806931),
    b = n(165610),
    M = n(179698);
let P = { [y.o1q.VIDEO]: S.A, [y.o1q.ACTIVITY]: u.A, [y.o1q.FRAME]: h.A },
    U = { minWidth: v.mn[v.R8.VIDEO], maxWidth: v.cF[v.R8.VIDEO] },
    w = [];
class G extends r.PureComponent {
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
            p = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            T = "" !== p ? parseInt(p, 10) : y.MdR,
            m = u.width - T - (A ? h : 0);
        return (0, i.jsxs)(f.ic, {
            children: [
                (0, i.jsx)(I.A, {
                    pictureInPictureComponents: P,
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
                    resizeConfig: U,
                    getDockedRectPositionY: c,
                }),
                (0, i.jsx)(f.Md, { className: !_ && null != E && A && m < 550 ? M.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        s.tw(e, t);
    };
    handleWindowResize = (e) => {
        s.EB(e, v.R8.VIDEO);
    };
}
let x = a.Ay.connectStores([T.A, l.Ay, R.A, m.A, N.A, O.Ay, C.A, _.A, g.Ay, A.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: i = !1 } = e,
        r = T.A.getWindowOpen(y.MLl.CHANNEL_CALL_POPOUT),
        a = T.A.getWindowOpen(y.MLl.ACTIVITY_POPOUT),
        s = l.Ay.getCurrentEmbeddedActivity(),
        u = (0, d.H)(s?.location),
        h = null != s && !(0, c.A)(u, N.A, O.Ay),
        I = l.Ay.getActivityPanelMode(),
        f = h && I === D.Gd.PANEL,
        S = null != s && null != u && _.A.getSelectedParticipant(u)?.type === v.lp.ACTIVITY,
        M = (0, b.ny)(A.A.getMainFrame()),
        P = M?.data.layoutMode === b.y0.FOCUSED,
        U = null != n,
        G = U ? T.A.getWindow(n) : null,
        x = !!U && T.A.isWindowFullScreen(n),
        k = R.A.windowSize();
    U && (k = null == G ? k : { width: G.innerWidth, height: G.innerHeight });
    let F = U ? y.BRT.POPOUT : y.BRT.APP;
    t =
        (null != s && a) || (U && h) || (U && null != M)
            ? null
            : U || !r || h || null != M
              ? null != s && f
                  ? (C.A.pipActivityWindow ?? C.A.pipVideoWindow)
                  : null != M && P
                    ? (C.A.pipFrameWindow ?? C.A.pipVideoWindow ?? C.A.pipActivityWindow)
                    : (C.A.pipVideoWindow ?? C.A.pipActivityWindow ?? C.A.pipFrameWindow)
              : null;
    let V = Array.from(C.A.pipWindows.values()),
        B = C.A.pipWidth(v.R8.VIDEO),
        H = V.find((e) => e.component === y.o1q.VIDEO),
        j = V.find((e) => e.component === y.o1q.ACTIVITY),
        W = [H, j, V.find((e) => e.component === y.o1q.FRAME)].filter(L.Vq),
        Y = g.Ay.callChatSidebarWidth,
        K = O.Ay.getVoiceChannelId(),
        $ = O.Ay.getChannelId() === K,
        z = null != K && _.A.getChatOpen(K),
        Z = f || S,
        q = Z && null != s && (0, o.q)(s.applicationId),
        X = !Z && null != t && $;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === W.length ? w : W,
        pipWidth: B,
        maxX: k.width - (X && z ? Y : 0),
        maxY: k.height,
        theme: m.A.theme,
        dockedRect: C.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: function (e) {
            return U && (0, p.q)({ withTitleBar: i, isFullScreen: x }) ? e - (0, E.LI)({ isPopoutWindow: U }) : e;
        },
        appContext: F,
        roundCorners: !q,
        windowSize: k,
        inPopoutWindow: U,
        activityPIPWindow: j,
        chatOpen: z,
        callChatSidebarWidth: Y,
    };
})(G);
