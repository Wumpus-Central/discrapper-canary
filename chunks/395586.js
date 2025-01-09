n.d(t, {
    AL: function () {
        return o;
    },
    f3: function () {
        return a;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(674180);
let s = r.createContext(void 0);
function a() {
    let e = r.useContext(s);
    if (null == e) throw Error('useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext');
    return e;
}
function o(e) {
    let { guildId: t, children: n } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: r } = (0, l.gX)(t);
    return (0, i.jsx)(s.Provider, {
        value: r,
        children: n
    });
}
