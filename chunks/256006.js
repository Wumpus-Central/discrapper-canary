var i = n(607399),
    l = n(718718),
    s = n(652215);
let r = i.Fr ? l.Ay.Layouts.SETTINGS_US_MOBILE : l.Ay.Layouts.SETTINGS_US;
n.d(
    t,
    {},
    {
        K: r,
        g: function (e) {
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
        },
    },
);
