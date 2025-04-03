n.d(t, {
    AL: () => o,
    f3: () => l
}),
    n(411104);
var r = n(200651),
    i = n(192379),
    s = n(674180);
let a = i.createContext(void 0);
function l() {
    let e = i.useContext(a);
    if (null == e) throw Error('useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext');
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: i } = (0, s.gX)(t);
    return (0, r.jsx)(a.Provider, {
        value: i,
        children: n
    });
}
