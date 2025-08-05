(n.d(t, { Z: () => G }), n(388685));
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
    _ = n(677601),
    p = n(950796),
    h = n(591472),
    m = n(857096),
    g = n(241915),
    E = n(522501),
    b = n(238246),
    y = n(928518),
    O = n(210887),
    v = n(740492),
    I = n(442917),
    T = n(592125),
    S = n(366050),
    A = n(944486),
    N = n(451478),
    C = n(823379),
    w = n(981631),
    R = n(918559),
    P = n(354459),
    D = n(408491),
    L = n(189152);
function x(e, t, n) {
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
let k = {
        [w.NYg.VIDEO]: I.Z,
        [w.NYg.ACTIVITY]: d.Z,
        [w.NYg.FRAME]: m.Z
    },
    j = {
        minWidth: P.Rv[P.cL.VIDEO],
        maxWidth: P.$i[P.cL.VIDEO]
    },
    M = [];
class U extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: o, dockedRect: s, appContext: l, roundCorners: c, getDockedRectPositionY: u, windowSize: d, inPopoutWindow: f, activityPIPWindow: p, chatOpen: h, callChatSidebarWidth: m } = this.props,
            b = document.body.style.getPropertyValue('--custom-guild-sidebar-width'),
            y = '' !== b ? parseInt(b, 10) : w.PrS,
            O = d.width - y - (h ? m : 0),
            v = null != p,
            I = !f && v && h && O < _.o;
        return (0, r.jsxs)(E._X, {
            children: [
                (0, r.jsx)(g.Z, {
                    pictureInPictureComponents: k,
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
                    getDockedRectPositionY: u
                }),
                (0, r.jsx)(E.mK, { className: I ? L.belowSidebar : void 0 })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            x(this, 'handleWindowMove', (e, t) => {
                o.Ao(e, t);
            }),
            x(this, 'handleWindowResize', (e) => {
                o.d7(e, P.cL.VIDEO);
            }));
    }
}
let G = a.ZP.connectStores([y.Z, s.ZP, N.Z, O.Z, T.Z, A.Z, S.Z, f.Z, v.ZP, h.Z], (e) => {
    var t, n, r, i, a, o, d;
    let _,
        { popoutWindowKey: m, popoutWindowHasTitleBar: g = !1 } = e,
        E = y.Z.getWindowOpen(w.KJ3.CHANNEL_CALL_POPOUT),
        I = y.Z.getWindowOpen(w.KJ3.ACTIVITY_POPOUT),
        L = s.ZP.getCurrentEmbeddedActivity(),
        x = (0, c.p)(null == L ? void 0 : L.location),
        k = null != L && !(0, u.Z)(x, T.Z, A.Z),
        j = s.ZP.getActivityPanelMode(),
        U = k && j === R.Ez.PANEL,
        G = null != L && null != x && (null == (t = f.Z.getSelectedParticipant(x)) ? void 0 : t.type) === P.fO.ACTIVITY,
        B = h.Z.getConnectedFrame(),
        Z = h.Z.getFrameLayoutMode() === D.U.FOCUSED,
        F = null != m,
        V = F ? y.Z.getWindow(m) : null,
        H = !!F && y.Z.isWindowFullScreen(m),
        Y = N.Z.windowSize();
    F &&
        (Y =
            null == V
                ? Y
                : {
                      width: V.innerWidth,
                      height: V.innerHeight
                  });
    let W = F ? w.IlC.POPOUT : w.IlC.APP,
        K = (e) =>
            F &&
            (0, b.Y)({
                withTitleBar: g,
                isFullScreen: H
            })
                ? e - p.q8
                : e;
    _ = (null != L && I) || (F && k) ? null : F || !E || k ? (null != L && U ? (null != (n = S.Z.pipActivityWindow) ? n : S.Z.pipVideoWindow) : null != B && Z ? (null != (i = null != (r = S.Z.pipFrameWindow) ? r : S.Z.pipVideoWindow) ? i : S.Z.pipActivityWindow) : null != (o = null != (a = S.Z.pipVideoWindow) ? a : S.Z.pipActivityWindow) ? o : S.Z.pipFrameWindow) : null;
    let z = Array.from(S.Z.pipWindows.values()),
        q = S.Z.pipWidth(P.cL.VIDEO),
        $ = z.find((e) => e.component === w.NYg.VIDEO),
        X = z.find((e) => e.component === w.NYg.ACTIVITY),
        Q = [$, X, z.find((e) => e.component === w.NYg.FRAME)].filter(C.lm),
        J = v.ZP.callChatSidebarWidth,
        ee = A.Z.getVoiceChannelId(),
        et = A.Z.getChannelId() === ee,
        en = null != ee && f.Z.getChatOpen(ee),
        er = U || G,
        ei = er && null != L && (0, l.q)(L.applicationId),
        ea = !er && null != _ && et && en;
    return {
        selectedPIPWindow: _,
        pipWindows: 0 === Q.length ? M : Q,
        pipWidth: q,
        maxX: Y.width - (ea ? J : 0),
        maxY: Y.height,
        theme: O.Z.theme,
        dockedRect: S.Z.getDockedRect(null != (d = null == _ ? void 0 : _.id) ? d : ''),
        getDockedRectPositionY: K,
        appContext: W,
        roundCorners: !ei,
        windowSize: Y,
        inPopoutWindow: F,
        activityPIPWindow: X,
        chatOpen: en,
        callChatSidebarWidth: J
    };
})(U);
