"use strict";
n.d(t, { k: () => l });
var r = n(908909),
    i = n(853590),
    a = n(47276),
    s = n(64700);
function o(e) {
    return e && e.__esModule ? e.default : e;
}
function l() {
    let { locale: e } = (0, i.Y)(),
        t = (0, a.e)(o(r.A), "@react-aria/datepicker");
    return (0, s.useMemo)(() => {
        try {
            return new Intl.DisplayNames(e, { type: "dateTimeField" });
        } catch {
            return new u(e, t);
        }
    }, [e, t]);
}
class u {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, t) {
        (this.locale = e), (this.dictionary = t);
    }
}
