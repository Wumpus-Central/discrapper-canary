n.d(t, { Z: () => g }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(647438),
    i = n(646903),
    a = n(544891),
    o = n(481060),
    s = n(626135),
    l = n(526167),
    c = n(981631),
    u = n(316776),
    d = n(279421),
    f = n(965715),
    _ = n(410401),
    p = n(51926),
    h = n(701262);
let m = (e) => {
        let t = (0, l.rO)(),
            [n, i] = (0, r.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
            }),
            [o, m] = (0, r.useState)(!1),
            [g, E] = (0, r.useState)(!1),
            [b, y] = (0, r.useState)(!1),
            O = (0, r.useRef)(!0);
        (0, r.useEffect)(
            () => (
                (O.current = !0),
                () => {
                    O.current = !1;
                }
            ),
            [],
        );
        let v = (0, r.useCallback)(
                () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
            ),
            I = (0, r.useCallback)(async () => {
                if (!v() && !b) {
                    y(!0), E(!1), m(!1);
                    try {
                        let e = Date.now(),
                            [n, r, o] = await Promise.all([
                                a.tn.get({
                                    url: t ? u.Z : d.Z,
                                    binary: !0,
                                    rejectWithError: !0,
                                }),
                                a.tn.get({
                                    url: t ? f.Z : _.Z,
                                    binary: !0,
                                    rejectWithError: !0,
                                }),
                                a.tn.get({
                                    url: t ? p.Z : h.Z,
                                    binary: !0,
                                    rejectWithError: !0,
                                }),
                            ]);
                        O.current &&
                            (i({
                                modalGlowEntry: window.URL.createObjectURL(n.body),
                                modalGlowExit: window.URL.createObjectURL(r.body),
                                modalGlowIdle: window.URL.createObjectURL(o.body),
                            }),
                            m(!0),
                            s.default.track(c.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                load_duration_ms: Date.now() - e,
                            }));
                    } catch (e) {
                        O.current && E(!0);
                    } finally {
                        O.current && y(!1);
                    }
                }
            }, [v, b, t]);
        return (
            (0, r.useEffect)(() => {
                e && I();
            }, [e, I]),
            (0, r.useEffect)(
                () => () => {
                    null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                        null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                        null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                },
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
            ),
            {
                mediaUrls: n,
                isSuccess: o,
                isFailure: g,
                isLoading: b,
            }
        );
    },
    g = (e) => {
        (0, r.useEffect)(() => {
            e && s.default.track(c.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
        }, [e]);
        let { mediaUrls: t, isSuccess: n, isLoading: a } = m(e),
            { status: l } = (0, o.VG8)(e ? i.Z : null);
        return {
            mediaUrls: t,
            isSuccess: n && l === o.JtY.Loaded,
            isLoading: a || l === o.JtY.Loading,
        };
    };
