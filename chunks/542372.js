n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(73153),
    r = n(367513),
    o = n(58149),
    c = n(688810),
    d = n(313961),
    u = n(384059),
    _ = n(574172),
    A = n(423562),
    p = n(309010),
    h = n(954571),
    g = n(203982),
    m = n(723702),
    x = n(475815),
    f = n(652215);
function C(e) {
    let { channel: t, appContext: n, popoutOpen: C, popoutWindow: E, currentWindow: j } = e,
        { parentAnalyticsLocation: b } = (0, c.Ay)(),
        N = n === f.BRT.POPOUT,
        T = l.useRef(null),
        { currentLayout: I, mode: v } = (0, a.cf)([d.A], () => {
            let e = d.A.getMode(t.id),
                i = n === f.BRT.POPOUT;
            i && (e = f._Of.VIDEO);
            let l = e === f._Of.VIDEO ? d.A.getLayout(t.id, n) : f.DUB.MINIMUM;
            return i && l !== f.DUB.FULL_SCREEN && (l = f.DUB.NO_CHAT), { currentLayout: l, mode: e };
        }, [t, n]),
        S = (0, a.bG)([p.A], () => p.A.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        T.current = v;
    });
    let y = l.useRef(I),
        { currentDocument: O, rootNode: L } = l.useMemo(() => {
            let e = null != E && N ? E.document : document,
                t = j.document.getElementById("app-mount");
            return { currentWindow: j, currentDocument: e, rootNode: t };
        }, [E, N, j]),
        R = C && !N,
        U = v === f._Of.VIDEO && S && !R,
        w = l.useCallback(
            (e, i) => {
                i !== e &&
                    (r.A.updateLayout(t.id, i, n),
                    i === f.DUB.FULL_SCREEN && t.isPrivate() && g._.dispatch(f.jej.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        P = l.useCallback(
            (e) => {
                null == L ||
                    (e === f.DUB.FULL_SCREEN &&
                        (w(e, y.current),
                        (0, x.sP)((e) => {
                            y.current = e;
                        }, O)));
            },
            [O, w, L],
        ),
        k = l.useCallback(
            (e) => () => {
                null != L &&
                    ((0, u.X)(b, u.O.FULL_SCREEN, e !== f.DUB.FULL_SCREEN),
                    e !== f.DUB.FULL_SCREEN ? ((y.current = e), w(e, f.DUB.FULL_SCREEN), (0, x.tl)(L)) : P(e));
            },
            [w, P, L, b],
        );
    l.useEffect(() => {
        let e = () => {
            null != L && ((0, x._U)(L, O) || I !== f.DUB.FULL_SCREEN || k(I)());
        };
        return (
            O.addEventListener(x.Wb, e),
            () => {
                O.removeEventListener(x.Wb, e);
            }
        );
    }, [O, I, k, L]);
    let M = { channel: t, maybeLeaveFullScreen: P },
        G = l.useRef(M);
    return (l.useEffect(() => {
        G.current = M;
    }),
    l.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = G.current;
        return (
            h.default.track(f.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: N ? "popout" : I, ...(0, o.QS)(e.id) }),
            () => {
                (N && (0, m.isMac)()) || t(I);
            }
        );
    }, [I, N]),
    l.useEffect(() => {
        null != L && T.current === f._Of.VIDEO && v === f._Of.VOICE && (0, x.sP)(L, O);
    }, [O, v, T, L]),
    l.useEffect(() => {
        !S && N && s.h.wait(() => _.close(f.MLl.CHANNEL_CALL_POPOUT));
    }, [S, N]),
    U)
        ? (0, i.jsx)(A.A, { themeable: !1, node: L, guestWindow: E, onClick: k(I) })
        : null;
}
