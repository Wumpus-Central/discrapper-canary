n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(31728),
    o = n(933958),
    l = n(216418),
    c = n(969151),
    u = n(108959),
    d = n(449571),
    f = n(313961),
    p = n(71855),
    _ = n(91242),
    h = n(210954),
    m = n(26113),
    g = n(205297),
    E = n(699426),
    b = n(923917),
    y = n(869146),
    O = n(544028),
    A = n(964404),
    v = n(806911),
    S = n(734057),
    I = n(334463),
    T = n(309010),
    C = n(531685),
    N = n(403362),
    R = n(652215),
    w = n(5867),
    P = n(806931),
    D = n(165610),
    x = n(315253);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let j = {
        [R.o1q.VIDEO]: v.A,
        [R.o1q.ACTIVITY]: d.A,
        [R.o1q.FRAME]: h.A,
        [R.o1q.HAVEN]: m.A,
    },
    M = {
        minWidth: P.mn[P.R8.VIDEO],
        maxWidth: P.cF[P.R8.VIDEO],
    },
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
                roundCorners: c,
                getDockedRectPositionY: u,
                windowSize: d,
                inPopoutWindow: f,
                activityPIPWindow: p,
                chatOpen: _,
                callChatSidebarWidth: h,
            } = this.props,
            m = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            b = "" !== m ? parseInt(m, 10) : R.MdR,
            y = d.width - b - (_ ? h : 0),
            O = null != p,
            A = !f && O && _ && y < 550;
        return (0, r.jsxs)(E.ic, {
            children: [
                (0, r.jsx)(g.A, {
                    pictureInPictureComponents: j,
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
                    roundCorners: c,
                    resizeConfig: M,
                    getDockedRectPositionY: u,
                }),
                (0, r.jsx)(E.Md, { className: A ? x.ah : void 0 }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "handleWindowMove", (e, t) => {
                s.tw(e, t);
            }),
            L(this, "handleWindowResize", (e) => {
                s.EB(e, P.R8.VIDEO);
            });
    }
}
let G = a.Ay.connectStores([y.A, o.Ay, C.A, O.A, S.A, T.A, I.A, f.A, A.Ay, _.A], (e) => {
    var t, n, r, i, a, s, d, h;
    let m,
        { popoutWindowKey: g, popoutWindowHasTitleBar: E = !1 } = e,
        v = y.A.getWindowOpen(R.MLl.CHANNEL_CALL_POPOUT),
        x = y.A.getWindowOpen(R.MLl.ACTIVITY_POPOUT),
        L = o.Ay.getCurrentEmbeddedActivity(),
        j = (0, c.H)(null == L ? void 0 : L.location),
        M = null != L && !(0, u.A)(j, S.A, T.A),
        U = o.Ay.getActivityPanelMode(),
        G = M && U === w.Gd.PANEL,
        V = null != L && null != j && (null == (n = f.A.getSelectedParticipant(j)) ? void 0 : n.type) === P.lp.ACTIVITY,
        F = _.A.getConnectedFrame(),
        B = _.A.getFrameLayoutMode() === D.y.FOCUSED,
        H = null != g,
        Y = H ? y.A.getWindow(g) : null,
        W = !!H && y.A.isWindowFullScreen(g),
        K = C.A.windowSize();
    H &&
        (K =
            null == Y
                ? K
                : {
                      width: Y.innerWidth,
                      height: Y.innerHeight,
                  });
    let z = H ? R.BRT.POPOUT : R.BRT.APP,
        q = (e) =>
            H &&
            (0, b.q)({
                withTitleBar: E,
                isFullScreen: W,
            })
                ? e - (0, p.LI)({ isPopoutWindow: H })
                : e;
    m =
        (null != L && x) || (H && M) || (H && null != F)
            ? null
            : H || !v || M || null != F
              ? null != L && G
                  ? null != (r = I.A.pipActivityWindow)
                      ? r
                      : I.A.pipVideoWindow
                  : null != F && B
                    ? null != (i = null != (a = I.A.pipFrameWindow) ? a : I.A.pipVideoWindow)
                        ? i
                        : I.A.pipActivityWindow
                    : null !=
                        (s =
                            null != (d = null != (h = I.A.pipHavenWindow) ? h : I.A.pipVideoWindow)
                                ? d
                                : I.A.pipActivityWindow)
                      ? s
                      : I.A.pipFrameWindow
              : null;
    let X = Array.from(I.A.pipWindows.values()),
        Z = I.A.pipWidth(P.R8.VIDEO),
        Q = X.find((e) => e.component === R.o1q.VIDEO),
        $ = X.find((e) => e.component === R.o1q.ACTIVITY),
        J = X.find((e) => e.component === R.o1q.FRAME),
        ee = [X.find((e) => e.component === R.o1q.HAVEN), Q, $, J].filter(N.Vq),
        et = A.Ay.callChatSidebarWidth,
        en = T.A.getVoiceChannelId(),
        er = T.A.getChannelId() === en,
        ei = null != en && f.A.getChatOpen(en),
        ea = G || V,
        es = ea && null != L && (0, l.q)(L.applicationId),
        eo = !ea && null != m && er && ei;
    return {
        selectedPIPWindow: m,
        pipWindows: 0 === ee.length ? k : ee,
        pipWidth: Z,
        maxX: K.width - (eo ? et : 0),
        maxY: K.height,
        theme: O.A.theme,
        dockedRect: I.A.getDockedRect(null != (t = null == m ? void 0 : m.id) ? t : ""),
        getDockedRectPositionY: q,
        appContext: z,
        roundCorners: !es,
        windowSize: K,
        inPopoutWindow: H,
        activityPIPWindow: $,
        chatOpen: ei,
        callChatSidebarWidth: et,
    };
})(U);
