r.d(t, { q: () => g }), r(47120), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(610885), r(126298);
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
        S = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(r)),
        h = n.useCallback((e) => {
            g(l.fromByteArray(e)), y(!1);
        }, []),
        N = n.useCallback(
            async (e, t, r, n) => {
                if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null === (l = d.Z.getRTCConnection()) ||
                        void 0 === l ||
                        l.getMLSPairwiseFingerprint(f.Xj, r, (e) => {
                            h(new Uint8Array(e));
                        });
                } else h(await (0, a.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [h]
        ),
        v = n.useRef(null);
    return (
        n.useEffect(() => {
            null != S && null != m && null == v.current && (y(!0), (v.current = setTimeout(() => N(r, m, t, S), 0)));
            let e = v.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, m, N, t, S]),
        n.useMemo(
            () => ({
                fingerprint: i,
                userKey: S,
                loading: _
            }),
            [i, _, S]
        )
    );
}
