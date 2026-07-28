a.d(t, { A: () => h });
var l = a(582128),
    i = a(913122),
    n = a(899847),
    c = a(695515),
    s = a(191627);
function h(e) {
    let { onError: t, onSuccess: a } = e ?? {},
        [h, u] = l.useState(!1),
        [r, d] = l.useState(!1),
        [y, f] = l.useState(!1),
        [w, o] = l.useState(!1),
        [v, A] = l.useState(!1),
        [L, C] = l.useState(!1),
        [k, p] = l.useState(!1),
        [g, E] = l.useState(!1),
        I = h || r || y || w || L || g,
        T = l.useCallback(
            async (e) => {
                if (!I) {
                    u(!0);
                    try {
                        await (0, n.nt)(e, s.Ef.ACTIVE), a?.();
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [I, t, a],
        ),
        b = l.useCallback(
            async (e) => {
                if (!I) {
                    d(!0);
                    try {
                        await (0, n.nt)(e, s.Ef.DECLINED), a?.();
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        d(!1);
                    }
                }
            },
            [I, t, a],
        ),
        R = l.useCallback(
            async (e) => {
                if (!I) {
                    f(!0);
                    try {
                        await (0, n.nt)(e, s.Ef.INACTIVE), a?.();
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        f(!1);
                    }
                }
            },
            [I, t, a],
        ),
        S = l.useCallback(
            async (e) => {
                if (!I) {
                    o(!0);
                    try {
                        await (0, n.e$)(e), a?.();
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        o(!1);
                    }
                }
            },
            [I, t, a],
        ),
        m = l.useCallback(async () => {
            if (!v) {
                A(!0);
                try {
                    await (0, n.HB)(), a?.();
                } catch (a) {
                    let e = new i.LG(a);
                    t?.(e);
                } finally {
                    A(!1);
                }
            }
        }, [v, t, a]),
        M = l.useCallback(
            async (e) => {
                if (!k) {
                    p(!0);
                    try {
                        await n.Ay.fetchTeenActivity(e), a?.();
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        p(!1);
                    }
                }
            },
            [k, t, a],
        );
    return {
        acceptLinkRequest: T,
        declineLinkRequest: b,
        disconnectLinkRequest: R,
        cancelLinkRequest: S,
        selectTeenUser: M,
        getLinkCode: m,
        requestLink: l.useCallback(
            async (e, l) => {
                if (!L) {
                    C(!0);
                    try {
                        await n.Ay.requestLink(e, l), a?.();
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [L, t, a],
        ),
        loadMore: l.useCallback(
            async (e) => {
                let a = c.A.getActionsForDisplayType(e),
                    l = a[a.length - 1],
                    s = c.A.getStartId(),
                    h = c.A.getSelectedTeenId();
                if (!g && null != s && null != h) {
                    E(!0);
                    try {
                        await n.Ay.fetchMoreTeenActivity(h, e, s, l.event_id);
                    } catch (a) {
                        let e = new i.LG(a);
                        t?.(e);
                    } finally {
                        E(!1);
                    }
                }
            },
            [g, t],
        ),
        isAcceptLoading: h,
        isDeclineLoading: r,
        isDisconnectLoading: y,
        isCancelLoading: w,
        isGetLinkCodeLoading: v,
        isSelectTeenUserLoading: k,
        isRequestingLink: L,
        isMoreLoading: g,
    };
}
