n.d(t, { Z: () => w }), n(388685);
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
    _ = n(241915),
    p = n(928518),
    h = n(210887),
    m = n(740492),
    g = n(442917),
    E = n(592125),
    b = n(366050),
    y = n(944486),
    O = n(451478),
    v = n(823379),
    I = n(981631),
    T = n(918559),
    S = n(354459);
function A(e, t, n) {
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
let N = {
        [I.NYg.VIDEO]: g.Z,
        [I.NYg.EMBED_IFRAME]: d.Z
    },
    C = {
        minWidth: S.Rv[S.cL.VIDEO],
        maxWidth: S.$i[S.cL.VIDEO]
    },
    R = [];
class P extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: o, dockedRect: s, appContext: l, roundCorners: c } = this.props;
        return (0, r.jsx)(_.Z, {
            pictureInPictureComponents: N,
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
            resizeConfig: C
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleWindowMove', (e, t) => {
                o.Ao(e, t);
            }),
            A(this, 'handleWindowResize', (e) => {
                o.d7(e, S.cL.VIDEO);
            });
    }
}
let w = a.ZP.connectStores([p.Z, s.ZP, O.Z, h.Z, E.Z, y.Z, b.Z, f.Z, m.ZP], (e) => {
    var t, n, r, i;
    let a,
        { inPopoutWindow: o = !1 } = e,
        d = p.Z.getWindowOpen(I.KJ3.CHANNEL_CALL_POPOUT),
        _ = p.Z.getWindowOpen(I.KJ3.ACTIVITY_POPOUT),
        g = s.ZP.getCurrentEmbeddedActivity(),
        A = (0, c.p)(null == g ? void 0 : g.location),
        N = null != g && !(0, u.Z)(A, E.Z, y.Z),
        C = s.ZP.getActivityPanelMode(),
        P = N && C === T.Ez.PANEL,
        w = null != g && null != A && (null == (t = f.Z.getSelectedParticipant(A)) ? void 0 : t.type) === S.fO.ACTIVITY,
        D = O.Z.windowSize();
    if (o) {
        let e = p.Z.getWindow(I.KJ3.CHANNEL_CALL_POPOUT);
        D =
            null == e
                ? D
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let L = o ? I.IlC.POPOUT : I.IlC.APP;
    a = (null != g && _) || (o && N) ? null : o || !d || N ? (null != g && P ? (null != (n = b.Z.pipActivityWindow) ? n : b.Z.pipVideoWindow) : null != (r = b.Z.pipVideoWindow) ? r : b.Z.pipActivityWindow) : null;
    let x = Array.from(b.Z.pipWindows.values()),
        M = b.Z.pipWidth(S.cL.VIDEO),
        k = [x.find((e) => e.component === I.NYg.VIDEO), x.find((e) => e.component === I.NYg.EMBED_IFRAME)].filter(v.lm),
        j = m.ZP.callChatSidebarWidth,
        U = y.Z.getVoiceChannelId(),
        G = y.Z.getChannelId() === U,
        B = null != U && f.Z.getChatOpen(U),
        F = P || w,
        V = F && null != g && (0, l.q)(g.applicationId),
        Z = !F && null != a && G && B;
    return {
        selectedPIPWindow: a,
        pipWindows: 0 === k.length ? R : k,
        pipWidth: M,
        maxX: D.width - (Z ? j : 0),
        maxY: D.height,
        theme: h.Z.theme,
        dockedRect: b.Z.getDockedRect(null != (i = null == a ? void 0 : a.id) ? i : ''),
        appContext: L,
        roundCorners: !V
    };
})(P);
