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
    E = n(26113),
    m = n(205297),
    g = n(699426),
    A = n(923917),
    I = n(869146),
    T = n(544028),
    S = n(964404),
    y = n(806911),
    N = n(734057),
    v = n(334463),
    C = n(309010),
    O = n(531685),
    R = n(403362),
    b = n(652215),
    D = n(5867),
    L = n(806931),
    w = n(165610),
    M = n(201181);
let P = { [b.o1q.VIDEO]: y.A, [b.o1q.ACTIVITY]: d.A, [b.o1q.FRAME]: h.A, [b.o1q.HAVEN]: E.A },
    x = { minWidth: L.mn[L.R8.VIDEO], maxWidth: L.cF[L.R8.VIDEO] },
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
            E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            A = "" !== E ? parseInt(E, 10) : b.MdR,
            I = d.width - A - (p ? h : 0);
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
                    resizeConfig: x,
                    getDockedRectPositionY: c,
                }),
                (0, r.jsx)(g.Md, { className: !_ && null != f && p && I < 550 ? M.ah : void 0 }),
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
let G = s.Ay.connectStores([I.A, o.Ay, O.A, T.A, N.A, C.A, v.A, _.A, S.Ay, p.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: r = !1 } = e,
        i = I.A.getWindowOpen(b.MLl.CHANNEL_CALL_POPOUT),
        s = I.A.getWindowOpen(b.MLl.ACTIVITY_POPOUT),
        a = o.Ay.getCurrentEmbeddedActivity(),
        d = (0, u.H)(a?.location),
        h = null != a && !(0, c.A)(d, N.A, C.A),
        E = o.Ay.getActivityPanelMode(),
        m = h && E === D.Gd.PANEL,
        g = null != a && null != d && _.A.getSelectedParticipant(d)?.type === L.lp.ACTIVITY,
        y = p.A.getConnectedFrame(),
        M = p.A.getFrameLayoutMode() === w.y.FOCUSED,
        P = null != n,
        x = P ? I.A.getWindow(n) : null,
        U = !!P && I.A.isWindowFullScreen(n),
        G = O.A.windowSize();
    P && (G = null == x ? G : { width: x.innerWidth, height: x.innerHeight });
    let F = P ? b.BRT.POPOUT : b.BRT.APP;
    t =
        (null != a && s) || (P && h) || (P && null != y)
            ? null
            : P || !i || h || null != y
              ? null != a && m
                  ? (v.A.pipActivityWindow ?? v.A.pipVideoWindow)
                  : null != y && M
                    ? (v.A.pipFrameWindow ?? v.A.pipVideoWindow ?? v.A.pipActivityWindow)
                    : (v.A.pipHavenWindow ?? v.A.pipVideoWindow ?? v.A.pipActivityWindow ?? v.A.pipFrameWindow)
              : null;
    let V = Array.from(v.A.pipWindows.values()),
        B = v.A.pipWidth(L.R8.VIDEO),
        H = V.find((e) => e.component === b.o1q.VIDEO),
        j = V.find((e) => e.component === b.o1q.ACTIVITY),
        Y = V.find((e) => e.component === b.o1q.FRAME),
        W = [V.find((e) => e.component === b.o1q.HAVEN), H, j, Y].filter(R.Vq),
        K = S.Ay.callChatSidebarWidth,
        $ = C.A.getVoiceChannelId(),
        z = C.A.getChannelId() === $,
        q = null != $ && _.A.getChatOpen($),
        X = m || g,
        Q = X && null != a && (0, l.q)(a.applicationId),
        Z = !X && null != t && z;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === W.length ? k : W,
        pipWidth: B,
        maxX: G.width - (Z && q ? K : 0),
        maxY: G.height,
        theme: T.A.theme,
        dockedRect: v.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: (e) =>
            P && (0, A.q)({ withTitleBar: r, isFullScreen: U }) ? e - (0, f.LI)({ isPopoutWindow: P }) : e,
        appContext: F,
        roundCorners: !Q,
        windowSize: G,
        inPopoutWindow: P,
        activityPIPWindow: j,
        chatOpen: q,
        callChatSidebarWidth: K,
    };
})(U);
