n.d(e, {
    E: () => P,
    h: () => b,
});
var i = n(442837),
    l = n(509613),
    u = n(28682),
    r = n(131951),
    s = n(313789),
    a = n(292591),
    o = n(383713),
    c = n(51397),
    E = n(782134),
    S = n(894470),
    T = n(422767),
    d = n(754680),
    I = n(919723),
    O = n(792971),
    g = n(956853),
    _ = n(345655),
    N = n(388032);
function A(t) {
    return t ? N.intl.string(N.t.KHsSWK) : N.intl.string(N.t.PPDo5V);
}
function f() {
    return N.intl.string(N.t["4n3WTh"]);
}
let Z = {
    type: u.y1.INLINE_NOTICE,
    noticeType: "info",
    useText: () => N.intl.string(N.t["/Whuzi"]),
};
function L() {
    return [E.Z, o.Z, d.Z, a.Z, S.Z, g.Z, T.Z, c.Z, I.Z, O.Z];
}
function C() {
    return (0, i.e7)([r.Z], () => r.Z.getActiveInputProfile() !== _._.STUDIO);
}
let P = (0, l.CB)(s.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
        useTitle: A,
        useSubtitle: f,
        notice: Z,
        buildLayout: L,
        usePredicate: C,
    }),
    b = (0, l.CB)(s.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: A,
        useSubtitle: f,
        notice: Z,
        buildLayout: L,
        usePredicate: () => !C(),
    });
