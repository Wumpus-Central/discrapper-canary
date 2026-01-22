n.d(t, {
    GK: () => a,
    ZV: () => c,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(465932);
let s = i.createContext(void 0);
function a() {
    let e = i.useContext(s);
    if (null == e)
        throw Error(
            "useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext",
        );
    return e;
}
function c(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: i } = (0, l.nq)(t);
    return (0, r.jsx)(s.Provider, {
        value: i,
        children: n,
    });
}
