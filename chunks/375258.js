n.d(e, {
    E: () => p,
    h: () => y,
});
var i = n(473749),
    l = n(442837),
    u = n(509613),
    r = n(28682),
    s = n(463395),
    a = n(131951),
    o = n(313789),
    c = n(292591),
    E = n(383713),
    S = n(51397),
    T = n(782134),
    d = n(894470),
    I = n(422767),
    O = n(754680),
    g = n(919723),
    _ = n(792971),
    N = n(956853),
    A = n(345655),
    f = n(388032);
function Z(t) {
    return t ? f.intl.string(f.t.KHsSWK) : f.intl.string(f.t.PPDo5V);
}
function C() {
    return f.intl.string(f.t["4n3WTh"]);
}
function L() {
    return [T.Z, E.Z, O.Z, c.Z, d.Z, N.Z, I.Z, S.Z, g.Z, _.Z];
}
function P() {
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
                type: r.y1.INLINE_NOTICE,
                noticeType: "info",
                useText: () => f.intl.string(f.t["/Whuzi"]),
            };
    }, [t]);
}
function b() {
    return (0, l.e7)([a.Z], () => a.Z.getActiveInputProfile() !== A._.STUDIO);
}
let p = (0, u.CB)(o.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
        useTitle: Z,
        useSubtitle: C,
        useNotice: P,
        buildLayout: L,
        usePredicate: b,
    }),
    y = (0, u.CB)(o.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: Z,
        useSubtitle: C,
        useNotice: P,
        buildLayout: L,
        usePredicate: () => !b(),
    });
