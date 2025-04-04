n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(519938),
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
    v = n(451478),
    O = n(823379),
    I = n(981631),
    S = n(918559),
    T = n(354459);
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
let A = {
        [I.NYg.VIDEO]: g.Z,
        [I.NYg.EMBED_IFRAME]: d.Z
    },
    C = {
        minWidth: T.Rv[T.cL.VIDEO],
        maxWidth: T.$i[T.cL.VIDEO]
    },
    R = [];
class P extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: o, theme: a, dockedRect: s, appContext: l, roundCorners: c } = this.props;
        return (0, r.jsx)(_.Z, {
            pictureInPictureComponents: A,
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
            resizeConfig: C
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'handleWindowMove', (e, t) => {
                a.Ao(e, t);
            }),
            N(this, 'handleWindowResize', (e) => {
                a.d7(e, T.cL.VIDEO);
            });
    }
}
let w = o.ZP.connectStores([p.Z, s.ZP, v.Z, h.Z, E.Z, y.Z, b.Z, f.Z, m.ZP], (e) => {
    var t, n, r, i;
    let o,
        { inPopoutWindow: a = !1 } = e,
        d = p.Z.getWindowOpen(I.KJ3.CHANNEL_CALL_POPOUT),
        _ = s.ZP.getCurrentEmbeddedActivity(),
        g = (0, c.pY)(null == _ ? void 0 : _.location),
        N = null != _ && !(0, u.Z)(g, E.Z, y.Z),
        A = s.ZP.getActivityPanelMode(),
        C = N && A === S.Ez.PANEL,
        P = null != _ && null != g && (null == (t = f.Z.getSelectedParticipant(g)) ? void 0 : t.type) === T.fO.ACTIVITY,
        w = v.Z.windowSize();
    if (a) {
        let e = p.Z.getWindow(I.KJ3.CHANNEL_CALL_POPOUT);
        w =
            null == e
                ? w
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let D = a ? I.IlC.POPOUT : I.IlC.APP;
    o = a && N ? null : a || !d || N ? (null != _ && C ? (null != (n = b.Z.pipActivityWindow) ? n : b.Z.pipVideoWindow) : null != (r = b.Z.pipVideoWindow) ? r : b.Z.pipActivityWindow) : null;
    let L = Array.from(b.Z.pipWindows.values()),
        x = b.Z.pipWidth(T.cL.VIDEO),
        M = [L.find((e) => e.component === I.NYg.VIDEO), L.find((e) => e.component === I.NYg.EMBED_IFRAME)].filter(O.lm),
        k = m.ZP.callChatSidebarWidth,
        j = y.Z.getVoiceChannelId(),
        U = y.Z.getChannelId() === j,
        G = null != j && f.Z.getChatOpen(j),
        B = C || P,
        F = B && null != _ && (0, l.q)(_.applicationId),
        V = !B && null != o && U && G;
    return {
        selectedPIPWindow: o,
        pipWindows: 0 === M.length ? R : M,
        pipWidth: x,
        maxX: w.width - (V ? k : 0),
        maxY: w.height,
        theme: h.Z.theme,
        dockedRect: b.Z.getDockedRect(null != (i = null == o ? void 0 : o.id) ? i : ''),
        appContext: D,
        roundCorners: !F
    };
})(P);
