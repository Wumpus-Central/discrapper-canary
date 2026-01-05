n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(519938),
    s = n(317381),
    l = n(988980),
    c = n(16609),
    u = n(917107),
    d = n(866885),
    f = n(358221),
    p = n(950796),
    _ = n(591472),
    m = n(857096),
    h = n(113036),
    g = n(241915),
    E = n(522501),
    b = n(238246),
    y = n(928518),
    O = n(210887),
    v = n(740492),
    S = n(442917),
    I = n(592125),
    T = n(366050),
    C = n(944486),
    A = n(451478),
    N = n(823379),
    P = n(981631),
    R = n(918559),
    w = n(354459),
    D = n(408491),
    x = n(684692);
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
        [P.NYg.VIDEO]: S.Z,
        [P.NYg.ACTIVITY]: d.Z,
        [P.NYg.FRAME]: m.Z,
        [P.NYg.HAVEN]: h.Z,
    },
    M = {
        minWidth: w.Rv[w.cL.VIDEO],
        maxWidth: w.$i[w.cL.VIDEO],
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
                theme: o,
                dockedRect: s,
                appContext: l,
                roundCorners: c,
                getDockedRectPositionY: u,
                windowSize: d,
                inPopoutWindow: f,
                activityPIPWindow: p,
                chatOpen: _,
                callChatSidebarWidth: m,
            } = this.props,
            h = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            b = "" !== h ? parseInt(h, 10) : P.PrS,
            y = d.width - b - (_ ? m : 0),
            O = null != p,
            v = !f && O && _ && y < w.oo;
        return (0, r.jsxs)(E._X, {
            children: [
                (0, r.jsx)(g.Z, {
                    pictureInPictureComponents: j,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: i,
                    maxY: a,
                    dockedRect: s,
                    theme: o,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: c,
                    resizeConfig: M,
                    getDockedRectPositionY: u,
                }),
                (0, r.jsx)(E.mK, { className: v ? x.belowSidebar : void 0 }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "handleWindowMove", (e, t) => {
                o.Ao(e, t);
            }),
            L(this, "handleWindowResize", (e) => {
                o.d7(e, w.cL.VIDEO);
            });
    }
}
let G = a.ZP.connectStores([y.Z, s.ZP, A.Z, O.Z, I.Z, C.Z, T.Z, f.Z, v.ZP, _.Z], (e) => {
    var t, n, r, i, a, o, d, m;
    let h,
        { popoutWindowKey: g, popoutWindowHasTitleBar: E = !1 } = e,
        S = y.Z.getWindowOpen(P.KJ3.CHANNEL_CALL_POPOUT),
        x = y.Z.getWindowOpen(P.KJ3.ACTIVITY_POPOUT),
        L = s.ZP.getCurrentEmbeddedActivity(),
        j = (0, c.p)(null == L ? void 0 : L.location),
        M = null != L && !(0, u.Z)(j, I.Z, C.Z),
        U = s.ZP.getActivityPanelMode(),
        G = M && U === R.Ez.PANEL,
        Z = null != L && null != j && (null == (t = f.Z.getSelectedParticipant(j)) ? void 0 : t.type) === w.fO.ACTIVITY,
        F = _.Z.getConnectedFrame(),
        B = _.Z.getFrameLayoutMode() === D.U.FOCUSED,
        V = null != g,
        H = V ? y.Z.getWindow(g) : null,
        Y = !!V && y.Z.isWindowFullScreen(g),
        W = A.Z.windowSize();
    V &&
        (W =
            null == H
                ? W
                : {
                      width: H.innerWidth,
                      height: H.innerHeight,
                  });
    let K = V ? P.IlC.POPOUT : P.IlC.APP,
        z = (e) =>
            V &&
            (0, b.Y)({
                withTitleBar: E,
                isFullScreen: Y,
            })
                ? e - (0, p.Y7)({ isPopoutWindow: V })
                : e;
    h =
        (null != L && x) || (V && M) || (V && null != F)
            ? null
            : V || !S || M || null != F
              ? null != L && G
                  ? null != (n = T.Z.pipActivityWindow)
                      ? n
                      : T.Z.pipVideoWindow
                  : null != F && B
                    ? null != (i = null != (r = T.Z.pipFrameWindow) ? r : T.Z.pipVideoWindow)
                        ? i
                        : T.Z.pipActivityWindow
                    : null !=
                        (d =
                            null != (o = null != (a = T.Z.pipHavenWindow) ? a : T.Z.pipVideoWindow)
                                ? o
                                : T.Z.pipActivityWindow)
                      ? d
                      : T.Z.pipFrameWindow
              : null;
    let q = Array.from(T.Z.pipWindows.values()),
        Q = T.Z.pipWidth(w.cL.VIDEO),
        X = q.find((e) => e.component === P.NYg.VIDEO),
        J = q.find((e) => e.component === P.NYg.ACTIVITY),
        $ = q.find((e) => e.component === P.NYg.FRAME),
        ee = [q.find((e) => e.component === P.NYg.HAVEN), X, J, $].filter(N.lm),
        et = v.ZP.callChatSidebarWidth,
        en = C.Z.getVoiceChannelId(),
        er = C.Z.getChannelId() === en,
        ei = null != en && f.Z.getChatOpen(en),
        ea = G || Z,
        eo = ea && null != L && (0, l.q)(L.applicationId),
        es = !ea && null != h && er && ei;
    return {
        selectedPIPWindow: h,
        pipWindows: 0 === ee.length ? k : ee,
        pipWidth: Q,
        maxX: W.width - (es ? et : 0),
        maxY: W.height,
        theme: O.Z.theme,
        dockedRect: T.Z.getDockedRect(null != (m = null == h ? void 0 : h.id) ? m : ""),
        getDockedRectPositionY: z,
        appContext: K,
        roundCorners: !eo,
        windowSize: W,
        inPopoutWindow: V,
        activityPIPWindow: J,
        chatOpen: ei,
        callChatSidebarWidth: et,
    };
})(U);
