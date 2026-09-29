a.d(t, { A: () => u });
var l = a(582128),
    n = a(913122),
    c = a(899847),
    i = a(695515),
    s = a(191627);
function u(e) {
    let { onError: t, onSuccess: a } = e ?? {},
        [u, h] = l.useState(!1),
        [y, r] = l.useState(!1),
        [f, w] = l.useState(!1),
        [d, o] = l.useState(!1),
        [L, k] = l.useState(!1),
        [A, C] = l.useState(!1),
        [p, v] = l.useState(!1),
        [g, b] = l.useState(!1),
        E = u || y || f || d || A || g,
        S = l.useCallback(
            async (e) => {
                if (!E) {
                    h(!0);
                    try {
                        (await (0, c.nt)(e, s.Ef.ACTIVE), a?.());
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, t, a],
        ),
        I = l.useCallback(
            async (e) => {
                if (!E) {
                    r(!0);
                    try {
                        (await (0, c.nt)(e, s.Ef.DECLINED), a?.());
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        r(!1);
                    }
                }
            },
            [E, t, a],
        ),
        T = l.useCallback(
            async (e) => {
                if (!E) {
                    w(!0);
                    try {
                        (await (0, c.nt)(e, s.Ef.INACTIVE), a?.());
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        w(!1);
                    }
                }
            },
            [E, t, a],
        ),
        G = l.useCallback(
            async (e) => {
                if (!E) {
                    o(!0);
                    try {
                        (await (0, c.e$)(e), a?.());
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        o(!1);
                    }
                }
            },
            [E, t, a],
        ),
        R = l.useCallback(async () => {
            if (!L) {
                k(!0);
                try {
                    (await (0, c.HB)(), a?.());
                } catch (a) {
                    let e = new n.LG(a);
                    t?.(e);
                } finally {
                    k(!1);
                }
            }
        }, [L, t, a]),
        q = l.useCallback(
            async (e) => {
                if (!p) {
                    v(!0);
                    try {
                        (await c.Ay.fetchTeenActivity(e), a?.());
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        v(!1);
                    }
                }
            },
            [p, t, a],
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: I,
        disconnectLinkRequest: T,
        cancelLinkRequest: G,
        selectTeenUser: q,
        getLinkCode: R,
        requestLink: l.useCallback(
            async (e, l) => {
                if (!A) {
                    C(!0);
                    try {
                        (await c.Ay.requestLink(e, l), a?.());
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        C(!1);
                    }
                }
            },
            [A, t, a],
        ),
        loadMore: l.useCallback(
            async (e) => {
                let a = i.A.getActionsForDisplayType(e),
                    l = a[a.length - 1],
                    s = i.A.getStartId(),
                    u = i.A.getSelectedTeenId();
                if (!g && null != s && null != u) {
                    b(!0);
                    try {
                        await c.Ay.fetchMoreTeenActivity(u, e, s, l.event_id);
                    } catch (a) {
                        let e = new n.LG(a);
                        t?.(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [g, t],
        ),
        isAcceptLoading: u,
        isDeclineLoading: y,
        isDisconnectLoading: f,
        isCancelLoading: d,
        isGetLinkCodeLoading: L,
        isSelectTeenUserLoading: p,
        isRequestingLink: A,
        isMoreLoading: g,
    };
}
