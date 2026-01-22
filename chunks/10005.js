n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(198982),
    a = n(899847),
    s = n(695515),
    o = n(191627);

function l(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [l, c] = r.useState(!1),
        [u, d] = r.useState(!1),
        [f, p] = r.useState(!1),
        [_, h] = r.useState(!1),
        [m, g] = r.useState(!1),
        [E, b] = r.useState(!1),
        [y, O] = r.useState(!1),
        [A, v] = r.useState(!1),
        S = l || u || f || _ || E || A,
        I = r.useCallback(
            async (e) => {
                if (!S) {
                    c(!0);
                    try {
                        await (0, a.nt)(e, o.Ef.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [S, t, n],
        ),
        T = r.useCallback(
            async (e) => {
                if (!S) {
                    d(!0);
                    try {
                        await (0, a.nt)(e, o.Ef.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        d(!1);
                    }
                }
            },
            [S, t, n],
        ),
        C = r.useCallback(
            async (e) => {
                if (!S) {
                    p(!0);
                    try {
                        await (0, a.nt)(e, o.Ef.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [S, t, n],
        ),
        N = r.useCallback(
            async (e) => {
                if (!S) {
                    h(!0);
                    try {
                        await (0, a.e$)(e), null == n || n();
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [S, t, n],
        ),
        R = r.useCallback(async () => {
            if (!m) {
                g(!0);
                try {
                    await (0, a.HB)(), null == n || n();
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e);
                } finally {
                    g(!1);
                }
            }
        }, [m, t, n]),
        w = r.useCallback(
            async (e) => {
                if (!y) {
                    O(!0);
                    try {
                        await a.Ay.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        O(!1);
                    }
                }
            },
            [y, t, n],
        );
    return {
        acceptLinkRequest: I,
        declineLinkRequest: T,
        disconnectLinkRequest: C,
        cancelLinkRequest: N,
        selectTeenUser: w,
        getLinkCode: R,
        requestLink: r.useCallback(
            async (e, r) => {
                if (!E) {
                    b(!0);
                    try {
                        await a.Ay.requestLink(e, r), null == n || n();
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [E, t, n],
        ),
        loadMore: r.useCallback(
            async (e) => {
                let n = s.A.getActionsForDisplayType(e),
                    r = n[n.length - 1],
                    o = s.A.getStartId(),
                    l = s.A.getSelectedTeenId();
                if (!A && null != o && null != l) {
                    v(!0);
                    try {
                        await a.Ay.fetchMoreTeenActivity(l, e, o, r.event_id);
                    } catch (n) {
                        let e = new i.LG(n);
                        null == t || t(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [A, t],
        ),
        isAcceptLoading: l,
        isDeclineLoading: u,
        isDisconnectLoading: f,
        isCancelLoading: _,
        isGetLinkCodeLoading: m,
        isSelectTeenUserLoading: y,
        isRequestingLink: E,
        isMoreLoading: A,
    };
}
