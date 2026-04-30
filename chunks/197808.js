"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(31728),
    o = n(933958),
    l = n(216418),
    u = n(969151),
    c = n(108959),
    d = n(449571),
    _ = n(313961),
    f = n(71855),
    h = n(91242),
    p = n(210954),
    E = n(26113),
    m = n(205297),
    g = n(699426),
    A = n(979186),
    I = n(869146),
    T = n(363195),
    S = n(964404),
    N = n(806911),
    y = n(734057),
    C = n(334463),
    v = n(309010),
    O = n(531685),
    R = n(403362),
    b = n(652215),
    D = n(5867),
    L = n(806931),
    w = n(165610),
    M = n(201181);
let P = { [b.o1q.VIDEO]: N.A, [b.o1q.ACTIVITY]: d.A, [b.o1q.FRAME]: p.A, [b.o1q.HAVEN]: E.A },
    x = { minWidth: L.mn[L.R8.VIDEO], maxWidth: L.cF[L.R8.VIDEO] },
    U = [];
class k extends r.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: r,
                maxY: s,
                theme: a,
                dockedRect: o,
                appContext: l,
                roundCorners: u,
                getDockedRectPositionY: c,
                windowSize: d,
                inPopoutWindow: _,
                activityPIPWindow: f,
                chatOpen: h,
                callChatSidebarWidth: p,
            } = this.props,
            E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            A = "" !== E ? parseInt(E, 10) : b.MdR,
            I = d.width - A - (h ? p : 0);
        return (0, i.jsxs)(g.ic, {
            children: [
                (0, i.jsx)(m.A, {
                    pictureInPictureComponents: P,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: r,
                    maxY: s,
                    dockedRect: o,
                    theme: a,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: u,
                    resizeConfig: x,
                    getDockedRectPositionY: c,
                }),
                (0, i.jsx)(g.Md, { className: !_ && null != f && h && I < 550 ? M.ah : void 0 }),
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
let G = s.Ay.connectStores([I.A, o.Ay, O.A, T.A, y.A, v.A, C.A, _.A, S.Ay, h.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: i = !1 } = e,
        r = I.A.getWindowOpen(b.MLl.CHANNEL_CALL_POPOUT),
        s = I.A.getWindowOpen(b.MLl.ACTIVITY_POPOUT),
        a = o.Ay.getCurrentEmbeddedActivity(),
        d = (0, u.H)(a?.location),
        p = null != a && !(0, c.A)(d, y.A, v.A),
        E = o.Ay.getActivityPanelMode(),
        m = p && E === D.Gd.PANEL,
        g = null != a && null != d && _.A.getSelectedParticipant(d)?.type === L.lp.ACTIVITY,
        N = h.A.getConnectedFrame(),
        M = h.A.getFrameLayoutMode() === w.y.FOCUSED,
        P = null != n,
        x = P ? I.A.getWindow(n) : null,
        k = !!P && I.A.isWindowFullScreen(n),
        G = O.A.windowSize();
    P && (G = null == x ? G : { width: x.innerWidth, height: x.innerHeight });
    let F = P ? b.BRT.POPOUT : b.BRT.APP;
    t =
        (null != a && s) || (P && p) || (P && null != N)
            ? null
            : P || !r || p || null != N
              ? null != a && m
                  ? (C.A.pipActivityWindow ?? C.A.pipVideoWindow)
                  : null != N && M
                    ? (C.A.pipFrameWindow ?? C.A.pipVideoWindow ?? C.A.pipActivityWindow)
                    : (C.A.pipHavenWindow ?? C.A.pipVideoWindow ?? C.A.pipActivityWindow ?? C.A.pipFrameWindow)
              : null;
    let V = Array.from(C.A.pipWindows.values()),
        B = C.A.pipWidth(L.R8.VIDEO),
        H = V.find((e) => e.component === b.o1q.VIDEO),
        j = V.find((e) => e.component === b.o1q.ACTIVITY),
        Y = V.find((e) => e.component === b.o1q.FRAME),
        W = [V.find((e) => e.component === b.o1q.HAVEN), H, j, Y].filter(R.Vq),
        K = S.Ay.callChatSidebarWidth,
        z = v.A.getVoiceChannelId(),
        $ = v.A.getChannelId() === z,
        q = null != z && _.A.getChatOpen(z),
        Z = m || g,
        X = Z && null != a && (0, l.q)(a.applicationId),
        Q = !Z && null != t && $;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === W.length ? U : W,
        pipWidth: B,
        maxX: G.width - (Q && q ? K : 0),
        maxY: G.height,
        theme: T.A.theme,
        dockedRect: C.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: (e) =>
            P && (0, A.q)({ withTitleBar: i, isFullScreen: k }) ? e - (0, f.LI)({ isPopoutWindow: P }) : e,
        appContext: F,
        roundCorners: !X,
        windowSize: G,
        inPopoutWindow: P,
        activityPIPWindow: j,
        chatOpen: q,
        callChatSidebarWidth: K,
    };
})(k);
