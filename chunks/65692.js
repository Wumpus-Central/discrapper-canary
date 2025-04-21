n.d(t, { q: () => g }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r = n(192379),
    l = n(250683),
    i = n(512722),
    u = n.n(i),
    s = n(442837),
    a = n(253135),
    o = n(314897),
    c = n(131951),
    d = n(19780),
    f = n(760373),
    E = n(65154);
function g(e) {
    let { userId: t } = e,
        n = (0, s.e7)([o.default], () => o.default.getId());
    u()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, g] = r.useState(null),
        [_, y] = r.useState(!1),
        m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        S = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(n)),
        h = r.useCallback((e) => {
            g(l.fromByteArray(e)), y(!1);
        }, []),
        p = r.useCallback(
            async (e, t, n, r) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = d.Z.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(f.Xj, n, (e) => {
                            h(new Uint8Array(e));
                        });
                } else h(await (0, a.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(r), n));
            },
            [h]
        ),
        b = r.useRef(null);
    return (
        r.useEffect(() => {
            null != m && null != S && null == b.current && (y(!0), (b.current = setTimeout(() => p(n, S, t, m), 0)));
            let e = b.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [n, S, p, t, m]),
        r.useMemo(
            () => ({
                fingerprint: i,
                userKey: m,
                loading: _
            }),
            [i, _, m]
        )
    );
}
