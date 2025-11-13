n.d(t, { Z: () => U }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(519938),
    s = n(317381),
    l = n(988980),
    c = n(16609),
    u = n(917107),
    d = n(866885),
    f = n(358221),
    _ = n(950796),
    p = n(591472),
    h = n(857096),
    m = n(241915),
    g = n(522501),
    E = n(238246),
    b = n(928518),
    y = n(210887),
    O = n(740492),
    v = n(442917),
    I = n(592125),
    T = n(366050),
    S = n(944486),
    A = n(451478),
    C = n(823379),
    N = n(981631),
    R = n(918559),
    P = n(354459),
    D = n(408491),
    w = n(639965);
function x(e, t, n) {
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
let L = {
        [N.NYg.VIDEO]: v.Z,
        [N.NYg.ACTIVITY]: d.Z,
        [N.NYg.FRAME]: h.Z,
    },
    M = {
        minWidth: P.Rv[P.cL.VIDEO],
        maxWidth: P.$i[P.cL.VIDEO],
    },
    j = [];
class k extends i.PureComponent {
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
                activityPIPWindow: _,
                chatOpen: p,
                callChatSidebarWidth: h,
            } = this.props,
            E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            b = "" !== E ? parseInt(E, 10) : N.PrS,
            y = d.width - b - (p ? h : 0),
            O = null != _,
            v = !f && O && p && y < P.oo;
        return (0, r.jsxs)(g._X, {
            children: [
                (0, r.jsx)(m.Z, {
                    pictureInPictureComponents: L,
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
                (0, r.jsx)(g.mK, { className: v ? w.belowSidebar : void 0 }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "handleWindowMove", (e, t) => {
                o.Ao(e, t);
            }),
            x(this, "handleWindowResize", (e) => {
                o.d7(e, P.cL.VIDEO);
            });
    }
}
let U = a.ZP.connectStores([b.Z, s.ZP, A.Z, y.Z, I.Z, S.Z, T.Z, f.Z, O.ZP, p.Z], (e) => {
    var t, n, r, i, a, o, d;
    let h,
        { popoutWindowKey: m, popoutWindowHasTitleBar: g = !1 } = e,
        v = b.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
        w = b.Z.getWindowOpen(N.KJ3.ACTIVITY_POPOUT),
        x = s.ZP.getCurrentEmbeddedActivity(),
        L = (0, c.p)(null == x ? void 0 : x.location),
        M = null != x && !(0, u.Z)(L, I.Z, S.Z),
        k = s.ZP.getActivityPanelMode(),
        U = M && k === R.Ez.PANEL,
        G = null != x && null != L && (null == (t = f.Z.getSelectedParticipant(L)) ? void 0 : t.type) === P.fO.ACTIVITY,
        B = p.Z.getConnectedFrame(),
        Z = p.Z.getFrameLayoutMode() === D.U.FOCUSED,
        F = null != m,
        V = F ? b.Z.getWindow(m) : null,
        H = !!F && b.Z.isWindowFullScreen(m),
        Y = A.Z.windowSize();
    F &&
        (Y =
            null == V
                ? Y
                : {
                      width: V.innerWidth,
                      height: V.innerHeight,
                  });
    let W = F ? N.IlC.POPOUT : N.IlC.APP,
        K = (e) =>
            F &&
            (0, E.Y)({
                withTitleBar: g,
                isFullScreen: H,
            })
                ? e - (0, _.Y7)({ isPopoutWindow: F })
                : e;
    h =
        (null != x && w) || (F && M) || (F && null != B)
            ? null
            : F || !v || M || null != B
              ? null != x && U
                  ? null != (n = T.Z.pipActivityWindow)
                      ? n
                      : T.Z.pipVideoWindow
                  : null != B && Z
                    ? null != (i = null != (r = T.Z.pipFrameWindow) ? r : T.Z.pipVideoWindow)
                        ? i
                        : T.Z.pipActivityWindow
                    : null != (o = null != (a = T.Z.pipVideoWindow) ? a : T.Z.pipActivityWindow)
                      ? o
                      : T.Z.pipFrameWindow
              : null;
    let z = Array.from(T.Z.pipWindows.values()),
        q = T.Z.pipWidth(P.cL.VIDEO),
        X = z.find((e) => e.component === N.NYg.VIDEO),
        Q = z.find((e) => e.component === N.NYg.ACTIVITY),
        J = [X, Q, z.find((e) => e.component === N.NYg.FRAME)].filter(C.lm),
        $ = O.ZP.callChatSidebarWidth,
        ee = S.Z.getVoiceChannelId(),
        et = S.Z.getChannelId() === ee,
        en = null != ee && f.Z.getChatOpen(ee),
        er = U || G,
        ei = er && null != x && (0, l.q)(x.applicationId),
        ea = !er && null != h && et && en;
    return {
        selectedPIPWindow: h,
        pipWindows: 0 === J.length ? j : J,
        pipWidth: q,
        maxX: Y.width - (ea ? $ : 0),
        maxY: Y.height,
        theme: y.Z.theme,
        dockedRect: T.Z.getDockedRect(null != (d = null == h ? void 0 : h.id) ? d : ""),
        getDockedRectPositionY: K,
        appContext: W,
        roundCorners: !ei,
        windowSize: Y,
        inPopoutWindow: F,
        activityPIPWindow: Q,
        chatOpen: en,
        callChatSidebarWidth: $,
    };
})(k);
