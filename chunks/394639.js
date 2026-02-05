"use strict";
n.d(t, { A: () => a });
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
                    u = { ...this.timezoneOverrides, ...n },
                    c = (0, r.Cm)(o, l, u);
                if (null == c) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${o}' into: ${c} for: ${t.start}`);
                });
                let d = t.start.get("timezoneOffset");
                !(null !== d && c != d && (t.start.isCertain("timezoneOffset") || o != s[1])) &&
                    (!t.start.isOnlyDate() || o == s[1]) &&
                    ((t.text += s[0]),
                    t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", c),
                    null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", c));
            }),
            t
        );
    }
}
