n.d(e, {
    E: () => Z,
    h: () => C,
});
var i = n(442837),
    l = n(323472),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(292591),
    o = n(51397),
    c = n(894470),
    d = n(422767),
    E = n(754680),
    S = n(919723),
    I = n(792971),
    T = n(956853),
    g = n(345655),
    _ = n(388032);
function O(t) {
    return t ? _.intl.string(_.t.KHsSWK) : _.intl.string(_.t.PPDo5V);
}
function N() {
    return [a.Z, E.Z, c.Z, T.Z, d.Z, o.Z, S.Z, I.Z];
}
function A() {
    return (0, i.e7)([r.Z], () => r.Z.getActiveInputProfile() !== g._.STUDIO);
}
function f(t) {
    let e = (0, i.e7)([r.Z], () => r.Z.isInputProfileCustom());
    return (0, l.u)(t, { limit: e ? 3 : 2 });
}
let Z = (0, s.CB)(u.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
        useTitle: O,
        useCollapsedSubtitle: () => f(u.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION),
        buildLayout: N,
        usePredicate: A,
    }),
    C = (0, s.CB)(u.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: O,
        useCollapsedSubtitle: () => f(u.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION),
        buildLayout: N,
        usePredicate: () => !A(),
    });
