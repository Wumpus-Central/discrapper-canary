n.d(t, { K: () => l, g: () => a });
var i = n(607399),
    s = n(450233),
    r = n(652215);
let a = (e) =>
        [r.hes.CARD, r.hes.VENMO].includes(e.type) && "US" === e.country
            ? i.Fr
                ? s.Ay.Layouts.SETTINGS_US_MOBILE
                : s.Ay.Layouts.SETTINGS_US
            : e.type === r.hes.CARD && "US" !== e.country
              ? i.Fr
                  ? s.Ay.Layouts.SETTINGS_INTL_MOBILE
                  : s.Ay.Layouts.SETTINGS_INTL
              : i.Fr
                ? s.Ay.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : s.Ay.Layouts.SETTINGS_INTL_NO_NAME,
    l = i.Fr ? s.Ay.Layouts.SETTINGS_US_MOBILE : s.Ay.Layouts.SETTINGS_US;
