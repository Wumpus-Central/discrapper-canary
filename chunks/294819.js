t.d(a, { k: () => u });
var r = t(908909),
    n = t(853590),
    i = t(47276),
    o = t(64700);
function u() {
    var e;
    let { locale: a } = (0, n.Y)(),
        t = (0, i.e)((e = r.A) && e.__esModule ? e.default : e, "@react-aria/datepicker");
    return (0, o.useMemo)(() => {
        try {
            return new Intl.DisplayNames(a, { type: "dateTimeField" });
        } catch {
            return new l(a, t);
        }
    }, [a, t]);
}
class l {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, a) {
        (this.locale = e), (this.dictionary = a);
    }
}
