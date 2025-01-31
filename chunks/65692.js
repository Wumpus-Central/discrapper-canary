n.d(t, { q: () => _ }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
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
function _(e) {
    let { userId: t } = e,
        n = (0, s.e7)([o.default], () => o.default.getId());
    u()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [i, _] = r.useState(null),
        [S, g] = r.useState(!1),
        h = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(n)),
        R = r.useCallback((e) => {
            _(l.fromByteArray(e)), g(!1);
        }, []),
        N = r.useCallback(
            async (e, t, n, r) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null === (l = d.Z.getRTCConnection()) ||
                        void 0 === l ||
                        l.getMLSPairwiseFingerprint(f.Xj, n, (e) => {
                            R(new Uint8Array(e));
                        });
                } else R(await (0, a.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(r), n));
            },
            [R]
        ),
        I = r.useRef(null);
    return (
        r.useEffect(() => {
            null != h && null != m && null == I.current && (g(!0), (I.current = setTimeout(() => N(n, m, t, h), 0)));
            let e = I.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [n, m, N, t, h]),
        r.useMemo(
            () => ({
                fingerprint: i,
                userKey: h,
                loading: S
            }),
            [i, S, h]
        )
    );
}
