n.d(t, { Z: () => U }), n(388685);
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
    h = n(241915),
    g = n(522501),
    E = n(238246),
    b = n(928518),
    y = n(210887),
    O = n(740492),
    v = n(442917),
    S = n(592125),
    I = n(366050),
    T = n(944486),
    C = n(451478),
    A = n(823379),
    N = n(981631),
    P = n(918559),
    R = n(354459),
    w = n(408491),
    D = n(684692);
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
        [N.NYg.FRAME]: m.Z,
    },
    j = {
        minWidth: R.Rv[R.cL.VIDEO],
        maxWidth: R.$i[R.cL.VIDEO],
    },
    M = [];
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
                activityPIPWindow: p,
                chatOpen: _,
                callChatSidebarWidth: m,
            } = this.props,
            E = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            b = "" !== E ? parseInt(E, 10) : N.PrS,
            y = d.width - b - (_ ? m : 0),
            O = null != p,
            v = !f && O && _ && y < R.oo;
        return (0, r.jsxs)(g._X, {
            children: [
                (0, r.jsx)(h.Z, {
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
                    resizeConfig: j,
                    getDockedRectPositionY: u,
                }),
                (0, r.jsx)(g.mK, { className: v ? D.belowSidebar : void 0 }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "handleWindowMove", (e, t) => {
                o.Ao(e, t);
            }),
            x(this, "handleWindowResize", (e) => {
                o.d7(e, R.cL.VIDEO);
            });
    }
}
let U = a.ZP.connectStores([b.Z, s.ZP, C.Z, y.Z, S.Z, T.Z, I.Z, f.Z, O.ZP, _.Z], (e) => {
    var t, n, r, i, a, o, d;
    let m,
        { popoutWindowKey: h, popoutWindowHasTitleBar: g = !1 } = e,
        v = b.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
        D = b.Z.getWindowOpen(N.KJ3.ACTIVITY_POPOUT),
        x = s.ZP.getCurrentEmbeddedActivity(),
        L = (0, c.p)(null == x ? void 0 : x.location),
        j = null != x && !(0, u.Z)(L, S.Z, T.Z),
        k = s.ZP.getActivityPanelMode(),
        U = j && k === P.Ez.PANEL,
        G = null != x && null != L && (null == (t = f.Z.getSelectedParticipant(L)) ? void 0 : t.type) === R.fO.ACTIVITY,
        Z = _.Z.getConnectedFrame(),
        F = _.Z.getFrameLayoutMode() === w.U.FOCUSED,
        B = null != h,
        V = B ? b.Z.getWindow(h) : null,
        H = !!B && b.Z.isWindowFullScreen(h),
        Y = C.Z.windowSize();
    B &&
        (Y =
            null == V
                ? Y
                : {
                      width: V.innerWidth,
                      height: V.innerHeight,
                  });
    let W = B ? N.IlC.POPOUT : N.IlC.APP,
        K = (e) =>
            B &&
            (0, E.Y)({
                withTitleBar: g,
                isFullScreen: H,
            })
                ? e - (0, p.Y7)({ isPopoutWindow: B })
                : e;
    m =
        (null != x && D) || (B && j) || (B && null != Z)
            ? null
            : B || !v || j || null != Z
              ? null != x && U
                  ? null != (n = I.Z.pipActivityWindow)
                      ? n
                      : I.Z.pipVideoWindow
                  : null != Z && F
                    ? null != (i = null != (r = I.Z.pipFrameWindow) ? r : I.Z.pipVideoWindow)
                        ? i
                        : I.Z.pipActivityWindow
                    : null != (o = null != (a = I.Z.pipVideoWindow) ? a : I.Z.pipActivityWindow)
                      ? o
                      : I.Z.pipFrameWindow
              : null;
    let z = Array.from(I.Z.pipWindows.values()),
        q = I.Z.pipWidth(R.cL.VIDEO),
        Q = z.find((e) => e.component === N.NYg.VIDEO),
        X = z.find((e) => e.component === N.NYg.ACTIVITY),
        J = [Q, X, z.find((e) => e.component === N.NYg.FRAME)].filter(A.lm),
        $ = O.ZP.callChatSidebarWidth,
        ee = T.Z.getVoiceChannelId(),
        et = T.Z.getChannelId() === ee,
        en = null != ee && f.Z.getChatOpen(ee),
        er = U || G,
        ei = er && null != x && (0, l.q)(x.applicationId),
        ea = !er && null != m && et && en;
    return {
        selectedPIPWindow: m,
        pipWindows: 0 === J.length ? M : J,
        pipWidth: q,
        maxX: Y.width - (ea ? $ : 0),
        maxY: Y.height,
        theme: y.Z.theme,
        dockedRect: I.Z.getDockedRect(null != (d = null == m ? void 0 : m.id) ? d : ""),
        getDockedRectPositionY: K,
        appContext: W,
        roundCorners: !ei,
        windowSize: Y,
        inPopoutWindow: B,
        activityPIPWindow: X,
        chatOpen: en,
        callChatSidebarWidth: $,
    };
})(k);
