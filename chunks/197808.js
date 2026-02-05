"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(31728),
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
    g = n(205297),
    E = n(699426),
    A = n(923917),
    I = n(869146),
    T = n(544028),
    y = n(964404),
    S = n(806911),
    v = n(734057),
    C = n(334463),
    b = n(309010),
    N = n(531685),
    R = n(403362),
    O = n(652215),
    D = n(5867),
    L = n(806931),
    w = n(165610),
    x = n(315253);
let P = { [O.o1q.VIDEO]: S.A, [O.o1q.ACTIVITY]: d.A, [O.o1q.FRAME]: h.A, [O.o1q.HAVEN]: m.A },
    M = { minWidth: L.mn[L.R8.VIDEO], maxWidth: L.cF[L.R8.VIDEO] },
    k = [];
class U extends i.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: i,
                maxY: a,
                theme: s,
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
            y = !_ && T && p && I < 550;
        return (0, r.jsxs)(E.ic, {
            children: [
                (0, r.jsx)(g.A, {
                    pictureInPictureComponents: P,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: i,
                    maxY: a,
                    dockedRect: o,
                    theme: s,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: u,
                    resizeConfig: M,
                    getDockedRectPositionY: c,
                }),
                (0, r.jsx)(E.Md, { className: y ? x.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        s.tw(e, t);
    };
    handleWindowResize = (e) => {
        s.EB(e, L.R8.VIDEO);
    };
}
let G = a.Ay.connectStores([I.A, o.Ay, N.A, T.A, v.A, b.A, C.A, _.A, y.Ay, p.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: r = !1 } = e,
        i = I.A.getWindowOpen(O.MLl.CHANNEL_CALL_POPOUT),
        a = I.A.getWindowOpen(O.MLl.ACTIVITY_POPOUT),
        s = o.Ay.getCurrentEmbeddedActivity(),
        d = (0, u.H)(s?.location),
        h = null != s && !(0, c.A)(d, v.A, b.A),
        m = o.Ay.getActivityPanelMode(),
        g = h && m === D.Gd.PANEL,
        E = null != s && null != d && _.A.getSelectedParticipant(d)?.type === L.lp.ACTIVITY,
        S = p.A.getConnectedFrame(),
        x = p.A.getFrameLayoutMode() === w.y.FOCUSED,
        P = null != n,
        M = P ? I.A.getWindow(n) : null,
        U = !!P && I.A.isWindowFullScreen(n),
        G = N.A.windowSize();
    P && (G = null == M ? G : { width: M.innerWidth, height: M.innerHeight });
    let V = P ? O.BRT.POPOUT : O.BRT.APP,
        F = (e) => (P && (0, A.q)({ withTitleBar: r, isFullScreen: U }) ? e - (0, f.LI)({ isPopoutWindow: P }) : e);
    t =
        (null != s && a) || (P && h) || (P && null != S)
            ? null
            : P || !i || h || null != S
              ? null != s && g
                  ? (C.A.pipActivityWindow ?? C.A.pipVideoWindow)
                  : null != S && x
                    ? (C.A.pipFrameWindow ?? C.A.pipVideoWindow ?? C.A.pipActivityWindow)
                    : (C.A.pipHavenWindow ?? C.A.pipVideoWindow ?? C.A.pipActivityWindow ?? C.A.pipFrameWindow)
              : null;
    let B = Array.from(C.A.pipWindows.values()),
        j = C.A.pipWidth(L.R8.VIDEO),
        H = B.find((e) => e.component === O.o1q.VIDEO),
        Y = B.find((e) => e.component === O.o1q.ACTIVITY),
        W = B.find((e) => e.component === O.o1q.FRAME),
        K = [B.find((e) => e.component === O.o1q.HAVEN), H, Y, W].filter(R.Vq),
        z = y.Ay.callChatSidebarWidth,
        $ = b.A.getVoiceChannelId(),
        q = b.A.getChannelId() === $,
        Z = null != $ && _.A.getChatOpen($),
        Q = g || E,
        X = Q && null != s && (0, l.q)(s.applicationId),
        J = !Q && null != t && q && Z;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === K.length ? k : K,
        pipWidth: j,
        maxX: G.width - (J ? z : 0),
        maxY: G.height,
        theme: T.A.theme,
        dockedRect: C.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: F,
        appContext: V,
        roundCorners: !X,
        windowSize: G,
        inPopoutWindow: P,
        activityPIPWindow: Y,
        chatOpen: Z,
        callChatSidebarWidth: z,
    };
})(U);
