r.d(t, { R: () => f }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(64700),
    l = r(827762),
    u = r(284009),
    s = r.n(u),
    i = r(311907),
    a = r(149597),
    c = r(961350),
    o = r(430452),
    d = r(383501);
r(603266);
var E = r(731854);
function f(e) {
    let { userId: t } = e,
        r = (0, i.bG)([c.default], () => c.default.getId());
    s()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
    let [u, f] = n.useState(null),
        [A, _] = n.useState(!1),
        S = (0, i.bG)([d.A], () => d.A.getSecureFramesRosterMapEntry(t)),
        g = (0, i.bG)([d.A], () => d.A.getSecureFramesRosterMapEntry(r)),
        T = n.useCallback((e) => {
            f(l.fromByteArray(e)), _(!1);
        }, []),
        C = n.useCallback(
            async (e, t, r, n) => {
                o.A.supports(E.O5.MLS_PAIRWISE_FINGERPRINTS)
                    ? d.A.getRTCConnection()?.getMLSPairwiseFingerprint(0, r, (e) => {
                          T(new Uint8Array(e));
                      })
                    : T(await (0, a._x)(0, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [T],
        ),
        R = n.useRef(null);
    return (
        n.useEffect(() => {
            null != S && null != g && null == R.current && (_(!0), (R.current = setTimeout(() => C(r, g, t, S), 0)));
            let e = R.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, g, C, t, S]),
        n.useMemo(() => ({ fingerprint: u, userKey: S, loading: A }), [u, A, S])
    );
}
