Object.defineProperty(t, '__esModule', { value: !0 }), (t.stringFormatter = t.StringBuilder = void 0), (t.formatToPlainString = a);
let i = n(903197);
class r extends i.FormatBuilder {
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
function a(e, t) {
    return 'string' == typeof e ? e : this.bindFormatValues(r, e, t)[0];
}
(t.StringBuilder = r),
    (t.stringFormatter = {
        format: a,
        builder: r
    });
