t.d(r, { Z: () => s }), t(388685), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749);
var n = t(73800),
    i = t(544891),
    l = t(279421),
    o = t(410401),
    a = t(701262);
let s = (e) => {
    let [r, t] = (0, n.useState)({
            modalGlowEntry: void 0,
            modalGlowIdle: void 0,
            modalGlowExit: void 0,
        }),
        [s, d] = (0, n.useState)(!1),
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
            () => null != r.modalGlowEntry && null != r.modalGlowIdle && null != r.modalGlowExit,
            [r.modalGlowEntry, r.modalGlowIdle, r.modalGlowExit],
        ),
        m = (0, n.useCallback)(async () => {
            if (!f() && !u) {
                p(!0), c(!1), d(!1);
                try {
                    let [e, r, n] = await Promise.all([
                        i.tn.get({
                            url: l.Z,
                            binary: !0,
                            rejectWithError: !0,
                        }),
                        i.tn.get({
                            url: o.Z,
                            binary: !0,
                            rejectWithError: !0,
                        }),
                        i.tn.get({
                            url: a.Z,
                            binary: !0,
                            rejectWithError: !0,
                        }),
                    ]);
                    _.current &&
                        (t({
                            modalGlowEntry: window.URL.createObjectURL(e.body),
                            modalGlowExit: window.URL.createObjectURL(r.body),
                            modalGlowIdle: window.URL.createObjectURL(n.body),
                        }),
                        d(!0));
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
                null != r.modalGlowEntry && window.URL.revokeObjectURL(r.modalGlowEntry),
                    null != r.modalGlowIdle && window.URL.revokeObjectURL(r.modalGlowIdle),
                    null != r.modalGlowExit && window.URL.revokeObjectURL(r.modalGlowExit);
            },
            [r.modalGlowEntry, r.modalGlowIdle, r.modalGlowExit],
        ),
        {
            mediaUrls: r,
            isSuccess: s,
            isFailure: C,
            isLoading: u,
        }
    );
};
