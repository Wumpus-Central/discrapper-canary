var n =
    (this && this.__importDefault) ||
    function (e) {
        return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(t, "__esModule", { value: !0 }), (t.ParsingContext = t.Chrono = void 0);
let a = r(115835),
    i = n(r(614583));
class s {
    constructor(e) {
        (this.defaultConfig = new i.default()),
            (e = e || this.defaultConfig.createCasualConfiguration()),
            (this.parsers = [...e.parsers]),
            (this.refiners = [...e.refiners]);
    }
    clone() {
        return new s({ parsers: [...this.parsers], refiners: [...this.refiners] });
    }
    parseDate(e, t, r) {
        let n = this.parse(e, t, r);
        return n.length > 0 ? n[0].start.date() : null;
    }
    parse(e, t, r) {
        let n = new o(e, t, r),
            a = [];
        return (
            this.parsers.forEach((e) => {
                let t = s.executeParser(n, e);
                a = a.concat(t);
            }),
            a.sort((e, t) => e.index - t.index),
            this.refiners.forEach(function (e) {
                a = e.refine(n, a);
            }),
            a
        );
    }
    static executeParser(e, t) {
        let r = [],
            n = t.pattern(e),
            i = e.text,
            s = e.text,
            o = n.exec(s);
        for (; o; ) {
            let u = o.index + i.length - s.length;
            o.index = u;
            let l = t.extract(e, o);
            if (!l) {
                (s = i.substring(o.index + 1)), (o = n.exec(s));
                continue;
            }
            let d = null;
            l instanceof a.ParsingResult
                ? (d = l)
                : l instanceof a.ParsingComponents
                  ? ((d = e.createParsingResult(o.index, o[0])).start = l)
                  : (d = e.createParsingResult(o.index, o[0], l));
            let c = d.index,
                m = d.text;
            e.debug(() => console.log(`${t.constructor.name} extracted (at index=${c}) '${m}'`)),
                r.push(d),
                (s = i.substring(c + m.length)),
                (o = n.exec(s));
        }
        return r;
    }
}
t.Chrono = s;
class o {
    constructor(e, t, r) {
        (this.text = e),
            (this.option = null != r ? r : {}),
            (this.reference = a.ReferenceWithTimezone.fromInput(t, this.option.timezones)),
            (this.refDate = this.reference.instant);
    }
    createParsingComponents(e) {
        return e instanceof a.ParsingComponents ? e : new a.ParsingComponents(this.reference, e);
    }
    createParsingResult(e, t, r, n) {
        let i = "string" == typeof t ? t : this.text.substring(e, t),
            s = r ? this.createParsingComponents(r) : null,
            o = n ? this.createParsingComponents(n) : null;
        return new a.ParsingResult(this.reference, e, i, s, o);
    }
    debug(e) {
        this.option.debug &&
            (this.option.debug instanceof Function ? this.option.debug(e) : this.option.debug.debug(e));
    }
}
t.ParsingContext = o;
