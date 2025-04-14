r.d(t, { q: () => g }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733);
var n = r(192379),
    l = r(250683),
    i = r(512722),
    u = r.n(i),
    s = r(442837),
    a = r(253135),
    o = r(314897),
    c = r(131951),
    d = r(19780),
    f = r(760373),
    E = r(65154);
function g(e) {
    let { userId: t } = e,
        r = (0, s.e7)([o.default], () => o.default.getId());
    u()(r !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, g] = n.useState(null),
        [_, y] = n.useState(!1),
        m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        S = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(r)),
        h = n.useCallback((e) => {
            g(l.fromByteArray(e)), y(!1);
        }, []),
        N = n.useCallback(
            async (e, t, r, n) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = d.Z.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(f.Xj, r, (e) => {
                            h(new Uint8Array(e));
                        });
                } else h(await (0, a.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [h]
        ),
        p = n.useRef(null);
    return (
        n.useEffect(() => {
            null != m && null != S && null == p.current && (y(!0), (p.current = setTimeout(() => N(r, S, t, m), 0)));
            let e = p.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, S, N, t, m]),
        n.useMemo(
            () => ({
                fingerprint: i,
                userKey: m,
                loading: _
            }),
            [i, _, m]
        )
    );
}
