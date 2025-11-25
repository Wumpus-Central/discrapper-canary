n.d(e, { Z: () => N });
var i = n(473749),
    l = n(442837),
    r = n(509613),
    u = n(28682),
    s = n(463395),
    a = n(131951),
    o = n(313789),
    c = n(375258),
    E = n(383713),
    d = n(782134),
    S = n(833682),
    T = n(815194),
    I = n(16009),
    O = n(387076),
    g = n(595373),
    _ = n(388032);
let N = (0, r.k4)(o.n.VOICE_INPUT_MODE_CATEGORY, {
    useNotice: function () {
        let t = (0, l.e7)([s.Z, a.Z], () => {
            let t = a.Z.getInputDeviceId();
            return (
                (s.Z.hasEchoCancellation(t) || s.Z.hasNoiseSuppression(t) || s.Z.hasAutomaticGainControl(t)) &&
                a.Z.isInputProfileCustom()
            );
        });
        return i.useMemo(() => {
            if (t)
                return {
                    type: u.y1.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => _.intl.string(_.t["/Whuzi"]),
                };
        }, [t]);
    },
    buildLayout: () => [d.Z, S.Z, E.Z, g.Z, T.Z, O.Z, I.Z, c.E],
});
