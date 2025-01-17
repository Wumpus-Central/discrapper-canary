var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(519938),
    u = r(317381),
    c = r(988980),
    d = r(16609),
    f = r(917107),
    _ = r(866885),
    h = r(358221),
    p = r(241915),
    m = r(928518),
    g = r(210887),
    E = r(740492),
    v = r(442917),
    I = r(592125),
    T = r(366050),
    b = r(944486),
    y = r(451478),
    S = r(823379),
    A = r(981631),
    N = r(918559),
    C = r(354459);
function R(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let O = {
        [A.NYg.VIDEO]: v.Z,
        [A.NYg.EMBED_IFRAME]: _.Z
    },
    D = {
        minWidth: C.Rv[C.cL.VIDEO],
        maxWidth: C.$i[C.cL.VIDEO]
    };
class L extends s.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: n, pipWidth: r, maxX: i, maxY: s, theme: o, dockedRect: l, appContext: u, roundCorners: c } = this.props;
        return (0, a.jsx)(p.Z, {
            pictureInPictureComponents: O,
            selectedPIPWindow: e,
            pipWindows: n,
            pipWidth: r,
            maxX: i,
            maxY: s,
            dockedRect: l,
            theme: o,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: u,
            roundCorners: c,
            resizeConfig: D
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleWindowMove', (e, n) => {
                l.Ao(e, n);
            }),
            R(this, 'handleWindowResize', (e) => {
                l.d7(e, C.cL.VIDEO);
            });
    }
}
n.Z = o.ZP.connectStores([m.Z, u.ZP, y.Z, g.Z, I.Z, b.Z, T.Z, h.Z, E.ZP], (e) => {
    var n, r, i, a;
    let s,
        { inPopoutWindow: o = !1 } = e,
        l = m.Z.getWindowOpen(A.KJ3.CHANNEL_CALL_POPOUT),
        _ = u.ZP.getCurrentEmbeddedActivity(),
        p = (0, d.p)(null == _ ? void 0 : _.location),
        v = null != _ && !(0, f.Z)(p, I.Z, b.Z),
        R = u.ZP.getActivityPanelMode(),
        O = v && R === N.Ez.PANEL,
        D = null != _ && null != p && (null === (n = h.Z.getSelectedParticipant(p)) || void 0 === n ? void 0 : n.type) === C.fO.ACTIVITY,
        L = y.Z.windowSize();
    if (o) {
        let e = m.Z.getWindow(A.KJ3.CHANNEL_CALL_POPOUT);
        L =
            null == e
                ? L
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let x = o ? A.IlC.POPOUT : A.IlC.APP;
    s = o && v ? null : o || !l || v ? (null != _ && O ? (null !== (r = T.Z.pipActivityWindow) && void 0 !== r ? r : T.Z.pipVideoWindow) : null !== (i = T.Z.pipVideoWindow) && void 0 !== i ? i : T.Z.pipActivityWindow) : null;
    let w = Array.from(T.Z.pipWindows.values()),
        P = T.Z.pipWidth(C.cL.VIDEO),
        M = w.find((e) => e.component === A.NYg.VIDEO),
        k = [M, w.find((e) => e.component === A.NYg.EMBED_IFRAME)].filter(S.lm),
        U = E.ZP.callChatSidebarWidth,
        B = b.Z.getVoiceChannelId(),
        G = b.Z.getChannelId() === B,
        Z = null != B && h.Z.getChatOpen(B),
        F = O || D,
        V = F && null != _ && (0, c.q)(_.applicationId),
        j = !F && null != s && G && Z;
    return {
        selectedPIPWindow: s,
        pipWindows: k,
        pipWidth: P,
        maxX: L.width - (j ? U : 0),
        maxY: L.height,
        theme: g.Z.theme,
        dockedRect: T.Z.getDockedRect(null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : ''),
        appContext: x,
        roundCorners: !V
    };
})(L);
