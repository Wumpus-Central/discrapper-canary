n.d(e, {
    E: () => y,
    h: () => D,
});
var i = n(473749),
    l = n(442837),
    u = n(323472),
    r = n(509613),
    s = n(28682),
    a = n(463395),
    o = n(131951),
    c = n(313789),
    E = n(292591),
    S = n(383713),
    T = n(51397),
    d = n(782134),
    I = n(894470),
    O = n(422767),
    g = n(754680),
    _ = n(919723),
    N = n(792971),
    A = n(956853),
    f = n(345655),
    Z = n(388032);
function C(t) {
    return t ? Z.intl.string(Z.t.KHsSWK) : Z.intl.string(Z.t.PPDo5V);
}
function L() {
    return [d.Z, S.Z, E.Z, g.Z, I.Z, A.Z, O.Z, T.Z, _.Z, N.Z];
}
function P() {
    let t = (0, l.e7)([a.Z, o.Z], () => {
        let t = o.Z.getInputDeviceId();
        return (
            (a.Z.hasEchoCancellation(t) || a.Z.hasNoiseSuppression(t) || a.Z.hasAutomaticGainControl(t)) &&
            o.Z.isInputProfileCustom()
        );
    });
    return i.useMemo(() => {
        if (t)
            return {
                type: s.y1.INLINE_NOTICE,
                noticeType: "info",
                useText: () => Z.intl.string(Z.t["/Whuzi"]),
            };
    }, [t]);
}
function b() {
    return (0, l.e7)([o.Z], () => o.Z.getActiveInputProfile() !== f._.STUDIO);
}
function p(t) {
    let e = (0, l.e7)([o.Z], () => o.Z.isInputProfileCustom());
    return (0, u.u)(t, { limit: e ? 3 : 2 });
}
let y = (0, r.CB)(c.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
        useTitle: C,
        useCollapsedSubtitle: () => p(c.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION),
        useNotice: P,
        buildLayout: L,
        usePredicate: b,
    }),
    D = (0, r.CB)(c.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: C,
        useCollapsedSubtitle: () => p(c.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION),
        useNotice: P,
        buildLayout: L,
        usePredicate: () => !b(),
    });
