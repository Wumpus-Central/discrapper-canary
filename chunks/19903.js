Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = RegExp(`^\\s*(${n.YEAR_PATTERN})`, "i");
t.default = class {
    refine(e, t) {
        return (
            t.forEach(function (t) {
                if (!t.start.isDateWithUnknownYear()) return;
                let r = e.text.substring(t.index + t.text.length),
                    i = a.exec(r);
                if (!i || i[0].trim().length <= 3) return;
                e.debug(() => {
                    console.log(`Extracting year: '${i[0]}' into : ${t}`);
                });
                let s = (0, n.parseYear)(i[1]);
                null != t.end && t.end.assign("year", s), t.start.assign("year", s), (t.text += i[0]);
            }),
            t
        );
    }
};
