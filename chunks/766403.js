n.d(t, { Z: () => s });
let r = RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i"),
    i = 1,
    a = 2,
    o = 3;
class s {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (t.start.isCertain("timezoneOffset")) return;
                let n = e.text.substring(t.index + t.text.length),
                    s = r.exec(n);
                if (!s) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${s[0]}' into : ${t}`);
                });
                let l = 60 * parseInt(s[a]) + parseInt(s[o] || "0");
                l > 840 ||
                    ("-" === s[i] && (l = -l),
                    null != t.end && t.end.assign("timezoneOffset", l),
                    t.start.assign("timezoneOffset", l),
                    (t.text += s[0]));
            }),
            t
        );
    }
}
