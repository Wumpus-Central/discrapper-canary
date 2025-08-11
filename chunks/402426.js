n.d(t, { Z: () => h }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(73800),
    i = n(647000),
    o = n(544891),
    a = n(396704),
    s = n(526167),
    l = n(316776),
    c = n(279421),
    u = n(965715),
    d = n(410401),
    f = n(51926),
    _ = n(701262);
let p = (e) => {
        let t = (0, s.rO)(),
            [n, i] = (0, r.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
            }),
            [a, p] = (0, r.useState)(!1),
            [h, m] = (0, r.useState)(!1),
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
                    E(!0), m(!1), p(!1);
                    try {
                        let [e, n, r] = await Promise.all([
                            o.tn.get({
                                url: t ? l.Z : c.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
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
                        ]);
                        b.current &&
                            (i({
                                modalGlowEntry: window.URL.createObjectURL(e.body),
                                modalGlowExit: window.URL.createObjectURL(n.body),
                                modalGlowIdle: window.URL.createObjectURL(r.body),
                            }),
                            p(!0));
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
                isFailure: h,
                isLoading: g,
            }
        );
    },
    h = (e) => {
        let { mediaUrls: t, isSuccess: n, isLoading: r } = p(e),
            { status: o } = (0, a.VG)(e ? i.Z : null);
        return {
            mediaUrls: t,
            isSuccess: n && o === a.Jt.Loaded,
            isLoading: r || o === a.Jt.Loading,
        };
    };
