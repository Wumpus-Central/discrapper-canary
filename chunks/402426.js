n.d(t, { Z: () => d }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(73800),
    i = n(647000),
    o = n(544891),
    a = n(396704),
    s = n(279421),
    l = n(410401),
    c = n(701262);
let u = (e) => {
        let [t, n] = (0, r.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
            }),
            [i, a] = (0, r.useState)(!1),
            [u, d] = (0, r.useState)(!1),
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
                    _(!0), d(!1), a(!1);
                    try {
                        let [e, t, r] = await Promise.all([
                            o.tn.get({
                                url: s.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: l.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: c.Z,
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
                        p.current && d(!0);
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
                isFailure: u,
                isLoading: f,
            }
        );
    },
    d = (e) => {
        let { mediaUrls: t, isSuccess: n, isLoading: r } = u(e),
            { status: o } = (0, a.VG)(e ? i.Z : null);
        return {
            mediaUrls: t,
            isSuccess: n && o === a.Jt.Loaded,
            isLoading: r || o === a.Jt.Loading,
        };
    };
