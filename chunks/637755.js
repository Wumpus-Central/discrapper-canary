Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(88559);
class a extends n.Filter {
    constructor() {
        super();
    }
    isValid(e, t) {
        let r = t.text.trim();
        return (
            r === e.text.trim() ||
            ("may" !== r.toLowerCase() ||
            e.text
                .substring(0, t.index)
                .trim()
                .match(/\b(in)$/i)
                ? !r.toLowerCase().endsWith("the second") ||
                  (e.text.substring(t.index + t.text.length).trim().length > 0 &&
                      e.debug(() => {
                          console.log(`Removing unlikely result: ${t}`);
                      }),
                  !1)
                : (e.debug(() => {
                      console.log(`Removing unlikely result: ${t}`);
                  }),
                  !1))
        );
    }
}
t.default = a;
