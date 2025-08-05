(n.d(t, { Z: () => o }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var i = n(73800),
    l = n(544891),
    r = n(279421),
    s = n(410401),
    a = n(701262);
let o = (e) => {
    let [t, n] = (0, i.useState)({
            modalGlowEntry: void 0,
            modalGlowIdle: void 0,
            modalGlowExit: void 0
        }),
        [o, C] = (0, i.useState)(!1),
        [d, c] = (0, i.useState)(!1),
        [u, p] = (0, i.useState)(!1),
        x = (0, i.useRef)(!0);
    (0, i.useEffect)(
        () => (
            (x.current = !0),
            () => {
                x.current = !1;
            }
        ),
        []
    );
    let f = (0, i.useCallback)(() => null != t.modalGlowEntry && null != t.modalGlowIdle && null != t.modalGlowExit, [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit]),
        h = (0, i.useCallback)(async () => {
            if (!f() && !u) {
                (p(!0), c(!1), C(!1));
                try {
                    let [e, t, i] = await Promise.all([
                        l.tn.get({
                            url: r.Z,
                            binary: !0,
                            rejectWithError: !0
                        }),
                        l.tn.get({
                            url: s.Z,
                            binary: !0,
                            rejectWithError: !0
                        }),
                        l.tn.get({
                            url: a.Z,
                            binary: !0,
                            rejectWithError: !0
                        })
                    ]);
                    x.current &&
                        (n({
                            modalGlowEntry: window.URL.createObjectURL(e.body),
                            modalGlowExit: window.URL.createObjectURL(t.body),
                            modalGlowIdle: window.URL.createObjectURL(i.body)
                        }),
                        C(!0));
                } catch (e) {
                    x.current && c(!0);
                } finally {
                    x.current && p(!1);
                }
            }
        }, [f, u]);
    return (
        (0, i.useEffect)(() => {
            e && h();
        }, [e, h]),
        (0, i.useEffect)(
            () => () => {
                (null != t.modalGlowEntry && window.URL.revokeObjectURL(t.modalGlowEntry), null != t.modalGlowIdle && window.URL.revokeObjectURL(t.modalGlowIdle), null != t.modalGlowExit && window.URL.revokeObjectURL(t.modalGlowExit));
            },
            [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit]
        ),
        {
            mediaUrls: t,
            isSuccess: o,
            isFailure: d,
            isLoading: u
        }
    );
};
