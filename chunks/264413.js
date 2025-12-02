n.d(e, { Z: () => N });
var i = n(473749),
    l = n(442837),
    s = n(509613),
    r = n(28682),
    u = n(463395),
    a = n(131951),
    o = n(313789),
    c = n(375258),
    d = n(383713),
    E = n(782134),
    S = n(833682),
    I = n(815194),
    T = n(16009),
    g = n(387076),
    _ = n(595373),
    O = n(388032);
let N = (0, s.k4)(o.n.VOICE_INPUT_MODE_CATEGORY, {
    useNotice: function () {
        let t = (0, l.e7)([u.Z, a.Z], () => {
            let t = a.Z.getInputDeviceId();
            return (
                (u.Z.hasEchoCancellation(t) || u.Z.hasNoiseSuppression(t) || u.Z.hasAutomaticGainControl(t)) &&
                a.Z.isInputProfileCustom()
            );
        });
        return i.useMemo(() => {
            if (t)
                return {
                    type: r.y1.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => O.intl.string(O.t["/Whuzi"]),
                };
        }, [t]);
    },
    buildLayout: () => [E.Z, S.Z, d.Z, _.Z, I.Z, g.Z, T.Z, c.E],
});
