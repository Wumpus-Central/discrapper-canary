n.d(e, {
    E: () => b,
    h: () => C,
});
var i = n(442837),
    r = n(323472),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    a = n(292591),
    o = n(51397),
    c = n(894470),
    d = n(422767),
    E = n(754680),
    S = n(919723),
    T = n(792971),
    I = n(956853),
    g = n(345655),
    O = n(388032);
function _(t) {
    return t ? O.intl.string(O.t.KHsSWK) : O.intl.string(O.t.PPDo5V);
}
function N() {
    return [a.Z, E.Z, c.Z, I.Z, d.Z, o.Z, S.Z, T.Z];
}
function f() {
    return (0, i.e7)([s.Z], () => s.Z.getActiveInputProfile() !== g._.STUDIO);
}
function A(t) {
    let e = (0, i.e7)([s.Z], () => s.Z.isInputProfileCustom());
    return (0, r.u)(t, { limit: e ? 3 : 2 });
}
let b = (0, l.CB)(u.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
        useTitle: _,
        useCollapsedSubtitle: () => A(u.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION),
        buildLayout: N,
        usePredicate: f,
    }),
    C = (0, l.CB)(u.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: _,
        useCollapsedSubtitle: () => A(u.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION),
        buildLayout: N,
        usePredicate: () => !f(),
    });
