l.d(t, { A: () => d });
var n = l(64700),
    i = l(913122),
    s = l(899847),
    a = l(695515),
    r = l(191627);
function d(e) {
    let { onError: t, onSuccess: l } = e ?? {},
        [d, c] = n.useState(!1),
        [u, o] = n.useState(!1),
        [x, m] = n.useState(!1),
        [h, j] = n.useState(!1),
        [g, f] = n.useState(!1),
        [v, A] = n.useState(!1),
        [E, N] = n.useState(!1),
        [p, T] = n.useState(!1),
        y = d || u || x || h || v || p,
        S = n.useCallback(
            async (e) => {
                if (!y) {
                    c(!0);
                    try {
                        await (0, s.nt)(e, r.Ef.ACTIVE), l?.();
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [y, t, l],
        ),
        I = n.useCallback(
            async (e) => {
                if (!y) {
                    o(!0);
                    try {
                        await (0, s.nt)(e, r.Ef.DECLINED), l?.();
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        o(!1);
                    }
                }
            },
            [y, t, l],
        ),
        b = n.useCallback(
            async (e) => {
                if (!y) {
                    m(!0);
                    try {
                        await (0, s.nt)(e, r.Ef.INACTIVE), l?.();
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        m(!1);
                    }
                }
            },
            [y, t, l],
        ),
        _ = n.useCallback(
            async (e) => {
                if (!y) {
                    j(!0);
                    try {
                        await (0, s.e$)(e), l?.();
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        j(!1);
                    }
                }
            },
            [y, t, l],
        ),
        C = n.useCallback(async () => {
            if (!g) {
                f(!0);
                try {
                    await (0, s.HB)(), l?.();
                } catch (l) {
                    let e = new i.LG(l);
                    t?.(e);
                } finally {
                    f(!1);
                }
            }
        }, [g, t, l]),
        L = n.useCallback(
            async (e) => {
                if (!E) {
                    N(!0);
                    try {
                        await s.Ay.fetchTeenActivity(e), l?.();
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        N(!1);
                    }
                }
            },
            [E, t, l],
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: I,
        disconnectLinkRequest: b,
        cancelLinkRequest: _,
        selectTeenUser: L,
        getLinkCode: C,
        requestLink: n.useCallback(
            async (e, n) => {
                if (!v) {
                    A(!0);
                    try {
                        await s.Ay.requestLink(e, n), l?.();
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        A(!1);
                    }
                }
            },
            [v, t, l],
        ),
        loadMore: n.useCallback(
            async (e) => {
                let l = a.A.getActionsForDisplayType(e),
                    n = l[l.length - 1],
                    r = a.A.getStartId(),
                    d = a.A.getSelectedTeenId();
                if (!p && null != r && null != d) {
                    T(!0);
                    try {
                        await s.Ay.fetchMoreTeenActivity(d, e, r, n.event_id);
                    } catch (l) {
                        let e = new i.LG(l);
                        t?.(e);
                    } finally {
                        T(!1);
                    }
                }
            },
            [p, t],
        ),
        isAcceptLoading: d,
        isDeclineLoading: u,
        isDisconnectLoading: x,
        isCancelLoading: h,
        isGetLinkCodeLoading: g,
        isSelectTeenUserLoading: E,
        isRequestingLink: v,
        isMoreLoading: p,
    };
}
