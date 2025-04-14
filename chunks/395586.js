n.d(t, {
    AL: () => o,
    f3: () => a
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    s = n(674180);
let l = i.createContext(void 0);
function a() {
    let e = i.useContext(l);
    if (null == e) throw Error('useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext');
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: i } = (0, s.gX)(t);
    return (0, r.jsx)(l.Provider, {
        value: i,
        children: n
    });
}
