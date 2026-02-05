"use strict";
n.d(t, { GK: () => a, ZV: () => o });
var i = n(627968),
    s = n(64700),
    l = n(465932);
let r = s.createContext(void 0);
function a() {
    let e = s.useContext(r);
    if (null == e)
        throw Error(
            "useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext",
        );
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: s } = (0, l.nq)(t);
    return (0, i.jsx)(r.Provider, { value: s, children: n });
}
