"use strict";
n.d(t, { A: () => p }), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(671325),
    s = n(562465),
    a = n(799226),
    o = n(954571),
    l = n(676279),
    u = n(652215),
    d = n(339747),
    c = n(883364),
    _ = n(336343),
    f = n(37232),
    E = n(855249),
    h = n(909902);
let p = (e) => {
    (0, r.useEffect)(() => {
        e && o.default.track(u.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
    }, [e]);
    let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: p,
        } = ((e) => {
            let t = (0, l.TM)(),
                [n, i] = (0, r.useState)({ modalGlowEntry: void 0, modalGlowIdle: void 0, modalGlowExit: void 0 }),
                [a, p] = (0, r.useState)(!1),
                [m, g] = (0, r.useState)(!1),
                [A, I] = (0, r.useState)(!1),
                T = (0, r.useRef)(!0);
            (0, r.useEffect)(
                () => (
                    (T.current = !0),
                    () => {
                        T.current = !1;
                    }
                ),
                [],
            );
            let S = (0, r.useCallback)(
                    () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                y = (0, r.useCallback)(async () => {
                    if (!S() && !A) {
                        I(!0), g(!1), p(!1);
                        try {
                            let e = Date.now(),
                                [n, r, a] = await Promise.all([
                                    s.Bo.get({ url: t ? d.A : c.A, binary: !0, rejectWithError: !0 }),
                                    s.Bo.get({ url: t ? _.A : f.A, binary: !0, rejectWithError: !0 }),
                                    s.Bo.get({ url: t ? E.A : h.A, binary: !0, rejectWithError: !0 }),
                                ]);
                            T.current &&
                                (i({
                                    modalGlowEntry: window.URL.createObjectURL(n.body),
                                    modalGlowExit: window.URL.createObjectURL(r.body),
                                    modalGlowIdle: window.URL.createObjectURL(a.body),
                                }),
                                p(!0),
                                o.default.track(u.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                    load_duration_ms: Date.now() - e,
                                }));
                        } catch (e) {
                            T.current && g(!0);
                        } finally {
                            T.current && I(!1);
                        }
                    }
                }, [S, A, t]);
            return (
                (0, r.useEffect)(() => {
                    e && y();
                }, [e, y]),
                (0, r.useEffect)(
                    () => () => {
                        null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                            null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                            null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                    },
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                { mediaUrls: n, isSuccess: a, isFailure: m, isLoading: A }
            );
        })(e),
        { status: m } = (0, a.CE)(e ? i.A : null);
    return { mediaUrls: t, isSuccess: n && m === a.BW.Loaded, isLoading: p || m === a.BW.Loading };
};
