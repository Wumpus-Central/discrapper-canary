n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(73153),
    r = n(367513),
    o = n(58149),
    c = n(688810),
    d = n(313961),
    u = n(384059),
    h = n(574172),
    A = n(423562),
    _ = n(309010),
    m = n(954571),
    g = n(203982),
    p = n(723702),
    f = n(475815),
    x = n(652215);
function E(e) {
    let { channel: t, appContext: n, popoutOpen: E, popoutWindow: I, currentWindow: C } = e,
        { parentAnalyticsLocation: N } = (0, c.Ay)(),
        T = n === x.BRT.POPOUT,
        S = l.useRef(null),
        { currentLayout: b, mode: y } = (0, s.cf)([d.A], () => {
            let e = d.A.getMode(t.id),
                i = n === x.BRT.POPOUT;
            i && (e = x._Of.VIDEO);
            let l = e === x._Of.VIDEO ? d.A.getLayout(t.id, n) : x.DUB.MINIMUM;
            return i && l !== x.DUB.FULL_SCREEN && (l = x.DUB.NO_CHAT), { currentLayout: l, mode: e };
        }, [t, n]),
        v = (0, s.bG)([_.A], () => _.A.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        S.current = y;
    });
    let j = l.useRef(b),
        { currentDocument: R, rootNode: O } = l.useMemo(() => {
            let e = null != I && T ? I.document : document,
                t = C.document.getElementById("app-mount");
            return { currentWindow: C, currentDocument: e, rootNode: t };
        }, [I, T, C]),
        L = E && !T,
        M = y === x._Of.VIDEO && v && !L,
        D = l.useCallback(
            (e, i) => {
                i !== e &&
                    (r.A.updateLayout(t.id, i, n),
                    i === x.DUB.FULL_SCREEN && t.isPrivate() && g._.dispatch(x.jej.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        U = l.useCallback(
            (e) => {
                null == O ||
                    (e === x.DUB.FULL_SCREEN &&
                        (D(e, j.current),
                        (0, f.sP)((e) => {
                            j.current = e;
                        }, R)));
            },
            [R, D, O],
        ),
        G = l.useCallback(
            (e) => () => {
                null != O &&
                    ((0, u.X)(N, u.O.FULL_SCREEN, e !== x.DUB.FULL_SCREEN),
                    e !== x.DUB.FULL_SCREEN ? ((j.current = e), D(e, x.DUB.FULL_SCREEN), (0, f.tl)(O)) : U(e));
            },
            [D, U, O, N],
        );
    l.useEffect(() => {
        let e = () => {
            null != O && ((0, f._U)(O, R) || b !== x.DUB.FULL_SCREEN || G(b)());
        };
        return (
            R.addEventListener(f.Wb, e),
            () => {
                R.removeEventListener(f.Wb, e);
            }
        );
    }, [R, b, G, O]);
    let P = { channel: t, maybeLeaveFullScreen: U },
        k = l.useRef(P);
    return (l.useEffect(() => {
        k.current = P;
    }),
    l.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            m.default.track(x.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: T ? "popout" : b, ...(0, o.QS)(e.id) }),
            () => {
                (T && (0, p.isMac)()) || t(b);
            }
        );
    }, [b, T]),
    l.useEffect(() => {
        null != O && S.current === x._Of.VIDEO && y === x._Of.VOICE && (0, f.sP)(O, R);
    }, [R, y, S, O]),
    l.useEffect(() => {
        !v && T && a.h.wait(() => h.close(x.MLl.CHANNEL_CALL_POPOUT));
    }, [v, T]),
    M)
        ? (0, i.jsx)(A.A, { themeable: !1, node: O, guestWindow: I, onClick: G(b) })
        : null;
}
