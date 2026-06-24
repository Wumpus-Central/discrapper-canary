T.d(y, { K: () => N, g: () => u });
var s = T(607399),
    t = T(198970),
    _ = T(652215);
function u(S) {
    return [_.hes.CARD, _.hes.VENMO].includes(S.type) && "US" === S.country
        ? s.Fr
            ? t.Ay.Layouts.SETTINGS_US_MOBILE
            : t.Ay.Layouts.SETTINGS_US
        : S.type === _.hes.CARD && "US" !== S.country
          ? s.Fr
              ? t.Ay.Layouts.SETTINGS_INTL_MOBILE
              : t.Ay.Layouts.SETTINGS_INTL
          : s.Fr
            ? t.Ay.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
            : t.Ay.Layouts.SETTINGS_INTL_NO_NAME;
}
let N = s.Fr ? t.Ay.Layouts.SETTINGS_US_MOBILE : t.Ay.Layouts.SETTINGS_US;
