var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(519938),
    u = r(317381),
    c = r(988980),
    d = r(16609),
    f = r(917107),
    p = r(866885),
    h = r(358221),
    _ = r(241915),
    m = r(928518),
    g = r(210887),
    E = r(740492),
    v = r(442917),
    y = r(592125),
    b = r(366050),
    I = r(944486),
    T = r(451478),
    S = r(823379),
    A = r(981631),
    C = r(918559),
    N = r(354459);
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
        [A.NYg.EMBED_IFRAME]: p.Z
    },
    D = {
        minWidth: N.Rv[N.cL.VIDEO],
        maxWidth: N.$i[N.cL.VIDEO]
    };
class L extends o.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: n, pipWidth: r, maxX: i, maxY: o, theme: s, dockedRect: l, appContext: u, roundCorners: c } = this.props;
        return (0, a.jsx)(_.Z, {
            pictureInPictureComponents: O,
            selectedPIPWindow: e,
            pipWindows: n,
            pipWidth: r,
            maxX: i,
            maxY: o,
            dockedRect: l,
            theme: s,
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
                l.d7(e, N.cL.VIDEO);
            });
    }
}
n.Z = s.ZP.connectStores([m.Z, u.ZP, T.Z, g.Z, y.Z, I.Z, b.Z, h.Z, E.ZP], (e) => {
    var n, r, i, a;
    let o,
        { inPopoutWindow: s = !1 } = e,
        l = m.Z.getWindowOpen(A.KJ3.CHANNEL_CALL_POPOUT),
        p = u.ZP.getCurrentEmbeddedActivity(),
        _ = (0, d.p)(null == p ? void 0 : p.location),
        v = null != p && !(0, f.Z)(_, y.Z, I.Z),
        R = u.ZP.getActivityPanelMode(),
        O = v && R === C.Ez.PANEL,
        D = null != p && null != _ && (null === (n = h.Z.getSelectedParticipant(_)) || void 0 === n ? void 0 : n.type) === N.fO.ACTIVITY,
        L = T.Z.windowSize();
    if (s) {
        let e = m.Z.getWindow(A.KJ3.CHANNEL_CALL_POPOUT);
        L =
            null == e
                ? L
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let x = s ? A.IlC.POPOUT : A.IlC.APP;
    o = s && v ? null : s || !l || v ? (null != p && O ? (null !== (r = b.Z.pipActivityWindow) && void 0 !== r ? r : b.Z.pipVideoWindow) : null !== (i = b.Z.pipVideoWindow) && void 0 !== i ? i : b.Z.pipActivityWindow) : null;
    let w = Array.from(b.Z.pipWindows.values()),
        P = b.Z.pipWidth(N.cL.VIDEO),
        M = w.find((e) => e.component === A.NYg.VIDEO),
        k = [M, w.find((e) => e.component === A.NYg.EMBED_IFRAME)].filter(S.lm),
        U = E.ZP.callChatSidebarWidth,
        B = I.Z.getVoiceChannelId(),
        G = I.Z.getChannelId() === B,
        Z = null != B && h.Z.getChatOpen(B),
        F = O || D,
        V = F && null != p && (0, c.q)(p.applicationId),
        j = !F && null != o && G && Z;
    return {
        selectedPIPWindow: o,
        pipWindows: k,
        pipWidth: P,
        maxX: L.width - (j ? U : 0),
        maxY: L.height,
        theme: g.Z.theme,
        dockedRect: b.Z.getDockedRect(null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : ''),
        appContext: x,
        roundCorners: !V
    };
})(L);
