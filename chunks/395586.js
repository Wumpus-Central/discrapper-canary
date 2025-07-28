(n.d(t, {
    AL: () => o,
    f3: () => s
}),
    n(415506));
var r = n(255367),
    i = n(73800),
    l = n(674180);
let a = i.createContext(void 0);
function s() {
    let e = i.useContext(a);
    if (null == e) throw Error('useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext');
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: i } = (0, l.gX)(t);
    return (0, r.jsx)(a.Provider, {
        value: i,
        children: n
    });
}
