(n.d(t, { Z: () => G }), n(388685));
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
let M = {
        [R.NYg.VIDEO]: I.Z,
        [R.NYg.ACTIVITY]: d.Z,
        [R.NYg.FRAME]: m.Z
    },
    k = {
        minWidth: w.Rv[w.cL.VIDEO],
        maxWidth: w.$i[w.cL.VIDEO]
    },
    j = [];
class U extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: o, theme: a, dockedRect: s, appContext: l, roundCorners: c, getDockedRectPositionY: u, windowSize: d, inPopoutWindow: f, activityPIPWindow: p, chatOpen: h, callChatSidebarWidth: m } = this.props,
            b = document.body.style.getPropertyValue('--custom-guild-sidebar-width'),
            y = '' !== b ? parseInt(b, 10) : R.PrS,
            O = d.width - y - (h ? m : 0),
            v = null != p,
            I = !f && v && h && O < _.o;
        return (0, r.jsxs)(E._X, {
            children: [
                (0, r.jsx)(g.Z, {
                    pictureInPictureComponents: M,
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
                    getDockedRectPositionY: u
                }),
                (0, r.jsx)(E.mK, { className: I ? L.belowSidebar : void 0 })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            x(this, 'handleWindowMove', (e, t) => {
                a.Ao(e, t);
            }),
            x(this, 'handleWindowResize', (e) => {
                a.d7(e, w.cL.VIDEO);
            }));
    }
}
let G = o.ZP.connectStores([y.Z, s.ZP, N.Z, O.Z, T.Z, A.Z, S.Z, f.Z, v.ZP, h.Z], (e) => {
    var t, n, r, i, o, a, d;
    let _,
        { popoutWindowKey: m, popoutWindowHasTitleBar: g = !1 } = e,
        E = y.Z.getWindowOpen(R.KJ3.CHANNEL_CALL_POPOUT),
        I = y.Z.getWindowOpen(R.KJ3.ACTIVITY_POPOUT),
        L = s.ZP.getCurrentEmbeddedActivity(),
        x = (0, c.p)(null == L ? void 0 : L.location),
        M = null != L && !(0, u.Z)(x, T.Z, A.Z),
        k = s.ZP.getActivityPanelMode(),
        U = M && k === P.Ez.PANEL,
        G = null != L && null != x && (null == (t = f.Z.getSelectedParticipant(x)) ? void 0 : t.type) === w.fO.ACTIVITY,
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
    let W = F ? R.IlC.POPOUT : R.IlC.APP,
        K = (e) =>
            F &&
            (0, b.Y)({
                withTitleBar: g,
                isFullScreen: H
            })
                ? e - p.q8
                : e;
    _ = (null != L && I) || (F && M) ? null : F || !E || M ? (null != L && U ? (null != (n = S.Z.pipActivityWindow) ? n : S.Z.pipVideoWindow) : null != B && Z ? (null != (i = null != (r = S.Z.pipFrameWindow) ? r : S.Z.pipVideoWindow) ? i : S.Z.pipActivityWindow) : null != (a = null != (o = S.Z.pipVideoWindow) ? o : S.Z.pipActivityWindow) ? a : S.Z.pipFrameWindow) : null;
    let z = Array.from(S.Z.pipWindows.values()),
        q = S.Z.pipWidth(w.cL.VIDEO),
        X = z.find((e) => e.component === R.NYg.VIDEO),
        Q = z.find((e) => e.component === R.NYg.ACTIVITY),
        J = [X, Q, z.find((e) => e.component === R.NYg.FRAME)].filter(C.lm),
        $ = v.ZP.callChatSidebarWidth,
        ee = A.Z.getVoiceChannelId(),
        et = A.Z.getChannelId() === ee,
        en = null != ee && f.Z.getChatOpen(ee),
        er = U || G,
        ei = er && null != L && (0, l.q)(L.applicationId),
        eo = !er && null != _ && et && en;
    return {
        selectedPIPWindow: _,
        pipWindows: 0 === J.length ? j : J,
        pipWidth: q,
        maxX: Y.width - (eo ? $ : 0),
        maxY: Y.height,
        theme: O.Z.theme,
        dockedRect: S.Z.getDockedRect(null != (d = null == _ ? void 0 : _.id) ? d : ''),
        getDockedRectPositionY: K,
        appContext: W,
        roundCorners: !ei,
        windowSize: Y,
        inPopoutWindow: F,
        activityPIPWindow: Q,
        chatOpen: en,
        callChatSidebarWidth: $
    };
})(U);
