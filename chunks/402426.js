r.d(t, { Z: () => c }), r(388685), r(190126), r(368063), r(65234), r(111804), r(490233), r(97749);
var n = r(73800),
    i = r(647000),
    o = r(544891),
    a = r(396704),
    l = r(279421),
    s = r(410401),
    d = r(701262);
let C = (e) => {
        let [t, r] = (0, n.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
            }),
            [i, a] = (0, n.useState)(!1),
            [C, c] = (0, n.useState)(!1),
            [u, p] = (0, n.useState)(!1),
            _ = (0, n.useRef)(!0);
        (0, n.useEffect)(
            () => (
                (_.current = !0),
                () => {
                    _.current = !1;
                }
            ),
            [],
        );
        let f = (0, n.useCallback)(
                () => null != t.modalGlowEntry && null != t.modalGlowIdle && null != t.modalGlowExit,
                [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit],
            ),
            m = (0, n.useCallback)(async () => {
                if (!f() && !u) {
                    p(!0), c(!1), a(!1);
                    try {
                        let [e, t, n] = await Promise.all([
                            o.tn.get({
                                url: l.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: s.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                            o.tn.get({
                                url: d.Z,
                                binary: !0,
                                rejectWithError: !0,
                            }),
                        ]);
                        _.current &&
                            (r({
                                modalGlowEntry: window.URL.createObjectURL(e.body),
                                modalGlowExit: window.URL.createObjectURL(t.body),
                                modalGlowIdle: window.URL.createObjectURL(n.body),
                            }),
                            a(!0));
                    } catch (e) {
                        _.current && c(!0);
                    } finally {
                        _.current && p(!1);
                    }
                }
            }, [f, u]);
        return (
            (0, n.useEffect)(() => {
                e && m();
            }, [e, m]),
            (0, n.useEffect)(
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
                isFailure: C,
                isLoading: u,
            }
        );
    },
    c = (e) => {
        let { mediaUrls: t, isSuccess: r, isLoading: n } = C(e),
            { status: o } = (0, a.VG)(e ? i.Z : null);
        return {
            mediaUrls: t,
            isSuccess: r && o === a.Jt.Loaded,
            isLoading: n || o === a.Jt.Loading,
        };
    };
