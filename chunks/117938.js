n.d(t, {
    C: () => s,
    L: () => o,
});
var r = n(873546),
    i = n(464179),
    a = n(981631);
let o = (e) =>
        [a.HeQ.CARD, a.HeQ.VENMO].includes(e.type) && "US" === e.country
            ? r.tq
                ? i.ZP.Layouts.SETTINGS_US_MOBILE
                : i.ZP.Layouts.SETTINGS_US
            : e.type === a.HeQ.CARD && "US" !== e.country
              ? r.tq
                  ? i.ZP.Layouts.SETTINGS_INTL_MOBILE
                  : i.ZP.Layouts.SETTINGS_INTL
              : r.tq
                ? i.ZP.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : i.ZP.Layouts.SETTINGS_INTL_NO_NAME,
    s = r.tq ? i.ZP.Layouts.SETTINGS_US_MOBILE : i.ZP.Layouts.SETTINGS_US;
