r.d(t, { A: () => s });
let n = RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
class s {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (t.start.isCertain("timezoneOffset")) return;
                let r = e.text.substring(t.index + t.text.length),
                    s = n.exec(r);
                if (!s) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${s[0]}' into : ${t}`);
                });
                let a = 60 * parseInt(s[2]) + parseInt(s[3] || "0");
                a > 840 ||
                    ("-" === s[1] && (a = -a),
                    null != t.end && t.end.assign("timezoneOffset", a),
                    t.start.assign("timezoneOffset", a),
                    (t.text += s[0]));
            }),
            t
        );
    }
}
