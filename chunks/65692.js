r.d(t, { q: () => g }),
    r(388685),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733);
var n = r(473749),
    l = r(250683),
    u = r(512722),
    i = r.n(u),
    c = r(442837),
    o = r(974167),
    s = r(314897),
    a = r(131951),
    f = r(19780),
    d = r(760373),
    E = r(65154);
function g(e) {
    let { userId: t } = e,
        r = (0, c.e7)([s.default], () => s.default.getId());
    i()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
    let [u, g] = n.useState(null),
        [y, p] = n.useState(!1),
        b = (0, c.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(t)),
        m = (0, c.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(r)),
        O = n.useCallback((e) => {
            g(l.fromByteArray(e)), p(!1);
        }, []),
        S = n.useCallback(
            async (e, t, r, n) => {
                if (a.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = f.Z.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(d.Xj, r, (e) => {
                            O(new Uint8Array(e));
                        });
                } else O(await (0, o.Il)(d.Xj, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [O],
        ),
        _ = n.useRef(null);
    return (
        n.useEffect(() => {
            null != b && null != m && null == _.current && (p(!0), (_.current = setTimeout(() => S(r, m, t, b), 0)));
            let e = _.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, m, S, t, b]),
        n.useMemo(
            () => ({
                fingerprint: u,
                userKey: b,
                loading: y,
            }),
            [u, y, b],
        )
    );
}
