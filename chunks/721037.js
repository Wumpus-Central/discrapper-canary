n.d(t, { Z: () => B }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(519938),
    s = n(317381),
    l = n(988980),
    c = n(16609),
    u = n(917107),
    d = n(866885),
    f = n(358221),
    _ = n(677601),
    p = n(950796),
    h = n(591472),
    m = n(857096),
    g = n(241915),
    E = n(522501),
    b = n(238246),
    y = n(928518),
    O = n(819439),
    v = n(210887),
    I = n(740492),
    T = n(442917),
    S = n(592125),
    A = n(366050),
    N = n(944486),
    C = n(451478),
    R = n(823379),
    P = n(981631),
    w = n(918559),
    D = n(354459),
    L = n(408491),
    x = n(639965);
function M(e, t, n) {
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
        [P.NYg.VIDEO]: T.Z,
        [P.NYg.ACTIVITY]: d.Z,
        [P.NYg.FRAME]: m.Z,
    },
    k = {
        minWidth: D.Rv[D.cL.VIDEO],
        maxWidth: D.$i[D.cL.VIDEO],
    },
    U = [];
class G extends i.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: i,
                maxY: o,
                theme: a,
                dockedRect: s,
                appContext: l,
                roundCorners: c,
                getDockedRectPositionY: u,
                windowSize: d,
                inPopoutWindow: f,
                activityPIPWindow: p,
                chatOpen: h,
                callChatSidebarWidth: m,
            } = this.props,
            b = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            y = "" !== b ? parseInt(b, 10) : P.PrS,
            O = d.width - y - (h ? m : 0),
            v = null != p,
            I = !f && v && h && O < _.o;
        return (0, r.jsxs)(E._X, {
            children: [
                (0, r.jsx)(g.Z, {
                    pictureInPictureComponents: j,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: i,
                    maxY: o,
                    dockedRect: s,
                    theme: a,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: c,
                    resizeConfig: k,
                    getDockedRectPositionY: u,
                }),
                (0, r.jsx)(E.mK, { className: I ? x.belowSidebar : void 0 }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            M(this, "handleWindowMove", (e, t) => {
                a.Ao(e, t);
            }),
            M(this, "handleWindowResize", (e) => {
                a.d7(e, D.cL.VIDEO);
            });
    }
}
let B = o.ZP.connectStores([y.Z, s.ZP, C.Z, v.Z, S.Z, N.Z, A.Z, f.Z, I.ZP, h.Z], (e) => {
    var t, n, r, i, o, a, d;
    let _,
        { popoutWindowKey: m, popoutWindowHasTitleBar: g = !1 } = e,
        E = y.Z.getWindowOpen(P.KJ3.CHANNEL_CALL_POPOUT),
        T = y.Z.getWindowOpen(P.KJ3.ACTIVITY_POPOUT),
        x = s.ZP.getCurrentEmbeddedActivity(),
        M = (0, c.p)(null == x ? void 0 : x.location),
        j = null != x && !(0, u.Z)(M, S.Z, N.Z),
        k = s.ZP.getActivityPanelMode(),
        G = j && k === w.Ez.PANEL,
        B = null != x && null != M && (null == (t = f.Z.getSelectedParticipant(M)) ? void 0 : t.type) === D.fO.ACTIVITY,
        Z = h.Z.getConnectedFrame(),
        F = h.Z.getFrameLayoutMode() === L.U.FOCUSED,
        V = null != m,
        H = V ? y.Z.getWindow(m) : null,
        Y = !!V && y.Z.isWindowFullScreen(m),
        W = C.Z.windowSize();
    V &&
        (W =
            null == H
                ? W
                : {
                      width: H.innerWidth,
                      height: H.innerHeight,
                  });
    let K = V ? P.IlC.POPOUT : P.IlC.APP,
        z = (e) => {
            if (
                V &&
                (0, b.Y)({
                    withTitleBar: g,
                    isFullScreen: Y,
                })
            ) {
                let t = (0, O.Q)({ location: "PictureInPicture" });
                return (
                    e -
                    (0, p.Y7)({
                        isPopoutWindow: V,
                        isSearchDesktopTopLevelEnabled: t,
                    })
                );
            }
            return e;
        };
    _ =
        (null != x && T) || (V && j)
            ? null
            : V || !E || j
              ? null != x && G
                  ? null != (n = A.Z.pipActivityWindow)
                      ? n
                      : A.Z.pipVideoWindow
                  : null != Z && F
                    ? null != (i = null != (r = A.Z.pipFrameWindow) ? r : A.Z.pipVideoWindow)
                        ? i
                        : A.Z.pipActivityWindow
                    : null != (a = null != (o = A.Z.pipVideoWindow) ? o : A.Z.pipActivityWindow)
                      ? a
                      : A.Z.pipFrameWindow
              : null;
    let q = Array.from(A.Z.pipWindows.values()),
        X = A.Z.pipWidth(D.cL.VIDEO),
        Q = q.find((e) => e.component === P.NYg.VIDEO),
        J = q.find((e) => e.component === P.NYg.ACTIVITY),
        $ = [Q, J, q.find((e) => e.component === P.NYg.FRAME)].filter(R.lm),
        ee = I.ZP.callChatSidebarWidth,
        et = N.Z.getVoiceChannelId(),
        en = N.Z.getChannelId() === et,
        er = null != et && f.Z.getChatOpen(et),
        ei = G || B,
        eo = ei && null != x && (0, l.q)(x.applicationId),
        ea = !ei && null != _ && en && er;
    return {
        selectedPIPWindow: _,
        pipWindows: 0 === $.length ? U : $,
        pipWidth: X,
        maxX: W.width - (ea ? ee : 0),
        maxY: W.height,
        theme: v.Z.theme,
        dockedRect: A.Z.getDockedRect(null != (d = null == _ ? void 0 : _.id) ? d : ""),
        getDockedRectPositionY: z,
        appContext: K,
        roundCorners: !eo,
        windowSize: W,
        inPopoutWindow: V,
        activityPIPWindow: J,
        chatOpen: er,
        callChatSidebarWidth: ee,
    };
})(G);
