n.d(t, { J: () => l });
var r = n(925521),
    i = n(227399),
    a = n(218769),
    o = n(473749);
function s(e) {
    return e && e.__esModule ? e.default : e;
}
function l() {
    let { locale: e } = (0, i.j)(),
        t = (0, a.K)(s(r.Z), "@react-aria/datepicker");
    return (0, o.useMemo)(() => {
        try {
            return new Intl.DisplayNames(e, { type: "dateTimeField" });
        } catch {
            return new c(e, t);
        }
    }, [e, t]);
}
class c {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, t) {
        (this.locale = e), (this.dictionary = t);
    }
}
