r.d(t, { q: () => y }),
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
var n = r(647438),
    l = r(250683),
    u = r(512722),
    i = r.n(u),
    a = r(442837),
    s = r(974167),
    c = r(314897),
    o = r(131951),
    f = r(19780),
    d = r(760373),
    E = r(65154);
function y(e) {
    let { userId: t } = e,
        r = (0, a.e7)([c.default], () => c.default.getId());
    i()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
    let [u, y] = n.useState(null),
        [g, p] = n.useState(!1),
        S = (0, a.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(t)),
        b = (0, a.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(r)),
        _ = n.useCallback((e) => {
            y(l.fromByteArray(e)), p(!1);
        }, []),
        m = n.useCallback(
            async (e, t, r, n) => {
                if (o.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = f.Z.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(d.Xj, r, (e) => {
                            _(new Uint8Array(e));
                        });
                } else _(await (0, s.Il)(d.Xj, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [_],
        ),
        O = n.useRef(null);
    return (
        n.useEffect(() => {
            null != S && null != b && null == O.current && (p(!0), (O.current = setTimeout(() => m(r, b, t, S), 0)));
            let e = O.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, b, m, t, S]),
        n.useMemo(
            () => ({
                fingerprint: u,
                userKey: S,
                loading: g,
            }),
            [u, g, S],
        )
    );
}
