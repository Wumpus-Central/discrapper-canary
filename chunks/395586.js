n.d(t, {
    AL: () => o,
    f3: () => a,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    l = n(674180);
let s = i.createContext(void 0);
function a() {
    let e = i.useContext(s);
    if (null == e)
        throw Error(
            "useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext",
        );
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: i } = (0, l.gX)(t);
    return (0, r.jsx)(s.Provider, {
        value: i,
        children: n,
    });
}
