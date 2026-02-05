"use strict";
n.d(t, { A: () => g }), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(671325),
    a = n(562465),
    s = n(397927),
    o = n(954571),
    l = n(676279),
    u = n(652215),
    c = n(339747),
    d = n(883364),
    _ = n(336343),
    f = n(37232),
    p = n(855249),
    h = n(909902);
let m = (e) => {
        let t = (0, l.TM)(),
            [n, i] = (0, r.useState)({ modalGlowEntry: void 0, modalGlowIdle: void 0, modalGlowExit: void 0 }),
            [s, m] = (0, r.useState)(!1),
            [g, E] = (0, r.useState)(!1),
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
        let y = (0, r.useCallback)(
                () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
            ),
            S = (0, r.useCallback)(async () => {
                if (!y() && !A) {
                    I(!0), E(!1), m(!1);
                    try {
                        let e = Date.now(),
                            [n, r, s] = await Promise.all([
                                a.Bo.get({ url: t ? c.A : d.A, binary: !0, rejectWithError: !0 }),
                                a.Bo.get({ url: t ? _.A : f.A, binary: !0, rejectWithError: !0 }),
                                a.Bo.get({ url: t ? p.A : h.A, binary: !0, rejectWithError: !0 }),
                            ]);
                        T.current &&
                            (i({
                                modalGlowEntry: window.URL.createObjectURL(n.body),
                                modalGlowExit: window.URL.createObjectURL(r.body),
                                modalGlowIdle: window.URL.createObjectURL(s.body),
                            }),
                            m(!0),
                            o.default.track(u.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                load_duration_ms: Date.now() - e,
                            }));
                    } catch (e) {
                        T.current && E(!0);
                    } finally {
                        T.current && I(!1);
                    }
                }
            }, [y, A, t]);
        return (
            (0, r.useEffect)(() => {
                e && S();
            }, [e, S]),
            (0, r.useEffect)(
                () => () => {
                    null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                        null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                        null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                },
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
            ),
            { mediaUrls: n, isSuccess: s, isFailure: g, isLoading: A }
        );
    },
    g = (e) => {
        (0, r.useEffect)(() => {
            e && o.default.track(u.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
        }, [e]);
        let { mediaUrls: t, isSuccess: n, isLoading: a } = m(e),
            { status: l } = (0, s.CEU)(e ? i.A : null);
        return { mediaUrls: t, isSuccess: n && l === s.BWP.Loaded, isLoading: a || l === s.BWP.Loading };
    };
