n.d(t, { Z: () => g }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(73800),
    i = n(525729),
    o = n(544891),
    a = n(396704),
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
            [a, s] = (0, r.useState)(!1),
            [c, m] = (0, r.useState)(!1),
            [g, E] = (0, r.useState)(!1),
            b = (0, r.useRef)(!0);
        (0, r.useEffect)(
            () => (
                (b.current = !0),
                () => {
                    b.current = !1;
                }
            ),
            [],
        );
        let y = (0, r.useCallback)(
                () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
            ),
            O = (0, r.useCallback)(async () => {
                if (!y() && !g) {
                    E(!0), m(!1), s(!1);
                    try {
                        let [e, n, r] = await Promise.all([
                            o.tn.get({
                                url: t ? u.Z : d.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: t ? f.Z : _.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: t ? p.Z : h.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                        ]);
                        b.current &&
                            (i({
                                modalGlowEntry: window.URL.createObjectURL(e.body),
                                modalGlowExit: window.URL.createObjectURL(n.body),
                                modalGlowIdle: window.URL.createObjectURL(r.body),
                            }),
                            s(!0));
                    } catch (e) {
                        b.current && m(!0);
                    } finally {
                        b.current && E(!1);
                    }
                }
            }, [y, g, t]);
        return (
            (0, r.useEffect)(() => {
                e && O();
            }, [e, O]),
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
                isSuccess: a,
                isFailure: c,
                isLoading: g,
            }
        );
    },
    g = (e) => {
        (0, r.useEffect)(() => {
            e && s.default.track(c.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
        }, [e]);
        let { mediaUrls: t, isSuccess: n, isLoading: o } = m(e),
            { status: l } = (0, a.VG)(e ? i.Z : null);
        return {
            mediaUrls: t,
            isSuccess: n && l === a.Jt.Loaded,
            isLoading: o || l === a.Jt.Loading,
        };
    };
