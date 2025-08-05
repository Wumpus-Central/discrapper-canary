(r.d(t, { q: () => b }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733));
var n = r(73800),
    l = r(250683),
    o = r(512722),
    c = r.n(o),
    i = r(442837),
    s = r(974167),
    a = r(314897),
    u = r(131951),
    d = r(19780),
    f = r(760373),
    p = r(65154);
function b(e) {
    let { userId: t } = e,
        r = (0, i.e7)([a.default], () => a.default.getId());
    c()(r !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
    let [o, b] = n.useState(null),
        [m, y] = n.useState(!1),
        h = (0, i.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
        j = (0, i.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(r)),
        g = n.useCallback((e) => {
            (b(l.fromByteArray(e)), y(!1));
        }, []),
        O = n.useCallback(
            async (e, t, r, n) => {
                if (u.Z.supports(p.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                    var l;
                    null == (l = d.Z.getRTCConnection()) ||
                        l.getMLSPairwiseFingerprint(f.Xj, r, (e) => {
                            g(new Uint8Array(e));
                        });
                } else g(await (0, s.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(n), r));
            },
            [g]
        ),
        x = n.useRef(null);
    return (
        n.useEffect(() => {
            null != h && null != j && null == x.current && (y(!0), (x.current = setTimeout(() => O(r, j, t, h), 0)));
            let e = x.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, [r, j, O, t, h]),
        n.useMemo(
            () => ({
                fingerprint: o,
                userKey: h,
                loading: m
            }),
            [o, m, h]
        )
    );
}
