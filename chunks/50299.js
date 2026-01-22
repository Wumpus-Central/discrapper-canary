r.d(t, { R: () => b }),
    r(896048),
    r(927092),
    r(212978),
    r(201528),
    r(393431),
    r(752391),
    r(532706),
    r(42231),
    r(232424),
    r(757074),
    r(949626),
    r(767709),
    r(65162);
var n = r(64700),
    l = r(827762),
    u = r(284009),
    a = r.n(u),
    i = r(311907),
    c = r(149597),
    s = r(961350),
    o = r(430452),
    f = r(383501);
r(603266);
var d = r(731854);
function b(e) {
    let { userId: t } = e,
        r = (0, i.bG)([s.default], () => s.default.getId());
    a()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
    let [u, b] = n.useState(null),
        [E, y] = n.useState(!1),
        A = (0, i.bG)([f.A], () => f.A.getSecureFramesRosterMapEntry(t)),
        p = (0, i.bG)([f.A], () => f.A.getSecureFramesRosterMapEntry(r)),
        g = n.useCallback((e) => {
            b(l.fromByteArray(e)), y(!1);
        }, []),
        O = n.useCallback(
            async (e, t, r, n) => {
                if (o.A.supports(d.O5.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = f.A.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(0, r, (e) => {
                            g(new Uint8Array(e));
                        });
                } else g(await (0, c._x)(0, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [g],
        ),
        m = n.useRef(null);
    return (
        n.useEffect(() => {
            null != A && null != p && null == m.current && (y(!0), (m.current = setTimeout(() => O(r, p, t, A), 0)));
            let e = m.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, p, O, t, A]),
        n.useMemo(
            () => ({
                fingerprint: u,
                userKey: A,
                loading: E,
            }),
            [u, E, A],
        )
    );
}
