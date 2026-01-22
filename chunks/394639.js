n.d(t, {
    A: () => a,
});
var r = n(160047);
let i = RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class a {
    timezoneOverrides;
    constructor(e) {
        this.timezoneOverrides = e;
    }
    refine(e, t) {
        let n = e.option.timezones ?? {};
        return (
            t.forEach((t) => {
                let a = e.text.substring(t.index + t.text.length),
                    s = i.exec(a);
                if (!s) return;
                let o = s[1].toUpperCase(),
                    l = t.start.date() ?? t.refDate ?? new Date(),
                    c = {
                        ...this.timezoneOverrides,
                        ...n,
                    },
                    u = (0, r.Cm)(o, l, c);
                if (null == u) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${o}' into: ${u} for: ${t.start}`);
                });
                let d = t.start.get("timezoneOffset");
                !(null !== d && u != d && (t.start.isCertain("timezoneOffset") || o != s[1])) &&
                    (!t.start.isOnlyDate() || o == s[1]) &&
                    ((t.text += s[0]),
                    t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", u),
                    null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", u));
            }),
            t
        );
    }
}
