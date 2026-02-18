"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(31728),
    o = n(933958),
    l = n(216418),
    u = n(969151),
    c = n(108959),
    d = n(449571),
    _ = n(313961),
    f = n(71855),
    p = n(91242),
    h = n(210954),
    m = n(26113),
    E = n(205297),
    g = n(699426),
    A = n(923917),
    I = n(869146),
    T = n(544028),
    S = n(964404),
    y = n(806911),
    v = n(734057),
    N = n(334463),
    C = n(309010),
    b = n(531685),
    R = n(403362),
    O = n(652215),
    D = n(5867),
    L = n(806931),
    w = n(165610),
    x = n(315253);
let M = { [O.o1q.VIDEO]: y.A, [O.o1q.ACTIVITY]: d.A, [O.o1q.FRAME]: h.A, [O.o1q.HAVEN]: m.A },
    P = { minWidth: L.mn[L.R8.VIDEO], maxWidth: L.cF[L.R8.VIDEO] },
    k = [];
class U extends i.PureComponent {
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
                getDockedRectPositionY: c,
                windowSize: d,
                inPopoutWindow: _,
                activityPIPWindow: f,
                chatOpen: p,
                callChatSidebarWidth: h,
            } = this.props,
            m = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            A = "" !== m ? parseInt(m, 10) : O.MdR,
            I = d.width - A - (p ? h : 0),
            T = null != f,
            S = !_ && T && p && I < 550;
        return (0, r.jsxs)(g.ic, {
            children: [
                (0, r.jsx)(E.A, {
                    pictureInPictureComponents: M,
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
                    resizeConfig: P,
                    getDockedRectPositionY: c,
                }),
                (0, r.jsx)(g.Md, { className: S ? x.ah : void 0 }),
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
let G = s.Ay.connectStores([I.A, o.Ay, b.A, T.A, v.A, C.A, N.A, _.A, S.Ay, p.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: r = !1 } = e,
        i = I.A.getWindowOpen(O.MLl.CHANNEL_CALL_POPOUT),
        s = I.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT),
        a = o.Ay.getCurrentEmbeddedActivity(),
        d = (0, u.H)(a?.location),
        h = null != a && !(0, c.A)(d, v.A, C.A),
        m = o.Ay.getActivityPanelMode(),
        E = h && m === D.Gd.PANEL,
        g = null != a && null != d && _.A.getSelectedParticipant(d)?.type === L.lp.ACTIVITY,
        y = p.A.getConnectedFrame(),
        x = p.A.getFrameLayoutMode() === w.y.FOCUSED,
        M = null != n,
        P = M ? I.A.getWindow(n) : null,
        U = !!M && I.A.isWindowFullScreen(n),
        G = b.A.windowSize();
    M && (G = null == P ? G : { width: P.innerWidth, height: P.innerHeight });
    let F = M ? O.BRT.POPOUT : O.BRT.APP,
        V = (e) => (M && (0, A.q)({ withTitleBar: r, isFullScreen: U }) ? e - (0, f.LI)({ isPopoutWindow: M }) : e);
    t =
        (null != a && s) || (M && h) || (M && null != y)
            ? null
            : M || !i || h || null != y
              ? null != a && E
                  ? (N.A.pipActivityWindow ?? N.A.pipVideoWindow)
                  : null != y && x
                    ? (N.A.pipFrameWindow ?? N.A.pipVideoWindow ?? N.A.pipActivityWindow)
                    : (N.A.pipHavenWindow ?? N.A.pipVideoWindow ?? N.A.pipActivityWindow ?? N.A.pipFrameWindow)
              : null;
    let B = Array.from(N.A.pipWindows.values()),
        H = N.A.pipWidth(L.R8.VIDEO),
        j = B.find((e) => e.component === O.o1q.VIDEO),
        Y = B.find((e) => e.component === O.o1q.ACTIVITY),
        W = B.find((e) => e.component === O.o1q.FRAME),
        K = [B.find((e) => e.component === O.o1q.HAVEN), j, Y, W].filter(R.Vq),
        z = S.Ay.callChatSidebarWidth,
        $ = C.A.getVoiceChannelId(),
        q = C.A.getChannelId() === $,
        Z = null != $ && _.A.getChatOpen($),
        X = E || g,
        Q = X && null != a && (0, l.q)(a.applicationId),
        J = !X && null != t && q && Z;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === K.length ? k : K,
        pipWidth: H,
        maxX: G.width - (J ? z : 0),
        maxY: G.height,
        theme: T.A.theme,
        dockedRect: N.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: V,
        appContext: F,
        roundCorners: !Q,
        windowSize: G,
        inPopoutWindow: M,
        activityPIPWindow: Y,
        chatOpen: Z,
        callChatSidebarWidth: z,
    };
})(U);
