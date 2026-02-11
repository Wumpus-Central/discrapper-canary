"use strict";
n.d(t, { A: () => F });
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
    h = n(91242),
    p = n(210954),
    g = n(26113),
    E = n(205297),
    A = n(699426),
    I = n(923917),
    T = n(869146),
    y = n(544028),
    S = n(964404),
    v = n(806911),
    C = n(734057),
    b = n(334463),
    N = n(309010),
    R = n(531685),
    O = n(403362),
    D = n(652215),
    L = n(5867),
    w = n(806931),
    x = n(165610),
    P = n(315253);
let M = { [D.o1q.VIDEO]: v.A, [D.o1q.ACTIVITY]: d.A, [D.o1q.FRAME]: p.A, [D.o1q.HAVEN]: g.A },
    k = { minWidth: w.mn[w.R8.VIDEO], maxWidth: w.cF[w.R8.VIDEO] },
    U = [];
class G extends i.PureComponent {
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
                chatOpen: h,
                callChatSidebarWidth: p,
            } = this.props,
            g = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            I = "" !== g ? parseInt(g, 10) : D.MdR,
            T = d.width - I - (h ? p : 0),
            y = null != f,
            S = !_ && y && h && T < 550;
        return (0, r.jsxs)(A.ic, {
            children: [
                (0, r.jsx)(E.A, {
                    pictureInPictureComponents: M,
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
                    resizeConfig: k,
                    getDockedRectPositionY: c,
                }),
                (0, r.jsx)(A.Md, { className: S ? P.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        s.tw(e, t);
    };
    handleWindowResize = (e) => {
        s.EB(e, w.R8.VIDEO);
    };
}
let F = a.Ay.connectStores([T.A, o.Ay, R.A, y.A, C.A, N.A, b.A, _.A, S.Ay, h.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: r = !1 } = e,
        i = T.A.getWindowOpen(D.MLl.CHANNEL_CALL_POPOUT),
        a = T.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT),
        s = o.Ay.getCurrentEmbeddedActivity(),
        d = (0, u.H)(s?.location),
        p = null != s && !(0, c.A)(d, C.A, N.A),
        g = o.Ay.getActivityPanelMode(),
        E = p && g === L.Gd.PANEL,
        A = null != s && null != d && _.A.getSelectedParticipant(d)?.type === w.lp.ACTIVITY,
        v = h.A.getConnectedFrame(),
        P = h.A.getFrameLayoutMode() === x.y.FOCUSED,
        M = null != n,
        k = M ? T.A.getWindow(n) : null,
        G = !!M && T.A.isWindowFullScreen(n),
        F = R.A.windowSize();
    M && (F = null == k ? F : { width: k.innerWidth, height: k.innerHeight });
    let V = M ? D.BRT.POPOUT : D.BRT.APP,
        B = (e) => (M && (0, I.q)({ withTitleBar: r, isFullScreen: G }) ? e - (0, f.LI)({ isPopoutWindow: M }) : e);
    t =
        (null != s && a) || (M && p) || (M && null != v)
            ? null
            : M || !i || p || null != v
              ? null != s && E
                  ? (b.A.pipActivityWindow ?? b.A.pipVideoWindow)
                  : null != v && P
                    ? (b.A.pipFrameWindow ?? b.A.pipVideoWindow ?? b.A.pipActivityWindow)
                    : (b.A.pipHavenWindow ?? b.A.pipVideoWindow ?? b.A.pipActivityWindow ?? b.A.pipFrameWindow)
              : null;
    let j = Array.from(b.A.pipWindows.values()),
        H = b.A.pipWidth(w.R8.VIDEO),
        Y = j.find((e) => e.component === D.o1q.VIDEO),
        W = j.find((e) => e.component === D.o1q.ACTIVITY),
        K = j.find((e) => e.component === D.o1q.FRAME),
        $ = [j.find((e) => e.component === D.o1q.HAVEN), Y, W, K].filter(O.Vq),
        z = S.Ay.callChatSidebarWidth,
        q = N.A.getVoiceChannelId(),
        X = N.A.getChannelId() === q,
        Z = null != q && _.A.getChatOpen(q),
        Q = E || A,
        J = Q && null != s && (0, l.q)(s.applicationId),
        ee = !Q && null != t && X && Z;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === $.length ? U : $,
        pipWidth: H,
        maxX: F.width - (ee ? z : 0),
        maxY: F.height,
        theme: y.A.theme,
        dockedRect: b.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: B,
        appContext: V,
        roundCorners: !J,
        windowSize: F,
        inPopoutWindow: M,
        activityPIPWindow: W,
        chatOpen: Z,
        callChatSidebarWidth: z,
    };
})(G);
