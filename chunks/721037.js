(n.d(t, { Z: () => j }), n(388685));
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
    h = n(591472),
    m = n(857096),
    g = n(241915),
    E = n(928518),
    b = n(210887),
    y = n(740492),
    O = n(442917),
    v = n(592125),
    I = n(366050),
    T = n(944486),
    S = n(451478),
    A = n(823379),
    N = n(981631),
    C = n(918559),
    R = n(354459),
    P = n(408491),
    w = n(1899);
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
        [N.NYg.VIDEO]: O.Z,
        [N.NYg.ACTIVITY]: _.Z,
        [N.NYg.FRAME]: m.Z
    },
    x = {
        minWidth: R.Rv[R.cL.VIDEO],
        maxWidth: R.$i[R.cL.VIDEO]
    },
    k = [];
class M extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: s, dockedRect: l, appContext: c, roundCorners: u } = this.props;
        return (0, r.jsx)(g.Z, {
            pictureInPictureComponents: L,
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
            resizeConfig: x,
            className: o()({ [w.pictureInPictureVideo]: (null == e ? void 0 : e.component) === N.NYg.VIDEO })
        });
    }
    constructor(...e) {
        (super(...e),
            D(this, 'handleWindowMove', (e, t) => {
                l.Ao(e, t);
            }),
            D(this, 'handleWindowResize', (e) => {
                l.d7(e, R.cL.VIDEO);
            }));
    }
}
let j = s.ZP.connectStores([E.Z, c.ZP, S.Z, b.Z, v.Z, T.Z, I.Z, p.Z, y.ZP, h.Z], (e) => {
    var t, n, r, i, a, o, s;
    let l,
        { inPopoutWindow: _ = !1 } = e,
        m = E.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
        g = E.Z.getWindowOpen(N.KJ3.ACTIVITY_POPOUT),
        O = c.ZP.getCurrentEmbeddedActivity(),
        w = (0, d.p)(null == O ? void 0 : O.location),
        D = null != O && !(0, f.Z)(w, v.Z, T.Z),
        L = c.ZP.getActivityPanelMode(),
        x = D && L === C.Ez.PANEL,
        M = null != O && null != w && (null == (t = p.Z.getSelectedParticipant(w)) ? void 0 : t.type) === R.fO.ACTIVITY,
        j = h.Z.getConnectedFrame(),
        U = h.Z.getFrameLayoutMode() === P.U.FOCUSED,
        G = S.Z.windowSize();
    if (_) {
        let e = E.Z.getWindow(N.KJ3.CHANNEL_CALL_POPOUT);
        G =
            null == e
                ? G
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let B = _ ? N.IlC.POPOUT : N.IlC.APP;
    l = (null != O && g) || (_ && D) ? null : _ || !m || D ? (null != O && x ? (null != (n = I.Z.pipActivityWindow) ? n : I.Z.pipVideoWindow) : null != j && U ? (null != (i = null != (r = I.Z.pipFrameWindow) ? r : I.Z.pipVideoWindow) ? i : I.Z.pipActivityWindow) : null != (o = null != (a = I.Z.pipVideoWindow) ? a : I.Z.pipActivityWindow) ? o : I.Z.pipFrameWindow) : null;
    let V = Array.from(I.Z.pipWindows.values()),
        F = I.Z.pipWidth(R.cL.VIDEO),
        Z = V.find((e) => e.component === N.NYg.VIDEO),
        H = [Z, V.find((e) => e.component === N.NYg.ACTIVITY), V.find((e) => e.component === N.NYg.FRAME)].filter(A.lm),
        Y = y.ZP.callChatSidebarWidth,
        W = T.Z.getVoiceChannelId(),
        K = T.Z.getChannelId() === W,
        z = null != W && p.Z.getChatOpen(W),
        q = x || M,
        X = q && null != O && (0, u.q)(O.applicationId),
        Q = !q && null != l && K && z;
    return {
        selectedPIPWindow: l,
        pipWindows: 0 === H.length ? k : H,
        pipWidth: F,
        maxX: G.width - (Q ? Y : 0),
        maxY: G.height,
        theme: b.Z.theme,
        dockedRect: I.Z.getDockedRect(null != (s = null == l ? void 0 : l.id) ? s : ''),
        appContext: B,
        roundCorners: !X
    };
})(M);
