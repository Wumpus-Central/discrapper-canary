"use strict";
n.d(t, { A: () => s });
var r = n(360345);
let i = RegExp(`^\\s*(${r.fp})`, "i"),
    a = 1;
class s {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (!t.start.isDateWithUnknownYear()) return;
                let n = e.text.substring(t.index + t.text.length),
                    s = i.exec(n);
                if (!s || s[0].trim().length <= 3) return;
                e.debug(() => {
                    console.log(`Extracting year: '${s[0]}' into : ${t}`);
                });
                let o = (0, r.zL)(s[a]);
                null != t.end && t.end.assign("year", o), t.start.assign("year", o), (t.text += s[0]);
            }),
            t
        );
    }
}
