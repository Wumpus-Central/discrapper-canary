(n.d(t, { Z: () => x }), n(388685));
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
    _ = n(591472),
    p = n(857096),
    h = n(241915),
    m = n(928518),
    g = n(210887),
    E = n(740492),
    b = n(442917),
    y = n(592125),
    O = n(366050),
    v = n(944486),
    I = n(451478),
    T = n(823379),
    S = n(981631),
    A = n(918559),
    N = n(354459),
    C = n(408491);
function R(e, t, n) {
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
let P = {
        [S.NYg.VIDEO]: b.Z,
        [S.NYg.ACTIVITY]: d.Z,
        [S.NYg.FRAME]: p.Z
    },
    w = {
        minWidth: N.Rv[N.cL.VIDEO],
        maxWidth: N.$i[N.cL.VIDEO]
    },
    D = [];
class L extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: o, dockedRect: s, appContext: l, roundCorners: c } = this.props;
        return (0, r.jsx)(h.Z, {
            pictureInPictureComponents: P,
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
            resizeConfig: w
        });
    }
    constructor(...e) {
        (super(...e),
            R(this, 'handleWindowMove', (e, t) => {
                o.Ao(e, t);
            }),
            R(this, 'handleWindowResize', (e) => {
                o.d7(e, N.cL.VIDEO);
            }));
    }
}
let x = a.ZP.connectStores([m.Z, s.ZP, I.Z, g.Z, y.Z, v.Z, O.Z, f.Z, E.ZP, _.Z], (e) => {
    var t, n, r, i, a, o, d;
    let p,
        { inPopoutWindow: h = !1 } = e,
        b = m.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
        R = m.Z.getWindowOpen(S.KJ3.ACTIVITY_POPOUT),
        P = s.ZP.getCurrentEmbeddedActivity(),
        w = (0, c.p)(null == P ? void 0 : P.location),
        L = null != P && !(0, u.Z)(w, y.Z, v.Z),
        x = s.ZP.getActivityPanelMode(),
        k = L && x === A.Ez.PANEL,
        M = null != P && null != w && (null == (t = f.Z.getSelectedParticipant(w)) ? void 0 : t.type) === N.fO.ACTIVITY,
        j = _.Z.getConnectedFrame(),
        U = _.Z.getFrameLayoutMode() === C.U.FOCUSED,
        G = I.Z.windowSize();
    if (h) {
        let e = m.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
        G =
            null == e
                ? G
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let B = h ? S.IlC.POPOUT : S.IlC.APP;
    p = (null != P && R) || (h && L) ? null : h || !b || L ? (null != P && k ? (null != (n = O.Z.pipActivityWindow) ? n : O.Z.pipVideoWindow) : null != j && U ? (null != (i = null != (r = O.Z.pipFrameWindow) ? r : O.Z.pipVideoWindow) ? i : O.Z.pipActivityWindow) : null != (o = null != (a = O.Z.pipVideoWindow) ? a : O.Z.pipActivityWindow) ? o : O.Z.pipFrameWindow) : null;
    let V = Array.from(O.Z.pipWindows.values()),
        F = O.Z.pipWidth(N.cL.VIDEO),
        Z = V.find((e) => e.component === S.NYg.VIDEO),
        H = [Z, V.find((e) => e.component === S.NYg.ACTIVITY), V.find((e) => e.component === S.NYg.FRAME)].filter(T.lm),
        Y = E.ZP.callChatSidebarWidth,
        W = v.Z.getVoiceChannelId(),
        K = v.Z.getChannelId() === W,
        z = null != W && f.Z.getChatOpen(W),
        q = k || M,
        X = q && null != P && (0, l.q)(P.applicationId),
        Q = !q && null != p && K && z;
    return {
        selectedPIPWindow: p,
        pipWindows: 0 === H.length ? D : H,
        pipWidth: F,
        maxX: G.width - (Q ? Y : 0),
        maxY: G.height,
        theme: g.Z.theme,
        dockedRect: O.Z.getDockedRect(null != (d = null == p ? void 0 : p.id) ? d : ''),
        appContext: B,
        roundCorners: !X
    };
})(L);
