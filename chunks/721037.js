(n.d(t, { Z: () => j }), n(388685));
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
    y = n(210887),
    O = n(740492),
    v = n(442917),
    I = n(592125),
    T = n(366050),
    S = n(944486),
    A = n(451478),
    N = n(823379),
    C = n(981631),
    R = n(918559),
    P = n(354459),
    w = n(408491);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let L = {
        [C.NYg.VIDEO]: v.Z,
        [C.NYg.ACTIVITY]: d.Z,
        [C.NYg.FRAME]: h.Z
    },
    x = {
        minWidth: P.Rv[P.cL.VIDEO],
        maxWidth: P.$i[P.cL.VIDEO]
    },
    k = [];
class M extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: o, dockedRect: s, appContext: l, roundCorners: c, getDockedRectPositionY: u } = this.props;
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
                    resizeConfig: x,
                    getDockedRectPositionY: u
                }),
                (0, r.jsx)(g.mK, {})
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            D(this, 'handleWindowMove', (e, t) => {
                o.Ao(e, t);
            }),
            D(this, 'handleWindowResize', (e) => {
                o.d7(e, P.cL.VIDEO);
            }));
    }
}
let j = a.ZP.connectStores([b.Z, s.ZP, A.Z, y.Z, I.Z, S.Z, T.Z, f.Z, O.ZP, p.Z], (e) => {
    var t, n, r, i, a, o, d;
    let h,
        { popoutWindowKey: m, popoutWindowHasTitleBar: g = !1 } = e,
        v = b.Z.getWindowOpen(C.KJ3.CHANNEL_CALL_POPOUT),
        D = b.Z.getWindowOpen(C.KJ3.ACTIVITY_POPOUT),
        L = s.ZP.getCurrentEmbeddedActivity(),
        x = (0, c.p)(null == L ? void 0 : L.location),
        M = null != L && !(0, u.Z)(x, I.Z, S.Z),
        j = s.ZP.getActivityPanelMode(),
        U = M && j === R.Ez.PANEL,
        G = null != L && null != x && (null == (t = f.Z.getSelectedParticipant(x)) ? void 0 : t.type) === P.fO.ACTIVITY,
        B = p.Z.getConnectedFrame(),
        V = p.Z.getFrameLayoutMode() === w.U.FOCUSED,
        F = null != m,
        Z = F ? b.Z.getWindow(m) : null,
        H = !!F && b.Z.isWindowFullScreen(m),
        Y = A.Z.windowSize();
    F &&
        (Y =
            null == Z
                ? Y
                : {
                      width: Z.innerWidth,
                      height: Z.innerHeight
                  });
    let W = F ? C.IlC.POPOUT : C.IlC.APP,
        K = (e) =>
            F &&
            (0, E.Y)({
                withTitleBar: g,
                isFullScreen: H
            })
                ? e - _.q8
                : e;
    h = (null != L && D) || (F && M) ? null : F || !v || M ? (null != L && U ? (null != (n = T.Z.pipActivityWindow) ? n : T.Z.pipVideoWindow) : null != B && V ? (null != (i = null != (r = T.Z.pipFrameWindow) ? r : T.Z.pipVideoWindow) ? i : T.Z.pipActivityWindow) : null != (o = null != (a = T.Z.pipVideoWindow) ? a : T.Z.pipActivityWindow) ? o : T.Z.pipFrameWindow) : null;
    let z = Array.from(T.Z.pipWindows.values()),
        q = T.Z.pipWidth(P.cL.VIDEO),
        X = z.find((e) => e.component === C.NYg.VIDEO),
        Q = [X, z.find((e) => e.component === C.NYg.ACTIVITY), z.find((e) => e.component === C.NYg.FRAME)].filter(N.lm),
        J = O.ZP.callChatSidebarWidth,
        $ = S.Z.getVoiceChannelId(),
        ee = S.Z.getChannelId() === $,
        et = null != $ && f.Z.getChatOpen($),
        en = U || G,
        er = en && null != L && (0, l.q)(L.applicationId),
        ei = !en && null != h && ee && et;
    return {
        selectedPIPWindow: h,
        pipWindows: 0 === Q.length ? k : Q,
        pipWidth: q,
        maxX: Y.width - (ei ? J : 0),
        maxY: Y.height,
        theme: y.Z.theme,
        dockedRect: T.Z.getDockedRect(null != (d = null == h ? void 0 : h.id) ? d : ''),
        getDockedRectPositionY: K,
        appContext: W,
        roundCorners: !er
    };
})(M);
