n.d(e, {
    E: () => C,
    h: () => b,
});
var i = n(442837),
    l = n(323472),
    r = n(509613),
    u = n(131951),
    s = n(313789),
    a = n(292591),
    o = n(51397),
    c = n(894470),
    E = n(422767),
    d = n(754680),
    S = n(919723),
    T = n(792971),
    I = n(956853),
    O = n(345655),
    g = n(388032);
function _(t) {
    return t ? g.intl.string(g.t.KHsSWK) : g.intl.string(g.t.PPDo5V);
}
function N() {
    return [a.Z, d.Z, c.Z, I.Z, E.Z, o.Z, S.Z, T.Z];
}
function f() {
    return (0, i.e7)([u.Z], () => u.Z.getActiveInputProfile() !== O._.STUDIO);
}
function A(t) {
    let e = (0, i.e7)([u.Z], () => u.Z.isInputProfileCustom());
    return (0, l.u)(t, { limit: e ? 3 : 2 });
}
let C = (0, r.CB)(s.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
        useTitle: _,
        useCollapsedSubtitle: () => A(s.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION),
        buildLayout: N,
        usePredicate: f,
    }),
    b = (0, r.CB)(s.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: _,
        useCollapsedSubtitle: () => A(s.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION),
        buildLayout: N,
        usePredicate: () => !f(),
    });
