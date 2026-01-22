n.d(t, {
    A: () => o,
});
let r = RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i"),
    i = 1,
    a = 2,
    s = 3;
class o {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (t.start.isCertain("timezoneOffset")) return;
                let n = e.text.substring(t.index + t.text.length),
                    o = r.exec(n);
                if (!o) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${o[0]}' into : ${t}`);
                });
                let l = 60 * parseInt(o[a]) + parseInt(o[s] || "0");
                l > 840 ||
                    ("-" === o[i] && (l = -l),
                    null != t.end && t.end.assign("timezoneOffset", l),
                    t.start.assign("timezoneOffset", l),
                    (t.text += o[0]));
            }),
            t
        );
    }
}
