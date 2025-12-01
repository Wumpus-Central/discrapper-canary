n.d(e, { Z: () => N });
var i = n(473749),
    r = n(442837),
    l = n(509613),
    u = n(28682),
    s = n(463395),
    a = n(131951),
    o = n(313789),
    c = n(375258),
    d = n(383713),
    E = n(782134),
    S = n(833682),
    T = n(815194),
    I = n(16009),
    g = n(387076),
    O = n(595373),
    _ = n(388032);
let N = (0, l.k4)(o.n.VOICE_INPUT_MODE_CATEGORY, {
    useNotice: function () {
        let t = (0, r.e7)([s.Z, a.Z], () => {
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
    buildLayout: () => [E.Z, S.Z, d.Z, O.Z, T.Z, g.Z, I.Z, c.E],
});
