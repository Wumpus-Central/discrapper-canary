n.d(t, { A: () => G });
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
    f = n(205297),
    I = n(699426),
    p = n(979186),
    T = n(869146),
    m = n(964404),
    g = n(806911),
    S = n(734057),
    N = n(334463),
    C = n(309010),
    O = n(531685),
    R = n(403362),
    L = n(652215),
    y = n(5867),
    D = n(806931),
    v = n(165610),
    b = n(155819);
let M = { [L.o1q.VIDEO]: g.A, [L.o1q.ACTIVITY]: u.A, [L.o1q.FRAME]: h.A },
    P = { minWidth: D.mn[D.R8.VIDEO], maxWidth: D.cF[D.R8.VIDEO] },
    U = [];
class w extends r.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: r,
                maxY: a,
                dockedRect: s,
                appContext: l,
                roundCorners: o,
                getDockedRectPositionY: d,
                windowSize: c,
                inPopoutWindow: u,
                activityPIPWindow: _,
                chatOpen: E,
                callChatSidebarWidth: A,
            } = this.props,
            h = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            p = "" !== h ? parseInt(h, 10) : L.MdR,
            T = c.width - p - (E ? A : 0);
        return (0, i.jsxs)(I.ic, {
            children: [
                (0, i.jsx)(f.A, {
                    pictureInPictureComponents: M,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: r,
                    maxY: a,
                    dockedRect: s,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: o,
                    resizeConfig: P,
                    getDockedRectPositionY: d,
                }),
                (0, i.jsx)(I.Md, { className: !u && null != _ && E && T < 550 ? b.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        s.tw(e, t);
    };
    handleWindowResize = (e) => {
        s.EB(e, D.R8.VIDEO);
    };
}
let G = a.Ay.connectStores([T.A, l.Ay, O.A, S.A, C.Ay, N.A, _.A, m.Ay, A.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: i = !1 } = e,
        r = T.A.getWindowOpen(L.MLl.CHANNEL_CALL_POPOUT),
        a = T.A.getWindowOpen(L.MLl.ACTIVITY_POPOUT),
        s = l.Ay.getCurrentEmbeddedActivity(),
        u = (0, d.H)(s?.location),
        h = null != s && !(0, c.A)(u, S.A, C.Ay),
        f = l.Ay.getActivityPanelMode(),
        I = h && f === y.Gd.PANEL,
        g = null != s && null != u && _.A.getSelectedParticipant(u)?.type === D.lp.ACTIVITY,
        b = (0, v.ny)(A.A.getMainFrame()),
        M = b?.data.layoutMode === v.y0.FOCUSED,
        P = null != n,
        w = P ? T.A.getWindow(n) : null,
        G = !!P && T.A.isWindowFullScreen(n),
        x = O.A.windowSize();
    P && (x = null == w ? x : { width: w.innerWidth, height: w.innerHeight });
    let k = P ? L.BRT.POPOUT : L.BRT.APP;
    t =
        (null != s && a) || (P && h) || (P && null != b)
            ? null
            : P || !r || h || null != b
              ? null != s && I
                  ? (N.A.pipActivityWindow ?? N.A.pipVideoWindow)
                  : null != b && M
                    ? (N.A.pipFrameWindow ?? N.A.pipVideoWindow ?? N.A.pipActivityWindow)
                    : (N.A.pipVideoWindow ?? N.A.pipActivityWindow ?? N.A.pipFrameWindow)
              : null;
    let F = Array.from(N.A.pipWindows.values()),
        B = N.A.pipWidth(D.R8.VIDEO),
        V = F.find((e) => e.component === L.o1q.VIDEO),
        H = F.find((e) => e.component === L.o1q.ACTIVITY),
        j = [V, H, F.find((e) => e.component === L.o1q.FRAME)].filter(R.Vq),
        W = m.Ay.callChatSidebarWidth,
        Y = C.Ay.getVoiceChannelId(),
        K = C.Ay.getChannelId() === Y,
        $ = null != Y && _.A.getChatOpen(Y),
        z = I || g,
        X = z && null != s && (0, o.q)(s.applicationId),
        Z = !z && null != t && K;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === j.length ? U : j,
        pipWidth: B,
        maxX: x.width - (Z && $ ? W : 0),
        maxY: x.height,
        dockedRect: N.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: function (e) {
            return P && (0, p.q)({ withTitleBar: i, isFullScreen: G }) ? e - (0, E.LI)({ isPopoutWindow: P }) : e;
        },
        appContext: k,
        roundCorners: !X,
        windowSize: x,
        inPopoutWindow: P,
        activityPIPWindow: H,
        chatOpen: $,
        callChatSidebarWidth: W,
    };
})(w);
