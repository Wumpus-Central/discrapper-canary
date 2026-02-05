n.d(t, { A: () => o });
var i = n(64700),
    s = n(198982),
    r = n(899847),
    a = n(695515),
    l = n(191627);
function o(e) {
    let { onError: t, onSuccess: n } = e ?? {},
        [o, c] = i.useState(!1),
        [d, u] = i.useState(!1),
        [_, m] = i.useState(!1),
        [A, g] = i.useState(!1),
        [E, h] = i.useState(!1),
        [p, C] = i.useState(!1),
        [x, T] = i.useState(!1),
        [I, S] = i.useState(!1),
        f = o || d || _ || A || p || I,
        N = i.useCallback(
            async (e) => {
                if (!f) {
                    c(!0);
                    try {
                        await (0, r.nt)(e, l.Ef.ACTIVE), n?.();
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [f, t, n],
        ),
        b = i.useCallback(
            async (e) => {
                if (!f) {
                    u(!0);
                    try {
                        await (0, r.nt)(e, l.Ef.DECLINED), n?.();
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [f, t, n],
        ),
        R = i.useCallback(
            async (e) => {
                if (!f) {
                    m(!0);
                    try {
                        await (0, r.nt)(e, l.Ef.INACTIVE), n?.();
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        m(!1);
                    }
                }
            },
            [f, t, n],
        ),
        v = i.useCallback(
            async (e) => {
                if (!f) {
                    g(!0);
                    try {
                        await (0, r.e$)(e), n?.();
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        g(!1);
                    }
                }
            },
            [f, t, n],
        ),
        O = i.useCallback(async () => {
            if (!E) {
                h(!0);
                try {
                    await (0, r.HB)(), n?.();
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e);
                } finally {
                    h(!1);
                }
            }
        }, [E, t, n]),
        j = i.useCallback(
            async (e) => {
                if (!x) {
                    T(!0);
                    try {
                        await r.Ay.fetchTeenActivity(e), n?.();
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        T(!1);
                    }
                }
            },
            [x, t, n],
        );
    return {
        acceptLinkRequest: N,
        declineLinkRequest: b,
        disconnectLinkRequest: R,
        cancelLinkRequest: v,
        selectTeenUser: j,
        getLinkCode: O,
        requestLink: i.useCallback(
            async (e, i) => {
                if (!p) {
                    C(!0);
                    try {
                        await r.Ay.requestLink(e, i), n?.();
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [p, t, n],
        ),
        loadMore: i.useCallback(
            async (e) => {
                let n = a.A.getActionsForDisplayType(e),
                    i = n[n.length - 1],
                    l = a.A.getStartId(),
                    o = a.A.getSelectedTeenId();
                if (!I && null != l && null != o) {
                    S(!0);
                    try {
                        await r.Ay.fetchMoreTeenActivity(o, e, l, i.event_id);
                    } catch (n) {
                        let e = new s.LG(n);
                        t?.(e);
                    } finally {
                        S(!1);
                    }
                }
            },
            [I, t],
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: _,
        isCancelLoading: A,
        isGetLinkCodeLoading: E,
        isSelectTeenUserLoading: x,
        isRequestingLink: p,
        isMoreLoading: I,
    };
}
