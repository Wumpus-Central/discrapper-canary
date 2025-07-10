(r.d(t, { q: () => y }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733));
var n = r(73800),
    l = r(250683),
    i = r(512722),
    u = r.n(i),
    s = r(442837),
    a = r(974167),
    o = r(314897),
    c = r(131951),
    d = r(19780),
    f = r(760373),
    E = r(65154);
function y(e) {
    let { userId: t } = e,
        r = (0, s.e7)([o.default], () => o.default.getId());
    u()(r !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, y] = n.useState(null),
        [g, p] = n.useState(!1),
        b = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(r)),
        _ = n.useCallback((e) => {
            (y(l.fromByteArray(e)), p(!1));
        }, []),
        S = n.useCallback(
            async (e, t, r, n) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = d.Z.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(f.Xj, r, (e) => {
                            _(new Uint8Array(e));
                        });
                } else _(await (0, a.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [_]
        ),
        h = n.useRef(null);
    return (
        n.useEffect(() => {
            null != b && null != m && null == h.current && (p(!0), (h.current = setTimeout(() => S(r, m, t, b), 0)));
            let e = h.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, m, S, t, b]),
        n.useMemo(
            () => ({
                fingerprint: i,
                userKey: b,
                loading: g
            }),
            [i, g, b]
        )
    );
}
