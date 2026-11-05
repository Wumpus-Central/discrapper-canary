var l = a(582128),
    c = a(627784),
    n = a(899847),
    i = a(695515),
    s = a(191627);
a.d(
    t,
    {},
    {
        A: function (e) {
            let { onError: t, onSuccess: a } = e ?? {},
                [y, u] = l.useState(!1),
                [f, r] = l.useState(!1),
                [k, w] = l.useState(!1),
                [h, L] = l.useState(!1),
                [d, C] = l.useState(!1),
                [A, o] = l.useState(!1),
                [b, p] = l.useState(!1),
                [S, G] = l.useState(!1),
                E = y || f || k || h || A || S,
                q = l.useCallback(
                    async (e) => {
                        if (!E) {
                            u(!0);
                            try {
                                (await (0, n.nt)(e, s.Ef.ACTIVE), a?.());
                            } catch (a) {
                                let e = new c.LG(a);
                                t?.(e);
                            } finally {
                                u(!1);
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
                                (await (0, n.nt)(e, s.Ef.DECLINED), a?.());
                            } catch (a) {
                                let e = new c.LG(a);
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
                                (await (0, n.nt)(e, s.Ef.INACTIVE), a?.());
                            } catch (a) {
                                let e = new c.LG(a);
                                t?.(e);
                            } finally {
                                w(!1);
                            }
                        }
                    },
                    [E, t, a],
                ),
                g = l.useCallback(
                    async (e) => {
                        if (!E) {
                            L(!0);
                            try {
                                (await (0, n.e$)(e), a?.());
                            } catch (a) {
                                let e = new c.LG(a);
                                t?.(e);
                            } finally {
                                L(!1);
                            }
                        }
                    },
                    [E, t, a],
                ),
                v = l.useCallback(async () => {
                    if (!d) {
                        C(!0);
                        try {
                            (await (0, n.HB)(), a?.());
                        } catch (a) {
                            let e = new c.LG(a);
                            t?.(e);
                        } finally {
                            C(!1);
                        }
                    }
                }, [d, t, a]),
                R = l.useCallback(
                    async (e) => {
                        if (!b) {
                            p(!0);
                            try {
                                (await n.Ay.fetchTeenActivity(e), a?.());
                            } catch (a) {
                                let e = new c.LG(a);
                                t?.(e);
                            } finally {
                                p(!1);
                            }
                        }
                    },
                    [b, t, a],
                );
            return {
                acceptLinkRequest: q,
                declineLinkRequest: I,
                disconnectLinkRequest: T,
                cancelLinkRequest: g,
                selectTeenUser: R,
                getLinkCode: v,
                requestLink: l.useCallback(
                    async (e, l) => {
                        if (!A) {
                            o(!0);
                            try {
                                (await n.Ay.requestLink(e, l), a?.());
                            } catch (a) {
                                let e = new c.LG(a);
                                t?.(e);
                            } finally {
                                o(!1);
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
                            y = i.A.getSelectedTeenId();
                        if (!S && null != s && null != y) {
                            G(!0);
                            try {
                                await n.Ay.fetchMoreTeenActivity(y, e, s, l.event_id);
                            } catch (a) {
                                let e = new c.LG(a);
                                t?.(e);
                            } finally {
                                G(!1);
                            }
                        }
                    },
                    [S, t],
                ),
                isAcceptLoading: y,
                isDeclineLoading: f,
                isDisconnectLoading: k,
                isCancelLoading: h,
                isGetLinkCodeLoading: d,
                isSelectTeenUserLoading: b,
                isRequestingLink: A,
                isMoreLoading: S,
            };
        },
    },
);
