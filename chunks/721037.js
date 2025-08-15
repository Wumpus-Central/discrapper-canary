n.d(t, { Z: () => G }), n(388685);
var r = n(255367),
    i = n(73800),
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
    y = n(819439),
    O = n(210887),
    v = n(740492),
    I = n(442917),
    T = n(592125),
    S = n(366050),
    A = n(944486),
    N = n(451478),
    C = n(823379),
    R = n(981631),
    P = n(918559),
    w = n(354459),
    D = n(408491),
    L = n(639965);
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
let M = {
        [R.NYg.VIDEO]: I.Z,
        [R.NYg.ACTIVITY]: d.Z,
        [R.NYg.FRAME]: h.Z,
    },
    k = {
        minWidth: w.Rv[w.cL.VIDEO],
        maxWidth: w.$i[w.cL.VIDEO],
    },
    j = [];
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
                activityPIPWindow: _,
                chatOpen: p,
                callChatSidebarWidth: h,
            } = this.props,
            E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            b = "" !== E ? parseInt(E, 10) : R.PrS,
            y = d.width - b - (p ? h : 0),
            O = null != _,
            v = !f && O && p && y < w.oo;
        return (0, r.jsxs)(g._X, {
            children: [
                (0, r.jsx)(m.Z, {
                    pictureInPictureComponents: M,
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
                    resizeConfig: k,
                    getDockedRectPositionY: u,
                }),
                (0, r.jsx)(g.mK, { className: v ? L.belowSidebar : void 0 }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "handleWindowMove", (e, t) => {
                o.Ao(e, t);
            }),
            x(this, "handleWindowResize", (e) => {
                o.d7(e, w.cL.VIDEO);
            });
    }
}
let G = a.ZP.connectStores([b.Z, s.ZP, N.Z, O.Z, T.Z, A.Z, S.Z, f.Z, v.ZP, p.Z], (e) => {
    var t, n, r, i, a, o, d;
    let h,
        { popoutWindowKey: m, popoutWindowHasTitleBar: g = !1 } = e,
        I = b.Z.getWindowOpen(R.KJ3.CHANNEL_CALL_POPOUT),
        L = b.Z.getWindowOpen(R.KJ3.ACTIVITY_POPOUT),
        x = s.ZP.getCurrentEmbeddedActivity(),
        M = (0, c.p)(null == x ? void 0 : x.location),
        k = null != x && !(0, u.Z)(M, T.Z, A.Z),
        U = s.ZP.getActivityPanelMode(),
        G = k && U === P.Ez.PANEL,
        B = null != x && null != M && (null == (t = f.Z.getSelectedParticipant(M)) ? void 0 : t.type) === w.fO.ACTIVITY,
        V = p.Z.getConnectedFrame(),
        F = p.Z.getFrameLayoutMode() === D.U.FOCUSED,
        Z = null != m,
        H = Z ? b.Z.getWindow(m) : null,
        Y = !!Z && b.Z.isWindowFullScreen(m),
        W = N.Z.windowSize();
    Z &&
        (W =
            null == H
                ? W
                : {
                      width: H.innerWidth,
                      height: H.innerHeight,
                  });
    let K = Z ? R.IlC.POPOUT : R.IlC.APP,
        z = (e) => {
            if (
                Z &&
                (0, E.Y)({
                    withTitleBar: g,
                    isFullScreen: Y,
                })
            ) {
                let t = (0, y.Q)({ location: "PictureInPicture" });
                return (
                    e -
                    (0, _.Y7)({
                        isPopoutWindow: Z,
                        isSearchDesktopTopLevelEnabled: t,
                    })
                );
            }
            return e;
        };
    h =
        (null != x && L) || (Z && k)
            ? null
            : Z || !I || k
              ? null != x && G
                  ? null != (n = S.Z.pipActivityWindow)
                      ? n
                      : S.Z.pipVideoWindow
                  : null != V && F
                    ? null != (i = null != (r = S.Z.pipFrameWindow) ? r : S.Z.pipVideoWindow)
                        ? i
                        : S.Z.pipActivityWindow
                    : null != (o = null != (a = S.Z.pipVideoWindow) ? a : S.Z.pipActivityWindow)
                      ? o
                      : S.Z.pipFrameWindow
              : null;
    let q = Array.from(S.Z.pipWindows.values()),
        X = S.Z.pipWidth(w.cL.VIDEO),
        Q = q.find((e) => e.component === R.NYg.VIDEO),
        J = q.find((e) => e.component === R.NYg.ACTIVITY),
        $ = [Q, J, q.find((e) => e.component === R.NYg.FRAME)].filter(C.lm),
        ee = v.ZP.callChatSidebarWidth,
        et = A.Z.getVoiceChannelId(),
        en = A.Z.getChannelId() === et,
        er = null != et && f.Z.getChatOpen(et),
        ei = G || B,
        ea = ei && null != x && (0, l.q)(x.applicationId),
        eo = !ei && null != h && en && er;
    return {
        selectedPIPWindow: h,
        pipWindows: 0 === $.length ? j : $,
        pipWidth: X,
        maxX: W.width - (eo ? ee : 0),
        maxY: W.height,
        theme: O.Z.theme,
        dockedRect: S.Z.getDockedRect(null != (d = null == h ? void 0 : h.id) ? d : ""),
        getDockedRectPositionY: z,
        appContext: K,
        roundCorners: !ea,
        windowSize: W,
        inPopoutWindow: Z,
        activityPIPWindow: J,
        chatOpen: er,
        callChatSidebarWidth: ee,
    };
})(U);
