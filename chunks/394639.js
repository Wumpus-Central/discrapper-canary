r.d(t, { A: () => a });
var n = r(160047);
let s = RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class a {
    timezoneOverrides;
    constructor(e) {
        this.timezoneOverrides = e;
    }
    refine(e, t) {
        let r = e.option.timezones ?? {};
        return (
            t.forEach((t) => {
                let a = e.text.substring(t.index + t.text.length),
                    i = s.exec(a);
                if (!i) return;
                let o = i[1].toUpperCase(),
                    l = t.start.date() ?? t.refDate ?? new Date(),
                    u = { ...this.timezoneOverrides, ...r },
                    d = (0, n.Cm)(o, l, u);
                if (null == d) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${o}' into: ${d} for: ${t.start}`);
                });
                let m = t.start.get("timezoneOffset");
                !(null !== m && d != m && (t.start.isCertain("timezoneOffset") || o != i[1])) &&
                    (!t.start.isOnlyDate() || o == i[1]) &&
                    ((t.text += i[0]),
                    t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", d),
                    null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", d));
            }),
            t
        );
    }
}
