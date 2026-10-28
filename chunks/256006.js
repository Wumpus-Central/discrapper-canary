n.d(t, { K: () => a, g: () => r });
var i = n(607399),
    l = n(198970),
    s = n(652215);
function r(e) {
    return [s.hes.CARD, s.hes.VENMO].includes(e.type) && "US" === e.country
        ? i.Fr
            ? l.Ay.Layouts.SETTINGS_US_MOBILE
            : l.Ay.Layouts.SETTINGS_US
        : e.type === s.hes.CARD && "US" !== e.country
          ? i.Fr
              ? l.Ay.Layouts.SETTINGS_INTL_MOBILE
              : l.Ay.Layouts.SETTINGS_INTL
          : i.Fr
            ? l.Ay.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
            : l.Ay.Layouts.SETTINGS_INTL_NO_NAME;
}
let a = i.Fr ? l.Ay.Layouts.SETTINGS_US_MOBILE : l.Ay.Layouts.SETTINGS_US;
