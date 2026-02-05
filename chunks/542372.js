n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(73153),
    r = n(367513),
    o = n(58149),
    d = n(688810),
    c = n(313961),
    u = n(384059),
    h = n(574172),
    A = n(423562),
    g = n(309010),
    m = n(954571),
    p = n(203982),
    _ = n(723702),
    x = n(475815),
    f = n(652215);
function E(e) {
    let { channel: t, appContext: n, popoutOpen: E, popoutWindow: C, currentWindow: I } = e,
        { parentAnalyticsLocation: S } = (0, d.Ay)(),
        b = n === f.BRT.POPOUT,
        N = l.useRef(null),
        { currentLayout: T, mode: j } = (0, s.cf)([c.A], () => {
            let e = c.A.getMode(t.id),
                i = n === f.BRT.POPOUT;
            i && (e = f._Of.VIDEO);
            let l = e === f._Of.VIDEO ? c.A.getLayout(t.id, n) : f.DUB.MINIMUM;
            return i && l !== f.DUB.FULL_SCREEN && (l = f.DUB.NO_CHAT), { currentLayout: l, mode: e };
        }, [t, n]),
        v = (0, s.bG)([g.A], () => g.A.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        N.current = j;
    });
    let y = l.useRef(T),
        { currentDocument: R, rootNode: O } = l.useMemo(() => {
            let e = null != C && b ? C.document : document,
                t = I.document.getElementById("app-mount");
            return { currentWindow: I, currentDocument: e, rootNode: t };
        }, [C, b, I]),
        L = E && !b,
        D = j === f._Of.VIDEO && v && !L,
        M = l.useCallback(
            (e, i) => {
                i !== e &&
                    (r.A.updateLayout(t.id, i, n),
                    i === f.DUB.FULL_SCREEN && t.isPrivate() && p._.dispatch(f.jej.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        G = l.useCallback(
            (e) => {
                null == O ||
                    (e === f.DUB.FULL_SCREEN &&
                        (M(e, y.current),
                        (0, x.sP)((e) => {
                            y.current = e;
                        }, R)));
            },
            [R, M, O],
        ),
        U = l.useCallback(
            (e) => () => {
                null != O &&
                    ((0, u.X)(S, u.O.FULL_SCREEN, e !== f.DUB.FULL_SCREEN),
                    e !== f.DUB.FULL_SCREEN ? ((y.current = e), M(e, f.DUB.FULL_SCREEN), (0, x.tl)(O)) : G(e));
            },
            [M, G, O, S],
        );
    l.useEffect(() => {
        let e = () => {
            null != O && ((0, x._U)(O, R) || T !== f.DUB.FULL_SCREEN || U(T)());
        };
        return (
            R.addEventListener(x.Wb, e),
            () => {
                R.removeEventListener(x.Wb, e);
            }
        );
    }, [R, T, U, O]);
    let P = { channel: t, maybeLeaveFullScreen: G },
        k = l.useRef(P);
    return (l.useEffect(() => {
        k.current = P;
    }),
    l.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            m.default.track(f.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: b ? "popout" : T, ...(0, o.QS)(e.id) }),
            () => {
                (b && (0, _.isMac)()) || t(T);
            }
        );
    }, [T, b]),
    l.useEffect(() => {
        null != O && N.current === f._Of.VIDEO && j === f._Of.VOICE && (0, x.sP)(O, R);
    }, [R, j, N, O]),
    l.useEffect(() => {
        !v && b && a.h.wait(() => h.close(f.MLl.CHANNEL_CALL_POPOUT));
    }, [v, b]),
    D)
        ? (0, i.jsx)(A.A, { themeable: !1, node: O, guestWindow: C, onClick: U(T) })
        : null;
}
