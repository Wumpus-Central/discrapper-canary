Object.defineProperty(t, '__esModule', { value: !0 }), (t.stringFormatter = t.StringBuilder = void 0), (t.formatToPlainString = o);
let r = n(481078);
class i extends r.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, t, n) {
        for (let e of t) this.result += e;
    }
    pushLiteralText(e) {
        this.result += e;
    }
    pushObject(e) {
        null != e && 'toString' in e && (this.result += e.toString());
    }
    finish() {
        return [this.result];
    }
}
function o(e, t) {
    return 'string' == typeof e ? e : this.bindFormatValues(i, e, t)[0];
}
(t.StringBuilder = i),
    (t.stringFormatter = {
        format: o,
        builder: i
    });
