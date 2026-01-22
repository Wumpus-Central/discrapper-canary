n.d(t, {
    A: () => O,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(367513),
    o = n(58149),
    c = n(688810),
    u = n(313961),
    d = n(384059),
    f = n(574172),
    p = n(423562),
    h = n(309010),
    b = n(954571),
    g = n(203982),
    m = n(723702),
    A = n(475815),
    y = n(652215);

function O(e) {
    let { channel: t, appContext: n, popoutOpen: O, popoutWindow: j, currentWindow: v } = e,
        { parentAnalyticsLocation: x } = (0, c.Ay)(),
        E = n === y.BRT.POPOUT,
        _ = l.useRef(null),
        { currentLayout: C, mode: S } = (0, i.cf)([u.A], () => {
            let e = u.A.getMode(t.id),
                r = n === y.BRT.POPOUT;
            r && (e = y._Of.VIDEO);
            let l = e === y._Of.VIDEO ? u.A.getLayout(t.id, n) : y.DUB.MINIMUM;
            return (
                r && l !== y.DUB.FULL_SCREEN && (l = y.DUB.NO_CHAT),
                {
                    currentLayout: l,
                    mode: e,
                }
            );
        }, [t, n]),
        I = (0, i.bG)([h.A], () => h.A.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        _.current = S;
    });
    let N = l.useRef(C),
        { currentDocument: T, rootNode: P } = l.useMemo(() => {
            let e = null != j && E ? j.document : document,
                t = v.document.getElementById("app-mount");
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t,
            };
        }, [j, E, v]),
        w = O && !E,
        R = S === y._Of.VIDEO && I && !w,
        D = l.useCallback(
            (e, r) => {
                r !== e &&
                    (s.A.updateLayout(t.id, r, n),
                    r === y.DUB.FULL_SCREEN && t.isPrivate() && g._.dispatch(y.jej.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        M = l.useCallback(
            (e) => {
                null == P ||
                    (e === y.DUB.FULL_SCREEN &&
                        (D(e, N.current),
                        (0, A.sP)((e) => {
                            N.current = e;
                        }, T)));
            },
            [T, D, P],
        ),
        L = l.useCallback(
            (e) => () => {
                null != P &&
                    ((0, d.X)(x, d.O.FULL_SCREEN, e !== y.DUB.FULL_SCREEN),
                    e !== y.DUB.FULL_SCREEN ? ((N.current = e), D(e, y.DUB.FULL_SCREEN), (0, A.tl)(P)) : M(e));
            },
            [D, M, P, x],
        );
    l.useEffect(() => {
        let e = () => {
            null != P && ((0, A._U)(P, T) || C !== y.DUB.FULL_SCREEN || L(C)());
        };
        return (
            T.addEventListener(A.Wb, e),
            () => {
                T.removeEventListener(A.Wb, e);
            }
        );
    }, [T, C, L, P]);
    let G = {
            channel: t,
            maybeLeaveFullScreen: M,
        },
        k = l.useRef(G);
    return (l.useEffect(() => {
        k.current = G;
    }),
    l.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            b.default.track(
                y.HAw.VIDEO_LAYOUT_TOGGLED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        video_layout: E ? "popout" : C,
                    },
                    (0, o.QS)(e.id),
                ),
            ),
            () => {
                (E && (0, m.isMac)()) || t(C);
            }
        );
    }, [C, E]),
    l.useEffect(() => {
        null != P && _.current === y._Of.VIDEO && S === y._Of.VOICE && (0, A.sP)(P, T);
    }, [T, S, _, P]),
    l.useEffect(() => {
        !I && E && a.h.wait(() => f.close(y.MLl.CHANNEL_CALL_POPOUT));
    }, [I, E]),
    R)
        ? (0, r.jsx)(p.A, {
              themeable: !1,
              node: P,
              guestWindow: j,
              onClick: L(C),
          })
        : null;
}
