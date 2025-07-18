(n.d(t, { Z: () => G }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(519938),
    c = n(317381),
    u = n(988980),
    d = n(16609),
    f = n(917107),
    _ = n(866885),
    p = n(358221),
    h = n(950796),
    m = n(591472),
    g = n(857096),
    E = n(241915),
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
    L = n(1899);
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
        [R.NYg.ACTIVITY]: _.Z,
        [R.NYg.FRAME]: g.Z
    },
    k = {
        minWidth: w.Rv[w.cL.VIDEO],
        maxWidth: w.$i[w.cL.VIDEO]
    },
    j = [];
class U extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: s, dockedRect: l, appContext: c, roundCorners: u, getDockedRectPositionY: d } = this.props;
        return (0, r.jsx)(E.Z, {
            pictureInPictureComponents: M,
            selectedPIPWindow: e,
            pipWindows: t,
            pipWidth: n,
            maxX: i,
            maxY: a,
            dockedRect: l,
            theme: s,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: c,
            roundCorners: u,
            resizeConfig: k,
            className: o()({ [L.pictureInPictureVideo]: (null == e ? void 0 : e.component) === R.NYg.VIDEO }),
            getDockedRectPositionY: d
        });
    }
    constructor(...e) {
        (super(...e),
            x(this, 'handleWindowMove', (e, t) => {
                l.Ao(e, t);
            }),
            x(this, 'handleWindowResize', (e) => {
                l.d7(e, w.cL.VIDEO);
            }));
    }
}
let G = s.ZP.connectStores([y.Z, c.ZP, N.Z, O.Z, T.Z, A.Z, S.Z, p.Z, v.ZP, m.Z], (e) => {
    var t, n, r, i, a, o, s;
    let l,
        { popoutWindowKey: _, popoutWindowHasTitleBar: g = !1 } = e,
        E = y.Z.getWindowOpen(R.KJ3.CHANNEL_CALL_POPOUT),
        I = y.Z.getWindowOpen(R.KJ3.ACTIVITY_POPOUT),
        L = c.ZP.getCurrentEmbeddedActivity(),
        x = (0, d.p)(null == L ? void 0 : L.location),
        M = null != L && !(0, f.Z)(x, T.Z, A.Z),
        k = c.ZP.getActivityPanelMode(),
        U = M && k === P.Ez.PANEL,
        G = null != L && null != x && (null == (t = p.Z.getSelectedParticipant(x)) ? void 0 : t.type) === w.fO.ACTIVITY,
        B = m.Z.getConnectedFrame(),
        V = m.Z.getFrameLayoutMode() === D.U.FOCUSED,
        F = null != _,
        Z = F ? y.Z.getWindow(_) : null,
        H = !!F && y.Z.isWindowFullScreen(_),
        Y = N.Z.windowSize();
    F &&
        (Y =
            null == Z
                ? Y
                : {
                      width: Z.innerWidth,
                      height: Z.innerHeight
                  });
    let W = F ? R.IlC.POPOUT : R.IlC.APP,
        K = (e) =>
            F &&
            (0, b.Y)({
                withTitleBar: g,
                isFullScreen: H
            })
                ? e - h.q8
                : e;
    l = (null != L && I) || (F && M) ? null : F || !E || M ? (null != L && U ? (null != (n = S.Z.pipActivityWindow) ? n : S.Z.pipVideoWindow) : null != B && V ? (null != (i = null != (r = S.Z.pipFrameWindow) ? r : S.Z.pipVideoWindow) ? i : S.Z.pipActivityWindow) : null != (o = null != (a = S.Z.pipVideoWindow) ? a : S.Z.pipActivityWindow) ? o : S.Z.pipFrameWindow) : null;
    let z = Array.from(S.Z.pipWindows.values()),
        q = S.Z.pipWidth(w.cL.VIDEO),
        X = z.find((e) => e.component === R.NYg.VIDEO),
        Q = [X, z.find((e) => e.component === R.NYg.ACTIVITY), z.find((e) => e.component === R.NYg.FRAME)].filter(C.lm),
        J = v.ZP.callChatSidebarWidth,
        $ = A.Z.getVoiceChannelId(),
        ee = A.Z.getChannelId() === $,
        et = null != $ && p.Z.getChatOpen($),
        en = U || G,
        er = en && null != L && (0, u.q)(L.applicationId),
        ei = !en && null != l && ee && et;
    return {
        selectedPIPWindow: l,
        pipWindows: 0 === Q.length ? j : Q,
        pipWidth: q,
        maxX: Y.width - (ei ? J : 0),
        maxY: Y.height,
        theme: O.Z.theme,
        dockedRect: S.Z.getDockedRect(null != (s = null == l ? void 0 : l.id) ? s : ''),
        getDockedRectPositionY: K,
        appContext: W,
        roundCorners: !er
    };
})(U);
