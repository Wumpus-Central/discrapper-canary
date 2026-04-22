n.d(t, { GK: () => a, ZV: () => o });
var i = n(627968),
    l = n(64700),
    s = n(465932);
let r = l.createContext(void 0);
function a() {
    let e = l.useContext(r);
    if (null == e)
        throw Error(
            "useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext",
        );
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: l } = (0, s.nq)(t);
    return (0, i.jsx)(r.Provider, { value: l, children: n });
}
