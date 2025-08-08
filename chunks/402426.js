n.d(t, { Z: () => _ }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(73800),
    i = n(647000),
    o = n(544891),
    a = n(396704),
    s = n(626135),
    l = n(981631),
    c = n(279421),
    u = n(410401),
    d = n(701262);
let f = (e) => {
        let [t, n] = (0, r.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
            }),
            [i, a] = (0, r.useState)(!1),
            [s, l] = (0, r.useState)(!1),
            [f, _] = (0, r.useState)(!1),
            p = (0, r.useRef)(!0);
        (0, r.useEffect)(
            () => (
                (p.current = !0),
                () => {
                    p.current = !1;
                }
            ),
            [],
        );
        let h = (0, r.useCallback)(
                () => null != t.modalGlowEntry && null != t.modalGlowIdle && null != t.modalGlowExit,
                [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit],
            ),
            m = (0, r.useCallback)(async () => {
                if (!h() && !f) {
                    _(!0), l(!1), a(!1);
                    try {
                        let [e, t, r] = await Promise.all([
                            o.tn.get({
                                url: c.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: u.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: d.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                        ]);
                        p.current &&
                            (n({
                                modalGlowEntry: window.URL.createObjectURL(e.body),
                                modalGlowExit: window.URL.createObjectURL(t.body),
                                modalGlowIdle: window.URL.createObjectURL(r.body),
                            }),
                            a(!0));
                    } catch (e) {
                        p.current && l(!0);
                    } finally {
                        p.current && _(!1);
                    }
                }
            }, [h, f]);
        return (
            (0, r.useEffect)(() => {
                e && m();
            }, [e, m]),
            (0, r.useEffect)(
                () => () => {
                    null != t.modalGlowEntry && window.URL.revokeObjectURL(t.modalGlowEntry),
                        null != t.modalGlowIdle && window.URL.revokeObjectURL(t.modalGlowIdle),
                        null != t.modalGlowExit && window.URL.revokeObjectURL(t.modalGlowExit);
                },
                [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit],
            ),
            {
                mediaUrls: t,
                isSuccess: i,
                isFailure: s,
                isLoading: f,
            }
        );
    },
    _ = (e) => {
        (0, r.useEffect)(() => {
            e && s.default.track(l.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
        }, [e]);
        let { mediaUrls: t, isSuccess: n, isLoading: o } = f(e),
            { status: c } = (0, a.VG)(e ? i.Z : null);
        return {
            mediaUrls: t,
            isSuccess: n && c === a.Jt.Loaded,
            isLoading: o || c === a.Jt.Loading,
        };
    };
