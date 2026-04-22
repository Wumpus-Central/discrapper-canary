"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(31728),
    o = n(933958),
    l = n(216418),
    u = n(969151),
    d = n(108959),
    c = n(449571),
    _ = n(313961),
    f = n(71855),
    E = n(91242),
    h = n(210954),
    p = n(26113),
    m = n(205297),
    g = n(699426),
    A = n(923917),
    I = n(869146),
    T = n(544028),
    S = n(964404),
    y = n(806911),
    N = n(734057),
    O = n(334463),
    R = n(309010),
    v = n(531685),
    C = n(403362),
    b = n(652215),
    D = n(5867),
    L = n(806931),
    w = n(165610),
    M = n(423562);
let P = { [b.o1q.VIDEO]: y.A, [b.o1q.ACTIVITY]: c.A, [b.o1q.FRAME]: h.A, [b.o1q.HAVEN]: p.A },
    U = { minWidth: L.mn[L.R8.VIDEO], maxWidth: L.cF[L.R8.VIDEO] },
    k = [];
class x extends i.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: i,
                maxY: s,
                theme: a,
                dockedRect: o,
                appContext: l,
                roundCorners: u,
                getDockedRectPositionY: d,
                windowSize: c,
                inPopoutWindow: _,
                activityPIPWindow: f,
                chatOpen: E,
                callChatSidebarWidth: h,
            } = this.props,
            p = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            A = "" !== p ? parseInt(p, 10) : b.MdR,
            I = c.width - A - (E ? h : 0);
        return (0, r.jsxs)(g.ic, {
            children: [
                (0, r.jsx)(m.A, {
                    pictureInPictureComponents: P,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: i,
                    maxY: s,
                    dockedRect: o,
                    theme: a,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: u,
                    resizeConfig: U,
                    getDockedRectPositionY: d,
                }),
                (0, r.jsx)(g.Md, { className: !_ && null != f && E && I < 550 ? M.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        a.tw(e, t);
    };
    handleWindowResize = (e) => {
        a.EB(e, L.R8.VIDEO);
    };
}
let G = s.Ay.connectStores([I.A, o.Ay, v.A, T.A, N.A, R.A, O.A, _.A, S.Ay, E.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: r = !1 } = e,
        i = I.A.getWindowOpen(b.MLl.CHANNEL_CALL_POPOUT),
        s = I.A.getWindowOpen(b.MLl.ACTIVITY_POPOUT),
        a = o.Ay.getCurrentEmbeddedActivity(),
        c = (0, u.H)(a?.location),
        h = null != a && !(0, d.A)(c, N.A, R.A),
        p = o.Ay.getActivityPanelMode(),
        m = h && p === D.Gd.PANEL,
        g = null != a && null != c && _.A.getSelectedParticipant(c)?.type === L.lp.ACTIVITY,
        y = E.A.getConnectedFrame(),
        M = E.A.getFrameLayoutMode() === w.y.FOCUSED,
        P = null != n,
        U = P ? I.A.getWindow(n) : null,
        x = !!P && I.A.isWindowFullScreen(n),
        G = v.A.windowSize();
    P && (G = null == U ? G : { width: U.innerWidth, height: U.innerHeight });
    let V = P ? b.BRT.POPOUT : b.BRT.APP;
    t =
        (null != a && s) || (P && h) || (P && null != y)
            ? null
            : P || !i || h || null != y
              ? null != a && m
                  ? (O.A.pipActivityWindow ?? O.A.pipVideoWindow)
                  : null != y && M
                    ? (O.A.pipFrameWindow ?? O.A.pipVideoWindow ?? O.A.pipActivityWindow)
                    : (O.A.pipHavenWindow ?? O.A.pipVideoWindow ?? O.A.pipActivityWindow ?? O.A.pipFrameWindow)
              : null;
    let F = Array.from(O.A.pipWindows.values()),
        B = O.A.pipWidth(L.R8.VIDEO),
        H = F.find((e) => e.component === b.o1q.VIDEO),
        Y = F.find((e) => e.component === b.o1q.ACTIVITY),
        W = F.find((e) => e.component === b.o1q.FRAME),
        j = [F.find((e) => e.component === b.o1q.HAVEN), H, Y, W].filter(C.Vq),
        K = S.Ay.callChatSidebarWidth,
        $ = R.A.getVoiceChannelId(),
        z = R.A.getChannelId() === $,
        q = null != $ && _.A.getChatOpen($),
        X = m || g,
        Q = X && null != a && (0, l.q)(a.applicationId),
        J = !X && null != t && z;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === j.length ? k : j,
        pipWidth: B,
        maxX: G.width - (J && q ? K : 0),
        maxY: G.height,
        theme: T.A.theme,
        dockedRect: O.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: (e) =>
            P && (0, A.q)({ withTitleBar: r, isFullScreen: x }) ? e - (0, f.LI)({ isPopoutWindow: P }) : e,
        appContext: V,
        roundCorners: !Q,
        windowSize: G,
        inPopoutWindow: P,
        activityPIPWindow: Y,
        chatOpen: q,
        callChatSidebarWidth: K,
    };
})(x);
