r.d(t, { A: () => a });
var n = r(360345);
let s = RegExp(`^\\s*(${n.fp})`, "i");
class a {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (!t.start.isDateWithUnknownYear()) return;
                let r = e.text.substring(t.index + t.text.length),
                    a = s.exec(r);
                if (!a || a[0].trim().length <= 3) return;
                e.debug(() => {
                    console.log(`Extracting year: '${a[0]}' into : ${t}`);
                });
                let i = (0, n.zL)(a[1]);
                null != t.end && t.end.assign("year", i), t.start.assign("year", i), (t.text += a[0]);
            }),
            t
        );
    }
}
