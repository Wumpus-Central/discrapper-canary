n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(519938),
    o = n(317381),
    l = n(988980),
    u = n(16609),
    c = n(917107),
    d = n(866885),
    f = n(358221),
    _ = n(241915),
    p = n(928518),
    h = n(210887),
    m = n(740492),
    g = n(442917),
    E = n(592125),
    v = n(366050),
    y = n(944486),
    I = n(451478),
    T = n(823379),
    b = n(981631),
    S = n(918559),
    A = n(354459);
function N(e, t, n) {
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
let C = {
        [b.NYg.VIDEO]: g.Z,
        [b.NYg.EMBED_IFRAME]: d.Z
    },
    R = {
        minWidth: A.Rv[A.cL.VIDEO],
        maxWidth: A.$i[A.cL.VIDEO]
    };
class O extends r.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: r, maxY: a, theme: s, dockedRect: o, appContext: l, roundCorners: u } = this.props;
        return (0, i.jsx)(_.Z, {
            pictureInPictureComponents: C,
            selectedPIPWindow: e,
            pipWindows: t,
            pipWidth: n,
            maxX: r,
            maxY: a,
            dockedRect: o,
            theme: s,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: l,
            roundCorners: u,
            resizeConfig: R
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'handleWindowMove', (e, t) => {
                s.Ao(e, t);
            }),
            N(this, 'handleWindowResize', (e) => {
                s.d7(e, A.cL.VIDEO);
            });
    }
}
let D = a.ZP.connectStores([p.Z, o.ZP, I.Z, h.Z, E.Z, y.Z, v.Z, f.Z, m.ZP], (e) => {
    var t, n, i, r;
    let a,
        { inPopoutWindow: s = !1 } = e,
        d = p.Z.getWindowOpen(b.KJ3.CHANNEL_CALL_POPOUT),
        _ = o.ZP.getCurrentEmbeddedActivity(),
        g = (0, u.p)(null == _ ? void 0 : _.location),
        N = null != _ && !(0, c.Z)(g, E.Z, y.Z),
        C = o.ZP.getActivityPanelMode(),
        R = N && C === S.Ez.PANEL,
        O = null != _ && null != g && (null === (t = f.Z.getSelectedParticipant(g)) || void 0 === t ? void 0 : t.type) === A.fO.ACTIVITY,
        D = I.Z.windowSize();
    if (s) {
        let e = p.Z.getWindow(b.KJ3.CHANNEL_CALL_POPOUT);
        D =
            null == e
                ? D
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let L = s ? b.IlC.POPOUT : b.IlC.APP;
    a = s && N ? null : s || !d || N ? (null != _ && R ? (null !== (n = v.Z.pipActivityWindow) && void 0 !== n ? n : v.Z.pipVideoWindow) : null !== (i = v.Z.pipVideoWindow) && void 0 !== i ? i : v.Z.pipActivityWindow) : null;
    let x = Array.from(v.Z.pipWindows.values()),
        w = v.Z.pipWidth(A.cL.VIDEO),
        P = [x.find((e) => e.component === b.NYg.VIDEO), x.find((e) => e.component === b.NYg.EMBED_IFRAME)].filter(T.lm),
        M = m.ZP.callChatSidebarWidth,
        k = y.Z.getVoiceChannelId(),
        U = y.Z.getChannelId() === k,
        G = null != k && f.Z.getChatOpen(k),
        B = R || O,
        Z = B && null != _ && (0, l.q)(_.applicationId),
        F = !B && null != a && U && G;
    return {
        selectedPIPWindow: a,
        pipWindows: P,
        pipWidth: w,
        maxX: D.width - (F ? M : 0),
        maxY: D.height,
        theme: h.Z.theme,
        dockedRect: v.Z.getDockedRect(null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : ''),
        appContext: L,
        roundCorners: !Z
    };
})(O);
