n.d(t, {
    K: () => o,
    g: () => s,
});
var r = n(607399),
    i = n(450233),
    a = n(652215);
let s = (e) =>
        [a.hes.CARD, a.hes.VENMO].includes(e.type) && "US" === e.country
            ? r.Fr
                ? i.Ay.Layouts.SETTINGS_US_MOBILE
                : i.Ay.Layouts.SETTINGS_US
            : e.type === a.hes.CARD && "US" !== e.country
              ? r.Fr
                  ? i.Ay.Layouts.SETTINGS_INTL_MOBILE
                  : i.Ay.Layouts.SETTINGS_INTL
              : r.Fr
                ? i.Ay.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : i.Ay.Layouts.SETTINGS_INTL_NO_NAME,
    o = r.Fr ? i.Ay.Layouts.SETTINGS_US_MOBILE : i.Ay.Layouts.SETTINGS_US;
