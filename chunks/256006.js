T.d(y, { K: () => I, g: () => N });
var s = T(607399),
    _ = T(198970),
    t = T(652215);
let N = (S) =>
        [t.hes.CARD, t.hes.VENMO].includes(S.type) && "US" === S.country
            ? s.Fr
                ? _.Ay.Layouts.SETTINGS_US_MOBILE
                : _.Ay.Layouts.SETTINGS_US
            : S.type === t.hes.CARD && "US" !== S.country
              ? s.Fr
                  ? _.Ay.Layouts.SETTINGS_INTL_MOBILE
                  : _.Ay.Layouts.SETTINGS_INTL
              : s.Fr
                ? _.Ay.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : _.Ay.Layouts.SETTINGS_INTL_NO_NAME,
    I = s.Fr ? _.Ay.Layouts.SETTINGS_US_MOBILE : _.Ay.Layouts.SETTINGS_US;
